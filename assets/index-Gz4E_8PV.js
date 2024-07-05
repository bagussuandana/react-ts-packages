(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function bc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var is={exports:{}},ul={},as={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),Tc=Symbol.for("react.portal"),Oc=Symbol.for("react.fragment"),$c=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Ac=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),Vc=Symbol.for("react.memo"),Bc=Symbol.for("react.lazy"),Xi=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=Xi&&e[Xi]||e["@@iterator"],typeof e=="function"?e:null)}var ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,cs={};function ut(e,n,t){this.props=e,this.context=n,this.refs=cs,this.updater=t||ss}ut.prototype.isReactComponent={};ut.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ds(){}ds.prototype=ut.prototype;function Ko(e,n,t){this.props=e,this.context=n,this.refs=cs,this.updater=t||ss}var Go=Ko.prototype=new ds;Go.constructor=Ko;us(Go,ut.prototype);Go.isPureReactComponent=!0;var Ki=Array.isArray,fs=Object.prototype.hasOwnProperty,Zo={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)fs.call(n,r)&&!ps.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:qt,type:e,key:o,ref:i,props:l,_owner:Zo.current}}function Wc(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jo(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function Qc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Gi=/\/+/g;function _l(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Qc(""+e.key):n.toString(36)}function zr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qt:case Tc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+_l(i,0):r,Ki(l)?(t="",e!=null&&(t=e.replace(Gi,"$&/")+"/"),zr(l,n,t,"",function(c){return c})):l!=null&&(Jo(l)&&(l=Wc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Gi,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Ki(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+_l(o,a);i+=zr(o,n,t,s,l)}else if(s=Hc(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+_l(o,a++),i+=zr(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function ar(e,n,t){if(e==null)return e;var r=[],l=0;return zr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Yc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Nr={transition:null},Xc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:Zo};function ms(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ar,forEach:function(e,n,t){ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ar(e,function(){n++}),n},toArray:function(e){return ar(e,function(n){return n})||[]},only:function(e){if(!Jo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ut;L.Fragment=Oc;L.Profiler=Fc;L.PureComponent=Ko;L.StrictMode=$c;L.Suspense=Uc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xc;L.act=ms;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=us({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Zo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)fs.call(n,s)&&!ps.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qt,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ic,_context:e},e.Consumer=e};L.createElement=hs;L.createFactory=function(e){var n=hs.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Ac,render:e}};L.isValidElement=Jo;L.lazy=function(e){return{$$typeof:Bc,_payload:{_status:-1,_result:e},_init:Yc}};L.memo=function(e,n){return{$$typeof:Vc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=n}};L.unstable_act=ms;L.useCallback=function(e,n){return ue.current.useCallback(e,n)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,n){return ue.current.useEffect(e,n)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ue.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";as.exports=L;var Ne=as.exports;const F=bc(Ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=Ne,Gc=Symbol.for("react.element"),Zc=Symbol.for("react.fragment"),Jc=Object.prototype.hasOwnProperty,qc=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ed={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Jc.call(n,r)&&!ed.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Gc,type:e,key:o,ref:i,props:l,_owner:qc.current}}ul.Fragment=Zc;ul.jsx=gs;ul.jsxs=gs;is.exports=ul;var d=is.exports,no={},ws={exports:{}},ke={},vs={exports:{}},ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,_){var P=E.length;E.push(_);e:for(;0<P;){var Q=P-1>>>1,Z=E[Q];if(0<l(Z,_))E[Q]=_,E[P]=Z,P=Q;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],P=E.pop();if(P!==_){E[0]=P;e:for(var Q=0,Z=E.length,or=Z>>>1;Q<or;){var xn=2*(Q+1)-1,jl=E[xn],kn=xn+1,ir=E[kn];if(0>l(jl,P))kn<Z&&0>l(ir,jl)?(E[Q]=ir,E[kn]=P,Q=kn):(E[Q]=jl,E[xn]=P,Q=xn);else if(kn<Z&&0>l(ir,P))E[Q]=ir,E[kn]=P,Q=kn;else break e}}return _}function l(E,_){var P=E.sortIndex-_.sortIndex;return P!==0?P:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],m=1,g=null,h=3,y=!1,x=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=t(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=E)r(c),_.sortIndex=_.expirationTime,n(s,_);else break;_=t(c)}}function w(E){if(k=!1,p(E),!x)if(t(s)!==null)x=!0,zl(C);else{var _=t(c);_!==null&&Nl(w,_.startTime-E)}}function C(E,_){x=!1,k&&(k=!1,f(j),j=-1),y=!0;var P=h;try{for(p(_),g=t(s);g!==null&&(!(g.expirationTime>_)||E&&!Le());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,h=g.priorityLevel;var Z=Q(g.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===t(s)&&r(s),p(_)}else r(s);g=t(s)}if(g!==null)var or=!0;else{var xn=t(c);xn!==null&&Nl(w,xn.startTime-_),or=!1}return or}finally{g=null,h=P,y=!1}}var z=!1,N=null,j=-1,W=5,M=-1;function Le(){return!(e.unstable_now()-M<W)}function pt(){if(N!==null){var E=e.unstable_now();M=E;var _=!0;try{_=N(!0,E)}finally{_?ht():(z=!1,N=null)}}else z=!1}var ht;if(typeof u=="function")ht=function(){u(pt)};else if(typeof MessageChannel<"u"){var Yi=new MessageChannel,Mc=Yi.port2;Yi.port1.onmessage=pt,ht=function(){Mc.postMessage(null)}}else ht=function(){D(pt,0)};function zl(E){N=E,z||(z=!0,ht())}function Nl(E,_){j=D(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,zl(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var P=h;h=_;try{return E()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=h;h=E;try{return _()}finally{h=P}},e.unstable_scheduleCallback=function(E,_,P){var Q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,E={id:m++,callback:_,priorityLevel:E,startTime:P,expirationTime:Z,sortIndex:-1},P>Q?(E.sortIndex=P,n(c,E),t(s)===null&&E===t(c)&&(k?(f(j),j=-1):k=!0,Nl(w,P-Q))):(E.sortIndex=Z,n(s,E),x||y||(x=!0,zl(C))),E},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(E){var _=h;return function(){var P=h;h=_;try{return E.apply(this,arguments)}finally{h=P}}}})(ys);vs.exports=ys;var nd=vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=Ne,xe=nd;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xs=new Set,$t={};function On(e,n){tt(e,n),tt(e+"Capture",n)}function tt(e,n){for($t[e]=n,e=0;e<n.length;e++)xs.add(n[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=Object.prototype.hasOwnProperty,rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zi={},Ji={};function ld(e){return to.call(Ji,e)?!0:to.call(Zi,e)?!1:rd.test(e)?Ji[e]=!0:(Zi[e]=!0,!1)}function od(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function id(e,n,t,r){if(n===null||typeof n>"u"||od(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function ei(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qo,ei);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qo,ei);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qo,ei);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ni(e,n,t,r){var l=te.hasOwnProperty(n)?te[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(id(n,t,l,r)&&(t=null),r||l===null?ld(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),In=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),Ss=Symbol.for("react.context"),ri=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),li=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Cs=Symbol.for("react.offscreen"),qi=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Pl;function Ct(e){if(Pl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pl=n&&n[1]||""}return`
`+Pl+e}var Ll=!1;function Rl(e,n){if(!e||Ll)return"";Ll=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ll=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ct(e):""}function ad(e){switch(e.tag){case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case In:return"Portal";case ro:return"Profiler";case ti:return"StrictMode";case lo:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ss:return(e.displayName||"Context")+".Consumer";case ks:return(e._context.displayName||"Context")+".Provider";case ri:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case li:return n=e.displayName||null,n!==null?n:io(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return io(e(n))}catch{}}return null}function sd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return io(n);case 8:return n===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Es(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ud(e){var n=Es(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ur(e){e._valueTracker||(e._valueTracker=ud(e))}function zs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Es(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ea(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ns(e,n){n=n.checked,n!=null&&ni(e,"checked",n,!1)}function so(e,n){Ns(e,n);var t=mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?uo(e,n.type,t):n.hasOwnProperty("defaultValue")&&uo(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function na(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function uo(e,n,t){(n!=="number"||Dr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Et=Array.isArray;function Gn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function co(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ta(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(Et(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function js(e,n){var t=mn(n.value),r=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ra(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_s(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,Ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cd=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){cd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function Ls(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function Rs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ls(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var dd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,n){if(n){if(dd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function ho(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mo=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var go=null,Zn=null,Jn=null;function la(e){if(e=tr(e)){if(typeof go!="function")throw Error(v(280));var n=e.stateNode;n&&(n=hl(n),go(e.stateNode,e.type,n))}}function Ms(e){Zn?Jn?Jn.push(e):Jn=[e]:Zn=e}function bs(){if(Zn){var e=Zn,n=Jn;if(Jn=Zn=null,la(e),n)for(e=0;e<n.length;e++)la(n[e])}}function Ts(e,n){return e(n)}function Os(){}var Ml=!1;function $s(e,n,t){if(Ml)return e(n,t);Ml=!0;try{return Ts(e,n,t)}finally{Ml=!1,(Zn!==null||Jn!==null)&&(Os(),bs())}}function It(e,n){var t=e.stateNode;if(t===null)return null;var r=hl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var wo=!1;if(Xe)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){wo=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{wo=!1}function fd(e,n,t,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var _t=!1,Ar=null,Ur=!1,vo=null,pd={onError:function(e){_t=!0,Ar=e}};function hd(e,n,t,r,l,o,i,a,s){_t=!1,Ar=null,fd.apply(pd,arguments)}function md(e,n,t,r,l,o,i,a,s){if(hd.apply(this,arguments),_t){if(_t){var c=Ar;_t=!1,Ar=null}else throw Error(v(198));Ur||(Ur=!0,vo=c)}}function $n(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Fs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function oa(e){if($n(e)!==e)throw Error(v(188))}function gd(e){var n=e.alternate;if(!n){if(n=$n(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return oa(l),e;if(o===r)return oa(l),n;o=o.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Is(e){return e=gd(e),e!==null?Ds(e):null}function Ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ds(e);if(n!==null)return n;e=e.sibling}return null}var As=xe.unstable_scheduleCallback,ia=xe.unstable_cancelCallback,wd=xe.unstable_shouldYield,vd=xe.unstable_requestPaint,Y=xe.unstable_now,yd=xe.unstable_getCurrentPriorityLevel,ii=xe.unstable_ImmediatePriority,Us=xe.unstable_UserBlockingPriority,Vr=xe.unstable_NormalPriority,xd=xe.unstable_LowPriority,Vs=xe.unstable_IdlePriority,cl=null,Ue=null;function kd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Ed,Sd=Math.log,Cd=Math.LN2;function Ed(e){return e>>>=0,e===0?32:31-(Sd(e)/Cd|0)|0}var dr=64,fr=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~l;a!==0?r=zt(a):(o&=i,o!==0&&(r=zt(o)))}else i=t&~l,i!==0?r=zt(i):o!==0&&(r=zt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),l=1<<t,r|=e[t],n&=~l;return r}function zd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Oe(o),a=1<<i,s=l[i];s===-1?(!(a&t)||a&r)&&(l[i]=zd(a,n)):s<=n&&(e.expiredLanes|=a),o&=~a}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bs(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function bl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function jd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Oe(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function ai(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var T=0;function Hs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ws,si,Qs,Ys,Xs,xo=!1,pr=[],an=null,sn=null,un=null,Dt=new Map,At=new Map,tn=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Dt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function wt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=tr(n),n!==null&&si(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Pd(e,n,t,r,l){switch(n){case"focusin":return an=wt(an,e,n,t,r,l),!0;case"dragenter":return sn=wt(sn,e,n,t,r,l),!0;case"mouseover":return un=wt(un,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Dt.set(o,wt(Dt.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,At.set(o,wt(At.get(o)||null,e,n,t,r,l)),!0}return!1}function Ks(e){var n=En(e.target);if(n!==null){var t=$n(n);if(t!==null){if(n=t.tag,n===13){if(n=Fs(t),n!==null){e.blockedOn=n,Xs(e.priority,function(){Qs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ko(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);mo=r,t.target.dispatchEvent(r),mo=null}else return n=tr(t),n!==null&&si(n),e.blockedOn=t,!1;n.shift()}return!0}function sa(e,n,t){jr(e)&&t.delete(n)}function Ld(){xo=!1,an!==null&&jr(an)&&(an=null),sn!==null&&jr(sn)&&(sn=null),un!==null&&jr(un)&&(un=null),Dt.forEach(sa),At.forEach(sa)}function vt(e,n){e.blockedOn===n&&(e.blockedOn=null,xo||(xo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Ld)))}function Ut(e){function n(l){return vt(l,e)}if(0<pr.length){vt(pr[0],e);for(var t=1;t<pr.length;t++){var r=pr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&vt(an,e),sn!==null&&vt(sn,e),un!==null&&vt(un,e),Dt.forEach(n),At.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)Ks(t),t.blockedOn===null&&tn.shift()}var qn=Je.ReactCurrentBatchConfig,Hr=!0;function Rd(e,n,t,r){var l=T,o=qn.transition;qn.transition=null;try{T=1,ui(e,n,t,r)}finally{T=l,qn.transition=o}}function Md(e,n,t,r){var l=T,o=qn.transition;qn.transition=null;try{T=4,ui(e,n,t,r)}finally{T=l,qn.transition=o}}function ui(e,n,t,r){if(Hr){var l=ko(e,n,t,r);if(l===null)Bl(e,n,r,Wr,t),aa(e,r);else if(Pd(l,e,n,t,r))r.stopPropagation();else if(aa(e,r),n&4&&-1<_d.indexOf(e)){for(;l!==null;){var o=tr(l);if(o!==null&&Ws(o),o=ko(e,n,t,r),o===null&&Bl(e,n,r,Wr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Bl(e,n,r,null,t)}}var Wr=null;function ko(e,n,t,r){if(Wr=null,e=oi(r),e=En(e),e!==null)if(n=$n(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Fs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Wr=e,null}function Gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yd()){case ii:return 1;case Us:return 4;case Vr:case xd:return 16;case Vs:return 536870912;default:return 16}default:return 16}}var ln=null,ci=null,_r=null;function Zs(){if(_r)return _r;var e,n=ci,t=n.length,r,l="value"in ln?ln.value:ln.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Pr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function ua(){return!1}function Se(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hr:ua,this.isPropagationStopped=ua,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),n}var ct={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=Se(ct),nr=B({},ct,{view:0,detail:0}),bd=Se(nr),Tl,Ol,yt,dl=B({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yt&&(yt&&e.type==="mousemove"?(Tl=e.screenX-yt.screenX,Ol=e.screenY-yt.screenY):Ol=Tl=0,yt=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),ca=Se(dl),Td=B({},dl,{dataTransfer:0}),Od=Se(Td),$d=B({},nr,{relatedTarget:0}),$l=Se($d),Fd=B({},ct,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Se(Fd),Dd=B({},ct,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ad=Se(Dd),Ud=B({},ct,{data:0}),da=Se(Ud),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hd[e])?!!n[e]:!1}function fi(){return Wd}var Qd=B({},nr,{key:function(e){if(e.key){var n=Vd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yd=Se(Qd),Xd=B({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fa=Se(Xd),Kd=B({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),Gd=Se(Kd),Zd=B({},ct,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Se(Zd),qd=B({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Se(qd),n0=[9,13,27,32],pi=Xe&&"CompositionEvent"in window,Pt=null;Xe&&"documentMode"in document&&(Pt=document.documentMode);var t0=Xe&&"TextEvent"in window&&!Pt,Js=Xe&&(!pi||Pt&&8<Pt&&11>=Pt),pa=" ",ha=!1;function qs(e,n){switch(e){case"keyup":return n0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function r0(e,n){switch(e){case"compositionend":return eu(n);case"keypress":return n.which!==32?null:(ha=!0,pa);case"textInput":return e=n.data,e===pa&&ha?null:e;default:return null}}function l0(e,n){if(An)return e==="compositionend"||!pi&&qs(e,n)?(e=Zs(),_r=ci=ln=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Js&&n.locale!=="ko"?null:n.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!o0[e.type]:n==="textarea"}function nu(e,n,t,r){Ms(r),n=Qr(n,"onChange"),0<n.length&&(t=new di("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Lt=null,Vt=null;function i0(e){fu(e,0)}function fl(e){var n=Bn(e);if(zs(n))return e}function a0(e,n){if(e==="change")return n}var tu=!1;if(Xe){var Fl;if(Xe){var Il="oninput"in document;if(!Il){var ga=document.createElement("div");ga.setAttribute("oninput","return;"),Il=typeof ga.oninput=="function"}Fl=Il}else Fl=!1;tu=Fl&&(!document.documentMode||9<document.documentMode)}function wa(){Lt&&(Lt.detachEvent("onpropertychange",ru),Vt=Lt=null)}function ru(e){if(e.propertyName==="value"&&fl(Vt)){var n=[];nu(n,Vt,e,oi(e)),$s(i0,n)}}function s0(e,n,t){e==="focusin"?(wa(),Lt=n,Vt=t,Lt.attachEvent("onpropertychange",ru)):e==="focusout"&&wa()}function u0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Vt)}function c0(e,n){if(e==="click")return fl(n)}function d0(e,n){if(e==="input"||e==="change")return fl(n)}function f0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:f0;function Bt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!to.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ya(e,n){var t=va(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=va(t)}}function lu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ou(){for(var e=window,n=Dr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Dr(e.document)}return n}function hi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function p0(e){var n=ou(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&lu(t.ownerDocument.documentElement,t)){if(r!==null&&hi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ya(t,o);var i=ya(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h0=Xe&&"documentMode"in document&&11>=document.documentMode,Un=null,So=null,Rt=null,Co=!1;function xa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Co||Un==null||Un!==Dr(r)||(r=Un,"selectionStart"in r&&hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rt&&Bt(Rt,r)||(Rt=r,r=Qr(So,"onSelect"),0<r.length&&(n=new di("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function mr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vn={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Dl={},iu={};Xe&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function pl(e){if(Dl[e])return Dl[e];if(!Vn[e])return e;var n=Vn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in iu)return Dl[e]=n[t];return e}var au=pl("animationend"),su=pl("animationiteration"),uu=pl("animationstart"),cu=pl("transitionend"),du=new Map,ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){du.set(e,n),On(n,[e])}for(var Al=0;Al<ka.length;Al++){var Ul=ka[Al],m0=Ul.toLowerCase(),g0=Ul[0].toUpperCase()+Ul.slice(1);wn(m0,"on"+g0)}wn(au,"onAnimationEnd");wn(su,"onAnimationIteration");wn(uu,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(cu,"onTransitionEnd");tt("onMouseEnter",["mouseout","mouseover"]);tt("onMouseLeave",["mouseout","mouseover"]);tt("onPointerEnter",["pointerout","pointerover"]);tt("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function Sa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,md(r,n,void 0,e),e.currentTarget=null}function fu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;Sa(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;Sa(l,a,c),o=s}}}if(Ur)throw e=vo,Ur=!1,vo=null,e}function $(e,n){var t=n[_o];t===void 0&&(t=n[_o]=new Set);var r=e+"__bubble";t.has(r)||(pu(n,e,2,!1),t.add(r))}function Vl(e,n,t){var r=0;n&&(r|=4),pu(t,e,r,n)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Ht(e){if(!e[gr]){e[gr]=!0,xs.forEach(function(t){t!=="selectionchange"&&(w0.has(t)||Vl(t,!1,e),Vl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gr]||(n[gr]=!0,Vl("selectionchange",!1,n))}}function pu(e,n,t,r){switch(Gs(n)){case 1:var l=Rd;break;case 4:l=Md;break;default:l=ui}t=l.bind(null,n,t,e),l=void 0,!wo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Bl(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=En(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}$s(function(){var c=o,m=oi(t),g=[];e:{var h=du.get(e);if(h!==void 0){var y=di,x=e;switch(e){case"keypress":if(Pr(t)===0)break e;case"keydown":case"keyup":y=Yd;break;case"focusin":x="focus",y=$l;break;case"focusout":x="blur",y=$l;break;case"beforeblur":case"afterblur":y=$l;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gd;break;case au:case su:case uu:y=Id;break;case cu:y=Jd;break;case"scroll":y=bd;break;case"wheel":y=e0;break;case"copy":case"cut":case"paste":y=Ad;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fa}var k=(n&4)!==0,D=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var u=c,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=It(u,f),w!=null&&k.push(Wt(u,w,p)))),D)break;u=u.return}0<k.length&&(h=new y(h,x,null,t,m),g.push({event:h,listeners:k}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==mo&&(x=t.relatedTarget||t.fromElement)&&(En(x)||x[Ke]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=c,x=x?En(x):null,x!==null&&(D=$n(x),x!==D||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(k=ca,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=fa,w="onPointerLeave",f="onPointerEnter",u="pointer"),D=y==null?h:Bn(y),p=x==null?h:Bn(x),h=new k(w,u+"leave",y,t,m),h.target=D,h.relatedTarget=p,w=null,En(m)===c&&(k=new k(f,u+"enter",x,t,m),k.target=p,k.relatedTarget=D,w=k),D=w,y&&x)n:{for(k=y,f=x,u=0,p=k;p;p=Fn(p))u++;for(p=0,w=f;w;w=Fn(w))p++;for(;0<u-p;)k=Fn(k),u--;for(;0<p-u;)f=Fn(f),p--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break n;k=Fn(k),f=Fn(f)}k=null}else k=null;y!==null&&Ca(g,h,y,k,!1),x!==null&&D!==null&&Ca(g,D,x,k,!0)}}e:{if(h=c?Bn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=a0;else if(ma(h))if(tu)C=d0;else{C=u0;var z=s0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=c0);if(C&&(C=C(e,c))){nu(g,C,t,m);break e}z&&z(e,h,c),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&uo(h,"number",h.value)}switch(z=c?Bn(c):window,e){case"focusin":(ma(z)||z.contentEditable==="true")&&(Un=z,So=c,Rt=null);break;case"focusout":Rt=So=Un=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,xa(g,t,m);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":xa(g,t,m)}var N;if(pi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else An?qs(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Js&&t.locale!=="ko"&&(An||j!=="onCompositionStart"?j==="onCompositionEnd"&&An&&(N=Zs()):(ln=m,ci="value"in ln?ln.value:ln.textContent,An=!0)),z=Qr(c,j),0<z.length&&(j=new da(j,e,null,t,m),g.push({event:j,listeners:z}),N?j.data=N:(N=eu(t),N!==null&&(j.data=N)))),(N=t0?r0(e,t):l0(e,t))&&(c=Qr(c,"onBeforeInput"),0<c.length&&(m=new da("onBeforeInput","beforeinput",null,t,m),g.push({event:m,listeners:c}),m.data=N))}fu(g,n)})}function Wt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=It(e,t),o!=null&&r.unshift(Wt(e,o,l)),o=It(e,n),o!=null&&r.push(Wt(e,o,l))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ca(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=It(t,o),s!=null&&i.unshift(Wt(t,s,a))):l||(s=It(t,o),s!=null&&i.push(Wt(t,s,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var v0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function Ea(e){return(typeof e=="string"?e:""+e).replace(v0,`
`).replace(y0,"")}function wr(e,n,t){if(n=Ea(n),Ea(e)!==n&&t)throw Error(v(425))}function Yr(){}var Eo=null,zo=null;function No(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,za=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof za<"u"?function(e){return za.resolve(null).then(e).catch(S0)}:jo;function S0(e){setTimeout(function(){throw e})}function Hl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Ut(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ut(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Na(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var dt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+dt,Qt="__reactProps$"+dt,Ke="__reactContainer$"+dt,_o="__reactEvents$"+dt,C0="__reactListeners$"+dt,E0="__reactHandles$"+dt;function En(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Na(e);e!==null;){if(t=e[Ae])return t;e=Na(e)}return n}e=t,t=e.parentNode}return null}function tr(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function hl(e){return e[Qt]||null}var Po=[],Hn=-1;function vn(e){return{current:e}}function I(e){0>Hn||(e.current=Po[Hn],Po[Hn]=null,Hn--)}function O(e,n){Hn++,Po[Hn]=e.current,e.current=n}var gn={},ie=vn(gn),he=vn(!1),Ln=gn;function rt(e,n){var t=e.type.contextTypes;if(!t)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Xr(){I(he),I(ie)}function ja(e,n,t){if(ie.current!==gn)throw Error(v(168));O(ie,n),O(he,t)}function hu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,sd(e)||"Unknown",l));return B({},t,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Ln=ie.current,O(ie,e),O(he,he.current),!0}function _a(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=hu(e,n,Ln),r.__reactInternalMemoizedMergedChildContext=e,I(he),I(ie),O(ie,e)):I(he),O(he,t)}var He=null,ml=!1,Wl=!1;function mu(e){He===null?He=[e]:He.push(e)}function z0(e){ml=!0,mu(e)}function yn(){if(!Wl&&He!==null){Wl=!0;var e=0,n=T;try{var t=He;for(T=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}He=null,ml=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),As(ii,yn),l}finally{T=n,Wl=!1}}return null}var Wn=[],Qn=0,Gr=null,Zr=0,Ce=[],Ee=0,Rn=null,We=1,Qe="";function Sn(e,n){Wn[Qn++]=Zr,Wn[Qn++]=Gr,Gr=e,Zr=n}function gu(e,n,t){Ce[Ee++]=We,Ce[Ee++]=Qe,Ce[Ee++]=Rn,Rn=e;var r=We;e=Qe;var l=32-Oe(r)-1;r&=~(1<<l),t+=1;var o=32-Oe(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-Oe(n)+l|t<<l|r,Qe=o+e}else We=1<<o|t<<l|r,Qe=e}function mi(e){e.return!==null&&(Sn(e,1),gu(e,1,0))}function gi(e){for(;e===Gr;)Gr=Wn[--Qn],Wn[Qn]=null,Zr=Wn[--Qn],Wn[Qn]=null;for(;e===Rn;)Rn=Ce[--Ee],Ce[Ee]=null,Qe=Ce[--Ee],Ce[Ee]=null,We=Ce[--Ee],Ce[Ee]=null}var ye=null,ve=null,A=!1,Te=null;function wu(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Pa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rn!==null?{id:We,overflow:Qe}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(A){var n=ve;if(n){var t=n;if(!Pa(e,n)){if(Lo(e))throw Error(v(418));n=cn(t.nextSibling);var r=ye;n&&Pa(e,n)?wu(r,t):(e.flags=e.flags&-4097|2,A=!1,ye=e)}}else{if(Lo(e))throw Error(v(418));e.flags=e.flags&-4097|2,A=!1,ye=e}}}function La(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!A)return La(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!No(e.type,e.memoizedProps)),n&&(n=ve)){if(Lo(e))throw vu(),Error(v(418));for(;n;)wu(e,n),n=cn(n.nextSibling)}if(La(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?cn(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=ve;e;)e=cn(e.nextSibling)}function lt(){ve=ye=null,A=!1}function wi(e){Te===null?Te=[e]:Te.push(e)}var N0=Je.ReactCurrentBatchConfig;function xt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function yr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ra(e){var n=e._init;return n(e._payload)}function yu(e){function n(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=hn(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,w){return u===null||u.tag!==6?(u=Jl(p,f.mode,w),u.return=f,u):(u=l(u,p),u.return=f,u)}function s(f,u,p,w){var C=p.type;return C===Dn?m(f,u,p.props.children,w,p.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Ra(C)===u.type)?(w=l(u,p.props),w.ref=xt(f,u,p),w.return=f,w):(w=$r(p.type,p.key,p.props,null,f.mode,w),w.ref=xt(f,u,p),w.return=f,w)}function c(f,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ql(p,f.mode,w),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function m(f,u,p,w,C){return u===null||u.tag!==7?(u=_n(p,f.mode,w,C),u.return=f,u):(u=l(u,p),u.return=f,u)}function g(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jl(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:return p=$r(u.type,u.key,u.props,null,f.mode,p),p.ref=xt(f,null,u),p.return=f,p;case In:return u=ql(u,f.mode,p),u.return=f,u;case en:var w=u._init;return g(f,w(u._payload),p)}if(Et(u)||mt(u))return u=_n(u,f.mode,p,null),u.return=f,u;yr(f,u)}return null}function h(f,u,p,w){var C=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(f,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:return p.key===C?s(f,u,p,w):null;case In:return p.key===C?c(f,u,p,w):null;case en:return C=p._init,h(f,u,C(p._payload),w)}if(Et(p)||mt(p))return C!==null?null:m(f,u,p,w,null);yr(f,p)}return null}function y(f,u,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(u,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case sr:return f=f.get(w.key===null?p:w.key)||null,s(u,f,w,C);case In:return f=f.get(w.key===null?p:w.key)||null,c(u,f,w,C);case en:var z=w._init;return y(f,u,p,z(w._payload),C)}if(Et(w)||mt(w))return f=f.get(p)||null,m(u,f,w,C,null);yr(u,w)}return null}function x(f,u,p,w){for(var C=null,z=null,N=u,j=u=0,W=null;N!==null&&j<p.length;j++){N.index>j?(W=N,N=null):W=N.sibling;var M=h(f,N,p[j],w);if(M===null){N===null&&(N=W);break}e&&N&&M.alternate===null&&n(f,N),u=o(M,u,j),z===null?C=M:z.sibling=M,z=M,N=W}if(j===p.length)return t(f,N),A&&Sn(f,j),C;if(N===null){for(;j<p.length;j++)N=g(f,p[j],w),N!==null&&(u=o(N,u,j),z===null?C=N:z.sibling=N,z=N);return A&&Sn(f,j),C}for(N=r(f,N);j<p.length;j++)W=y(N,f,j,p[j],w),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?j:W.key),u=o(W,u,j),z===null?C=W:z.sibling=W,z=W);return e&&N.forEach(function(Le){return n(f,Le)}),A&&Sn(f,j),C}function k(f,u,p,w){var C=mt(p);if(typeof C!="function")throw Error(v(150));if(p=C.call(p),p==null)throw Error(v(151));for(var z=C=null,N=u,j=u=0,W=null,M=p.next();N!==null&&!M.done;j++,M=p.next()){N.index>j?(W=N,N=null):W=N.sibling;var Le=h(f,N,M.value,w);if(Le===null){N===null&&(N=W);break}e&&N&&Le.alternate===null&&n(f,N),u=o(Le,u,j),z===null?C=Le:z.sibling=Le,z=Le,N=W}if(M.done)return t(f,N),A&&Sn(f,j),C;if(N===null){for(;!M.done;j++,M=p.next())M=g(f,M.value,w),M!==null&&(u=o(M,u,j),z===null?C=M:z.sibling=M,z=M);return A&&Sn(f,j),C}for(N=r(f,N);!M.done;j++,M=p.next())M=y(N,f,j,M.value,w),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?j:M.key),u=o(M,u,j),z===null?C=M:z.sibling=M,z=M);return e&&N.forEach(function(pt){return n(f,pt)}),A&&Sn(f,j),C}function D(f,u,p,w){if(typeof p=="object"&&p!==null&&p.type===Dn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:e:{for(var C=p.key,z=u;z!==null;){if(z.key===C){if(C=p.type,C===Dn){if(z.tag===7){t(f,z.sibling),u=l(z,p.props.children),u.return=f,f=u;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Ra(C)===z.type){t(f,z.sibling),u=l(z,p.props),u.ref=xt(f,z,p),u.return=f,f=u;break e}t(f,z);break}else n(f,z);z=z.sibling}p.type===Dn?(u=_n(p.props.children,f.mode,w,p.key),u.return=f,f=u):(w=$r(p.type,p.key,p.props,null,f.mode,w),w.ref=xt(f,u,p),w.return=f,f=w)}return i(f);case In:e:{for(z=p.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){t(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=ql(p,f.mode,w),u.return=f,f=u}return i(f);case en:return z=p._init,D(f,u,z(p._payload),w)}if(Et(p))return x(f,u,p,w);if(mt(p))return k(f,u,p,w);yr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(t(f,u.sibling),u=l(u,p),u.return=f,f=u):(t(f,u),u=Jl(p,f.mode,w),u.return=f,f=u),i(f)):t(f,u)}return D}var ot=yu(!0),xu=yu(!1),Jr=vn(null),qr=null,Yn=null,vi=null;function yi(){vi=Yn=qr=null}function xi(e){var n=Jr.current;I(Jr),e._currentValue=n}function Mo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function et(e,n){qr=e,vi=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(vi!==e)if(e={context:e,memoizedValue:n,next:null},Yn===null){if(qr===null)throw Error(v(308));Yn=e,qr.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return n}var zn=null;function ki(e){zn===null?zn=[e]:zn.push(e)}function ku(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,ki(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ge(e,r)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function Si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ge(e,t)}return l=r.interleaved,l===null?(n.next=n,ki(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ge(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ai(e,t)}}function Ma(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function el(e,n,t,r){var l=e.updateQueue;nn=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==i&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(o!==null){var g=l.baseState;i=0,m=c=s=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(h=n,y=t,k.tag){case 1:if(x=k.payload,typeof x=="function"){g=x.call(y,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,h=typeof x=="function"?x.call(y,g,h):x,h==null)break e;g=B({},g,h);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,s=g):m=m.next=y,i|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(s=g),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);bn|=i,e.lanes=i,e.memoizedState=g}}function ba(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var rr={},Ve=vn(rr),Yt=vn(rr),Xt=vn(rr);function Nn(e){if(e===rr)throw Error(v(174));return e}function Ci(e,n){switch(O(Xt,n),O(Yt,e),O(Ve,rr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=fo(n,e)}I(Ve),O(Ve,n)}function it(){I(Ve),I(Yt),I(Xt)}function Cu(e){Nn(Xt.current);var n=Nn(Ve.current),t=fo(n,e.type);n!==t&&(O(Yt,e),O(Ve,t))}function Ei(e){Yt.current===e&&(I(Ve),I(Yt))}var U=vn(0);function nl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ql=[];function zi(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Rr=Je.ReactCurrentDispatcher,Yl=Je.ReactCurrentBatchConfig,Mn=0,V=null,K=null,J=null,tl=!1,Mt=!1,Kt=0,j0=0;function re(){throw Error(v(321))}function Ni(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function ji(e,n,t,r,l,o){if(Mn=o,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rr.current=e===null||e.memoizedState===null?R0:M0,e=t(r,l),Mt){o=0;do{if(Mt=!1,Kt=0,25<=o)throw Error(v(301));o+=1,J=K=null,n.updateQueue=null,Rr.current=b0,e=t(r,l)}while(Mt)}if(Rr.current=rl,n=K!==null&&K.next!==null,Mn=0,J=K=V=null,tl=!1,n)throw Error(v(300));return e}function _i(){var e=Kt!==0;return Kt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function Pe(){if(K===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=J===null?V.memoizedState:J.next;if(n!==null)J=n,K=e;else{if(e===null)throw Error(v(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Gt(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var m=c.lane;if((Mn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=g,i=r):s=s.next=g,V.lanes|=m,bn|=m}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,Fe(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,bn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Kl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Fe(o,n.memoizedState)||(pe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Eu(){}function zu(e,n){var t=V,r=Pe(),l=n(),o=!Fe(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Pi(_u.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,Zt(9,ju.bind(null,t,r,l,n),void 0,null),q===null)throw Error(v(349));Mn&30||Nu(t,n,l)}return l}function Nu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ju(e,n,t,r){n.value=t,n.getSnapshot=r,Pu(n)&&Lu(e)}function _u(e,n,t){return t(function(){Pu(n)&&Lu(e)})}function Pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Lu(e){var n=Ge(e,1);n!==null&&$e(n,e,1,-1)}function Ta(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=L0.bind(null,V,e),[n.memoizedState,e]}function Zt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ru(){return Pe().memoizedState}function Mr(e,n,t,r){var l=De();V.flags|=e,l.memoizedState=Zt(1|n,t,void 0,r===void 0?null:r)}function gl(e,n,t,r){var l=Pe();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&Ni(r,i.deps)){l.memoizedState=Zt(n,t,o,r);return}}V.flags|=e,l.memoizedState=Zt(1|n,t,o,r)}function Oa(e,n){return Mr(8390656,8,e,n)}function Pi(e,n){return gl(2048,8,e,n)}function Mu(e,n){return gl(4,2,e,n)}function bu(e,n){return gl(4,4,e,n)}function Tu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ou(e,n,t){return t=t!=null?t.concat([e]):null,gl(4,4,Tu.bind(null,n,e),t)}function Li(){}function $u(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ni(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Fu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ni(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Iu(e,n,t){return Mn&21?(Fe(t,n)||(t=Bs(),V.lanes|=t,bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function _0(e,n){var t=T;T=t!==0&&4>t?t:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),n()}finally{T=t,Yl.transition=r}}function Du(){return Pe().memoizedState}function P0(e,n,t){var r=pn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Au(e))Uu(n,t);else if(t=ku(e,n,t,r),t!==null){var l=se();$e(t,e,r,l),Vu(t,n,r)}}function L0(e,n,t){var r=pn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Uu(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,a=o(i,t);if(l.hasEagerState=!0,l.eagerState=a,Fe(a,i)){var s=n.interleaved;s===null?(l.next=l,ki(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=ku(e,n,l,r),t!==null&&(l=se(),$e(t,e,r,l),Vu(t,n,r))}}function Au(e){var n=e.alternate;return e===V||n!==null&&n===V}function Uu(e,n){Mt=tl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Vu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ai(e,t)}}var rl={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},R0={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:Oa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Mr(4194308,4,Tu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Mr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Mr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=P0.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Ta,useDebugValue:Li,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ta(!1),n=e[0];return e=_0.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,l=De();if(A){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),q===null)throw Error(v(349));Mn&30||Nu(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Oa(_u.bind(null,r,o,e),[e]),r.flags|=2048,Zt(9,ju.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=De(),n=q.identifierPrefix;if(A){var t=Qe,r=We;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Kt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=j0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},M0={readContext:_e,useCallback:$u,useContext:_e,useEffect:Pi,useImperativeHandle:Ou,useInsertionEffect:Mu,useLayoutEffect:bu,useMemo:Fu,useReducer:Xl,useRef:Ru,useState:function(){return Xl(Gt)},useDebugValue:Li,useDeferredValue:function(e){var n=Pe();return Iu(n,K.memoizedState,e)},useTransition:function(){var e=Xl(Gt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Du,unstable_isNewReconciler:!1},b0={readContext:_e,useCallback:$u,useContext:_e,useEffect:Pi,useImperativeHandle:Ou,useInsertionEffect:Mu,useLayoutEffect:bu,useMemo:Fu,useReducer:Kl,useRef:Ru,useState:function(){return Kl(Gt)},useDebugValue:Li,useDeferredValue:function(e){var n=Pe();return K===null?n.memoizedState=e:Iu(n,K.memoizedState,e)},useTransition:function(){var e=Kl(Gt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Eu,useSyncExternalStore:zu,useId:Du,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function bo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wl={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),o=Ye(r,l);o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,l),n!==null&&($e(n,e,l,r),Lr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),l=pn(e),o=Ye(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,l),n!==null&&($e(n,e,l,r),Lr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=pn(e),l=Ye(t,r);l.tag=2,n!=null&&(l.callback=n),n=dn(e,l,r),n!==null&&($e(n,e,r,t),Lr(n,e,r))}};function $a(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Bt(t,r)||!Bt(l,o):!0}function Bu(e,n,t){var r=!1,l=gn,o=n.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=me(n)?Ln:ie.current,r=n.contextTypes,o=(r=r!=null)?rt(e,l):gn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Fa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&wl.enqueueReplaceState(n,n.state,null)}function To(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Si(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=me(n)?Ln:ie.current,l.context=rt(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(bo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&wl.enqueueReplaceState(l,l.state,null),el(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function at(e,n){try{var t="",r=n;do t+=ad(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Gl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Oo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,n,t){t=Ye(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ol||(ol=!0,Wo=r),Oo(e,n)},t}function Wu(e,n,t){t=Ye(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Oo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Oo(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ia(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new T0;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=X0.bind(null,e,n,t),n.then(e,e))}function Da(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Aa(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ye(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e)}var O0=Je.ReactCurrentOwner,pe=!1;function ae(e,n,t,r){n.child=e===null?xu(n,null,t,r):ot(n,e.child,t,r)}function Ua(e,n,t,r,l){t=t.render;var o=n.ref;return et(n,l),r=ji(e,n,t,r,o,l),t=_i(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(A&&t&&mi(n),n.flags|=1,ae(e,n,r,l),n.child)}function Va(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Ii(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Qu(e,n,o,r,l)):(e=$r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Bt,t(i,r)&&e.ref===n.ref)return Ze(e,n,l)}return n.flags|=1,e=hn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Qu(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Bt(o,r)&&e.ref===n.ref)if(pe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ze(e,n,l)}return $o(e,n,t,r,l)}function Yu(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Kn,we),we|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Kn,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(Kn,we),we|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(Kn,we),we|=r;return ae(e,n,l,t),n.child}function Xu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function $o(e,n,t,r,l){var o=me(t)?Ln:ie.current;return o=rt(n,o),et(n,l),t=ji(e,n,t,r,o,l),r=_i(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ze(e,n,l)):(A&&r&&mi(n),n.flags|=1,ae(e,n,t,l),n.child)}function Ba(e,n,t,r,l){if(me(t)){var o=!0;Kr(n)}else o=!1;if(et(n,l),n.stateNode===null)br(e,n),Bu(n,t,r),To(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=me(t)?Ln:ie.current,c=rt(n,c));var m=t.getDerivedStateFromProps,g=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Fa(n,i,r,c),nn=!1;var h=n.memoizedState;i.state=h,el(n,r,i,l),s=n.memoizedState,a!==r||h!==s||he.current||nn?(typeof m=="function"&&(bo(n,t,m,r),s=n.memoizedState),(a=nn||$a(n,t,a,r,h,s,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Su(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Me(n.type,a),i.props=c,g=n.pendingProps,h=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=me(t)?Ln:ie.current,s=rt(n,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||h!==s)&&Fa(n,i,r,s),nn=!1,h=n.memoizedState,i.state=h,el(n,r,i,l);var x=n.memoizedState;a!==g||h!==x||he.current||nn?(typeof y=="function"&&(bo(n,t,y,r),x=n.memoizedState),(c=nn||$a(n,t,c,r,h,x,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Fo(e,n,t,r,o,l)}function Fo(e,n,t,r,l,o){Xu(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&_a(n,t,!1),Ze(e,n,o);r=n.stateNode,O0.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=ot(n,e.child,null,o),n.child=ot(n,null,a,o)):ae(e,n,a,o),n.memoizedState=r.state,l&&_a(n,t,!0),n.child}function Ku(e){var n=e.stateNode;n.pendingContext?ja(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ja(e,n.context,!1),Ci(e,n.containerInfo)}function Ha(e,n,t,r,l){return lt(),wi(l),n.flags|=256,ae(e,n,t,r),n.child}var Io={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,n,t){var r=n.pendingProps,l=U.current,o=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return Ro(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=xl(i,r,0,null),e=_n(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Do(t),n.memoizedState=Io,e):Ri(n,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return $0(e,n,i,r,a,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=hn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=hn(a,o):(o=_n(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Do(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Io,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ri(e,n){return n=xl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function xr(e,n,t,r){return r!==null&&wi(r),ot(n,e.child,null,t),e=Ri(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $0(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Gl(Error(v(422))),xr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=xl({mode:"visible",children:r.children},l,0,null),o=_n(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ot(n,e.child,null,i),n.child.memoizedState=Do(i),n.memoizedState=Io,o);if(!(n.mode&1))return xr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Gl(o,r,void 0),xr(e,n,i,r)}if(a=(i&e.childLanes)!==0,pe||a){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),$e(r,e,l,-1))}return Fi(),r=Gl(Error(v(421))),xr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=K0.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,ve=cn(l.nextSibling),ye=n,A=!0,Te=null,e!==null&&(Ce[Ee++]=We,Ce[Ee++]=Qe,Ce[Ee++]=Rn,We=e.id,Qe=e.overflow,Rn=n),n=Ri(n,r.children),n.flags|=4096,n)}function Wa(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mo(e.return,n,t)}function Zl(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Zu(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wa(e,t,n);else if(e.tag===19)Wa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&nl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Zl(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&nl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Zl(n,!0,t,null,o);break;case"together":Zl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=hn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=hn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function F0(e,n,t){switch(n.tag){case 3:Ku(n),lt();break;case 5:Cu(n);break;case 1:me(n.type)&&Kr(n);break;case 4:Ci(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Gu(e,n,t):(O(U,U.current&1),e=Ze(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Zu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Yu(e,n,t)}return Ze(e,n,t)}var Ju,Ao,qu,ec;Ju=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ao=function(){};qu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Nn(Ve.current);var o=null;switch(t){case"input":l=ao(e,l),r=ao(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=co(e,l),r=co(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}po(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($t.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($t.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&$("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};ec=function(e,n,t,r){t!==r&&(n.flags|=4)};function kt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function I0(e,n,t){var r=n.pendingProps;switch(gi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return me(n.type)&&Xr(),le(n),null;case 3:return r=n.stateNode,it(),I(he),I(ie),zi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Te!==null&&(Xo(Te),Te=null))),Ao(e,n),le(n),null;case 5:Ei(n);var l=Nn(Xt.current);if(t=n.type,e!==null&&n.stateNode!=null)qu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return le(n),null}if(e=Nn(Ve.current),vr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ae]=n,r[Qt]=o,e=(n.mode&1)!==0,t){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Nt.length;l++)$(Nt[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ea(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":ta(r,o),$("invalid",r)}po(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",""+a]):$t.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(t){case"input":ur(r),na(r,o,!0);break;case"textarea":ur(r),ra(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_s(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ae]=n,e[Qt]=r,Ju(e,n,!1,!1),n.stateNode=e;e:{switch(i=ho(t,r),t){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nt.length;l++)$(Nt[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":ea(e,r),l=ao(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),$("invalid",e);break;case"textarea":ta(e,r),l=co(e,r),$("invalid",e);break;default:l=r}po(t,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Rs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ps(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ft(e,s):typeof s=="number"&&Ft(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($t.hasOwnProperty(o)?s!=null&&o==="onScroll"&&$("scroll",e):s!=null&&ni(e,o,s,i))}switch(t){case"input":ur(e),na(e,r,!1);break;case"textarea":ur(e),ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)ec(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Nn(Xt.current),Nn(Ve.current),vr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ae]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:wr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ae]=n,n.stateNode=r}return le(n),null;case 13:if(I(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&n.mode&1&&!(n.flags&128))vu(),lt(),n.flags|=98560,o=!1;else if(o=vr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Ae]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),o=!1}else Te!==null&&(Xo(Te),Te=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?G===0&&(G=3):Fi())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return it(),Ao(e,n),e===null&&Ht(n.stateNode.containerInfo),le(n),null;case 10:return xi(n.type._context),le(n),null;case 17:return me(n.type)&&Xr(),le(n),null;case 19:if(I(U),o=n.memoizedState,o===null)return le(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)kt(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=nl(e),i!==null){for(n.flags|=128,kt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&Y()>st&&(n.flags|=128,r=!0,kt(o,!1),n.lanes=4194304)}else{if(!r)if(e=nl(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return le(n),null}else 2*Y()-o.renderingStartTime>st&&t!==1073741824&&(n.flags|=128,r=!0,kt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Y(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(le(n),null);case 22:case 23:return $i(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?we&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function D0(e,n){switch(gi(n),n.tag){case 1:return me(n.type)&&Xr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return it(),I(he),I(ie),zi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ei(n),null;case 13:if(I(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(U),null;case 4:return it(),null;case 10:return xi(n.type._context),null;case 22:case 23:return $i(),null;case 24:return null;default:return null}}var kr=!1,oe=!1,A0=typeof WeakSet=="function"?WeakSet:Set,S=null;function Xn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Uo(e,n,t){try{t()}catch(r){H(e,n,r)}}var Qa=!1;function U0(e,n){if(Eo=Hr,e=ou(),hi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,a=-1,s=-1,c=0,m=0,g=e,h=null;n:for(;;){for(var y;g!==t||l!==0&&g.nodeType!==3||(a=i+l),g!==o||r!==0&&g.nodeType!==3||(s=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break n;if(h===t&&++c===l&&(a=i),h===o&&++m===r&&(s=i),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zo={focusedElem:e,selectionRange:t},Hr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,D=x.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Me(n.type,k),D);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(w){H(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return x=Qa,Qa=!1,x}function bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Uo(n,t,o)}l=l.next}while(l!==r)}}function vl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Vo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function nc(e){var n=e.alternate;n!==null&&(e.alternate=null,nc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Qt],delete n[_o],delete n[C0],delete n[E0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ya(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Bo(e,n,t),e=e.sibling;e!==null;)Bo(e,n,t),e=e.sibling}function Ho(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ho(e,n,t),e=e.sibling;e!==null;)Ho(e,n,t),e=e.sibling}var ee=null,be=!1;function qe(e,n,t){for(t=t.child;t!==null;)rc(e,n,t),t=t.sibling}function rc(e,n,t){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(cl,t)}catch{}switch(t.tag){case 5:oe||Xn(t,n);case 6:var r=ee,l=be;ee=null,qe(e,n,t),ee=r,be=l,ee!==null&&(be?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(be?(e=ee,t=t.stateNode,e.nodeType===8?Hl(e.parentNode,t):e.nodeType===1&&Hl(e,t),Ut(e)):Hl(ee,t.stateNode));break;case 4:r=ee,l=be,ee=t.stateNode.containerInfo,be=!0,qe(e,n,t),ee=r,be=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Uo(t,n,i),l=l.next}while(l!==r)}qe(e,n,t);break;case 1:if(!oe&&(Xn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,qe(e,n,t),oe=r):qe(e,n,t);break;default:qe(e,n,t)}}function Xa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new A0),n.forEach(function(r){var l=G0.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,be=!1;break e;case 3:ee=a.stateNode.containerInfo,be=!0;break e;case 4:ee=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(ee===null)throw Error(v(160));rc(o,i,l),ee=null,be=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)lc(n,e),n=n.sibling}function lc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Ie(e),r&4){try{bt(3,e,e.return),vl(3,e)}catch(k){H(e,e.return,k)}try{bt(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:Re(n,e),Ie(e),r&512&&t!==null&&Xn(t,t.return);break;case 5:if(Re(n,e),Ie(e),r&512&&t!==null&&Xn(t,t.return),e.flags&32){var l=e.stateNode;try{Ft(l,"")}catch(k){H(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ns(l,o),ho(a,i);var c=ho(a,o);for(i=0;i<s.length;i+=2){var m=s[i],g=s[i+1];m==="style"?Rs(l,g):m==="dangerouslySetInnerHTML"?Ps(l,g):m==="children"?Ft(l,g):ni(l,m,g,c)}switch(a){case"input":so(l,o);break;case"textarea":js(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Gn(l,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Gn(l,!!o.multiple,o.defaultValue,!0):Gn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Qt]=o}catch(k){H(e,e.return,k)}}break;case 6:if(Re(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){H(e,e.return,k)}}break;case 3:if(Re(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ut(n.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:Re(n,e),Ie(e);break;case 13:Re(n,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ti=Y())),r&4&&Xa(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(c=oe)||m,Re(n,e),oe=c):Re(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(g=S=m;S!==null;){switch(h=S,y=h.child,h.tag){case 0:case 11:case 14:case 15:bt(4,h,h.return);break;case 1:Xn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(k){H(r,t,k)}}break;case 5:Xn(h,h.return);break;case 22:if(h.memoizedState!==null){Ga(g);continue}}y!==null?(y.return=h,S=y):Ga(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,s=g.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ls("display",i))}catch(k){H(e,e.return,k)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(k){H(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(n,e),Ie(e),r&4&&Xa(e);break;case 21:break;default:Re(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(tc(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ft(l,""),r.flags&=-33);var o=Ya(e);Ho(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ya(e);Bo(e,a,i);break;default:throw Error(v(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function V0(e,n,t){S=e,oc(e)}function oc(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||kr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=kr;var c=oe;if(kr=i,(oe=s)&&!c)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Za(l):s!==null?(s.return=i,S=s):Za(l);for(;o!==null;)S=o,oc(o),o=o.sibling;S=l,kr=a,oe=c}Ka(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Ka(e)}}function Ka(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||vl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ba(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ba(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ut(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||n.flags&512&&Vo(n)}catch(h){H(n,n.return,h)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Ga(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Za(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vl(4,n)}catch(s){H(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){H(n,l,s)}}var o=n.return;try{Vo(n)}catch(s){H(n,o,s)}break;case 5:var i=n.return;try{Vo(n)}catch(s){H(n,i,s)}}}catch(s){H(n,n.return,s)}if(n===e){S=null;break}var a=n.sibling;if(a!==null){a.return=n.return,S=a;break}S=n.return}}var B0=Math.ceil,ll=Je.ReactCurrentDispatcher,Mi=Je.ReactCurrentOwner,je=Je.ReactCurrentBatchConfig,b=0,q=null,X=null,ne=0,we=0,Kn=vn(0),G=0,Jt=null,bn=0,yl=0,bi=0,Tt=null,fe=null,Ti=0,st=1/0,Be=null,ol=!1,Wo=null,fn=null,Sr=!1,on=null,il=0,Ot=0,Qo=null,Tr=-1,Or=0;function se(){return b&6?Y():Tr!==-1?Tr:Tr=Y()}function pn(e){return e.mode&1?b&2&&ne!==0?ne&-ne:N0.transition!==null?(Or===0&&(Or=Bs()),Or):(e=T,e!==0||(e=window.event,e=e===void 0?16:Gs(e.type)),e):1}function $e(e,n,t,r){if(50<Ot)throw Ot=0,Qo=null,Error(v(185));er(e,t,r),(!(b&2)||e!==q)&&(e===q&&(!(b&2)&&(yl|=t),G===4&&rn(e,ne)),ge(e,r),t===1&&b===0&&!(n.mode&1)&&(st=Y()+500,ml&&yn()))}function ge(e,n){var t=e.callbackNode;Nd(e,n);var r=Br(e,e===q?ne:0);if(r===0)t!==null&&ia(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ia(t),n===1)e.tag===0?z0(Ja.bind(null,e)):mu(Ja.bind(null,e)),k0(function(){!(b&6)&&yn()}),t=null;else{switch(Hs(r)){case 1:t=ii;break;case 4:t=Us;break;case 16:t=Vr;break;case 536870912:t=Vs;break;default:t=Vr}t=pc(t,ic.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ic(e,n){if(Tr=-1,Or=0,b&6)throw Error(v(327));var t=e.callbackNode;if(nt()&&e.callbackNode!==t)return null;var r=Br(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=al(e,r);else{n=r;var l=b;b|=2;var o=sc();(q!==e||ne!==n)&&(Be=null,st=Y()+500,jn(e,n));do try{Q0();break}catch(a){ac(e,a)}while(!0);yi(),ll.current=o,b=l,X!==null?n=0:(q=null,ne=0,n=G)}if(n!==0){if(n===2&&(l=yo(e),l!==0&&(r=l,n=Yo(e,l))),n===1)throw t=Jt,jn(e,0),rn(e,r),ge(e,Y()),t;if(n===6)rn(e,r);else{if(l=e.current.alternate,!(r&30)&&!H0(l)&&(n=al(e,r),n===2&&(o=yo(e),o!==0&&(r=o,n=Yo(e,o))),n===1))throw t=Jt,jn(e,0),rn(e,r),ge(e,Y()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:Cn(e,fe,Be);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=Ti+500-Y(),10<n)){if(Br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(Cn.bind(null,e,fe,Be),n);break}Cn(e,fe,Be);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Oe(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B0(r/1960))-r,10<r){e.timeoutHandle=jo(Cn.bind(null,e,fe,Be),r);break}Cn(e,fe,Be);break;case 5:Cn(e,fe,Be);break;default:throw Error(v(329))}}}return ge(e,Y()),e.callbackNode===t?ic.bind(null,e):null}function Yo(e,n){var t=Tt;return e.current.memoizedState.isDehydrated&&(jn(e,n).flags|=256),e=al(e,n),e!==2&&(n=fe,fe=t,n!==null&&Xo(n)),e}function Xo(e){fe===null?fe=e:fe.push.apply(fe,e)}function H0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Fe(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~bi,n&=~yl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function Ja(e){if(b&6)throw Error(v(327));nt();var n=Br(e,0);if(!(n&1))return ge(e,Y()),null;var t=al(e,n);if(e.tag!==0&&t===2){var r=yo(e);r!==0&&(n=r,t=Yo(e,r))}if(t===1)throw t=Jt,jn(e,0),rn(e,n),ge(e,Y()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Cn(e,fe,Be),ge(e,Y()),null}function Oi(e,n){var t=b;b|=1;try{return e(n)}finally{b=t,b===0&&(st=Y()+500,ml&&yn())}}function Tn(e){on!==null&&on.tag===0&&!(b&6)&&nt();var n=b;b|=1;var t=je.transition,r=T;try{if(je.transition=null,T=1,e)return e()}finally{T=r,je.transition=t,b=n,!(b&6)&&yn()}}function $i(){we=Kn.current,I(Kn)}function jn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,x0(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xr();break;case 3:it(),I(he),I(ie),zi();break;case 5:Ei(r);break;case 4:it();break;case 13:I(U);break;case 19:I(U);break;case 10:xi(r.type._context);break;case 22:case 23:$i()}t=t.return}if(q=e,X=e=hn(e.current,null),ne=we=n,G=0,Jt=null,bi=yl=bn=0,fe=Tt=null,zn!==null){for(n=0;n<zn.length;n++)if(t=zn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}zn=null}return e}function ac(e,n){do{var t=X;try{if(yi(),Rr.current=rl,tl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}tl=!1}if(Mn=0,J=K=V=null,Mt=!1,Kt=0,Mi.current=null,t===null||t.return===null){G=1,Jt=n,X=null;break}e:{var o=e,i=t.return,a=t,s=n;if(n=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Da(i);if(y!==null){y.flags&=-257,Aa(y,i,a,o,n),y.mode&1&&Ia(o,c,n),n=y,s=c;var x=n.updateQueue;if(x===null){var k=new Set;k.add(s),n.updateQueue=k}else x.add(s);break e}else{if(!(n&1)){Ia(o,c,n),Fi();break e}s=Error(v(426))}}else if(A&&a.mode&1){var D=Da(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Aa(D,i,a,o,n),wi(at(s,a));break e}}o=s=at(s,a),G!==4&&(G=2),Tt===null?Tt=[o]:Tt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Hu(o,s,n);Ma(o,f);break e;case 1:a=s;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=Wu(o,a,n);Ma(o,w);break e}}o=o.return}while(o!==null)}cc(t)}catch(C){n=C,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function sc(){var e=ll.current;return ll.current=rl,e===null?rl:e}function Fi(){(G===0||G===3||G===2)&&(G=4),q===null||!(bn&268435455)&&!(yl&268435455)||rn(q,ne)}function al(e,n){var t=b;b|=2;var r=sc();(q!==e||ne!==n)&&(Be=null,jn(e,n));do try{W0();break}catch(l){ac(e,l)}while(!0);if(yi(),b=t,ll.current=r,X!==null)throw Error(v(261));return q=null,ne=0,G}function W0(){for(;X!==null;)uc(X)}function Q0(){for(;X!==null&&!wd();)uc(X)}function uc(e){var n=fc(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?cc(e):X=n,Mi.current=null}function cc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=D0(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,X=null;return}}else if(t=I0(t,n,we),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);G===0&&(G=5)}function Cn(e,n,t){var r=T,l=je.transition;try{je.transition=null,T=1,Y0(e,n,t,r)}finally{je.transition=l,T=r}return null}function Y0(e,n,t,r){do nt();while(on!==null);if(b&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(jd(e,o),e===q&&(X=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sr||(Sr=!0,pc(Vr,function(){return nt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=je.transition,je.transition=null;var i=T;T=1;var a=b;b|=4,Mi.current=null,U0(e,t),lc(t,e),p0(zo),Hr=!!Eo,zo=Eo=null,e.current=t,V0(t),vd(),b=a,T=i,je.transition=o}else e.current=t;if(Sr&&(Sr=!1,on=e,il=l),o=e.pendingLanes,o===0&&(fn=null),kd(t.stateNode),ge(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(ol)throw ol=!1,e=Wo,Wo=null,e;return il&1&&e.tag!==0&&nt(),o=e.pendingLanes,o&1?e===Qo?Ot++:(Ot=0,Qo=e):Ot=0,yn(),null}function nt(){if(on!==null){var e=Hs(il),n=je.transition,t=T;try{if(je.transition=null,T=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,il=0,b&6)throw Error(v(331));var l=b;for(b|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:bt(8,m,o)}var g=m.child;if(g!==null)g.return=m,S=g;else for(;S!==null;){m=S;var h=m.sibling,y=m.return;if(nc(m),m===c){S=null;break}if(h!==null){h.return=y,S=h;break}S=y}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,S=p;else e:for(i=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(C){H(a,a.return,C)}if(a===i){S=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,S=w;break e}S=a.return}}if(b=l,yn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{T=t,je.transition=n}}return!1}function qa(e,n,t){n=at(t,n),n=Hu(e,n,1),e=dn(e,n,1),n=se(),e!==null&&(er(e,1,n),ge(e,n))}function H(e,n,t){if(e.tag===3)qa(e,e,t);else for(;n!==null;){if(n.tag===3){qa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=at(t,e),e=Wu(n,e,1),n=dn(n,e,1),e=se(),n!==null&&(er(n,1,e),ge(n,e));break}}n=n.return}}function X0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(G===4||G===3&&(ne&130023424)===ne&&500>Y()-Ti?jn(e,0):bi|=t),ge(e,n)}function dc(e,n){n===0&&(e.mode&1?(n=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):n=1);var t=se();e=Ge(e,n),e!==null&&(er(e,n,t),ge(e,t))}function K0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),dc(e,t)}function G0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),dc(e,t)}var fc;fc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,F0(e,n,t);pe=!!(e.flags&131072)}else pe=!1,A&&n.flags&1048576&&gu(n,Zr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;br(e,n),e=n.pendingProps;var l=rt(n,ie.current);et(n,t),l=ji(null,n,r,e,l,t);var o=_i();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(o=!0,Kr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Si(n),l.updater=wl,n.stateNode=l,l._reactInternals=n,To(n,r,e,t),n=Fo(null,n,r,!0,o,t)):(n.tag=0,A&&o&&mi(n),ae(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(br(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=J0(r),e=Me(r,e),l){case 0:n=$o(null,n,r,e,t);break e;case 1:n=Ba(null,n,r,e,t);break e;case 11:n=Ua(null,n,r,e,t);break e;case 14:n=Va(null,n,r,Me(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Me(r,l),$o(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Me(r,l),Ba(e,n,r,l,t);case 3:e:{if(Ku(n),e===null)throw Error(v(387));r=n.pendingProps,o=n.memoizedState,l=o.element,Su(e,n),el(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=at(Error(v(423)),n),n=Ha(e,n,r,t,l);break e}else if(r!==l){l=at(Error(v(424)),n),n=Ha(e,n,r,t,l);break e}else for(ve=cn(n.stateNode.containerInfo.firstChild),ye=n,A=!0,Te=null,t=xu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),r===l){n=Ze(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Cu(n),e===null&&Ro(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,No(r,l)?i=null:o!==null&&No(r,o)&&(n.flags|=32),Xu(e,n),ae(e,n,i,t),n.child;case 6:return e===null&&Ro(n),null;case 13:return Gu(e,n,t);case 4:return Ci(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ot(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Me(r,l),Ua(e,n,r,l,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,O(Jr,r._currentValue),r._currentValue=i,o!==null)if(Fe(o.value,i)){if(o.children===l.children&&!he.current){n=Ze(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ye(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Mo(o.return,t,n),a.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Mo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,et(n,t),l=_e(l),r=r(l),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,l=Me(r,n.pendingProps),l=Me(r.type,l),Va(e,n,r,l,t);case 15:return Qu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Me(r,l),br(e,n),n.tag=1,me(r)?(e=!0,Kr(n)):e=!1,et(n,t),Bu(n,r,l),To(n,r,l,t),Fo(null,n,r,!0,e,t);case 19:return Zu(e,n,t);case 22:return Yu(e,n,t)}throw Error(v(156,n.tag))};function pc(e,n){return As(e,n)}function Z0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new Z0(e,n,t,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ri)return 11;if(e===li)return 14}return 2}function hn(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dn:return _n(t.children,l,o,n);case ti:i=8,l|=8;break;case ro:return e=ze(12,t,n,l|2),e.elementType=ro,e.lanes=o,e;case lo:return e=ze(13,t,n,l),e.elementType=lo,e.lanes=o,e;case oo:return e=ze(19,t,n,l),e.elementType=oo,e.lanes=o,e;case Cs:return xl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ks:i=10;break e;case Ss:i=9;break e;case ri:i=11;break e;case li:i=14;break e;case en:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=ze(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function _n(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function xl(e,n,t,r){return e=ze(22,e,r,n),e.elementType=Cs,e.lanes=t,e.stateNode={isHidden:!1},e}function Jl(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function ql(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function q0(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Di(e,n,t,r,l,o,i,a,s){return e=new q0(e,n,t,a,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ze(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Si(o),e}function ef(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function hc(e){if(!e)return gn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(me(t))return hu(e,t,n)}return n}function mc(e,n,t,r,l,o,i,a,s){return e=Di(t,r,!0,e,l,o,i,a,s),e.context=hc(null),t=e.current,r=se(),l=pn(t),o=Ye(r,l),o.callback=n??null,dn(t,o,l),e.current.lanes=l,er(e,l,r),ge(e,r),e}function kl(e,n,t,r){var l=n.current,o=se(),i=pn(l);return t=hc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ye(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=dn(l,n,i),e!==null&&($e(e,l,i,o),Lr(e,l,i)),i}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function es(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ai(e,n){es(e,n),(e=e.alternate)&&es(e,n)}function nf(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ui(e){this._internalRoot=e}Sl.prototype.render=Ui.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));kl(e,n,null,null)};Sl.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){kl(null,e,null,null)}),n[Ke]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ys();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&Ks(e)}};function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ns(){}function tf(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=sl(i);o.call(c)}}var i=mc(n,r,e,0,null,!1,!1,"",ns);return e._reactRootContainer=i,e[Ke]=i.current,Ht(e.nodeType===8?e.parentNode:e),Tn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=sl(s);a.call(c)}}var s=Di(e,0,!1,null,null,!1,!1,"",ns);return e._reactRootContainer=s,e[Ke]=s.current,Ht(e.nodeType===8?e.parentNode:e),Tn(function(){kl(n,s,t,r)}),s}function El(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=sl(i);a.call(s)}}kl(n,i,e,l)}else i=tf(t,n,e,l,r);return sl(i)}Ws=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=zt(n.pendingLanes);t!==0&&(ai(n,t|1),ge(n,Y()),!(b&6)&&(st=Y()+500,yn()))}break;case 13:Tn(function(){var r=Ge(e,1);if(r!==null){var l=se();$e(r,e,1,l)}}),Ai(e,1)}};si=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=se();$e(n,e,134217728,t)}Ai(e,134217728)}};Qs=function(e){if(e.tag===13){var n=pn(e),t=Ge(e,n);if(t!==null){var r=se();$e(t,e,n,r)}Ai(e,n)}};Ys=function(){return T};Xs=function(e,n){var t=T;try{return T=e,n()}finally{T=t}};go=function(e,n,t){switch(n){case"input":if(so(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=hl(r);if(!l)throw Error(v(90));zs(r),so(r,l)}}}break;case"textarea":js(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};Ts=Oi;Os=Tn;var rf={usingClientEntryPoint:!1,Events:[tr,Bn,hl,Ms,bs,Oi]},St={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:St.bundleType,version:St.version,rendererPackageName:St.rendererPackageName,rendererConfig:St.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Is(e),e===null?null:e.stateNode},findFiberByHostInstance:St.findFiberByHostInstance||nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{cl=Cr.inject(lf),Ue=Cr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vi(n))throw Error(v(200));return ef(e,n,null,t)};ke.createRoot=function(e,n){if(!Vi(e))throw Error(v(299));var t=!1,r="",l=gc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Di(e,1,!1,null,null,t,!1,r,l),e[Ke]=n.current,Ht(e.nodeType===8?e.parentNode:e),new Ui(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Is(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Tn(e)};ke.hydrate=function(e,n,t){if(!Cl(n))throw Error(v(200));return El(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!Vi(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=gc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=mc(n,null,e,1,t??null,l,!1,o,i),e[Ke]=n.current,Ht(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Sl(n)};ke.render=function(e,n,t){if(!Cl(n))throw Error(v(200));return El(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(v(40));return e._reactRootContainer?(Tn(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=Oi;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Cl(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return El(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc)}catch(e){console.error(e)}}wc(),ws.exports=ke;var of=ws.exports,ts=of;no.createRoot=ts.createRoot,no.hydrateRoot=ts.hydrateRoot;(function(e,n){n===void 0&&(n={});var t=n.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",t==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}})(`/*
! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.visible {
  visibility: visible;
}
.fixed {
  position: fixed;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.start-0 {
  inset-inline-start: 0px;
}
.top-0 {
  top: 0px;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.-m-1 {
  margin: -0.25rem;
}
.-m-1\\.5 {
  margin: -0.375rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.ms-auto {
  margin-inline-start: auto;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-16 {
  height: 4rem;
}
.h-5 {
  height: 1.25rem;
}
.h-9 {
  height: 2.25rem;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.min-h-screen {
  min-height: 100vh;
}
.w-24 {
  width: 6rem;
}
.w-5 {
  width: 1.25rem;
}
.w-80 {
  width: 20rem;
}
.w-9 {
  width: 2.25rem;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.max-w-7xl {
  max-width: 80rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-grow {
  flex-grow: 1;
}
.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.content-start {
  align-content: flex-start;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}
.gap-y-7 {
  row-gap: 1.75rem;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-x-clip {
  overflow-x: clip;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-gray-950\\/50 {
  background-color: rgb(3 7 18 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-1 {
  padding: 0.25rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.font-normal {
  font-weight: 400;
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-950 {
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.opacity-0 {
  opacity: 0;
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-gray-950\\/5 {
  --tw-ring-color: rgb(3 7 18 / 0.05);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\\:opacity-70:disabled {
  opacity: 0.7;
}
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}
@media (min-width: 768px) {

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 1024px) {

  .lg\\:sticky {
    position: sticky;
  }

  .lg\\:z-0 {
    z-index: 0;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:bg-transparent {
    background-color: transparent;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:shadow-none {
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .lg\\:shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .lg\\:ring-0 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .lg\\:transition-none {
    transition-property: none;
  }
}
.rtl\\:-translate-x-0:where([dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rtl\\:translate-x-full:where([dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 1024px) {

  .rtl\\:lg\\:-translate-x-0:where([dir="rtl"], [dir="rtl"] *) {
    --tw-translate-x: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-950 {
    --tw-bg-opacity: 1;
    background-color: rgb(3 7 18 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-950\\/75 {
    background-color: rgb(3 7 18 / 0.75);
  }

  .dark\\:text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\\:ring-white\\/10 {
    --tw-ring-color: rgb(255 255 255 / 0.1);
  }

  .dark\\:hover\\:text-gray-400:hover {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }

  @media (min-width: 1024px) {

    .dark\\:lg\\:bg-transparent {
      background-color: transparent;
    }
  }
}`);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");var af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Ne.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},s)=>Ne.createElement("svg",{ref:s,...af,width:n,height:n,stroke:e,strokeWidth:r?24*Number(t)/Number(n):t,className:vc("lucide",l),...a},[...i.map(([c,m])=>Ne.createElement(c,m)),...Array.isArray(o)?o:[o]])),yc=(e,n)=>{const t=Ne.forwardRef(({className:r,...l},o)=>{return Ne.createElement(sf,{ref:o,iconNode:n,className:vc(`lucide-${i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...l});var i});return t.displayName=`${e}`,t},uf=yc("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]),cf=yc("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]),xc=Ne.createContext(void 0),df=({children:e})=>{const[n,t]=Ne.useState(!1);return F.createElement(xc.Provider,{value:{isCollapsed:n,setIsCollapsed:t}},e)},ff=()=>{const e=Ne.useContext(xc);if(!e)throw new Error("useBaseLayout must be used within a BaseLayoutProvider");return e},pf=({sideMenu:e,brand:n,iconBrand:t,children:r,closeIcon:l,openIcon:o,topbarEnd:i})=>{const[a,s]=Ne.useState(!1),{isCollapsed:c,setIsCollapsed:m}=ff();return F.createElement("section",{className:"min-h-screen antialiased font-normal bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white",style:{overflow:"visible"}},F.createElement("div",{className:"flex flex-row-reverse w-full min-h-screen overflow-x-clip"},F.createElement("div",{style:{display:"flex",opacity:1},className:"flex-col flex-1 w-screen opacity-0 "},F.createElement("div",{className:"sticky top-0 z-20 overflow-x-clip"},F.createElement("nav",{className:"flex items-center h-16 px-4 bg-white shadow-sm gap-x-4 ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 md:px-6 lg:px-8"},F.createElement("div",{className:"lg:hidden"},F.createElement("button",{className:"flex items-center justify-center rounded-lg transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-close-sidebar-btn",title:"Collapse sidebar",type:"button",onClick:()=>{s(!a)}},F.createElement("span",{className:"sr-only"},"Collapse sidebar"),a?l:o)),F.createElement("div",{className:"flex items-center ms-auto gap-x-4"},i))),F.createElement("main",{className:"w-full h-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl"},r)),F.createElement("div",{onClick:()=>s(!1),className:"fixed inset-0 z-30 bg-gray-950/50 transition duration-500 dark:bg-gray-950/75 lg:hidden "+(a?"":"hidden"),style:{transition:"opacity 300ms",display:a?"block":"none"}}),F.createElement("aside",{className:`fixed inset-y-0 start-0 z-30 flex flex-col h-screen content-start bg-white transition-all dark:bg-gray-900 lg:z-0 lg:bg-transparent lg:shadow-none lg:ring-0 lg:transition-none dark:lg:bg-transparent lg:translate-x-0 rtl:lg:-translate-x-0  
                        ${c?"w-24":"w-80"} ${a?" translate-x-0 shadow-xl ring-1 ring-gray-950/5 dark:ring-white/10 rtl:-translate-x-0 lg:sticky":"-translate-x-full rtl:translate-x-full lg:sticky"}`},F.createElement("div",{className:"overflow-x-clip"},F.createElement("header",{className:"flex items-center h-16 px-6 bg-white justify-between ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 lg:shadow-sm group"},F.createElement("div",null,c?t:n),F.createElement("div",{className:"flex justify-end text-gray-500 opacity-0 group-hover:opacity-100"},c?F.createElement("button",{className:"hover:bg-gray-100 rounded bg-transparent p-1",onClick:()=>m(!1)},F.createElement(cf,{className:"w-5 h-5"})):F.createElement("button",{className:"hover:bg-gray-100 rounded bg-transparent p-1",onClick:()=>m(!0)},F.createElement(uf,{className:"w-5 h-5"}))))),F.createElement("nav",{className:"flex flex-col flex-grow px-6 py-8 overflow-x-hidden overflow-y-auto gap-y-7"},e))))},hf=e=>F.createElement(df,null,F.createElement(pf,Object.assign({},e)));var kc={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),mf=Symbol.for("react.portal"),gf=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Sf=Symbol.for("react.suspense"),Cf=Symbol.for("react.memo"),Ef=Symbol.for("react.lazy"),rs=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=rs&&e[rs]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Ec={};function ft(e,n,t){this.props=e,this.context=n,this.refs=Ec,this.updater=t||Sc}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=ft.prototype;function Bi(e,n,t){this.props=e,this.context=n,this.refs=Ec,this.updater=t||Sc}var Hi=Bi.prototype=new zc;Hi.constructor=Bi;Cc(Hi,ft.prototype);Hi.isPureReactComponent=!0;var ls=Array.isArray,Nc=Object.prototype.hasOwnProperty,Wi={current:null},jc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Nc.call(n,r)&&!jc.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:lr,type:e,key:o,ref:i,props:l,_owner:Wi.current}}function Nf(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function jf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var os=/\/+/g;function eo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jf(""+e.key):n.toString(36)}function Fr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case lr:case mf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+eo(i,0):r,ls(l)?(t="",e!=null&&(t=e.replace(os,"$&/")+"/"),Fr(l,n,t,"",function(c){return c})):l!=null&&(Qi(l)&&(l=Nf(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(os,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",ls(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+eo(o,a);i+=Fr(o,n,t,s,l)}else if(s=zf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+eo(o,a++),i+=Fr(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Er(e,n,t){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function _f(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ir={transition:null},Pf={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:Wi};function Pc(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Er,forEach:function(e,n,t){Er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Er(e,function(){n++}),n},toArray:function(e){return Er(e,function(n){return n})||[]},only:function(e){if(!Qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=ft;R.Fragment=gf;R.Profiler=vf;R.PureComponent=Bi;R.StrictMode=wf;R.Suspense=Sf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;R.act=Pc;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Wi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Nc.call(n,s)&&!jc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:l,ref:o,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:xf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yf,_context:e},e.Consumer=e};R.createElement=_c;R.createFactory=function(e){var n=_c.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:kf,render:e}};R.isValidElement=Qi;R.lazy=function(e){return{$$typeof:Ef,_payload:{_status:-1,_result:e},_init:_f}};R.memo=function(e,n){return{$$typeof:Cf,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=n}};R.unstable_act=Pc;R.useCallback=function(e,n){return de.current.useCallback(e,n)};R.useContext=function(e){return de.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return de.current.useDeferredValue(e)};R.useEffect=function(e,n){return de.current.useEffect(e,n)};R.useId=function(){return de.current.useId()};R.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return de.current.useMemo(e,n)};R.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};R.useRef=function(e){return de.current.useRef(e)};R.useState=function(e){return de.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return de.current.useTransition()};R.version="18.3.1";kc.exports=R;var Pn=kc.exports;(function(e,n){n===void 0&&(n={});var t=n.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",t==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}})(`/*
! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.visible {
  visibility: visible;
}
.fixed {
  position: fixed;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.start-0 {
  inset-inline-start: 0px;
}
.top-0 {
  top: 0px;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.-m-1 {
  margin: -0.25rem;
}
.-m-1\\.5 {
  margin: -0.375rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.ms-auto {
  margin-inline-start: auto;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-16 {
  height: 4rem;
}
.h-5 {
  height: 1.25rem;
}
.h-9 {
  height: 2.25rem;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.min-h-screen {
  min-height: 100vh;
}
.w-24 {
  width: 6rem;
}
.w-5 {
  width: 1.25rem;
}
.w-80 {
  width: 20rem;
}
.w-9 {
  width: 2.25rem;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.max-w-7xl {
  max-width: 80rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-grow {
  flex-grow: 1;
}
.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.content-start {
  align-content: flex-start;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}
.gap-y-7 {
  row-gap: 1.75rem;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.overflow-x-clip {
  overflow-x: clip;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-gray-950\\/50 {
  background-color: rgb(3 7 18 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-1 {
  padding: 0.25rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.font-normal {
  font-weight: 400;
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-950 {
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.opacity-0 {
  opacity: 0;
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-gray-950\\/5 {
  --tw-ring-color: rgb(3 7 18 / 0.05);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\\:opacity-70:disabled {
  opacity: 0.7;
}
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}
@media (min-width: 768px) {

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 1024px) {

  .lg\\:sticky {
    position: sticky;
  }

  .lg\\:z-0 {
    z-index: 0;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:bg-transparent {
    background-color: transparent;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:shadow-none {
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .lg\\:shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .lg\\:ring-0 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .lg\\:transition-none {
    transition-property: none;
  }
}
.rtl\\:-translate-x-0:where([dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rtl\\:translate-x-full:where([dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 1024px) {

  .rtl\\:lg\\:-translate-x-0:where([dir="rtl"], [dir="rtl"] *) {
    --tw-translate-x: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-950 {
    --tw-bg-opacity: 1;
    background-color: rgb(3 7 18 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-950\\/75 {
    background-color: rgb(3 7 18 / 0.75);
  }

  .dark\\:text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\\:ring-white\\/10 {
    --tw-ring-color: rgb(255 255 255 / 0.1);
  }

  .dark\\:hover\\:text-gray-400:hover {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }

  @media (min-width: 1024px) {

    .dark\\:lg\\:bg-transparent {
      background-color: transparent;
    }
  }
}`);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");var Lf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=Pn.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...a},s)=>Pn.createElement("svg",{ref:s,...Lf,width:n,height:n,stroke:e,strokeWidth:r?24*Number(t)/Number(n):t,className:Lc("lucide",l),...a},[...i.map(([c,m])=>Pn.createElement(c,m)),...Array.isArray(o)?o:[o]])),Rc=(e,n)=>{const t=Pn.forwardRef(({className:r,...l},o)=>{return Pn.createElement(Rf,{ref:o,iconNode:n,className:Lc(`lucide-${i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...l});var i});return t.displayName=`${e}`,t};Rc("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);Rc("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);const Mf=Pn.createContext(void 0),bf=()=>{const e=Pn.useContext(Mf);if(!e)throw new Error("useBaseLayout must be used within a BaseLayoutProvider");return e},Tf=()=>{const{isCollapsed:e}=bf();return console.log(e),d.jsx("div",{children:"side-menu"})};function Of(){return d.jsxs(hf,{brand:d.jsx("div",{children:"brand"}),iconBrand:d.jsx("div",{children:"B"}),openIcon:d.jsx("div",{children:"Open"}),closeIcon:d.jsx("div",{children:"close"}),topbarEnd:d.jsx("div",{children:"topbar end"}),sideMenu:d.jsx(Tf,{}),children:[d.jsx("section",{className:"bg-white dark:bg-gray-900",children:d.jsxs("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[d.jsxs("div",{className:"max-w-screen-md mb-8 lg:mb-16",children:[d.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",children:"Designed for business teams like yours"}),d.jsx("p",{className:"text-gray-500 sm:text-xl dark:text-gray-400",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."})]}),d.jsxs("div",{className:"space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Marketing"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Legal"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),d.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Business Automation"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Finance"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Enterprise Design"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Operations"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."})]})]})]})}),d.jsx("section",{className:"bg-white dark:bg-gray-900",children:d.jsxs("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[d.jsxs("div",{className:"max-w-screen-md mb-8 lg:mb-16",children:[d.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",children:"Designed for business teams like yours"}),d.jsx("p",{className:"text-gray-500 sm:text-xl dark:text-gray-400",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."})]}),d.jsxs("div",{className:"space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Marketing"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Legal"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),d.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Business Automation"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Finance"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Enterprise Design"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Operations"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."})]})]})]})}),d.jsx("section",{className:"bg-white dark:bg-gray-900",children:d.jsxs("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[d.jsxs("div",{className:"max-w-screen-md mb-8 lg:mb-16",children:[d.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",children:"Designed for business teams like yours"}),d.jsx("p",{className:"text-gray-500 sm:text-xl dark:text-gray-400",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."})]}),d.jsxs("div",{className:"space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Marketing"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Legal"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),d.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Business Automation"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Finance"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Enterprise Design"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Operations"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."})]})]})]})}),d.jsx("section",{className:"bg-white dark:bg-gray-900",children:d.jsxs("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[d.jsxs("div",{className:"max-w-screen-md mb-8 lg:mb-16",children:[d.jsx("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",children:"Designed for business teams like yours"}),d.jsx("p",{className:"text-gray-500 sm:text-xl dark:text-gray-400",children:"Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."})]}),d.jsxs("div",{className:"space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Marketing"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Legal"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),d.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Business Automation"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsxs("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Finance"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Audit-proof software built for critical financial operations like month-end close and quarterly budgeting."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Enterprise Design"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration."})]}),d.jsxs("div",{children:[d.jsx("div",{className:"flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900",children:d.jsx("svg",{className:"w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),d.jsx("h3",{className:"mb-2 text-xl font-bold dark:text-white",children:"Operations"}),d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual."})]})]})]})})]})}no.createRoot(document.getElementById("root")).render(d.jsx(F.StrictMode,{children:d.jsx(Of,{})}));
