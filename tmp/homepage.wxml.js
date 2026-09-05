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
Z([3,'store'])
Z([3,'row'])
Z([3,'location-icon'])
Z([3,'aspectFit'])
Z([3,'/assets/home/icon-location.png'])
Z([3,'address-text'])
Z([a,[[7],[3,'store']]])
Z([3,'muted small'])
Z([3,'到店自提 · 满39享优惠'])
Z([3,'search row'])
Z([3,'search-icon'])
Z(z[8])
Z([3,'/assets/home/icon-search.png'])
Z([3,'search'])
Z([3,'inputSearch'])
Z(z[18])
Z([3,'搜索：牛奶、西瓜、纸巾…'])
Z([[7],[3,'query']])
Z(z[22])
Z([3,'clearSearch'])
Z([3,'text-button'])
Z([3,'清空'])
Z(z[18])
Z(z[25])
Z([3,'搜索'])
Z([[2,'==='],[[7],[3,'tab']],[1,'首页']])
Z([3,'banner row'])
Z([3,'banner-title'])
Z([3,'新鲜直达 · 限时特惠'])
Z([3,'small'])
Z([3,'生鲜满39减10，天天有低价'])
Z([3,'promotion'])
Z([3,'马上去抢'])
Z([3,'banner-image'])
Z(z[8])
Z([3,'/assets/home/image-banner-shopping-bag.png'])
Z([3,'row section'])
Z([3,'title'])
Z([a,[[2,'?:'],[[7],[3,'promo']],[1,'限时特惠'],[[2,'?:'],[[2,'==='],[[7],[3,'tab']],[1,'分类']],[1,'全部商品'],[1,'今日推荐']]]])
Z([3,'viewAll'])
Z([3,'text-button muted'])
Z([3,'查看全部 '])
Z([3,'chevron'])
Z(z[8])
Z([3,'/assets/home/icon-chevron-right.png'])
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
Z(z[24])
Z(z[25])
Z([3,'重置'])
Z([[2,'==='],[[7],[3,'status']],[1,'loading']])
Z([3,'empty'])
Z([3,'正在加载商品…'])
Z([[2,'==='],[[7],[3,'status']],[1,'error']])
Z(z[65])
Z([3,'商品加载失败，请重试'])
Z([3,'loadProducts'])
Z([3,'重新加载'])
Z([[2,'!'],[[6],[[7],[3,'products']],[3,'length']]])
Z(z[65])
Z([3,'没有找到匹配商品'])
Z(z[24])
Z([3,'查看全部商品'])
Z([3,'grid'])
Z([[7],[3,'products']])
Z([3,'id'])
Z([3,'product'])
Z([3,'openDetail'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'product-image product-cover'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'product-name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'muted small product-detail'])
Z([a,[[6],[[7],[3,'item']],[3,'detail']]])
Z(z[6])
Z([3,'price'])
Z([a,[3,'¥'],[[6],[[7],[3,'item']],[3,'priceText']]])
Z([3,'old'])
Z([a,z[92][1],[[6],[[7],[3,'item']],[3,'oldText']]])
Z([3,'加入购物车'])
Z([3,'addProduct'])
Z([3,'add'])
Z(z[82])
Z(z[8])
Z([3,'/assets/home/icon-add-cart.png'])
Z([[2,'==='],[[7],[3,'tab']],[1,'购物车']])
Z(z[6])
Z(z[42])
Z([3,'购物车'])
Z([3,'edit'])
Z(z[25])
Z([a,[[2,'?:'],[[7],[3,'editing']],[1,'完成'],[1,'编辑']]])
Z([[2,'!'],[[6],[[7],[3,'cartRows']],[3,'length']]])
Z(z[65])
Z([3,'购物车还是空的'])
Z([3,'goHome'])
Z([3,'primary'])
Z([3,'去挑选商品'])
Z([3,'store section'])
Z([3,'toggleAll'])
Z([3,'store-heading text-button'])
Z([a,[[2,'?:'],[[7],[3,'allSelected']],[1,'已全选'],[1,'全选']],[3,' · 惠民超市旗舰店']])
Z([[7],[3,'cartRows']])
Z(z[79])
Z([3,'cart-item'])
Z([3,'toggleItem'])
Z([a,[3,'check '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'selected'],[1,'']]])
Z(z[82])
Z([a,[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'已选'],[1,'选中']]])
Z(z[81])
Z([3,'cart-image product-cover'])
Z(z[82])
Z(z[84])
Z(z[85])
Z([3,'cart-info'])
Z(z[86])
Z([a,z[87][1]])
Z([3,'small muted'])
Z([a,z[89][1]])
Z(z[6])
Z(z[91])
Z([a,z[92][1],z[92][2]])
Z([3,'stepper'])
Z([3,'quantity'])
Z([3,'-1'])
Z(z[82])
Z([[2,'<='],[[6],[[7],[3,'item']],[3,'qty']],[1,1]])
Z([3,'减'])
Z([a,[[6],[[7],[3,'item']],[3,'qty']]])
Z(z[139])
Z([3,'1'])
Z(z[82])
Z([[2,'>='],[[6],[[7],[3,'item']],[3,'qty']],[1,99]])
Z([3,'加'])
Z([[7],[3,'editing']])
Z([3,'remove'])
Z(z[25])
Z(z[82])
Z([3,'删除商品'])
Z([[6],[[7],[3,'cartRows']],[3,'length']])
Z([3,'coupon'])
Z([3,'coupon row section'])
Z([3,'优惠券 · 满39减10'])
Z([a,[[2,'?:'],[[7],[3,'coupon']],[1,'取消使用'],[1,'使用']]])
Z(z[41])
Z(z[42])
Z([3,'猜你喜欢'])
Z([3,'rotate'])
Z(z[25])
Z([3,'换一批'])
Z([3,'grid section'])
Z([[7],[3,'recommendations']])
Z(z[79])
Z(z[80])
Z(z[81])
Z(z[83])
Z(z[82])
Z(z[84])
Z(z[85])
Z(z[86])
Z([a,z[87][1]])
Z(z[6])
Z(z[91])
Z([a,z[92][1],z[92][2]])
Z(z[96])
Z(z[97])
Z(z[82])
Z(z[8])
Z(z[100])
Z([3,'checkout-bar row'])
Z(z[133])
Z([a,[3,'已优惠 ¥'],[[7],[3,'discount']]])
Z([3,'合计 '])
Z(z[91])
Z([a,z[92][1],[[7],[3,'total']]])
Z([3,'checkout'])
Z(z[112])
Z([[2,'!'],[[7],[3,'selectedCount']]])
Z([a,[3,'提交订单('],[[7],[3,'selectedCount']],[3,')']])
Z([[2,'==='],[[7],[3,'tab']],[1,'我的']])
Z([3,'my-page'])
Z(z[42])
Z([3,'我的'])
Z([3,'profile-card section'])
Z([3,'profile-avatar'])
Z(z[8])
Z([3,'/assets/home/icon-nav-profile.png'])
Z([3,'profile-copy'])
Z([3,'profile-name'])
Z([3,'超市体验用户'])
Z([3,'已加入惠民超市'])
Z([3,'order-card section'])
Z([3,'showOrders'])
Z([3,'row order-card-head'])
Z([3,'order-card-title'])
Z([3,'我的订单'])
Z([3,'order-count'])
Z([a,[[6],[[7],[3,'orders']],[3,'length']],[3,' 笔订单']])
Z([3,'查看全部'])
Z([3,'order-chevron'])
Z(z[8])
Z(z[49])
Z([3,'order-states'])
Z(z[208])
Z([a,z[213][1]])
Z([3,'全部订单'])
Z(z[208])
Z([3,'0'])
Z([3,'进行中'])
Z(z[208])
Z(z[223])
Z([3,'已完成'])
Z([3,'order-tip'])
Z([3,'order-tip-title'])
Z([3,'订单服务'])
Z([3,'下单后可在这里查看订单记录'])
Z(z[111])
Z(z[112])
Z([3,'去选购商品'])
Z([3,'nav-wrap'])
Z([3,'nav'])
Z([[7],[3,'tabs']])
Z(z[53])
Z([3,'switchTab'])
Z([a,[3,'nav-item '],[[2,'?:'],[[2,'==='],[[7],[3,'tab']],[[7],[3,'item']]],[1,'selected'],[1,'']]])
Z(z[56])
Z([3,'nav-icon'])
Z(z[8])
Z([[6],[[7],[3,'navAssets']],[[7],[3,'item']]])
Z([a,z[57][1]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'item']],[1,'购物车']],[[7],[3,'cartCount']]])
Z([a,[3,'('],[[7],[3,'cartCount']],z[194][3]])
Z([[7],[3,'panel']])
Z([3,'closePanel'])
Z([3,'overlay'])
Z([3,'noop'])
Z([3,'sheet'])
Z([3,'row sheet-heading'])
Z(z[42])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'store']],[1,'选择自提门店'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'detail']],[1,'商品详情'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'checkout']],[1,'确认订单'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'success']],[1,'提交成功'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'orders']],[1,'我的订单'],[[2,'?:'],[[2,'==='],[[7],[3,'panel']],[1,'states']],[1,'原型状态预览'],[1,'门店通知']]]]]]]])
Z(z[249])
Z(z[25])
Z([3,'返回'])
Z([3,'sheet-body'])
Z([[2,'==='],[[7],[3,'panel']],[1,'store']])
Z([[7],[3,'stores']])
Z(z[53])
Z([3,'chooseStore'])
Z([a,[3,'menu '],[[2,'?:'],[[2,'==='],[[7],[3,'storeDraft']],[[7],[3,'item']]],[1,'selected'],[1,'']]])
Z(z[56])
Z([a,z[57][1]])
Z([3,'saveStore'])
Z([3,'primary section'])
Z([3,'确认门店'])
Z([[2,'==='],[[7],[3,'panel']],[1,'messages']])
Z([3,'menu'])
Z([3,'门店下单服务已开放，提交订单后请到店自提。'])
Z(z[271])
Z([3,'今日生鲜优惠：满39元减10元。'])
Z([[2,'==='],[[7],[3,'panel']],[1,'detail']])
Z([3,'detail-image product-cover'])
Z(z[84])
Z([[6],[[7],[3,'detail']],[3,'image']])
Z([3,'title section'])
Z([a,[[6],[[7],[3,'detail']],[3,'name']]])
Z([3,'muted section'])
Z([a,[[6],[[7],[3,'detail']],[3,'detail']]])
Z(z[41])
Z(z[91])
Z([a,z[92][1],[[6],[[7],[3,'detail']],[3,'priceText']]])
Z(z[138])
Z([3,'detailQuantity'])
Z(z[140])
Z([[2,'<='],[[7],[3,'detailQty']],[1,1]])
Z(z[143])
Z([a,[[7],[3,'detailQty']]])
Z(z[287])
Z(z[146])
Z([[2,'>='],[[7],[3,'detailQty']],[1,99]])
Z(z[149])
Z([3,'addDetail'])
Z(z[268])
Z([3,'加入购物车'])
Z([[2,'==='],[[7],[3,'panel']],[1,'checkout']])
Z(z[271])
Z([a,[3,'自提门店：'],z[11][1]])
Z(z[271])
Z([a,[3,'共 '],z[194][2],[3,' 件商品 · 商品金额 ¥'],[[7],[3,'subtotal']]])
Z(z[271])
Z([a,[3,'优惠 ¥'],z[187][2],[3,' · 应付 ¥'],z[190][2]])
Z([3,'small muted section'])
Z([3,'本次为演示订单，不接入支付，提交后可在“我的订单”查看。'])
Z([3,'submitOrder'])
Z(z[268])
Z([[2,'==='],[[7],[3,'status']],[1,'submitting']])
Z(z[310])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'submitting']],[1,'正在提交'],[1,'确认提交订单']]])
Z([[2,'==='],[[7],[3,'panel']],[1,'success']])
Z(z[65])
Z([3,'订单提交成功，可在“我的订单”查看。'])
Z(z[208])
Z(z[112])
Z([3,'查看订单'])
Z(z[111])
Z([3,'section'])
Z([3,'继续购物'])
Z([[2,'==='],[[7],[3,'panel']],[1,'orders']])
Z([[2,'!'],[[6],[[7],[3,'orders']],[3,'length']]])
Z(z[65])
Z([3,'还没有订单'])
Z([[7],[3,'orders']])
Z(z[79])
Z(z[271])
Z([a,[3,'订单 · '],[[6],[[7],[3,'item']],[3,'count']],[3,'件 · ¥'],[[6],[[7],[3,'item']],[3,'total']]])
Z(z[133])
Z([a,z[301][1],[[6],[[7],[3,'item']],[3,'store']]])
Z([[2,'==='],[[7],[3,'panel']],[1,'states']])
Z(z[133])
Z([3,'仅用于检查原型状态，返回“查看全部商品”可恢复。'])
Z([3,'simulate'])
Z(z[271])
Z([3,'loading'])
Z([3,'加载中'])
Z(z[335])
Z(z[271])
Z(z[65])
Z([3,'空列表'])
Z(z[335])
Z(z[271])
Z([3,'error'])
Z([3,'加载失败与重试'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['pages\x5cshop\x5cindex.wxml'];d_[x[0]]={}
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
var tM=_mz(z,'image',['class',7,'mode',1,'src',2],[],e,s,gg)
_(aL,tM)
var eN=_n('text')
_rz(z,eN,'class',10,e,s,gg)
var bO=_oz(z,11,e,s,gg)
_(eN,bO)
_(aL,eN)
_(lK,aL)
var oP=_n('view')
_rz(z,oP,'class',12,e,s,gg)
var xQ=_oz(z,13,e,s,gg)
_(oP,xQ)
_(lK,oP)
_(oJ,lK)
_(oD,oJ)
var oR=_n('view')
_rz(z,oR,'class',14,e,s,gg)
var cT=_mz(z,'image',['class',15,'mode',1,'src',2],[],e,s,gg)
_(oR,cT)
var hU=_mz(z,'input',['bindconfirm',18,'bindinput',1,'confirmType',2,'placeholder',3,'value',4],[],e,s,gg)
_(oR,hU)
var fS=_v()
_(oR,fS)
if(_oz(z,23,e,s,gg)){fS.wxVkey=1
var oV=_mz(z,'button',['bindtap',24,'class',1],[],e,s,gg)
var cW=_oz(z,26,e,s,gg)
_(oV,cW)
_(fS,oV)
}
var oX=_mz(z,'button',['bindtap',27,'class',1],[],e,s,gg)
var lY=_oz(z,29,e,s,gg)
_(oX,lY)
_(oR,oX)
fS.wxXCkey=1
_(oD,oR)
var hG=_v()
_(oD,hG)
if(_oz(z,30,e,s,gg)){hG.wxVkey=1
var aZ=_n('view')
_rz(z,aZ,'class',31,e,s,gg)
var t1=_n('view')
var e2=_n('view')
_rz(z,e2,'class',32,e,s,gg)
var b3=_oz(z,33,e,s,gg)
_(e2,b3)
_(t1,e2)
var o4=_n('view')
_rz(z,o4,'class',34,e,s,gg)
var x5=_oz(z,35,e,s,gg)
_(o4,x5)
_(t1,o4)
var o6=_n('button')
_rz(z,o6,'bindtap',36,e,s,gg)
var f7=_oz(z,37,e,s,gg)
_(o6,f7)
_(t1,o6)
_(aZ,t1)
var c8=_mz(z,'image',['class',38,'mode',1,'src',2],[],e,s,gg)
_(aZ,c8)
_(hG,aZ)
}
var h9=_n('view')
_rz(z,h9,'class',41,e,s,gg)
var o0=_n('text')
_rz(z,o0,'class',42,e,s,gg)
var cAB=_oz(z,43,e,s,gg)
_(o0,cAB)
_(h9,o0)
var oBB=_mz(z,'button',['bindtap',44,'class',1],[],e,s,gg)
var lCB=_oz(z,46,e,s,gg)
_(oBB,lCB)
var aDB=_mz(z,'image',['class',47,'mode',1,'src',2],[],e,s,gg)
_(oBB,aDB)
_(h9,oBB)
_(oD,h9)
var tEB=_mz(z,'scroll-view',['scrollX',-1,'class',50],[],e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',51,e,s,gg)
var bGB=_v()
_(eFB,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_mz(z,'button',['bindtap',54,'class',1,'data-category',2],[],oJB,xIB,gg)
var oNB=_oz(z,57,oJB,xIB,gg)
_(hMB,oNB)
_(fKB,hMB)
return fKB
}
bGB.wxXCkey=2
_2z(z,52,oHB,e,s,gg,bGB,'item','index','*this')
_(tEB,eFB)
_(oD,tEB)
var oH=_v()
_(oD,oH)
if(_oz(z,58,e,s,gg)){oH.wxVkey=1
var cOB=_n('view')
_rz(z,cOB,'class',59,e,s,gg)
var oPB=_n('text')
var lQB=_oz(z,60,e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_mz(z,'button',['bindtap',61,'class',1],[],e,s,gg)
var tSB=_oz(z,63,e,s,gg)
_(aRB,tSB)
_(cOB,aRB)
_(oH,cOB)
}
var cI=_v()
_(oD,cI)
if(_oz(z,64,e,s,gg)){cI.wxVkey=1
var eTB=_n('view')
_rz(z,eTB,'class',65,e,s,gg)
var bUB=_oz(z,66,e,s,gg)
_(eTB,bUB)
_(cI,eTB)
}
else if(_oz(z,67,e,s,gg)){cI.wxVkey=2
var oVB=_n('view')
_rz(z,oVB,'class',68,e,s,gg)
var xWB=_oz(z,69,e,s,gg)
_(oVB,xWB)
var oXB=_n('button')
_rz(z,oXB,'bindtap',70,e,s,gg)
var fYB=_oz(z,71,e,s,gg)
_(oXB,fYB)
_(oVB,oXB)
_(cI,oVB)
}
else if(_oz(z,72,e,s,gg)){cI.wxVkey=3
var cZB=_n('view')
_rz(z,cZB,'class',73,e,s,gg)
var h1B=_oz(z,74,e,s,gg)
_(cZB,h1B)
var o2B=_n('button')
_rz(z,o2B,'bindtap',75,e,s,gg)
var c3B=_oz(z,76,e,s,gg)
_(o2B,c3B)
_(cZB,o2B)
_(cI,cZB)
}
else{cI.wxVkey=4
var o4B=_n('view')
_rz(z,o4B,'class',77,e,s,gg)
var l5B=_v()
_(o4B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_n('view')
_rz(z,xAC,'class',80,e8B,t7B,gg)
var oBC=_mz(z,'view',['bindtap',81,'data-id',1],[],e8B,t7B,gg)
var fCC=_mz(z,'image',['class',83,'mode',1,'src',2],[],e8B,t7B,gg)
_(oBC,fCC)
var cDC=_n('view')
_rz(z,cDC,'class',86,e8B,t7B,gg)
var hEC=_oz(z,87,e8B,t7B,gg)
_(cDC,hEC)
_(oBC,cDC)
var oFC=_n('view')
_rz(z,oFC,'class',88,e8B,t7B,gg)
var cGC=_oz(z,89,e8B,t7B,gg)
_(oFC,cGC)
_(oBC,oFC)
_(xAC,oBC)
var oHC=_n('view')
_rz(z,oHC,'class',90,e8B,t7B,gg)
var lIC=_n('view')
var aJC=_n('text')
_rz(z,aJC,'class',91,e8B,t7B,gg)
var tKC=_oz(z,92,e8B,t7B,gg)
_(aJC,tKC)
_(lIC,aJC)
var eLC=_n('text')
_rz(z,eLC,'class',93,e8B,t7B,gg)
var bMC=_oz(z,94,e8B,t7B,gg)
_(eLC,bMC)
_(lIC,eLC)
_(oHC,lIC)
var oNC=_mz(z,'button',['ariaLabel',95,'bindtap',1,'class',2,'data-id',3],[],e8B,t7B,gg)
var xOC=_mz(z,'image',['mode',99,'src',1],[],e8B,t7B,gg)
_(oNC,xOC)
_(oHC,oNC)
_(xAC,oHC)
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,78,a6B,e,s,gg,l5B,'item','index','id')
_(cI,o4B)
}
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,101,e,s,gg)){fE.wxVkey=1
var cRC=_n('view')
_rz(z,cRC,'class',102,e,s,gg)
var hSC=_n('text')
_rz(z,hSC,'class',103,e,s,gg)
var oTC=_oz(z,104,e,s,gg)
_(hSC,oTC)
_(cRC,hSC)
var cUC=_mz(z,'button',['bindtap',105,'class',1],[],e,s,gg)
var oVC=_oz(z,107,e,s,gg)
_(cUC,oVC)
_(cRC,cUC)
_(fE,cRC)
var oPC=_v()
_(fE,oPC)
if(_oz(z,108,e,s,gg)){oPC.wxVkey=1
var lWC=_n('view')
_rz(z,lWC,'class',109,e,s,gg)
var aXC=_oz(z,110,e,s,gg)
_(lWC,aXC)
var tYC=_mz(z,'button',['bindtap',111,'class',1],[],e,s,gg)
var eZC=_oz(z,113,e,s,gg)
_(tYC,eZC)
_(lWC,tYC)
_(oPC,lWC)
}
else{oPC.wxVkey=2
var b1C=_n('view')
_rz(z,b1C,'class',114,e,s,gg)
var o2C=_mz(z,'button',['bindtap',115,'class',1],[],e,s,gg)
var x3C=_oz(z,117,e,s,gg)
_(o2C,x3C)
_(b1C,o2C)
var o4C=_v()
_(b1C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_n('view')
_rz(z,o0C,'class',120,h7C,c6C,gg)
var lAD=_mz(z,'button',['bindtap',121,'class',1,'data-id',2],[],h7C,c6C,gg)
var aBD=_oz(z,124,h7C,c6C,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_mz(z,'image',['bindtap',125,'class',1,'data-id',2,'mode',3,'src',4],[],h7C,c6C,gg)
_(o0C,tCD)
var eDD=_n('view')
_rz(z,eDD,'class',130,h7C,c6C,gg)
var oFD=_n('view')
_rz(z,oFD,'class',131,h7C,c6C,gg)
var xGD=_oz(z,132,h7C,c6C,gg)
_(oFD,xGD)
_(eDD,oFD)
var oHD=_n('view')
_rz(z,oHD,'class',133,h7C,c6C,gg)
var fID=_oz(z,134,h7C,c6C,gg)
_(oHD,fID)
_(eDD,oHD)
var cJD=_n('view')
_rz(z,cJD,'class',135,h7C,c6C,gg)
var hKD=_n('text')
_rz(z,hKD,'class',136,h7C,c6C,gg)
var oLD=_oz(z,137,h7C,c6C,gg)
_(hKD,oLD)
_(cJD,hKD)
var cMD=_n('view')
_rz(z,cMD,'class',138,h7C,c6C,gg)
var oND=_mz(z,'button',['bindtap',139,'data-delta',1,'data-id',2,'disabled',3],[],h7C,c6C,gg)
var lOD=_oz(z,143,h7C,c6C,gg)
_(oND,lOD)
_(cMD,oND)
var aPD=_n('text')
var tQD=_oz(z,144,h7C,c6C,gg)
_(aPD,tQD)
_(cMD,aPD)
var eRD=_mz(z,'button',['bindtap',145,'data-delta',1,'data-id',2,'disabled',3],[],h7C,c6C,gg)
var bSD=_oz(z,149,h7C,c6C,gg)
_(eRD,bSD)
_(cMD,eRD)
_(cJD,cMD)
_(eDD,cJD)
var bED=_v()
_(eDD,bED)
if(_oz(z,150,h7C,c6C,gg)){bED.wxVkey=1
var oTD=_mz(z,'button',['bindtap',151,'class',1,'data-id',2],[],h7C,c6C,gg)
var xUD=_oz(z,154,h7C,c6C,gg)
_(oTD,xUD)
_(bED,oTD)
}
bED.wxXCkey=1
_(o0C,eDD)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=2
_2z(z,118,f5C,e,s,gg,o4C,'item','index','id')
_(oPC,b1C)
}
var fQC=_v()
_(fE,fQC)
if(_oz(z,155,e,s,gg)){fQC.wxVkey=1
var oVD=_mz(z,'button',['bindtap',156,'class',1],[],e,s,gg)
var fWD=_n('text')
var cXD=_oz(z,158,e,s,gg)
_(fWD,cXD)
_(oVD,fWD)
var hYD=_n('text')
var oZD=_oz(z,159,e,s,gg)
_(hYD,oZD)
_(oVD,hYD)
_(fQC,oVD)
}
var c1D=_n('view')
_rz(z,c1D,'class',160,e,s,gg)
var o2D=_n('text')
_rz(z,o2D,'class',161,e,s,gg)
var l3D=_oz(z,162,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_mz(z,'button',['bindtap',163,'class',1],[],e,s,gg)
var t5D=_oz(z,165,e,s,gg)
_(a4D,t5D)
_(c1D,a4D)
_(fE,c1D)
var e6D=_n('view')
_rz(z,e6D,'class',166,e,s,gg)
var b7D=_v()
_(e6D,b7D)
var o8D=function(o0D,x9D,fAE,gg){
var hCE=_n('view')
_rz(z,hCE,'class',169,o0D,x9D,gg)
var oDE=_mz(z,'image',['bindtap',170,'class',1,'data-id',2,'mode',3,'src',4],[],o0D,x9D,gg)
_(hCE,oDE)
var cEE=_n('view')
_rz(z,cEE,'class',175,o0D,x9D,gg)
var oFE=_oz(z,176,o0D,x9D,gg)
_(cEE,oFE)
_(hCE,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',177,o0D,x9D,gg)
var aHE=_n('text')
_rz(z,aHE,'class',178,o0D,x9D,gg)
var tIE=_oz(z,179,o0D,x9D,gg)
_(aHE,tIE)
_(lGE,aHE)
var eJE=_mz(z,'button',['bindtap',180,'class',1,'data-id',2],[],o0D,x9D,gg)
var bKE=_mz(z,'image',['mode',183,'src',1],[],o0D,x9D,gg)
_(eJE,bKE)
_(lGE,eJE)
_(hCE,lGE)
_(fAE,hCE)
return fAE
}
b7D.wxXCkey=2
_2z(z,167,o8D,e,s,gg,b7D,'item','index','id')
_(fE,e6D)
var oLE=_n('view')
_rz(z,oLE,'class',185,e,s,gg)
var xME=_n('view')
var oNE=_n('view')
_rz(z,oNE,'class',186,e,s,gg)
var fOE=_oz(z,187,e,s,gg)
_(oNE,fOE)
_(xME,oNE)
var cPE=_n('text')
var hQE=_oz(z,188,e,s,gg)
_(cPE,hQE)
_(xME,cPE)
var oRE=_n('text')
_rz(z,oRE,'class',189,e,s,gg)
var cSE=_oz(z,190,e,s,gg)
_(oRE,cSE)
_(xME,oRE)
_(oLE,xME)
var oTE=_mz(z,'button',['bindtap',191,'class',1,'disabled',2],[],e,s,gg)
var lUE=_oz(z,194,e,s,gg)
_(oTE,lUE)
_(oLE,oTE)
_(fE,oLE)
oPC.wxXCkey=1
fQC.wxXCkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,195,e,s,gg)){cF.wxVkey=1
var aVE=_n('view')
_rz(z,aVE,'class',196,e,s,gg)
var tWE=_n('text')
_rz(z,tWE,'class',197,e,s,gg)
var eXE=_oz(z,198,e,s,gg)
_(tWE,eXE)
_(aVE,tWE)
var bYE=_n('view')
_rz(z,bYE,'class',199,e,s,gg)
var oZE=_mz(z,'image',['class',200,'mode',1,'src',2],[],e,s,gg)
_(bYE,oZE)
var x1E=_n('view')
_rz(z,x1E,'class',203,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',204,e,s,gg)
var f3E=_oz(z,205,e,s,gg)
_(o2E,f3E)
_(x1E,o2E)
var c4E=_n('text')
var h5E=_oz(z,206,e,s,gg)
_(c4E,h5E)
_(x1E,c4E)
_(bYE,x1E)
_(aVE,bYE)
var o6E=_n('view')
_rz(z,o6E,'class',207,e,s,gg)
var c7E=_mz(z,'view',['bindtap',208,'class',1],[],e,s,gg)
var o8E=_n('view')
var l9E=_n('text')
_rz(z,l9E,'class',210,e,s,gg)
var a0E=_oz(z,211,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_n('text')
_rz(z,tAF,'class',212,e,s,gg)
var eBF=_oz(z,213,e,s,gg)
_(tAF,eBF)
_(o8E,tAF)
_(c7E,o8E)
var bCF=_n('view')
var oDF=_n('text')
var xEF=_oz(z,214,e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
var oFF=_mz(z,'image',['class',215,'mode',1,'src',2],[],e,s,gg)
_(bCF,oFF)
_(c7E,bCF)
_(o6E,c7E)
var fGF=_n('view')
_rz(z,fGF,'class',218,e,s,gg)
var cHF=_n('view')
_rz(z,cHF,'bindtap',219,e,s,gg)
var hIF=_n('text')
var oJF=_oz(z,220,e,s,gg)
_(hIF,oJF)
_(cHF,hIF)
var cKF=_n('text')
var oLF=_oz(z,221,e,s,gg)
_(cKF,oLF)
_(cHF,cKF)
_(fGF,cHF)
var lMF=_n('view')
_rz(z,lMF,'bindtap',222,e,s,gg)
var aNF=_n('text')
var tOF=_oz(z,223,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
var ePF=_n('text')
var bQF=_oz(z,224,e,s,gg)
_(ePF,bQF)
_(lMF,ePF)
_(fGF,lMF)
var oRF=_n('view')
_rz(z,oRF,'bindtap',225,e,s,gg)
var xSF=_n('text')
var oTF=_oz(z,226,e,s,gg)
_(xSF,oTF)
_(oRF,xSF)
var fUF=_n('text')
var cVF=_oz(z,227,e,s,gg)
_(fUF,cVF)
_(oRF,fUF)
_(fGF,oRF)
_(o6E,fGF)
_(aVE,o6E)
var hWF=_n('view')
_rz(z,hWF,'class',228,e,s,gg)
var oXF=_n('text')
_rz(z,oXF,'class',229,e,s,gg)
var cYF=_oz(z,230,e,s,gg)
_(oXF,cYF)
_(hWF,oXF)
var oZF=_n('text')
var l1F=_oz(z,231,e,s,gg)
_(oZF,l1F)
_(hWF,oZF)
var a2F=_mz(z,'button',['bindtap',232,'class',1],[],e,s,gg)
var t3F=_oz(z,234,e,s,gg)
_(a2F,t3F)
_(hWF,a2F)
_(aVE,hWF)
_(cF,aVE)
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,xC)
var e4F=_n('view')
_rz(z,e4F,'class',235,e,s,gg)
var b5F=_n('view')
_rz(z,b5F,'class',236,e,s,gg)
var o6F=_v()
_(b5F,o6F)
var x7F=function(f9F,o8F,c0F,gg){
var oBG=_mz(z,'button',['bindtap',239,'class',1,'data-tab',2],[],f9F,o8F,gg)
var cCG=_mz(z,'image',['class',242,'mode',1,'src',2],[],f9F,o8F,gg)
_(oBG,cCG)
var oDG=_n('view')
var aFG=_oz(z,245,f9F,o8F,gg)
_(oDG,aFG)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,246,f9F,o8F,gg)){lEG.wxVkey=1
var tGG=_n('text')
var eHG=_oz(z,247,f9F,o8F,gg)
_(tGG,eHG)
_(lEG,tGG)
}
lEG.wxXCkey=1
_(oBG,oDG)
_(c0F,oBG)
return c0F
}
o6F.wxXCkey=2
_2z(z,237,x7F,e,s,gg,o6F,'item','index','*this')
_(e4F,b5F)
_(r,e4F)
var oB=_v()
_(r,oB)
if(_oz(z,248,e,s,gg)){oB.wxVkey=1
var bIG=_mz(z,'view',['bindtap',249,'class',1],[],e,s,gg)
var oJG=_mz(z,'view',['catchtap',251,'class',1],[],e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',253,e,s,gg)
var oLG=_n('text')
_rz(z,oLG,'class',254,e,s,gg)
var fMG=_oz(z,255,e,s,gg)
_(oLG,fMG)
_(xKG,oLG)
var cNG=_mz(z,'button',['bindtap',256,'class',1],[],e,s,gg)
var hOG=_oz(z,258,e,s,gg)
_(cNG,hOG)
_(xKG,cNG)
_(oJG,xKG)
var oPG=_mz(z,'scroll-view',['scrollY',-1,'class',259],[],e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,260,e,s,gg)){cQG.wxVkey=1
var oXG=_v()
_(cQG,oXG)
var xYG=function(f1G,oZG,c2G,gg){
var o4G=_mz(z,'button',['bindtap',263,'class',1,'data-store',2],[],f1G,oZG,gg)
var c5G=_oz(z,266,f1G,oZG,gg)
_(o4G,c5G)
_(c2G,o4G)
return c2G
}
oXG.wxXCkey=2
_2z(z,261,xYG,e,s,gg,oXG,'item','index','*this')
var o6G=_mz(z,'button',['bindtap',267,'class',1],[],e,s,gg)
var l7G=_oz(z,269,e,s,gg)
_(o6G,l7G)
_(cQG,o6G)
}
var oRG=_v()
_(oPG,oRG)
if(_oz(z,270,e,s,gg)){oRG.wxVkey=1
var a8G=_n('view')
_rz(z,a8G,'class',271,e,s,gg)
var t9G=_oz(z,272,e,s,gg)
_(a8G,t9G)
_(oRG,a8G)
var e0G=_n('view')
_rz(z,e0G,'class',273,e,s,gg)
var bAH=_oz(z,274,e,s,gg)
_(e0G,bAH)
_(oRG,e0G)
}
var lSG=_v()
_(oPG,lSG)
if(_oz(z,275,e,s,gg)){lSG.wxVkey=1
var oBH=_mz(z,'image',['class',276,'mode',1,'src',2],[],e,s,gg)
_(lSG,oBH)
var xCH=_n('view')
_rz(z,xCH,'class',279,e,s,gg)
var oDH=_oz(z,280,e,s,gg)
_(xCH,oDH)
_(lSG,xCH)
var fEH=_n('view')
_rz(z,fEH,'class',281,e,s,gg)
var cFH=_oz(z,282,e,s,gg)
_(fEH,cFH)
_(lSG,fEH)
var hGH=_n('view')
_rz(z,hGH,'class',283,e,s,gg)
var oHH=_n('text')
_rz(z,oHH,'class',284,e,s,gg)
var cIH=_oz(z,285,e,s,gg)
_(oHH,cIH)
_(hGH,oHH)
var oJH=_n('view')
_rz(z,oJH,'class',286,e,s,gg)
var lKH=_mz(z,'button',['bindtap',287,'data-delta',1,'disabled',2],[],e,s,gg)
var aLH=_oz(z,290,e,s,gg)
_(lKH,aLH)
_(oJH,lKH)
var tMH=_n('text')
var eNH=_oz(z,291,e,s,gg)
_(tMH,eNH)
_(oJH,tMH)
var bOH=_mz(z,'button',['bindtap',292,'data-delta',1,'disabled',2],[],e,s,gg)
var oPH=_oz(z,295,e,s,gg)
_(bOH,oPH)
_(oJH,bOH)
_(hGH,oJH)
_(lSG,hGH)
var xQH=_mz(z,'button',['bindtap',296,'class',1],[],e,s,gg)
var oRH=_oz(z,298,e,s,gg)
_(xQH,oRH)
_(lSG,xQH)
}
var aTG=_v()
_(oPG,aTG)
if(_oz(z,299,e,s,gg)){aTG.wxVkey=1
var fSH=_n('view')
_rz(z,fSH,'class',300,e,s,gg)
var cTH=_oz(z,301,e,s,gg)
_(fSH,cTH)
_(aTG,fSH)
var hUH=_n('view')
_rz(z,hUH,'class',302,e,s,gg)
var oVH=_oz(z,303,e,s,gg)
_(hUH,oVH)
_(aTG,hUH)
var cWH=_n('view')
_rz(z,cWH,'class',304,e,s,gg)
var oXH=_oz(z,305,e,s,gg)
_(cWH,oXH)
_(aTG,cWH)
var lYH=_n('view')
_rz(z,lYH,'class',306,e,s,gg)
var aZH=_oz(z,307,e,s,gg)
_(lYH,aZH)
_(aTG,lYH)
var t1H=_mz(z,'button',['bindtap',308,'class',1,'disabled',2,'loading',3],[],e,s,gg)
var e2H=_oz(z,312,e,s,gg)
_(t1H,e2H)
_(aTG,t1H)
}
var tUG=_v()
_(oPG,tUG)
if(_oz(z,313,e,s,gg)){tUG.wxVkey=1
var b3H=_n('view')
_rz(z,b3H,'class',314,e,s,gg)
var o4H=_oz(z,315,e,s,gg)
_(b3H,o4H)
_(tUG,b3H)
var x5H=_mz(z,'button',['bindtap',316,'class',1],[],e,s,gg)
var o6H=_oz(z,318,e,s,gg)
_(x5H,o6H)
_(tUG,x5H)
var f7H=_mz(z,'button',['bindtap',319,'class',1],[],e,s,gg)
var c8H=_oz(z,321,e,s,gg)
_(f7H,c8H)
_(tUG,f7H)
}
var eVG=_v()
_(oPG,eVG)
if(_oz(z,322,e,s,gg)){eVG.wxVkey=1
var h9H=_v()
_(eVG,h9H)
if(_oz(z,323,e,s,gg)){h9H.wxVkey=1
var o0H=_n('view')
_rz(z,o0H,'class',324,e,s,gg)
var cAI=_oz(z,325,e,s,gg)
_(o0H,cAI)
_(h9H,o0H)
}
var oBI=_v()
_(eVG,oBI)
var lCI=function(tEI,aDI,eFI,gg){
var oHI=_n('view')
_rz(z,oHI,'class',328,tEI,aDI,gg)
var xII=_n('view')
var oJI=_oz(z,329,tEI,aDI,gg)
_(xII,oJI)
_(oHI,xII)
var fKI=_n('view')
_rz(z,fKI,'class',330,tEI,aDI,gg)
var cLI=_oz(z,331,tEI,aDI,gg)
_(fKI,cLI)
_(oHI,fKI)
_(eFI,oHI)
return eFI
}
oBI.wxXCkey=2
_2z(z,326,lCI,e,s,gg,oBI,'item','index','id')
h9H.wxXCkey=1
}
var bWG=_v()
_(oPG,bWG)
if(_oz(z,332,e,s,gg)){bWG.wxVkey=1
var hMI=_n('text')
_rz(z,hMI,'class',333,e,s,gg)
var oNI=_oz(z,334,e,s,gg)
_(hMI,oNI)
_(bWG,hMI)
var cOI=_mz(z,'button',['bindtap',335,'class',1,'data-state',2],[],e,s,gg)
var oPI=_oz(z,338,e,s,gg)
_(cOI,oPI)
_(bWG,cOI)
var lQI=_mz(z,'button',['bindtap',339,'class',1,'data-state',2],[],e,s,gg)
var aRI=_oz(z,342,e,s,gg)
_(lQI,aRI)
_(bWG,lQI)
var tSI=_mz(z,'button',['bindtap',343,'class',1,'data-state',2],[],e,s,gg)
var eTI=_oz(z,346,e,s,gg)
_(tSI,eTI)
_(bWG,tSI)
}
cQG.wxXCkey=1
oRG.wxXCkey=1
lSG.wxXCkey=1
aTG.wxXCkey=1
tUG.wxXCkey=1
eVG.wxXCkey=1
bWG.wxXCkey=1
_(oJG,oPG)
_(bIG,oJG)
_(oB,bIG)
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

