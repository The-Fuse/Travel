export const people={
 me:{id:'me',name:'Rohit Kumar',handle:'rohitwanders',bio:'Taking the scenic route. Collecting little moments along the way.',location:'Bengaluru, India',initials:'RK',color:'sage'},
 maya:{id:'maya',name:'Maya Chen',handle:'mayainmotion',bio:'Early trains, quiet streets, and a very full camera roll.',location:'Singapore',initials:'MC',color:'rose'},
 alex:{id:'alex',name:'Alex Morgan',handle:'alexoutside',bio:'Happiest somewhere between the mountains and a lake.',location:'London, UK',initials:'AM',color:'blue'}
};
export const travelImages={japan:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',alps:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85',mountains:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',forest:'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85'};
function seed(id,title,place,author,category,start,locations){const photos=locations.map((v,i)=>({id:`${id}-${i}`,src:v[1],place:v[0],gps:{lat:v[2],lng:v[3]},takenAt:`${start.slice(0,8)}${String(Number(start.slice(8))+i).padStart(2,'0')}T09:00:00`,caption:v[0],source:'sample'}));return {id,title,place,author,category,start,end:photos.at(-1).takenAt.slice(0,10),caption:locations[0][4],cover:photos[0].id,photos,annotations:Object.fromEntries(locations.map((v,i)=>[photos[i].id,{name:v[0],notes:[v[4]],highlight:v[5]}])),radius:150,audience:'everyone',demo:true};}
export const communityJourneys=[
 seed('kyoto','The quieter side of Kyoto.','Kyoto, Japan','maya','City','2026-05-08',[
 ['Higashiyama',travelImages.japan,34.9984,135.7808,'We followed the small streets, not the crowds. This is the Kyoto I want to come back to.','Before the city wakes'],
 ['Arashiyama',travelImages.forest,35.0168,135.6713,'Leave the main path behind and listen to the bamboo. The smaller trails were our favorite part.','Take the little detour'],
 ['Kyoto evenings',travelImages.japan,35.0031,135.778,'No itinerary for the last evening. Just a walk and one more bowl of noodles.','One more evening']]),
 seed('alps','Somewhere, time slowed down.','Swiss Alps, Switzerland','alex','Mountains','2026-07-02',[
 ['Lake Brienz',travelImages.alps,46.7266,7.9622,'A lakeside bench, a packed lunch, and absolutely nowhere to rush. The best kind of afternoon.','Bring a picnic'],
 ['Lauterbrunnen',travelImages.mountains,46.5935,7.9091,'We took the first train into the valley and spent the morning wandering. Leave room for the unplanned stops.','Start with the first train'],
 ['Interlaken',travelImages.alps,46.6863,7.8632,'One last slow morning by the water. We already have reasons to come back.','A view worth keeping']])
];
