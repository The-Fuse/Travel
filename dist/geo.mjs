export const validGPS = p => Number.isFinite(p?.lat) && Number.isFinite(p?.lng) && Math.abs(p.lat)<=90 && Math.abs(p.lng)<=180;
export function distanceMeters(a,b){const r=Math.PI/180,dLat=(b.lat-a.lat)*r,dLon=(b.lng-a.lng)*r;const h=Math.sin(dLat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLon/2)**2;return 6371000*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));}
export function groupPhotos(photos,radius=150,annotations={}){
 if(!Number.isFinite(radius)||radius<=0)throw new Error('Choose a positive grouping radius.');
 const located=photos.filter(p=>validGPS(p.gps)).map((p,i)=>({...p,order:i})).sort((a,b)=>(a.takenAt?Date.parse(a.takenAt):Infinity)-(b.takenAt?Date.parse(b.takenAt):Infinity)||a.order-b.order);
 const groups=[];
 for(const p of located){let match=null,best=Infinity;for(const g of groups){const d=distanceMeters(g.gps,p.gps);if(d<=radius&&d<best){match=g;best=d;}}if(match)match.photos.push(p);else groups.push({id:p.id,gps:{...p.gps},photos:[p],takenAt:p.takenAt});}
 return groups.map((g,i)=>{const records=g.photos.map(p=>annotations[p.id]).filter(Boolean);return {...g,index:i,name:records.find(a=>a.name)?.name||g.photos.find(p=>p.place)?.place||`Stop ${i+1}`,notes:[...new Set(records.flatMap(a=>a.notes||[]).filter(Boolean))],highlight:records.find(a=>a.highlight)?.highlight||'',source:g.photos.some(p=>p.source==='manual')?'Placed by you':g.photos.every(p=>p.source==='sample')?'Sample locations':'From photo locations'};});
}
