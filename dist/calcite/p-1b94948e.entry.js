import{r as e,h as t,H as o,g as i}from"./p-c1f86727.js";import{b as r}from"./p-9c90d370.js";import{g as s}from"./p-a6a32ff6.js";import{d as a,u as n,c}from"./p-301862ed.js";const l=class{constructor(t){e(this,t),this.offsetDistance=a,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid="calcite-tooltip-"+s(),this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{_referenceElement:e}=this;e&&(e.setAttribute("data-calcite-tooltip-reference",""),e.hasAttribute("aria-describedby")||e.setAttribute("aria-describedby",this.getId()))},this.removeReferences=()=>{const{_referenceElement:e}=this;e&&(e.removeAttribute("aria-describedby"),e.removeAttribute("data-calcite-tooltip-reference"))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?this.createPopper():this.destroyPopper()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.addReferences(),this.createPopper()}componentDidUnload(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:o}=this,i=this.getModifiers();e?n({el:t,modifiers:i,placement:o,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:o}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[o,t]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:o,_referenceElement:i}=this,r=this.getModifiers();this.popper=c({el:e,modifiers:r,open:t,placement:o,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{_referenceElement:e,open:i}=this;return t(o,{role:"tooltip","aria-hidden":e&&i?"false":"true",id:this.getId()},t("div",{class:"arrow",ref:e=>this.arrowEl=e}),t("div",{class:"container"},t("slot",null)))}get el(){return i(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};l.style=':host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground-1);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:0.8125rem;line-height:1.5}:host([theme=dark]) .container{background:var(--calcite-ui-foreground-2)}';const p=class{constructor(t){e(this,t),this.selector="[data-calcite-tooltip-reference]",this.toggle=(e,t=!0)=>{const o=e.target,{selector:i}=this,s=r(o.closest(i));s&&(s.open=t)}}render(){return t(o,null)}mouseEnterShow(e){this.toggle(e,!0)}mouseLeaveHide(e){this.toggle(e,!1)}focusShow(e){this.toggle(e,!0)}blurHide(e){this.toggle(e,!1)}};export{l as calcite_tooltip,p as calcite_tooltip_manager}