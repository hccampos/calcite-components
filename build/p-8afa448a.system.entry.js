var __awaiter=this&&this.__awaiter||function(e,t,i,n){function a(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function s(e){try{c(n.next(e))}catch(t){r(t)}}function o(e){try{c(n["throw"](e))}catch(t){r(t)}}function c(e){e.done?i(e.value):a(e.value).then(s,o)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,a,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,a&&(r=s[0]&2?a["return"]:s[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;if(a=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;a=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1];r=s;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(s);break}if(r[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(o){s=[6,o];a=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-09fe5ef6.system.js","./p-2c235db8.system.js","./p-1cc18601.system.js","./p-defdc464.system.js"],(function(e){"use strict";var t,i,n,a,r,s,o;return{setters:[function(e){t=e.r;i=e.c;n=e.h;a=e.g},function(e){r=e.g},function(e){s=e.f},function(e){o=e.h}],execute:function(){var c="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{overflow:hidden;display:inline-block;background-color:var(--calcite-ui-foreground-1);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);fill:var(--calcite-ui-background)}:host ::slotted(input){width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size)}:host(:hover) .check-svg,:host([hovered]) .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 0 1px var(--calcite-ui-brand);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host .focused .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:0.5;pointer-events:none}";var l=e("calcite_checkbox",function(){function e(e){var n=this;t(this,e);this.calciteCheckboxChange=i(this,"calciteCheckboxChange",7);this.calciteCheckboxFocusedChange=i(this,"calciteCheckboxFocusedChange",7);this.checked=false;this.disabled=false;this.hovered=false;this.indeterminate=false;this.name="";this.scale="m";this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";this.indeterminatePath="M13 8v1H3V8z";this.focused=false;this.getPath=function(){return n.indeterminate?n.indeterminatePath:n.checked?n.checkedPath:""};this.toggle=function(){if(!n.disabled){n.checked=!n.checked;s(n.input);n.indeterminate=false;n.calciteCheckboxChange.emit()}};this.formResetHandler=function(){n.checked=n.initialChecked};this.nativeLabelClickHandler=function(e){var t=e.target;if(!n.el.closest("calcite-label")&&t.nodeName==="LABEL"&&t.parentNode.nodeName!=="CALCITE-LABEL"&&n.el.id&&t.htmlFor===n.el.id){n.toggle()}}}e.prototype.checkedWatcher=function(e){this.input.checked=e};e.prototype.disabledChanged=function(e){this.input.disabled=e};e.prototype.nameChanged=function(e){this.input.name=e};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){s(this.input);return[2]}))}))};e.prototype.onClick=function(e){if(e.target===this.el){e.preventDefault()}this.toggle()};e.prototype.mouseenter=function(){this.hovered=true};e.prototype.mouseleave=function(){this.hovered=false};e.prototype.onInputBlur=function(){this.focused=false;this.calciteCheckboxFocusedChange.emit(false)};e.prototype.onInputFocus=function(){this.focused=true;this.calciteCheckboxFocusedChange.emit(true)};e.prototype.connectedCallback=function(){this.guid=this.el.id||"calcite-checkbox-"+r();this.initialChecked=this.checked;this.renderHiddenCheckboxInput();var e=this.el.closest("form");if(e){e.addEventListener("reset",this.formResetHandler)}document.addEventListener("click",this.nativeLabelClickHandler)};e.prototype.disconnectedCallback=function(){this.input.parentNode.removeChild(this.input);var e=this.el.closest("form");if(e){e.removeEventListener("reset",this.formResetHandler)}document.removeEventListener("click",this.nativeLabelClickHandler)};e.prototype.renderHiddenCheckboxInput=function(){this.input=document.createElement("input");this.checked&&this.input.setAttribute("checked","");this.input.disabled=this.disabled;this.input.id=this.guid+"-input";this.input.name=this.name;this.input.onblur=this.onInputBlur.bind(this);this.input.onfocus=this.onInputFocus.bind(this);this.input.style.cssText=o;this.input.type="checkbox";if(this.value){this.input.value=this.value!=null?this.value.toString():""}this.el.appendChild(this.input)};e.prototype.render=function(){return n("div",{class:{focused:this.focused}},n("svg",{class:"check-svg",viewBox:"0 0 16 16"},n("path",{d:this.getPath()})),n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedWatcher"],disabled:["disabledChanged"],name:["nameChanged"]}},enumerable:false,configurable:true});return e}());l.style=c}}}));