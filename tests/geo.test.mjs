import test from 'node:test';
import assert from 'node:assert/strict';
import {groupPhotos,validGPS,distanceMeters} from '../dist/geo.mjs';
const photo=(id,lat,lng,t='2026-06-12T10:00:00Z')=>({id,gps:{lat,lng},takenAt:t,source:'gps'});
test('nearby photos share a stop; absent or invalid GPS stays unplaced',()=>{
 const groups=groupPhotos([photo('a',40,14),photo('b',40.0001,14.0001),photo('c',41,15),{id:'d',gps:null},photo('e',Infinity,20)],150);
 assert.deepEqual(groups.map(g=>g.photos.map(p=>p.id)),[['a','b'],['c']]);
 assert.equal(validGPS({lat:0,lng:0}),true);assert.equal(validGPS({lat:null,lng:0}),false);
});
test('radius boundaries do not chain distant photos into the same stop',()=>{
 const groups=groupPhotos([photo('a',0,0),photo('b',0,.001),photo('c',0,.002)],150);
 assert.deepEqual(groups.map(g=>g.photos.map(p=>p.id)),[['a','b'],['c']]);
 assert.equal(groupPhotos([photo('a',0,0),photo('b',0,.001)],50).length,2);
});
test('stops follow capture order and retain notes when groups merge',()=>{
 const photos=[photo('later',40,14,'2026-06-13T10:00:00Z'),photo('early',40.0002,14.0002,'2026-06-12T10:00:00Z')];
 const grouped=groupPhotos(photos,150,{later:{name:'Cafe',notes:['Best coffee']},early:{notes:['Morning view']}});
 assert.equal(grouped[0].id,'early');assert.deepEqual(grouped[0].notes,['Morning view','Best coffee']);assert.equal(grouped[0].name,'Cafe');
});
test('manual coordinates join a known location; missing time has stable input order',()=>{
 const groups=groupPhotos([photo('a',40,14),{...photo('b',40,14,null),source:'manual'},photo('c',42,16,null)]);
 assert.equal(groups[0].source,'Placed by you');assert.deepEqual(groups.map(g=>g.id),['a','c']);
 assert.ok(distanceMeters({lat:0,lng:179.999},{lat:0,lng:-179.999})<225);
 assert.throws(()=>groupPhotos([],0));
});
