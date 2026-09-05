/*v0.5vv_20211229_syb_scopedata*/window.__wcc_version__='v0.5vv_20211229_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shell'])
Z([[2,'||'],[[2,'==='],[[7],[3,'tab']],[1,'首页']],[[2,'==='],[[7],[3,'tab']],[1,'分类']]])
Z([3,'row location-row'])
Z([3,'openPanel'])
Z([3,'address'])
Z(z[4])
Z([3,'row'])
Z([3,'icon'])
Z([3,'图标占位'])
Z([3,'address-text'])
Z([a,[[7],[3,'address']]])
Z(z[7])
Z(z[8])
Z([3,'muted small'])
Z([3,'1小时达 · 满39免配送费'])
Z(z[3])
Z([3,'notice'])
Z([3,'messages'])
Z(z[8])
Z([3,'search row'])
Z(z[7])
Z(z[8])
Z([3,'search'])
Z([3,'inputSearch'])
Z(z[22])
Z([3,'搜索：牛奶、西瓜、纸巾…'])
Z([[7],[3,'query']])
Z(z[26])
Z([3,'clearSearch'])
Z([3,'text-button'])
Z([3,'清空'])
Z(z[22])
Z(z[29])
Z([3,'搜索'])
Z([[2,'==='],[[7],[3,'tab']],[1,'首页']])
Z([3,'banner row'])
Z([3,'banner-title'])
Z([3,'新鲜直达 · 限时特惠'])
Z([3,'small'])
Z([3,'生鲜满39减10，天天有低价'])
Z([3,'promotion'])
Z([3,'马上去抢'])
Z([3,'banner-image placeholder'])
Z([3,'图片占位'])
Z([3,'row section'])
Z([3,'title'])
Z([a,[[2,'?:'],[[7],[3,'promo']],[1,'限时特惠'],[[2,'?:'],[[2,'==='],[[7],[3,'tab']],[1,'分类']],[1,'全部商品'],[1,'今日推荐']]]])
Z([3,'viewAll'])
Z([3,'text-button muted'])
Z([3,'查看全部 '])
Z(z[7])
Z(z[8])
Z([3,'categories'])
Z([3,'category-row'])
Z([[7],[3,'categories']])
Z([3,'*this'])
Z([3,'chooseCategory'])
Z([a,[3,'pill '],[[2,'?:'],[[2,'==='],[[7],[3,'category']],[[7],[3,'item']]],[1,'selected'],[1,'']]])
Z([[7],[3,'item']])
Z([a,[[7],[3,'item']]])
Z([[2,'||'],[[7],[3,'submitted']],[[7],[3,'promo']]])
Z([3,'row filter-note'])
Z([a,[[2,'?:'],[[7],[3,'promo']],[1,'活动商品'],[[2,'+'],[1,'搜索：'],[[7],[3,'submitted']]]]])
Z(z[28])
Z(z[29])
Z([3,'重置'])
Z([[2,'==='],[[7],[3,'status']],[1,'loading']])
Z([3,'empty'])
Z([3,'正在加载商品…'])
Z([[2,'==='],[[7],[3,'status']],[1,'error']])
Z(z[67])
Z([3,'商品加载失败，请重试'])
Z([3,'loadProducts'])
Z([3,'重新加载'])
Z([[2,'!'],[[6],[[7],[3,'products']],[3,'length']]])
Z(z[67])
Z([3,'没有找到匹配商品'])
Z(z[28])
Z([3,'查看全部商品'])
Z([3,'grid'])
Z([[7],[3,'products']])
Z([3,'id'])
Z([3,'product'])
Z([3,'openDetail'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'product-image placeholder'])
Z(z[43])
Z([3,'product-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'muted small product-detail'])
Z([a,[[6],[[7],[3,'item']],[3,'detail']]])
Z(z[6])
Z([3,'price'])
Z([a,[3,'¥'],[[6],[[7],[3,'item']],[3,'priceText']]])
Z([3,'old'])
Z([a,z[93][1],[[6],[[7],[3,'item']],[3,'oldText']]])
Z([3,'加入购物车'])
Z([3,'addProduct'])
Z([3,'add'])
Z(z[84])
Z(z[8])
Z([[2,'==='],[[7],[3,'tab']],[1,'购物车']])
Z(z[6])
Z(z[45])
Z([3,'购物车'])
Z([3,'edit'])
Z(z[29])
Z([a,[[2,'?:'],[[7],[3,'editing']],[1,'完成'],[1,'编辑']]])
Z([[2,'!'],[[6],[[7],[3,'cartRows']],[3,'length']]])
Z(z[67])
Z([3,'购物车还是空的'])
Z([3,'goHome'])
Z([3,'primary'])
Z([3,'去挑选商品'])
Z([3,'store section'])
Z([3,'toggleAll'])
Z([3,'store-heading text-button'])
Z([a,[[2,'?:'],[[7],[3,'allSelected']],[1,'已全选'],[1,'全选']],[3,' · 惠民超市旗舰店']])
Z([[7],[3,'cartRows']])
Z(z[81])
Z([3,'cart-item'])
Z([3,'toggleItem'])
Z([a,[3,'check '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'selected'],[1,'']]])
Z(z[84])
Z([a,[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'已选'],[1,'选中']]])
Z(z[83])
Z([3,'cart-image placeholder'])
Z(z[84])
Z(z[43])
Z([3,'cart-info'])
Z(z[87])
Z([a,z[88][1]])
Z([3,'small muted'])
Z([a,z[90][1]])
Z(z[6])
Z(z[92])
Z([a,z[93][1],z[93][2]])
Z([3,'stepper'])
Z([3,'quantity'])
Z([3,'-1'])
Z(z[84])
Z([[2,'<='],[[6],[[7],[3,'item']],[3,'qty']],[1,1]])
Z([3,'减'])
Z([a,[[6],[[7],[3,'item']],[3,'qty']]])
Z(z[138])
Z([3,'1'])
Z(z[84])
Z([[2,'>='],[[6],[[7],[3,'item']],[3,'qty']],[1,99]])
Z([3,'加'])
Z([[7],[3,'editing']])
Z([3,'remove'])
Z(z[29])
Z(z[84])
Z([3,'删除商品'])
Z([[6],[[7],[3,'cartRows']],[3,'length']])
Z([3,'coupon'])
Z([3,'coupon row section'])
Z([3,'优惠券 · 满39减10'])
Z([a,[[2,'?:'],[[7],[3,'coupon']],[1,'取消使用'],[1,'使用']]])
Z(z[44])
Z(z[45])
Z([3,'猜你喜欢'])
Z([3,'rotate'])
Z(z[29])
Z([3,'换一批'])
Z([3,'grid section'])
Z([[7],[3,'recommendations']])
Z(z[81])
Z(z[82])
Z(z[83])
Z(z[85])
Z(z[84])
Z(z[43])
Z(z[87])
Z([a,z[88][1]])
Z(z[6])
Z(z[92])
Z([a,z[93][1],z[93][2]])
Z(z[97])
Z(z[98])
Z(z[84])
Z(z[8])
Z([3,'checkout-bar row'])
Z(z[132])
Z([a,[3,'已优惠 ¥'],[[7],[3,'discount']]])
Z([3,'合计 '])
Z(z[92])
Z([a,z[93][1],[[7],[3,'total']]])
Z([3,'checkout'])
Z(z[112])
Z([[2,'!'],[[7],[3,'selectedCount']]])
Z([a,[3,'去结算('],[[7],[3,'selectedCount']],[3,')']])
Z([[2,'==='],[[7],[3,'tab']],[1,'我的']])
Z(z[45])
Z([3,'我的'])
Z([3,'profile section row'])
Z([3,'avatar placeholder'])
Z(z[43])
Z(z[45])
Z([3,'超市体验用户'])
Z(z[13])
Z([3,'欢迎来逛逛'])
Z([3,'showOrders'])
Z([3,'menu'])
Z([a,[3,'我的订单（'],[[6],[[7],[3,'orders']],[3,'length']],[3,'）']])
Z(z[3])
Z(z[203])
Z(z[4])
Z([3,'配送地址'])
Z(z[3])
Z(z[203])
Z(z[17])
Z([3,'消息通知'])
Z(z[3])
Z(z[203])
Z([3,'states'])
Z([3,'原型状态预览'])
Z([3,'nav-wrap'])
Z([3,'nav'])
Z([[7],[3,'tabs']])
Z(z[55])
Z([3,'switchTab'])
Z([a,[3,'nav-item '],[[2,'?:'],[[2,'==='],[[7],[3,'tab']],[[7],[3,'item']]],[1,'selected'],[1,'']]])
Z(z[58])
Z(z[7])
Z(z[8])
Z([a,z[59][1]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'item']],[1,'购物车']],[[7],[3,'cartCount']]])
Z([a,[3,'('],[[7],[3,'cartCount']],z[191][3]])
Z([[7],[3,'panel']])
Z([3,'closePanel'])
Z([3,'overlay'])
Z([3,'noop'])
Z([3,'sheet'])
Z([3,'row sheet-heading'])
Z(z[45])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'address']],[1,'选择配送地址'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'detail']],[1,'商品详情'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'checkout']],[1,'确认订单'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'success']],[1,'提交成功'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'orders']],[1,'我的订单'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'states']],[1,'原型状态预览'],[1,'消息通知']]]]]]]])
Z(z[230])
Z(z[29])
Z([3,'返回'])
Z([3,'sheet-body'])
Z([[2,'==='],[[7],[3,'panel']],[1,'address']])
Z([[7],[3,'addresses']])
Z(z[55])
Z([3,'chooseAddress'])
Z([a,[3,'menu '],[[2,'?:'],[[2,'==='],[[7],[3,'addressDraft']],[[7],[3,'item']]],[1,'selected'],[1,'']]])
Z(z[58])
Z([a,z[59][1]])
Z([3,'saveAddress'])
Z([3,'primary section'])
Z([3,'确认地址'])
Z([[2,'==='],[[7],[3,'panel']],[1,'messages']])
Z(z[203])
Z([3,'预计1小时送达，满39元免配送费。'])
Z(z[203])
Z([3,'今日生鲜优惠：满39元减10元。'])
Z([[2,'==='],[[7],[3,'panel']],[1,'detail']])
Z([3,'detail-image placeholder'])
Z(z[43])
Z([3,'title section'])
Z([a,[[6],[[7],[3,'detail']],[3,'name']]])
Z([3,'muted section'])
Z([a,[[6],[[7],[3,'detail']],[3,'detail']]])
Z(z[44])
Z(z[92])
Z([a,z[93][1],[[6],[[7],[3,'detail']],[3,'priceText']]])
Z(z[137])
Z([3,'detailQuantity'])
Z(z[139])
Z([[2,'<='],[[7],[3,'detailQty']],[1,1]])
Z(z[142])
Z([a,[[7],[3,'detailQty']]])
Z(z[267])
Z(z[145])
Z([[2,'>='],[[7],[3,'detailQty']],[1,99]])
Z(z[148])
Z([3,'addDetail'])
Z(z[249])
Z([3,'加入购物车'])
Z([[2,'==='],[[7],[3,'panel']],[1,'checkout']])
Z(z[203])
Z([a,[3,'配送至：'],z[10][1]])
Z(z[203])
Z([a,[3,'共 '],z[191][2],[3,' 件商品 · 商品金额 ¥'],[[7],[3,'subtotal']]])
Z(z[203])
Z([a,[3,'优惠 ¥'],z[184][2],[3,' · 应付 ¥'],z[187][2]])
Z([3,'small muted section'])
Z([3,'本次为模拟订单，不会付款或实际配送。'])
Z([3,'submitOrder'])
Z(z[249])
Z([[2,'==='],[[7],[3,'status']],[1,'submitting']])
Z(z[290])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'submitting']],[1,'正在提交'],[1,'确认提交模拟订单']]])
Z([[2,'==='],[[7],[3,'panel']],[1,'success']])
Z(z[67])
Z([3,'模拟订单提交成功，可在“我的订单”查看。'])
Z(z[202])
Z(z[112])
Z([3,'查看订单'])
Z(z[111])
Z([3,'section'])
Z([3,'继续购物'])
Z([[2,'==='],[[7],[3,'panel']],[1,'orders']])
Z([[2,'!'],[[6],[[7],[3,'orders']],[3,'length']]])
Z(z[67])
Z([3,'还没有订单'])
Z([[7],[3,'orders']])
Z(z[81])
Z(z[203])
Z([a,[3,'模拟订单 · '],[[6],[[7],[3,'item']],[3,'count']],[3,'件 · ¥'],[[6],[[7],[3,'item']],[3,'total']]])
Z(z[132])
Z([a,[[6],[[7],[3,'item']],[3,'address']]])
Z([[2,'==='],[[7],[3,'panel']],[1,'states']])
Z(z[132])
Z([3,'仅用于检查原型状态，返回“查看全部商品”可恢复。'])
Z([3,'simulate'])
Z(z[203])
Z([3,'loading'])
Z([3,'加载中'])
Z(z[315])
Z(z[203])
Z(z[67])
Z([3,'空列表'])
Z(z[315])
Z(z[203])
Z([3,'error'])
Z([3,'加载失败与重试'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['pages/shop/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
var oJ=_n('view')
_rz(z,oJ,'class',2,e,s,gg)
var lK=_mz(z,'view',['bindtap',3,'class',1,'data-panel',2],[],e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',6,e,s,gg)
var tM=_n('text')
_rz(z,tM,'class',7,e,s,gg)
var eN=_oz(z,8,e,s,gg)
_(tM,eN)
_(aL,tM)
var bO=_n('text')
_rz(z,bO,'class',9,e,s,gg)
var oP=_oz(z,10,e,s,gg)
_(bO,oP)
_(aL,bO)
var xQ=_n('text')
_rz(z,xQ,'class',11,e,s,gg)
var oR=_oz(z,12,e,s,gg)
_(xQ,oR)
_(aL,xQ)
_(lK,aL)
var fS=_n('view')
_rz(z,fS,'class',13,e,s,gg)
var cT=_oz(z,14,e,s,gg)
_(fS,cT)
_(lK,fS)
_(oJ,lK)
var hU=_mz(z,'button',['bindtap',15,'class',1,'data-panel',2],[],e,s,gg)
var oV=_oz(z,18,e,s,gg)
_(hU,oV)
_(oJ,hU)
_(oD,oJ)
var cW=_n('view')
_rz(z,cW,'class',19,e,s,gg)
var lY=_n('text')
_rz(z,lY,'class',20,e,s,gg)
var aZ=_oz(z,21,e,s,gg)
_(lY,aZ)
_(cW,lY)
var t1=_mz(z,'input',['bindconfirm',22,'bindinput',1,'confirmType',2,'placeholder',3,'value',4],[],e,s,gg)
_(cW,t1)
var oX=_v()
_(cW,oX)
if(_oz(z,27,e,s,gg)){oX.wxVkey=1
var e2=_mz(z,'button',['bindtap',28,'class',1],[],e,s,gg)
var b3=_oz(z,30,e,s,gg)
_(e2,b3)
_(oX,e2)
}
var o4=_mz(z,'button',['bindtap',31,'class',1],[],e,s,gg)
var x5=_oz(z,33,e,s,gg)
_(o4,x5)
_(cW,o4)
oX.wxXCkey=1
_(oD,cW)
var hG=_v()
_(oD,hG)
if(_oz(z,34,e,s,gg)){hG.wxVkey=1
var o6=_n('view')
_rz(z,o6,'class',35,e,s,gg)
var f7=_n('view')
var c8=_n('view')
_rz(z,c8,'class',36,e,s,gg)
var h9=_oz(z,37,e,s,gg)
_(c8,h9)
_(f7,c8)
var o0=_n('view')
_rz(z,o0,'class',38,e,s,gg)
var cAB=_oz(z,39,e,s,gg)
_(o0,cAB)
_(f7,o0)
var oBB=_n('button')
_rz(z,oBB,'bindtap',40,e,s,gg)
var lCB=_oz(z,41,e,s,gg)
_(oBB,lCB)
_(f7,oBB)
_(o6,f7)
var aDB=_n('view')
_rz(z,aDB,'class',42,e,s,gg)
var tEB=_oz(z,43,e,s,gg)
_(aDB,tEB)
_(o6,aDB)
_(hG,o6)
}
var eFB=_n('view')
_rz(z,eFB,'class',44,e,s,gg)
var bGB=_n('text')
_rz(z,bGB,'class',45,e,s,gg)
var oHB=_oz(z,46,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
var xIB=_mz(z,'button',['bindtap',47,'class',1],[],e,s,gg)
var oJB=_oz(z,49,e,s,gg)
_(xIB,oJB)
var fKB=_n('text')
_rz(z,fKB,'class',50,e,s,gg)
var cLB=_oz(z,51,e,s,gg)
_(fKB,cLB)
_(xIB,fKB)
_(eFB,xIB)
_(oD,eFB)
var hMB=_mz(z,'scroll-view',['scrollX',-1,'class',52],[],e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',53,e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_mz(z,'button',['bindtap',56,'class',1,'data-category',2],[],aRB,lQB,gg)
var oVB=_oz(z,59,aRB,lQB,gg)
_(bUB,oVB)
_(tSB,bUB)
return tSB
}
cOB.wxXCkey=2
_2z(z,54,oPB,e,s,gg,cOB,'item','index','*this')
_(hMB,oNB)
_(oD,hMB)
var oH=_v()
_(oD,oH)
if(_oz(z,60,e,s,gg)){oH.wxVkey=1
var xWB=_n('view')
_rz(z,xWB,'class',61,e,s,gg)
var oXB=_n('text')
var fYB=_oz(z,62,e,s,gg)
_(oXB,fYB)
_(xWB,oXB)
var cZB=_mz(z,'button',['bindtap',63,'class',1],[],e,s,gg)
var h1B=_oz(z,65,e,s,gg)
_(cZB,h1B)
_(xWB,cZB)
_(oH,xWB)
}
var cI=_v()
_(oD,cI)
if(_oz(z,66,e,s,gg)){cI.wxVkey=1
var o2B=_n('view')
_rz(z,o2B,'class',67,e,s,gg)
var c3B=_oz(z,68,e,s,gg)
_(o2B,c3B)
_(cI,o2B)
}
else if(_oz(z,69,e,s,gg)){cI.wxVkey=2
var o4B=_n('view')
_rz(z,o4B,'class',70,e,s,gg)
var l5B=_oz(z,71,e,s,gg)
_(o4B,l5B)
var a6B=_n('button')
_rz(z,a6B,'bindtap',72,e,s,gg)
var t7B=_oz(z,73,e,s,gg)
_(a6B,t7B)
_(o4B,a6B)
_(cI,o4B)
}
else if(_oz(z,74,e,s,gg)){cI.wxVkey=3
var e8B=_n('view')
_rz(z,e8B,'class',75,e,s,gg)
var b9B=_oz(z,76,e,s,gg)
_(e8B,b9B)
var o0B=_n('button')
_rz(z,o0B,'bindtap',77,e,s,gg)
var xAC=_oz(z,78,e,s,gg)
_(o0B,xAC)
_(e8B,o0B)
_(cI,e8B)
}
else{cI.wxVkey=4
var oBC=_n('view')
_rz(z,oBC,'class',79,e,s,gg)
var fCC=_v()
_(oBC,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_n('view')
_rz(z,lIC,'class',82,oFC,hEC,gg)
var aJC=_mz(z,'view',['bindtap',83,'data-id',1],[],oFC,hEC,gg)
var tKC=_n('view')
_rz(z,tKC,'class',85,oFC,hEC,gg)
var eLC=_oz(z,86,oFC,hEC,gg)
_(tKC,eLC)
_(aJC,tKC)
var bMC=_n('view')
_rz(z,bMC,'class',87,oFC,hEC,gg)
var oNC=_oz(z,88,oFC,hEC,gg)
_(bMC,oNC)
_(aJC,bMC)
var xOC=_n('view')
_rz(z,xOC,'class',89,oFC,hEC,gg)
var oPC=_oz(z,90,oFC,hEC,gg)
_(xOC,oPC)
_(aJC,xOC)
_(lIC,aJC)
var fQC=_n('view')
_rz(z,fQC,'class',91,oFC,hEC,gg)
var cRC=_n('view')
var hSC=_n('text')
_rz(z,hSC,'class',92,oFC,hEC,gg)
var oTC=_oz(z,93,oFC,hEC,gg)
_(hSC,oTC)
_(cRC,hSC)
var cUC=_n('text')
_rz(z,cUC,'class',94,oFC,hEC,gg)
var oVC=_oz(z,95,oFC,hEC,gg)
_(cUC,oVC)
_(cRC,cUC)
_(fQC,cRC)
var lWC=_mz(z,'button',['ariaLabel',96,'bindtap',1,'class',2,'data-id',3],[],oFC,hEC,gg)
var aXC=_oz(z,100,oFC,hEC,gg)
_(lWC,aXC)
_(fQC,lWC)
_(lIC,fQC)
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=2
_2z(z,80,cDC,e,s,gg,fCC,'item','index','id')
_(cI,oBC)
}
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,101,e,s,gg)){fE.wxVkey=1
var b1C=_n('view')
_rz(z,b1C,'class',102,e,s,gg)
var o2C=_n('text')
_rz(z,o2C,'class',103,e,s,gg)
var x3C=_oz(z,104,e,s,gg)
_(o2C,x3C)
_(b1C,o2C)
var o4C=_mz(z,'button',['bindtap',105,'class',1],[],e,s,gg)
var f5C=_oz(z,107,e,s,gg)
_(o4C,f5C)
_(b1C,o4C)
_(fE,b1C)
var tYC=_v()
_(fE,tYC)
if(_oz(z,108,e,s,gg)){tYC.wxVkey=1
var c6C=_n('view')
_rz(z,c6C,'class',109,e,s,gg)
var h7C=_oz(z,110,e,s,gg)
_(c6C,h7C)
var o8C=_mz(z,'button',['bindtap',111,'class',1],[],e,s,gg)
var c9C=_oz(z,113,e,s,gg)
_(o8C,c9C)
_(c6C,o8C)
_(tYC,c6C)
}
else{tYC.wxVkey=2
var o0C=_n('view')
_rz(z,o0C,'class',114,e,s,gg)
var lAD=_mz(z,'button',['bindtap',115,'class',1],[],e,s,gg)
var aBD=_oz(z,117,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_v()
_(o0C,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_n('view')
_rz(z,fID,'class',120,oFD,bED,gg)
var cJD=_mz(z,'button',['bindtap',121,'class',1,'data-id',2],[],oFD,bED,gg)
var hKD=_oz(z,124,oFD,bED,gg)
_(cJD,hKD)
_(fID,cJD)
var oLD=_mz(z,'view',['bindtap',125,'class',1,'data-id',2],[],oFD,bED,gg)
var cMD=_oz(z,128,oFD,bED,gg)
_(oLD,cMD)
_(fID,oLD)
var oND=_n('view')
_rz(z,oND,'class',129,oFD,bED,gg)
var aPD=_n('view')
_rz(z,aPD,'class',130,oFD,bED,gg)
var tQD=_oz(z,131,oFD,bED,gg)
_(aPD,tQD)
_(oND,aPD)
var eRD=_n('view')
_rz(z,eRD,'class',132,oFD,bED,gg)
var bSD=_oz(z,133,oFD,bED,gg)
_(eRD,bSD)
_(oND,eRD)
var oTD=_n('view')
_rz(z,oTD,'class',134,oFD,bED,gg)
var xUD=_n('text')
_rz(z,xUD,'class',135,oFD,bED,gg)
var oVD=_oz(z,136,oFD,bED,gg)
_(xUD,oVD)
_(oTD,xUD)
var fWD=_n('view')
_rz(z,fWD,'class',137,oFD,bED,gg)
var cXD=_mz(z,'button',['bindtap',138,'data-delta',1,'data-id',2,'disabled',3],[],oFD,bED,gg)
var hYD=_oz(z,142,oFD,bED,gg)
_(cXD,hYD)
_(fWD,cXD)
var oZD=_n('text')
var c1D=_oz(z,143,oFD,bED,gg)
_(oZD,c1D)
_(fWD,oZD)
var o2D=_mz(z,'button',['bindtap',144,'data-delta',1,'data-id',2,'disabled',3],[],oFD,bED,gg)
var l3D=_oz(z,148,oFD,bED,gg)
_(o2D,l3D)
_(fWD,o2D)
_(oTD,fWD)
_(oND,oTD)
var lOD=_v()
_(oND,lOD)
if(_oz(z,149,oFD,bED,gg)){lOD.wxVkey=1
var a4D=_mz(z,'button',['bindtap',150,'class',1,'data-id',2],[],oFD,bED,gg)
var t5D=_oz(z,153,oFD,bED,gg)
_(a4D,t5D)
_(lOD,a4D)
}
lOD.wxXCkey=1
_(fID,oND)
_(xGD,fID)
return xGD
}
tCD.wxXCkey=2
_2z(z,118,eDD,e,s,gg,tCD,'item','index','id')
_(tYC,o0C)
}
var eZC=_v()
_(fE,eZC)
if(_oz(z,154,e,s,gg)){eZC.wxVkey=1
var e6D=_mz(z,'button',['bindtap',155,'class',1],[],e,s,gg)
var b7D=_n('text')
var o8D=_oz(z,157,e,s,gg)
_(b7D,o8D)
_(e6D,b7D)
var x9D=_n('text')
var o0D=_oz(z,158,e,s,gg)
_(x9D,o0D)
_(e6D,x9D)
_(eZC,e6D)
}
var fAE=_n('view')
_rz(z,fAE,'class',159,e,s,gg)
var cBE=_n('text')
_rz(z,cBE,'class',160,e,s,gg)
var hCE=_oz(z,161,e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
var oDE=_mz(z,'button',['bindtap',162,'class',1],[],e,s,gg)
var cEE=_oz(z,164,e,s,gg)
_(oDE,cEE)
_(fAE,oDE)
_(fE,fAE)
var oFE=_n('view')
_rz(z,oFE,'class',165,e,s,gg)
var lGE=_v()
_(oFE,lGE)
var aHE=function(eJE,tIE,bKE,gg){
var xME=_n('view')
_rz(z,xME,'class',168,eJE,tIE,gg)
var oNE=_mz(z,'view',['bindtap',169,'class',1,'data-id',2],[],eJE,tIE,gg)
var fOE=_oz(z,172,eJE,tIE,gg)
_(oNE,fOE)
_(xME,oNE)
var cPE=_n('view')
_rz(z,cPE,'class',173,eJE,tIE,gg)
var hQE=_oz(z,174,eJE,tIE,gg)
_(cPE,hQE)
_(xME,cPE)
var oRE=_n('view')
_rz(z,oRE,'class',175,eJE,tIE,gg)
var cSE=_n('text')
_rz(z,cSE,'class',176,eJE,tIE,gg)
var oTE=_oz(z,177,eJE,tIE,gg)
_(cSE,oTE)
_(oRE,cSE)
var lUE=_mz(z,'button',['bindtap',178,'class',1,'data-id',2],[],eJE,tIE,gg)
var aVE=_oz(z,181,eJE,tIE,gg)
_(lUE,aVE)
_(oRE,lUE)
_(xME,oRE)
_(bKE,xME)
return bKE
}
lGE.wxXCkey=2
_2z(z,166,aHE,e,s,gg,lGE,'item','index','id')
_(fE,oFE)
var tWE=_n('view')
_rz(z,tWE,'class',182,e,s,gg)
var eXE=_n('view')
var bYE=_n('view')
_rz(z,bYE,'class',183,e,s,gg)
var oZE=_oz(z,184,e,s,gg)
_(bYE,oZE)
_(eXE,bYE)
var x1E=_n('text')
var o2E=_oz(z,185,e,s,gg)
_(x1E,o2E)
_(eXE,x1E)
var f3E=_n('text')
_rz(z,f3E,'class',186,e,s,gg)
var c4E=_oz(z,187,e,s,gg)
_(f3E,c4E)
_(eXE,f3E)
_(tWE,eXE)
var h5E=_mz(z,'button',['bindtap',188,'class',1,'disabled',2],[],e,s,gg)
var o6E=_oz(z,191,e,s,gg)
_(h5E,o6E)
_(tWE,h5E)
_(fE,tWE)
tYC.wxXCkey=1
eZC.wxXCkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,192,e,s,gg)){cF.wxVkey=1
var c7E=_n('text')
_rz(z,c7E,'class',193,e,s,gg)
var o8E=_oz(z,194,e,s,gg)
_(c7E,o8E)
_(cF,c7E)
var l9E=_n('view')
_rz(z,l9E,'class',195,e,s,gg)
var a0E=_n('view')
_rz(z,a0E,'class',196,e,s,gg)
var tAF=_oz(z,197,e,s,gg)
_(a0E,tAF)
_(l9E,a0E)
var eBF=_n('view')
var bCF=_n('view')
_rz(z,bCF,'class',198,e,s,gg)
var oDF=_oz(z,199,e,s,gg)
_(bCF,oDF)
_(eBF,bCF)
var xEF=_n('text')
_rz(z,xEF,'class',200,e,s,gg)
var oFF=_oz(z,201,e,s,gg)
_(xEF,oFF)
_(eBF,xEF)
_(l9E,eBF)
_(cF,l9E)
var fGF=_mz(z,'button',['bindtap',202,'class',1],[],e,s,gg)
var cHF=_oz(z,204,e,s,gg)
_(fGF,cHF)
_(cF,fGF)
var hIF=_mz(z,'button',['bindtap',205,'class',1,'data-panel',2],[],e,s,gg)
var oJF=_oz(z,208,e,s,gg)
_(hIF,oJF)
_(cF,hIF)
var cKF=_mz(z,'button',['bindtap',209,'class',1,'data-panel',2],[],e,s,gg)
var oLF=_oz(z,212,e,s,gg)
_(cKF,oLF)
_(cF,cKF)
var lMF=_mz(z,'button',['bindtap',213,'class',1,'data-panel',2],[],e,s,gg)
var aNF=_oz(z,216,e,s,gg)
_(lMF,aNF)
_(cF,lMF)
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,xC)
var tOF=_n('view')
_rz(z,tOF,'class',217,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',218,e,s,gg)
var bQF=_v()
_(ePF,bQF)
var oRF=function(oTF,xSF,fUF,gg){
var hWF=_mz(z,'button',['bindtap',221,'class',1,'data-tab',2],[],oTF,xSF,gg)
var oXF=_n('view')
_rz(z,oXF,'class',224,oTF,xSF,gg)
var cYF=_oz(z,225,oTF,xSF,gg)
_(oXF,cYF)
_(hWF,oXF)
var oZF=_n('view')
var a2F=_oz(z,226,oTF,xSF,gg)
_(oZF,a2F)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,227,oTF,xSF,gg)){l1F.wxVkey=1
var t3F=_n('text')
var e4F=_oz(z,228,oTF,xSF,gg)
_(t3F,e4F)
_(l1F,t3F)
}
l1F.wxXCkey=1
_(hWF,oZF)
_(fUF,hWF)
return fUF
}
bQF.wxXCkey=2
_2z(z,219,oRF,e,s,gg,bQF,'item','index','*this')
_(tOF,ePF)
_(r,tOF)
var oB=_v()
_(r,oB)
if(_oz(z,229,e,s,gg)){oB.wxVkey=1
var b5F=_mz(z,'view',['bindtap',230,'class',1],[],e,s,gg)
var o6F=_mz(z,'view',['catchtap',232,'class',1],[],e,s,gg)
var x7F=_n('view')
_rz(z,x7F,'class',234,e,s,gg)
var o8F=_n('text')
_rz(z,o8F,'class',235,e,s,gg)
var f9F=_oz(z,236,e,s,gg)
_(o8F,f9F)
_(x7F,o8F)
var c0F=_mz(z,'button',['bindtap',237,'class',1],[],e,s,gg)
var hAG=_oz(z,239,e,s,gg)
_(c0F,hAG)
_(x7F,c0F)
_(o6F,x7F)
var oBG=_mz(z,'scroll-view',['scrollY',-1,'class',240],[],e,s,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,241,e,s,gg)){cCG.wxVkey=1
var oJG=_v()
_(cCG,oJG)
var xKG=function(fMG,oLG,cNG,gg){
var oPG=_mz(z,'button',['bindtap',244,'class',1,'data-address',2],[],fMG,oLG,gg)
var cQG=_oz(z,247,fMG,oLG,gg)
_(oPG,cQG)
_(cNG,oPG)
return cNG
}
oJG.wxXCkey=2
_2z(z,242,xKG,e,s,gg,oJG,'item','index','*this')
var oRG=_mz(z,'button',['bindtap',248,'class',1],[],e,s,gg)
var lSG=_oz(z,250,e,s,gg)
_(oRG,lSG)
_(cCG,oRG)
}
var oDG=_v()
_(oBG,oDG)
if(_oz(z,251,e,s,gg)){oDG.wxVkey=1
var aTG=_n('view')
_rz(z,aTG,'class',252,e,s,gg)
var tUG=_oz(z,253,e,s,gg)
_(aTG,tUG)
_(oDG,aTG)
var eVG=_n('view')
_rz(z,eVG,'class',254,e,s,gg)
var bWG=_oz(z,255,e,s,gg)
_(eVG,bWG)
_(oDG,eVG)
}
var lEG=_v()
_(oBG,lEG)
if(_oz(z,256,e,s,gg)){lEG.wxVkey=1
var oXG=_n('view')
_rz(z,oXG,'class',257,e,s,gg)
var xYG=_oz(z,258,e,s,gg)
_(oXG,xYG)
_(lEG,oXG)
var oZG=_n('view')
_rz(z,oZG,'class',259,e,s,gg)
var f1G=_oz(z,260,e,s,gg)
_(oZG,f1G)
_(lEG,oZG)
var c2G=_n('view')
_rz(z,c2G,'class',261,e,s,gg)
var h3G=_oz(z,262,e,s,gg)
_(c2G,h3G)
_(lEG,c2G)
var o4G=_n('view')
_rz(z,o4G,'class',263,e,s,gg)
var c5G=_n('text')
_rz(z,c5G,'class',264,e,s,gg)
var o6G=_oz(z,265,e,s,gg)
_(c5G,o6G)
_(o4G,c5G)
var l7G=_n('view')
_rz(z,l7G,'class',266,e,s,gg)
var a8G=_mz(z,'button',['bindtap',267,'data-delta',1,'disabled',2],[],e,s,gg)
var t9G=_oz(z,270,e,s,gg)
_(a8G,t9G)
_(l7G,a8G)
var e0G=_n('text')
var bAH=_oz(z,271,e,s,gg)
_(e0G,bAH)
_(l7G,e0G)
var oBH=_mz(z,'button',['bindtap',272,'data-delta',1,'disabled',2],[],e,s,gg)
var xCH=_oz(z,275,e,s,gg)
_(oBH,xCH)
_(l7G,oBH)
_(o4G,l7G)
_(lEG,o4G)
var oDH=_mz(z,'button',['bindtap',276,'class',1],[],e,s,gg)
var fEH=_oz(z,278,e,s,gg)
_(oDH,fEH)
_(lEG,oDH)
}
var aFG=_v()
_(oBG,aFG)
if(_oz(z,279,e,s,gg)){aFG.wxVkey=1
var cFH=_n('view')
_rz(z,cFH,'class',280,e,s,gg)
var hGH=_oz(z,281,e,s,gg)
_(cFH,hGH)
_(aFG,cFH)
var oHH=_n('view')
_rz(z,oHH,'class',282,e,s,gg)
var cIH=_oz(z,283,e,s,gg)
_(oHH,cIH)
_(aFG,oHH)
var oJH=_n('view')
_rz(z,oJH,'class',284,e,s,gg)
var lKH=_oz(z,285,e,s,gg)
_(oJH,lKH)
_(aFG,oJH)
var aLH=_n('view')
_rz(z,aLH,'class',286,e,s,gg)
var tMH=_oz(z,287,e,s,gg)
_(aLH,tMH)
_(aFG,aLH)
var eNH=_mz(z,'button',['bindtap',288,'class',1,'disabled',2,'loading',3],[],e,s,gg)
var bOH=_oz(z,292,e,s,gg)
_(eNH,bOH)
_(aFG,eNH)
}
var tGG=_v()
_(oBG,tGG)
if(_oz(z,293,e,s,gg)){tGG.wxVkey=1
var oPH=_n('view')
_rz(z,oPH,'class',294,e,s,gg)
var xQH=_oz(z,295,e,s,gg)
_(oPH,xQH)
_(tGG,oPH)
var oRH=_mz(z,'button',['bindtap',296,'class',1],[],e,s,gg)
var fSH=_oz(z,298,e,s,gg)
_(oRH,fSH)
_(tGG,oRH)
var cTH=_mz(z,'button',['bindtap',299,'class',1],[],e,s,gg)
var hUH=_oz(z,301,e,s,gg)
_(cTH,hUH)
_(tGG,cTH)
}
var eHG=_v()
_(oBG,eHG)
if(_oz(z,302,e,s,gg)){eHG.wxVkey=1
var oVH=_v()
_(eHG,oVH)
if(_oz(z,303,e,s,gg)){oVH.wxVkey=1
var cWH=_n('view')
_rz(z,cWH,'class',304,e,s,gg)
var oXH=_oz(z,305,e,s,gg)
_(cWH,oXH)
_(oVH,cWH)
}
var lYH=_v()
_(eHG,lYH)
var aZH=function(e2H,t1H,b3H,gg){
var x5H=_n('view')
_rz(z,x5H,'class',308,e2H,t1H,gg)
var o6H=_n('view')
var f7H=_oz(z,309,e2H,t1H,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_n('view')
_rz(z,c8H,'class',310,e2H,t1H,gg)
var h9H=_oz(z,311,e2H,t1H,gg)
_(c8H,h9H)
_(x5H,c8H)
_(b3H,x5H)
return b3H
}
lYH.wxXCkey=2
_2z(z,306,aZH,e,s,gg,lYH,'item','index','id')
oVH.wxXCkey=1
}
var bIG=_v()
_(oBG,bIG)
if(_oz(z,312,e,s,gg)){bIG.wxVkey=1
var o0H=_n('text')
_rz(z,o0H,'class',313,e,s,gg)
var cAI=_oz(z,314,e,s,gg)
_(o0H,cAI)
_(bIG,o0H)
var oBI=_mz(z,'button',['bindtap',315,'class',1,'data-state',2],[],e,s,gg)
var lCI=_oz(z,318,e,s,gg)
_(oBI,lCI)
_(bIG,oBI)
var aDI=_mz(z,'button',['bindtap',319,'class',1,'data-state',2],[],e,s,gg)
var tEI=_oz(z,322,e,s,gg)
_(aDI,tEI)
_(bIG,aDI)
var eFI=_mz(z,'button',['bindtap',323,'class',1,'data-state',2],[],e,s,gg)
var bGI=_oz(z,326,e,s,gg)
_(eFI,bGI)
_(bIG,eFI)
}
cCG.wxXCkey=1
oDG.wxXCkey=1
lEG.wxXCkey=1
aFG.wxXCkey=1
tGG.wxXCkey=1
eHG.wxXCkey=1
bIG.wxXCkey=1
_(o6F,oBG)
_(b5F,o6F)
_(oB,b5F)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}

