System.register(["./p-a0957ef9.system.js","./p-b6e00050.system.js","./p-f46ce193.system.js"],(function(e){"use strict";var t,i,r,o,a,l,c;return{setters:[function(e){t=e.r;i=e.c;r=e.h;o=e.H;a=e.g},function(e){l=e.g},function(e){c=e.g}],execute:function(){var n={container:"container",header:"header",footer:"footer",title:"title",subtitle:"subtitle",thumbnailWrapper:"thumbnail-wrapper",checkboxWrapper:"checkbox-wrapper"};var s=":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 rgba(0, 0, 0, 0);box-shadow:0 0 0 rgba(0, 0, 0, 0)}:host .calcite-card-container:hover{-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);z-index:1}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue-1)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";var d=e("calcite_card",function(){function e(e){t(this,e);this.calciteCardSelect=i(this,"calciteCardSelect",7);this.loading=false;this.selected=false;this.selectable=false}e.prototype.render=function(){var e;var t=l(this.el);return r(o,{dir:t},r("div",{class:"calcite-card-container"},this.loading?r("div",{class:"calcite-card-loader-container"},r("calcite-loader",{active:true})):null,r("section",{class:(e={},e[n.container]=true,e),"aria-busy":this.loading},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),r("div",{class:"card-content"},r("slot",null)),this.renderFooter())))};e.prototype.cardSelectClick=function(){this.selectCard()};e.prototype.cardSelectKeyDown=function(e){switch(c(e.key)){case" ":case"Enter":this.selectCard();e.preventDefault();break}};e.prototype.selectCard=function(){this.selected=!this.selected;this.calciteCardSelect.emit()};e.prototype.renderThumbnail=function(){var e=this.el.querySelector("[slot="+"thumbnail"+"]");return e?r("div",{class:n.thumbnailWrapper},r("slot",{name:"thumbnail"})):null};e.prototype.renderCheckbox=function(){var e=this;return r("div",{class:n.checkboxWrapper,onClick:function(){return e.cardSelectClick()},onKeyDown:function(t){return e.cardSelectKeyDown(t)}},r("calcite-checkbox",{theme:this.theme,checked:this.selected}))};e.prototype.renderHeader=function(){var e=this.el.querySelector("[slot="+"title"+"]");var t=this.el.querySelector("[slot="+"subtitle"+"]");var i=e||t;return i?r("header",{class:n.header},r("slot",{name:"title"}),r("slot",{name:"subtitle"})):null};e.prototype.renderFooter=function(){var e=this.el.querySelector("[slot="+"footer-leading"+"]");var t=this.el.querySelector("[slot="+"footer-trailing"+"]");var i=e||t;return i?r("footer",{class:n.footer},r("slot",{name:"footer-leading"}),r("slot",{name:"footer-trailing"})):null};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());d.style=s}}}));