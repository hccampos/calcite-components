var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","calcite");var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=false;var c=e("w",typeof window!=="undefined"?window:{});var v=e("C",c.CSS);var d=e("d",c.document||{head:{}});var h=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var p=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var m=e("a",(function(e){return Promise.resolve(e)}));var g=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var y=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=w(e,n);var o=b(t,i);var l=N(n);h.ael(s,a,o,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return h.rel(s,a,o,l)}))}))}};var b=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(n){De(n)}}};var w=function(e,t){if(t&4)return d;if(t&8)return c;if(t&16)return d.body;return e};var N=function(e){return(e&2)!==0};var S="{visibility:hidden}[calcite-hydrated]{visibility:inherit}";var R="http://www.w3.org/1999/xlink";var _=function(e,t){if(t===void 0){t=""}{return function(){return}}};var x=function(e,t){{return function(){return}}};var k=new WeakMap;var C=function(e,t,r){var n=Je.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}Je.set(e,n)};var T=function(e,t,r,n){var a=L(t);var i=Je.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=k.get(e);var o=void 0;if(!s){k.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var j=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=_("attachStyles",t.$tagName$);var i=T(p&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var L=function(e,t){return"sc-"+e.$tagName$};var E={};var A="http://www.w3.org/2000/svg";var P="http://www.w3.org/1999/xhtml";var O=function(e){return e!=null};var I=function(e){e=typeof e;return e==="object"||e==="function"};var M=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!I(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?B(null,a):a)}l=o}}};$(r);if(t){if(t.key){i=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,q)}var c=B(e,null);c.$attrs$=t;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var B=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var U=e("H",{});var z=function(e){return e&&e.$tag$===U};var q={forEach:function(e,t){return e.map(H).forEach(t)},map:function(e,t){return e.map(H).map(t).map(V)}};var H=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var V=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return M.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=B(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var W=function(e,t,r,n,a,i){if(r!==n){var s=We(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var f=F(r);var $=F(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(We(c,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var v=I(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(m){}}var p=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){t=o;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(p){e.removeAttributeNS(R,t)}else{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!v){n=n===true?"":n;if(p){e.setAttributeNS(R,t,n)}else{e.setAttribute(t,n)}}}}};var D=/\s/;var F=function(e){return!e?[]:e.split(D)};var G=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||E;var s=t.$attrs$||E;{for(n in i){if(!(n in s)){W(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){W(a,n,i[n],s[n],r,t.$flags$)}};var J=function(e,t,r,n){var l=t.$children$[r];var u=0;var c;var v;var h;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=d.createTextNode("")}else{if(!$){$=l.$tag$==="svg"}c=l.$elm$=d.createElementNS($?A:P,l.$flags$&2?"slot-fb":l.$tag$);if($&&l.$tag$==="foreignObject"){$=false}{G(null,l,$)}if(O(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=J(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===l.$tag$&&e.$elm$){K(e.$elm$,false)}}}return c};var K=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==s&&a["s-ol"]){te(a).insertBefore(a,ee(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(t){K(a,t)}}h.$flags$&=~1};var Q=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=J(null,r,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,ee(t))}}}};var X=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;oe(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{K(a,true)}}a.remove()}}};var Y=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var $=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=t[++a]}else if($==null){$=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(Z(f,c)){re(f,c);f=t[++a];c=n[++i]}else if(Z($,v)){re($,v);$=t[--l];v=n[--u]}else if(Z(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){K(f.$elm$.parentNode,false)}re(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];v=n[--u]}else if(Z($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){K($.$elm$.parentNode,false)}re($,c);e.insertBefore($.$elm$,f.$elm$);$=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&t[o].$key$!==null&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=J(t&&t[i],r,s,e)}else{re(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=J(t&&t[i],r,i,e);c=n[++i]}if(d){{te(f.$elm$).insertBefore(d,ee(f.$elm$))}}}}if(a>l){Q(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){X(t,a,l)}};var Z=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var ee=function(e){return e&&e["s-ol"]||e};var te=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var re=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var o;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{G(e,t,$)}}if(n!==null&&a!==null){Y(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Q(r,null,t,a,0,a.length-1)}else if(n!==null){X(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=r["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var ne=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var o;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){o=t[i].nodeType;if(t[i]["s-hn"]!==r["s-hn"]||s!==""){if(o===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}ne(r)}}};var ae=[];var ie=function(e){var t;var r;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){t=f[o];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(se(r,a)){i=ae.find((function(e){return e.$nodeToRelocate$===r}));l=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{ae.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){ae.map((function(e){if(se(e.$nodeToRelocate$,r["s-sn"])){i=ae.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ae.some((function(e){return e.$nodeToRelocate$===r}))){ae.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){ie(t)}}};var se=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var oe=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(oe)}};var le=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||B(null,null);var u=z(t)?t:M(null,null,t);s=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];o=p&&(n.$flags$&1)!==0;l=false}re($,u);{h.$flags$|=1;if(f){ie(u.$elm$);var c=void 0;var v=void 0;var m=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){m=d.createTextNode("");m["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=m,v)}}for(w=0;w<ae.length;w++){c=ae[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;m=v["s-ol"];while(m=m.previousSibling){b=m["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){ne(u.$elm$)}h.$flags$&=~1;ae.length=0}};var fe=e("g",(function(e){return qe(e).$hostElement$}));var $e=e("c",(function(e,t,r){var n=fe(e);return{emit:function(e){return ue(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ue=function(e,t,r){var n=h.ce(t,r);e.dispatchEvent(n);return n};var ce=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ve=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ce(e,e.$ancestorComponent$);var r=function(){return de(e,t)};return tt(r)};var de=function(e,t){var r=_("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return be(n,t,r)}));e.$queuedListeners$=null}}{a=be(n,"componentWillLoad")}}{a=we(a,(function(){return be(n,"componentWillRender")}))}r();return we(a,(function(){return he(e,n,t)}))};var he=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,s,o,l;return __generator(this,(function(f){r=e.$hostElement$;a=_("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){j(e)}s=_("render",e.$cmpMeta$.$tagName$);{pe(e,t)}if(h.$cssShim$){h.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{o=r["s-p"];l=function(){return me(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}return[2]}))}))};var pe=function(e,t,r){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{le(e,t)}}}}catch(n){De(n,e.$hostElement$)}return null};var me=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=_("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{be(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{Ne(r)}{be(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){ye()}}}else{{be(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){et((function(){return ve(e,false)}))}e.$flags$&=~(4|512)}};var ge=e("f",(function(e){{var t=qe(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){ve(t,false)}return r}}));var ye=function(e){{Ne(d.documentElement)}et((function(){return ue(c,"appload",{detail:{namespace:n}})}))};var be=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){De(n)}}return undefined};var we=function(e,t){return e&&e.then?e.then(t):t()};var Ne=function(e){return e.setAttribute("calcite-hydrated","")};var Se=function(e,t){if(e!=null&&!I(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Re=function(e,t){return qe(e).$instanceValues$.get(t)};var _e=function(e,t,r,n){var a=qe(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=Se(r,n.$members$[t][0]);if((!(o&8)||s===undefined)&&r!==s){a.$instanceValues$.set(t,r);if(l){if(n.$watchers$&&o&128){var f=n.$watchers$[t];if(f){f.map((function(e){try{l[e](r,s,t)}catch(n){De(n,i)}}))}}if((o&(2|16))===2){if(l.componentShouldUpdate){if(l.componentShouldUpdate(r,s,t)===false){return}}ve(a,false)}}}};var xe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Re(this,n)},set:function(e){_e(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=qe(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ke=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ge(a);if(!s.then)return[3,2];e=x();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}xe(s,a,2);s.isProxied=true}r=_("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){De(c)}{n.$flags$&=~8}{n.$flags$|=128}r();Ce(n.$lazyInstance$);if(!s.style)return[3,5];i=s.style;o=L(a);if(!!Je.has(o))return[3,5];l=_("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-7833089b.system.js").then((function(e){return e.scopeCss(i,o,false)}))];case 3:i=u.sent();u.label=4;case 4:C(o,i,!!(a.$flags$&1));l();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return ve(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Ce=function(e){{be(e,"connectedCallback")}};var Te=function(e){if((h.$flags$&1)===0){var t=qe(e);var r=t.$cmpMeta$;var n=_("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(r.$flags$&(4|8)){je(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ce(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{ke(e,t,r)}}else{y(e,t,r.$listeners$);Ce(t.$lazyInstance$)}n()}};var je=function(e){var t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Le=function(e){if((h.$flags$&1)===0){var t=qe(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{be(r,"disconnectedCallback")}}};var Ee=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var t=e["s-sn"]=Pe(e);var r=Oe(this.childNodes,t);if(r){var n=Ie(r,t);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var Ae=function(e,t){var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((h.$flags$&1)===0&&qe(this).$flags$&2){var t=new r;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){t.push(i)}}return t}return r.from(e)}})}};var Pe=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var Oe=function(e,t){var r=0;var n;for(;r<e.length;r++){n=e[r];if(n["s-sr"]&&n["s-sn"]===t){return n}n=Oe(n.childNodes,t);if(n){return n}}return null};var Ie=function(e,t){var r=[e];while((e=e.nextSibling)&&e["s-sn"]===t){r.push(e)}return r};var Me=e("b",(function(e,t){if(t===void 0){t={}}var r=_();var n=[];var a=t.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!p&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Ve(t,r);if(r.$flags$&1){if(p){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}{Ae(t,r)}return n}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return Te(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Le(e)}))};t.prototype.componentOnReady=function(){return qe(this).$onReadyPromise$};return t}(HTMLElement);{Ee(o.prototype)}r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,xe(o,r,1))}}))}));{l.innerHTML=n+S;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(ye,30)}))}}r()}));var Be=e("e",(function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==c.location.origin?t.href:t.pathname}));var Ue=e("F",(function(e,t){return t}));var ze=new WeakMap;var qe=function(e){return ze.get(e)};var He=e("r",(function(e,t){return ze.set(t.$lazyInstance$=e,t)}));var Ve=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,r,t.$listeners$);return ze.set(e,r)};var We=function(e,t){return t in e};var De=function(e,t){return(0,console.error)(e,t)};var Fe=new Map;var Ge=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Fe.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{Fe.set(i,e)}return e[a]}),De)};var Je=new Map;var Ke=[];var Qe=[];var Xe=function(e,t){return function(r){e.push(r);if(!u){u=true;if(t&&h.$flags$&4){et(Ze)}else{h.raf(Ze)}}}};var Ye=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){De(r)}}e.length=0};var Ze=function(){Ye(Ke);{Ye(Qe);if(u=Ke.length>0){h.raf(Ze)}}};var et=function(e){return m().then(e)};var tt=Xe(Qe,true)}}}));