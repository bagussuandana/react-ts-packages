(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yu={exports:{}},nl={},Ku={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.element"),ac=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),gc=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),Ii=Symbol.iterator;function wc(e){return e===null||typeof e!="object"?null:(e=Ii&&e[Ii]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Zu={};function it(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=it.prototype;function Bo(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}var Vo=Bo.prototype=new Ju;Vo.constructor=Bo;Gu(Vo,it.prototype);Vo.isPureReactComponent=!0;var Di=Array.isArray,qu=Object.prototype.hasOwnProperty,Wo={current:null},bu={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)qu.call(n,r)&&!bu.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Gt,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function kc(e,n){return{$$typeof:Gt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ho(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt}function xc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ui=/\/+/g;function xl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?xc(""+e.key):n.toString(36)}function wr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Gt:case ac:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+xl(i,0):r,Di(l)?(t="",e!=null&&(t=e.replace(Ui,"$&/")+"/"),wr(l,n,t,"",function(c){return c})):l!=null&&(Ho(l)&&(l=kc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ui,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Di(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+xl(o,u);i+=wr(o,n,t,s,l)}else if(s=wc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+xl(o,u++),i+=wr(o,n,t,s,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,n,t){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Sc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},kr={transition:null},Mc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Wo};function ns(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!Ho(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=it;P.Fragment=cc;P.Profiler=dc;P.PureComponent=Bo;P.StrictMode=fc;P.Suspense=vc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mc;P.act=ns;P.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Wo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)qu.call(n,s)&&!bu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&u!==void 0?u[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Gt,type:e.type,key:l,ref:o,props:r,_owner:i}};P.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pc,_context:e},e.Consumer=e};P.createElement=es;P.createFactory=function(e){var n=es.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:mc,render:e}};P.isValidElement=Ho;P.lazy=function(e){return{$$typeof:yc,_payload:{_status:-1,_result:e},_init:Sc}};P.memo=function(e,n){return{$$typeof:gc,type:e,compare:n===void 0?null:n}};P.startTransition=function(e){var n=kr.transition;kr.transition={};try{e()}finally{kr.transition=n}};P.unstable_act=ns;P.useCallback=function(e,n){return se.current.useCallback(e,n)};P.useContext=function(e){return se.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return se.current.useDeferredValue(e)};P.useEffect=function(e,n){return se.current.useEffect(e,n)};P.useId=function(){return se.current.useId()};P.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};P.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};P.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};P.useMemo=function(e,n){return se.current.useMemo(e,n)};P.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};P.useRef=function(e){return se.current.useRef(e)};P.useState=function(e){return se.current.useState(e)};P.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};P.useTransition=function(){return se.current.useTransition()};P.version="18.3.1";Ku.exports=P;var ge=Ku.exports;const F=sc(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=ge,Cc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),zc=Object.prototype.hasOwnProperty,Nc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)zc.call(n,r)&&!Pc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Cc,type:e,key:o,ref:i,props:l,_owner:Nc.current}}nl.Fragment=_c;nl.jsx=ts;nl.jsxs=ts;Yu.exports=nl;var b=Yu.exports,Kl={},rs={exports:{}},ke={},ls={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,z){var N=M.length;M.push(z);e:for(;0<N;){var H=N-1>>>1,G=M[H];if(0<l(G,z))M[H]=z,M[N]=G,N=H;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],N=M.pop();if(N!==z){M[0]=N;e:for(var H=0,G=M.length,er=G>>>1;H<er;){var yn=2*(H+1)-1,kl=M[yn],wn=yn+1,nr=M[wn];if(0>l(kl,N))wn<G&&0>l(nr,kl)?(M[H]=nr,M[wn]=N,H=wn):(M[H]=kl,M[yn]=N,H=yn);else if(wn<G&&0>l(nr,N))M[H]=nr,M[wn]=N,H=wn;else break e}}return z}function l(M,z){var N=M.sortIndex-z.sortIndex;return N!==0?N:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],c=[],m=1,h=null,p=3,y=!1,w=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(M){for(var z=t(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=M)r(c),z.sortIndex=z.expirationTime,n(s,z);else break;z=t(c)}}function v(M){if(k=!1,d(M),!w)if(t(s)!==null)w=!0,yl(S);else{var z=t(c);z!==null&&wl(v,z.startTime-M)}}function S(M,z){w=!1,k&&(k=!1,f(_),_=-1),y=!0;var N=p;try{for(d(z),h=t(s);h!==null&&(!(h.expirationTime>z)||M&&!Ne());){var H=h.callback;if(typeof H=="function"){h.callback=null,p=h.priorityLevel;var G=H(h.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?h.callback=G:h===t(s)&&r(s),d(z)}else r(s);h=t(s)}if(h!==null)var er=!0;else{var yn=t(c);yn!==null&&wl(v,yn.startTime-z),er=!1}return er}finally{h=null,p=N,y=!1}}var E=!1,C=null,_=-1,W=5,L=-1;function Ne(){return!(e.unstable_now()-L<W)}function at(){if(C!==null){var M=e.unstable_now();L=M;var z=!0;try{z=C(!0,M)}finally{z?ct():(E=!1,C=null)}}else E=!1}var ct;if(typeof a=="function")ct=function(){a(at)};else if(typeof MessageChannel<"u"){var Fi=new MessageChannel,uc=Fi.port2;Fi.port1.onmessage=at,ct=function(){uc.postMessage(null)}}else ct=function(){D(at,0)};function yl(M){C=M,E||(E=!0,ct())}function wl(M,z){_=D(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,yl(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var N=p;p=z;try{return M()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var N=p;p=M;try{return z()}finally{p=N}},e.unstable_scheduleCallback=function(M,z,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,M){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=N+G,M={id:m++,callback:z,priorityLevel:M,startTime:N,expirationTime:G,sortIndex:-1},N>H?(M.sortIndex=N,n(c,M),t(s)===null&&M===t(c)&&(k?(f(_),_=-1):k=!0,wl(v,N-H))):(M.sortIndex=G,n(s,M),w||y||(w=!0,yl(S))),M},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(M){var z=p;return function(){var N=p;p=z;try{return M.apply(this,arguments)}finally{p=N}}}})(os);ls.exports=os;var Lc=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=ge,we=Lc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,Rt={};function Rn(e,n){bn(e,n),bn(e+"Capture",n)}function bn(e,n){for(Rt[e]=n,e=0;e<n.length;e++)is.add(n[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$i={},Ai={};function Oc(e){return Xl.call(Ai,e)?!0:Xl.call($i,e)?!1:Rc.test(e)?Ai[e]=!0:($i[e]=!0,!1)}function jc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,n,t,r){if(n===null||typeof n>"u"||jc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qo,Yo);ne[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qo,Yo);ne[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qo,Yo);ne[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,n,t,r){var l=ne.hasOwnProperty(n)?ne[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Fc(n,t,l,r)&&(t=null),r||l===null?Oc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ze=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function wt(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var Ml=!1;function El(e,n){if(!e||Ml)return"";Ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Ml=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?wt(e):""}function Ic(e){switch(e.tag){case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Fn:return"Portal";case Gl:return"Profiler";case Xo:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Go:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return n=e.displayName||null,n!==null?n:ql(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return ql(e(n))}catch{}}return null}function Dc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(n);case 8:return n===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uc(e){var n=cs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lr(e){e._valueTracker||(e._valueTracker=Uc(e))}function fs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ds(e,n){n=n.checked,n!=null&&Ko(e,"checked",n,!1)}function eo(e,n){ds(e,n);var t=pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?no(e,n.type,t):n.hasOwnProperty("defaultValue")&&no(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function no(e,n,t){(n!=="number"||Tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var kt=Array.isArray;function Kn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function to(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(kt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function ps(e,n){var t=pn(n.value),r=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){$c.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function vs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function gs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=vs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Ac=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,n){if(n){if(Ac[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,Xn=null,Gn=null;function Yi(e){if(e=qt(e)){if(typeof uo!="function")throw Error(g(280));var n=e.stateNode;n&&(n=il(n),uo(e.stateNode,e.type,n))}}function ys(e){Xn?Gn?Gn.push(e):Gn=[e]:Xn=e}function ws(){if(Xn){var e=Xn,n=Gn;if(Gn=Xn=null,Yi(e),n)for(e=0;e<n.length;e++)Yi(n[e])}}function ks(e,n){return e(n)}function xs(){}var Cl=!1;function Ss(e,n,t){if(Cl)return e(n,t);Cl=!0;try{return ks(e,n,t)}finally{Cl=!1,(Xn!==null||Gn!==null)&&(xs(),ws())}}function jt(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var so=!1;if(Ye)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){so=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{so=!1}function Bc(e,n,t,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var Et=!1,Rr=null,Or=!1,ao=null,Vc={onError:function(e){Et=!0,Rr=e}};function Wc(e,n,t,r,l,o,i,u,s){Et=!1,Rr=null,Bc.apply(Vc,arguments)}function Hc(e,n,t,r,l,o,i,u,s){if(Wc.apply(this,arguments),Et){if(Et){var c=Rr;Et=!1,Rr=null}else throw Error(g(198));Or||(Or=!0,ao=c)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ms(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ki(e){if(On(e)!==e)throw Error(g(188))}function Qc(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Ki(l),e;if(o===r)return Ki(l),n;o=o.sibling}throw Error(g(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===t){i=!0,t=l,r=o;break}if(u===r){i=!0,r=l,t=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===t){i=!0,t=o,r=l;break}if(u===r){i=!0,r=o,t=l;break}u=u.sibling}if(!i)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Es(e){return e=Qc(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Cs(e);if(n!==null)return n;e=e.sibling}return null}var _s=we.unstable_scheduleCallback,Xi=we.unstable_cancelCallback,Yc=we.unstable_shouldYield,Kc=we.unstable_requestPaint,Q=we.unstable_now,Xc=we.unstable_getCurrentPriorityLevel,qo=we.unstable_ImmediatePriority,zs=we.unstable_UserBlockingPriority,jr=we.unstable_NormalPriority,Gc=we.unstable_LowPriority,Ns=we.unstable_IdlePriority,tl=null,$e=null;function Zc(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:bc,Jc=Math.log,qc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(Jc(e)/qc|0)|0}var ir=64,ur=4194304;function xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~l;u!==0?r=xt(u):(o&=i,o!==0&&(r=xt(o)))}else i=t&~l,i!==0?r=xt(i):o!==0&&(r=xt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),l=1<<t,r|=e[t],n&=~l;return r}function ef(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Oe(o),u=1<<i,s=l[i];s===-1?(!(u&t)||u&r)&&(l[i]=ef(u,n)):s<=n&&(e.expiredLanes|=u),o&=~u}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function _l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function tf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Oe(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function bo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var R=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ts,ei,Rs,Os,js,fo=!1,sr=[],ln=null,on=null,un=null,Ft=new Map,It=new Map,en=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Ft.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(n.pointerId)}}function pt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=qt(n),n!==null&&ei(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function lf(e,n,t,r,l){switch(n){case"focusin":return ln=pt(ln,e,n,t,r,l),!0;case"dragenter":return on=pt(on,e,n,t,r,l),!0;case"mouseover":return un=pt(un,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Ft.set(o,pt(Ft.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,It.set(o,pt(It.get(o)||null,e,n,t,r,l)),!0}return!1}function Fs(e){var n=Sn(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=Ms(t),n!==null){e.blockedOn=n,js(e.priority,function(){Rs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=po(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);io=r,t.target.dispatchEvent(r),io=null}else return n=qt(t),n!==null&&ei(n),e.blockedOn=t,!1;n.shift()}return!0}function Zi(e,n,t){xr(e)&&t.delete(n)}function of(){fo=!1,ln!==null&&xr(ln)&&(ln=null),on!==null&&xr(on)&&(on=null),un!==null&&xr(un)&&(un=null),Ft.forEach(Zi),It.forEach(Zi)}function ht(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,of)))}function Dt(e){function n(l){return ht(l,e)}if(0<sr.length){ht(sr[0],e);for(var t=1;t<sr.length;t++){var r=sr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&ht(ln,e),on!==null&&ht(on,e),un!==null&&ht(un,e),Ft.forEach(n),It.forEach(n),t=0;t<en.length;t++)r=en[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)Fs(t),t.blockedOn===null&&en.shift()}var Zn=Ze.ReactCurrentBatchConfig,Ir=!0;function uf(e,n,t,r){var l=R,o=Zn.transition;Zn.transition=null;try{R=1,ni(e,n,t,r)}finally{R=l,Zn.transition=o}}function sf(e,n,t,r){var l=R,o=Zn.transition;Zn.transition=null;try{R=4,ni(e,n,t,r)}finally{R=l,Zn.transition=o}}function ni(e,n,t,r){if(Ir){var l=po(e,n,t,r);if(l===null)Il(e,n,r,Dr,t),Gi(e,r);else if(lf(l,e,n,t,r))r.stopPropagation();else if(Gi(e,r),n&4&&-1<rf.indexOf(e)){for(;l!==null;){var o=qt(l);if(o!==null&&Ts(o),o=po(e,n,t,r),o===null&&Il(e,n,r,Dr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Il(e,n,r,null,t)}}var Dr=null;function po(e,n,t,r){if(Dr=null,e=Jo(r),e=Sn(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ms(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Dr=e,null}function Is(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case qo:return 1;case zs:return 4;case jr:case Gc:return 16;case Ns:return 536870912;default:return 16}default:return 16}}var tn=null,ti=null,Sr=null;function Ds(){if(Sr)return Sr;var e,n=ti,t=n.length,r,l="value"in tn?tn.value:tn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Ji(){return!1}function xe(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:Ji,this.isPropagationStopped=Ji,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=xe(ut),Jt=B({},ut,{view:0,detail:0}),af=xe(Jt),zl,Nl,mt,rl=B({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(zl=e.screenX-mt.screenX,Nl=e.screenY-mt.screenY):Nl=zl=0,mt=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),qi=xe(rl),cf=B({},rl,{dataTransfer:0}),ff=xe(cf),df=B({},Jt,{relatedTarget:0}),Pl=xe(df),pf=B({},ut,{animationName:0,elapsedTime:0,pseudoElement:0}),hf=xe(pf),mf=B({},ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=xe(mf),gf=B({},ut,{data:0}),bi=xe(gf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=kf[e])?!!n[e]:!1}function li(){return xf}var Sf=B({},Jt,{key:function(e){if(e.key){var n=yf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mf=xe(Sf),Ef=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=xe(Ef),Cf=B({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),_f=xe(Cf),zf=B({},ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nf=xe(zf),Pf=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=xe(Pf),Tf=[9,13,27,32],oi=Ye&&"CompositionEvent"in window,Ct=null;Ye&&"documentMode"in document&&(Ct=document.documentMode);var Rf=Ye&&"TextEvent"in window&&!Ct,Us=Ye&&(!oi||Ct&&8<Ct&&11>=Ct),nu=" ",tu=!1;function $s(e,n){switch(e){case"keyup":return Tf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Of(e,n){switch(e){case"compositionend":return As(n);case"keypress":return n.which!==32?null:(tu=!0,nu);case"textInput":return e=n.data,e===nu&&tu?null:e;default:return null}}function jf(e,n){if(Dn)return e==="compositionend"||!oi&&$s(e,n)?(e=Ds(),Sr=ti=tn=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Us&&n.locale!=="ko"?null:n.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ff[e.type]:n==="textarea"}function Bs(e,n,t,r){ys(r),n=Ur(n,"onChange"),0<n.length&&(t=new ri("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var _t=null,Ut=null;function If(e){qs(e,0)}function ll(e){var n=An(e);if(fs(n))return e}function Df(e,n){if(e==="change")return n}var Vs=!1;if(Ye){var Ll;if(Ye){var Tl="oninput"in document;if(!Tl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Tl=typeof lu.oninput=="function"}Ll=Tl}else Ll=!1;Vs=Ll&&(!document.documentMode||9<document.documentMode)}function ou(){_t&&(_t.detachEvent("onpropertychange",Ws),Ut=_t=null)}function Ws(e){if(e.propertyName==="value"&&ll(Ut)){var n=[];Bs(n,Ut,e,Jo(e)),Ss(If,n)}}function Uf(e,n,t){e==="focusin"?(ou(),_t=n,Ut=t,_t.attachEvent("onpropertychange",Ws)):e==="focusout"&&ou()}function $f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ut)}function Af(e,n){if(e==="click")return ll(n)}function Bf(e,n){if(e==="input"||e==="change")return ll(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Vf;function $t(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Xl.call(n,l)||!Fe(e[l],n[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,n){var t=iu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=iu(t)}}function Hs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qs(){for(var e=window,n=Tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tr(e.document)}return n}function ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Wf(e){var n=Qs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hs(t.ownerDocument.documentElement,t)){if(r!==null&&ii(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=uu(t,o);var i=uu(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hf=Ye&&"documentMode"in document&&11>=document.documentMode,Un=null,ho=null,zt=null,mo=!1;function su(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mo||Un==null||Un!==Tr(r)||(r=Un,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zt&&$t(zt,r)||(zt=r,r=Ur(ho,"onSelect"),0<r.length&&(n=new ri("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var $n={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Rl={},Ys={};Ye&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ol(e){if(Rl[e])return Rl[e];if(!$n[e])return e;var n=$n[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ys)return Rl[e]=n[t];return e}var Ks=ol("animationend"),Xs=ol("animationiteration"),Gs=ol("animationstart"),Zs=ol("transitionend"),Js=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Js.set(e,n),Rn(n,[e])}for(var Ol=0;Ol<au.length;Ol++){var jl=au[Ol],Qf=jl.toLowerCase(),Yf=jl[0].toUpperCase()+jl.slice(1);mn(Qf,"on"+Yf)}mn(Ks,"onAnimationEnd");mn(Xs,"onAnimationIteration");mn(Gs,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Zs,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function cu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hc(r,n,void 0,e),e.currentTarget=null}function qs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;cu(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;cu(l,u,c),o=s}}}if(Or)throw e=ao,Or=!1,ao=null,e}function j(e,n){var t=n[ko];t===void 0&&(t=n[ko]=new Set);var r=e+"__bubble";t.has(r)||(bs(n,e,2,!1),t.add(r))}function Fl(e,n,t){var r=0;n&&(r|=4),bs(t,e,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function At(e){if(!e[fr]){e[fr]=!0,is.forEach(function(t){t!=="selectionchange"&&(Kf.has(t)||Fl(t,!1,e),Fl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,Fl("selectionchange",!1,n))}}function bs(e,n,t,r){switch(Is(n)){case 1:var l=uf;break;case 4:l=sf;break;default:l=ni}t=l.bind(null,n,t,e),l=void 0,!so||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Il(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Sn(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Ss(function(){var c=o,m=Jo(t),h=[];e:{var p=Js.get(e);if(p!==void 0){var y=ri,w=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":y=Mf;break;case"focusin":w="focus",y=Pl;break;case"focusout":w="blur",y=Pl;break;case"beforeblur":case"afterblur":y=Pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_f;break;case Ks:case Xs:case Gs:y=hf;break;case Zs:y=Nf;break;case"scroll":y=af;break;case"wheel":y=Lf;break;case"copy":case"cut":case"paste":y=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu}var k=(n&4)!==0,D=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var a=c,d;a!==null;){d=a;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=jt(a,f),v!=null&&k.push(Bt(a,v,d)))),D)break;a=a.return}0<k.length&&(p=new y(p,w,null,t,m),h.push({event:p,listeners:k}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==io&&(w=t.relatedTarget||t.fromElement)&&(Sn(w)||w[Ke]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=c,w=w?Sn(w):null,w!==null&&(D=On(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=qi,v="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=eu,v="onPointerLeave",f="onPointerEnter",a="pointer"),D=y==null?p:An(y),d=w==null?p:An(w),p=new k(v,a+"leave",y,t,m),p.target=D,p.relatedTarget=d,v=null,Sn(m)===c&&(k=new k(f,a+"enter",w,t,m),k.target=d,k.relatedTarget=D,v=k),D=v,y&&w)n:{for(k=y,f=w,a=0,d=k;d;d=jn(d))a++;for(d=0,v=f;v;v=jn(v))d++;for(;0<a-d;)k=jn(k),a--;for(;0<d-a;)f=jn(f),d--;for(;a--;){if(k===f||f!==null&&k===f.alternate)break n;k=jn(k),f=jn(f)}k=null}else k=null;y!==null&&fu(h,p,y,k,!1),w!==null&&D!==null&&fu(h,D,w,k,!0)}}e:{if(p=c?An(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Df;else if(ru(p))if(Vs)S=Bf;else{S=$f;var E=Uf}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Af);if(S&&(S=S(e,c))){Bs(h,S,t,m);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&no(p,"number",p.value)}switch(E=c?An(c):window,e){case"focusin":(ru(E)||E.contentEditable==="true")&&(Un=E,ho=c,zt=null);break;case"focusout":zt=ho=Un=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,su(h,t,m);break;case"selectionchange":if(Hf)break;case"keydown":case"keyup":su(h,t,m)}var C;if(oi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Dn?$s(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Us&&t.locale!=="ko"&&(Dn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Dn&&(C=Ds()):(tn=m,ti="value"in tn?tn.value:tn.textContent,Dn=!0)),E=Ur(c,_),0<E.length&&(_=new bi(_,e,null,t,m),h.push({event:_,listeners:E}),C?_.data=C:(C=As(t),C!==null&&(_.data=C)))),(C=Rf?Of(e,t):jf(e,t))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(m=new bi("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:c}),m.data=C))}qs(h,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ur(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=jt(e,t),o!=null&&r.unshift(Bt(e,o,l)),o=jt(e,n),o!=null&&r.push(Bt(e,o,l))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var u=t,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=jt(t,o),s!=null&&i.unshift(Bt(t,s,u))):l||(s=jt(t,o),s!=null&&i.push(Bt(t,s,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Xf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Gf,"")}function dr(e,n,t){if(n=du(n),du(e)!==n&&t)throw Error(g(425))}function $r(){}var vo=null,go=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(qf)}:wo;function qf(e){setTimeout(function(){throw e})}function Dl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Dt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Dt(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),Ue="__reactFiber$"+st,Vt="__reactProps$"+st,Ke="__reactContainer$"+st,ko="__reactEvents$"+st,bf="__reactListeners$"+st,ed="__reactHandles$"+st;function Sn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=hu(e);e!==null;){if(t=e[Ue])return t;e=hu(e)}return n}e=t,t=e.parentNode}return null}function qt(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function il(e){return e[Vt]||null}var xo=[],Bn=-1;function vn(e){return{current:e}}function I(e){0>Bn||(e.current=xo[Bn],xo[Bn]=null,Bn--)}function O(e,n){Bn++,xo[Bn]=e.current,e.current=n}var hn={},oe=vn(hn),de=vn(!1),zn=hn;function et(e,n){var t=e.type.contextTypes;if(!t)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Ar(){I(de),I(oe)}function mu(e,n,t){if(oe.current!==hn)throw Error(g(168));O(oe,n),O(de,t)}function ea(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(g(108,Dc(e)||"Unknown",l));return B({},t,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,zn=oe.current,O(oe,e),O(de,de.current),!0}function vu(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=ea(e,n,zn),r.__reactInternalMemoizedMergedChildContext=e,I(de),I(oe),O(oe,e)):I(de),O(de,t)}var Ve=null,ul=!1,Ul=!1;function na(e){Ve===null?Ve=[e]:Ve.push(e)}function nd(e){ul=!0,na(e)}function gn(){if(!Ul&&Ve!==null){Ul=!0;var e=0,n=R;try{var t=Ve;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,ul=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),_s(qo,gn),l}finally{R=n,Ul=!1}}return null}var Vn=[],Wn=0,Vr=null,Wr=0,Se=[],Me=0,Nn=null,We=1,He="";function kn(e,n){Vn[Wn++]=Wr,Vn[Wn++]=Vr,Vr=e,Wr=n}function ta(e,n,t){Se[Me++]=We,Se[Me++]=He,Se[Me++]=Nn,Nn=e;var r=We;e=He;var l=32-Oe(r)-1;r&=~(1<<l),t+=1;var o=32-Oe(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-Oe(n)+l|t<<l|r,He=o+e}else We=1<<o|t<<l|r,He=e}function ui(e){e.return!==null&&(kn(e,1),ta(e,1,0))}function si(e){for(;e===Vr;)Vr=Vn[--Wn],Vn[Wn]=null,Wr=Vn[--Wn],Vn[Wn]=null;for(;e===Nn;)Nn=Se[--Me],Se[Me]=null,He=Se[--Me],Se[Me]=null,We=Se[--Me],Se[Me]=null}var ye=null,ve=null,U=!1,Re=null;function ra(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function gu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Nn!==null?{id:We,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mo(e){if(U){var n=ve;if(n){var t=n;if(!gu(e,n)){if(So(e))throw Error(g(418));n=sn(t.nextSibling);var r=ye;n&&gu(e,n)?ra(r,t):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(So(e))throw Error(g(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!U)return yu(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=ve)){if(So(e))throw la(),Error(g(418));for(;n;)ra(e,n),n=sn(n.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?sn(e.stateNode.nextSibling):null;return!0}function la(){for(var e=ve;e;)e=sn(e.nextSibling)}function nt(){ve=ye=null,U=!1}function ai(e){Re===null?Re=[e]:Re.push(e)}var td=Ze.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function hr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wu(e){var n=e._init;return n(e._payload)}function oa(e){function n(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function t(f,a){if(!e)return null;for(;a!==null;)n(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=dn(f,a),f.index=0,f.sibling=null,f}function o(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,a,d,v){return a===null||a.tag!==6?(a=Ql(d,f.mode,v),a.return=f,a):(a=l(a,d),a.return=f,a)}function s(f,a,d,v){var S=d.type;return S===In?m(f,a,d.props.children,v,d.key):a!==null&&(a.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&wu(S)===a.type)?(v=l(a,d.props),v.ref=vt(f,a,d),v.return=f,v):(v=Lr(d.type,d.key,d.props,null,f.mode,v),v.ref=vt(f,a,d),v.return=f,v)}function c(f,a,d,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Yl(d,f.mode,v),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function m(f,a,d,v,S){return a===null||a.tag!==7?(a=_n(d,f.mode,v,S),a.return=f,a):(a=l(a,d),a.return=f,a)}function h(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ql(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return d=Lr(a.type,a.key,a.props,null,f.mode,d),d.ref=vt(f,null,a),d.return=f,d;case Fn:return a=Yl(a,f.mode,d),a.return=f,a;case qe:var v=a._init;return h(f,v(a._payload),d)}if(kt(a)||ft(a))return a=_n(a,f.mode,d,null),a.return=f,a;hr(f,a)}return null}function p(f,a,d,v){var S=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:u(f,a,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===S?s(f,a,d,v):null;case Fn:return d.key===S?c(f,a,d,v):null;case qe:return S=d._init,p(f,a,S(d._payload),v)}if(kt(d)||ft(d))return S!==null?null:m(f,a,d,v,null);hr(f,d)}return null}function y(f,a,d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(a,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return f=f.get(v.key===null?d:v.key)||null,s(a,f,v,S);case Fn:return f=f.get(v.key===null?d:v.key)||null,c(a,f,v,S);case qe:var E=v._init;return y(f,a,d,E(v._payload),S)}if(kt(v)||ft(v))return f=f.get(d)||null,m(a,f,v,S,null);hr(a,v)}return null}function w(f,a,d,v){for(var S=null,E=null,C=a,_=a=0,W=null;C!==null&&_<d.length;_++){C.index>_?(W=C,C=null):W=C.sibling;var L=p(f,C,d[_],v);if(L===null){C===null&&(C=W);break}e&&C&&L.alternate===null&&n(f,C),a=o(L,a,_),E===null?S=L:E.sibling=L,E=L,C=W}if(_===d.length)return t(f,C),U&&kn(f,_),S;if(C===null){for(;_<d.length;_++)C=h(f,d[_],v),C!==null&&(a=o(C,a,_),E===null?S=C:E.sibling=C,E=C);return U&&kn(f,_),S}for(C=r(f,C);_<d.length;_++)W=y(C,f,_,d[_],v),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?_:W.key),a=o(W,a,_),E===null?S=W:E.sibling=W,E=W);return e&&C.forEach(function(Ne){return n(f,Ne)}),U&&kn(f,_),S}function k(f,a,d,v){var S=ft(d);if(typeof S!="function")throw Error(g(150));if(d=S.call(d),d==null)throw Error(g(151));for(var E=S=null,C=a,_=a=0,W=null,L=d.next();C!==null&&!L.done;_++,L=d.next()){C.index>_?(W=C,C=null):W=C.sibling;var Ne=p(f,C,L.value,v);if(Ne===null){C===null&&(C=W);break}e&&C&&Ne.alternate===null&&n(f,C),a=o(Ne,a,_),E===null?S=Ne:E.sibling=Ne,E=Ne,C=W}if(L.done)return t(f,C),U&&kn(f,_),S;if(C===null){for(;!L.done;_++,L=d.next())L=h(f,L.value,v),L!==null&&(a=o(L,a,_),E===null?S=L:E.sibling=L,E=L);return U&&kn(f,_),S}for(C=r(f,C);!L.done;_++,L=d.next())L=y(C,f,_,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?_:L.key),a=o(L,a,_),E===null?S=L:E.sibling=L,E=L);return e&&C.forEach(function(at){return n(f,at)}),U&&kn(f,_),S}function D(f,a,d,v){if(typeof d=="object"&&d!==null&&d.type===In&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var S=d.key,E=a;E!==null;){if(E.key===S){if(S=d.type,S===In){if(E.tag===7){t(f,E.sibling),a=l(E,d.props.children),a.return=f,f=a;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&wu(S)===E.type){t(f,E.sibling),a=l(E,d.props),a.ref=vt(f,E,d),a.return=f,f=a;break e}t(f,E);break}else n(f,E);E=E.sibling}d.type===In?(a=_n(d.props.children,f.mode,v,d.key),a.return=f,f=a):(v=Lr(d.type,d.key,d.props,null,f.mode,v),v.ref=vt(f,a,d),v.return=f,f=v)}return i(f);case Fn:e:{for(E=d.key;a!==null;){if(a.key===E)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{t(f,a);break}else n(f,a);a=a.sibling}a=Yl(d,f.mode,v),a.return=f,f=a}return i(f);case qe:return E=d._init,D(f,a,E(d._payload),v)}if(kt(d))return w(f,a,d,v);if(ft(d))return k(f,a,d,v);hr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(f,a.sibling),a=l(a,d),a.return=f,f=a):(t(f,a),a=Ql(d,f.mode,v),a.return=f,f=a),i(f)):t(f,a)}return D}var tt=oa(!0),ia=oa(!1),Hr=vn(null),Qr=null,Hn=null,ci=null;function fi(){ci=Hn=Qr=null}function di(e){var n=Hr.current;I(Hr),e._currentValue=n}function Eo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jn(e,n){Qr=e,ci=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function _e(e){var n=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(Qr===null)throw Error(g(308));Hn=e,Qr.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var Mn=null;function pi(e){Mn===null?Mn=[e]:Mn.push(e)}function ua(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,pi(n)):(t.next=l.next,l.next=t),n.interleaved=t,Xe(e,r)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var be=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Xe(e,t)}return l=r.interleaved,l===null?(n.next=n,pi(r)):(n.next=l.next,l.next=n),r.interleaved=n,Xe(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}function ku(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Yr(e,n,t,r){var l=e.updateQueue;be=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(o!==null){var h=l.baseState;i=0,m=c=s=null,u=o;do{var p=u.lane,y=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,k=u;switch(p=n,y=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(y,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(y,h,p):w,p==null)break e;h=B({},h,p);break e;case 2:be=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=y,s=h):m=m.next=y,i|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Ln|=i,e.lanes=i,e.memoizedState=h}}function xu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var bt={},Ae=vn(bt),Wt=vn(bt),Ht=vn(bt);function En(e){if(e===bt)throw Error(g(174));return e}function mi(e,n){switch(O(Ht,n),O(Wt,e),O(Ae,bt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}I(Ae),O(Ae,n)}function rt(){I(Ae),I(Wt),I(Ht)}function aa(e){En(Ht.current);var n=En(Ae.current),t=ro(n,e.type);n!==t&&(O(Wt,e),O(Ae,t))}function vi(e){Wt.current===e&&(I(Ae),I(Wt))}var $=vn(0);function Kr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $l=[];function gi(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Cr=Ze.ReactCurrentDispatcher,Al=Ze.ReactCurrentBatchConfig,Pn=0,A=null,K=null,Z=null,Xr=!1,Nt=!1,Qt=0,rd=0;function te(){throw Error(g(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function wi(e,n,t,r,l,o){if(Pn=o,A=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Cr.current=e===null||e.memoizedState===null?ud:sd,e=t(r,l),Nt){o=0;do{if(Nt=!1,Qt=0,25<=o)throw Error(g(301));o+=1,Z=K=null,n.updateQueue=null,Cr.current=ad,e=t(r,l)}while(Nt)}if(Cr.current=Gr,n=K!==null&&K.next!==null,Pn=0,Z=K=A=null,Xr=!1,n)throw Error(g(300));return e}function ki(){var e=Qt!==0;return Qt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function ze(){if(K===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?A.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(g(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Yt(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=ze(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var m=c.lane;if((Pn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=h,i=r):s=s.next=h,A.lanes|=m,Ln|=m}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,Fe(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,A.lanes|=o,Ln|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vl(e){var n=ze(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Fe(o,n.memoizedState)||(fe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ca(){}function fa(e,n){var t=A,r=ze(),l=n(),o=!Fe(r.memoizedState,l);if(o&&(r.memoizedState=l,fe=!0),r=r.queue,xi(ha.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Kt(9,pa.bind(null,t,r,l,n),void 0,null),J===null)throw Error(g(349));Pn&30||da(t,n,l)}return l}function da(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=A.updateQueue,n===null?(n={lastEffect:null,stores:null},A.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pa(e,n,t,r){n.value=t,n.getSnapshot=r,ma(n)&&va(e)}function ha(e,n,t){return t(function(){ma(n)&&va(e)})}function ma(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function va(e){var n=Xe(e,1);n!==null&&je(n,e,1,-1)}function Su(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},n.queue=e,e=e.dispatch=id.bind(null,A,e),[n.memoizedState,e]}function Kt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=A.updateQueue,n===null?(n={lastEffect:null,stores:null},A.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ga(){return ze().memoizedState}function _r(e,n,t,r){var l=De();A.flags|=e,l.memoizedState=Kt(1|n,t,void 0,r===void 0?null:r)}function sl(e,n,t,r){var l=ze();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Kt(n,t,o,r);return}}A.flags|=e,l.memoizedState=Kt(1|n,t,o,r)}function Mu(e,n){return _r(8390656,8,e,n)}function xi(e,n){return sl(2048,8,e,n)}function ya(e,n){return sl(4,2,e,n)}function wa(e,n){return sl(4,4,e,n)}function ka(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xa(e,n,t){return t=t!=null?t.concat([e]):null,sl(4,4,ka.bind(null,n,e),t)}function Si(){}function Sa(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ma(e,n){var t=ze();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ea(e,n,t){return Pn&21?(Fe(t,n)||(t=Ps(),A.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function ld(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),n()}finally{R=t,Al.transition=r}}function Ca(){return ze().memoizedState}function od(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},_a(e))za(n,t);else if(t=ua(e,n,t,r),t!==null){var l=ue();je(t,e,r,l),Na(t,n,r)}}function id(e,n,t){var r=fn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(_a(e))za(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,u=o(i,t);if(l.hasEagerState=!0,l.eagerState=u,Fe(u,i)){var s=n.interleaved;s===null?(l.next=l,pi(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=ua(e,n,l,r),t!==null&&(l=ue(),je(t,e,r,l),Na(t,n,r))}}function _a(e){var n=e.alternate;return e===A||n!==null&&n===A}function za(e,n){Nt=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Na(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}var Gr={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},ud={readContext:_e,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:_e,useEffect:Mu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,_r(4194308,4,ka.bind(null,n,e),t)},useLayoutEffect:function(e,n){return _r(4194308,4,e,n)},useInsertionEffect:function(e,n){return _r(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=od.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Su,useDebugValue:Si,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Su(!1),n=e[0];return e=ld.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=A,l=De();if(U){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),J===null)throw Error(g(349));Pn&30||da(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Mu(ha.bind(null,r,o,e),[e]),r.flags|=2048,Kt(9,pa.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=De(),n=J.identifierPrefix;if(U){var t=He,r=We;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=rd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sd={readContext:_e,useCallback:Sa,useContext:_e,useEffect:xi,useImperativeHandle:xa,useInsertionEffect:ya,useLayoutEffect:wa,useMemo:Ma,useReducer:Bl,useRef:ga,useState:function(){return Bl(Yt)},useDebugValue:Si,useDeferredValue:function(e){var n=ze();return Ea(n,K.memoizedState,e)},useTransition:function(){var e=Bl(Yt)[0],n=ze().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:fa,useId:Ca,unstable_isNewReconciler:!1},ad={readContext:_e,useCallback:Sa,useContext:_e,useEffect:xi,useImperativeHandle:xa,useInsertionEffect:ya,useLayoutEffect:wa,useMemo:Ma,useReducer:Vl,useRef:ga,useState:function(){return Vl(Yt)},useDebugValue:Si,useDeferredValue:function(e){var n=ze();return K===null?n.memoizedState=e:Ea(n,K.memoizedState,e)},useTransition:function(){var e=Vl(Yt)[0],n=ze().memoizedState;return[e,n]},useMutableSource:ca,useSyncExternalStore:fa,useId:Ca,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Co(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ue(),l=fn(e),o=Qe(r,l);o.payload=n,t!=null&&(o.callback=t),n=an(e,o,l),n!==null&&(je(n,e,l,r),Er(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ue(),l=fn(e),o=Qe(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=an(e,o,l),n!==null&&(je(n,e,l,r),Er(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ue(),r=fn(e),l=Qe(t,r);l.tag=2,n!=null&&(l.callback=n),n=an(e,l,r),n!==null&&(je(n,e,r,t),Er(n,e,r))}};function Eu(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!$t(t,r)||!$t(l,o):!0}function Pa(e,n,t){var r=!1,l=hn,o=n.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=pe(n)?zn:oe.current,r=n.contextTypes,o=(r=r!=null)?et(e,l):hn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Cu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function _o(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},hi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=pe(n)?zn:oe.current,l.context=et(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Co(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&al.enqueueReplaceState(l,l.state,null),Yr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function lt(e,n){try{var t="",r=n;do t+=Ic(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function zo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var cd=typeof WeakMap=="function"?WeakMap:Map;function La(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Jr||(Jr=!0,Do=r),zo(e,n)},t}function Ta(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){zo(e,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function _u(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new cd;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ed.bind(null,e,n,t),n.then(e,e))}function zu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Nu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,an(t,n,1))),t.lanes|=1),e)}var fd=Ze.ReactCurrentOwner,fe=!1;function ie(e,n,t,r){n.child=e===null?ia(n,null,t,r):tt(n,e.child,t,r)}function Pu(e,n,t,r,l){t=t.render;var o=n.ref;return Jn(n,l),r=wi(e,n,t,r,o,l),t=ki(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(U&&t&&ui(n),n.flags|=1,ie(e,n,r,l),n.child)}function Lu(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Ra(e,n,o,r,l)):(e=Lr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:$t,t(i,r)&&e.ref===n.ref)return Ge(e,n,l)}return n.flags|=1,e=dn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Ra(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if($t(o,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Ge(e,n,l)}return No(e,n,t,r,l)}function Oa(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Yn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Yn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(Yn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(Yn,me),me|=r;return ie(e,n,l,t),n.child}function ja(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function No(e,n,t,r,l){var o=pe(t)?zn:oe.current;return o=et(n,o),Jn(n,l),t=wi(e,n,t,r,o,l),r=ki(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(U&&r&&ui(n),n.flags|=1,ie(e,n,t,l),n.child)}function Tu(e,n,t,r,l){if(pe(t)){var o=!0;Br(n)}else o=!1;if(Jn(n,l),n.stateNode===null)zr(e,n),Pa(n,t,r),_o(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var s=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=pe(t)?zn:oe.current,c=et(n,c));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Cu(n,i,r,c),be=!1;var p=n.memoizedState;i.state=p,Yr(n,r,i,l),s=n.memoizedState,u!==r||p!==s||de.current||be?(typeof m=="function"&&(Co(n,t,m,r),s=n.memoizedState),(u=be||Eu(n,t,u,r,p,s,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,sa(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:Le(n.type,u),i.props=c,h=n.pendingProps,p=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=pe(t)?zn:oe.current,s=et(n,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==h||p!==s)&&Cu(n,i,r,s),be=!1,p=n.memoizedState,i.state=p,Yr(n,r,i,l);var w=n.memoizedState;u!==h||p!==w||de.current||be?(typeof y=="function"&&(Co(n,t,y,r),w=n.memoizedState),(c=be||Eu(n,t,c,r,p,w,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Po(e,n,t,r,o,l)}function Po(e,n,t,r,l,o){ja(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&vu(n,t,!1),Ge(e,n,o);r=n.stateNode,fd.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tt(n,e.child,null,o),n.child=tt(n,null,u,o)):ie(e,n,u,o),n.memoizedState=r.state,l&&vu(n,t,!0),n.child}function Fa(e){var n=e.stateNode;n.pendingContext?mu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&mu(e,n.context,!1),mi(e,n.containerInfo)}function Ru(e,n,t,r,l){return nt(),ai(l),n.flags|=256,ie(e,n,t,r),n.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ia(e,n,t){var r=n.pendingProps,l=$.current,o=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O($,l&1),e===null)return Mo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=_n(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=To(t),n.memoizedState=Lo,e):Mi(n,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return dd(e,n,i,r,u,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=dn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=dn(u,o):(o=_n(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?To(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Mi(e,n){return n=dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&ai(r),tt(n,e.child,null,t),e=Mi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dd(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(g(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=_n(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&tt(n,e.child,null,i),n.child.memoizedState=To(i),n.memoizedState=Lo,o);if(!(n.mode&1))return mr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(g(419)),r=Wl(o,r,void 0),mr(e,n,i,r)}if(u=(i&e.childLanes)!==0,fe||u){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Xe(e,l),je(r,e,l,-1))}return Pi(),r=Wl(Error(g(421))),mr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Cd.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,ve=sn(l.nextSibling),ye=n,U=!0,Re=null,e!==null&&(Se[Me++]=We,Se[Me++]=He,Se[Me++]=Nn,We=e.id,He=e.overflow,Nn=n),n=Mi(n,r.children),n.flags|=4096,n)}function Ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Eo(e.return,n,t)}function Hl(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Da(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,n,r.children,t),r=$.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,t,n);else if(e.tag===19)Ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O($,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Kr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Hl(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Hl(n,!0,t,null,o);break;case"together":Hl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pd(e,n,t){switch(n.tag){case 3:Fa(n),nt();break;case 5:aa(n);break;case 1:pe(n.type)&&Br(n);break;case 4:mi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O($,$.current&1),n.flags|=128,null):t&n.child.childLanes?Ia(e,n,t):(O($,$.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);O($,$.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Da(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O($,$.current),r)break;return null;case 22:case 23:return n.lanes=0,Oa(e,n,t)}return Ge(e,n,t)}var Ua,Ro,$a,Aa;Ua=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ro=function(){};$a=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,En(Ae.current);var o=null;switch(t){case"input":l=bl(e,l),r=bl(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}lo(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&j("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Aa=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hd(e,n,t){var r=n.pendingProps;switch(si(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return pe(n.type)&&Ar(),re(n),null;case 3:return r=n.stateNode,rt(),I(de),I(oe),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Ao(Re),Re=null))),Ro(e,n),re(n),null;case 5:vi(n);var l=En(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)$a(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return re(n),null}if(e=En(Ae.current),pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ue]=n,r[Vt]=o,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(l=0;l<St.length;l++)j(St[l],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Vi(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":Hi(r,o),j("invalid",r)}lo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",""+u]):Rt.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&j("scroll",r)}switch(t){case"input":lr(r),Wi(r,o,!0);break;case"textarea":lr(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$r)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Ue]=n,e[Vt]=r,Ua(e,n,!1,!1),n.stateNode=e;e:{switch(i=oo(t,r),t){case"dialog":j("cancel",e),j("close",e),l=r;break;case"iframe":case"object":case"embed":j("load",e),l=r;break;case"video":case"audio":for(l=0;l<St.length;l++)j(St[l],e);l=r;break;case"source":j("error",e),l=r;break;case"img":case"image":case"link":j("error",e),j("load",e),l=r;break;case"details":j("toggle",e),l=r;break;case"input":Vi(e,r),l=bl(e,r),j("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),j("invalid",e);break;case"textarea":Hi(e,r),l=to(e,r),j("invalid",e);break;default:l=r}lo(t,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?gs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ms(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ot(e,s):typeof s=="number"&&Ot(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&j("scroll",e):s!=null&&Ko(e,o,s,i))}switch(t){case"input":lr(e),Wi(e,r,!1);break;case"textarea":lr(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Aa(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=En(Ht.current),En(Ae.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(o=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return re(n),null;case 13:if(I($),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&n.mode&1&&!(n.flags&128))la(),nt(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Ue]=n}else nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),o=!1}else Re!==null&&(Ao(Re),Re=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?X===0&&(X=3):Pi())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return rt(),Ro(e,n),e===null&&At(n.stateNode.containerInfo),re(n),null;case 10:return di(n.type._context),re(n),null;case 17:return pe(n.type)&&Ar(),re(n),null;case 19:if(I($),o=n.memoizedState,o===null)return re(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)gt(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Kr(e),i!==null){for(n.flags|=128,gt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O($,$.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>ot&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304)}else{if(!r)if(e=Kr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!U)return re(n),null}else 2*Q()-o.renderingStartTime>ot&&t!==1073741824&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=$.current,O($,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Ni(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function md(e,n){switch(si(n),n.tag){case 1:return pe(n.type)&&Ar(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),I(de),I(oe),gi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vi(n),null;case 13:if(I($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I($),null;case 4:return rt(),null;case 10:return di(n.type._context),null;case 22:case 23:return Ni(),null;case 24:return null;default:return null}}var vr=!1,le=!1,vd=typeof WeakSet=="function"?WeakSet:Set,x=null;function Qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Oo(e,n,t){try{t()}catch(r){V(e,n,r)}}var ju=!1;function gd(e,n){if(vo=Ir,e=Qs(),ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,u=-1,s=-1,c=0,m=0,h=e,p=null;n:for(;;){for(var y;h!==t||l!==0&&h.nodeType!==3||(u=i+l),h!==o||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break n;if(p===t&&++c===l&&(u=i),p===o&&++m===r&&(s=i),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(go={focusedElem:e,selectionRange:t},Ir=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,D=w.memoizedState,f=n.stateNode,a=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Le(n.type,k),D);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){V(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return w=ju,ju=!1,w}function Pt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Oo(n,t,o)}l=l.next}while(l!==r)}}function cl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function jo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ba(e){var n=e.alternate;n!==null&&(e.alternate=null,Ba(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[Vt],delete n[ko],delete n[bf],delete n[ed])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,n,t),e=e.sibling;e!==null;)Fo(e,n,t),e=e.sibling}function Io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}var q=null,Te=!1;function Je(e,n,t){for(t=t.child;t!==null;)Wa(e,n,t),t=t.sibling}function Wa(e,n,t){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(tl,t)}catch{}switch(t.tag){case 5:le||Qn(t,n);case 6:var r=q,l=Te;q=null,Je(e,n,t),q=r,Te=l,q!==null&&(Te?(e=q,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):q.removeChild(t.stateNode));break;case 18:q!==null&&(Te?(e=q,t=t.stateNode,e.nodeType===8?Dl(e.parentNode,t):e.nodeType===1&&Dl(e,t),Dt(e)):Dl(q,t.stateNode));break;case 4:r=q,l=Te,q=t.stateNode.containerInfo,Te=!0,Je(e,n,t),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Oo(t,n,i),l=l.next}while(l!==r)}Je(e,n,t);break;case 1:if(!le&&(Qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){V(t,n,u)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Je(e,n,t),le=r):Je(e,n,t);break;default:Je(e,n,t)}}function Iu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new vd),n.forEach(function(r){var l=_d.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Te=!1;break e;case 3:q=u.stateNode.containerInfo,Te=!0;break e;case 4:q=u.stateNode.containerInfo,Te=!0;break e}u=u.return}if(q===null)throw Error(g(160));Wa(o,i,l),q=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ha(n,e),n=n.sibling}function Ha(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Ie(e),r&4){try{Pt(3,e,e.return),cl(3,e)}catch(k){V(e,e.return,k)}try{Pt(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Pe(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return);break;case 5:if(Pe(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return),e.flags&32){var l=e.stateNode;try{Ot(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ds(l,o),oo(u,i);var c=oo(u,o);for(i=0;i<s.length;i+=2){var m=s[i],h=s[i+1];m==="style"?gs(l,h):m==="dangerouslySetInnerHTML"?ms(l,h):m==="children"?Ot(l,h):Ko(l,m,h,c)}switch(u){case"input":eo(l,o);break;case"textarea":ps(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Kn(l,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Kn(l,!!o.multiple,o.defaultValue,!0):Kn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Vt]=o}catch(k){V(e,e.return,k)}}break;case 6:if(Pe(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){V(e,e.return,k)}}break;case 3:if(Pe(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Dt(n.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Pe(n,e),Ie(e);break;case 13:Pe(n,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(_i=Q())),r&4&&Iu(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||m,Pe(n,e),le=c):Pe(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(x=e,m=e.child;m!==null;){for(h=x=m;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:Pt(4,p,p.return);break;case 1:Qn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){V(r,t,k)}}break;case 5:Qn(p,p.return);break;case 22:if(p.memoizedState!==null){Uu(h);continue}}y!==null?(y.return=p,x=y):Uu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=vs("display",i))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(n,e),Ie(e),r&4&&Iu(e);break;case 21:break;default:Pe(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Va(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ot(l,""),r.flags&=-33);var o=Fu(e);Io(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Fu(e);Fo(e,u,i);break;default:throw Error(g(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yd(e,n,t){x=e,Qa(e)}function Qa(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||vr;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||le;u=vr;var c=le;if(vr=i,(le=s)&&!c)for(x=l;x!==null;)i=x,s=i.child,i.tag===22&&i.memoizedState!==null?$u(l):s!==null?(s.return=i,x=s):$u(l);for(;o!==null;)x=o,Qa(o),o=o.sibling;x=l,vr=u,le=c}Du(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Du(e)}}function Du(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||cl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&xu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xu(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Dt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}le||n.flags&512&&jo(n)}catch(p){V(n,n.return,p)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Uu(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function $u(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{cl(4,n)}catch(s){V(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){V(n,l,s)}}var o=n.return;try{jo(n)}catch(s){V(n,o,s)}break;case 5:var i=n.return;try{jo(n)}catch(s){V(n,i,s)}}}catch(s){V(n,n.return,s)}if(n===e){x=null;break}var u=n.sibling;if(u!==null){u.return=n.return,x=u;break}x=n.return}}var wd=Math.ceil,Zr=Ze.ReactCurrentDispatcher,Ei=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,T=0,J=null,Y=null,ee=0,me=0,Yn=vn(0),X=0,Xt=null,Ln=0,fl=0,Ci=0,Lt=null,ce=null,_i=0,ot=1/0,Be=null,Jr=!1,Do=null,cn=null,gr=!1,rn=null,qr=0,Tt=0,Uo=null,Nr=-1,Pr=0;function ue(){return T&6?Q():Nr!==-1?Nr:Nr=Q()}function fn(e){return e.mode&1?T&2&&ee!==0?ee&-ee:td.transition!==null?(Pr===0&&(Pr=Ps()),Pr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Is(e.type)),e):1}function je(e,n,t,r){if(50<Tt)throw Tt=0,Uo=null,Error(g(185));Zt(e,t,r),(!(T&2)||e!==J)&&(e===J&&(!(T&2)&&(fl|=t),X===4&&nn(e,ee)),he(e,r),t===1&&T===0&&!(n.mode&1)&&(ot=Q()+500,ul&&gn()))}function he(e,n){var t=e.callbackNode;nf(e,n);var r=Fr(e,e===J?ee:0);if(r===0)t!==null&&Xi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xi(t),n===1)e.tag===0?nd(Au.bind(null,e)):na(Au.bind(null,e)),Jf(function(){!(T&6)&&gn()}),t=null;else{switch(Ls(r)){case 1:t=qo;break;case 4:t=zs;break;case 16:t=jr;break;case 536870912:t=Ns;break;default:t=jr}t=ba(t,Ya.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ya(e,n){if(Nr=-1,Pr=0,T&6)throw Error(g(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Fr(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=br(e,r);else{n=r;var l=T;T|=2;var o=Xa();(J!==e||ee!==n)&&(Be=null,ot=Q()+500,Cn(e,n));do try{Sd();break}catch(u){Ka(e,u)}while(!0);fi(),Zr.current=o,T=l,Y!==null?n=0:(J=null,ee=0,n=X)}if(n!==0){if(n===2&&(l=co(e),l!==0&&(r=l,n=$o(e,l))),n===1)throw t=Xt,Cn(e,0),nn(e,r),he(e,Q()),t;if(n===6)nn(e,r);else{if(l=e.current.alternate,!(r&30)&&!kd(l)&&(n=br(e,r),n===2&&(o=co(e),o!==0&&(r=o,n=$o(e,o))),n===1))throw t=Xt,Cn(e,0),nn(e,r),he(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:xn(e,ce,Be);break;case 3:if(nn(e,r),(r&130023424)===r&&(n=_i+500-Q(),10<n)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wo(xn.bind(null,e,ce,Be),n);break}xn(e,ce,Be);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Oe(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wd(r/1960))-r,10<r){e.timeoutHandle=wo(xn.bind(null,e,ce,Be),r);break}xn(e,ce,Be);break;case 5:xn(e,ce,Be);break;default:throw Error(g(329))}}}return he(e,Q()),e.callbackNode===t?Ya.bind(null,e):null}function $o(e,n){var t=Lt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=br(e,n),e!==2&&(n=ce,ce=t,n!==null&&Ao(n)),e}function Ao(e){ce===null?ce=e:ce.push.apply(ce,e)}function kd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Fe(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Ci,n&=~fl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function Au(e){if(T&6)throw Error(g(327));qn();var n=Fr(e,0);if(!(n&1))return he(e,Q()),null;var t=br(e,n);if(e.tag!==0&&t===2){var r=co(e);r!==0&&(n=r,t=$o(e,r))}if(t===1)throw t=Xt,Cn(e,0),nn(e,n),he(e,Q()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xn(e,ce,Be),he(e,Q()),null}function zi(e,n){var t=T;T|=1;try{return e(n)}finally{T=t,T===0&&(ot=Q()+500,ul&&gn())}}function Tn(e){rn!==null&&rn.tag===0&&!(T&6)&&qn();var n=T;T|=1;var t=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=t,T=n,!(T&6)&&gn()}}function Ni(){me=Yn.current,I(Yn)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Zf(t)),Y!==null)for(t=Y.return;t!==null;){var r=t;switch(si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ar();break;case 3:rt(),I(de),I(oe),gi();break;case 5:vi(r);break;case 4:rt();break;case 13:I($);break;case 19:I($);break;case 10:di(r.type._context);break;case 22:case 23:Ni()}t=t.return}if(J=e,Y=e=dn(e.current,null),ee=me=n,X=0,Xt=null,Ci=fl=Ln=0,ce=Lt=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}Mn=null}return e}function Ka(e,n){do{var t=Y;try{if(fi(),Cr.current=Gr,Xr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(Pn=0,Z=K=A=null,Nt=!1,Qt=0,Ei.current=null,t===null||t.return===null){X=1,Xt=n,Y=null;break}e:{var o=e,i=t.return,u=t,s=n;if(n=ee,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=zu(i);if(y!==null){y.flags&=-257,Nu(y,i,u,o,n),y.mode&1&&_u(o,c,n),n=y,s=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(s),n.updateQueue=k}else w.add(s);break e}else{if(!(n&1)){_u(o,c,n),Pi();break e}s=Error(g(426))}}else if(U&&u.mode&1){var D=zu(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Nu(D,i,u,o,n),ai(lt(s,u));break e}}o=s=lt(s,u),X!==4&&(X=2),Lt===null?Lt=[o]:Lt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=La(o,s,n);ku(o,f);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(cn===null||!cn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=Ta(o,u,n);ku(o,v);break e}}o=o.return}while(o!==null)}Za(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Xa(){var e=Zr.current;return Zr.current=Gr,e===null?Gr:e}function Pi(){(X===0||X===3||X===2)&&(X=4),J===null||!(Ln&268435455)&&!(fl&268435455)||nn(J,ee)}function br(e,n){var t=T;T|=2;var r=Xa();(J!==e||ee!==n)&&(Be=null,Cn(e,n));do try{xd();break}catch(l){Ka(e,l)}while(!0);if(fi(),T=t,Zr.current=r,Y!==null)throw Error(g(261));return J=null,ee=0,X}function xd(){for(;Y!==null;)Ga(Y)}function Sd(){for(;Y!==null&&!Yc();)Ga(Y)}function Ga(e){var n=qa(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Za(e):Y=n,Ei.current=null}function Za(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=md(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(t=hd(t,n,me),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);X===0&&(X=5)}function xn(e,n,t){var r=R,l=Ce.transition;try{Ce.transition=null,R=1,Md(e,n,t,r)}finally{Ce.transition=l,R=r}return null}function Md(e,n,t,r){do qn();while(rn!==null);if(T&6)throw Error(g(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(tf(e,o),e===J&&(Y=J=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,ba(jr,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=R;R=1;var u=T;T|=4,Ei.current=null,gd(e,t),Ha(t,e),Wf(go),Ir=!!vo,go=vo=null,e.current=t,yd(t),Kc(),T=u,R=i,Ce.transition=o}else e.current=t;if(gr&&(gr=!1,rn=e,qr=l),o=e.pendingLanes,o===0&&(cn=null),Zc(t.stateNode),he(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Do,Do=null,e;return qr&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Uo?Tt++:(Tt=0,Uo=e):Tt=0,gn(),null}function qn(){if(rn!==null){var e=Ls(qr),n=Ce.transition,t=R;try{if(Ce.transition=null,R=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,qr=0,T&6)throw Error(g(331));var l=T;for(T|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(x=c;x!==null;){var m=x;switch(m.tag){case 0:case 11:case 15:Pt(8,m,o)}var h=m.child;if(h!==null)h.return=m,x=h;else for(;x!==null;){m=x;var p=m.sibling,y=m.return;if(Ba(m),m===c){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,x=f;break e}x=o.return}}var a=e.current;for(x=a;x!==null;){i=x;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,x=d;else e:for(i=a;x!==null;){if(u=x,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(S){V(u,u.return,S)}if(u===i){x=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,x=v;break e}x=u.return}}if(T=l,gn(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{R=t,Ce.transition=n}}return!1}function Bu(e,n,t){n=lt(t,n),n=La(e,n,1),e=an(e,n,1),n=ue(),e!==null&&(Zt(e,1,n),he(e,n))}function V(e,n,t){if(e.tag===3)Bu(e,e,t);else for(;n!==null;){if(n.tag===3){Bu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=lt(t,e),e=Ta(n,e,1),n=an(n,e,1),e=ue(),n!==null&&(Zt(n,1,e),he(n,e));break}}n=n.return}}function Ed(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ue(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-_i?Cn(e,0):Ci|=t),he(e,n)}function Ja(e,n){n===0&&(e.mode&1?(n=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):n=1);var t=ue();e=Xe(e,n),e!==null&&(Zt(e,n,t),he(e,t))}function Cd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ja(e,t)}function _d(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Ja(e,t)}var qa;qa=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,pd(e,n,t);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&ta(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var l=et(n,oe.current);Jn(n,t),l=wi(null,n,r,e,l,t);var o=ki();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(o=!0,Br(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(n),l.updater=al,n.stateNode=l,l._reactInternals=n,_o(n,r,e,t),n=Po(null,n,r,!0,o,t)):(n.tag=0,U&&o&&ui(n),ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Nd(r),e=Le(r,e),l){case 0:n=No(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Pu(null,n,r,e,t);break e;case 14:n=Lu(null,n,r,Le(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),No(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Tu(e,n,r,l,t);case 3:e:{if(Fa(n),e===null)throw Error(g(387));r=n.pendingProps,o=n.memoizedState,l=o.element,sa(e,n),Yr(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=lt(Error(g(423)),n),n=Ru(e,n,r,t,l);break e}else if(r!==l){l=lt(Error(g(424)),n),n=Ru(e,n,r,t,l);break e}else for(ve=sn(n.stateNode.containerInfo.firstChild),ye=n,U=!0,Re=null,t=ia(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===l){n=Ge(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return aa(n),e===null&&Mo(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(r,l)?i=null:o!==null&&yo(r,o)&&(n.flags|=32),ja(e,n),ie(e,n,i,t),n.child;case 6:return e===null&&Mo(n),null;case 13:return Ia(e,n,t);case 4:return mi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),Pu(e,n,r,l,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,O(Hr,r._currentValue),r._currentValue=i,o!==null)if(Fe(o.value,i)){if(o.children===l.children&&!de.current){n=Ge(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Qe(-1,t&-t),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Eo(o.return,t,n),u.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(g(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Eo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Jn(n,t),l=_e(l),r=r(l),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,l=Le(r,n.pendingProps),l=Le(r.type,l),Lu(e,n,r,l,t);case 15:return Ra(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Le(r,l),zr(e,n),n.tag=1,pe(r)?(e=!0,Br(n)):e=!1,Jn(n,t),Pa(n,r,l),_o(n,r,l,t),Po(null,n,r,!0,e,t);case 19:return Da(e,n,t);case 22:return Oa(e,n,t)}throw Error(g(156,n.tag))};function ba(e,n){return _s(e,n)}function zd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new zd(e,n,t,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nd(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Zo)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Lr(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case In:return _n(t.children,l,o,n);case Xo:i=8,l|=8;break;case Gl:return e=Ee(12,t,n,l|2),e.elementType=Gl,e.lanes=o,e;case Zl:return e=Ee(13,t,n,l),e.elementType=Zl,e.lanes=o,e;case Jl:return e=Ee(19,t,n,l),e.elementType=Jl,e.lanes=o,e;case as:return dl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:i=10;break e;case ss:i=9;break e;case Go:i=11;break e;case Zo:i=14;break e;case qe:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Ee(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function _n(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function dl(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=as,e.lanes=t,e.stateNode={isHidden:!1},e}function Ql(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function Yl(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ti(e,n,t,r,l,o,i,u,s){return e=new Pd(e,n,t,u,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ee(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function Ld(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return hn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(pe(t))return ea(e,t,n)}return n}function nc(e,n,t,r,l,o,i,u,s){return e=Ti(t,r,!0,e,l,o,i,u,s),e.context=ec(null),t=e.current,r=ue(),l=fn(t),o=Qe(r,l),o.callback=n??null,an(t,o,l),e.current.lanes=l,Zt(e,l,r),he(e,r),e}function pl(e,n,t,r){var l=n.current,o=ue(),i=fn(l);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=an(l,n,i),e!==null&&(je(e,l,i,o),Er(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ri(e,n){Vu(e,n),(e=e.alternate)&&Vu(e,n)}function Td(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oi(e){this._internalRoot=e}hl.prototype.render=Oi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));pl(e,n,null,null)};hl.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){pl(null,e,null,null)}),n[Ke]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&Fs(e)}};function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Rd(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=el(i);o.call(c)}}var i=nc(n,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=i,e[Ke]=i.current,At(e.nodeType===8?e.parentNode:e),Tn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(s);u.call(c)}}var s=Ti(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=s,e[Ke]=s.current,At(e.nodeType===8?e.parentNode:e),Tn(function(){pl(n,s,t,r)}),s}function vl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=el(i);u.call(s)}}pl(n,i,e,l)}else i=Rd(t,n,e,l,r);return el(i)}Ts=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xt(n.pendingLanes);t!==0&&(bo(n,t|1),he(n,Q()),!(T&6)&&(ot=Q()+500,gn()))}break;case 13:Tn(function(){var r=Xe(e,1);if(r!==null){var l=ue();je(r,e,1,l)}}),Ri(e,1)}};ei=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=ue();je(n,e,134217728,t)}Ri(e,134217728)}};Rs=function(e){if(e.tag===13){var n=fn(e),t=Xe(e,n);if(t!==null){var r=ue();je(t,e,n,r)}Ri(e,n)}};Os=function(){return R};js=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};uo=function(e,n,t){switch(n){case"input":if(eo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(g(90));fs(r),eo(r,l)}}}break;case"textarea":ps(e,t);break;case"select":n=t.value,n!=null&&Kn(e,!!t.multiple,n,!1)}};ks=zi;xs=Tn;var Od={usingClientEntryPoint:!1,Events:[qt,An,il,ys,ws,zi]},yt={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jd={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Td,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{tl=yr.inject(jd),$e=yr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ji(n))throw Error(g(200));return Ld(e,n,null,t)};ke.createRoot=function(e,n){if(!ji(e))throw Error(g(299));var t=!1,r="",l=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Ti(e,1,!1,null,null,t,!1,r,l),e[Ke]=n.current,At(e.nodeType===8?e.parentNode:e),new Oi(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Es(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Tn(e)};ke.hydrate=function(e,n,t){if(!ml(n))throw Error(g(200));return vl(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!ji(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=tc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=nc(n,null,e,1,t??null,l,!1,o,i),e[Ke]=n.current,At(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new hl(n)};ke.render=function(e,n,t){if(!ml(n))throw Error(g(200));return vl(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!ml(e))throw Error(g(40));return e._reactRootContainer?(Tn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=zi;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ml(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return vl(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=ke;var Fd=rs.exports,Hu=Fd;Kl.createRoot=Hu.createRoot,Kl.hydrateRoot=Hu.hydrateRoot;(function(e,n){n===void 0&&(n={});var t=n.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",t==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}})(`/*
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
 */const lc=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");var Id={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ge.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...u},s)=>ge.createElement("svg",{ref:s,...Id,width:n,height:n,stroke:e,strokeWidth:r?24*Number(t)/Number(n):t,className:lc("lucide",l),...u},[...i.map(([c,m])=>ge.createElement(c,m)),...Array.isArray(o)?o:[o]])),gl=(e,n)=>{const t=ge.forwardRef(({className:r,...l},o)=>{return ge.createElement(Dd,{ref:o,iconNode:n,className:lc(`lucide-${i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...l});var i});return t.displayName=`${e}`,t},Ud=gl("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),$d=gl("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]),Ad=gl("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]),Bd=gl("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),oc=ge.createContext(void 0),Vd=({children:e})=>{const[n,t]=ge.useState(!1);return F.createElement(oc.Provider,{value:{isCollapsed:n,setIsCollapsed:t}},e)},ic=()=>{const e=ge.useContext(oc);if(!e)throw new Error("useBaseLayout must be used within a BaseLayoutProvider");return e},Wd=({sideMenu:e,brand:n,iconBrand:t,children:r,closeIcon:l,openIcon:o,topbarEnd:i,iconCollapse:u,iconExpand:s})=>{const[c,m]=ge.useState(!1),{isCollapsed:h,setIsCollapsed:p}=ic();return F.createElement("section",{className:"min-h-screen antialiased font-normal bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white",style:{overflow:"visible"}},F.createElement("div",{className:"flex flex-row-reverse w-full min-h-screen overflow-x-clip"},F.createElement("div",{style:{display:"flex",opacity:1},className:"flex-col flex-1 w-screen opacity-0 "},F.createElement("div",{className:"sticky top-0 z-20 overflow-x-clip"},F.createElement("nav",{className:"flex items-center h-16 px-4 bg-white shadow-sm gap-x-4 ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 md:px-6 lg:px-8"},F.createElement("div",{className:"lg:hidden"},F.createElement("button",{className:"flex items-center justify-center rounded-lg transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-close-sidebar-btn",title:"Collapse sidebar",type:"button",onClick:()=>{m(!c)}},F.createElement("span",{className:"sr-only"},"Collapse sidebar"),c?l??F.createElement(Bd,null):o??F.createElement(Ud,null))),F.createElement("div",{className:"flex items-center ms-auto gap-x-4"},i))),F.createElement("main",{className:"w-full h-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl"},r)),F.createElement("div",{onClick:()=>m(!1),className:"fixed inset-0 z-30 bg-gray-950/50 transition duration-500 dark:bg-gray-950/75 lg:hidden "+(c?"":"hidden"),style:{transition:"opacity 300ms",display:c?"block":"none"}}),F.createElement("aside",{className:`fixed inset-y-0 start-0 z-30 flex flex-col h-screen content-start bg-white transition-all dark:bg-gray-900 lg:z-0 lg:bg-transparent lg:shadow-none lg:ring-0 lg:transition-none dark:lg:bg-transparent lg:translate-x-0 rtl:lg:-translate-x-0  
                        ${h?"w-24":"w-80"} ${c?" translate-x-0 shadow-xl ring-1 ring-gray-950/5 dark:ring-white/10 rtl:-translate-x-0 lg:sticky":"-translate-x-full rtl:translate-x-full lg:sticky"}`},F.createElement("div",{className:"overflow-x-clip"},F.createElement("header",{className:"flex items-center h-16 px-6 bg-white justify-between ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 lg:shadow-sm group"},F.createElement("div",null,h?t:n),F.createElement("div",{className:"flex justify-end text-gray-500 opacity-0 group-hover:opacity-100"},h?F.createElement("button",{className:"hover:bg-gray-100 rounded bg-transparent p-1",onClick:()=>p(!1)},u??F.createElement(Ad,{className:"w-5 h-5"})):F.createElement("button",{className:"hover:bg-gray-100 rounded bg-transparent p-1",onClick:()=>p(!0)},s??F.createElement($d,{className:"w-5 h-5"}))))),F.createElement("nav",{className:"flex flex-col flex-grow px-6 py-8 overflow-x-hidden overflow-y-auto gap-y-7"},e))))};function Hd(e){return b.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"192",height:"166",fill:"none",viewBox:"0 0 192 166",children:[b.jsx("path",{stroke:"#222",strokeLinejoin:"bevel",strokeMiterlimit:"2.613",strokeWidth:"2",d:"M35.67 130.38l2.56 6.08M41.16 142.17l-2.93-5.71M41.16 142.17l3.26 5.26M35.67 130.38l-2.17-6.37M44.42 147.43l3.57 4.72M47.99 152.15l3.83 4.1M55.87 159.65l-4.05-3.4M55.87 159.65l4.21 2.61M60.08 162.26l4.33 1.77M64.41 164.03l4.37.84M68.78 164.87l4.33-.15M73.11 164.72l4.23-1.16M77.34 163.56l4.03-2.22M81.37 161.34l3.75-3.28M85.12 158.06l3.37-4.32M50.27 119.48l1.28 2.35M51.55 121.83l1.41 2.12M54.48 125.81l-1.52-1.86M57.78 128.6l-1.68-1.23M56.1 127.37l-1.62-1.56M59.51 129.49l-1.73-.89M59.51 129.49l1.74.51M61.25 130l1.73.12M62.98 130.12l1.67-.27M64.65 129.85l1.61-.67M66.26 129.18l1.5-1.07M33.5 124.01L1.5 18.64M1.5 18.64L13.27 3.13M48.2 114.26L13.27 3.13M49.15 116.94l-.95-2.68M49.15 116.94l1.12 2.54M67.76 128.11l1.37-1.45M69.13 126.66l1.2-1.81M70.33 124.85l1.02-2.14M83.74 91.59l-12.39 31.12M83.74 91.59l.14-.36M83.88 91.23l.16-.36M84.04 90.87l.15-.37M84.19 90.5l.16-.37M104.53 154.98l-27.19 8.58M40.06 3.56l-26.79-.43M84.35 90.13l.17-.37M84.52 89.76l.17-.37M84.69 89.39l.17-.37M84.86 89.02l.18-.37M85.23 88.28l-.19.37M104.53 154.98l4.19-2.21M74.98 108.88L40.06 3.56M75.89 111.3l-.91-2.42M85.42 87.91l-.19.37M85.61 87.54l-.19.37M85.81 87.16l-.2.38M86.01 86.79l-.2.37M86.22 86.41l-.21.38M86.43 86.04l-.21.37M86.64 85.66l-.21.38M86.86 85.29l-.22.37M87.09 84.91l-.23.38M87.32 84.54l-.23.37M87.55 84.16l-.23.38M87.79 83.79l-.24.37M88.03 83.41l-.24.38M88.27 83.04l-.24.37M88.52 82.66l-.25.38M88.78 82.29l-.26.37M89.03 81.91l-.25.38M89.29 81.54l-.26.37M89.56 81.17l-.27.37M89.83 80.8l-.27.37M90.1 80.42l-.27.38M90.38 80.05l-.28.37M90.66 79.68l-.28.37M90.94 79.32l-.28.36M91.23 78.95l-.29.37M91.52 78.58l-.29.37M91.81 78.22l-.29.36M92.11 77.85l-.3.37M92.41 77.49l-.3.36M92.72 77.13l-.31.36M93.03 76.77l-.31.36M93.34 76.41l-.31.36M93.65 76.05l-.31.36M93.97 75.69l-.32.36M94.29 75.34l-.32.35M94.62 74.99l-.33.35M94.94 74.64l-.32.35M95.27 74.29l-.33.35M95.6 73.94l-.33.35M95.94 73.6l-.34.34M96.28 73.26l-.34.34M96.62 72.92l-.34.34M96.96 72.58l-.34.34M108.72 152.77l3.91-3.21M112.63 149.56l3.52-4.17M88.49 153.74l2.91-5.3M105.81 117.11L91.4 148.44M116.15 145.39l3.07-5.08M119.22 140.31l15.15-29.84M97.31 72.24l-.35.34M97.66 71.91l-.35.33M98.01 71.58l-.35.33M98.36 71.25l-.35.33M98.71 70.92l-.35.33M99.07 70.6l-.36.32M99.43 70.28l-.36.32M99.79 69.96l-.36.32M100.16 69.65l-.37.31M100.52 69.33l-.36.32M100.89 69.02l-.37.31M101.26 68.72l-.37.3M101.63 68.41l-.37.31M102 68.11l-.37.3M102.38 67.82l-.38.29M102.75 67.52l-.37.3M105.81 117.11l.17-.37M105.98 116.74l.18-.37M106.16 116.37l.18-.37M106.34 116l.18-.37M106.52 115.63l.19-.38M106.71 115.25l.2-.37M106.91 114.88l.2-.38M107.11 114.5l.2-.37M107.31 114.13l.21-.38M107.52 113.75l.22-.38M107.74 113.37l.22-.38M107.96 112.99l.22-.38M108.18 112.61l.23-.39M108.41 112.22l.23-.38M108.64 111.84l.23-.38M108.87 111.46l.24-.39M109.11 111.07l.25-.38M109.36 110.69l.25-.39M109.61 110.3l.25-.38M109.86 109.92l.26-.39M110.12 109.53l.26-.38M110.38 109.15l.27-.39M110.65 108.76l.27-.38M110.92 108.38l.27-.39M111.19 107.99l.28-.39M111.47 107.6l.28-.38M111.75 107.22l.29-.39M112.04 106.83l.29-.38M112.33 106.45l.29-.39M112.62 106.06l.3-.38M112.92 105.68l.3-.39M113.22 105.29l.31-.38M113.53 104.91l.31-.38M113.84 104.53l.31-.38M114.15 104.15l.31-.39M114.46 103.76l.32-.38M114.78 103.38l.33-.38M115.11 103l.32-.37M115.43 102.63l.33-.38M115.76 102.25l.33-.38M116.09 101.87l.34-.37M116.43 101.5l.34-.38M116.77 101.12l.34-.37M117.11 100.75l.34-.37M117.45 100.38l.35-.37M117.8 100.01l.35-.37M118.15 99.64l.35-.36M118.5 99.28l.36-.37M118.86 98.91l.36-.36M119.22 98.55l.36-.36M119.58 98.19l.36-.36M119.94 97.83l.37-.35M120.31 97.48l.37-.36M120.68 97.12l.37-.35M121.05 96.77l.37-.35M121.42 96.42l.38-.35M121.8 96.07l.37-.35M122.17 95.72l.38-.34M103.13 67.23l-.38.29M122.55 95.38l.38-.34M122.93 95.04l.39-.34M123.32 94.7l.38-.33M123.7 94.37l.39-.34M124.09 94.03l.39-.33M124.48 93.7l.39-.32M124.87 93.38l.39-.33M125.26 93.05l.39-.32M125.65 92.73l.39-.32M126.04 92.41l.4-.31M126.44 92.1l.4-.32M103.51 66.94l-.38.29M126.84 91.78l.39-.31M127.23 91.47l.4-.3M127.63 91.17l.4-.3M128.03 90.87l.4-.3M128.43 90.57l.4-.3M128.83 90.27l.4-.29M129.23 89.98l.41-.29M129.64 89.69l.4-.29M103.89 66.66l-.38.28M104.27 66.38l-.38.28M104.65 66.1l-.38.28M105.03 65.83l-.38.27M105.41 65.56l-.38.27M105.8 65.29l-.39.27M106.19 65.03l-.39.26M106.57 64.77l-.38.26M106.96 64.51l-.39.26M107.35 64.26l-.39.25M107.74 64.01l-.39.25M108.12 63.77l-.38.24M108.51 63.52l-.39.25M108.9 63.29l-.39.23M109.29 63.06l-.39.23M109.68 62.83l-.39.23M110.07 62.6l-.39.23M110.46 62.38l-.39.22M110.85 62.17l-.39.21M111.24 61.95l-.39.22M111.63 61.75l-.39.2M112.02 61.54l-.39.21M112.41 61.34l-.39.2M112.8 61.15l-.39.19M113.19 60.96l-.39.19M113.58 60.77l-.39.19M113.97 60.59l-.39.18M114.35 60.41l-.38.18M114.74 60.24l-.39.17M147.34 107.45l-12.97 3.02M115.12 60.07l-.38.17M115.51 59.91l-.39.16M115.89 59.75l-.38.16M116.27 59.59l-.38.16M116.65 59.44l-.38.15M117.03 59.29l-.38.15M117.41 59.15l-.38.14M117.79 59.02l-.38.13M118.17 58.89l-.38.13M118.54 58.76l-.37.13M118.91 58.63l-.37.13M119.29 58.52l-.38.11M119.66 58.4l-.37.12M120.02 58.3l-.36.1M120.39 58.19l-.37.11M120.76 58.09l-.37.1M121.12 58l-.36.09M121.48 57.91l-.36.09M121.84 57.82l-.36.09M122.2 57.74l-.36.08M122.55 57.67l-.35.07M122.9 57.6l-.35.07M123.25 57.53l-.35.07M123.6 57.47l-.35.06M123.95 57.41l-.35.06M124.29 57.36l-.34.05M124.63 57.31l-.34.05M124.97 57.27l-.34.04M125.31 57.23l-.34.04M125.31 57.23l13.21-1.38M130.04 89.4l.4-.28M130.44 89.12l.41-.28M130.85 88.84l.4-.27M131.25 88.57l.41-.27M131.66 88.3l.4-.27M132.06 88.03l.4-.26M132.46 87.77l.41-.26M132.87 87.51l.4-.26M133.27 87.25l.41-.25M133.68 87l.4-.25M134.08 86.75l.41-.24M134.49 86.51l.4-.24M134.89 86.27l.41-.23M135.3 86.04l.4-.24M135.7 85.8l.4-.22M136.1 85.58l.4-.22M136.5 85.36l.4-.22M136.9 85.14l.4-.22M137.3 84.92l.4-.21M137.7 84.71l.4-.2M138.1 84.51l.4-.2M138.5 84.31l.4-.2M138.9 84.11l.39-.19M139.29 83.92l.4-.19M139.69 83.73l.39-.18M140.08 83.55l.39-.18M140.47 83.37l.39-.17M140.86 83.2l.39-.17M141.25 83.03l.38-.16M141.63 82.87l.39-.16M142.02 82.71l.38-.16M142.4 82.55l.38-.15M142.78 82.4l.38-.14M143.16 82.26l.38-.14M143.54 82.12l.38-.14M143.92 81.98l.37-.13M144.29 81.85l.37-.13M144.66 81.72l.37-.12M145.03 81.6l.37-.12M145.4 81.48l.37-.11M145.77 81.37l.36-.1M147.34 107.45l15.46-29.2M146.13 81.27l.36-.11M146.49 81.16l.36-.09M147.2 80.97l-.35.1M147.55 80.89l-.35.08M147.9 80.8l-.35.09M148.25 80.72l-.35.08M148.6 80.65l-.35.07M148.94 80.58l-.34.07M149.28 80.52l-.34.06M149.61 80.46l-.33.06M149.61 80.46l13.19-2.21M162.8 78.25l-24.28-22.4M142.75 55.41l23.69-2.48M141.32 58.43l1.43-3.02M151.49 106.49l-2.37-2.4M174.73 101.08l-23.24 5.41M174.73 101.08L190.5 73.6M167.01 77.54l23.49-3.94M167.01 77.54l-15.52 28.95M142.75 55.41l24.26 22.13M190.5 73.6l-24.06-20.67"}),b.jsx("path",{fill:"#0EA5E9",fillRule:"evenodd",stroke:"#222",strokeMiterlimit:"2.613",strokeWidth:"2",d:"M122.93 95.04l.39-.34.38-.33.39-.34.39-.33.39-.32.39-.33.39-.32.39-.32.4-.31.4-.32.39-.31.4-.3.4-.3.4-.3.4-.3.4-.29.41-.29.4-.29.4-.28.41-.28.4-.27.41-.27.4-.27.4-.26.41-.26.4-.26.41-.25.4-.25.41-.24.4-.24.41-.23.4-.23.4-.23.4-.22.4-.22.4-.22.4-.21.4-.2.4-.2.4-.2.39-.19.4-.19.39-.18.39-.18.39-.17.39-.17.38-.16.39-.16.38-.16.38-.15.38-.14.38-.14.38-.14.37-.13.37-.13.37-.12.37-.12.37-.11.36-.1.36-.11.36-.09.35-.1.35-.08.35-.09.35-.08.35-.07.34-.07.34-.06.33-.06 13.19-2.21-21.48-19.82-2.8-2.58-13.21 1.38-.34.04-.34.04-.34.05-.34.05-.35.06-.35.06-.35.07-.35.07-.35.07-.36.08-.36.09-.36.09-.36.09-.37.1-.37.11-.36.1-.37.12-.38.11-.37.13-.37.13-.38.13-.38.13-.38.14-.38.15-.38.15-.38.16-.38.16-.39.16-.38.17-.39.17-.39.18-.38.18-.39.19-.39.19-.39.19-.39.2-.39.21-.39.2-.39.22-.39.21-.39.22-.39.23-.39.23-.39.23-.39.23-.39.25-.38.24-.39.25-.39.25-.39.26-.38.26-.39.26-.39.27-.38.27-.38.27-.38.28-.38.28-.38.28-.38.29-.38.29-.37.3-.38.29-.37.3-.37.31-.37.3-.37.31-.36.32-.37.31-.36.32-.36.32-.36.32-.35.33-.35.33-.35.33-.35.33-.35.34-.34.34-.34.34-.34.34-.34.34-.33.35-.33.35-.32.35-.33.35-.32.35-.32.36-.31.36-.31.36-.31.36-.31.36-.3.36-.3.37-.29.36-.29.37-.29.37-.28.36-.28.37-.28.37-.27.38-.27.37-.27.37-.26.37-.25.38-.26.37-.25.38-.24.37-.24.38-.24.37-.23.38-.23.37-.23.38-.22.37-.21.38-.21.37-.21.38-.2.37-.2.38-.19.37-.19.37-.19.37-.18.37-.17.37-.17.37-.17.37-.16.37-.15.37-.16.36-.14.36-7.85 19.71-4.54 11.41-1.02 2.14-1.2 1.81-1.37 1.45-1.5 1.07-1.61.67-1.67.27-1.73-.12-1.74-.51-1.73-.89-1.68-1.23-1.62-1.56-1.52-1.86-1.41-2.12-1.28-2.35-1.12-2.53-.95-2.69L13.27 3.13 1.5 18.64l32 105.37 2.17 6.37 2.56 6.08 2.93 5.71 3.26 5.26 3.57 4.72 3.83 4.1 4.05 3.4 4.21 2.61 4.33 1.77 4.37.84 4.33-.15 4.23-1.16 4.03-2.22 3.75-3.28 3.37-4.32 2.91-5.3 14.41-31.33.17-.37.18-.37.18-.37.18-.37.19-.38.2-.37.2-.38.2-.37.21-.38.22-.38.22-.38.22-.38.23-.39.23-.38.23-.38.24-.39.25-.38.25-.39.25-.38.26-.39.26-.38.27-.39.27-.38.27-.39.28-.39.28-.38.29-.39.29-.38.29-.39.3-.38.3-.39.31-.38.31-.38.31-.38.31-.39.32-.38.33-.38.32-.37.33-.38.33-.38.34-.37.34-.38.34-.37.34-.37.35-.37.35-.37.35-.36.36-.37.36-.36.36-.36.36-.36.37-.35.37-.36.37-.35.37-.35.38-.35.37-.35.38-.34.38-.34zM142.75 55.41l24.26 22.13 23.49-3.94-24.06-20.67-23.69 2.48z",clipRule:"evenodd"}),b.jsx("path",{fill:"#FEFEFE",fillRule:"evenodd",stroke:"#222",strokeMiterlimit:"2.613",strokeWidth:"2",d:"M136.9 85.14l-.4.22-.4.22-.4.23-.4.23-.41.23-.4.24-.41.24-.4.25-.41.25-.4.26-.41.26-.4.26-.4.27-.41.27-.4.27-.41.28-.4.28-.4.29-.41.29-.4.29-.4.3-.4.3-.4.3-.4.3-.39.31-.4.32-.4.31-.39.32-.39.32-.39.33-.39.32-.39.33-.39.34-.38.33-.39.34-.38.34-.38.34-.37.35-.38.35-.37.35-.37.35-.37.36-.37.35-.36.36-.36.36-.36.36-.36.37-.35.36-.35.37-.35.37-.34.37-.34.37-.34.38-.34.37-.33.38-.33.38-.32.37-.33.38-.32.38-.31.39-.31.38-.31.38-.31.38-.3.39-.3.38-.29.39-.29.38-.29.39-.28.38-.28.39-.27.39-.27.38-.27.39-.26.38-.26.39-.25.38-.25.39-.25.38-.24.39-.23.38-.23.38-.23.39-.22.38-.22.38-.22.38-.21.38-.2.37-.2.38-.2.37-.19.38-.18.37-.18.37-.18.37-.17.37-14.41 31.33-2.91 5.3-3.37 4.32-3.75 3.28-4.03 2.22 27.19-8.58 4.19-2.21 3.91-3.21 3.52-4.17 3.07-5.08 15.15-29.84 12.97-3.02 1.78-3.36 13.68-25.84-13.19 2.21-.33.06-.34.06-.34.07-.35.07-.35.08-.35.09-.35.08-.35.1-.36.09-.36.11-.36.1-.37.11-.37.12-.37.12-.37.13-.37.13-.38.14-.38.14-.38.14-.38.15-.38.16-.39.16-.38.16-.39.17-.39.17-.39.18-.39.18-.4.19-.39.19-.4.2-.4.2-.4.2-.4.21-.4.22zM167.01 77.54l-15.52 28.95 23.24-5.41L190.5 73.6l-23.49 3.94z",clipRule:"evenodd"}),b.jsx("path",{fill:"#FEFEFE",fillRule:"evenodd",stroke:"#222",strokeMiterlimit:"2.613",strokeWidth:"2",d:"M151.49 106.49l15.52-28.95-24.26-22.13-1.43 3.02 21.48 19.82-13.68 25.84 2.37 2.4zM74.98 108.88L40.06 3.56l-26.79-.43L48.2 114.26l.95 2.69 1.12 2.53 1.28 2.35 1.41 2.12 1.52 1.86 1.62 1.56 1.68 1.23 1.73.89 1.74.51 1.73.12 1.67-.27 1.61-.67 1.5-1.07 1.37-1.45 1.2-1.81 1.02-2.14 4.54-11.41-.91-2.42z",clipRule:"evenodd"})]})}const Qu=ge.memo(Hd),Qd=()=>{const{isCollapsed:e}=ic();return console.log(e),b.jsx("div",{children:"side-menu"})};function Yd(){return b.jsx(Wd,{brand:b.jsxs("div",{className:"inline-flex gap-2 items-center",children:[b.jsx(Qu,{className:"w-8 h-8"})," ",b.jsx("span",{children:"visiarch"})]}),iconBrand:b.jsx(Qu,{className:"w-8 h-8"}),sideMenu:b.jsx(Qd,{}),topbarEnd:b.jsx("div",{children:"topbar-end"}),children:b.jsx("main",{children:"test"})})}Kl.createRoot(document.getElementById("root")).render(b.jsx(F.StrictMode,{children:b.jsx(Vd,{children:b.jsx(Yd,{})})}));
