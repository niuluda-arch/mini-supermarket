const fs=require('node:fs');
const socket=new WebSocket('ws://127.0.0.1:9420');
let counter=0;const pending=new Map();
function call(method,params={}){return new Promise((resolve,reject)=>{const id=String(++counter);pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});}
socket.onmessage=({data})=>{const m=JSON.parse(data);const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}};
socket.onopen=async()=>{try{console.log('PAGE',await call('App.getCurrentPage'));const r=await call('App.captureScreenshot');console.log('CAPTURE',Object.keys(r));if(r.data)fs.writeFileSync('tmp/home.png',Buffer.from(r.data,'base64'));}catch(e){console.error(e);}finally{socket.close();}};
setTimeout(()=>{console.error('Screenshot timed out after 35 seconds');process.exit(1);},35000);
