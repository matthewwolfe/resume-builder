(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5795)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return i},default:function(){return l}});let n=r(8754),a=(r(7294),n._(r(8976)));function o(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let l=n.loader,u=()=>null!=l?l().then(o):Promise.resolve(o(()=>null));return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:u}):(delete n.webpack,delete n.modules,i(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let n=r(8754),a=n._(r(7294)),o=a.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(8754),a=n._(r(7294)),o=r(2254),i=[],l=[],u=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){let t=new d(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&l.push(t=>{for(let r of e)if(t.includes(r))return i()})}function s(e,t){!function(){i();let e=a.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return s.preload=()=>i(),s.displayName="LoadableComponent",a.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(u=!0,t());f(l,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let h=c},5795:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),a=r(5152),o=r.n(a),i=r(4529),l=r(782);let u=(0,i.Ue)()((0,l.tJ)(e=>({layout:"split",setLayout:t=>e(()=>({layout:t}))}),{name:"resume-builder"})),s=o()(()=>Promise.all([r.e(906),r.e(589)]).then(r.bind(r,9589)),{loadableGenerated:{webpack:()=>[9589]},ssr:!1});var d=function(){let{layout:e,setLayout:t}=u();return(0,n.jsx)(s,{layout:e,setLayout:t})},c=function(){return(0,n.jsx)(d,{})}},5152:function(e,t,r){e.exports=r(5677)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,i=n.useEffect,l=n.useLayoutEffect,u=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),a=n[0].inst,d=n[1];return l(function(){a.value=r,a.getSnapshot=t,s(a)&&d({inst:a})},[e,r,t]),i(function(){return s(a)&&d({inst:a}),e(function(){s(a)&&d({inst:a})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),a=r(1688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useSyncExternalStore,l=n.useRef,u=n.useEffect,s=n.useMemo,d=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,a){var c=l(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=s(function(){function e(e){if(!u){if(u=!0,i=e,e=n(e),void 0!==a&&f.hasValue){var t=f.value;if(a(t,e))return l=t}return l=e}if(t=l,o(i,e))return t;var r=n(e);return void 0!==a&&a(t,r)?t:(i=e,l=r)}var i,l,u=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,n,a]);var h=i(e,c[0],c[1]);return u(function(){f.hasValue=!0,f.value=h},[h]),d(h),h}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)},4529:function(e,t,r){"use strict";r.d(t,{Ue:function(){return s}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=n?n:"object"!=typeof a)?a:Object.assign({},t,a),r.forEach(r=>r(t,e))}},a=()=>t,o=e=>(r.add(e),()=>r.delete(e)),i=()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()},l={setState:n,getState:a,subscribe:o,destroy:i};return t=e(n,a,l),l},a=e=>e?n(e):n;var o=r(7294),i=r(2798);let{useSyncExternalStoreWithSelector:l}=i,u=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?a(e):e,r=(e,r)=>(function(e,t=e.getState,r){let n=l(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,o.useDebugValue)(n),n})(t,e,r);return Object.assign(r,t),r},s=e=>e?u(e):u},782:function(e,t,r){"use strict";r.d(t,{tJ:function(){return l}});let n=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>n(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>n(t)(e)}}},a=(e,t)=>(r,a,o)=>{let i,l,u={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,d=new Set,c=new Set;try{i=u.getStorage()}catch(e){}if(!i)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),r(...e)},a,o);let f=n(u.serialize),h=()=>{let e;let t=u.partialize({...a()}),r=f({state:t,version:u.version}).then(e=>i.setItem(u.name,e)).catch(t=>{e=t});if(e)throw e;return r},m=o.setState;o.setState=(e,t)=>{m(e,t),h()};let p=e((...e)=>{r(...e),h()},a,o),g=()=>{var e;if(!i)return;s=!1,d.forEach(e=>e(a()));let t=(null==(e=u.onRehydrateStorage)?void 0:e.call(u,a()))||void 0;return n(i.getItem.bind(i))(u.name).then(e=>{if(e)return u.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===u.version)return e.state;if(u.migrate)return u.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(l=u.merge(e,null!=(t=a())?t:p),!0),h()}).then(()=>{null==t||t(l,void 0),s=!0,c.forEach(e=>e(l))}).catch(e=>{null==t||t(void 0,e)})};return o.persist={setOptions:e=>{u={...u,...e},e.getStorage&&(i=e.getStorage())},clearStorage:()=>{null==i||i.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(d.add(e),()=>{d.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),l||p},o=(e,t)=>(r,a,o)=>{let i,l={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let a=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(a):a(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},u=!1,s=new Set,d=new Set,c=l.storage;if(!c)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),r(...e)},a,o);let f=()=>{let e=l.partialize({...a()});return c.setItem(l.name,{state:e,version:l.version})},h=o.setState;o.setState=(e,t)=>{h(e,t),f()};let m=e((...e)=>{r(...e),f()},a,o),p=()=>{var e,t;if(!c)return;u=!1,s.forEach(e=>{var t;return e(null!=(t=a())?t:m)});let o=(null==(t=l.onRehydrateStorage)?void 0:t.call(l,null!=(e=a())?e:m))||void 0;return n(c.getItem.bind(c))(l.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===l.version)return e.state;if(l.migrate)return l.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(i=l.merge(e,null!=(t=a())?t:m),!0),f()}).then(()=>{null==o||o(i,void 0),i=a(),u=!0,d.forEach(e=>e(i))}).catch(e=>{null==o||o(void 0,e)})};return o.persist={setOptions:e=>{l={...l,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>p(),hasHydrated:()=>u,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},l.skipHydration||p(),i||m},i=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),a(e,t)):o(e,t),l=i}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);