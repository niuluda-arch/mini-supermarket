const catalog=require('./catalog');
const money=value=>(value/100).toFixed(2);
function add(cart,id,qty=1){if(!catalog.some(p=>p.id===id))return cart;const found=cart.some(i=>i.id===id);return found?cart.map(i=>i.id===id?{...i,qty:Math.min(99,i.qty+qty)}:i):[...cart,{id,qty:Math.min(99,Math.max(1,qty)),selected:true}];}
function summary(cart,coupon){const chosen=cart.filter(i=>i.selected);const subtotal=chosen.reduce((s,i)=>s+catalog.find(p=>p.id===i.id).price*i.qty,0);const discount=coupon&&subtotal>=3900?1000:0;return {count:chosen.reduce((s,i)=>s+i.qty,0),subtotal,discount,total:subtotal-discount};}
function filter(category,query,promo){return catalog.filter(p=>(category==='全部'||p.category===category)&&(!query||p.name.includes(query)||p.detail.includes(query))&&(!promo||p.id==='apple'||p.id==='grape'));}
module.exports={money,add,summary,filter};
