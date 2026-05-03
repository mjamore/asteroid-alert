(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Zy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xd={exports:{}},se={};var Xx;function jy(){if(Xx)return se;Xx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function _(N,it,yt){this.props=N,this.context=it,this.refs=M,this.updater=yt||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=_.prototype;function D(N,it,yt){this.props=N,this.context=it,this.refs=M,this.updater=yt||b}var O=D.prototype=new U;O.constructor=D,A(O,_.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function L(){}var P={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function w(N,it,yt){var Et=yt.ref;return{$$typeof:s,type:N,key:it,ref:Et!==void 0?Et:null,props:yt}}function C(N,it){return w(N.type,it,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function K(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return it[yt]})}var ot=/\/+/g;function mt(N,it){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):it.toString(36)}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,it,yt,Et,Nt){var at=typeof N;(at==="undefined"||at==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(at){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case s:case t:ut=!0;break;case g:return ut=N._init,B(ut(N._payload),it,yt,Et,Nt)}}if(ut)return Nt=Nt(N),ut=Et===""?"."+mt(N,0):Et,I(Nt)?(yt="",ut!=null&&(yt=ut.replace(ot,"$&/")+"/"),B(Nt,it,yt,"",function(Xt){return Xt})):Nt!=null&&(V(Nt)&&(Nt=C(Nt,yt+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(ot,"$&/")+"/")+ut)),it.push(Nt)),1;ut=0;var wt=Et===""?".":Et+":";if(I(N))for(var Ht=0;Ht<N.length;Ht++)Et=N[Ht],at=wt+mt(Et,Ht),ut+=B(Et,it,yt,at,Nt);else if(Ht=S(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(Et=N.next()).done;)Et=Et.value,at=wt+mt(Et,Ht++),ut+=B(Et,it,yt,at,Nt);else if(at==="object"){if(typeof N.then=="function")return B(ht(N),it,yt,Et,Nt);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ut}function j(N,it,yt){if(N==null)return N;var Et=[],Nt=0;return B(N,Et,"","",function(at){return it.call(yt,at,Nt++)}),Et}function X(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var ct=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:j,forEach:function(N,it,yt){j(N,function(){it.apply(this,arguments)},yt)},count:function(N){var it=0;return j(N,function(){it++}),it},toArray:function(N){return j(N,function(it){return it})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=x,se.Children=xt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,it,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Et=A({},N.props),Nt=N.key;if(it!=null)for(at in it.key!==void 0&&(Nt=""+it.key),it)!Y.call(it,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&it.ref===void 0||(Et[at]=it[at]);var at=arguments.length-2;if(at===1)Et.children=yt;else if(1<at){for(var ut=Array(at),wt=0;wt<at;wt++)ut[wt]=arguments[wt+2];Et.children=ut}return w(N.type,Nt,Et)},se.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},se.createElement=function(N,it,yt){var Et,Nt={},at=null;if(it!=null)for(Et in it.key!==void 0&&(at=""+it.key),it)Y.call(it,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=it[Et]);var ut=arguments.length-2;if(ut===1)Nt.children=yt;else if(1<ut){for(var wt=Array(ut),Ht=0;Ht<ut;Ht++)wt[Ht]=arguments[Ht+2];Nt.children=wt}if(N&&N.defaultProps)for(Et in ut=N.defaultProps,ut)Nt[Et]===void 0&&(Nt[Et]=ut[Et]);return w(N,at,Nt)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:h,render:N}},se.isValidElement=V,se.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:X}},se.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},se.startTransition=function(N){var it=P.T,yt={};P.T=yt;try{var Et=N(),Nt=P.S;Nt!==null&&Nt(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(L,ct)}catch(at){ct(at)}finally{it!==null&&yt.types!==null&&(it.types=yt.types),P.T=it}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(N){return P.H.use(N)},se.useActionState=function(N,it,yt){return P.H.useActionState(N,it,yt)},se.useCallback=function(N,it){return P.H.useCallback(N,it)},se.useContext=function(N){return P.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,it){return P.H.useDeferredValue(N,it)},se.useEffect=function(N,it){return P.H.useEffect(N,it)},se.useEffectEvent=function(N){return P.H.useEffectEvent(N)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(N,it,yt){return P.H.useImperativeHandle(N,it,yt)},se.useInsertionEffect=function(N,it){return P.H.useInsertionEffect(N,it)},se.useLayoutEffect=function(N,it){return P.H.useLayoutEffect(N,it)},se.useMemo=function(N,it){return P.H.useMemo(N,it)},se.useOptimistic=function(N,it){return P.H.useOptimistic(N,it)},se.useReducer=function(N,it,yt){return P.H.useReducer(N,it,yt)},se.useRef=function(N){return P.H.useRef(N)},se.useState=function(N){return P.H.useState(N)},se.useSyncExternalStore=function(N,it,yt){return P.H.useSyncExternalStore(N,it,yt)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.5",se}var Wx;function qh(){return Wx||(Wx=1,xd.exports=jy()),xd.exports}var Ds=qh();const J=Zy(Ds);var gd={exports:{}},Oo={},_d={exports:{}},vd={};var qx;function Ky(){return qx||(qx=1,(function(s){function t(B,j){var X=B.length;B.push(j);t:for(;0<X;){var ct=X-1>>>1,xt=B[ct];if(0<l(xt,j))B[ct]=j,B[X]=xt,X=ct;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var j=B[0],X=B.pop();if(X!==j){B[0]=X;t:for(var ct=0,xt=B.length,N=xt>>>1;ct<N;){var it=2*(ct+1)-1,yt=B[it],Et=it+1,Nt=B[Et];if(0>l(yt,X))Et<xt&&0>l(Nt,yt)?(B[ct]=Nt,B[Et]=X,ct=Et):(B[ct]=yt,B[it]=X,ct=it);else if(Et<xt&&0>l(Nt,X))B[ct]=Nt,B[Et]=X,ct=Et;else break t}}return j}function l(B,j){var X=B.sortIndex-j.sortIndex;return X!==0?X:B.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,y=3,S=!1,b=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(B){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=B)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function I(B){if(A=!1,O(B),!b)if(i(m)!==null)b=!0,L||(L=!0,K());else{var j=i(p);j!==null&&ht(I,j.startTime-B)}}var L=!1,P=-1,Y=5,w=-1;function C(){return M?!0:!(s.unstable_now()-w<Y)}function V(){if(M=!1,L){var B=s.unstable_now();w=B;var j=!0;try{t:{b=!1,A&&(A=!1,U(P),P=-1),S=!0;var X=y;try{e:{for(O(B),x=i(m);x!==null&&!(x.expirationTime>B&&C());){var ct=x.callback;if(typeof ct=="function"){x.callback=null,y=x.priorityLevel;var xt=ct(x.expirationTime<=B);if(B=s.unstable_now(),typeof xt=="function"){x.callback=xt,O(B),j=!0;break e}x===i(m)&&r(m),O(B)}else r(m);x=i(m)}if(x!==null)j=!0;else{var N=i(p);N!==null&&ht(I,N.startTime-B),j=!1}}break t}finally{x=null,y=X,S=!1}j=void 0}}finally{j?K():L=!1}}}var K;if(typeof D=="function")K=function(){D(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,mt=ot.port2;ot.port1.onmessage=V,K=function(){mt.postMessage(null)}}else K=function(){_(V,0)};function ht(B,j){P=_(function(){B(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var X=y;y=j;try{return B()}finally{y=X}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=y;y=B;try{return j()}finally{y=X}},s.unstable_scheduleCallback=function(B,j,X){var ct=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ct+X:ct):X=ct,B){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=X+xt,B={id:g++,callback:j,priorityLevel:B,startTime:X,expirationTime:xt,sortIndex:-1},X>ct?(B.sortIndex=X,t(p,B),i(m)===null&&B===i(p)&&(A?(U(P),P=-1):A=!0,ht(I,X-ct))):(B.sortIndex=xt,t(m,B),b||S||(b=!0,L||(L=!0,K()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var j=y;return function(){var X=y;y=j;try{return B.apply(this,arguments)}finally{y=X}}}})(vd)),vd}var Yx;function Qy(){return Yx||(Yx=1,_d.exports=Ky()),_d.exports}var yd={exports:{}},Nn={};var Zx;function Jy(){if(Zx)return Nn;Zx=1;var s=qh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var jx;function $y(){if(jx)return yd.exports;jx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),yd.exports=Jy(),yd.exports}var Kx;function tS(){if(Kx)return Oo;Kx=1;var s=Qy(),t=qh(),i=$y();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,o=f;break}if(T===o){v=!0,o=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=u;break}if(T===o){v=!0,o=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case L:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ct=[],xt=-1;function N(e){return{current:e}}function it(e){0>xt||(e.current=ct[xt],ct[xt]=null,xt--)}function yt(e,n){xt++,ct[xt]=e.current,e.current=n}var Et=N(null),Nt=N(null),at=N(null),ut=N(null);function wt(e,n){switch(yt(at,n),yt(Nt,e),yt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?hx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=hx(n),e=px(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Et),yt(Et,e)}function Ht(){it(Et),it(Nt),it(at)}function Xt(e){e.memoizedState!==null&&yt(ut,e);var n=Et.current,a=px(n,e.type);n!==a&&(yt(Nt,e),yt(Et,a))}function ce(e){Nt.current===e&&(it(Et),it(Nt)),ut.current===e&&(it(ut),Do._currentValue=X)}var an,pe;function Re(e){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+pe}var H=!1;function me(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var rt=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){rt=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var F=v.split(`
`),et=T.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===et.length)for(o=F.length-1,u=et.length-1;1<=o&&0<=u&&F[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==et[u]){var dt=`
`+F[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return Re("Activity");default:return""}}function ze(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,Xe=s.unstable_scheduleCallback,Zt=s.unstable_cancelCallback,ae=s.unstable_shouldYield,z=s.unstable_requestPaint,E=s.unstable_now,tt=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,St=s.unstable_UserBlockingPriority,ft=s.unstable_NormalPriority,qt=s.unstable_LowPriority,Lt=s.unstable_IdlePriority,Qt=s.log,Wt=s.unstable_setDisableYieldValue,Mt=null,Tt=null;function Yt(e){if(typeof Qt=="function"&&Wt(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var Vt=Math.clz32?Math.clz32:G,zt=Math.log,ne=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(zt(e)/ne|0)|0}var Dt=256,Rt=262144,Ct=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=bt(o):(v&=T,v!==0?u=bt(v):a||(a=T&~e,a!==0&&(u=bt(a))))):(T=o&~f,T!==0?u=bt(T):v!==0?u=bt(v):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function Ce(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jn(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var dt=31-Vt(a),_t=1<<dt;T[dt]=0,F[dt]=-1;var rt=et[dt];if(rt!==null)for(et[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}a&=~_t}o!==0&&al(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function al(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Vt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Gs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Vt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Vs(e,n){var a=n&-n;return a=(a&42)!==0?1:Si(a),(a&(e.suspendedLanes|n))!==0?0:a}function Si(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ks(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Bx(e.type))}function Xs(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Kn=Math.random().toString(36).slice(2),on="__reactFiber$"+Kn,pn="__reactProps$"+Kn,Vi="__reactContainer$"+Kn,Lr="__reactEvents$"+Kn,cu="__reactListeners$"+Kn,uu="__reactHandles$"+Kn,rl="__reactResources$"+Kn,ir="__reactMarker$"+Kn;function Ws(e){delete e[on],delete e[pn],delete e[Lr],delete e[cu],delete e[uu]}function va(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Vi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Sx(e);e!==null;){if(a=e[on])return a;e=Sx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[on]||e[Vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function st(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(e){e[ir]=!0}var Z=new Set,At={};function Ut(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(At[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function jt(e){return Gt.call(ee,e)?!0:Gt.call($t,e)?!1:Ft.test(e)?ee[e]=!0:($t[e]=!0,!1)}function ue(e,n,a){if(jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function we(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function Ye(e){return e.replace(ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ki(e,n,a,o,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+be(n)):e.value!==""+be(n)&&(e.value=""+be(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,v,be(n)):a!=null?Sn(e,v,be(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+be(T):e.removeAttribute("name")}function Ze(e,n,a,o,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(e);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),We(e)}function Sn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+be(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+be(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=be(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),We(e)}function Li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Xi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function fp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&up(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&up(e,f,n[f])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return W_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var du=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Or=null;function dp(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(ki(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(r(90));ki(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ee(o)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var pu=!1;function hp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(Nr!==null||Or!==null)&&(Yl(),Nr&&(n=Nr,e=Or,Or=Nr=null,dp(n),e)))for(n=0;n<e.length;n++)dp(e[n])}}function qs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(qi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{mu=!1}var Sa=null,xu=null,ol=null;function pp(){if(ol)return ol;var e,n=xu,a=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ol=u.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function mp(){return!1}function Vn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:mp,this.isPropagationStopped=mp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Vn(ar),Zs=x({},ar,{view:0,detail:0}),q_=Vn(Zs),gu,_u,js,fl=x({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(gu=e.screenX-js.screenX,_u=e.screenY-js.screenY):_u=gu=0,js=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),xp=Vn(fl),Y_=x({},fl,{dataTransfer:0}),Z_=Vn(Y_),j_=x({},Zs,{relatedTarget:0}),vu=Vn(j_),K_=x({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Q_=Vn(K_),J_=x({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$_=Vn(J_),tv=x({},ar,{data:0}),gp=Vn(tv),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iv[e])?!!n[e]:!1}function yu(){return av}var rv=x({},Zs,{key:function(e){if(e.key){var n=ev[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=Vn(rv),ov=x({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Vn(ov),lv=x({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),cv=Vn(lv),uv=x({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Vn(uv),dv=x({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=Vn(dv),pv=x({},ar,{newState:0,oldState:0}),mv=Vn(pv),xv=[9,13,27,32],Su=qi&&"CompositionEvent"in window,Ks=null;qi&&"documentMode"in document&&(Ks=document.documentMode);var gv=qi&&"TextEvent"in window&&!Ks,vp=qi&&(!Su||Ks&&8<Ks&&11>=Ks),yp=" ",Sp=!1;function Mp(e,n){switch(e){case"keyup":return xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function _v(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return e=n.data,e===yp&&Sp?null:e;default:return null}}function vv(e,n){if(zr)return e==="compositionend"||!Su&&Mp(e,n)?(e=pp(),ol=xu=Sa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yv[e.type]:n==="textarea"}function Tp(e,n,a,o){Nr?Or?Or.push(o):Or=[o]:Nr=o,n=tc(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Qs=null,Js=null;function Sv(e){ox(e,0)}function dl(e){var n=W(e);if(Ee(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(qi){var Mu;if(qi){var bu="oninput"in document;if(!bu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),bu=typeof Cp.oninput=="function"}Mu=bu}else Mu=!1;Rp=Mu&&(!document.documentMode||9<document.documentMode)}function wp(){Qs&&(Qs.detachEvent("onpropertychange",Dp),Js=Qs=null)}function Dp(e){if(e.propertyName==="value"&&dl(Js)){var n=[];Tp(n,Js,e,hu(e)),hp(Sv,n)}}function Mv(e,n,a){e==="focusin"?(wp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",Dp)):e==="focusout"&&wp()}function bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Js)}function Ev(e,n){if(e==="click")return dl(n)}function Tv(e,n){if(e==="input"||e==="change")return dl(n)}function Av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Av;function $s(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Gt.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lp(e,n){var a=Up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rv=qi&&"documentMode"in document&&11>=document.documentMode,Pr=null,Tu=null,to=null,Au=!1;function zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Pr==null||Pr!==yn(o)||(o=Pr,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&$s(to,o)||(to=o,o=tc(Tu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Pr)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Br={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Ru={},Pp={};qi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function sr(e){if(Ru[e])return Ru[e];if(!Br[e])return e;var n=Br[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return Ru[e]=n[a];return e}var Bp=sr("animationend"),Fp=sr("animationiteration"),Ip=sr("animationstart"),Cv=sr("transitionrun"),wv=sr("transitionstart"),Dv=sr("transitioncancel"),Hp=sr("transitionend"),Gp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function Mi(e,n){Gp.set(e,n),Ut(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Fr=0,wu=0;function pl(){for(var e=Fr,n=wu=Fr=0;n<e;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Vp(a,u,f)}}function ml(e,n,a,o){oi[Fr++]=e,oi[Fr++]=n,oi[Fr++]=a,oi[Fr++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return ml(e,n,a,o),xl(e)}function or(e,n){return ml(e,null,null,n),xl(e)}function Vp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Vt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function xl(e){if(50<bo)throw bo=0,Hf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ir={};function Uv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new Uv(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Uu(e)&&(v=1);else if(typeof e=="string")v=Py(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Jn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return lr(a.children,u,f,n);case M:v=8,u|=24;break;case _:return e=Jn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case I:return e=Jn(13,a,n,u),e.elementType=I,e.lanes=f,e;case L:return e=Jn(19,a,n,u),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:v=10;break t;case U:v=9;break t;case O:v=11;break t;case P:v=14;break t;case Y:v=16,o=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Jn(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function lr(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function Xp(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ze(n)},Wp.set(e,n),n)}return{value:e,source:n,stack:ze(n)}}var Hr=[],Gr=0,_l=null,eo=0,ci=[],ui=0,Ma=null,Ni=1,Oi="";function Zi(e,n){Hr[Gr++]=eo,Hr[Gr++]=_l,_l=e,eo=n}function qp(e,n,a){ci[ui++]=Ni,ci[ui++]=Oi,ci[ui++]=Ma,Ma=e;var o=Ni;e=Oi;var u=32-Vt(o)-1;o&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ni=1<<32-Vt(n)+u|a<<u|o,Oi=f+e}else Ni=1<<f|a<<u|o,Oi=e}function Ou(e){e.return!==null&&(Zi(e,1),qp(e,1,0))}function zu(e){for(;e===_l;)_l=Hr[--Gr],Hr[Gr]=null,eo=Hr[--Gr],Hr[Gr]=null;for(;e===Ma;)Ma=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null}function Yp(e,n){ci[ui++]=Ni,ci[ui++]=Oi,ci[ui++]=Ma,Ni=n.id,Oi=n.overflow,Ma=e}var An=null,je=null,Te=!1,ba=null,fi=!1,Pu=Error(r(519));function Ea(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(li(n,e)),Pu}function Zp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[pn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)ve(To[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ze(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||fx(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ea(e,!0)}function jp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function Vr(e){if(e!==An)return!1;if(!Te)return jp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ed(e.type,e.memoizedProps)),a=!a),a&&je&&Ea(e),jp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=yx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=yx(e)}else n===27?(n=je,Fa(e.type)?(e=sd,sd=null,je=e):je=n):je=An?hi(e.stateNode.nextSibling):null;return!0}function cr(){je=An=null,Te=!1}function Bu(){var e=ba;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),ba=null),e}function no(e){ba===null?ba=[e]:ba.push(e)}var Fu=N(null),ur=null,ji=null;function Ta(e,n,a){yt(Fu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Fu.current,it(Fu)}function Iu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Iu(f.return,a,e),o||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Iu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function kr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;Qn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ut.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}u=u.return}e!==null&&Hu(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Kp(ur,e)}function yl(e,n){return ur===null&&fr(e),Kp(e,n)}function Kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Lv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nv=s.unstable_scheduleCallback,Ov=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new Lv,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&Nv(Ov,function(){e.controller.abort()})}var ao=null,Vu=0,Xr=0,Wr=null;function zv(e,n){if(ao===null){var a=ao=[];Vu=0,Xr=qf(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(Qp,Qp),n}function Qp(){if(--Vu===0&&ao!==null){Wr!==null&&(Wr.status="fulfilled");var e=ao;ao=null,Xr=0,Wr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Pv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Jp=B.S;B.S=function(e,n){zm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zv(e,n),Jp!==null&&Jp(e,n)};var dr=N(null);function ku(){var e=dr.current;return e!==null?e:qe.pooledCache}function Sl(e,n){n===null?yt(dr,dr.current):yt(dr,n.pool)}function $p(){var e=ku();return e===null?null:{parent:ln._currentValue,pool:e}}var qr=Error(r(460)),Xu=Error(r(474)),Ml=Error(r(542)),bl={then:function(){}};function t0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function e0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,i0(e),e}throw pr=n,qr}}function hr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,qr):a}}var pr=null;function n0(){if(pr===null)throw Error(r(459));var e=pr;return pr=null,e}function i0(e){if(e===qr||e===Ml)throw Error(r(483))}var Yr=null,ro=0;function El(e){var n=ro;return ro+=1,Yr===null&&(Yr=[]),e0(Yr,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function a0(e){function n(q,k){if(e){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Yi(q,k),q.index=0,q.sibling=null,q}function f(q,k,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,Q,pt){return k===null||k.tag!==6?(k=Lu(Q,q.mode,pt),k.return=q,k):(k=u(k,Q),k.return=q,k)}function F(q,k,Q,pt){var Kt=Q.type;return Kt===A?dt(q,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===Y&&hr(Kt)===k.type)?(k=u(k,Q.props),so(k,Q),k.return=q,k):(k=gl(Q.type,Q.key,Q.props,null,q.mode,pt),so(k,Q),k.return=q,k)}function et(q,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Nu(Q,q.mode,pt),k.return=q,k):(k=u(k,Q.children||[]),k.return=q,k)}function dt(q,k,Q,pt,Kt){return k===null||k.tag!==7?(k=lr(Q,q.mode,pt,Kt),k.return=q,k):(k=u(k,Q),k.return=q,k)}function _t(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Lu(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return Q=gl(k.type,k.key,k.props,null,q.mode,Q),so(Q,k),Q.return=q,Q;case b:return k=Nu(k,q.mode,Q),k.return=q,k;case Y:return k=hr(k),_t(q,k,Q)}if(ht(k)||K(k))return k=lr(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return _t(q,El(k),Q);if(k.$$typeof===D)return _t(q,yl(q,k),Q);Tl(q,k)}return null}function rt(q,k,Q,pt){var Kt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Kt!==null?null:T(q,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Kt?F(q,k,Q,pt):null;case b:return Q.key===Kt?et(q,k,Q,pt):null;case Y:return Q=hr(Q),rt(q,k,Q,pt)}if(ht(Q)||K(Q))return Kt!==null?null:dt(q,k,Q,pt,null);if(typeof Q.then=="function")return rt(q,k,El(Q),pt);if(Q.$$typeof===D)return rt(q,k,yl(q,Q),pt);Tl(q,Q)}return null}function lt(q,k,Q,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(Q)||null,T(k,q,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return q=q.get(pt.key===null?Q:pt.key)||null,F(k,q,pt,Kt);case b:return q=q.get(pt.key===null?Q:pt.key)||null,et(k,q,pt,Kt);case Y:return pt=hr(pt),lt(q,k,Q,pt,Kt)}if(ht(pt)||K(pt))return q=q.get(Q)||null,dt(k,q,pt,Kt,null);if(typeof pt.then=="function")return lt(q,k,Q,El(pt),Kt);if(pt.$$typeof===D)return lt(q,k,Q,yl(k,pt),Kt);Tl(k,pt)}return null}function It(q,k,Q,pt){for(var Kt=null,De=null,kt=k,fe=k=0,Se=null;kt!==null&&fe<Q.length;fe++){kt.index>fe?(Se=kt,kt=null):Se=kt.sibling;var Ue=rt(q,kt,Q[fe],pt);if(Ue===null){kt===null&&(kt=Se);break}e&&kt&&Ue.alternate===null&&n(q,kt),k=f(Ue,k,fe),De===null?Kt=Ue:De.sibling=Ue,De=Ue,kt=Se}if(fe===Q.length)return a(q,kt),Te&&Zi(q,fe),Kt;if(kt===null){for(;fe<Q.length;fe++)kt=_t(q,Q[fe],pt),kt!==null&&(k=f(kt,k,fe),De===null?Kt=kt:De.sibling=kt,De=kt);return Te&&Zi(q,fe),Kt}for(kt=o(kt);fe<Q.length;fe++)Se=lt(kt,q,fe,Q[fe],pt),Se!==null&&(e&&Se.alternate!==null&&kt.delete(Se.key===null?fe:Se.key),k=f(Se,k,fe),De===null?Kt=Se:De.sibling=Se,De=Se);return e&&kt.forEach(function(ka){return n(q,ka)}),Te&&Zi(q,fe),Kt}function te(q,k,Q,pt){if(Q==null)throw Error(r(151));for(var Kt=null,De=null,kt=k,fe=k=0,Se=null,Ue=Q.next();kt!==null&&!Ue.done;fe++,Ue=Q.next()){kt.index>fe?(Se=kt,kt=null):Se=kt.sibling;var ka=rt(q,kt,Ue.value,pt);if(ka===null){kt===null&&(kt=Se);break}e&&kt&&ka.alternate===null&&n(q,kt),k=f(ka,k,fe),De===null?Kt=ka:De.sibling=ka,De=ka,kt=Se}if(Ue.done)return a(q,kt),Te&&Zi(q,fe),Kt;if(kt===null){for(;!Ue.done;fe++,Ue=Q.next())Ue=_t(q,Ue.value,pt),Ue!==null&&(k=f(Ue,k,fe),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return Te&&Zi(q,fe),Kt}for(kt=o(kt);!Ue.done;fe++,Ue=Q.next())Ue=lt(kt,q,fe,Ue.value,pt),Ue!==null&&(e&&Ue.alternate!==null&&kt.delete(Ue.key===null?fe:Ue.key),k=f(Ue,k,fe),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return e&&kt.forEach(function(Yy){return n(q,Yy)}),Te&&Zi(q,fe),Kt}function Ve(q,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:t:{for(var Kt=Q.key;k!==null;){if(k.key===Kt){if(Kt=Q.type,Kt===A){if(k.tag===7){a(q,k.sibling),pt=u(k,Q.props.children),pt.return=q,q=pt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===Y&&hr(Kt)===k.type){a(q,k.sibling),pt=u(k,Q.props),so(pt,Q),pt.return=q,q=pt;break t}a(q,k);break}else n(q,k);k=k.sibling}Q.type===A?(pt=lr(Q.props.children,q.mode,pt,Q.key),pt.return=q,q=pt):(pt=gl(Q.type,Q.key,Q.props,null,q.mode,pt),so(pt,Q),pt.return=q,q=pt)}return v(q);case b:t:{for(Kt=Q.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(q,k.sibling),pt=u(k,Q.children||[]),pt.return=q,q=pt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}pt=Nu(Q,q.mode,pt),pt.return=q,q=pt}return v(q);case Y:return Q=hr(Q),Ve(q,k,Q,pt)}if(ht(Q))return It(q,k,Q,pt);if(K(Q)){if(Kt=K(Q),typeof Kt!="function")throw Error(r(150));return Q=Kt.call(Q),te(q,k,Q,pt)}if(typeof Q.then=="function")return Ve(q,k,El(Q),pt);if(Q.$$typeof===D)return Ve(q,k,yl(q,Q),pt);Tl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(q,k.sibling),pt=u(k,Q),pt.return=q,q=pt):(a(q,k),pt=Lu(Q,q.mode,pt),pt.return=q,q=pt),v(q)):a(q,k)}return function(q,k,Q,pt){try{ro=0;var Kt=Ve(q,k,Q,pt);return Yr=null,Kt}catch(kt){if(kt===qr||kt===Ml)throw kt;var De=Jn(29,kt,null,q.mode);return De.lanes=pt,De.return=q,De}}}var mr=a0(!0),r0=a0(!1),Aa=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(e),Vp(e,null,a),n}return ml(e,o,n,a),xl(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gs(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zu=!1;function lo(){if(Zu){var e=Wr;if(e!==null)throw e}}function co(e,n,a,o){Zu=!1;var u=e.updateQueue;Aa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,et=F.next;F.next=null,v===null?f=et:v.next=et,v=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==v&&(T===null?dt.firstBaseUpdate=et:T.next=et,dt.lastBaseUpdate=F))}if(f!==null){var _t=u.baseState;v=0,dt=et=F=null,T=f;do{var rt=T.lane&-536870913,lt=rt!==T.lane;if(lt?(ye&rt)===rt:(o&rt)===rt){rt!==0&&rt===Xr&&(Zu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=e,te=T;rt=n;var Ve=a;switch(te.tag){case 1:if(It=te.payload,typeof It=="function"){_t=It.call(Ve,_t,rt);break t}_t=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=te.payload,rt=typeof It=="function"?It.call(Ve,_t,rt):It,rt==null)break t;_t=x({},_t,rt);break t;case 2:Aa=!0}}rt=T.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(et=dt=lt,F=_t):dt=dt.next=lt,v|=rt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(F=_t),u.baseState=F,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Na|=v,e.lanes=v,e.memoizedState=_t}}function s0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function o0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s0(a[e],n)}var Zr=N(null),Al=N(0);function l0(e,n){e=ra,yt(Al,e),yt(Zr,n),ra=e|n.baseLanes}function ju(){yt(Al,ra),yt(Zr,Zr.current)}function Ku(){ra=Al.current,it(Zr),it(Al)}var $n=N(null),di=null;function wa(e){var n=e.alternate;yt(rn,rn.current&1),yt($n,e),di===null&&(n===null||Zr.current!==null||n.memoizedState!==null)&&(di=e)}function Qu(e){yt(rn,rn.current),yt($n,e),di===null&&(di=e)}function c0(e){e.tag===22?(yt(rn,rn.current),yt($n,e),di===null&&(di=e)):Da()}function Da(){yt(rn,rn.current),yt($n,$n.current)}function ti(e){it($n),di===e&&(di=null),it(rn)}var rn=N(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||rd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,oe=null,He=null,cn=null,Cl=!1,jr=!1,xr=!1,wl=0,uo=0,Kr=null,Bv=0;function $e(){throw Error(r(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,f){return Qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?q0:mf,xr=!1,f=a(o,u),xr=!1,jr&&(f=f0(n,a,o,u)),u0(e),f}function u0(e){B.H=po;var n=He!==null&&He.next!==null;if(Qi=0,cn=He=oe=null,Cl=!1,uo=0,Kr=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&vl(e)&&(un=!0))}function f0(e,n,a,o){oe=e;var u=0;do{if(jr&&(Kr=null),uo=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,cn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Y0,f=n(a,o)}while(jr);return f}function Fv(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(oe.flags|=1024),n}function tf(){var e=wl!==0;return wl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cl=!1}Qi=0,cn=He=oe=null,jr=!1,uo=wl=0,Kr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?oe.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(He===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=cn===null?oe.memoizedState:cn.next;if(n!==null)cn=n,He=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?oe.memoizedState=cn=e:cn=cn.next=e}return cn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,Kr===null&&(Kr=[]),e=e0(Kr,e,n),n=oe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?q0:mf),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===D)return Rn(e)}throw Error(r(438,String(e)))}function af(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=sn();return rf(n,He,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,F=null,et=n,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ye&_t)===_t:(Qi&_t)===_t){var rt=et.revertLane;if(rt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Xr&&(dt=!0);else if((Qi&rt)===rt){et=et.next,rt===Xr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(T=F=_t,v=f):F=F.next=_t,oe.lanes|=rt,Na|=rt;_t=et.action,xr&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else rt={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(T=F=rt,v=f):F=F.next=rt,oe.lanes|=_t,Na|=_t;et=et.next}while(et!==null&&et!==n);if(F===null?v=f:F.next=T,!Qn(f,e.memoizedState)&&(un=!0,dt&&(a=Wr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Qn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function d0(e,n,a){var o=oe,u=sn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Qn((He||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,cf(m0.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Qr(9,{destroy:void 0},p0.bind(null,o,u,a,n),null),qe===null)throw Error(r(349));f||(Qi&127)!==0||h0(o,n,a)}return a}function h0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Dl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function p0(e,n,a,o){n.value=a,n.getSnapshot=o,x0(n)&&g0(e)}function m0(e,n,a){return a(function(){x0(n)&&g0(e)})}function x0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function g0(e){var n=or(e,2);n!==null&&Yn(n,e,2)}function of(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),xr){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function _0(e,n,a,o){return e.baseState=a,rf(e,He,typeof o=="function"?o:Ji)}function Iv(e,n,a,o,u){if(zl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,v0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function v0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var T=a(u,o),F=B.S;F!==null&&F(v,T),y0(e,n,T)}catch(et){lf(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(u,o),y0(e,n,f)}catch(et){lf(e,n,et)}}function y0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){S0(e,n,o)},function(o){return lf(e,n,o)}):S0(e,n,a)}function S0(e,n,a){n.status="fulfilled",n.value=a,M0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,v0(e,a)))}function lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,M0(n),n=n.next;while(n!==o)}e.action=null}function M0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function b0(e,n){return n}function E0(e,n){if(Te){var a=qe.formState;if(a!==null){t:{var o=oe;if(Te){if(je){e:{for(var u=je,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=hi(u.nextSibling),o=u.data==="F!";break t}}Ea(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:n},a.queue=o,a=k0.bind(null,oe,o),o.dispatch=a,o=of(!1),f=pf.bind(null,oe,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Iv.bind(null,oe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function T0(e){var n=sn();return A0(n,He,e)}function A0(e,n,a){if(n=rf(e,n,b0)[0],e=Ll(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(v){throw v===qr?Ml:v}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Qr(9,{destroy:void 0},Hv.bind(null,u,a),null)),[o,f,e]}function Hv(e,n){e.action=n}function R0(e){var n=sn(),a=He;if(a!==null)return A0(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Qr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Dl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function C0(){return sn().memoizedState}function Nl(e,n,a,o){var u=Pn();oe.flags|=e,u.memoizedState=Qr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&Ju(o,He.memoizedState.deps)?u.memoizedState=Qr(n,f,a,o):(oe.flags|=e,u.memoizedState=Qr(1|n,f,a,o))}function w0(e,n){Nl(8390656,8,e,n)}function cf(e,n){Ol(2048,8,e,n)}function Gv(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Dl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function D0(e){var n=sn().memoizedState;return Gv({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function U0(e,n){return Ol(4,2,e,n)}function L0(e,n){return Ol(4,4,e,n)}function N0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function O0(e,n,a){a=a!=null?a.concat([e]):null,Ol(4,4,N0.bind(null,n,e),a)}function uf(){}function z0(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function P0(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),xr){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Bm(),oe.lanes|=e,Na|=e,a)}function B0(e,n,a,o){return Qn(a,n)?a:Zr.current!==null?(e=ff(e,a,o),Qn(e,n)||(un=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(ye&261930)===0?(un=!0,e.memoizedState=a):(e=Bm(),oe.lanes|=e,Na|=e,n)}function F0(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=B.T,T={};B.T=T,pf(e,!1,n,a);try{var F=u(),et=B.S;if(et!==null&&et(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=Pv(F,o);ho(e,n,dt,ii(e))}else ho(e,n,o,ii(e))}catch(_t){ho(e,n,{then:function(){},status:"rejected",reason:_t},ii())}finally{j.p=f,v!==null&&T.types!==null&&(v.types=T.types),B.T=v}}function Vv(){}function df(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=I0(e).queue;F0(e,u,n,X,a===null?Vv:function(){return H0(e),a(o)})}function I0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function H0(e){var n=I0(e);n.next===null&&(n=e.alternate.memoizedState),ho(e,n.next.queue,{},ii())}function hf(){return Rn(Do)}function G0(){return sn().memoizedState}function V0(){return sn().memoizedState}function kv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Ra(a);var o=Ca(n,e,a);o!==null&&(Yn(o,n,a),oo(o,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function Xv(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?X0(n,a):(a=Du(e,n,a,o),a!==null&&(Yn(a,e,o),W0(a,n,o)))}function k0(e,n,a){var o=ii();ho(e,n,a,o)}function ho(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))X0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,Qn(T,v))return ml(e,n,u,0),qe===null&&pl(),!1}catch{}if(a=Du(e,n,u,o),a!==null)return Yn(a,e,o),W0(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(r(479))}else n=Du(e,a,o,2),n!==null&&Yn(n,e,2)}function zl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function X0(e,n){jr=Cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function W0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gs(e,a)}}var po={readContext:Rn,use:Ul,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};po.useEffectEvent=$e;var q0={readContext:Rn,use:Ul,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:w0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,N0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(xr){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(xr){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Xv.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=k0.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=Pn();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=F0.bind(null,oe,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Pn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ye&127)!==0||h0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,w0(m0.bind(null,o,f,e),[e]),o.flags|=2048,Qr(9,{destroy:void 0},p0.bind(null,o,f,a,n),null),a},useId:function(){var e=Pn(),n=qe.identifierPrefix;if(Te){var a=Oi,o=Ni;a=(o&~(1<<32-Vt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:E0,useActionState:E0,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return Pn().memoizedState=kv.bind(null,oe)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Rn,use:Ul,useCallback:z0,useContext:Rn,useEffect:cf,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:L0,useMemo:P0,useReducer:Ll,useRef:C0,useState:function(){return Ll(Ji)},useDebugValue:uf,useDeferredValue:function(e,n){var a=sn();return B0(a,He.memoizedState,e,n)},useTransition:function(){var e=Ll(Ji)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:hf,useFormState:T0,useActionState:T0,useOptimistic:function(e,n){var a=sn();return _0(a,He,e,n)},useMemoCache:af,useCacheRefresh:V0};mf.useEffectEvent=D0;var Y0={readContext:Rn,use:Ul,useCallback:z0,useContext:Rn,useEffect:cf,useImperativeHandle:O0,useInsertionEffect:U0,useLayoutEffect:L0,useMemo:P0,useReducer:sf,useRef:C0,useState:function(){return sf(Ji)},useDebugValue:uf,useDeferredValue:function(e,n){var a=sn();return He===null?ff(a,e,n):B0(a,He.memoizedState,e,n)},useTransition:function(){var e=sf(Ji)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:d0,useId:G0,useHostTransitionStatus:hf,useFormState:R0,useActionState:R0,useOptimistic:function(e,n){var a=sn();return He!==null?_0(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:V0};Y0.useEffectEvent=D0;function xf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ra(o);u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(Yn(n,e,o),oo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(Yn(n,e,o),oo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(e,o,a),n!==null&&(Yn(n,e,a),oo(n,e,a))}};function Z0(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function j0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function K0(e){hl(e)}function Q0(e){console.error(e)}function J0(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function tm(e){return e=Ra(e),e.tag=3,e}function em(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){$0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){$0(n,a,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Wv(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Zl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(r(435,a.tag))}return kf(e,o,u),Zl(),!1}if(Te)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(r(422),{cause:o}),no(li(e,a)))):(o!==Pu&&(n=Error(r(423),{cause:o}),no(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=_f(e.stateNode,o,u),Yu(e,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=li(f,a),Mo===null?Mo=[f]:Mo.push(f),tn!==4&&(tn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Oa===null||!Oa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tm(u),em(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(r(461)),un=!1;function Cn(e,n,a,o){n.child=e===null?r0(n,null,a,o):mr(n,e.child,a,o)}function nm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return fr(n),o=$u(e,n,a,v,f,u),T=tf(),e!==null&&!un?(ef(e,n,u),$i(e,n,u)):(Te&&T&&Ou(n),n.flags|=1,Cn(e,n,o,u),n.child)}function im(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,am(e,n,f,o,u)):(e=gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Rf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(v,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(f,o),e.ref=n.ref,e.return=n,n.child=e}function am(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if($s(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Rf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,$i(e,n,u)}return yf(e,n,a,o,u)}function rm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return sm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?l0(n,f):ju(),c0(n);else return o=n.lanes=536870912,sm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),l0(n,f),Da(),n.memoizedState=null):(e!==null&&Sl(n,null),ju(),Da());return Cn(e,n,u,a),n.child}function mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function sm(e,n,a,o,u){var f=ku();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Sl(n,null),ju(),c0(n),e!==null&&kr(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function om(e,n,a){return mr(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function qv(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,mo(null,e);if(Qu(n),(e=je)?(e=vx(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw Ea(n);return n.lanes=536870912,null}return Bl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=om(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||kr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=qe,o!==null&&(v=Vs(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,or(e,v),Yn(o,e,v),vf;Zl(),n=om(e,n,a)}else e=f.treeContext,je=hi(v.nextSibling),An=n,Te=!0,ba=null,fi=!1,e!==null&&Yp(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return fr(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!un?(ef(e,n,u),$i(e,n,u)):(Te&&o&&Ou(n),n.flags|=1,Cn(e,n,a,u),n.child)}function lm(e,n,a,o,u,f){return fr(n),n.updateQueue=null,a=f0(n,o,a,u),u0(e),o=tf(),e!==null&&!un?(ef(e,n,f),$i(e,n,f)):(Te&&o&&Ou(n),n.flags|=1,Cn(e,n,a,f),n.child)}function cm(e,n,a,o,u){if(fr(n),n.stateNode===null){var f=Ir,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Ir,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(xf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&gf.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,F=gr(a,T);f.props=F;var et=f.context,dt=a.contextType;v=Ir,typeof dt=="object"&&dt!==null&&(v=Rn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||et!==v)&&j0(n,f,o,v),Aa=!1;var rt=n.memoizedState;f.state=rt,co(n,o,f,u),lo(),et=n.memoizedState,T||rt!==et||Aa?(typeof _t=="function"&&(xf(n,a,_t,o),et=n.memoizedState),(F=Aa||Z0(n,a,F,o,rt,et,v))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=v,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qu(e,n),v=n.memoizedProps,dt=gr(a,v),f.props=dt,_t=n.pendingProps,rt=f.context,et=a.contextType,F=Ir,typeof et=="object"&&et!==null&&(F=Rn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||rt!==F)&&j0(n,f,o,F),Aa=!1,rt=n.memoizedState,f.state=rt,co(n,o,f,u),lo();var lt=n.memoizedState;v!==_t||rt!==lt||Aa||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof T=="function"&&(xf(n,a,T,o),lt=n.memoizedState),(dt=Aa||Z0(n,a,dt,o,rt,lt,F)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=F,o=dt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Fl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=mr(n,e.child,null,u),n.child=mr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function um(e,n,a,o){return cr(),n.flags|=256,Cn(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:$p()}}function bf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function fm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?wa(n):Da(),(e=je)?(e=vx(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,An=n,je=null)):e=null,e===null)throw Ea(n);return rd(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Da(),u=n.mode,T=Il({mode:"hidden",children:T},u),o=lr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(e,v,a),n.memoizedState=Sf,mo(null,o)):(wa(n),Ef(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),T=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),T=lr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,mr(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(e,v,a),n.memoizedState=Sf,n=mo(null,o));else if(wa(n),rd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(r(419)),o.stack="",o.digest=v,no({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(un||kr(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=qe,v!==null&&(o=Vs(v,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,or(e,o),Yn(v,e,o),vf;ad(T)||Zl(),n=Tf(e,n,a)}else ad(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,je=hi(T.nextSibling),An=n,Te=!0,ba=null,fi=!1,e!==null&&Yp(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Da(),T=o.fallback,u=n.mode,F=e.child,et=F.sibling,o=Yi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,et!==null?T=Yi(et,T):(T=lr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,mo(null,o),o=n.child,T=e.child.memoizedState,T===null?T=Mf(a):(u=T.cachePool,u!==null?(F=ln._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=$p(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=bf(e,v,a),n.memoizedState=Sf,mo(e.child,o)):(wa(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return mr(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Iu(e.return,n,a)}function Af(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function hm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=rn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,yt(rn,v),Cn(e,n,o,a),o=Te?eo:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dm(e,a,n);else if(e.tag===19)dm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function Yv(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ta(n,ln,e.memoizedState.cache),cr();break;case 27:case 5:Xt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fm(e,n,a):(wa(n),e=$i(e,n,a),e!==null?e.sibling:null);wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(kr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return hm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,rm(e,n,a,n.pendingProps);case 24:Ta(n,ln,e.memoizedState.cache)}return $i(e,n,a)}function pm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return un=!1,Yv(e,n,a);un=(e.flags&131072)!==0}else un=!1,Te&&(n.flags&1048576)!==0&&qp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=hr(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=gr(e,o),n.tag=1,n=cm(null,n,e,o,a)):(n.tag=0,n=yf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=nm(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=im(null,n,e,o,a);break t}}throw n=mt(e)||e,Error(r(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=gr(o,n.pendingProps),cm(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,qu(e,n),co(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ta(n,ln,o),o!==f.cache&&Hu(n,[ln],a,!0),lo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=um(e,n,o,a);break t}else if(o!==u){u=li(Error(r(424)),n),no(u),n=um(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=hi(e.firstChild),An=n,Te=!0,ba=null,fi=!0,a=r0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cr(),o===u){n=$i(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=Tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=ec(at.current).createElement(a),o[on]=n,o[pn]=e,wn(o,a,e),nt(o),n.stateNode=o):n.memoizedState=Tx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Te&&(o=n.stateNode=Mx(n.type,n.pendingProps,at.current),An=n,fi=!0,u=je,Fa(n.type)?(sd=u,je=hi(o.firstChild)):je=u),Cn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=je)&&(o=by(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,An=n,je=hi(o.firstChild),fi=!1,u=!0):u=!1),u||Ea(n)),Xt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,ed(u,f)?o=null:v!==null&&ed(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,Fv,null,null,a),Do._currentValue=u),Fl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=je)&&(a=Ey(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,je=null,e=!0):e=!1),e||Ea(n)),null;case 13:return fm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=mr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return nm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return im(e,n,n.type,n.pendingProps,a);case 15:return am(e,n,n.type,n.pendingProps,a);case 19:return hm(e,n,a);case 31:return qv(e,n,a);case 22:return rm(e,n,a,n.pendingProps);case 24:return fr(n),o=Rn(ln),e===null?(u=ku(),u===null&&(u=qe,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Wu(n),Ta(n,ln,u)):((e.lanes&a)!==0&&(qu(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,ln,o)):(o=f.cache,Ta(n,ln,o),o!==u.cache&&Hu(n,[ln],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function Cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Gm())e.flags|=8192;else throw pr=bl,Xu}else e.flags&=-16777217}function mm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dx(n))if(Gm())e.flags|=8192;else throw pr=bl,Xu}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,es|=n)}function xo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Zv(e,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(ln),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ta(n),f!==null?(Ke(n),mm(n,f)):(Ke(n),Cf(n,u,null,o,a))):f?f!==e.memoizedState?(ta(n),Ke(n),mm(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ta(n),Ke(n),Cf(n,u,e,o,a)),null;case 27:if(ce(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=Et.current,Vr(n)?Zp(n):(e=Mx(u,o,a),n.stateNode=e,ta(n))}return Ke(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=Et.current,Vr(n))Zp(n);else{var v=ec(at.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[on]=n,f[pn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ta(n)}}return Ke(n),Cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=at.current,Vr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||fx(e.nodeValue,a)),e||Ea(n,!0)}else e=ec(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Vr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Bu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ke(n),null);case 4:return Ht(),e===null&&Kf(n.stateNode.containerInfo),Ke(n),null;case 10:return Ki(n.type),Ke(n),null;case 19:if(it(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,xo(o,!1),e=f.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return yt(rn,rn.current&1|2),Te&&Zi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Wl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Rl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Ke(n),null}else 2*E()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,yt(rn,u?a&1|2:a&1),Te&&Zi(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ti(n),Ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&it(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jv(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(ln),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(rn),null;case 4:return Ht(),null;case 10:return Ki(n.type),null;case 22:case 23:return ti(n),Ku(),e!==null&&it(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(ln),null;case 25:return null;default:return null}}function xm(e,n){switch(zu(n),n.tag){case 3:Ki(ln),Ht();break;case 26:case 27:case 5:ce(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:it(rn);break;case 10:Ki(n.type);break;case 22:case 23:ti(n),Ku(),e!==null&&it(dr);break;case 24:Ki(ln)}}function go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(T){Be(n,n.return,T)}}function Ua(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var F=a,et=T;try{et()}catch(dt){Be(u,F,dt)}}}o=o.next}while(o!==f)}}catch(dt){Be(n,n.return,dt)}}function gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{o0(n,a)}catch(o){Be(e,e.return,o)}}}function _m(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function _o(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function vm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function wf(e,n,a){try{var o=e.stateNode;gy(o,e.type,a,n),o[pn]=n}catch(u){Be(e,e.return,u)}}function ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function Sm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=e,n[pn]=a}catch(f){Be(e,e.return,f)}}var ea=!1,fn=!1,Lf=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Kv(e,n){if(e=e.containerInfo,$f=lc,e=Op(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,F=-1,et=0,dt=0,_t=e,rt=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==f||o!==0&&_t.nodeType!==3||(F=v+o),_t.nodeType===3&&(v+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)rt=_t,_t=lt;for(;;){if(_t===e)break e;if(rt===a&&++et===u&&(T=v),rt===f&&++dt===o&&(F=v),(lt=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=lt}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:e,selectionRange:a},lc=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var It=gr(a.type,u);e=o.getSnapshotBeforeUpdate(It,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)id(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":id(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function bm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&go(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Be(a,a.return,v)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}o&64&&gm(a),o&512&&_o(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{o0(e,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&o&4&&Sm(a);case 26:case 5:ia(e,a),n===null&&o&4&&vm(a),o&512&&_o(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&Am(e,a);break;case 13:ia(e,a),o&4&&Rm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ry.bind(null,a),Ty(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||fn,u=ea;var f=fn;ea=o,(fn=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ea=u,fn=f}break;case 30:break;default:ia(e,a)}}function Em(e){var n=e.alternate;n!==null&&(e.alternate=null,Em(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ws(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kn=!1;function na(e,n,a){for(a=a.child;a!==null;)Tm(e,n,a),a=a.sibling}function Tm(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||zi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||zi(a,n);var o=Qe,u=kn;Fa(a.type)&&(Qe=a.stateNode,kn=!1),na(e,n,a),Ro(a.stateNode),Qe=o,kn=u;break;case 5:fn||zi(a,n);case 6:if(o=Qe,u=kn,Qe=null,na(e,n,a),Qe=o,kn=u,Qe!==null)if(kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(kn?(e=Qe,gx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cs(e)):gx(Qe,a.stateNode));break;case 4:o=Qe,u=kn,Qe=a.stateNode.containerInfo,kn=!0,na(e,n,a),Qe=o,kn=u;break;case 0:case 11:case 14:case 15:Ua(2,a,n),fn||Ua(4,a,n),na(e,n,a);break;case 1:fn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&_m(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,na(e,n,a),fn=o;break;default:na(e,n,a)}}function Am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cs(e)}catch(a){Be(n,n.return,a)}}}function Rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cs(e)}catch(a){Be(n,n.return,a)}}function Qv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mm),n;default:throw Error(r(435,e.tag))}}function Vl(e,n){var a=Qv(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=sy.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Fa(T.type)){Qe=T.stateNode,kn=!1;break t}break;case 5:Qe=T.stateNode,kn=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,kn=!0;break t}T=T.return}if(Qe===null)throw Error(r(160));Tm(f,v,u),Qe=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cm(n,e),n=n.sibling}var bi=null;function Cm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(Ua(3,e,e.return),go(3,e),Ua(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(fn||a===null||zi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Xn(n,e),Wn(e),o&512&&(fn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[on]=e,nt(f),o=f;break t;case"link":var v=Cx("link","href",u).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Cx("meta","content",u).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,nt(f),o=f}e.stateNode=o}else wx(u,e.type,e.stateNode);else e.stateNode=Rx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?wx(u,e.type,e.stateNode):Rx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(fn||a===null||zi(a,a.return)),a!==null&&o&4&&wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(fn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Li(u,"")}catch(It){Be(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Be(e,e.return,It)}}break;case 3:if(ac=null,u=bi,bi=nc(n.containerInfo),Xn(n,e),bi=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(n.containerInfo)}catch(It){Be(e,e.return,It)}Lf&&(Lf=!1,wm(e));break;case 4:o=bi,bi=nc(e.stateNode.containerInfo),Xn(n,e),Wn(e),bi=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,et=ea,dt=fn;if(ea=et||u,fn=dt||F,Xn(n,e),fn=dt,ea=et,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ea||fn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=F.stateNode;var _t=F.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(It){Be(F,F.return,It)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(It){Be(F,F.return,It)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?_x(lt,!0):_x(F.stateNode,!1)}catch(It){Be(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Vl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ym(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Df(e);Gl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Li(v,""),a.flags&=-33);var T=Df(e);Gl(e,T,v);break;case 3:case 4:var F=a.stateNode.containerInfo,et=Df(e);Uf(e,et,F);break;default:throw Error(r(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),_r(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_m(n,n.return,a),_r(n);break;case 27:Ro(n.stateNode);case 26:case 5:zi(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),go(4,f);break;case 1:if(aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Be(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)s0(F[u],T)}catch(et){Be(o,o.return,et)}}a&&v&64&&gm(f),_o(f,f.return);break;case 27:Sm(f);case 26:case 5:aa(u,f,a),a&&o===null&&v&4&&vm(f),_o(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&v&4&&Am(u,f);break;case 13:aa(u,f,a),a&&v&4&&Rm(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),_o(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dm(e,n,a,o),n=n.sibling}function Dm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&go(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else Ei(e,n,a,o);break;case 31:Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):vo(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,Jr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(v,n);break;case 24:Ei(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ei(e,n,a,o)}}function Jr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,F=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:Jr(f,v,T,F,u),go(8,v);break;case 23:break;case 22:var dt=v.stateNode;v.memoizedState!==null?dt._visibility&2?Jr(f,v,T,F,u):vo(f,v):(dt._visibility|=2,Jr(f,v,T,F,u)),u&&et&2048&&Nf(v.alternate,v);break;case 24:Jr(f,v,T,F,u),u&&et&2048&&Of(v.alternate,v);break;default:Jr(f,v,T,F,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Nf(o.alternate,o);break;case 24:vo(a,o),u&2048&&Of(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var yo=8192;function $r(e,n,a){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)Um(e,n,a),e=e.sibling}function Um(e,n,a){switch(e.tag){case 26:$r(e,n,a),e.flags&yo&&e.memoizedState!==null&&By(a,bi,e.memoizedState,e.memoizedProps);break;case 5:$r(e,n,a);break;case 3:case 4:var o=bi;bi=nc(e.stateNode.containerInfo),$r(e,n,a),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,$r(e,n,a),yo=o):$r(e,n,a));break;default:$r(e,n,a)}}function Lm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Om(o,e)}Lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nm(e),e=e.sibling}function Nm(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):So(e);break;default:So(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Om(o,e)}Lm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function Om(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else t:for(a=e;bn!==null;){o=bn;var u=o.sibling,f=o.return;if(Em(o),o===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var Jv={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},$v=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,_e=null,ye=0,Pe=0,ei=null,La=!1,ts=!1,zf=!1,ra=0,tn=0,Na=0,vr=0,Pf=0,ni=0,es=0,Mo=null,qn=null,Bf=!1,Xl=0,zm=0,Wl=1/0,ql=null,Oa=null,xn=0,za=null,ns=null,sa=0,Ff=0,If=null,Pm=null,bo=0,Hf=null;function ii(){return(Ne&2)!==0&&ye!==0?ye&-ye:B.T!==null?qf():ks()}function Bm(){if(ni===0)if((ye&536870912)===0||Te){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===qe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(is(e,0),Pa(e,ye,ni,!1)),Ln(e,a),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(vr|=a),tn===4&&Pa(e,ye,ni,!1)),Pi(e))}function Fm(e,n,a){if((Ne&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?ny(e,n):Vf(e,n,!0),f=o;do{if(u===0){ts&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ty(a)){u=Vf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=Mo;var F=T.current.memoizedState.isDehydrated;if(F&&(is(T,v).flags|=256),v=Vf(T,v,!1),v!==2){if(zf&&!F){T.errorRecoveryDisabledLanes|=f,vr|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){is(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,ni,!La);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Xl+300-E(),10<u)){if(Pa(o,n,ni,!La),vt(o,0,!0)!==0)break t;sa=n,o.timeoutHandle=mx(Im.bind(null,o,a,qn,ql,Bf,n,ni,vr,es,La,f,"Throttled",-0,0),u);break t}Im(o,a,qn,ql,Bf,n,ni,vr,es,La,f,null,-0,0)}}break}while(!0);Pi(e)}function Im(e,n,a,o,u,f,v,T,F,et,dt,_t,rt,lt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},Um(n,f,_t);var It=(f&62914560)===f?Xl-E():(f&4194048)===f?zm-E():0;if(It=Fy(_t,It),It!==null){sa=f,e.cancelPendingCommit=It(Ym.bind(null,e,n,f,a,o,u,v,T,F,dt,_t,null,rt,lt)),Pa(e,f,v,!et);return}}Ym(e,n,f,a,o,u,v,T,F)}function ty(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~Pf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&al(e,a,n)}function Yl(){return(Ne&6)===0?(Eo(0),!1):!0}function Gf(){if(_e!==null){if(Pe===0)var e=_e.return;else e=_e,ji=ur=null,nf(e),Yr=null,ro=0,e=_e;for(;e!==null;)xm(e.alternate,e),e=e.return;_e=null}}function is(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,Gf(),qe=e,_e=a=Yi(e.current,null),ye=n,Pe=0,ei=null,La=!1,ts=Bt(e,n),zf=!1,es=ni=Pf=vr=Na=tn=0,qn=Mo=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Vt(o),f=1<<u;n|=e[u],o&=~f}return ra=n,pl(),a}function Hm(e,n){oe=null,B.H=po,n===qr||n===Ml?(n=n0(),Pe=3):n===Xu?(n=n0(),Pe=4):Pe=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,_e===null&&(tn=1,Pl(e,li(n,e.current)))}function Gm(){var e=$n.current;return e===null?!0:(ye&4194048)===ye?di===null:(ye&62914560)===ye||(ye&536870912)!==0?e===di:!1}function Vm(){var e=B.H;return B.H=po,e===null?po:e}function km(){var e=B.A;return B.A=Jv,e}function Zl(){tn=4,La||(ye&4194048)!==ye&&$n.current!==null||(ts=!0),(Na&134217727)===0&&(vr&134217727)===0||qe===null||Pa(qe,ye,ni,!1)}function Vf(e,n,a){var o=Ne;Ne|=2;var u=Vm(),f=km();(qe!==e||ye!==n)&&(ql=null,is(e,n)),n=!1;var v=tn;t:do try{if(Pe!==0&&_e!==null){var T=_e,F=ei;switch(Pe){case 8:Gf(),v=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var et=Pe;if(Pe=0,ei=null,as(e,T,F,et),a&&ts){v=0;break t}break;default:et=Pe,Pe=0,ei=null,as(e,T,F,et)}}ey(),v=tn;break}catch(dt){Hm(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ji=ur=null,Ne=o,B.H=u,B.A=f,_e===null&&(qe=null,ye=0,pl()),v}function ey(){for(;_e!==null;)Xm(_e)}function ny(e,n){var a=Ne;Ne|=2;var o=Vm(),u=km();qe!==e||ye!==n?(ql=null,Wl=E()+500,is(e,n)):ts=Bt(e,n);t:do try{if(Pe!==0&&_e!==null){n=_e;var f=ei;e:switch(Pe){case 1:Pe=0,ei=null,as(e,n,f,1);break;case 2:case 9:if(t0(f)){Pe=0,ei=null,Wm(n);break}n=function(){Pe!==2&&Pe!==9||qe!==e||(Pe=7),Pi(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:t0(f)?(Pe=0,ei=null,Wm(n)):(Pe=0,ei=null,as(e,n,f,7));break;case 5:var v=null;switch(_e.tag){case 26:v=_e.memoizedState;case 5:case 27:var T=_e;if(v?Dx(v):T.stateNode.complete){Pe=0,ei=null;var F=T.sibling;if(F!==null)_e=F;else{var et=T.return;et!==null?(_e=et,jl(et)):_e=null}break e}}Pe=0,ei=null,as(e,n,f,5);break;case 6:Pe=0,ei=null,as(e,n,f,6);break;case 8:Gf(),tn=6;break t;default:throw Error(r(462))}}iy();break}catch(dt){Hm(e,dt)}while(!0);return ji=ur=null,B.H=o,B.A=u,Ne=a,_e!==null?0:(qe=null,ye=0,pl(),tn)}function iy(){for(;_e!==null&&!ae();)Xm(_e)}function Xm(e){var n=pm(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?jl(e):_e=n}function Wm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=lm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:nf(n);default:xm(a,n),n=_e=kp(n,ra),n=pm(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?jl(e):_e=n}function as(e,n,a,o){ji=ur=null,nf(n),Yr=null,ro=0;var u=n.return;try{if(Wv(e,u,n,a,ye)){tn=1,Pl(e,li(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;tn=1,Pl(e,li(a,e.current)),_e=null;return}n.flags&32768?(Te||o===1?e=!0:ts||(ye&536870912)!==0?e=!1:(La=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),qm(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){qm(n,La);return}e=n.return;var a=Zv(n.alternate,n,ra);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);tn===0&&(tn=5)}function qm(e,n){do{var a=jv(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);tn=6,_e=null}function Ym(e,n,a,o,u,f,v,T,F){e.cancelPendingCommit=null;do Kl();while(xn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=wu,jn(e,a,f,v,T,F),e===qe&&(_e=qe=null,ye=0),ns=n,za=e,sa=a,Ff=f,If=u,Pm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oy(ft,function(){return Jm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=j.p,j.p=2,v=Ne,Ne|=4;try{Kv(e,n,a)}finally{Ne=v,j.p=u,B.T=o}}xn=1,Zm(),jm(),Km()}}function Zm(){if(xn===1){xn=0;var e=za,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=j.p;j.p=2;var u=Ne;Ne|=4;try{Cm(n,e);var f=td,v=Op(e.containerInfo),T=f.focusedElem,F=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Np(T.ownerDocument.documentElement,T)){if(F!==null&&Eu(T)){var et=F.start,dt=F.end;if(dt===void 0&&(dt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(dt,T.value.length);else{var _t=T.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),It=T.textContent.length,te=Math.min(F.start,It),Ve=F.end===void 0?te:Math.min(F.end,It);!lt.extend&&te>Ve&&(v=Ve,Ve=te,te=v);var q=Lp(T,te),k=Lp(T,Ve);if(q&&k&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var Q=_t.createRange();Q.setStart(q.node,q.offset),lt.removeAllRanges(),te>Ve?(lt.addRange(Q),lt.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),lt.addRange(Q))}}}}for(_t=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}lc=!!$f,td=$f=null}finally{Ne=u,j.p=o,B.T=a}}e.current=n,xn=2}}function jm(){if(xn===2){xn=0;var e=za,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=j.p;j.p=2;var u=Ne;Ne|=4;try{bm(e,n.alternate,n)}finally{Ne=u,j.p=o,B.T=a}}xn=3}}function Km(){if(xn===4||xn===3){xn=0,z();var e=za,n=ns,a=sa,o=Pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ns=za=null,Qm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),nr(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=j.p,j.p=2,B.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{B.T=n,j.p=u}}(sa&3)!==0&&Kl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Hf?bo++:(bo=0,Hf=e):bo=0,Eo(0)}}function Qm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function Kl(){return Zm(),jm(),Km(),Jm()}function Jm(){if(xn!==5)return!1;var e=za,n=Ff;Ff=0;var a=nr(sa),o=B.T,u=j.p;try{j.p=32>a?32:a,B.T=null,a=If,If=null;var f=za,v=sa;if(xn=0,ns=za=null,sa=0,(Ne&6)!==0)throw Error(r(331));var T=Ne;if(Ne|=4,Nm(f.current),Dm(f,f.current,v,a),Ne=T,Eo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{j.p=u,B.T=o,Qm(e,n)}}function $m(e,n,a){n=li(a,n),n=_f(e.stateNode,n,2),e=Ca(e,n,2),e!==null&&(Ln(e,2),Pi(e))}function Be(e,n,a){if(e.tag===3)$m(e,e,a);else for(;n!==null;){if(n.tag===3){$m(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){e=li(a,e),a=tm(2),o=Ca(n,a,2),o!==null&&(em(a,o,n,e),Ln(o,2),Pi(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $v;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),e=ay.bind(null,e,n,a),n.then(e,e))}function ay(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>E()-Xl?(Ne&2)===0&&is(e,0):Pf|=a,es===ye&&(es=0)),Pi(e)}function tx(e,n){n===0&&(n=Ie()),e=or(e,n),e!==null&&(Ln(e,n),Pi(e))}function ry(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),tx(e,a)}function sy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),tx(e,a)}function oy(e,n){return Xe(e,n)}var Ql=null,rs=null,Xf=!1,Jl=!1,Wf=!1,Ba=0;function Pi(e){e!==rs&&e.next===null&&(rs===null?Ql=rs=e:rs=rs.next=e),Jl=!0,Xf||(Xf=!0,cy())}function Eo(e,n){if(!Wf&&Jl){Wf=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Vt(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ax(o,f))}else f=ye,f=vt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,ax(o,f));o=o.next}while(a);Wf=!1}}function ly(){ex()}function ex(){Jl=Xf=!1;var e=0;Ba!==0&&vy()&&(e=Ba);for(var n=E(),a=null,o=Ql;o!==null;){var u=o.next,f=nx(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(rs=a)):(a=o,(e!==0||(f&3)!==0)&&(Jl=!0)),o=u}xn!==0&&xn!==5||Eo(e),Ba!==0&&(Ba=0)}function nx(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Vt(f),T=1<<v,F=u[v];F===-1?((T&a)===0||(T&o)!==0)&&(u[v]=ie(T,n)):F<=n&&(e.expiredLanes|=T),f&=~T}if(n=qe,a=ye,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Zt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Zt(o),nr(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=Lt;break;default:a=ft}return o=ix.bind(null,e),a=Xe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Zt(o),e.callbackPriority=2,e.callbackNode=null,2}function ix(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=ye;return o=vt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Fm(e,o,n),nx(e,E()),e.callbackNode!=null&&e.callbackNode===a?ix.bind(null,e):null)}function ax(e,n){if(Kl())return null;Fm(e,n,!0)}function cy(){Sy(function(){(Ne&6)!==0?Xe(gt,ly):ex()})}function qf(){if(Ba===0){var e=Xr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ba=e}return Ba}function rx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function sx(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=rx((u[pn]||null).action),v=o.submitter;v&&(n=(n=v[pn]||null)?rx(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ul("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var F=v?sx(u,v):new FormData(u);df(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=v?sx(u,v):new FormData(u),df(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var Zf=Cu[Yf],fy=Zf.toLowerCase(),dy=Zf[0].toUpperCase()+Zf.slice(1);Mi(fy,"on"+dy)}Mi(Bp,"onAnimationEnd"),Mi(Fp,"onAnimationIteration"),Mi(Ip,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Cv,"onTransitionRun"),Mi(wv,"onTransitionStart"),Mi(Dv,"onTransitionCancel"),Mi(Hp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function ox(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],F=T.instance,et=T.currentTarget;if(T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(dt){hl(dt)}u.currentTarget=null,f=F}else for(v=0;v<o.length;v++){if(T=o[v],F=T.instance,et=T.currentTarget,T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=et;try{f(u)}catch(dt){hl(dt)}u.currentTarget=null,f=F}}}}function ve(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var o=e+"__bubble";a.has(o)||(lx(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),lx(a,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[$l]){e[$l]=!0,Z.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,jf("selectionchange",!1,n))}}function lx(e,n,a,o){switch(Bx(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=fd}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=o.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=va(T),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){o=f=v;continue t}T=T.parentNode}}o=o.return}hp(function(){var et=f,dt=hu(a),_t=[];t:{var rt=Gp.get(e);if(rt!==void 0){var lt=ul,It=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":lt=sv;break;case"focusin":It="focus",lt=vu;break;case"focusout":It="blur",lt=vu;break;case"beforeblur":case"afterblur":lt=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=cv;break;case Bp:case Fp:case Ip:lt=Q_;break;case Hp:lt=fv;break;case"scroll":case"scrollend":lt=q_;break;case"wheel":lt=hv;break;case"copy":case"cut":case"paste":lt=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=_p;break;case"toggle":case"beforetoggle":lt=mv}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),q=te?rt!==null?rt+"Capture":null:rt;te=[];for(var k=et,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||q===null||(pt=qs(k,q),pt!=null&&te.push(Ao(k,pt,Q))),Ve)break;k=k.return}0<te.length&&(rt=new lt(rt,It,null,a,dt),_t.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&a!==du&&(It=a.relatedTarget||a.fromElement)&&(va(It)||It[Vi]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(It=a.relatedTarget||a.toElement,lt=et,It=It?va(It):null,It!==null&&(Ve=c(It),te=It.tag,It!==Ve||te!==5&&te!==27&&te!==6)&&(It=null)):(lt=null,It=et),lt!==It)){if(te=xp,pt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=_p,pt="onPointerLeave",q="onPointerEnter",k="pointer"),Ve=lt==null?rt:W(lt),Q=It==null?rt:W(It),rt=new te(pt,k+"leave",lt,a,dt),rt.target=Ve,rt.relatedTarget=Q,pt=null,va(dt)===et&&(te=new te(q,k+"enter",It,a,dt),te.target=Q,te.relatedTarget=Ve,pt=te),Ve=pt,lt&&It)e:{for(te=py,q=lt,k=It,Q=0,pt=q;pt;pt=te(pt))Q++;pt=0;for(var Kt=k;Kt;Kt=te(Kt))pt++;for(;0<Q-pt;)q=te(q),Q--;for(;0<pt-Q;)k=te(k),pt--;for(;Q--;){if(q===k||k!==null&&q===k.alternate){te=q;break e}q=te(q),k=te(k)}te=null}else te=null;lt!==null&&cx(_t,rt,lt,te,!1),It!==null&&Ve!==null&&cx(_t,Ve,It,te,!0)}}t:{if(rt=et?W(et):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var De=Ap;else if(Ep(rt))if(Rp)De=Tv;else{De=bv;var kt=Mv}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&fu(et.elementType)&&(De=Ap):De=Ev;if(De&&(De=De(e,et))){Tp(_t,De,a,dt);break t}kt&&kt(e,rt,et),e==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&Sn(rt,"number",rt.value)}switch(kt=et?W(et):window,e){case"focusin":(Ep(kt)||kt.contentEditable==="true")&&(Pr=kt,Tu=et,to=null);break;case"focusout":to=Tu=Pr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,zp(_t,a,dt);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":zp(_t,a,dt)}var fe;if(Su)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else zr?Mp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(vp&&a.locale!=="ko"&&(zr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&zr&&(fe=pp()):(Sa=dt,xu="value"in Sa?Sa.value:Sa.textContent,zr=!0)),kt=tc(et,Se),0<kt.length&&(Se=new gp(Se,e,null,a,dt),_t.push({event:Se,listeners:kt}),fe?Se.data=fe:(fe=bp(a),fe!==null&&(Se.data=fe)))),(fe=gv?_v(e,a):vv(e,a))&&(Se=tc(et,"onBeforeInput"),0<Se.length&&(kt=new gp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:kt,listeners:Se}),kt.data=fe)),uy(_t,e,et,a,dt)}ox(_t,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qs(e,a),u!=null&&o.unshift(Ao(e,u,f)),u=qs(e,n),u!=null&&o.push(Ao(e,u,f))),e.tag===3)return o;e=e.return}return[]}function py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cx(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,F=T.alternate,et=T.stateNode;if(T=T.tag,F!==null&&F===o)break;T!==5&&T!==26&&T!==27||et===null||(F=et,u?(et=qs(a,f),et!=null&&v.unshift(Ao(a,et,F))):u||(et=qs(a,f),et!=null&&v.push(Ao(a,et,F)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var my=/\r\n?/g,xy=/\u0000|\uFFFD/g;function ux(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(xy,"")}function fx(e,n){return n=ux(n),ux(e)===n}function Ge(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Li(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Li(e,""+o);break;case"className":Ae(e,"class",o);break;case"tabIndex":Ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(e,a,o);break;case"style":fp(e,o,f);break;case"data":if(n!=="object"){Ae(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ue(e,"popover",o);break;case"xlinkActuate":we(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":we(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":we(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":we(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":we(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":we(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":we(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":we(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":we(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ue(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X_.get(a)||a,ue(e,a,o))}}function Jf(e,n,a,o,u,f){switch(a){case"style":fp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Li(e,o):(typeof o=="number"||typeof o=="bigint")&&Li(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ue(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,v,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=v=u=null,F=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":v=dt;break;case"checked":F=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(e,n,o,dt,a,null)}}Ze(e,f,T,F,et,v,u,!1);return;case"select":ve("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:Ge(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!o,n!=null?mn(e,!!o,n,!1):a!=null&&mn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ge(e,n,v,T,a,null)}Tn(e,o,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,F,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)ve(To[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,et,o,a,null)}return;default:if(fu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Jf(e,n,dt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ge(e,n,T,o,a,null))}function gy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,F=null,et=null,dt=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=_t;default:o.hasOwnProperty(lt)||Ge(e,n,lt,null,o,_t)}}for(var rt in o){var lt=o[rt];if(_t=a[rt],o.hasOwnProperty(rt)&&(lt!=null||_t!=null))switch(rt){case"type":f=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":v=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&Ge(e,n,rt,lt,o,_t)}}ki(e,v,T,F,et,dt,f,u);return;case"select":lt=v=T=rt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":lt=F;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":rt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==F&&Ge(e,n,u,f,o,F)}n=T,a=v,o=lt,rt!=null?mn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":lt=rt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(e,n,T,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":rt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(e,n,v,u,o,f)}Mn(e,rt,lt);return;case"option":for(var It in a)rt=a[It],a.hasOwnProperty(It)&&rt!=null&&!o.hasOwnProperty(It)&&(It==="selected"?e.selected=!1:Ge(e,n,It,null,o,rt));for(F in o)rt=o[F],lt=a[F],o.hasOwnProperty(F)&&rt!==lt&&(rt!=null||lt!=null)&&(F==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ge(e,n,F,rt,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)rt=a[te],a.hasOwnProperty(te)&&rt!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,rt);for(et in o)if(rt=o[et],lt=a[et],o.hasOwnProperty(et)&&rt!==lt&&(rt!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Ge(e,n,et,rt,o,lt)}return;default:if(fu(n)){for(var Ve in a)rt=a[Ve],a.hasOwnProperty(Ve)&&rt!==void 0&&!o.hasOwnProperty(Ve)&&Jf(e,n,Ve,void 0,o,rt);for(dt in o)rt=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Jf(e,n,dt,rt,o,lt);return}}for(var q in a)rt=a[q],a.hasOwnProperty(q)&&rt!=null&&!o.hasOwnProperty(q)&&Ge(e,n,q,null,o,rt);for(_t in o)rt=o[_t],lt=a[_t],!o.hasOwnProperty(_t)||rt===lt||rt==null&&lt==null||Ge(e,n,_t,rt,o,lt)}function dx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _y(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&dx(v)){for(v=0,T=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],et=F.startTime;if(et>T)break;var dt=F.transferSize,_t=F.initiatorType;dt&&dx(_t)&&(F=F.responseEnd,v+=dt*(F<T?1:(T-et)/(F-et)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,td=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function hx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function px(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ed(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nd=null;function vy(){var e=window.event;return e&&e.type==="popstate"?e===nd?!1:(nd=e,!0):(nd=null,!1)}var mx=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,xx=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof xx<"u"?function(e){return xx.resolve(null).then(e).catch(My)}:mx;function My(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function gx(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),cs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);cs(n)}function _x(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function id(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function by(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function Ey(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function vx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function ad(e){return e.data==="$?"||e.data==="$~"}function rd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ty(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sd=null;function yx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Sx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Mx(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ws(e)}var pi=new Map,bx=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=j.d;j.d={f:Ay,r:Ry,D:Cy,C:wy,L:Dy,m:Uy,X:Ny,S:Ly,M:Oy};function Ay(){var e=oa.f(),n=Yl();return e||n}function Ry(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?H0(n):oa.r(e)}var ss=typeof document>"u"?null:document;function Ex(e,n,a){var o=ss;if(o&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bx.has(u)||(bx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),nt(n),o.head.appendChild(n)))}}function Cy(e){oa.D(e),Ex("dns-prefetch",e,null)}function wy(e,n){oa.C(e,n),Ex("preconnect",e,n)}function Dy(e,n,a){oa.L(e,n,a);var o=ss;if(o&&e&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(e)+'"]';var f=u;switch(n){case"style":f=os(e);break;case"script":f=ls(e)}pi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),wn(n,"link",e),nt(n),o.head.appendChild(n)))}}function Uy(e,n){oa.m(e,n);var a=ss;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ls(e)}if(!pi.has(f)&&(e=x({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),wn(o,"link",e),nt(o),a.head.appendChild(o)}}}function Ly(e,n,a){oa.S(e,n,a);var o=ss;if(o&&e){var u=st(o).hoistableStyles,f=os(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(Co(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&od(e,a);var F=v=o.createElement("link");nt(F),wn(F,"link",e),F._p=new Promise(function(et,dt){F.onload=et,F.onerror=dt}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ic(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function Ny(e,n){oa.X(e,n);var a=ss;if(a&&e){var o=st(a).hoistableScripts,u=ls(e),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0},n),(n=pi.get(u))&&ld(e,n),f=a.createElement("script"),nt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Oy(e,n){oa.M(e,n);var a=ss;if(a&&e){var o=st(a).hoistableScripts,u=ls(e),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&ld(e,n),f=a.createElement("script"),nt(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Tx(e,n,a,o){var u=(u=at.current)?nc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=st(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=os(a.href);var f=st(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Co(e)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||zy(u,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=st(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function os(e){return'href="'+Ye(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function Ax(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),nt(n),e.head.appendChild(n))}function ls(e){return'[src="'+Ye(e)+'"]'}function wo(e){return"script[async]"+e}function Rx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,nt(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),wn(o,"style",u),ic(o,a.precedence,e),n.instance=o;case"stylesheet":u=os(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;o=Ax(a),(u=pi.get(u))&&od(o,u),f=(e.ownerDocument||e).createElement("link"),nt(f);var v=f;return v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),wn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,e),n.instance=f;case"script":return f=ls(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,nt(u),u):(o=a,(u=pi.get(f))&&(o=x({},a),ld(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,e));return n.instance}function ic(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function od(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ld(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function Cx(e,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function wx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function By(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=os(o.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,o=Ax(o),(u=pi.get(u))&&od(o,u),f=f.createElement("link"),nt(f);var v=f;v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var cd=0;function Fy(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&cd===0&&(cd=62500*_y());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>cd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(Iy,e),sc=null,rc.call(e))}function Iy(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Hy(e,n,a,o,u,f,v,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Ux(e,n,a,o,u,f,v,T,F,et,dt,_t){return e=new Hy(e,n,a,v,F,et,dt,_t,T),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),e}function Lx(e){return e?(e=Ir,e):Ir}function Nx(e,n,a,o,u,f){u=Lx(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ca(e,o,n),a!==null&&(Yn(a,e,n),oo(a,e,n))}function Ox(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ud(e,n){Ox(e,n),(e=e.alternate)&&Ox(e,n)}function zx(e){if(e.tag===13||e.tag===31){var n=or(e,67108864);n!==null&&Yn(n,e,67108864),ud(e,67108864)}}function Px(e){if(e.tag===13||e.tag===31){var n=ii();n=Si(n);var a=or(e,n);a!==null&&Yn(a,e,n),ud(e,n)}}var lc=!0;function Gy(e,n,a,o){var u=B.T;B.T=null;var f=j.p;try{j.p=2,fd(e,n,a,o)}finally{j.p=f,B.T=u}}function Vy(e,n,a,o){var u=B.T;B.T=null;var f=j.p;try{j.p=8,fd(e,n,a,o)}finally{j.p=f,B.T=u}}function fd(e,n,a,o){if(lc){var u=dd(o);if(u===null)Qf(e,n,o,cc,a),Fx(e,o);else if(Xy(u,e,n,a,o))o.stopPropagation();else if(Fx(e,o),n&4&&-1<ky.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=bt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var F=1<<31-Vt(v);T.entanglements[1]|=F,v&=~F}Pi(f),(Ne&6)===0&&(Wl=E()+500,Eo(0))}}break;case 31:case 13:T=or(f,2),T!==null&&Yn(T,f,2),Yl(),ud(f,2)}if(f=dd(o),f===null&&Qf(e,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function dd(e){return e=hu(e),hd(e)}var cc=null;function hd(e){if(cc=null,e=va(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function Bx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case gt:return 2;case St:return 8;case ft:case qt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var pd=!1,Ia=null,Ha=null,Ga=null,Uo=new Map,Lo=new Map,Va=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fx(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&zx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Xy(e,n,a,o,u){switch(n){case"focusin":return Ia=No(Ia,e,n,a,o,u),!0;case"dragenter":return Ha=No(Ha,e,n,a,o,u),!0;case"mouseover":return Ga=No(Ga,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,e,n,a,o,u)),!0}return!1}function Ix(e){var n=va(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){Px(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){Px(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=R(a),n!==null&&zx(n),e.blockedOn=a,!1;n.shift()}return!0}function Hx(e,n,a){uc(e)&&a.delete(n)}function Wy(){pd=!1,Ia!==null&&uc(Ia)&&(Ia=null),Ha!==null&&uc(Ha)&&(Ha=null),Ga!==null&&uc(Ga)&&(Ga=null),Uo.forEach(Hx),Lo.forEach(Hx)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,pd||(pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Wy)))}var dc=null;function Gx(e){dc!==e&&(dc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hd(o||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,df(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function cs(e){function n(F){return fc(F,e)}Ia!==null&&fc(Ia,e),Ha!==null&&fc(Ha,e),Ga!==null&&fc(Ga,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Ix(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[pn]||null;if(typeof f=="function")v||Gx(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[pn]||null)T=v.formAction;else if(hd(u)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Gx(a)}}}function Vx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function md(e){this._internalRoot=e}hc.prototype.render=md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();Nx(a,o,e,n,null,null)},hc.prototype.unmount=md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nx(e.current,2,null,e,null,null),Yl(),n[Vi]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ks();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Ix(e)}};var kx=t.version;if(kx!=="19.2.5")throw Error(r(527,kx,"19.2.5"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var qy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Mt=pc.inject(qy),Tt=pc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=K0,f=Q0,v=J0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ux(e,1,!1,null,null,a,o,null,u,f,v,Vx),e[Vi]=n.current,Kf(e),new md(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=K0,v=Q0,T=J0,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Ux(e,1,!0,n,a??null,o,u,F,f,v,T,Vx),n.context=Lx(null),a=n.current,o=ii(),o=Si(o),u=Ra(o),u.callback=null,Ca(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Pi(n),e[Vi]=n.current,Kf(e),new hc(n)},Oo.version="19.2.5",Oo}var Qx;function eS(){if(Qx)return gd.exports;Qx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gd.exports=tS(),gd.exports}var nS=eS();const iS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Jx=s=>{const t=aS(s);return t.charAt(0).toUpperCase()+t.slice(1)},s_=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),rS=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var sS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const oS=Ds.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>Ds.createElement("svg",{ref:m,...sS,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:s_("lucide",l),...!c&&!rS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,g])=>Ds.createElement(p,g)),...Array.isArray(c)?c:[c]]));const Gn=(s,t)=>{const i=Ds.forwardRef(({className:r,...l},c)=>Ds.createElement(oS,{ref:c,iconNode:t,className:s_(`lucide-${iS(Jx(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Jx(s),i};const lS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],cS=Gn("activity",lS);const uS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],o_=Gn("crosshair",uS);const fS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dS=Gn("database",fS);const hS=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],pS=Gn("fast-forward",hS);const mS=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],xS=Gn("gauge",mS);const gS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],_S=Gn("grid-3x3",gS);const vS=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],yS=Gn("list",vS);const SS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],MS=Gn("pause",SS);const bS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ES=Gn("play",bS);const TS=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],l_=Gn("radar",TS);const AS=[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",key:"2a1g8i"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",key:"rg3s36"}]],RS=Gn("rewind",AS);const CS=[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]],wS=Gn("satellite",CS);const DS=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],US=Gn("skip-back",DS);const LS=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],NS=Gn("skip-forward",LS);const OS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],zS=Gn("target",OS);const Yh="181",PS=0,$x=1,BS=2,c_=1,FS=2,pa=3,tr=0,Hn=1,Ci=2,xa=0,Us=1,th=2,tg=3,eg=4,IS=5,Rr=100,HS=101,GS=102,VS=103,kS=104,XS=200,WS=201,qS=202,YS=203,eh=204,nh=205,ZS=206,jS=207,KS=208,QS=209,JS=210,$S=211,t1=212,e1=213,n1=214,ih=0,ah=1,rh=2,Ns=3,sh=4,oh=5,lh=6,ch=7,u_=0,i1=1,a1=2,$a=0,r1=1,s1=2,o1=3,f_=4,l1=5,c1=6,u1=7,d_=300,Os=301,zs=302,uh=303,fh=304,au=306,Yc=1e3,Fi=1001,dh=1002,si=1003,f1=1004,mc=1005,vi=1006,Sd=1007,wr=1008,Hi=1009,h_=1010,p_=1011,Yo=1012,Zh=1013,Dr=1014,ma=1015,Fs=1016,jh=1017,Kh=1018,Zo=1020,m_=35902,x_=35899,g_=1021,__=1022,Di=1023,jo=1026,Ko=1027,v_=1028,Qh=1029,Jh=1030,$h=1031,tp=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,hh=35840,ph=35841,mh=35842,xh=35843,gh=36196,_h=37492,vh=37496,yh=37808,Sh=37809,Mh=37810,bh=37811,Eh=37812,Th=37813,Ah=37814,Rh=37815,Ch=37816,wh=37817,Dh=37818,Uh=37819,Lh=37820,Nh=37821,Oh=36492,zh=36494,Ph=36495,Bh=36283,Fh=36284,Ih=36285,Hh=36286,d1=3200,h1=3201,y_=0,p1=1,Ka="",In="srgb",Ps="srgb-linear",Zc="linear",ke="srgb",us=7680,ng=519,m1=512,x1=513,g1=514,S_=515,_1=516,v1=517,y1=518,S1=519,Gh=35044,ig="300 es",Ii=2e3,jc=2001;function M_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M1(){const s=Qo("canvas");return s.style.display="block",s}const ag={};function Kc(...s){const t="THREE."+s.shift();console.log(t,...s)}function re(...s){const t="THREE."+s.shift();console.warn(t,...s)}function en(...s){const t="THREE."+s.shift();console.error(t,...s)}function Jo(...s){const t=s.join(" ");t in ag||(ag[t]=!0,re(...s))}function b1(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const Wo=Math.PI/180,$o=180/Math.PI;function ga(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function ep(s,t){return(s%t+t)%t}function E1(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function T1(s,t,i){return s!==t?(i-s)/(t-s):0}function qo(s,t,i){return(1-i)*s+i*t}function A1(s,t,i,r){return qo(s,t,1-Math.exp(-i*r))}function R1(s,t=1){return t-Math.abs(ep(s,t*2)-t)}function C1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function w1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function D1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function U1(s,t){return s+Math.random()*(t-s)}function L1(s){return s*(.5-Math.random())}function N1(s){s!==void 0&&(rg=s);let t=rg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function O1(s){return s*Wo}function z1(s){return s*$o}function P1(s){return(s&s-1)===0&&s!==0}function B1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function F1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function I1(s,t,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+r)/2),g=d((t+r)/2),x=c((t-r)/2),y=d((t-r)/2),S=c((r-t)/2),b=d((r-t)/2);switch(l){case"XYX":s.set(h*g,m*x,m*y,h*p);break;case"YZY":s.set(m*y,h*g,m*x,h*p);break;case"ZXZ":s.set(m*x,m*y,h*g,h*p);break;case"XZX":s.set(h*g,m*b,m*S,h*p);break;case"YXY":s.set(m*S,h*g,m*b,h*p);break;case"ZYZ":s.set(m*b,m*S,h*g,h*p);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:Wo,RAD2DEG:$o,generateUUID:ga,clamp:Me,euclideanModulo:ep,mapLinear:E1,inverseLerp:T1,lerp:qo,damp:A1,pingpong:R1,smoothstep:C1,smootherstep:w1,randInt:D1,randFloat:U1,randFloatSpread:L1,seededRandom:N1,degToRad:O1,radToDeg:z1,isPowerOfTwo:P1,ceilPowerOfTwo:B1,floorPowerOfTwo:F1,setQuaternionFromProperEuler:I1,normalize:Fe,denormalize:wi};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],y=c[d+0],S=c[d+1],b=c[d+2],A=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(h>=1){t[i+0]=y,t[i+1]=S,t[i+2]=b,t[i+3]=A;return}if(x!==A||m!==y||p!==S||g!==b){let M=m*y+p*S+g*b+x*A;M<0&&(y=-y,S=-S,b=-b,A=-A,M=-M);let _=1-h;if(M<.9995){const U=Math.acos(M),D=Math.sin(U);_=Math.sin(_*U)/D,h=Math.sin(h*U)/D,m=m*_+y*h,p=p*_+S*h,g=g*_+b*h,x=x*_+A*h}else{m=m*_+y*h,p=p*_+S*h,g=g*_+b*h,x=x*_+A*h;const U=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=U,p*=U,g*=U,x*=U}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[d],y=c[d+1],S=c[d+2],b=c[d+3];return t[i]=h*b+g*x+m*S-p*y,t[i+1]=m*b+g*y+p*x-h*S,t[i+2]=p*b+g*S+h*y-m*x,t[i+3]=g*b-h*x-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(c/2),y=m(r/2),S=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=y*g*x+p*S*b,this._y=p*S*x-y*g*b,this._z=p*g*b+y*S*x,this._w=p*g*x-y*S*b;break;case"YXZ":this._x=y*g*x+p*S*b,this._y=p*S*x-y*g*b,this._z=p*g*b-y*S*x,this._w=p*g*x+y*S*b;break;case"ZXY":this._x=y*g*x-p*S*b,this._y=p*S*x+y*g*b,this._z=p*g*b+y*S*x,this._w=p*g*x-y*S*b;break;case"ZYX":this._x=y*g*x-p*S*b,this._y=p*S*x+y*g*b,this._z=p*g*b-y*S*x,this._w=p*g*x+y*S*b;break;case"YZX":this._x=y*g*x+p*S*b,this._y=p*S*x+y*g*b,this._z=p*g*b-y*S*x,this._w=p*g*x-y*S*b;break;case"XZY":this._x=y*g*x-p*S*b,this._y=p*S*x-y*g*b,this._z=p*g*b+y*S*x,this._w=p*g*x+y*S*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=r+h+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(r>h&&r>x){const S=2*Math.sqrt(1+r-h-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-r-x);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),x=2*(c*r-d*i);return this.x=i+m*p+d*x-h*g,this.y=r+m*g+h*p-c*x,this.z=l+m*x+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new $,sg=new tl;class de{constructor(t,i,r,l,c,d,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],y=r[2],S=r[5],b=r[8],A=l[0],M=l[3],_=l[6],U=l[1],D=l[4],O=l[7],I=l[2],L=l[5],P=l[8];return c[0]=d*A+h*U+m*I,c[3]=d*M+h*D+m*L,c[6]=d*_+h*O+m*P,c[1]=p*A+g*U+x*I,c[4]=p*M+g*D+x*L,c[7]=p*_+g*O+x*P,c[2]=y*A+S*U+b*I,c[5]=y*M+S*D+b*L,c[8]=y*_+S*O+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*d-h*p,y=h*m-g*c,S=p*c-d*m,b=i*x+r*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(h*r-l*d)*A,t[3]=y*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(d*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(bd.makeScale(t,i)),this}rotate(t){return this.premultiply(bd.makeRotation(-t)),this}translate(t,i){return this.premultiply(bd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new de,og=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H1(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===ke&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:t,whitePoint:r,transfer:Zc,toXYZ:og,fromXYZ:lg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:r,transfer:ke,toXYZ:og,fromXYZ:lg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const Le=H1();function _a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class G1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fs===void 0&&(fs=Qo("canvas")),fs.width=t.width,fs.height=t.height;const l=fs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=fs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V1=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=ga(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ed(l[d].image)):c.push(Ed(l[d]))}else c=Ed(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?G1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let k1=0;const Td=new $;class Dn extends Is{constructor(t=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=Fi,l=Fi,c=vi,d=wr,h=Di,m=Hi,p=Dn.DEFAULT_ANISOTROPY,g=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=ga(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yc:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yc:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=d_;Dn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],y=m[1],S=m[5],b=m[9],A=m[2],M=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(S+1)/2,I=(_+1)/2,L=(g+y)/4,P=(x+A)/4,Y=(b+M)/4;return D>O&&D>I?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=L/r,c=P/r):O>I?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=L/l,c=Y/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=P/c,l=Y/c),this.set(r,l,c,i),this}let U=Math.sqrt((M-b)*(M-b)+(x-A)*(x-A)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(M-b)/U,this.y=(x-A)/U,this.z=(y-g)/U,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X1 extends Is{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Dn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends X1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class b_ extends Dn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class W1 extends Dn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),gc.subVectors(this.max,zo),ds.subVectors(t.a,zo),hs.subVectors(t.b,zo),ps.subVectors(t.c,zo),Xa.subVectors(hs,ds),Wa.subVectors(ps,hs),yr.subVectors(ds,ps);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-yr.z,yr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,yr.z,0,-yr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-yr.y,yr.x,0];return!Ad(i,ds,hs,ps,gc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,ds,hs,ps,gc))?!1:(_c.crossVectors(Xa,Wa),i=[_c.x,_c.y,_c.z],Ad(i,ds,hs,ps,gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new $,new $,new $,new $,new $,new $,new $,new $],Ti=new $,xc=new el,ds=new $,hs=new $,ps=new $,Xa=new $,Wa=new $,yr=new $,zo=new $,gc=new $,_c=new $,Sr=new $;function Ad(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Sr.fromArray(s,c);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=t.dot(Sr),p=i.dot(Sr),g=r.dot(Sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const q1=new el,Po=new $,Rd=new $;class nl{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):q1.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Rd)),this.expandByPoint(Po.copy(t.center).sub(Rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new $,Cd=new $,vc=new $,qa=new $,wd=new $,yc=new $,Dd=new $;class ip{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Cd.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),qa.copy(this.origin).sub(Cd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(vc),h=qa.dot(this.direction),m=-qa.dot(vc),p=qa.lengthSq(),g=Math.abs(1-d*d);let x,y,S,b;if(g>0)if(x=d*m-h,y=d*h-m,b=c*g,x>=0)if(y>=-b)if(y<=b){const A=1/g;x*=A,y*=A,S=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;else y<=-b?(x=Math.max(0,-(-d*c+h)),y=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p):y<=b?(x=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(x=Math.max(0,-(d*c+h)),y=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p);else y=d>0?-c:c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Cd).addScaledVector(vc,y),S}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,d=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,d=(t.min.y-y.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(h=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,c){wd.subVectors(i,t),yc.subVectors(r,t),Dd.crossVectors(wd,yc);let d=this.direction.dot(Dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;qa.subVectors(this.origin,t);const m=h*this.direction.dot(yc.crossVectors(qa,yc));if(m<0)return null;const p=h*this.direction.dot(wd.cross(qa));if(p<0||m+p>d)return null;const g=-h*qa.dot(Dd);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,r,l,c,d,h,m,p,g,x,y,S,b,A,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,x,y,S,b,A,M)}set(t,i,r,l,c,d,h,m,p,g,x,y,S,b,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=S,_[7]=b,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ms.setFromMatrixColumn(t,0).length(),c=1/ms.setFromMatrixColumn(t,1).length(),d=1/ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const y=d*g,S=d*x,b=h*g,A=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+b*p,i[5]=y-A*p,i[9]=-h*m,i[2]=A-y*p,i[6]=b+S*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*g,S=m*x,b=p*g,A=p*x;i[0]=y+A*h,i[4]=b*h-S,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=S*h-b,i[6]=A+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*g,S=m*x,b=p*g,A=p*x;i[0]=y-A*h,i[4]=-d*x,i[8]=b+S*h,i[1]=S+b*h,i[5]=d*g,i[9]=A-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*g,S=d*x,b=h*g,A=h*x;i[0]=m*g,i[4]=b*p-S,i[8]=y*p+A,i[1]=m*x,i[5]=A*p+y,i[9]=S*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,S=d*p,b=h*m,A=h*p;i[0]=m*g,i[4]=A-y*x,i[8]=b*x+S,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*x+b,i[10]=y-A*x}else if(t.order==="XZY"){const y=d*m,S=d*p,b=h*m,A=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+A,i[5]=d*g,i[9]=S*x-b,i[2]=b*x-S,i[6]=h*g,i[10]=A*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y1,t,Z1)}lookAt(t,i,r){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ya.crossVectors(r,ai),Ya.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ya.crossVectors(r,ai)),Ya.normalize(),Sc.crossVectors(ai,Ya),l[0]=Ya.x,l[4]=Sc.x,l[8]=ai.x,l[1]=Ya.y,l[5]=Sc.y,l[9]=ai.y,l[2]=Ya.z,l[6]=Sc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],y=r[9],S=r[13],b=r[2],A=r[6],M=r[10],_=r[14],U=r[3],D=r[7],O=r[11],I=r[15],L=l[0],P=l[4],Y=l[8],w=l[12],C=l[1],V=l[5],K=l[9],ot=l[13],mt=l[2],ht=l[6],B=l[10],j=l[14],X=l[3],ct=l[7],xt=l[11],N=l[15];return c[0]=d*L+h*C+m*mt+p*X,c[4]=d*P+h*V+m*ht+p*ct,c[8]=d*Y+h*K+m*B+p*xt,c[12]=d*w+h*ot+m*j+p*N,c[1]=g*L+x*C+y*mt+S*X,c[5]=g*P+x*V+y*ht+S*ct,c[9]=g*Y+x*K+y*B+S*xt,c[13]=g*w+x*ot+y*j+S*N,c[2]=b*L+A*C+M*mt+_*X,c[6]=b*P+A*V+M*ht+_*ct,c[10]=b*Y+A*K+M*B+_*xt,c[14]=b*w+A*ot+M*j+_*N,c[3]=U*L+D*C+O*mt+I*X,c[7]=U*P+D*V+O*ht+I*ct,c[11]=U*Y+D*K+O*B+I*xt,c[15]=U*w+D*ot+O*j+I*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],y=t[10],S=t[14],b=t[3],A=t[7],M=t[11],_=t[15];return b*(+c*m*x-l*p*x-c*h*y+r*p*y+l*h*S-r*m*S)+A*(+i*m*S-i*p*y+c*d*y-l*d*S+l*p*g-c*m*g)+M*(+i*p*x-i*h*S-c*d*x+r*d*S+c*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*y+l*d*x-r*d*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],y=t[10],S=t[11],b=t[12],A=t[13],M=t[14],_=t[15],U=x*M*p-A*y*p+A*m*S-h*M*S-x*m*_+h*y*_,D=b*y*p-g*M*p-b*m*S+d*M*S+g*m*_-d*y*_,O=g*A*p-b*x*p+b*h*S-d*A*S-g*h*_+d*x*_,I=b*x*m-g*A*m-b*h*y+d*A*y+g*h*M-d*x*M,L=i*U+r*D+l*O+c*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=U*P,t[1]=(A*y*c-x*M*c-A*l*S+r*M*S+x*l*_-r*y*_)*P,t[2]=(h*M*c-A*m*c+A*l*p-r*M*p-h*l*_+r*m*_)*P,t[3]=(x*m*c-h*y*c-x*l*p+r*y*p+h*l*S-r*m*S)*P,t[4]=D*P,t[5]=(g*M*c-b*y*c+b*l*S-i*M*S-g*l*_+i*y*_)*P,t[6]=(b*m*c-d*M*c-b*l*p+i*M*p+d*l*_-i*m*_)*P,t[7]=(d*y*c-g*m*c+g*l*p-i*y*p-d*l*S+i*m*S)*P,t[8]=O*P,t[9]=(b*x*c-g*A*c-b*r*S+i*A*S+g*r*_-i*x*_)*P,t[10]=(d*A*c-b*h*c+b*r*p-i*A*p-d*r*_+i*h*_)*P,t[11]=(g*h*c-d*x*c-g*r*p+i*x*p+d*r*S-i*h*S)*P,t[12]=I*P,t[13]=(g*A*l-b*x*l+b*r*y-i*A*y-g*r*M+i*x*M)*P,t[14]=(b*h*l-d*A*l-b*r*m+i*A*m+d*r*M-i*h*M)*P,t[15]=(d*x*l-g*h*l+g*r*m-i*x*m-d*r*y+i*h*y)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,x=h+h,y=c*p,S=c*g,b=c*x,A=d*g,M=d*x,_=h*x,U=m*p,D=m*g,O=m*x,I=r.x,L=r.y,P=r.z;return l[0]=(1-(A+_))*I,l[1]=(S+O)*I,l[2]=(b-D)*I,l[3]=0,l[4]=(S-O)*L,l[5]=(1-(y+_))*L,l[6]=(M+U)*L,l[7]=0,l[8]=(b+D)*P,l[9]=(M-U)*P,l[10]=(1-(y+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const d=ms.set(l[4],l[5],l[6]).length(),h=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ai.copy(this);const p=1/c,g=1/d,x=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let b,A;if(m)b=c/(d-c),A=d*c/(d-c);else if(h===Ii)b=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===jc)b=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let b,A;if(m)b=1/(d-c),A=d/(d-c);else if(h===Ii)b=-2/(d-c),A=-(d+c)/(d-c);else if(h===jc)b=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ms=new $,Ai=new Je,Y1=new $(0,0,0),Z1=new $(1,1,1),Ya=new $,Sc=new $,ai=new $,cg=new Je,ug=new tl;class Gi{constructor(t=0,i=0,r=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return cg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ug.setFromEuler(this),this.setFromQuaternion(ug,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let j1=0;const fg=new $,xs=new tl,ua=new Je,Mc=new $,Bo=new $,K1=new $,Q1=new tl,dg=new $(1,0,0),hg=new $(0,1,0),pg=new $(0,0,1),mg={type:"added"},J1={type:"removed"},gs={type:"childadded",child:null},Ud={type:"childremoved",child:null};class gn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new $,i=new Gi,r=new tl,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new de}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(dg,t)}rotateY(t){return this.rotateOnAxis(hg,t)}rotateZ(t){return this.rotateOnAxis(pg,t)}translateOnAxis(t,i){return fg.copy(t).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(dg,t)}translateY(t){return this.translateOnAxis(hg,t)}translateZ(t){return this.translateOnAxis(pg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mc.copy(t):Mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Bo,Mc,this.up):ua.lookAt(Mc,Bo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(ua),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(en("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mg),gs.child=t,this.dispatchEvent(gs),gs.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(J1),Ud.child=t,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mg),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,K1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Q1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),x=d(t.shapes),y=d(t.skeletons),S=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}gn.DEFAULT_UP=new $(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new $,fa=new $,Ld=new $,da=new $,_s=new $,vs=new $,xg=new $,Nd=new $,Od=new $,zd=new $,Pd=new nn,Bd=new nn,Fd=new nn;class _i{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ri.subVectors(l,i),fa.subVectors(r,i),Ld.subVectors(t,i);const d=Ri.dot(Ri),h=Ri.dot(fa),m=Ri.dot(Ld),p=fa.dot(fa),g=fa.dot(Ld),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(p*m-h*g)*y,b=(d*g-h*m)*y;return c.set(1-S-b,b,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Pd.setScalar(0),Bd.setScalar(0),Fd.setScalar(0),Pd.fromBufferAttribute(t,i),Bd.fromBufferAttribute(t,r),Fd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Pd,c.x),d.addScaledVector(Bd,c.y),d.addScaledVector(Fd,c.z),d}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),fa.subVectors(t,i),Ri.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ri.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;_s.subVectors(l,r),vs.subVectors(c,r),Nd.subVectors(t,r);const m=_s.dot(Nd),p=vs.dot(Nd);if(m<=0&&p<=0)return i.copy(r);Od.subVectors(t,l);const g=_s.dot(Od),x=vs.dot(Od);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(_s,d);zd.subVectors(t,c);const S=_s.dot(zd),b=vs.dot(zd);if(b>=0&&S<=b)return i.copy(c);const A=S*p-m*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(vs,h);const M=g*b-S*x;if(M<=0&&x-g>=0&&S-b>=0)return xg.subVectors(c,l),h=(x-g)/(x-g+(S-b)),i.copy(l).addScaledVector(xg,h);const _=1/(M+A+y);return d=A*_,h=y*_,i.copy(r).addScaledVector(_s,d).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Id(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class he{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Le.workingColorSpace){if(t=ep(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Id(d,c,t+1/3),this.g=Id(d,c,t),this.b=Id(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=In){function r(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=In){const r=T_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return Le.workingToColorSpace(zn.copy(this),t),Math.round(Me(zn.r*255,0,255))*65536+Math.round(Me(zn.g*255,0,255))*256+Math.round(Me(zn.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=In){Le.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==In?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(bc);const r=qo(Za.h,bc.h,i),l=qo(Za.s,bc.s,i),c=qo(Za.l,bc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new he;he.NAMES=T_;let $1=0;class er extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=Us,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==eh&&(r.blendSrc=this.blendSrc),this.blendDst!==nh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qc extends er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new $,Ec=new le;let tM=0;class yi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Gh,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array),l=Fe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}}class A_ extends yi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class R_ extends yi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class hn extends yi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let eM=0;const mi=new Je,Hd=new gn,ys=new $,ri=new el,Fo=new el,En=new $;class Un extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M_(t)?R_:A_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Hd.lookAt(t),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ri.min,Fo.min),ri.expandByPoint(En),En.addVectors(ri.max,Fo.max),ri.expandByPoint(En)):(ri.expandByPoint(Fo.min),ri.expandByPoint(Fo.max))}ri.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)En.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)En.fromBufferAttribute(h,p),m&&(ys.fromBufferAttribute(t,p),En.add(ys)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<r.count;Y++)h[Y]=new $,m[Y]=new $;const p=new $,g=new $,x=new $,y=new le,S=new le,b=new le,A=new $,M=new $;function _(Y,w,C){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),y.fromBufferAttribute(c,Y),S.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),x.sub(p),S.sub(y),b.sub(y);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(V),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(V),h[Y].add(A),h[w].add(A),h[C].add(A),m[Y].add(M),m[w].add(M),m[C].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Y=0,w=U.length;Y<w;++Y){const C=U[Y],V=C.start,K=C.count;for(let ot=V,mt=V+K;ot<mt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new $,O=new $,I=new $,L=new $;function P(Y){I.fromBufferAttribute(l,Y),L.copy(I);const w=h[Y];D.copy(w),D.sub(I.multiplyScalar(I.dot(w))).normalize(),O.crossVectors(L,w);const V=O.dot(m[Y])<0?-1:1;d.setXYZW(Y,D.x,D.y,D.z,V)}for(let Y=0,w=U.length;Y<w;++Y){const C=U[Y],V=C.start,K=C.count;for(let ot=V,mt=V+K;ot<mt;ot+=3)P(t.getX(ot+0)),P(t.getX(ot+1)),P(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new $,c=new $,d=new $,h=new $,m=new $,p=new $,g=new $,x=new $;if(t)for(let y=0,S=t.count;y<S;y+=3){const b=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let S=0,b=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*g;for(let _=0;_<g;_++)y[b++]=p[S++]}return new yi(y,g,x)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Un,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],S=t(y,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let y=0,S=x.length;y<S;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gg=new Je,Mr=new ip,Tc=new nl,_g=new $,Ac=new $,Rc=new $,Cc=new $,Gd=new $,wc=new $,vg=new $,Dc=new $;class Zn extends gn{constructor(t=new Un,i=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(Gd.fromBufferAttribute(x,t),d?wc.addScaledVector(Gd,g):wc.addScaledVector(Gd.sub(i),g))}i.add(wc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(Tc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Tc,_g)===null||Mr.origin.distanceToSquared(_g)>(t.far-t.near)**2))&&(gg.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(gg),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=d[M.materialIndex],U=Math.max(M.start,S.start),D=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let O=U,I=D;O<I;O+=3){const L=h.getX(O),P=h.getX(O+1),Y=h.getX(O+2);l=Uc(this,_,t,r,p,g,x,L,P,Y),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let M=b,_=A;M<_;M+=3){const U=h.getX(M),D=h.getX(M+1),O=h.getX(M+2);l=Uc(this,d,t,r,p,g,x,U,D,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=d[M.materialIndex],U=Math.max(M.start,S.start),D=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let O=U,I=D;O<I;O+=3){const L=O,P=O+1,Y=O+2;l=Uc(this,_,t,r,p,g,x,L,P,Y),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=b,_=A;M<_;M+=3){const U=M,D=M+1,O=M+2;l=Uc(this,d,t,r,p,g,x,U,D,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nM(s,t,i,r,l,c,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===tr,h),m===null)return null;Dc.copy(h),Dc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:s}}function Uc(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Ac),s.getVertexPosition(m,Rc),s.getVertexPosition(p,Cc);const g=nM(s,t,i,r,Ac,Rc,Cc,vg);if(g){const x=new $;_i.getBarycoord(vg,Ac,Rc,Cc,x),l&&(g.uv=_i.getInterpolatedAttribute(l,h,m,p,x,new le)),c&&(g.uv1=_i.getInterpolatedAttribute(c,h,m,p,x,new le)),d&&(g.normal=_i.getInterpolatedAttribute(d,h,m,p,x,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new $,materialIndex:0};_i.getNormal(Ac,Rc,Cc,y.normal),g.face=y,g.barycoord=x}return g}class il extends Un{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],x=[];let y=0,S=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(x,2));function b(A,M,_,U,D,O,I,L,P,Y,w){const C=O/P,V=I/Y,K=O/2,ot=I/2,mt=L/2,ht=P+1,B=Y+1;let j=0,X=0;const ct=new $;for(let xt=0;xt<B;xt++){const N=xt*V-ot;for(let it=0;it<ht;it++){const yt=it*C-K;ct[A]=yt*U,ct[M]=N*D,ct[_]=mt,p.push(ct.x,ct.y,ct.z),ct[A]=0,ct[M]=0,ct[_]=L>0?1:-1,g.push(ct.x,ct.y,ct.z),x.push(it/P),x.push(1-xt/Y),j+=1}}for(let xt=0;xt<Y;xt++)for(let N=0;N<P;N++){const it=y+N+ht*xt,yt=y+N+ht*(xt+1),Et=y+(N+1)+ht*(xt+1),Nt=y+(N+1)+ht*xt;m.push(it,yt,Nt),m.push(yt,Et,Nt),X+=6}h.addGroup(S,X,w),S+=X,y+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(s){const t={};for(let i=0;i<s.length;i++){const r=Bs(s[i]);for(const l in r)t[l]=r[l]}return t}function iM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function C_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const aM={clone:Bs,merge:Fn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class w_ extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new $,yg=new le,Sg=new le;class gi extends w_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,yg,Sg),i.subVectors(Sg,yg)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,Ms=1;class oM extends gn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Ss,Ms,t,i);l.layers=this.layers,this.add(l);const c=new gi(Ss,Ms,t,i);c.layers=this.layers,this.add(c);const d=new gi(Ss,Ms,t,i);d.layers=this.layers,this.add(d);const h=new gi(Ss,Ms,t,i);h.layers=this.layers,this.add(h);const m=new gi(Ss,Ms,t,i);m.layers=this.layers,this.add(m);const p=new gi(Ss,Ms,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class D_ extends Dn{constructor(t=[],i=Os,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lM extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new D_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),c=new Ui({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Zn(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=vi),new oM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class ws extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),S=.02,b=.005;p.inputState.pinching&&y>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ws;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class ap{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=i}clone(){return new ap(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uM extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class fM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Gh,this.updateRanges=[],this.version=0,this.uuid=ga()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new $;class Jc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array),l=Fe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),r=Fe(r,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new yi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class U_ extends er{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bs;const Io=new $,Es=new $,Ts=new $,As=new le,Ho=new le,L_=new Je,Lc=new $,Go=new $,Nc=new $,Mg=new le,kd=new le,bg=new le;class dM extends gn{constructor(t=new U_){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Un;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new fM(i,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Jc(r,3,0,!1)),bs.setAttribute("uv",new Jc(r,2,3,!1))}this.geometry=bs,this.material=t,this.center=new le(.5,.5),this.count=1}raycast(t,i){t.camera===null&&en('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),L_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Oc(Lc.set(-.5,-.5,0),Ts,d,Es,l,c),Oc(Go.set(.5,-.5,0),Ts,d,Es,l,c),Oc(Nc.set(.5,.5,0),Ts,d,Es,l,c),Mg.set(0,0),kd.set(1,0),bg.set(1,1);let h=t.ray.intersectTriangle(Lc,Go,Nc,!1,Io);if(h===null&&(Oc(Go.set(-.5,.5,0),Ts,d,Es,l,c),kd.set(0,1),h=t.ray.intersectTriangle(Lc,Nc,Go,!1,Io),h===null))return;const m=t.ray.origin.distanceTo(Io);m<t.near||m>t.far||i.push({distance:m,point:Io.clone(),uv:_i.getInterpolation(Io,Lc,Go,Nc,Mg,kd,bg,new le),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oc(s,t,i,r,l,c){As.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Ho.x=c*As.x-l*As.y,Ho.y=l*As.x+c*As.y):Ho.copy(As),s.copy(t),s.x+=Ho.x,s.y+=Ho.y,s.applyMatrix4(L_)}class hM extends Dn{constructor(t=null,i=1,r=1,l,c,d,h,m,p=si,g=si,x,y){super(null,d,h,m,p,g,l,c,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xd=new $,pM=new $,mM=new de;class Ar{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Xd.subVectors(r,i).cross(pM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Xd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||mM.getNormalMatrix(t),l=this.coplanarPoint(Xd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new nl,xM=new le(.5,.5),zc=new $;class rp{constructor(t=new Ar,i=new Ar,r=new Ar,l=new Ar,c=new Ar,d=new Ar){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],y=c[6],S=c[7],b=c[8],A=c[9],M=c[10],_=c[11],U=c[12],D=c[13],O=c[14],I=c[15];if(l[0].setComponents(p-d,S-g,_-b,I-U).normalize(),l[1].setComponents(p+d,S+g,_+b,I+U).normalize(),l[2].setComponents(p+h,S+x,_+A,I+D).normalize(),l[3].setComponents(p-h,S-x,_-A,I-D).normalize(),r)l[4].setComponents(m,y,M,O).normalize(),l[5].setComponents(p-m,S-y,_-M,I-O).normalize();else if(l[4].setComponents(p-m,S-y,_-M,I-O).normalize(),i===Ii)l[5].setComponents(p+m,S+y,_+M,I+O).normalize();else if(i===jc)l[5].setComponents(m,y,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=xM.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $c=new $,tu=new $,Eg=new Je,Vo=new ip,Pc=new nl,Wd=new $,Tg=new $;class N_ extends gn{constructor(t=new Un,i=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)$c.fromBufferAttribute(i,l-1),tu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=$c.distanceTo(tu);t.setAttribute("lineDistance",new hn(r,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;Eg.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(Eg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const S=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let A=S,M=b-1;A<M;A+=p){const _=g.getX(A),U=g.getX(A+1),D=Bc(this,t,Vo,m,_,U,A);D&&i.push(D)}if(this.isLineLoop){const A=g.getX(b-1),M=g.getX(S),_=Bc(this,t,Vo,m,A,M,b-1);_&&i.push(_)}}else{const S=Math.max(0,d.start),b=Math.min(y.count,d.start+d.count);for(let A=S,M=b-1;A<M;A+=p){const _=Bc(this,t,Vo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Bc(this,t,Vo,m,b-1,S,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bc(s,t,i,r,l,c,d){const h=s.geometry.attributes.position;if($c.fromBufferAttribute(h,l),tu.fromBufferAttribute(h,c),i.distanceSqToSegment($c,tu,Wd,Tg)>r)return;Wd.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Wd);if(!(p<t.near||p>t.far))return{distance:p,point:Tg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const Ag=new $,Rg=new $;class gM extends N_{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Ag.fromBufferAttribute(i,l),Rg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Ag.distanceTo(Rg);t.setAttribute("lineDistance",new hn(r,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends er{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cg=new Je,kh=new ip,Fc=new nl,Ic=new $;class _M extends gn{constructor(t=new Un,i=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;Cg.copy(l).invert(),kh.copy(t.ray).applyMatrix4(Cg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const y=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let b=y,A=S;b<A;b++){const M=p.getX(b);Ic.fromBufferAttribute(x,M),wg(Ic,M,m,l,t,i,this)}}else{const y=Math.max(0,d.start),S=Math.min(x.count,d.start+d.count);for(let b=y,A=S;b<A;b++)Ic.fromBufferAttribute(x,b),wg(Ic,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function wg(s,t,i,r,l,c,d){const h=kh.distanceSqToPoint(s);if(h<i){const m=new $;kh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class vM extends Dn{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class z_ extends Dn{constructor(t,i,r=Dr,l,c,d,h=si,m=si,p,g=jo,x=1){if(g!==jo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class P_ extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sp extends Un{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],d=[];h(l),p(r),g(),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(c.slice(),3)),this.setAttribute("uv",new hn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const D=new $,O=new $,I=new $;for(let L=0;L<i.length;L+=3)S(i[L+0],D),S(i[L+1],O),S(i[L+2],I),m(D,O,I,U)}function m(U,D,O,I){const L=I+1,P=[];for(let Y=0;Y<=L;Y++){P[Y]=[];const w=U.clone().lerp(O,Y/L),C=D.clone().lerp(O,Y/L),V=L-Y;for(let K=0;K<=V;K++)K===0&&Y===L?P[Y][K]=w:P[Y][K]=w.clone().lerp(C,K/V)}for(let Y=0;Y<L;Y++)for(let w=0;w<2*(L-Y)-1;w++){const C=Math.floor(w/2);w%2===0?(y(P[Y][C+1]),y(P[Y+1][C]),y(P[Y][C])):(y(P[Y][C+1]),y(P[Y+1][C+1]),y(P[Y+1][C]))}}function p(U){const D=new $;for(let O=0;O<c.length;O+=3)D.x=c[O+0],D.y=c[O+1],D.z=c[O+2],D.normalize().multiplyScalar(U),c[O+0]=D.x,c[O+1]=D.y,c[O+2]=D.z}function g(){const U=new $;for(let D=0;D<c.length;D+=3){U.x=c[D+0],U.y=c[D+1],U.z=c[D+2];const O=M(U)/2/Math.PI+.5,I=_(U)/Math.PI+.5;d.push(O,1-I)}b(),x()}function x(){for(let U=0;U<d.length;U+=6){const D=d[U+0],O=d[U+2],I=d[U+4],L=Math.max(D,O,I),P=Math.min(D,O,I);L>.9&&P<.1&&(D<.2&&(d[U+0]+=1),O<.2&&(d[U+2]+=1),I<.2&&(d[U+4]+=1))}}function y(U){c.push(U.x,U.y,U.z)}function S(U,D){const O=U*3;D.x=t[O+0],D.y=t[O+1],D.z=t[O+2]}function b(){const U=new $,D=new $,O=new $,I=new $,L=new le,P=new le,Y=new le;for(let w=0,C=0;w<c.length;w+=9,C+=6){U.set(c[w+0],c[w+1],c[w+2]),D.set(c[w+3],c[w+4],c[w+5]),O.set(c[w+6],c[w+7],c[w+8]),L.set(d[C+0],d[C+1]),P.set(d[C+2],d[C+3]),Y.set(d[C+4],d[C+5]),I.copy(U).add(D).add(O).divideScalar(3);const V=M(I);A(L,C+0,U,V),A(P,C+2,D,V),A(Y,C+4,O,V)}}function A(U,D,O,I){I<0&&U.x===1&&(d[D]=U.x-1),O.x===0&&O.z===0&&(d[D]=I/2/Math.PI+.5)}function M(U){return Math.atan2(U.z,-U.x)}function _(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.vertices,t.indices,t.radius,t.details)}}class eu extends sp{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new eu(t.radius,t.detail)}}class su extends Un{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=t/h,y=i/m,S=[],b=[],A=[],M=[];for(let _=0;_<g;_++){const U=_*y-d;for(let D=0;D<p;D++){const O=D*x-c;b.push(O,-U,0),A.push(0,0,1),M.push(D/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<h;U++){const D=U+p*_,O=U+p*(_+1),I=U+1+p*(_+1),L=U+1+p*_;S.push(D,O,L),S.push(O,I,L)}this.setIndex(S),this.setAttribute("position",new hn(b,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.width,t.height,t.widthSegments,t.heightSegments)}}class nu extends Un{constructor(t=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],g=[];let x=t;const y=(i-t)/l,S=new $,b=new le;for(let A=0;A<=l;A++){for(let M=0;M<=r;M++){const _=c+M/r*d;S.x=x*Math.cos(_),S.y=x*Math.sin(_),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,g.push(b.x,b.y)}x+=y}for(let A=0;A<l;A++){const M=A*(r+1);for(let _=0;_<r;_++){const U=_+M,D=U,O=U+r+1,I=U+r+2,L=U+1;h.push(D,O,L),h.push(O,I,L)}}this.setIndex(h),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(p,3)),this.setAttribute("uv",new hn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class op extends Un{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new $,y=new $,S=[],b=[],A=[],M=[];for(let _=0;_<=r;_++){const U=[],D=_/r;let O=0;_===0&&d===0?O=.5/i:_===r&&m===Math.PI&&(O=-.5/i);for(let I=0;I<=i;I++){const L=I/i;x.x=-t*Math.cos(l+L*c)*Math.sin(d+D*h),x.y=t*Math.cos(d+D*h),x.z=t*Math.sin(l+L*c)*Math.sin(d+D*h),b.push(x.x,x.y,x.z),y.copy(x).normalize(),A.push(y.x,y.y,y.z),M.push(L+O,1-D),U.push(p++)}g.push(U)}for(let _=0;_<r;_++)for(let U=0;U<i;U++){const D=g[_][U+1],O=g[_][U],I=g[_+1][U],L=g[_+1][U+1];(_!==0||d>0)&&S.push(D,O,L),(_!==r-1||m<Math.PI)&&S.push(O,I,L)}this.setIndex(S),this.setAttribute("position",new hn(b,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dg extends er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y_,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yM extends er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SM extends er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class MM extends ru{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const qd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class bM{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,d,h),c=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const S=p[x],b=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const EM=new bM;class lp{constructor(t){this.manager=t!==void 0?t:EM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}lp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rs=new WeakMap;class TM extends lp{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,d=qd.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(d),c.manager.itemEnd(t)},0);else{let x=Rs.get(d);x===void 0&&(x=[],Rs.set(d,x)),x.push({onLoad:i,onError:l})}return d}const h=Qo("img");function m(){g(),i&&i(this);const x=Rs.get(this)||[];for(let y=0;y<x.length;y++){const S=x[y];S.onLoad&&S.onLoad(this)}Rs.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),qd.remove(`image:${t}`);const y=Rs.get(this)||[];for(let S=0;S<y.length;S++){const b=y[S];b.onError&&b.onError(x)}Rs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),qd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class AM extends lp{constructor(t){super(t)}load(t,i,r,l){const c=new Dn,d=new TM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class B_ extends gn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Yd=new Je,Ug=new $,Lg=new $;class RM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Ug.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ug),Lg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Lg),i.updateMatrixWorld(),Yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class F_ extends w_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class CM extends RM{constructor(){super(new F_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ng extends B_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new CM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wM extends B_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class DM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class UM extends gM{constructor(t=10,i=10,r=4473924,l=8947848){r=new he(r),l=new he(l);const c=i/2,d=t/i,h=t/2,m=[],p=[];for(let y=0,S=0,b=-h;y<=i;y++,b+=d){m.push(-h,0,b,h,0,b),m.push(b,0,-h,b,0,h);const A=y===c?r:l;A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3}const g=new Un;g.setAttribute("position",new hn(m,3)),g.setAttribute("color",new hn(p,3));const x=new ru({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Og(s,t,i,r){const l=LM(r);switch(i){case g_:return s*t;case v_:return s*t/l.components*l.byteLength;case Qh:return s*t/l.components*l.byteLength;case Jh:return s*t*2/l.components*l.byteLength;case $h:return s*t*2/l.components*l.byteLength;case __:return s*t*3/l.components*l.byteLength;case Di:return s*t*4/l.components*l.byteLength;case tp:return s*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ph:case xh:return Math.max(s,16)*Math.max(t,8)/4;case hh:case mh:return Math.max(s,8)*Math.max(t,8)/2;case gh:case _h:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oh:case zh:case Ph:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bh:case Fh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ih:case Hh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LM(s){switch(s){case Hi:case h_:return{byteLength:1,components:1};case Yo:case p_:case Fs:return{byteLength:2,components:1};case jh:case Kh:return{byteLength:2,components:4};case Dr:case Zh:case ma:return{byteLength:4,components:1};case m_:case x_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function I_(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function NM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<x.length;S++){const b=x[y],A=x[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,x[y]=A)}x.length=y+1;for(let S=0,b=x.length;S<b;S++){const A=x[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:OM,alphahash_pars_fragment:zM,alphamap_fragment:PM,alphamap_pars_fragment:BM,alphatest_fragment:FM,alphatest_pars_fragment:IM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:VM,batching_vertex:kM,begin_vertex:XM,beginnormal_vertex:WM,bsdfs:qM,iridescence_fragment:YM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:KM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:JM,color_fragment:$M,color_pars_fragment:tb,color_pars_vertex:eb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:ab,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ob,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:fb,envmap_fragment:db,envmap_common_pars_fragment:hb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:xb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:yb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:Mb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Rb,lights_toon_pars_fragment:Cb,lights_phong_fragment:wb,lights_phong_pars_fragment:Db,lights_physical_fragment:Ub,lights_physical_pars_fragment:Lb,lights_fragment_begin:Nb,lights_fragment_maps:Ob,lights_fragment_end:zb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Ib,map_fragment:Hb,map_pars_fragment:Gb,map_particle_fragment:Vb,map_particle_pars_fragment:kb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:qb,morphcolor_vertex:Yb,morphnormal_vertex:Zb,morphtarget_pars_vertex:jb,morphtarget_vertex:Kb,normal_fragment_begin:Qb,normal_fragment_maps:Jb,normal_pars_fragment:$b,normal_pars_vertex:t3,normal_vertex:e3,normalmap_pars_fragment:n3,clearcoat_normal_fragment_begin:i3,clearcoat_normal_fragment_maps:a3,clearcoat_pars_fragment:r3,iridescence_pars_fragment:s3,opaque_fragment:o3,packing:l3,premultiplied_alpha_fragment:c3,project_vertex:u3,dithering_fragment:f3,dithering_pars_fragment:d3,roughnessmap_fragment:h3,roughnessmap_pars_fragment:p3,shadowmap_pars_fragment:m3,shadowmap_pars_vertex:x3,shadowmap_vertex:g3,shadowmask_pars_fragment:_3,skinbase_vertex:v3,skinning_pars_vertex:y3,skinning_vertex:S3,skinnormal_vertex:M3,specularmap_fragment:b3,specularmap_pars_fragment:E3,tonemapping_fragment:T3,tonemapping_pars_fragment:A3,transmission_fragment:R3,transmission_pars_fragment:C3,uv_pars_fragment:w3,uv_pars_vertex:D3,uv_vertex:U3,worldpos_vertex:L3,background_vert:N3,background_frag:O3,backgroundCube_vert:z3,backgroundCube_frag:P3,cube_vert:B3,cube_frag:F3,depth_vert:I3,depth_frag:H3,distanceRGBA_vert:G3,distanceRGBA_frag:V3,equirect_vert:k3,equirect_frag:X3,linedashed_vert:W3,linedashed_frag:q3,meshbasic_vert:Y3,meshbasic_frag:Z3,meshlambert_vert:j3,meshlambert_frag:K3,meshmatcap_vert:Q3,meshmatcap_frag:J3,meshnormal_vert:$3,meshnormal_frag:tE,meshphong_vert:eE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:aE,meshtoon_vert:rE,meshtoon_frag:sE,points_vert:oE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:fE,sprite_frag:dE},Ot={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Fn([Ot.points,Ot.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Fn([Ot.common,Ot.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Fn([Ot.sprite,Ot.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Fn([Ot.lights,Ot.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Hc={r:0,b:0,g:0},Er=new Gi,hE=new Je;function pE(s,t,i,r,l,c,d){const h=new he(0);let m=c===!0?0:1,p,g,x=null,y=0,S=null;function b(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?i:t).get(O)),O}function A(D){let O=!1;const I=b(D);I===null?_(h,m):I&&I.isColor&&(_(I,1),O=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,O){const I=b(O);I&&(I.isCubeTexture||I.mapping===au)?(g===void 0&&(g=new Zn(new il(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Bs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,P,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Er.copy(O.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Er)),g.material.toneMapped=Le.getTransfer(I.colorSpace)!==ke,(x!==I||y!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=I,y=I.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Zn(new su(2,2),new Ui({name:"BackgroundMaterial",uniforms:Bs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Le.getTransfer(I.colorSpace)!==ke,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||y!==I.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=I,y=I.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,O){D.getRGB(Hc,C_(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,O,d)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),m=O,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(h,m)},render:A,addToRenderList:M,dispose:U}}function mE(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,d=!1;function h(C,V,K,ot,mt){let ht=!1;const B=x(ot,K,V);c!==B&&(c=B,p(c.object)),ht=S(C,ot,K,mt),ht&&b(C,ot,K,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,O(C,V,K,ot),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,V,K){const ot=K.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ht=mt[V.id];ht===void 0&&(ht={},mt[V.id]=ht);let B=ht[ot];return B===void 0&&(B=y(m()),ht[ot]=B),B}function y(C){const V=[],K=[],ot=[];for(let mt=0;mt<i;mt++)V[mt]=0,K[mt]=0,ot[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:ot,object:C,attributes:{},index:null}}function S(C,V,K,ot){const mt=c.attributes,ht=V.attributes;let B=0;const j=K.getAttributes();for(const X in j)if(j[X].location>=0){const xt=mt[X];let N=ht[X];if(N===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function b(C,V,K,ot){const mt={},ht=V.attributes;let B=0;const j=K.getAttributes();for(const X in j)if(j[X].location>=0){let xt=ht[X];xt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),mt[X]=N,B++}c.attributes=mt,c.attributesNum=B,c.index=ot}function A(){const C=c.newAttributes;for(let V=0,K=C.length;V<K;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const K=c.newAttributes,ot=c.enabledAttributes,mt=c.attributeDivisors;K[C]=1,ot[C]===0&&(s.enableVertexAttribArray(C),ot[C]=1),mt[C]!==V&&(s.vertexAttribDivisor(C,V),mt[C]=V)}function U(){const C=c.newAttributes,V=c.enabledAttributes;for(let K=0,ot=V.length;K<ot;K++)V[K]!==C[K]&&(s.disableVertexAttribArray(K),V[K]=0)}function D(C,V,K,ot,mt,ht,B){B===!0?s.vertexAttribIPointer(C,V,K,mt,ht):s.vertexAttribPointer(C,V,K,ot,mt,ht)}function O(C,V,K,ot){A();const mt=ot.attributes,ht=K.getAttributes(),B=V.defaultAttributeValues;for(const j in ht){const X=ht[j];if(X.location>=0){let ct=mt[j];if(ct===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),ct!==void 0){const xt=ct.normalized,N=ct.itemSize,it=t.get(ct);if(it===void 0)continue;const yt=it.buffer,Et=it.type,Nt=it.bytesPerElement,at=Et===s.INT||Et===s.UNSIGNED_INT||ct.gpuType===Zh;if(ct.isInterleavedBufferAttribute){const ut=ct.data,wt=ut.stride,Ht=ct.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)_(X.location+Xt,ut.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)M(X.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Xt=0;Xt<X.locationSize;Xt++)D(X.location+Xt,N/X.locationSize,Et,xt,wt*Nt,(Ht+N/X.locationSize*Xt)*Nt,at)}else{if(ct.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)_(X.location+ut,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ut=0;ut<X.locationSize;ut++)M(X.location+ut);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ut=0;ut<X.locationSize;ut++)D(X.location+ut,N/X.locationSize,Et,xt,N*Nt,N/X.locationSize*ut*Nt,at)}}else if(B!==void 0){const xt=B[j];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}U()}function I(){Y();for(const C in r){const V=r[C];for(const K in V){const ot=V[K];for(const mt in ot)g(ot[mt].object),delete ot[mt];delete V[K]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const K in V){const ot=V[K];for(const mt in ot)g(ot[mt].object),delete ot[mt];delete V[K]}delete r[C.id]}function P(C){for(const V in r){const K=r[V];if(K[C.id]===void 0)continue;const ot=K[C.id];for(const mt in ot)g(ot[mt].object),delete ot[mt];delete K[C.id]}}function Y(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:U}}function xE(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let b=0;b<x;b++)S+=g[b];i.update(S,r,1)}function m(p,g,x,y){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)d(p[b],g[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,x);let b=0;for(let A=0;A<x;A++)b+=g[A]*y[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function gE(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Di&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const Y=P===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Hi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ma&&!Y)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(re("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:O,vertexTextures:I,maxSamples:L}}function _E(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Ar,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||l;return l=y,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,S){const b=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,_=s.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const U=c?0:r,D=U*4;let O=_.clippingState||null;m.value=O,O=g(b,y,D,S);for(let I=0;I!==D;++I)O[I]=i[I];_.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,S,b){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const _=S+A*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,O=S;D!==A;++D,O+=4)d.copy(x[D]).applyMatrix4(U,h),d.normal.toArray(M,O),M[O+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function vE(s){let t=new WeakMap;function i(d,h){return h===uh?d.mapping=Os:h===fh&&(d.mapping=zs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===uh||h===fh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new lM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ja=4,zg=[.125,.215,.35,.446,.526,.582],Cr=20,yE=256,ko=new F_,Pg=new he;let Zd=null,jd=0,Kd=0,Qd=!1;const SE=new $;class Bg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=SE}=c;Zd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zd,jd,Kd),this._renderer.xr.enabled=Qd,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Fs,format:Di,colorSpace:Ps,depthBuffer:!1},l=Fg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ME(c)),this._blurMaterial=EE(c,t,i),this._ggxMaterial=bE(c,t,i)}return l}_compileMaterial(t){const i=new Zn(new Un,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(Pg),x.toneMapping=$a,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new il,new Qc({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let _=!1;const U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,_=!0):(M.color.copy(Pg),_=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):O===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const I=this._cubeSize;Cs(l,O*I,D>2?I:0,I,I),x.setRenderTarget(l),_&&x.render(A,m),x.render(t,m)}x.toneMapping=S,x.autoClear=y,t.background=U}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Os||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),y=.05+p*.95,S=x*y,{_lodMax:b}=this,A=this._sizeLods[r],M=3*A*(r>b-Ja?r-b+Ja:0),_=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,Cs(c,M,_,3*A,2*A),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Cs(t,M,_,3*A,2*A),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Cr-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):Cr;M>Cr&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const _=[];let U=0;for(let P=0;P<Cr;++P){const Y=P/A,w=Math.exp(-Y*Y/2);_.push(w),P===0?U+=w:P<M&&(U+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/U;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-r;const O=this._sizeLods[l],I=3*O*(l>D-Ja?l-D+Ja:0),L=4*(this._cubeSize-O);Cs(i,I,L,3*O,2*O),m.setRenderTarget(i),m.render(x,ko)}}function ME(s){const t=[],i=[],r=[];let l=s;const c=s-Ja+1+zg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>s-Ja?m=zg[d-s+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,b=6,A=3,M=2,_=1,U=new Float32Array(A*b*S),D=new Float32Array(M*b*S),O=new Float32Array(_*b*S);for(let L=0;L<S;L++){const P=L%3*2/3-1,Y=L>2?0:-1,w=[P,Y,0,P+2/3,Y,0,P+2/3,Y+1,0,P,Y,0,P+2/3,Y+1,0,P,Y+1,0];U.set(w,A*b*L),D.set(y,M*b*L);const C=[L,L,L,L,L,L];O.set(C,_*b*L)}const I=new Un;I.setAttribute("position",new yi(U,A)),I.setAttribute("uv",new yi(D,M)),I.setAttribute("faceIndex",new yi(O,_)),r.push(new Zn(I,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Fg(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function bE(s,t,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function EE(s,t,i){const r=new Float32Array(Cr),l=new $(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Ig(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Hg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TE(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===uh||m===fh,g=m===Os||m===zs;if(p||g){let x=t.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new Bg(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Bg(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function AE(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jo("WebGLRenderer: "+r+" extension not supported."),l}}}function RE(s,t,i,r){const l={},c=new WeakMap;function d(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",d),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const S in y)t.update(y[S],s.ARRAY_BUFFER)}function p(x){const y=[],S=x.index,b=x.attributes.position;let A=0;if(S!==null){const U=S.array;A=S.version;for(let D=0,O=U.length;D<O;D+=3){const I=U[D+0],L=U[D+1],P=U[D+2];y.push(I,L,L,P,P,I)}}else if(b!==void 0){const U=b.array;A=b.version;for(let D=0,O=U.length/3-1;D<O;D+=3){const I=D+0,L=D+1,P=D+2;y.push(I,L,L,P,P,I)}}else return;const M=new(M_(y)?R_:A_)(y,1);M.version=A;const _=c.get(x);_&&t.remove(_),c.set(x,M)}function g(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function CE(s,t,i){let r;function l(y){r=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,S){s.drawElements(r,S,c,y*d),i.update(S,r,1)}function p(y,S,b){b!==0&&(s.drawElementsInstanced(r,S,c,y*d,b),i.update(S,r,b))}function g(y,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,b);let M=0;for(let _=0;_<b;_++)M+=S[_];i.update(M,r,1)}function x(y,S,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/d,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,A,0,b);let _=0;for(let U=0;U<b;U++)_+=S[U]*A[U];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function wE(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:en("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function DE(s,t,i){const r=new WeakMap,l=new nn;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==x){let C=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),A===!0&&(O=2),M===!0&&(O=3);let I=h.attributes.position.count*O,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*L*4*x),Y=new b_(P,I,L,x);Y.type=ma,Y.needsUpdate=!0;const w=O*4;for(let V=0;V<x;V++){const K=_[V],ot=U[V],mt=D[V],ht=I*L*4*V;for(let B=0;B<K.count;B++){const j=B*w;b===!0&&(l.fromBufferAttribute(K,B),P[ht+j+0]=l.x,P[ht+j+1]=l.y,P[ht+j+2]=l.z,P[ht+j+3]=0),A===!0&&(l.fromBufferAttribute(ot,B),P[ht+j+4]=l.x,P[ht+j+5]=l.y,P[ht+j+6]=l.z,P[ht+j+7]=0),M===!0&&(l.fromBufferAttribute(mt,B),P[ht+j+8]=l.x,P[ht+j+9]=l.y,P[ht+j+10]=l.z,P[ht+j+11]=mt.itemSize===4?l.w:1)}}y={count:x,texture:Y,size:new le(I,L)},r.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function UE(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const H_=new Dn,Gg=new z_(1,1),G_=new b_,V_=new W1,k_=new D_,Vg=[],kg=[],Xg=new Float32Array(16),Wg=new Float32Array(9),qg=new Float32Array(4);function Hs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Vg[l];if(c===void 0&&(c=new Float32Array(l),Vg[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function _n(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function lu(s,t){let i=kg[t];i===void 0&&(i=new Int32Array(t),kg[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function LE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function NE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function OE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function zE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function PE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;qg.set(r),s.uniformMatrix2fv(this.addr,!1,qg),vn(i,r)}}function BE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Wg.set(r),s.uniformMatrix3fv(this.addr,!1,Wg),vn(i,r)}}function FE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Xg.set(r),s.uniformMatrix4fv(this.addr,!1,Xg),vn(i,r)}}function IE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function HE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function GE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function VE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function kE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function XE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function WE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function qE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function YE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Gg.compareFunction=S_,c=Gg):c=H_,i.setTexture2D(t||c,l)}function ZE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||V_,l)}function jE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||k_,l)}function KE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||G_,l)}function QE(s){switch(s){case 5126:return LE;case 35664:return NE;case 35665:return OE;case 35666:return zE;case 35674:return PE;case 35675:return BE;case 35676:return FE;case 5124:case 35670:return IE;case 35667:case 35671:return HE;case 35668:case 35672:return GE;case 35669:case 35673:return VE;case 5125:return kE;case 36294:return XE;case 36295:return WE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return KE}}function JE(s,t){s.uniform1fv(this.addr,t)}function $E(s,t){const i=Hs(t,this.size,2);s.uniform2fv(this.addr,i)}function t2(s,t){const i=Hs(t,this.size,3);s.uniform3fv(this.addr,i)}function e2(s,t){const i=Hs(t,this.size,4);s.uniform4fv(this.addr,i)}function n2(s,t){const i=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function i2(s,t){const i=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function a2(s,t){const i=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function r2(s,t){s.uniform1iv(this.addr,t)}function s2(s,t){s.uniform2iv(this.addr,t)}function o2(s,t){s.uniform3iv(this.addr,t)}function l2(s,t){s.uniform4iv(this.addr,t)}function c2(s,t){s.uniform1uiv(this.addr,t)}function u2(s,t){s.uniform2uiv(this.addr,t)}function f2(s,t){s.uniform3uiv(this.addr,t)}function d2(s,t){s.uniform4uiv(this.addr,t)}function h2(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||H_,c[d])}function p2(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||V_,c[d])}function m2(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||k_,c[d])}function x2(s,t,i){const r=this.cache,l=t.length,c=lu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||G_,c[d])}function g2(s){switch(s){case 5126:return JE;case 35664:return $E;case 35665:return t2;case 35666:return e2;case 35674:return n2;case 35675:return i2;case 35676:return a2;case 5124:case 35670:return r2;case 35667:case 35671:return s2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return x2}}class _2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QE(i.type)}}class v2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=g2(i.type)}}class y2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function Yg(s,t){s.seq.push(t),s.map[t.id]=t}function S2(s,t,i){const r=s.name,l=r.length;for(Jd.lastIndex=0;;){const c=Jd.exec(r),d=Jd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Yg(i,p===void 0?new _2(h,s,t):new v2(h,s,t));break}else{let x=i.map[h];x===void 0&&(x=new y2(h),Yg(i,x)),i=x}}}class qc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);S2(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Zg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const M2=37297;let b2=0;function E2(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const jg=new de;function T2(s){Le._getMatrix(jg,Le.workingColorSpace,s);const t=`mat3( ${jg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(s)){case Zc:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kg(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+E2(s.getShaderSource(t),h)}else return c}function A2(s,t){const i=T2(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function R2(s,t){let i;switch(t){case r1:i="Linear";break;case s1:i="Reinhard";break;case o1:i="Cineon";break;case f_:i="ACESFilmic";break;case c1:i="AgX";break;case u1:i="Neutral";break;case l1:i="Custom";break;default:re("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new $;function C2(){Le.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function D2(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function U2(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Xo(s){return s!==""}function Qg(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(L2,O2)}const N2=new Map;function O2(s,t){let i=xe[t];if(i===void 0){const r=N2.get(t);if(r!==void 0)i=xe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xh(i)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(s){return s.replace(z2,P2)}function P2(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B2(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===c_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===FS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function F2(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Os:case zs:t="ENVMAP_TYPE_CUBE";break;case au:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I2(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zs&&(t="ENVMAP_MODE_REFRACTION"),t}function H2(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case u_:t="ENVMAP_BLENDING_MULTIPLY";break;case i1:t="ENVMAP_BLENDING_MIX";break;case a1:t="ENVMAP_BLENDING_ADD";break}return t}function G2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function V2(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=B2(i),p=F2(i),g=I2(i),x=H2(i),y=G2(i),S=w2(i),b=D2(c),A=l.createProgram();let M,_,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(M=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?xe.tonemapping_pars_fragment:"",i.toneMapping!==$a?R2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,A2("linearToOutputTexel",i.outputColorSpace),C2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Xh(d),d=Qg(d,i),d=Jg(d,i),h=Xh(h),h=Qg(h,i),h=Jg(h,i),d=$g(d),h=$g(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+M+d,O=U+_+h,I=Zg(l,l.VERTEX_SHADER,D),L=Zg(l,l.FRAGMENT_SHADER,O);l.attachShader(A,I),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(V){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(I)||"",mt=l.getShaderInfoLog(L)||"",ht=K.trim(),B=ot.trim(),j=mt.trim();let X=!0,ct=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,L);else{const xt=Kg(l,I,"vertex"),N=Kg(l,L,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ht+`
`+xt+`
`+N)}else ht!==""?re("WebGLProgram: Program Info Log:",ht):(B===""||j==="")&&(ct=!1);ct&&(V.diagnostics={runnable:X,programLog:ht,vertexShader:{log:B,prefix:M},fragmentShader:{log:j,prefix:_}})}l.deleteShader(I),l.deleteShader(L),Y=new qc(l,A),w=U2(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&P(this),Y};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,M2)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=b2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let k2=0;class X2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new W2(t),i.set(t,r)),r}}class W2{constructor(t){this.id=k2++,this.code=t,this.usedTimes=0}}function q2(s,t,i,r,l,c,d){const h=new E_,m=new X2,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,K,ot){const mt=K.fog,ht=ot.geometry,B=w.isMeshStandardMaterial?K.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),X=j&&j.mapping===au?j.image.height:null,ct=b[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&re("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const xt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,N=xt!==void 0?xt.length:0;let it=0;ht.morphAttributes.position!==void 0&&(it=1),ht.morphAttributes.normal!==void 0&&(it=2),ht.morphAttributes.color!==void 0&&(it=3);let yt,Et,Nt,at;if(ct){const Ce=Bi[ct];yt=Ce.vertexShader,Et=Ce.fragmentShader}else yt=w.vertexShader,Et=w.fragmentShader,m.update(w),Nt=m.getVertexShaderID(w),at=m.getFragmentShaderID(w);const ut=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Ht=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,ce=!!w.map,an=!!w.matcap,pe=!!j,Re=!!w.aoMap,H=!!w.lightMap,me=!!w.bumpMap,ge=!!w.normalMap,ze=!!w.displacementMap,Gt=!!w.emissiveMap,Xe=!!w.metalnessMap,Zt=!!w.roughnessMap,ae=w.anisotropy>0,z=w.clearcoat>0,E=w.dispersion>0,tt=w.iridescence>0,gt=w.sheen>0,St=w.transmission>0,ft=ae&&!!w.anisotropyMap,qt=z&&!!w.clearcoatMap,Lt=z&&!!w.clearcoatNormalMap,Qt=z&&!!w.clearcoatRoughnessMap,Wt=tt&&!!w.iridescenceMap,Mt=tt&&!!w.iridescenceThicknessMap,Tt=gt&&!!w.sheenColorMap,Yt=gt&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,zt=!!w.specularColorMap,ne=!!w.specularIntensityMap,G=St&&!!w.transmissionMap,Dt=St&&!!w.thicknessMap,Rt=!!w.gradientMap,Ct=!!w.alphaMap,bt=w.alphaTest>0,vt=!!w.alphaHash,Bt=!!w.extensions;let ie=$a;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Ie={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Et,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Xt,batchingColor:Xt&&ot._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&ot.instanceColor!==null,instancingMorph:Ht&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:an,envMap:pe,envMapMode:pe&&j.mapping,envMapCubeUVHeight:X,aoMap:Re,lightMap:H,bumpMap:me,normalMap:ge,displacementMap:y&&ze,emissiveMap:Gt,normalMapObjectSpace:ge&&w.normalMapType===p1,normalMapTangentSpace:ge&&w.normalMapType===y_,metalnessMap:Xe,roughnessMap:Zt,anisotropy:ae,anisotropyMap:ft,clearcoat:z,clearcoatMap:qt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:zt,specularIntensityMap:ne,transmission:St,transmissionMap:G,thicknessMap:Dt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:bt,alphaHash:vt,combine:w.combine,mapUv:ce&&A(w.map.channel),aoMapUv:Re&&A(w.aoMap.channel),lightMapUv:H&&A(w.lightMap.channel),bumpMapUv:me&&A(w.bumpMap.channel),normalMapUv:ge&&A(w.normalMap.channel),displacementMapUv:ze&&A(w.displacementMap.channel),emissiveMapUv:Gt&&A(w.emissiveMap.channel),metalnessMapUv:Xe&&A(w.metalnessMap.channel),roughnessMapUv:Zt&&A(w.roughnessMap.channel),anisotropyMapUv:ft&&A(w.anisotropyMap.channel),clearcoatMapUv:qt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&A(w.sheenRoughnessMap.channel),specularMapUv:Vt&&A(w.specularMap.channel),specularColorMapUv:zt&&A(w.specularColorMap.channel),specularIntensityMapUv:ne&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:Dt&&A(w.thicknessMap.channel),alphaMapUv:Ct&&A(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ge||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(ce||Ct),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(U(C,w),D(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function O(w){const C=b[w.type];let V;if(C){const K=Bi[C];V=aM.clone(K.uniforms)}else V=w.uniforms;return V}function I(w,C){let V;for(let K=0,ot=g.length;K<ot;K++){const mt=g[K];if(mt.cacheKey===C){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new V2(s,C,w,c),g.push(V)),V}function L(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function P(w){m.remove(w)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:O,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:g,dispose:Y}}function Y2(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Z2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function e_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function n_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(x,y,S,b,A,M){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:S,groupOrder:b,renderOrder:x.renderOrder,z:A,group:M},s[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=S,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=A,_.group=M),t++,_}function h(x,y,S,b,A,M){const _=d(x,y,S,b,A,M);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(x,y,S,b,A,M){const _=d(x,y,S,b,A,M);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||Z2),r.length>1&&r.sort(y||e_),l.length>1&&l.sort(y||e_)}function g(){for(let x=t,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function j2(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new n_,s.set(r,[d])):l>=c.length?(d=new n_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function K2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new he};break;case"SpotLight":i={position:new $,direction:new $,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function Q2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let J2=0;function $2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tT(s){const t=new K2,i=Q2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new Je,d=new Je;function h(p){let g=0,x=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,b=0,A=0,M=0,_=0,U=0,D=0,O=0,I=0,L=0,P=0;p.sort($2);for(let w=0,C=p.length;w<C;w++){const V=p[w],K=V.color,ot=V.intensity,mt=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=K.r*ot,x+=K.g*ot,y+=K.b*ot;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],ot);P++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,X=i.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.directionalShadow[S]=X,r.directionalShadowMap[S]=ht,r.directionalShadowMatrix[S]=V.shadow.matrix,U++}r.directional[S]=B,S++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(K).multiplyScalar(ot),B.distance=mt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[A]=B;const j=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,j.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[A]=j.matrix,V.castShadow){const X=i.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=ht,O++}A++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(K).multiplyScalar(ot),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=B,M++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const j=V.shadow,X=i.get(V);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,r.pointShadow[b]=X,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=B,b++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ot),B.groundColor.copy(V.groundColor).multiplyScalar(ot),r.hemi[_]=B,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==b||Y.spotLength!==A||Y.rectAreaLength!==M||Y.hemiLength!==_||Y.numDirectionalShadows!==U||Y.numPointShadows!==D||Y.numSpotShadows!==O||Y.numSpotMaps!==I||Y.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=P,Y.directionalLength=S,Y.pointLength=b,Y.spotLength=A,Y.rectAreaLength=M,Y.hemiLength=_,Y.numDirectionalShadows=U,Y.numPointShadows=D,Y.numSpotShadows=O,Y.numSpotMaps=I,Y.numLightProbes=P,r.version=J2++)}function m(p,g){let x=0,y=0,S=0,b=0,A=0;const M=g.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const D=p[_];if(D.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),x++}else if(D.isSpotLight){const O=r.spot[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(M),d.identity(),c.copy(D.matrixWorld),c.premultiply(M),d.extractRotation(c),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const O=r.point[y];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const O=r.hemi[A];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:r}}function i_(s){const t=new tT(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function eT(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new i_(s),t.set(l,[h])):c>=d.length?(h=new i_(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aT(s,t,i){let r=new rp;const l=new le,c=new le,d=new nn,h=new yM({depthPacking:h1}),m=new SM,p={},g=i.maxTextureSize,x={[tr]:Hn,[Hn]:tr,[Ci]:Ci},y=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:nT,fragmentShader:iT}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new Un;b.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c_;let _=this.type;this.render=function(L,P,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),K=s.state;K.setBlending(xa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=_!==pa&&this.type===pa,mt=_===pa&&this.type!==pa;for(let ht=0,B=L.length;ht<B;ht++){const j=L[ht],X=j.shadow;if(X===void 0){re("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ct=X.getFrameExtents();if(l.multiply(ct),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ct.x),l.x=c.x*ct.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ct.y),l.y=c.y*ct.y,X.mapSize.y=c.y)),X.map===null||ot===!0||mt===!0){const N=this.type!==pa?{minFilter:si,magFilter:si}:{};X.map!==null&&X.map.dispose(),X.map=new Ur(l.x,l.y,N),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const xt=X.getViewportCount();for(let N=0;N<xt;N++){const it=X.getViewport(N);d.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),K.viewport(d),X.updateMatrices(j,N),r=X.getFrustum(),O(P,Y,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===pa&&U(X,Y),X.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(w,C,V)};function U(L,P){const Y=t.update(A);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ur(l.x,l.y)),y.uniforms.shadow_pass.value=L.map.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(P,null,Y,y,A,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(P,null,Y,S,A,null)}function D(L,P,Y,w){let C=null;const V=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)C=V;else if(C=Y.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=C.uuid,ot=P.uuid;let mt=p[K];mt===void 0&&(mt={},p[K]=mt);let ht=mt[ot];ht===void 0&&(ht=C.clone(),mt[ot]=ht,P.addEventListener("dispose",I)),C=ht}if(C.visible=P.visible,C.wireframe=P.wireframe,w===pa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:x[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=s.properties.get(C);K.light=Y}return C}function O(L,P,Y,w,C){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===pa)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const ot=t.update(L),mt=L.material;if(Array.isArray(mt)){const ht=ot.groups;for(let B=0,j=ht.length;B<j;B++){const X=ht[B],ct=mt[X.materialIndex];if(ct&&ct.visible){const xt=D(L,ct,w,C);L.onBeforeShadow(s,L,P,Y,ot,xt,X),s.renderBufferDirect(Y,null,ot,xt,L,X),L.onAfterShadow(s,L,P,Y,ot,xt,X)}}}else if(mt.visible){const ht=D(L,mt,w,C);L.onBeforeShadow(s,L,P,Y,ot,ht,null),s.renderBufferDirect(Y,null,ot,ht,L,null),L.onAfterShadow(s,L,P,Y,ot,ht,null)}}const K=L.children;for(let ot=0,mt=K.length;ot<mt;ot++)O(K[ot],P,Y,w,C)}function I(L){L.target.removeEventListener("dispose",I);for(const Y in p){const w=p[Y],C=L.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const rT={[ih]:ah,[rh]:lh,[sh]:ch,[Ns]:oh,[ah]:ih,[lh]:rh,[ch]:sh,[oh]:Ns};function sT(s,t){function i(){let G=!1;const Dt=new nn;let Rt=null;const Ct=new nn(0,0,0,0);return{setMask:function(bt){Rt!==bt&&!G&&(s.colorMask(bt,bt,bt,bt),Rt=bt)},setLocked:function(bt){G=bt},setClear:function(bt,vt,Bt,ie,Ie){Ie===!0&&(bt*=ie,vt*=ie,Bt*=ie),Dt.set(bt,vt,Bt,ie),Ct.equals(Dt)===!1&&(s.clearColor(bt,vt,Bt,ie),Ct.copy(Dt))},reset:function(){G=!1,Rt=null,Ct.set(-1,0,0,0)}}}function r(){let G=!1,Dt=!1,Rt=null,Ct=null,bt=null;return{setReversed:function(vt){if(Dt!==vt){const Bt=t.get("EXT_clip_control");vt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Dt=vt;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(vt){vt?ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!G&&(s.depthMask(vt),Rt=vt)},setFunc:function(vt){if(Dt&&(vt=rT[vt]),Ct!==vt){switch(vt){case ih:s.depthFunc(s.NEVER);break;case ah:s.depthFunc(s.ALWAYS);break;case rh:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case sh:s.depthFunc(s.EQUAL);break;case oh:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ct=vt}},setLocked:function(vt){G=vt},setClear:function(vt){bt!==vt&&(Dt&&(vt=1-vt),s.clearDepth(vt),bt=vt)},reset:function(){G=!1,Rt=null,Ct=null,bt=null,Dt=!1}}}function l(){let G=!1,Dt=null,Rt=null,Ct=null,bt=null,vt=null,Bt=null,ie=null,Ie=null;return{setTest:function(Ce){G||(Ce?ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ce){Dt!==Ce&&!G&&(s.stencilMask(Ce),Dt=Ce)},setFunc:function(Ce,Ln,jn){(Rt!==Ce||Ct!==Ln||bt!==jn)&&(s.stencilFunc(Ce,Ln,jn),Rt=Ce,Ct=Ln,bt=jn)},setOp:function(Ce,Ln,jn){(vt!==Ce||Bt!==Ln||ie!==jn)&&(s.stencilOp(Ce,Ln,jn),vt=Ce,Bt=Ln,ie=jn)},setLocked:function(Ce){G=Ce},setClear:function(Ce){Ie!==Ce&&(s.clearStencil(Ce),Ie=Ce)},reset:function(){G=!1,Dt=null,Rt=null,Ct=null,bt=null,vt=null,Bt=null,ie=null,Ie=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,S=[],b=null,A=!1,M=null,_=null,U=null,D=null,O=null,I=null,L=null,P=new he(0,0,0),Y=0,w=!1,C=null,V=null,K=null,ot=null,mt=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=j>=2);let ct=null,xt={};const N=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),yt=new nn().fromArray(N),Et=new nn().fromArray(it);function Nt(G,Dt,Rt,Ct){const bt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(G,vt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<Rt;Bt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Dt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return vt}const at={};at[s.TEXTURE_2D]=Nt(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(s.DEPTH_TEST),d.setFunc(Ns),me(!1),ge($x),ut(s.CULL_FACE),Re(xa);function ut(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function wt(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Ht(G,Dt){return x[G]!==Dt?(s.bindFramebuffer(G,Dt),x[G]=Dt,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Dt),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(G,Dt){let Rt=S,Ct=!1;if(G){Rt=y.get(Dt),Rt===void 0&&(Rt=[],y.set(Dt,Rt));const bt=G.textures;if(Rt.length!==bt.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Bt=bt.length;vt<Bt;vt++)Rt[vt]=s.COLOR_ATTACHMENT0+vt;Rt.length=bt.length,Ct=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Ct=!0);Ct&&s.drawBuffers(Rt)}function ce(G){return b!==G?(s.useProgram(G),b=G,!0):!1}const an={[Rr]:s.FUNC_ADD,[HS]:s.FUNC_SUBTRACT,[GS]:s.FUNC_REVERSE_SUBTRACT};an[VS]=s.MIN,an[kS]=s.MAX;const pe={[XS]:s.ZERO,[WS]:s.ONE,[qS]:s.SRC_COLOR,[eh]:s.SRC_ALPHA,[JS]:s.SRC_ALPHA_SATURATE,[KS]:s.DST_COLOR,[ZS]:s.DST_ALPHA,[YS]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[QS]:s.ONE_MINUS_DST_COLOR,[jS]:s.ONE_MINUS_DST_ALPHA,[$S]:s.CONSTANT_COLOR,[t1]:s.ONE_MINUS_CONSTANT_COLOR,[e1]:s.CONSTANT_ALPHA,[n1]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(G,Dt,Rt,Ct,bt,vt,Bt,ie,Ie,Ce){if(G===xa){A===!0&&(wt(s.BLEND),A=!1);return}if(A===!1&&(ut(s.BLEND),A=!0),G!==IS){if(G!==M||Ce!==w){if((_!==Rr||O!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,O=Rr),Ce)switch(G){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFunc(s.ONE,s.ONE);break;case tg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:en("WebGLState: Invalid blending: ",G);break}else switch(G){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tg:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eg:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",G);break}U=null,D=null,I=null,L=null,P.set(0,0,0),Y=0,M=G,w=Ce}return}bt=bt||Dt,vt=vt||Rt,Bt=Bt||Ct,(Dt!==_||bt!==O)&&(s.blendEquationSeparate(an[Dt],an[bt]),_=Dt,O=bt),(Rt!==U||Ct!==D||vt!==I||Bt!==L)&&(s.blendFuncSeparate(pe[Rt],pe[Ct],pe[vt],pe[Bt]),U=Rt,D=Ct,I=vt,L=Bt),(ie.equals(P)===!1||Ie!==Y)&&(s.blendColor(ie.r,ie.g,ie.b,Ie),P.copy(ie),Y=Ie),M=G,w=!1}function H(G,Dt){G.side===Ci?wt(s.CULL_FACE):ut(s.CULL_FACE);let Rt=G.side===Hn;Dt&&(Rt=!Rt),me(Rt),G.blending===Us&&G.transparent===!1?Re(xa):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const Ct=G.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ge(G){G!==PS?(ut(s.CULL_FACE),G!==V&&(G===$x?s.cullFace(s.BACK):G===BS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),V=G}function ze(G){G!==K&&(B&&s.lineWidth(G),K=G)}function Gt(G,Dt,Rt){G?(ut(s.POLYGON_OFFSET_FILL),(ot!==Dt||mt!==Rt)&&(s.polygonOffset(Dt,Rt),ot=Dt,mt=Rt)):wt(s.POLYGON_OFFSET_FILL)}function Xe(G){G?ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Zt(G){G===void 0&&(G=s.TEXTURE0+ht-1),ct!==G&&(s.activeTexture(G),ct=G)}function ae(G,Dt,Rt){Rt===void 0&&(ct===null?Rt=s.TEXTURE0+ht-1:Rt=ct);let Ct=xt[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},xt[Rt]=Ct),(Ct.type!==G||Ct.texture!==Dt)&&(ct!==Rt&&(s.activeTexture(Rt),ct=Rt),s.bindTexture(G,Dt||at[G]),Ct.type=G,Ct.texture=Dt)}function z(){const G=xt[ct];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function gt(){try{s.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function St(){try{s.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Lt(){try{s.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qt(){try{s.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Wt(){try{s.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{s.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Tt(G){yt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Yt(G){Et.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Et.copy(G))}function Vt(G,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let Ct=Rt.get(G);Ct===void 0&&(Ct=s.getUniformBlockIndex(Dt,G.name),Rt.set(G,Ct))}function zt(G,Dt){const Ct=p.get(Dt).get(G);m.get(Dt)!==Ct&&(s.uniformBlockBinding(Dt,Ct,G.__bindingPointIndex),m.set(Dt,Ct))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ct=null,xt={},x={},y=new WeakMap,S=[],b=null,A=!1,M=null,_=null,U=null,D=null,O=null,I=null,L=null,P=new he(0,0,0),Y=0,w=!1,C=null,V=null,K=null,ot=null,mt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ut,disable:wt,bindFramebuffer:Ht,drawBuffers:Xt,useProgram:ce,setBlending:Re,setMaterial:H,setFlipSided:me,setCullFace:ge,setLineWidth:ze,setPolygonOffset:Gt,setScissorTest:Xe,activeTexture:Zt,bindTexture:ae,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:zt,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:gt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:qt,scissor:Tt,viewport:Yt,reset:ne}}function oT(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return S?new OffscreenCanvas(z,E):Qo("canvas")}function A(z,E,tt){let gt=1;const St=ae(z);if((St.width>tt||St.height>tt)&&(gt=tt/Math.max(St.width,St.height)),gt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(gt*St.width),qt=Math.floor(gt*St.height);x===void 0&&(x=b(ft,qt));const Lt=E?b(ft,qt):x;return Lt.width=ft,Lt.height=qt,Lt.getContext("2d").drawImage(z,0,0,ft,qt),re("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+qt+")."),Lt}else return"data"in z&&re("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),z;return z}function M(z){return z.generateMipmaps}function _(z){s.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(z,E,tt,gt,St=!1){if(z!==null){if(s[z]!==void 0)return s[z];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=E;if(E===s.RED&&(tt===s.FLOAT&&(ft=s.R32F),tt===s.HALF_FLOAT&&(ft=s.R16F),tt===s.UNSIGNED_BYTE&&(ft=s.R8)),E===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.R8UI),tt===s.UNSIGNED_SHORT&&(ft=s.R16UI),tt===s.UNSIGNED_INT&&(ft=s.R32UI),tt===s.BYTE&&(ft=s.R8I),tt===s.SHORT&&(ft=s.R16I),tt===s.INT&&(ft=s.R32I)),E===s.RG&&(tt===s.FLOAT&&(ft=s.RG32F),tt===s.HALF_FLOAT&&(ft=s.RG16F),tt===s.UNSIGNED_BYTE&&(ft=s.RG8)),E===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),tt===s.UNSIGNED_INT&&(ft=s.RG32UI),tt===s.BYTE&&(ft=s.RG8I),tt===s.SHORT&&(ft=s.RG16I),tt===s.INT&&(ft=s.RG32I)),E===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),tt===s.UNSIGNED_INT&&(ft=s.RGB32UI),tt===s.BYTE&&(ft=s.RGB8I),tt===s.SHORT&&(ft=s.RGB16I),tt===s.INT&&(ft=s.RGB32I)),E===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),tt===s.BYTE&&(ft=s.RGBA8I),tt===s.SHORT&&(ft=s.RGBA16I),tt===s.INT&&(ft=s.RGBA32I)),E===s.RGB&&(tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),tt===s.UNSIGNED_INT_10F_11F_11F_REV&&(ft=s.R11F_G11F_B10F)),E===s.RGBA){const qt=St?Zc:Le.getTransfer(gt);tt===s.FLOAT&&(ft=s.RGBA32F),tt===s.HALF_FLOAT&&(ft=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ft=qt===ke?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function O(z,E){let tt;return z?E===null||E===Dr||E===Zo?tt=s.DEPTH24_STENCIL8:E===ma?tt=s.DEPTH32F_STENCIL8:E===Yo&&(tt=s.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Dr||E===Zo?tt=s.DEPTH_COMPONENT24:E===ma?tt=s.DEPTH_COMPONENT32F:E===Yo&&(tt=s.DEPTH_COMPONENT16),tt}function I(z,E){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==si&&z.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function L(z){const E=z.target;E.removeEventListener("dispose",L),Y(E),E.isVideoTexture&&g.delete(E)}function P(z){const E=z.target;E.removeEventListener("dispose",P),C(E)}function Y(z){const E=r.get(z);if(E.__webglInit===void 0)return;const tt=z.source,gt=y.get(tt);if(gt){const St=gt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(z),Object.keys(gt).length===0&&y.delete(tt)}r.remove(z)}function w(z){const E=r.get(z);s.deleteTexture(E.__webglTexture);const tt=z.source,gt=y.get(tt);delete gt[E.__cacheKey],d.memory.textures--}function C(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let St=0;St<E.__webglFramebuffer[gt].length;St++)s.deleteFramebuffer(E.__webglFramebuffer[gt][St]);else s.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)s.deleteFramebuffer(E.__webglFramebuffer[gt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=z.textures;for(let gt=0,St=tt.length;gt<St;gt++){const ft=r.get(tt[gt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),d.memory.textures--),r.remove(tt[gt])}r.remove(z)}let V=0;function K(){V=0}function ot(){const z=V;return z>=l.maxTextures&&re("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),V+=1,z}function mt(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ht(z,E){const tt=r.get(z);if(z.isVideoTexture&&Xe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&tt.__version!==z.version){const gt=z.image;if(gt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,z,E);return}}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+E)}function B(z,E){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){at(tt,z,E);return}else z.isExternalTexture&&(tt.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+E)}function j(z,E){const tt=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&tt.__version!==z.version){at(tt,z,E);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+E)}function X(z,E){const tt=r.get(z);if(z.version>0&&tt.__version!==z.version){ut(tt,z,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+E)}const ct={[Yc]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[dh]:s.MIRRORED_REPEAT},xt={[si]:s.NEAREST,[f1]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Sd]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},N={[m1]:s.NEVER,[S1]:s.ALWAYS,[x1]:s.LESS,[S_]:s.LEQUAL,[g1]:s.EQUAL,[y1]:s.GEQUAL,[_1]:s.GREATER,[v1]:s.NOTEQUAL};function it(z,E){if(E.type===ma&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===Sd||E.magFilter===mc||E.magFilter===wr||E.minFilter===vi||E.minFilter===Sd||E.minFilter===mc||E.minFilter===wr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ct[E.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ct[E.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ct[E.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,xt[E.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===si||E.minFilter!==mc&&E.minFilter!==wr||E.type===ma&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(z,E){let tt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",L));const gt=E.source;let St=y.get(gt);St===void 0&&(St={},y.set(gt,St));const ft=mt(E);if(ft!==z.__cacheKey){St[ft]===void 0&&(St[ft]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),St[ft].usedTimes++;const qt=St[z.__cacheKey];qt!==void 0&&(St[z.__cacheKey].usedTimes--,qt.usedTimes===0&&w(E)),z.__cacheKey=ft,z.__webglTexture=St[ft].texture}return tt}function Et(z,E,tt){return Math.floor(Math.floor(z/tt)/E)}function Nt(z,E,tt,gt){const ft=z.updateRanges;if(ft.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,tt,gt,E.data);else{ft.sort((Mt,Tt)=>Mt.start-Tt.start);let qt=0;for(let Mt=1;Mt<ft.length;Mt++){const Tt=ft[qt],Yt=ft[Mt],Vt=Tt.start+Tt.count,zt=Et(Yt.start,E.width,4),ne=Et(Tt.start,E.width,4);Yt.start<=Vt+1&&zt===ne&&Et(Yt.start+Yt.count-1,E.width,4)===zt?Tt.count=Math.max(Tt.count,Yt.start+Yt.count-Tt.start):(++qt,ft[qt]=Yt)}ft.length=qt+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),Qt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Tt=ft.length;Mt<Tt;Mt++){const Yt=ft[Mt],Vt=Math.floor(Yt.start/4),zt=Math.ceil(Yt.count/4),ne=Vt%E.width,G=Math.floor(Vt/E.width),Dt=zt,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,ne,G,Dt,Rt,tt,gt,E.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function at(z,E,tt){let gt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=s.TEXTURE_3D);const St=yt(z,E),ft=E.source;i.bindTexture(gt,z.__webglTexture,s.TEXTURE0+tt);const qt=r.get(ft);if(ft.version!==qt.__version||St===!0){i.activeTexture(s.TEXTURE0+tt);const Lt=Le.getPrimaries(Le.workingColorSpace),Qt=E.colorSpace===Ka?null:Le.getPrimaries(E.colorSpace),Wt=E.colorSpace===Ka||Lt===Qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=A(E.image,!1,l.maxTextureSize);Mt=Zt(E,Mt);const Tt=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type);let Vt=D(E.internalFormat,Tt,Yt,E.colorSpace,E.isVideoTexture);it(gt,E);let zt;const ne=E.mipmaps,G=E.isVideoTexture!==!0,Dt=qt.__version===void 0||St===!0,Rt=ft.dataReady,Ct=I(E,Mt);if(E.isDepthTexture)Vt=O(E.format===Ko,E.type),Dt&&(G?i.texStorage2D(s.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Tt,Yt,null));else if(E.isDataTexture)if(ne.length>0){G&&Dt&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,vt=ne.length;bt<vt;bt++)zt=ne[bt],G?Rt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,zt.width,zt.height,Tt,Yt,zt.data):i.texImage2D(s.TEXTURE_2D,bt,Vt,zt.width,zt.height,0,Tt,Yt,zt.data);E.generateMipmaps=!1}else G?(Dt&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height),Rt&&Nt(E,Mt,Tt,Yt)):i.texImage2D(s.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Tt,Yt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Vt,ne[0].width,ne[0].height,Mt.depth);for(let bt=0,vt=ne.length;bt<vt;bt++)if(zt=ne[bt],E.format!==Di)if(Tt!==null)if(G){if(Rt)if(E.layerUpdates.size>0){const Bt=Og(zt.width,zt.height,E.format,E.type);for(const ie of E.layerUpdates){const Ie=zt.data.subarray(ie*Bt/zt.data.BYTES_PER_ELEMENT,(ie+1)*Bt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,ie,zt.width,zt.height,1,Tt,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Mt.depth,Tt,zt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Vt,zt.width,zt.height,Mt.depth,0,zt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,zt.width,zt.height,Mt.depth,Tt,Yt,zt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Vt,zt.width,zt.height,Mt.depth,0,Tt,Yt,zt.data)}else{G&&Dt&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,vt=ne.length;bt<vt;bt++)zt=ne[bt],E.format!==Di?Tt!==null?G?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,zt.width,zt.height,Tt,zt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Vt,zt.width,zt.height,0,zt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Rt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,zt.width,zt.height,Tt,Yt,zt.data):i.texImage2D(s.TEXTURE_2D,bt,Vt,zt.width,zt.height,0,Tt,Yt,zt.data)}else if(E.isDataArrayTexture)if(G){if(Dt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const bt=Og(Mt.width,Mt.height,E.format,E.type);for(const vt of E.layerUpdates){const Bt=Mt.data.subarray(vt*bt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Tt,Yt,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Yt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Tt,Yt,Mt.data);else if(E.isData3DTexture)G?(Dt&&i.texStorage3D(s.TEXTURE_3D,Ct,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Yt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Tt,Yt,Mt.data);else if(E.isFramebufferTexture){if(Dt)if(G)i.texStorage2D(s.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height);else{let bt=Mt.width,vt=Mt.height;for(let Bt=0;Bt<Ct;Bt++)i.texImage2D(s.TEXTURE_2D,Bt,Vt,bt,vt,0,Tt,Yt,null),bt>>=1,vt>>=1}}else if(ne.length>0){if(G&&Dt){const bt=ae(ne[0]);i.texStorage2D(s.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}for(let bt=0,vt=ne.length;bt<vt;bt++)zt=ne[bt],G?Rt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Tt,Yt,zt):i.texImage2D(s.TEXTURE_2D,bt,Vt,Tt,Yt,zt);E.generateMipmaps=!1}else if(G){if(Dt){const bt=ae(Mt);i.texStorage2D(s.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Yt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Vt,Tt,Yt,Mt);M(E)&&_(gt),qt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function ut(z,E,tt){if(E.image.length!==6)return;const gt=yt(z,E),St=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+tt);const ft=r.get(St);if(St.version!==ft.__version||gt===!0){i.activeTexture(s.TEXTURE0+tt);const qt=Le.getPrimaries(Le.workingColorSpace),Lt=E.colorSpace===Ka?null:Le.getPrimaries(E.colorSpace),Qt=E.colorSpace===Ka||qt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!Wt&&!Mt?Tt[vt]=A(E.image[vt],!0,l.maxCubemapSize):Tt[vt]=Mt?E.image[vt].image:E.image[vt],Tt[vt]=Zt(E,Tt[vt]);const Yt=Tt[0],Vt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type),ne=D(E.internalFormat,Vt,zt,E.colorSpace),G=E.isVideoTexture!==!0,Dt=ft.__version===void 0||gt===!0,Rt=St.dataReady;let Ct=I(E,Yt);it(s.TEXTURE_CUBE_MAP,E);let bt;if(Wt){G&&Dt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ne,Yt.width,Yt.height);for(let vt=0;vt<6;vt++){bt=Tt[vt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];E.format!==Di?Vt!==null?G?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,ne,ie.width,ie.height,0,ie.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,0,0,ie.width,ie.height,Vt,zt,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt,ne,ie.width,ie.height,0,Vt,zt,ie.data)}}}else{if(bt=E.mipmaps,G&&Dt){bt.length>0&&Ct++;const vt=ae(Tt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ne,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,Vt,zt,Tt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,Tt[vt].width,Tt[vt].height,0,Vt,zt,Tt[vt].data);for(let Bt=0;Bt<bt.length;Bt++){const Ie=bt[Bt].image[vt].image;G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,0,0,Ie.width,Ie.height,Vt,zt,Ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,ne,Ie.width,Ie.height,0,Vt,zt,Ie.data)}}else{G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,zt,Tt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ne,Vt,zt,Tt[vt]);for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,0,0,Vt,zt,ie.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Bt+1,ne,Vt,zt,ie.image[vt])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),ft.__version=St.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function wt(z,E,tt,gt,St,ft){const qt=c.convert(tt.format,tt.colorSpace),Lt=c.convert(tt.type),Qt=D(tt.internalFormat,qt,Lt,tt.colorSpace),Wt=r.get(E),Mt=r.get(tt);if(Mt.__renderTarget=E,!Wt.__hasExternalTextures){const Tt=Math.max(1,E.width>>ft),Yt=Math.max(1,E.height>>ft);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,ft,Qt,Tt,Yt,E.depth,0,qt,Lt,null):i.texImage2D(St,ft,Qt,Tt,Yt,0,qt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),Gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,St,Mt.__webglTexture,0,ze(E)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,St,Mt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(z,E,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,z),E.depthBuffer){const gt=E.depthTexture,St=gt&&gt.isDepthTexture?gt.type:null,ft=O(E.stencilBuffer,St),qt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=ze(E);Gt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,ft,E.width,E.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qt,s.RENDERBUFFER,z)}else{const gt=E.textures;for(let St=0;St<gt.length;St++){const ft=gt[St],qt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Qt=D(ft.internalFormat,qt,Lt,ft.colorSpace),Wt=ze(E);tt&&Gt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Qt,E.width,E.height):Gt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,Qt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Qt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(E.depthTexture);gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const St=gt.__webglTexture,ft=ze(E);if(E.depthTexture.format===jo)Gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(E.depthTexture.format===Ko)Gt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function ce(z){const E=r.get(z),tt=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const gt=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",St)};gt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=gt}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=z.texture.mipmaps;gt&&gt.length>0?Xt(E.__webglFramebuffer[0],z):Xt(E.__webglFramebuffer,z)}else if(tt){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=s.createRenderbuffer(),Ht(E.__webglDepthbuffer[gt],z,!1);else{const St=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ft)}}else{const gt=z.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ht(E.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(z,E,tt){const gt=r.get(z);E!==void 0&&wt(gt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&ce(z)}function pe(z){const E=z.texture,tt=r.get(z),gt=r.get(E);z.addEventListener("dispose",P);const St=z.textures,ft=z.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=E.version,d.memory.textures++),ft){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)tt.__webglFramebuffer[Lt][Qt]=s.createFramebuffer()}else tt.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(qt)for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=r.get(St[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),d.memory.textures++)}if(z.samples>0&&Gt(z)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Qt=St[Lt];tt.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const Wt=c.convert(Qt.format,Qt.colorSpace),Mt=c.convert(Qt.type),Tt=D(Qt.internalFormat,Wt,Mt,Qt.colorSpace,z.isXRRenderTarget===!0),Yt=ze(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Tt,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(tt.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),it(s.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)wt(tt.__webglFramebuffer[Lt][Qt],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else wt(tt.__webglFramebuffer[Lt],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=St[Lt],Mt=r.get(Wt);let Tt=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Tt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Mt.__webglTexture),it(Tt,Wt),wt(tt.__webglFramebuffer,z,Wt,s.COLOR_ATTACHMENT0+Lt,Tt,0),M(Wt)&&_(Tt)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,gt.__webglTexture),it(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)wt(tt.__webglFramebuffer[Qt],z,E,s.COLOR_ATTACHMENT0,Lt,Qt);else wt(tt.__webglFramebuffer,z,E,s.COLOR_ATTACHMENT0,Lt,0);M(E)&&_(Lt),i.unbindTexture()}z.depthBuffer&&ce(z)}function Re(z){const E=z.textures;for(let tt=0,gt=E.length;tt<gt;tt++){const St=E[tt];if(M(St)){const ft=U(z),qt=r.get(St).__webglTexture;i.bindTexture(ft,qt),_(ft),i.unbindTexture()}}}const H=[],me=[];function ge(z){if(z.samples>0){if(Gt(z)===!1){const E=z.textures,tt=z.width,gt=z.height;let St=s.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qt=r.get(z),Lt=E.length>1;if(Lt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=z.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=r.get(E[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,St,s.NEAREST),m===!0&&(H.length=0,me.length=0,H.push(s.COLOR_ATTACHMENT0+Wt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(H.push(ft),me.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ze(z){return Math.min(l.maxSamples,z.samples)}function Gt(z){const E=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xe(z){const E=d.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function Zt(z,E){const tt=z.colorSpace,gt=z.format,St=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||tt!==Ps&&tt!==Ka&&(Le.getTransfer(tt)===ke?(gt!==Di||St!==Hi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",tt)),E}function ae(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=K,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=an,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Gt}function lT(s,t){function i(r,l=Ka){let c;const d=Le.getTransfer(l);if(r===Hi)return s.UNSIGNED_BYTE;if(r===jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===m_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===x_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===h_)return s.BYTE;if(r===p_)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Zh)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===ma)return s.FLOAT;if(r===Fs)return s.HALF_FLOAT;if(r===g_)return s.ALPHA;if(r===__)return s.RGB;if(r===Di)return s.RGBA;if(r===jo)return s.DEPTH_COMPONENT;if(r===Ko)return s.DEPTH_STENCIL;if(r===v_)return s.RED;if(r===Qh)return s.RED_INTEGER;if(r===Jh)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===tp)return s.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===Wc)if(d===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===ph||r===mh||r===xh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh||r===_h||r===vh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gh||r===_h)return d===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===vh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yh||r===Sh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===yh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ah)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return d===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oh||r===zh||r===Ph)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Oh)return d===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bh||r===Fh||r===Ih||r===Hh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Bh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const cT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new P_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ui({vertexShader:cT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dT extends Is{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,S=null,b=null;const A=typeof XRWebGLBinding<"u",M=new fT,_={},U=i.getContextAttributes();let D=null,O=null;const I=[],L=[],P=new le;let Y=null;const w=new gi;w.viewport=new nn;const C=new gi;C.viewport=new nn;const V=[w,C],K=new DM;let ot=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ut=I[at];return ut===void 0&&(ut=new Vd,I[at]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(at){let ut=I[at];return ut===void 0&&(ut=new Vd,I[at]=ut),ut.getGripSpace()},this.getHand=function(at){let ut=I[at];return ut===void 0&&(ut=new Vd,I[at]=ut),ut.getHandSpace()};function ht(at){const ut=L.indexOf(at.inputSource);if(ut===-1)return;const wt=I[ut];wt!==void 0&&(wt.update(at.inputSource,at.frame,p||d),wt.dispatchEvent({type:at.type,data:at.inputSource}))}function B(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",j);for(let at=0;at<I.length;at++){const ut=L[at];ut!==null&&(L[at]=null,I[at].disconnect(ut))}ot=null,mt=null,M.reset();for(const at in _)delete _[at];t.setRenderTarget(D),S=null,y=null,x=null,l=null,O=null,Nt.stop(),r.isPresenting=!1,t.setPixelRatio(Y),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",B),l.addEventListener("inputsourceschange",j),U.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Xt=null;U.depth&&(Xt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=U.stencil?Ko:jo,Ht=U.stencil?Zo:Dr);const ce={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};x=this.getBinding(),y=x.createProjectionLayer(ce),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),O=new Ur(y.textureWidth,y.textureHeight,{format:Di,type:Hi,depthTexture:new z_(y.textureWidth,y.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Ur(S.framebufferWidth,S.framebufferHeight,{format:Di,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(at){for(let ut=0;ut<at.removed.length;ut++){const wt=at.removed[ut],Ht=L.indexOf(wt);Ht>=0&&(L[Ht]=null,I[Ht].disconnect(wt))}for(let ut=0;ut<at.added.length;ut++){const wt=at.added[ut];let Ht=L.indexOf(wt);if(Ht===-1){for(let ce=0;ce<I.length;ce++)if(ce>=L.length){L.push(wt),Ht=ce;break}else if(L[ce]===null){L[ce]=wt,Ht=ce;break}if(Ht===-1)break}const Xt=I[Ht];Xt&&Xt.connect(wt)}}const X=new $,ct=new $;function xt(at,ut,wt){X.setFromMatrixPosition(ut.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);const Ht=X.distanceTo(ct),Xt=ut.projectionMatrix.elements,ce=wt.projectionMatrix.elements,an=Xt[14]/(Xt[10]-1),pe=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],H=(Xt[9]-1)/Xt[5],me=(Xt[8]-1)/Xt[0],ge=(ce[8]+1)/ce[0],ze=an*me,Gt=an*ge,Xe=Ht/(-me+ge),Zt=Xe*-me;if(ut.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Zt),at.translateZ(Xe),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(ut.projectionMatrix),at.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ae=an+Xe,z=pe+Xe,E=ze-Zt,tt=Gt+(Ht-Zt),gt=Re*pe/z*ae,St=H*pe/z*ae;at.projectionMatrix.makePerspective(E,tt,gt,St,ae,z),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function N(at,ut){ut===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ut.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ut=at.near,wt=at.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),K.near=C.near=w.near=ut,K.far=C.far=w.far=wt,(ot!==K.near||mt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ot=K.near,mt=K.far),K.layers.mask=at.layers.mask|6,w.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const Ht=at.parent,Xt=K.cameras;N(K,Ht);for(let ce=0;ce<Xt.length;ce++)N(Xt[ce],Ht);Xt.length===2?xt(K,w,C):K.projectionMatrix.copy(w.projectionMatrix),it(at,K,Ht)};function it(at,ut,wt){wt===null?at.matrix.copy(ut.matrixWorld):(at.matrix.copy(wt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ut.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ut.projectionMatrix),at.projectionMatrixInverse.copy(ut.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=$o*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(at){m=at,y!==null&&(y.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(at){return _[at]};let yt=null;function Et(at,ut){if(g=ut.getViewerPose(p||d),b=ut,g!==null){const wt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Ht=!1;wt.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let pe=0;pe<wt.length;pe++){const Re=wt[pe];let H=null;if(S!==null)H=S.getViewport(Re);else{const ge=x.getViewSubImage(y,Re);H=ge.viewport,pe===0&&(t.setRenderTargetTextures(O,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(O))}let me=V[pe];me===void 0&&(me=new gi,me.layers.enable(pe),me.viewport=new nn,V[pe]=me),me.matrix.fromArray(Re.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Re.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(H.x,H.y,H.width,H.height),pe===0&&(K.matrix.copy(me.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(me)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const pe=x.getDepthInformation(wt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(Xt&&Xt.includes("camera-access")&&A){t.state.unbindTexture(),x=r.getBinding();for(let pe=0;pe<wt.length;pe++){const Re=wt[pe].camera;if(Re){let H=_[Re];H||(H=new P_,_[Re]=H);const me=x.getCameraImage(Re);H.sourceTexture=me}}}}for(let wt=0;wt<I.length;wt++){const Ht=L[wt],Xt=I[wt];Ht!==null&&Xt!==void 0&&Xt.update(Ht,ut,p||d)}yt&&yt(at,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const Nt=new I_;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const Tr=new Gi,hT=new Je;function pT(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,C_(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,U,D,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),x(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,O)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),A(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,U,D):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Hn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Hn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const U=t.get(_),D=U.envMap,O=U.envMapRotation;D&&(M.envMap.value=D,Tr.copy(O),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(hT.makeRotationFromEuler(Tr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,U,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*U,M.scale.value=D*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,U){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const U=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function mT(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const O=D.program;r.uniformBlockBinding(U,O)}function p(U,D){let O=l[U.id];O===void 0&&(b(U),O=g(U),l[U.id]=O,U.addEventListener("dispose",M));const I=D.program;r.updateUBOMapping(U,I);const L=t.render.frame;c[U.id]!==L&&(y(U),c[U.id]=L)}function g(U){const D=x();U.__bindingPointIndex=D;const O=s.createBuffer(),I=U.__size,L=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,I,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,O),O}function x(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const D=l[U.id],O=U.uniforms,I=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,P=O.length;L<P;L++){const Y=Array.isArray(O[L])?O[L]:[O[L]];for(let w=0,C=Y.length;w<C;w++){const V=Y[w];if(S(V,L,w,I)===!0){const K=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let ht=0;ht<ot.length;ht++){const B=ot[ht],j=A(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,K+mt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,mt),mt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,D,O,I){const L=U.value,P=D+"_"+O;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const Y=I[P];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return I[P]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function b(U){const D=U.uniforms;let O=0;const I=16;for(let P=0,Y=D.length;P<Y;P++){const w=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,V=w.length;C<V;C++){const K=w[C],ot=Array.isArray(K.value)?K.value:[K.value];for(let mt=0,ht=ot.length;mt<ht;mt++){const B=ot[mt],j=A(B),X=O%I,ct=X%j.boundary,xt=X+ct;O+=ct,xt!==0&&I-xt<j.storage&&(O+=I-xt),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=j.storage}}}const L=O%I;return L>0&&(O+=I-L),U.__size=O,U.__cache={},this}function A(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",U),D}function M(U){const D=U.target;D.removeEventListener("dispose",M);const O=d.indexOf(D.__bindingPointIndex);d.splice(O,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const U in l)s.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const xT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ha=null;function gT(){return ha===null&&(ha=new hM(xT,32,32,Jh,Fs),ha.minFilter=vi,ha.magFilter=vi,ha.wrapS=Fi,ha.wrapT=Fi,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class _T{constructor(t={}){const{canvas:i=M1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const b=new Set([tp,$h,Qh]),A=new Set([Hi,Dr,Yo,Zo,jh,Kh]),M=new Uint32Array(4),_=new Int32Array(4);let U=null,D=null;const O=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1;this._outputColorSpace=In;let Y=0,w=0,C=null,V=-1,K=null;const ot=new nn,mt=new nn;let ht=null;const B=new he(0);let j=0,X=i.width,ct=i.height,xt=1,N=null,it=null;const yt=new nn(0,0,X,ct),Et=new nn(0,0,X,ct);let Nt=!1;const at=new rp;let ut=!1,wt=!1;const Ht=new Je,Xt=new $,ce=new nn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Re(){return C===null?xt:1}let H=r;function me(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yh}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),H===null){const W="webgl2";if(H=me(W,R),H===null)throw me(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ge,ze,Gt,Xe,Zt,ae,z,E,tt,gt,St,ft,qt,Lt,Qt,Wt,Mt,Tt,Yt,Vt,zt,ne,G,Dt;function Rt(){ge=new AE(H),ge.init(),ne=new lT(H,ge),ze=new gE(H,ge,t,ne),Gt=new sT(H,ge),ze.reversedDepthBuffer&&y&&Gt.buffers.depth.setReversed(!0),Xe=new wE(H),Zt=new Y2,ae=new oT(H,ge,Gt,Zt,ze,ne,Xe),z=new vE(L),E=new TE(L),tt=new NM(H),G=new mE(H,tt),gt=new RE(H,tt,Xe,G),St=new UE(H,gt,tt,Xe),Yt=new DE(H,ze,ae),Wt=new _E(Zt),ft=new q2(L,z,E,ge,ze,G,Wt),qt=new pT(L,Zt),Lt=new j2,Qt=new eT(ge),Tt=new pE(L,z,E,Gt,St,S,m),Mt=new aT(L,St,ze),Dt=new mT(H,Xe,ze,Gt),Vt=new xE(H,ge,Xe),zt=new CE(H,ge,Xe),Xe.programs=ft.programs,L.capabilities=ze,L.extensions=ge,L.properties=Zt,L.renderLists=Lt,L.shadowMap=Mt,L.state=Gt,L.info=Xe}Rt();const Ct=new dT(L,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(R){R!==void 0&&(xt=R,this.setSize(X,ct,!1))},this.getSize=function(R){return R.set(X,ct)},this.setSize=function(R,W,st=!0){if(Ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,ct=W,i.width=Math.floor(R*xt),i.height=Math.floor(W*xt),st===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(X*xt,ct*xt).floor()},this.setDrawingBufferSize=function(R,W,st){X=R,ct=W,xt=st,i.width=Math.floor(R*st),i.height=Math.floor(W*st),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,W,st,nt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,W,st,nt),Gt.viewport(ot.copy(yt).multiplyScalar(xt).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,W,st,nt){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,W,st,nt),Gt.scissor(mt.copy(Et).multiplyScalar(xt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){Gt.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,st=!0){let nt=0;if(R){let Z=!1;if(C!==null){const At=C.texture.format;Z=b.has(At)}if(Z){const At=C.texture.type,Ut=A.has(At),Pt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),$t=Pt.r,ee=Pt.g,jt=Pt.b;Ut?(M[0]=$t,M[1]=ee,M[2]=jt,M[3]=Ft,H.clearBufferuiv(H.COLOR,0,M)):(_[0]=$t,_[1]=ee,_[2]=jt,_[3]=Ft,H.clearBufferiv(H.COLOR,0,_))}else nt|=H.COLOR_BUFFER_BIT}W&&(nt|=H.DEPTH_BUFFER_BIT),st&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),Tt.dispose(),Lt.dispose(),Qt.dispose(),Zt.dispose(),z.dispose(),E.dispose(),St.dispose(),G.dispose(),Dt.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Gs),Ct.removeEventListener("sessionend",Vs),Si.stop()};function bt(R){R.preventDefault(),Kc("WebGLRenderer: Context Lost."),P=!0}function vt(){Kc("WebGLRenderer: Context Restored."),P=!1;const R=Xe.autoReset,W=Mt.enabled,st=Mt.autoUpdate,nt=Mt.needsUpdate,Z=Mt.type;Rt(),Xe.autoReset=R,Mt.enabled=W,Mt.autoUpdate=st,Mt.needsUpdate=nt,Mt.type=Z}function Bt(R){en("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const W=R.target;W.removeEventListener("dispose",ie),Ie(W)}function Ie(R){Ce(R),Zt.remove(R)}function Ce(R){const W=Zt.get(R).programs;W!==void 0&&(W.forEach(function(st){ft.releaseProgram(st)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,st,nt,Z,At){W===null&&(W=an);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=cu(R,W,st,nt,Z);Gt.setMaterial(nt,Ut);let Ft=st.index,$t=1;if(nt.wireframe===!0){if(Ft=gt.getWireframeAttribute(st),Ft===void 0)return;$t=2}const ee=st.drawRange,jt=st.attributes.position;let ue=ee.start*$t,Ae=(ee.start+ee.count)*$t;At!==null&&(ue=Math.max(ue,At.start*$t),Ae=Math.min(Ae,(At.start+At.count)*$t)),Ft!==null?(ue=Math.max(ue,0),Ae=Math.min(Ae,Ft.count)):jt!=null&&(ue=Math.max(ue,0),Ae=Math.min(Ae,jt.count));const we=Ae-ue;if(we<0||we===1/0)return;G.setup(Z,nt,Pt,st,Ft);let be,Oe=Vt;if(Ft!==null&&(be=tt.get(Ft),Oe=zt,Oe.setIndex(be)),Z.isMesh)nt.wireframe===!0?(Gt.setLineWidth(nt.wireframeLinewidth*Re()),Oe.setMode(H.LINES)):Oe.setMode(H.TRIANGLES);else if(Z.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*Re()),Z.isLineSegments?Oe.setMode(H.LINES):Z.isLineLoop?Oe.setMode(H.LINE_LOOP):Oe.setMode(H.LINE_STRIP)}else Z.isPoints?Oe.setMode(H.POINTS):Z.isSprite&&Oe.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,We=Z._multiDrawCounts,Ee=Z._multiDrawCount,yn=Ft?tt.get(Ft).bytesPerElement:1,ya=Zt.get(nt).currentProgram.getUniforms();for(let Ye=0;Ye<Ee;Ye++)ya.setValue(H,"_gl_DrawID",Ye),Oe.render(Jt[Ye]/yn,We[Ye])}else if(Z.isInstancedMesh)Oe.renderInstances(ue,we,Z.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,We=Math.min(st.instanceCount,Jt);Oe.renderInstances(ue,we,We)}else Oe.render(ue,we)};function Ln(R,W,st){R.transparent===!0&&R.side===Ci&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,pn(R,W,st),R.side=tr,R.needsUpdate=!0,pn(R,W,st),R.side=Ci):pn(R,W,st)}this.compile=function(R,W,st=null){st===null&&(st=R),D=Qt.get(st),D.init(W),I.push(D),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const nt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Ln(Pt,st,Z),nt.add(Pt)}else Ln(At,st,Z),nt.add(At)}),D=I.pop(),nt},this.compileAsync=function(R,W,st=null){const nt=this.compile(R,W,st);return new Promise(Z=>{function At(){if(nt.forEach(function(Ut){Zt.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){Z(R);return}setTimeout(At,10)}ge.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let jn=null;function al(R){jn&&jn(R)}function Gs(){Si.stop()}function Vs(){Si.start()}const Si=new I_;Si.setAnimationLoop(al),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){jn=R,Ct.setAnimationLoop(R),R===null?Si.stop():Si.start()},Ct.addEventListener("sessionstart",Gs),Ct.addEventListener("sessionend",Vs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,W,C),D=Qt.get(R,I.length),D.init(W),I.push(D),Ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Ht,Ii,W.reversedDepth),wt=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,wt),U=Lt.get(R,O.length),U.init(),O.push(U),Ct.enabled===!0&&Ct.isPresenting===!0){const At=L.xr.getDepthSensingMesh();At!==null&&nr(At,W,-1/0,L.sortObjects)}nr(R,W,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(N,it),pe=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,pe&&Tt.addToRenderList(U,R),this.info.render.frame++,ut===!0&&Wt.beginShadows();const st=D.state.shadowsArray;Mt.render(st,R,W),ut===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=U.opaque,Z=U.transmissive;if(D.setupLights(),W.isArrayCamera){const At=W.cameras;if(Z.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Xs(nt,Z,R,Ft)}pe&&Tt.render(R);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];ks(U,R,Ft,Ft.viewport)}}else Z.length>0&&Xs(nt,Z,R,W),pe&&Tt.render(R),ks(U,R,W);C!==null&&w===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(L,R,W),G.resetDefaultState(),V=-1,K=null,I.pop(),I.length>0?(D=I[I.length-1],ut===!0&&Wt.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?U=O[O.length-1]:U=null};function nr(R,W,st,nt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){nt&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ht);const Ut=St.update(R),Pt=R.material;Pt.visible&&U.push(R,Ut,Pt,st,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){const Ut=St.update(R),Pt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ce.copy(Ut.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ht)),Array.isArray(Pt)){const Ft=Ut.groups;for(let $t=0,ee=Ft.length;$t<ee;$t++){const jt=Ft[$t],ue=Pt[jt.materialIndex];ue&&ue.visible&&U.push(R,Ut,ue,st,ce.z,jt)}}else Pt.visible&&U.push(R,Ut,Pt,st,ce.z,null)}}const At=R.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)nr(At[Ut],W,st,nt)}function ks(R,W,st,nt){const{opaque:Z,transmissive:At,transparent:Ut}=R;D.setupLightsView(st),ut===!0&&Wt.setGlobalState(L.clippingPlanes,st),nt&&Gt.viewport(ot.copy(nt)),Z.length>0&&Kn(Z,W,st),At.length>0&&Kn(At,W,st),Ut.length>0&&Kn(Ut,W,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Xs(R,W,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[nt.id]===void 0&&(D.state.transmissionRenderTarget[nt.id]=new Ur(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Fs:Hi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const At=D.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||ot;At.setSize(Ut.z*L.transmissionResolutionScale,Ut.w*L.transmissionResolutionScale);const Pt=L.getRenderTarget(),Ft=L.getActiveCubeFace(),$t=L.getActiveMipmapLevel();L.setRenderTarget(At),L.getClearColor(B),j=L.getClearAlpha(),j<1&&L.setClearColor(16777215,.5),L.clear(),pe&&Tt.render(st);const ee=L.toneMapping;L.toneMapping=$a;const jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),D.setupLightsView(nt),ut===!0&&Wt.setGlobalState(L.clippingPlanes,nt),Kn(R,st,nt),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ae=0,we=W.length;Ae<we;Ae++){const be=W[Ae],{object:Oe,geometry:Jt,material:We,group:Ee}=be;if(We.side===Ci&&Oe.layers.test(nt.layers)){const yn=We.side;We.side=Hn,We.needsUpdate=!0,on(Oe,st,nt,Jt,We,Ee),We.side=yn,We.needsUpdate=!0,ue=!0}}ue===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}L.setRenderTarget(Pt,Ft,$t),L.setClearColor(B,j),jt!==void 0&&(nt.viewport=jt),L.toneMapping=ee}function Kn(R,W,st){const nt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,At=R.length;Z<At;Z++){const Ut=R[Z],{object:Pt,geometry:Ft,group:$t}=Ut;let ee=Ut.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Pt.layers.test(st.layers)&&on(Pt,W,st,Ft,ee,$t)}}function on(R,W,st,nt,Z,At){R.onBeforeRender(L,W,st,nt,Z,At),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(L,W,st,nt,R,At),Z.transparent===!0&&Z.side===Ci&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,L.renderBufferDirect(st,W,nt,Z,R,At),Z.side=tr,Z.needsUpdate=!0,L.renderBufferDirect(st,W,nt,Z,R,At),Z.side=Ci):L.renderBufferDirect(st,W,nt,Z,R,At),R.onAfterRender(L,W,st,nt,Z,At)}function pn(R,W,st){W.isScene!==!0&&(W=an);const nt=Zt.get(R),Z=D.state.lights,At=D.state.shadowsArray,Ut=Z.state.version,Pt=ft.getParameters(R,Z.state,At,W,st),Ft=ft.getProgramCacheKey(Pt);let $t=nt.programs;nt.environment=R.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(R.isMeshStandardMaterial?E:z).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",ie),$t=new Map,nt.programs=$t);let ee=$t.get(Ft);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Ut)return Lr(R,Pt),ee}else Pt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Pt,L),ee=ft.acquireProgram(Pt,Ft),$t.set(Ft,ee),nt.uniforms=Pt.uniforms;const jt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Wt.uniform),Lr(R,Pt),nt.needsLights=rl(R),nt.lightsStateVersion=Ut,nt.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function Vi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Lr(R,W){const st=Zt.get(R);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function cu(R,W,st,nt,Z){W.isScene!==!0&&(W=an),ae.resetTextureUnits();const At=W.fog,Ut=nt.isMeshStandardMaterial?W.environment:null,Pt=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ps,Ft=(nt.isMeshStandardMaterial?E:z).get(nt.envMap||Ut),$t=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),jt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ae=!!st.morphAttributes.color;let we=$a;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(we=L.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=be!==void 0?be.length:0,Jt=Zt.get(nt),We=D.state.lights;if(ut===!0&&(wt===!0||R!==K)){const Mn=R===K&&nt.id===V;Wt.setState(nt,R,Mn)}let Ee=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==Pt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Ft||nt.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==jt||Jt.morphNormals!==ue||Jt.morphColors!==Ae||Jt.toneMapping!==we||Jt.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,Jt.__version=nt.version);let yn=Jt.currentProgram;Ee===!0&&(yn=pn(nt,W,Z));let ya=!1,Ye=!1,ki=!1;const Ze=yn.getUniforms(),Sn=Jt.uniforms;if(Gt.useProgram(yn.program)&&(ya=!0,Ye=!0,ki=!0),nt.id!==V&&(V=nt.id,Ye=!0),ya||K!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(H,"projectionMatrix",R.projectionMatrix),Ze.setValue(H,"viewMatrix",R.matrixWorldInverse);const Tn=Ze.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Xt.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&Ze.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ze.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Ye=!0,ki=!0)}if(Z.isSkinnedMesh){Ze.setOptional(H,Z,"bindMatrix"),Ze.setOptional(H,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ze.setValue(H,"boneTexture",Mn.boneTexture,ae))}Z.isBatchedMesh&&(Ze.setOptional(H,Z,"batchingTexture"),Ze.setValue(H,"batchingTexture",Z._matricesTexture,ae),Ze.setOptional(H,Z,"batchingIdTexture"),Ze.setValue(H,"batchingIdTexture",Z._indirectTexture,ae),Ze.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ze.setValue(H,"batchingColorTexture",Z._colorsTexture,ae));const mn=st.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Yt.update(Z,st,yn),(Ye||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Ze.setValue(H,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Sn.envMap.value=Ft,Sn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=gT()),Ye&&(Ze.setValue(H,"toneMappingExposure",L.toneMappingExposure),Jt.needsLights&&uu(Sn,ki),At&&nt.fog===!0&&qt.refreshFogUniforms(Sn,At),qt.refreshMaterialUniforms(Sn,nt,xt,ct,D.state.transmissionRenderTarget[R.id]),qc.upload(H,Vi(Jt),Sn,ae)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(qc.upload(H,Vi(Jt),Sn,ae),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ze.setValue(H,"center",Z.center),Ze.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Ze.setValue(H,"normalMatrix",Z.normalMatrix),Ze.setValue(H,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Mn=nt.uniformsGroups;for(let Tn=0,Li=Mn.length;Tn<Li;Tn++){const Xi=Mn[Tn];Dt.update(Xi,yn),Dt.bind(Xi,yn)}}return yn}function uu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,st){const nt=Zt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=W,Zt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const st=Zt.get(R);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const ir=H.createFramebuffer();this.setRenderTarget=function(R,W=0,st=0){C=R,Y=W,w=st;let nt=!0,Z=null,At=!1,Ut=!1;if(R){const Ft=Zt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Ft.__hasExternalTextures)ae.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Ft.__boundDepthTexture!==jt){if(jt!==null&&Zt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?Z=ee[W][st]:Z=ee[W],At=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?Z=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[st]:Z=ee,ot.copy(R.viewport),mt.copy(R.scissor),ht=R.scissorTest}else ot.copy(yt).multiplyScalar(xt).floor(),mt.copy(Et).multiplyScalar(xt).floor(),ht=Nt;if(st!==0&&(Z=ir),Gt.bindFramebuffer(H.FRAMEBUFFER,Z)&&nt&&Gt.drawBuffers(R,Z),Gt.viewport(ot),Gt.scissor(mt),Gt.setScissorTest(ht),At){const Ft=Zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,st)}else if(Ut){const Ft=W;for(let $t=0;$t<R.textures.length;$t++){const ee=Zt.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,ee.__webglTexture,st,Ft)}}else if(R!==null&&st!==0){const Ft=Zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,st)}V=-1},this.readRenderTargetPixels=function(R,W,st,nt,Z,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){Gt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const $t=R.textures[Pt],ee=$t.format,jt=$t.type;if(!ze.textureFormatReadable(ee)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(jt)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-nt&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(W,st,nt,Z,ne.convert(ee),ne.convert(jt),At))}finally{const $t=C!==null?Zt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,W,st,nt,Z,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(W>=0&&W<=R.width-nt&&st>=0&&st<=R.height-Z){Gt.bindFramebuffer(H.FRAMEBUFFER,Ft);const $t=R.textures[Pt],ee=$t.format,jt=$t.type;if(!ze.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(W,st,nt,Z,ne.convert(ee),ne.convert(jt),0);const Ae=C!==null?Zt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,Ae);const we=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await b1(H,we,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.deleteBuffer(ue),H.deleteSync(we),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,st=0){const nt=Math.pow(2,-st),Z=Math.floor(R.image.width*nt),At=Math.floor(R.image.height*nt),Ut=W!==null?W.x:0,Pt=W!==null?W.y:0;ae.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Ut,Pt,Z,At),Gt.unbindTexture()};const Ws=H.createFramebuffer(),va=H.createFramebuffer();this.copyTextureToTexture=function(R,W,st=null,nt=null,Z=0,At=null){At===null&&(Z!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Ut,Pt,Ft,$t,ee,jt,ue,Ae,we;const be=R.isCompressedTexture?R.mipmaps[At]:R.image;if(st!==null)Ut=st.max.x-st.min.x,Pt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ee=st.min.y,jt=st.isBox3?st.min.z:0;else{const mn=Math.pow(2,-Z);Ut=Math.floor(be.width*mn),Pt=Math.floor(be.height*mn),R.isDataArrayTexture?Ft=be.depth:R.isData3DTexture?Ft=Math.floor(be.depth*mn):Ft=1,$t=0,ee=0,jt=0}nt!==null?(ue=nt.x,Ae=nt.y,we=nt.z):(ue=0,Ae=0,we=0);const Oe=ne.convert(W.format),Jt=ne.convert(W.type);let We;W.isData3DTexture?(ae.setTexture3D(W,0),We=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),We=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),We=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ya=H.getParameter(H.UNPACK_SKIP_PIXELS),Ye=H.getParameter(H.UNPACK_SKIP_ROWS),ki=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const Ze=R.isDataArrayTexture||R.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const mn=Zt.get(R),Mn=Zt.get(W),Tn=Zt.get(mn.__renderTarget),Li=Zt.get(Mn.__renderTarget);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Xi=0;Xi<Ft;Xi++)Ze&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Z,jt+Xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Zt.get(W).__webglTexture,At,we+Xi)),H.blitFramebuffer($t,ee,Ut,Pt,ue,Ae,Ut,Pt,H.DEPTH_BUFFER_BIT,H.NEAREST);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Zt.has(R)){const mn=Zt.get(R),Mn=Zt.get(W);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,Ws),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,va);for(let Tn=0;Tn<Ft;Tn++)Ze?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,Z,jt+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,Z),Sn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mn.__webglTexture,At,we+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mn.__webglTexture,At),Z!==0?H.blitFramebuffer($t,ee,Ut,Pt,ue,Ae,Ut,Pt,H.COLOR_BUFFER_BIT,H.NEAREST):Sn?H.copyTexSubImage3D(We,At,ue,Ae,we+Tn,$t,ee,Ut,Pt):H.copyTexSubImage2D(We,At,ue,Ae,$t,ee,Ut,Pt);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(We,At,ue,Ae,we,Ut,Pt,Ft,Oe,Jt,be.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(We,At,ue,Ae,we,Ut,Pt,Ft,Oe,be.data):H.texSubImage3D(We,At,ue,Ae,we,Ut,Pt,Ft,Oe,Jt,be):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,ue,Ae,Ut,Pt,Oe,Jt,be.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,ue,Ae,be.width,be.height,Oe,be.data):H.texSubImage2D(H.TEXTURE_2D,At,ue,Ae,Ut,Pt,Oe,Jt,be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ya),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ki),At===0&&W.generateMipmaps&&H.generateMipmap(We),Gt.unbindTexture()},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){Y=0,w=0,C=null,Gt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const vT="https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY",yT="https://api.nasa.gov/neo/rest/v1/neo/3126183?api_key=DEMO_KEY",cp={date:"2026-05-03",count:3,objects:[{id:"3126183",name:"(2002 JR100)",hazard:!1,sentry:!1,mag:24.3,diameter_m:[36.6906137531,82.0427064882],time:"2026-May-03 14:23",velocity_kps:6.1402465937,miss_lunar:32.4860018192,miss_km:12493153411229936e-9,orbit:"ATE",uncertainty:"0",moid:.0197048,inclination:3.708936667084509,eccentricity:.2988780529948123,period_days:324.2477815513286,approachCount:185},{id:"3762171",name:"(2016 UY56)",hazard:!1,sentry:!1,mag:23.94,diameter_m:[43.3066885476,96.8366994728],time:"2026-May-03 11:45",velocity_kps:14.5353317737,miss_lunar:28.3752874982,miss_km:10912294525368506e-9,orbit:"APO",uncertainty:"2",moid:.00271971,inclination:.8974464305530804,eccentricity:.4460597278903202,period_days:557.3615554174811},{id:"3819554",name:"(2018 HL1)",hazard:!1,sentry:!1,mag:23.9,diameter_m:[44.1118199997,98.6370281305],time:"2026-May-03 08:21",velocity_kps:21.3709635327,miss_lunar:109.6842366354,miss_km:4218130635792238e-8,orbit:"APO",uncertainty:"7",moid:.010605,inclination:19.37465687274077,eccentricity:.3639903309122531,period_days:419.8272791271368}]},ST={id:"3126183",name:"(2002 JR100)",designation:"2002 JR100",hazard:!1,sentry:!1,diameter_m:{estimated_diameter_min:36.6906137531,estimated_diameter_max:82.0427064882},orbit_class:{orbit_class_type:"ATE",orbit_class_description:"Near-Earth asteroid orbits similar to that of 2062 Aten",orbit_class_range:"a (semi-major axis) < 1.0 AU; q (perihelion) > 0.983 AU"},orbit:{uncertainty:"0",first_observation_date:"2002-05-14",last_observation_date:"2019-07-31",data_arc_in_days:6287,observations_used:149,eccentricity:".2988780529948123",semi_major_axis:".9236747201676322",inclination:"3.708936667084509",period_days:"324.2477815513286",moid:".0197048"},approach_count:185,nearest:[{date:"2028-09-04",full:"2028-Sep-04 03:53",body:"Venus",velocity_kps:9.1913738897,miss_lunar:4.2214438712,miss_km:1623442188833096e-9},{date:"1996-09-08",full:"1996-Sep-08 00:22",body:"Venus",velocity_kps:9.4254790309,miss_lunar:4.4366147477,miss_km:1706190530248091e-9},{date:"2100-08-28",full:"2100-Aug-28 15:52",body:"Venus",velocity_kps:8.9560533806,miss_lunar:4.5196555502,miss_km:1738125561551666e-9},{date:"1911-03-05",full:"1911-Mar-05 20:11",body:"Venus",velocity_kps:9.3153126182,miss_lunar:4.8203590076,miss_km:1853767198386308e-9},{date:"2010-04-29",full:"2010-Apr-29 23:48",body:"Earth",velocity_kps:7.9951897717,miss_lunar:8.0207652482,miss_km:3084548578151006e-9}],fastest:[{date:"2033-05-18",full:"2033-May-18 02:14",body:"Earth",velocity_kps:23.0809819698,miss_lunar:190.6743696972,miss_km:7332771097761868e-8},{date:"2105-05-17",full:"2105-May-17 15:05",body:"Earth",velocity_kps:22.7206180799,miss_lunar:185.4914354596,miss_km:7133450809254147e-8},{date:"2185-05-16",full:"2185-May-16 16:13",body:"Earth",velocity_kps:22.4341878142,miss_lunar:181.3980322999,miss_km:6976030656621142e-8}]},Wh={ATE:"#ffbf3f",APO:"#16c9e8",AMO:"#64d56b",IEO:"#f76659"},MT=1,bT=120,xi=(s,t=0)=>{const i=Number.parseFloat(s);return Number.isFinite(i)?i:t};function ET(s){const i=Object.keys(s.near_earth_objects||{})[0]||cp.date,r=(s.near_earth_objects?.[i]||[]).map(l=>{const c=l.close_approach_data?.[0]||{},d=l.orbital_data||{};return{id:l.id,name:l.name,hazard:l.is_potentially_hazardous_asteroid,sentry:l.is_sentry_object,mag:l.absolute_magnitude_h,diameter_m:[l.estimated_diameter?.meters?.estimated_diameter_min,l.estimated_diameter?.meters?.estimated_diameter_max].map(h=>xi(h)),time:c.close_approach_date_full||c.close_approach_date,velocity_kps:xi(c.relative_velocity?.kilometers_per_second),miss_lunar:xi(c.miss_distance?.lunar),miss_km:xi(c.miss_distance?.kilometers),orbit:d.orbit_class?.orbit_class_type||"NEO",uncertainty:d.orbit_uncertainty??"n/a",moid:xi(d.minimum_orbit_intersection),inclination:xi(d.inclination),eccentricity:xi(d.eccentricity),period_days:xi(d.orbital_period)}});return{date:i,count:s.element_count||r.length,objects:r}}function TT(s){const t=(s.close_approach_data||[]).map(i=>({date:i.close_approach_date,full:i.close_approach_date_full,body:i.orbiting_body,velocity_kps:xi(i.relative_velocity?.kilometers_per_second),miss_lunar:xi(i.miss_distance?.lunar),miss_km:xi(i.miss_distance?.kilometers)}));return{id:s.id,name:s.name,designation:s.designation,hazard:s.is_potentially_hazardous_asteroid,sentry:s.is_sentry_object,diameter_m:s.estimated_diameter?.meters,orbit_class:s.orbital_data?.orbit_class,orbit:{uncertainty:s.orbital_data?.orbit_uncertainty,first_observation_date:s.orbital_data?.first_observation_date,last_observation_date:s.orbital_data?.last_observation_date,data_arc_in_days:s.orbital_data?.data_arc_in_days,observations_used:s.orbital_data?.observations_used,eccentricity:s.orbital_data?.eccentricity,semi_major_axis:s.orbital_data?.semi_major_axis,inclination:s.orbital_data?.inclination,period_days:s.orbital_data?.orbital_period,moid:s.orbital_data?.minimum_orbit_intersection},approach_count:t.length,nearest:[...t].sort((i,r)=>i.miss_lunar-r.miss_lunar).slice(0,8),fastest:[...t].sort((i,r)=>r.velocity_kps-i.velocity_kps).slice(0,5)}}function Qa(s,t=1){return Number.isFinite(Number(s))?new Intl.NumberFormat("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}).format(Number(s)):"n/a"}function iu(s){const t=Math.max(0,120-s.miss_lunar)/120,i=Math.min(s.velocity_kps/25,1),r=Math.min((s.diameter_m[1]||0)/120,1),l=Math.min(xi(s.uncertainty)/9,1);return Math.round((t*.38+i*.28+r*.2+l*.14)*100)}function AT(s){return s>=70?"High":s>=55?"Elevated":s>=40?"Guarded":"Low"}function RT(){const[s,t]=J.useState({feed:cp,lookup:ST,source:"fallback seed",status:"loading"});return J.useEffect(()=>{let i=!1;async function r(){try{const[l,c]=await Promise.all([fetch(vT),fetch(yT)]);if(!l.ok||!c.ok)throw new Error("NASA API request failed");const[d,h]=await Promise.all([l.json(),c.json()]);i||t({feed:ET(d),lookup:TT(h),source:"NASA NeoWs live",status:"live"})}catch{i||t(c=>({...c,status:"offline",source:"NASA seed snapshot"}))}}return r(),()=>{i=!0}},[]),s}function CT(s){const t=new AM,i=s.capabilities.getMaxAnisotropy(),r=Math.min(i,8),l=t.load("/textures/planets/earth_day_4096.jpg"),c=t.load("/textures/planets/earth_night_4096.jpg"),d=t.load("/textures/planets/earth_bump_roughness_clouds_4096.jpg");return l.colorSpace=In,c.colorSpace=In,[l,c,d].forEach(h=>{h.anisotropy=r,h.wrapS=Yc,h.wrapT=Fi}),{dayTexture:l,nightTexture:c,bumpRoughnessCloudsTexture:d}}function wT(s,t){return new Ui({extensions:{derivatives:!0},uniforms:{uDayTexture:{value:s.dayTexture},uNightTexture:{value:s.nightTexture},uBumpRoughnessCloudsTexture:{value:s.bumpRoughnessCloudsTexture},uSunDirection:{value:t},uAtmosphereDayColor:{value:new he("#4db2ff")},uAtmosphereTwilightColor:{value:new he("#bc490b")}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform sampler2D uDayTexture;
      uniform sampler2D uNightTexture;
      uniform sampler2D uBumpRoughnessCloudsTexture;
      uniform vec3 uSunDirection;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      vec3 perturbNormal(vec3 normal, float elevation) {
        vec3 positionDx = dFdx(vWorldPosition);
        vec3 positionDy = dFdy(vWorldPosition);
        float elevationDx = dFdx(elevation);
        float elevationDy = dFdy(elevation);
        vec3 tangent = normalize(positionDx - normal * dot(normal, positionDx));
        vec3 bitangent = normalize(positionDy - normal * dot(normal, positionDy));
        return normalize(normal - tangent * elevationDx * 7.0 - bitangent * elevationDy * 7.0);
      }

      void main() {
        vec4 packed = texture2D(uBumpRoughnessCloudsTexture, vUv);
        float clouds = smoothstep(0.2, 1.0, packed.b);
        vec3 normal = perturbNormal(normalize(vNormal), max(packed.r, clouds) * 0.16);
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float sunOrientation = dot(normal, normalize(uSunDirection));
        float dayStrength = smoothstep(-0.25, 0.5, sunOrientation);
        float atmosphereDayStrength = smoothstep(-0.5, 1.0, sunOrientation);

        vec3 dayColor = texture2D(uDayTexture, vUv).rgb;
        vec3 nightColor = texture2D(uNightTexture, vUv).rgb * 1.35;
        dayColor = mix(dayColor, vec3(1.0), clouds * 1.65);

        vec3 atmosphereColor = mix(
          uAtmosphereTwilightColor,
          uAtmosphereDayColor,
          smoothstep(-0.25, 0.75, sunOrientation)
        );
        float fresnel = 1.0 - abs(dot(viewDirection, normal));
        float atmosphereMix = clamp(atmosphereDayStrength * pow(fresnel, 2.0), 0.0, 1.0);

        vec3 halfVector = normalize(normalize(uSunDirection) + viewDirection);
        float oceanMask = (1.0 - smoothstep(0.08, 0.52, packed.g)) * (1.0 - clouds);
        float specular = pow(max(dot(normal, halfVector), 0.0), 72.0) * oceanMask * dayStrength * 1.45;

        float twilight = smoothstep(-0.2, 0.08, sunOrientation) * (1.0 - smoothstep(0.12, 0.42, sunOrientation));
        vec3 color = mix(nightColor, dayColor, dayStrength);
        color += atmosphereColor * twilight * (1.0 - clouds) * 0.22;
        color += vec3(0.75, 0.9, 1.0) * specular;
        color = mix(color, atmosphereColor, atmosphereMix * 0.45);

        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function DT(s){return new Ui({side:Hn,transparent:!0,depthWrite:!1,blending:th,uniforms:{uSunDirection:{value:s},uAtmosphereDayColor:{value:new he("#4db2ff")},uAtmosphereTwilightColor:{value:new he("#bc490b")}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec3 uSunDirection;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float sunOrientation = dot(normal, normalize(uSunDirection));
        vec3 atmosphereColor = mix(
          uAtmosphereTwilightColor,
          uAtmosphereDayColor,
          smoothstep(-0.25, 0.75, sunOrientation)
        );
        float fresnel = 1.0 - abs(dot(viewDirection, normal));
        float alpha = pow(smoothstep(0.22, 1.0, fresnel), 3.0) * smoothstep(-0.5, 1.0, sunOrientation) * 0.9;
        gl_FragColor = vec4(atmosphereColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function a_(s,t){const i=document.createElement("canvas");i.width=384,i.height=96;const r=i.getContext("2d");r.font="700 34px Inter, Arial, sans-serif",r.fillStyle="rgba(2, 8, 14, 0.72)",r.fillRect(0,0,i.width,i.height),r.strokeStyle=t,r.lineWidth=2,r.strokeRect(4,4,i.width-8,i.height-8),r.fillStyle=t,r.fillText(s.replace(/[()]/g,""),22,60);const l=new vM(i),c=new dM(new U_({map:l,transparent:!0,depthTest:!1}));return c.scale.set(1.9,.48,1),c}function $d(s,t,i,r,l=!1){const c=[];for(let p=0;p<=192;p+=1){const g=p/192*Math.PI*2;c.push(new $(Math.cos(g)*s,0,Math.sin(g)*t))}const d=new Un().setFromPoints(c),h=l?new MM({color:r,dashSize:.18,gapSize:.11,transparent:!0,opacity:.86}):new ru({color:r,transparent:!0,opacity:.68}),m=new N_(d,h);return m.rotation.x=Vh.degToRad(i),l&&m.computeLineDistances(),m}function UT({objects:s,selectedId:t,progress:i,playing:r,showGrid:l,showTrails:c,showLabels:d,showHud:h}){const m=J.useRef(null),p=J.useRef(null),g=J.useRef({objects:s,selectedId:t,progress:i,playing:r,showGrid:l,showTrails:c,showLabels:d,showHud:h});return J.useEffect(()=>{g.current={objects:s,selectedId:t,progress:i,playing:r,showGrid:l,showTrails:c,showLabels:d,showHud:h}},[s,t,i,r,l,c,d,h]),J.useEffect(()=>{const x=m.current,y=new _T({antialias:!0,alpha:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.setSize(x.clientWidth,x.clientHeight),y.outputColorSpace=In,y.toneMapping=f_,y.toneMappingExposure=1.08,x.appendChild(y.domElement);const S=new uM;S.fog=new ap("#02050a",.038);const b=new gi(42,x.clientWidth/x.clientHeight,.1,100);b.position.set(0,6.2,9.8),b.lookAt(0,0,0);const A=new ws;S.add(A);const M=new Un,_=new Float32Array(2800*3);for(let X=0;X<_.length;X+=3){const ct=25+Math.random()*55,xt=Math.random()*Math.PI*2,N=Math.acos(Math.random()*2-1);_[X]=ct*Math.sin(N)*Math.cos(xt),_[X+1]=ct*Math.cos(N),_[X+2]=ct*Math.sin(N)*Math.sin(xt)}M.setAttribute("position",new yi(_,3));const U=new _M(M,new O_({color:"#d9f4ff",size:.035,transparent:!0,opacity:.78}));S.add(U);const D=new wM("#6688a8",.28);S.add(D);const O=new Ng("#ffffff",3.6);O.position.set(-5,5,7),S.add(O);const I=new Ng("#16c9e8",.35);I.position.set(7,2,-4),S.add(I);const L=O.position.clone().normalize(),P=CT(y),Y=new op(1.75,160,160),w=new Zn(Y,wT(P,L));A.add(w);const C=new Zn(Y,DT(L));C.scale.setScalar(1.045),A.add(C);const V=$d(3.15,3.15,0,"#f2f7ff",!0);V.material.opacity=.36,A.add(V);const K=new UM(12,24,"#234354","#132734");K.material.opacity=.22,K.material.transparent=!0,A.add(K);const ot=new ws;A.add(ot),p.current={asteroidGroup:ot,grid:K,group:A,earth:w,atmosphere:C,stars:U,renderer:y,camera:b,scene:S};let mt=0;function ht(){ot.clear();const X=g.current;X.objects.forEach((ct,xt)=>{const N=Wh[ct.orbit]||"#ffffff",it=2.55+ct.miss_lunar/34+xt*.22,yt=1.48+Math.min(ct.period_days||420,780)/210,Et=$d(it,yt,ct.inclination,N,ct.id===X.selectedId);Et.userData={id:ct.id,kind:"orbit"},ot.add(Et);const Nt=new Zn(new eu(.12+Math.min(ct.diameter_m[1]||55,120)/650,2),new Dg({color:ct.id===X.selectedId?"#ffd06a":"#b9afa3",roughness:.92,metalness:.06,emissive:ct.id===X.selectedId?"#8a4b00":"#101010",emissiveIntensity:ct.id===X.selectedId?.32:.08}));Nt.userData={id:ct.id,radiusX:it,radiusY:yt,inclination:Vh.degToRad(ct.inclination),phase:xt*1.9+ct.velocity_kps/6,periodDays:Math.max(ct.period_days||365,1),selected:ct.id===X.selectedId},ot.add(Nt);const at=new Zn(new nu(.22,.28,48),new Qc({color:N,transparent:!0,opacity:ct.id===X.selectedId?.95:.28,side:Ci}));at.userData={follows:Nt,selected:ct.id===X.selectedId},ot.add(at);const ut=a_(ct.name,N);ut.userData={follows:Nt,label:!0},ot.add(ut)})}ht();function B(){mt=requestAnimationFrame(B);const X=g.current;if(!p.current)return;const ct=performance.now()*.001,xt=X.progress*MT;A.rotation.y=Math.sin(ct*.08)*.12,w.rotation.y=xt*Math.PI*2,C.rotation.y=w.rotation.y,U.rotation.y+=15e-5,K.visible=X.showGrid,V.visible=X.showTrails,ot.children.forEach(N=>{if(N.userData.radiusX){const it=N.userData.phase+xt/N.userData.periodDays*Math.PI*2,yt=Math.cos(it)*N.userData.radiusX,Et=Math.sin(it)*N.userData.radiusY,Nt=Math.sin(N.userData.inclination)*Et;N.position.set(yt,Nt,Et),N.rotation.x=xt*Math.PI*2*.3,N.rotation.y=xt*Math.PI*2*.5}if(N.userData.follows)if(N.position.copy(N.userData.follows.position),N.userData.label)N.visible=X.showLabels,N.position.y+=N.userData.follows.userData.selected?.55:.38;else{N.visible=X.showHud,N.lookAt(b.position);const it=N.userData.selected?1.35:.82;N.scale.setScalar(it)}N.userData.kind==="orbit"&&(N.visible=X.showTrails)}),y.render(S,b)}B();const j=new ResizeObserver(()=>{const{clientWidth:X,clientHeight:ct}=x;y.setSize(X,ct),b.aspect=X/ct,b.updateProjectionMatrix()});return j.observe(x),()=>{cancelAnimationFrame(mt),j.disconnect(),x.removeChild(y.domElement),Y.dispose(),w.material.dispose(),C.material.dispose(),y.dispose(),P.dayTexture.dispose(),P.nightTexture.dispose(),P.bumpRoughnessCloudsTexture.dispose(),p.current=null}},[]),J.useEffect(()=>{const x=p.current;if(!x)return;x.asteroidGroup.clear();const y={selectedId:t};s.forEach((S,b)=>{const A=Wh[S.orbit]||"#ffffff",M=2.55+S.miss_lunar/34+b*.22,_=1.48+Math.min(S.period_days||420,780)/210,U=$d(M,_,S.inclination,A,S.id===y.selectedId);U.userData={id:S.id,kind:"orbit"},x.asteroidGroup.add(U);const D=new Zn(new eu(.12+Math.min(S.diameter_m[1]||55,120)/650,2),new Dg({color:S.id===y.selectedId?"#ffd06a":"#b9afa3",roughness:.92,metalness:.06,emissive:S.id===y.selectedId?"#8a4b00":"#101010",emissiveIntensity:S.id===y.selectedId?.32:.08}));D.userData={id:S.id,radiusX:M,radiusY:_,inclination:Vh.degToRad(S.inclination),phase:b*1.9+S.velocity_kps/6,periodDays:Math.max(S.period_days||365,1),selected:S.id===y.selectedId},x.asteroidGroup.add(D);const O=new Zn(new nu(.22,.28,48),new Qc({color:A,transparent:!0,opacity:S.id===y.selectedId?.95:.28,side:Ci}));O.userData={follows:D,selected:S.id===y.selectedId},x.asteroidGroup.add(O);const I=a_(S.name,A);I.userData={follows:D,label:!0},x.asteroidGroup.add(I)})},[s,t]),J.createElement("div",{className:"scene-mount",ref:m,"aria-label":"3D asteroid approach visualization"})}function LT({date:s,count:t,source:i,status:r}){const l=new Date;return J.createElement("header",{className:"topbar"},J.createElement("div",{className:"brand"},J.createElement("div",{className:"brand-mark"},J.createElement(l_,{size:25,strokeWidth:1.7})),J.createElement("div",null,J.createElement("h1",null,"Asteroid Alert"),J.createElement("span",null,"Live NEO Monitoring"))),J.createElement("div",{className:"top-stat"},J.createElement(cS,{size:15}),J.createElement("span",{className:r==="live"?"green":"amber"},r==="live"?"System nominal":"Seed data active")),J.createElement("div",{className:"top-stat hide-small"},J.createElement(dS,{size:15}),J.createElement("span",null,i)),J.createElement("div",{className:"top-stat hide-medium"},J.createElement(wS,{size:15}),J.createElement("span",null,s," · ",t," objects")),J.createElement("div",{className:"top-time"},l.toISOString().slice(0,16).replace("T"," ")," UTC"))}function NT({objects:s,selectedId:t,onSelect:i}){return J.createElement("section",{className:"panel object-list"},J.createElement("div",{className:"panel-title"},J.createElement("span",null,"Near-Earth Objects"),J.createElement("strong",null,"Danger ranked")),J.createElement("div",{className:"table-head"},J.createElement("span",null,"Name"),J.createElement("span",null,"Risk"),J.createElement("span",null,"Miss LD"),J.createElement("span",null,"Diam m")),J.createElement("div",{className:"object-rows"},s.map(r=>{const l=iu(r);return J.createElement("button",{className:`object-row ${r.id===t?"selected":""}`,key:r.id,type:"button",onClick:()=>i(r.id)},J.createElement("span",{className:"rock-chip",style:{"--accent":Wh[r.orbit]||"#ffffff"}}),J.createElement("span",{className:"object-name"},r.name,J.createElement("small",null,AT(l)," · ",Qa(r.velocity_kps,1)," km/s")),J.createElement("span",{className:`danger-score ${l>=55?"elevated":""}`},l),J.createElement("span",null,Qa(r.miss_lunar,1)),J.createElement("span",null,Math.round(r.diameter_m[0]),"-",Math.round(r.diameter_m[1])))})),J.createElement("div",{className:"legend"},J.createElement("div",null,J.createElement("span",{className:"line selected-line"})," Higher score = more danger"),J.createElement("div",null,J.createElement("span",{className:"line earth-line"})," Earth orbit"),J.createElement("div",null,J.createElement("span",{className:"line orbit-line"})," Asteroid orbit")))}function r_({value:s,label:t,max:i=100,suffix:r=""}){const l=Math.max(0,Math.min(s/i,1));return J.createElement("div",{className:"gauge-card"},J.createElement("div",{className:"gauge-ring",style:{"--fill":`${l*270}deg`}},J.createElement("span",null,Qa(s,s<10?1:0),r)),J.createElement("small",null,t))}function OT({lookup:s,selected:t}){const i=t.id===s.id?s.nearest:[],r=[{date:t.time?.slice(0,11)||"Today",miss_lunar:t.miss_lunar,velocity_kps:t.velocity_kps,body:"Earth"}],l=i.length?i:r,c=Math.max(...l.map(d=>d.miss_lunar),1);return J.createElement("div",{className:"approach-chart"},l.map((d,h)=>{const m=18+(1-d.miss_lunar/c)*72;return J.createElement("div",{className:"approach-bar",key:`${d.date}-${h}`},J.createElement("span",{style:{height:`${m}%`}}),J.createElement("small",null,d.date.slice(2,4)))}))}function zT({selected:s,lookup:t}){const i=iu(s),r=s.id===t.id,l=(s.diameter_m[0]+s.diameter_m[1])/2;return J.createElement("aside",{className:"panel inspector"},J.createElement("div",{className:"panel-title"},J.createElement("span",null,"Selected Object"),J.createElement("strong",null,s.orbit)),J.createElement("div",{className:"selected-heading"},J.createElement("div",null,J.createElement("h2",null,s.name.replace(/[()]/g,"")),J.createElement("p",null,s.time||"No approach time")),J.createElement("div",{className:`risk-box ${i>60?"hot":""}`},J.createElement("strong",null,i),J.createElement("span",null,"Attention"))),J.createElement("div",{className:"metric-strip"},J.createElement("div",null,J.createElement(zS,{size:20}),J.createElement("span",null,Qa(s.miss_lunar,1)," LD"),J.createElement("small",null,"Miss distance")),J.createElement("div",null,J.createElement(xS,{size:20}),J.createElement("span",null,Qa(s.velocity_kps,1)," km/s"),J.createElement("small",null,"Velocity")),J.createElement("div",null,J.createElement(o_,{size:20}),J.createElement("span",null,Qa(s.moid,3)," AU"),J.createElement("small",null,"MOID"))),J.createElement("div",{className:"gauges"},J.createElement(r_,{value:l,max:120,label:"Est. diameter",suffix:"m"}),J.createElement(r_,{value:s.velocity_kps,max:25,label:"Relative velocity"})),J.createElement("div",{className:"details-grid"},J.createElement("span",null,"Orbit class"),J.createElement("strong",null,r?t.orbit_class?.orbit_class_type:s.orbit),J.createElement("span",null,"Eccentricity"),J.createElement("strong",null,Qa(s.eccentricity,3)),J.createElement("span",null,"Uncertainty"),J.createElement("strong",null,s.uncertainty),J.createElement("span",null,"Period"),J.createElement("strong",null,Qa(s.period_days,1)," days")),J.createElement("div",{className:"history-block"},J.createElement("div",{className:"history-title"},J.createElement("span",null,r?`${t.approach_count} close approaches`:"Current pass only"),J.createElement("strong",null,r?"JR100 dossier":"Feed object")),J.createElement(OT,{lookup:t,selected:s})),r&&J.createElement("div",{className:"lookup-note"},J.createElement("span",null,"Observation arc"),J.createElement("strong",null,t.orbit.first_observation_date," to ",t.orbit.last_observation_date)))}function PT({progress:s,setProgress:t,playing:i,setPlaying:r,speed:l,setSpeed:c}){return J.createElement("section",{className:"panel controls"},J.createElement("div",{className:"control-buttons"},J.createElement("button",{type:"button",onClick:()=>t(0),"aria-label":"Jump to start"},J.createElement(US,{size:18})),J.createElement("button",{type:"button",onClick:()=>t(d=>Math.max(0,d-.08)),"aria-label":"Rewind"},J.createElement(RS,{size:18})),J.createElement("button",{className:"primary-control",type:"button",onClick:()=>r(d=>!d),"aria-label":i?"Pause":"Play"},i?J.createElement(MS,{size:19}):J.createElement(ES,{size:19})),J.createElement("button",{type:"button",onClick:()=>t(d=>Math.min(1,d+.08)),"aria-label":"Fast forward"},J.createElement(pS,{size:18})),J.createElement("button",{type:"button",onClick:()=>t(1),"aria-label":"Jump to end"},J.createElement(NS,{size:18}))),J.createElement("div",{className:"timeline"},J.createElement("label",{htmlFor:"time-scrub"},"Timeline scrubber"),J.createElement("input",{id:"time-scrub",type:"range",min:"0",max:"100",value:Math.round(s*100),onChange:d=>t(Number(d.target.value)/100)}),J.createElement("div",{className:"ticks"},J.createElement("span",null,"T-12h"),J.createElement("strong",null,"Approach window"),J.createElement("span",null,"T+12h"))),J.createElement("div",{className:"speed-control"},J.createElement("label",{htmlFor:"speed"},"Speed"),J.createElement("select",{id:"speed",value:l,onChange:d=>c(Number(d.target.value))},J.createElement("option",{value:"0.5"},"0.5x"),J.createElement("option",{value:"1"},"1.0x"),J.createElement("option",{value:"1.8"},"1.8x"),J.createElement("option",{value:"3"},"3.0x"))))}function BT({showGrid:s,setShowGrid:t,showTrails:i,setShowTrails:r,showLabels:l,setShowLabels:c,showHud:d,setShowHud:h}){const m=[{label:"Orbits",active:i,set:r,icon:l_},{label:"Labels",active:l,set:c,icon:yS},{label:"Grid",active:s,set:t,icon:_S},{label:"HUD",active:d,set:h,icon:o_}];return J.createElement("div",{className:"display-options"},m.map(p=>{const g=p.icon;return J.createElement("button",{key:p.label,className:p.active?"active":"",type:"button",onClick:()=>p.set(x=>!x),"aria-pressed":p.active},J.createElement(g,{size:18}),J.createElement("span",null,p.label))}))}function FT(){const{feed:s,lookup:t,source:i,status:r}=RT(),[l,c]=J.useState(null),[d,h]=J.useState(.42),[m,p]=J.useState(!0),[g,x]=J.useState(1),[y,S]=J.useState(!0),[b,A]=J.useState(!0),[M,_]=J.useState(!0),[U,D]=J.useState(!0),O=J.useMemo(()=>[...s.objects.length?s.objects:cp.objects].sort((L,P)=>iu(P)-iu(L)),[s.objects]),I=O.find(L=>L.id===l)||O[0];return J.useEffect(()=>{if(!m)return;const L=window.setInterval(()=>{h(P=>(P+g/(bT*25))%1)},40);return()=>window.clearInterval(L)},[m,g]),J.useEffect(()=>{(!l||!O.some(L=>L.id===l))&&c(O[0]?.id)},[O,l]),J.createElement("main",{className:"app-shell"},J.createElement(LT,{date:s.date,count:s.count,source:i,status:r}),J.createElement("div",{className:"workspace"},J.createElement(NT,{objects:O,selectedId:I.id,onSelect:c}),J.createElement("section",{className:`scene-panel ${y?"":"grid-off"} ${U?"":"hud-off"}`},J.createElement(UT,{objects:O,selectedId:I.id,progress:d,playing:m,showGrid:y,showTrails:b,showLabels:M,showHud:U}),U&&J.createElement(J.Fragment,null,J.createElement("div",{className:"scene-overlay top-left"},"1 LD = 384,399 km"),J.createElement("div",{className:"scene-overlay bottom-right"},"Selected trajectory: ",I.name))),J.createElement(zT,{selected:I,lookup:t})),J.createElement("footer",{className:"bottom-deck"},J.createElement(PT,{progress:d,setProgress:h,playing:m,setPlaying:p,speed:g,setSpeed:x}),J.createElement(BT,{showGrid:y,setShowGrid:S,showTrails:b,setShowTrails:A,showLabels:M,setShowLabels:_,showHud:U,setShowHud:D})))}nS.createRoot(document.getElementById("root")).render(J.createElement(FT,null));
