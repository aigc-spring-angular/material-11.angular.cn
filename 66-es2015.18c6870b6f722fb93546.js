(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"/SBQ":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var i=n("MMSt"),o=n("fXoL");let a=(()=>{class t{constructor(){this.isNextVersion=location.hostname.startsWith("next.material.angular.io"),this.version=i.a}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Sb({type:t,selectors:[["app-footer"]],decls:25,vars:4,consts:[[1,"docs-footer"],[1,"docs-footer-list"],[1,"docs-footer-logo"],[1,"footer-logo"],["src","../../../assets/img/homepage/angular-white-transparent.svg","alt","Angular icon",1,"docs-footer-angular-logo"],["translation-result",""],["href","https://angular.cn"],["translation-origin","off"],["href","https://angular.io"],[1,"docs-footer-version"],["src","../../../assets/img/angular-material-logo.svg","alt","Angular Material icon",1,"angular-material-logo"],["translation-result","",1,"version"],["translation-origin","off",1,"version"],[1,"docs-footer-copyright"],["href","https://github.com/angular/components/blob/master/LICENSE"]],template:function(t,e){1&t&&(o.ec(0,"footer",0),o.ec(1,"div",1),o.ec(2,"div",2),o.ec(3,"div",3),o.Zb(4,"img",4),o.ec(5,"span",5),o.ec(6,"a",6),o.Sc(7,"\u5b66\u4e60 Angular"),o.dc(),o.dc(),o.ec(8,"span",7),o.ec(9,"a",8),o.Sc(10,"Learn Angular"),o.dc(),o.dc(),o.dc(),o.dc(),o.ec(11,"div",9),o.Zb(12,"img",10),o.ec(13,"span",11),o.Sc(14),o.dc(),o.ec(15,"span",12),o.Sc(16),o.dc(),o.dc(),o.ec(17,"div",13),o.ec(18,"div"),o.ec(19,"span"),o.Sc(20,"Powered by Google \xa92010-2020."),o.dc(),o.ec(21,"a",14),o.Sc(22,"Code licensed under an MIT-style License."),o.dc(),o.ec(23,"span"),o.Sc(24,"Documentation licensed under CC BY 4.0."),o.dc(),o.dc(),o.dc(),o.dc(),o.dc()),2&t&&(o.Qb("is-next-version",e.isNextVersion),o.Mb(14),o.Uc("\u5f53\u524d\u7248\u672c\uff1a",e.version,""),o.Mb(2),o.Uc("Current Version: ",e.version,""))},styles:[".docs-footer[_ngcontent-%COMP%]{padding:12px;font-size:12px}.docs-footer-list[_ngcontent-%COMP%]{align-items:center;display:flex;flex-flow:row wrap;padding:8px}.docs-footer-logo[_ngcontent-%COMP%]{flex:1}.docs-footer-angular-logo[_ngcontent-%COMP%]{height:50px}.docs-footer-version[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex:1}.docs-footer-version[_ngcontent-%COMP%]   .angular-material-logo[_ngcontent-%COMP%]{height:40px;margin:10px 0 10px 16px}.docs-footer-version[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{margin:0 40px}.docs-footer-copyright[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end;flex-direction:column;min-width:225px;margin-top:16px}.docs-footer-copyright[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-end;text-align:center}@media (min-width:885px){.docs-footer-copyright[_ngcontent-%COMP%]{margin-top:0}}.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;line-height:50px;margin:0 40px;vertical-align:bottom}.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;padding:0}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (max-width:884px){.docs-footer-list[_ngcontent-%COMP%]{flex-direction:column}}"]}),t})(),r=(()=>{class t{}return t.\u0275mod=o.Wb({type:t}),t.\u0275inj=o.Vb({factory:function(e){return new(e||t)}}),t})()},"4h5w":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var i=n("fXoL"),o=n("TQAw");let a=0,r=(()=>{class t{constructor(t,e){this.el=t,this.navigationFocusService=e,this.tabindex="-1",this.outline="none",t.nativeElement.id||(t.nativeElement.id="skip-link-target-"+a++),this.navigationFocusService.requestFocusOnNavigation(t.nativeElement),this.navigationFocusService.requestSkipLinkFocus(t.nativeElement)}ngOnDestroy(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}}return t.\u0275fac=function(e){return new(e||t)(i.Yb(i.p),i.Yb(o.a))},t.\u0275dir=i.Tb({type:t,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(t,e){2&t&&(i.hc("tabindex",e.tabindex),i.Nc("outline",e.outline))}}),t})(),c=(()=>{class t{}return t.\u0275mod=i.Wb({type:t}),t.\u0275inj=i.Vb({factory:function(e){return new(e||t)}}),t})()},"5ztx":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL"),o=n("jhN1");let a=(()=>{class t{constructor(t){this.bodyTitle=t,this._title="",this._originalTitle="Angular Material UI component library",this._titleCn=""}get title(){return this._title}set title(t){this._title=t,""!==t?t+=" | Angular Material":t=this._originalTitle,this.updateTitle()}get titleCn(){return this._titleCn}set titleCn(t){this._titleCn=t,""!==t&&(t+=" | "),this.updateTitle()}updateTitle(){this.bodyTitle.setTitle(`${this.titleCn} ${this.title}`)}}return t.\u0275fac=function(e){return new(e||t)(i.ic(o.c))},t.\u0275prov=i.Ub({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Wp6s:function(t,e,n){"use strict";n.d(e,"a",function(){return f}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return p}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return v}),n.d(e,"f",function(){return h}),n.d(e,"g",function(){return b}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return m});var i=n("R1ws"),o=n("FKr1"),a=n("fXoL");const r=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"],s=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],d=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),g=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,e){2&t&&a.Qb("mat-card-actions-align-end","end"===e.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Tb({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),t})(),f=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(i.a,8))},t.\u0275cmp=a.Sb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&a.Qb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,e){1&t&&(a.uc(r),a.tc(0),a.tc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Sb({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:d,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(a.uc(s),a.tc(0),a.ec(1,"div",0),a.tc(2,1),a.dc(),a.tc(3,2))},encapsulation:2,changeDetection:0}),t})(),b=(()=>{class t{}return t.\u0275mod=a.Wb({type:t}),t.\u0275inj=a.Vb({factory:function(e){return new(e||t)},imports:[[o.j],o.j]}),t})()},Xm50:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL");const o=[{id:"getting-started",name:"Getting started",nameCn:"\u5feb\u901f\u4e0a\u624b",document:"/docs-content/guides/getting-started.html",overview:"Add Angular Material to your project!",overviewCn:"\u628a Angular Material \u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff01"},{id:"schematics",name:"Schematics",nameCn:"\u539f\u7406\u56fe",document:"/docs-content/guides/schematics.html",overview:"Use schematics to quickly generate views with Material Design components.",overviewCn:"\u4f7f\u7528\u539f\u7406\u56fe\u5feb\u901f\u751f\u6210\u5e26\u6709 Material Design \u7ec4\u4ef6\u7684\u89c6\u56fe\u3002"},{id:"theming",name:"Theming Angular Material",nameCn:"Angular Material \u4e3b\u9898",document:"/docs-content/guides/theming.html",overview:"Customize your application with Angular Material's theming system.",overviewCn:"\u4f7f\u7528 Angular Material \u7684\u4e3b\u9898\u4f53\u7cfb\u5b9a\u5236\u4f60\u7684\u5e94\u7528\u3002"},{id:"theming-your-components",name:"Theming your own components",nameCn:"\u4e3a\u4f60\u81ea\u5df1\u7684\u7ec4\u4ef6\u8bbe\u7f6e\u4e3b\u9898",document:"/docs-content/guides/theming-your-components.html",overview:"Use Angular Material's theming system in your own custom components.",overviewCn:"\u5728\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Angular Material \u7684\u4e3b\u9898\u4f53\u7cfb\u3002"},{id:"typography",name:"Customizing Typography",nameCn:"\u81ea\u5b9a\u4e49\u6392\u7248",document:"/docs-content/guides/typography.html",overview:"Configure the typography settings for Angular Material components.",overviewCn:"\u4e3a Angular Material \u7ec4\u4ef6\u914d\u7f6e\u6392\u7248\u8bbe\u7f6e\u3002"},{id:"customizing-component-styles",name:"Customizing component styles",nameCn:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6837\u5f0f",document:"/docs-content/guides/customizing-component-styles.html",overview:"Understand how to approach style customization with Angular Material components.",overviewCn:"\u4e86\u89e3\u5982\u4f55\u5b9a\u5236 Angular Material \u7ec4\u4ef6\u7684\u6837\u5f0f\u3002"},{id:"creating-a-custom-form-field-control",name:"Custom form field control",nameCn:"\u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6",document:"/docs-content/guides/creating-a-custom-form-field-control.html",overview:"Build a custom control that integrates with `<mat-form-field>`.",overviewCn:"\u6784\u5efa\u4e00\u4e2a\u53ef\u4ee5\u548c `<mat-form-field>` \u96c6\u6210\u7684\u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6\u3002"},{id:"elevation",name:"Elevation helpers",nameCn:"\u7eb5\u6df1\u52a9\u624b",document:"/docs-content/guides/elevation.html",overview:"Enhance your components with elevation and depth.",overviewCn:"\u5229\u7528\u7eb5\u6df1\u611f\u5f3a\u5316\u4f60\u7684\u7ec4\u4ef6\u3002"},{id:"creating-a-custom-stepper-using-the-cdk-stepper",name:"Custom stepper using the CdkStepper",nameCn:"\u4f7f\u7528 CdkStepper \u81ea\u5b9a\u4e49\u6b65\u8fdb\u5668",document:"/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html",overview:"Create a custom stepper components using Angular CDK.",overviewCn:"\u4f7f\u7528 Angular CDK \u521b\u5efa\u81ea\u5b9a\u4e49\u6b65\u8fdb\u5668\u7ec4\u4ef6\u3002"},{id:"using-component-harnesses",name:"Testing with component harnesses",nameCn:"\u4f7f\u7528\u7ec4\u4ef6\u6d4b\u8bd5\u5de5\u5177\u8fdb\u884c\u6d4b\u8bd5",document:"/docs-content/guides/using-component-harnesses.html",overview:"Write tests with component harnesses for convenience and meaningful results.",overviewCn:"\u4f7f\u7528\u7ec4\u4ef6\u6d4b\u8bd5\u5de5\u5177\u7f16\u5199\u6d4b\u8bd5\uff0c\u4ee5\u83b7\u5f97\u4fbf\u5229\u6027\uff0c\u5e76\u8f93\u51fa\u66f4\u6709\u610f\u4e49\u7684\u7ed3\u679c\u3002"}];let a=(()=>{class t{getAllItems(){return o}getItemById(t){return o.find(e=>e.id===t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Ub({token:t,factory:t.\u0275fac}),t})()},f0Cb:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var i=n("8LU1"),o=n("FKr1"),a=n("fXoL");let r=(()=>{class t{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(i.c)(t)}get inset(){return this._inset}set inset(t){this._inset=Object(i.c)(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Sb({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,e){2&t&&(a.Nb("aria-orientation",e.vertical?"vertical":"horizontal"),a.Qb("mat-divider-vertical",e.vertical)("mat-divider-horizontal",!e.vertical)("mat-divider-inset",e.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,e){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),t})(),c=(()=>{class t{}return t.\u0275mod=a.Wb({type:t}),t.\u0275inj=a.Vb({factory:function(e){return new(e||t)},imports:[[o.j],o.j]}),t})()},kpJg:function(t,e,n){"use strict";n.r(e),n.d(e,"Homepage",function(){return S}),n.d(e,"HomepageModule",function(){return k});var i=n("tBat"),o=n("bTqV"),a=n("/SBQ"),r=n("tyNb"),c=n("4h5w"),s=n("NFeN"),d=n("f0Cb"),l=n("Wp6s"),m=n("Xm50"),u=n("ofXK"),g=n("fXoL");let h=(()=>{class t{}return t.\u0275mod=g.Wb({type:t}),t.\u0275inj=g.Vb({factory:function(e){return new(e||t)},imports:[[u.c,s.b,o.c]]}),t})();var p=n("8W4w"),f=n("5ztx"),v=n("u47x");const b=["contentWrapper"];function x(t,e){if(1&t){const t=g.fc();g.ec(0,"button",5),g.lc("click",function(){return g.Gc(t),g.pc().previous()}),g.ec(1,"mat-icon"),g.Sc(2,"navigate_before"),g.dc(),g.dc()}}function w(t,e){if(1&t){const t=g.fc();g.ec(0,"button",6),g.lc("click",function(){return g.Gc(t),g.pc().next()}),g.ec(1,"mat-icon"),g.Sc(2,"navigate_next"),g.dc(),g.dc()}}const C=["*"];let M=(()=>{class t{constructor(t,e){this.carousel=t,this.element=e,this.role="listitem",this.width=this.carousel.itemWidth,this.tabindex="-1"}focus(){this.element.nativeElement.focus({preventScroll:!0})}}return t.\u0275fac=function(e){return new(e||t)(g.Yb(y),g.Yb(g.p))},t.\u0275dir=g.Tb({type:t,selectors:[["","carousel-item",""]],hostVars:4,hostBindings:function(t,e){2&t&&(g.hc("tabindex",e.tabindex),g.Nb("role",e.role),g.Nc("width",e.width,"px"))}}),t})(),y=(()=>{class t{constructor(t){this.element=t,this.position=0,this.showPrevArrow=!1,this.showNextArrow=!0,this._index=0}get index(){return this._index}set index(t){this._index=t,this.showPrevArrow=t>0,this.showNextArrow=t<this.items.length-this.visibleItems}onKeydown(t){switch(t.key){case"Tab":this.focusKeyManager.activeItem||(this.focusKeyManager.setFirstItemActive(),this._updateItemTabIndices());break;case"ArrowLeft":this.focusKeyManager.activeItemIndex===this.index&&this.previous(),this.focusKeyManager.setPreviousItemActive(),this._updateItemTabIndices();break;case"ArrowRight":this.focusKeyManager.activeItemIndex===this.index+this.visibleItems-1&&this.next(),this.focusKeyManager.setNextItemActive(),this._updateItemTabIndices()}}onResize(){this._resizeCarousel()}ngAfterContentInit(){this.focusKeyManager=new v.g(this.items),setTimeout(()=>{this.itemsArray=this.items.toArray(),this.shiftWidth=this.items.first.element.nativeElement.clientWidth,this._resizeCarousel()})}next(){this.showNextArrow&&this._shiftItems(1)}previous(){this.showPrevArrow&&this._shiftItems(-1)}_updateItemTabIndices(){this.items.forEach(t=>{t.tabindex=t===this.focusKeyManager.activeItem?"0":"-1"})}_shiftItems(t){this.index+=t,this.position+=t*this.shiftWidth,this.items.forEach(t=>{t.element.nativeElement.style.transform=`translateX(-${this.position}px)`})}_resizeCarousel(){const t=Math.max(1,Math.min(Math.floor(this.element.nativeElement.offsetWidth/this.shiftWidth),this.items.length));if(this.visibleItems!==t){if(this.visibleItems<t){const t=this.index-(this.items.length-this.visibleItems)+1;t>0&&this._shiftItems(-t)}else this.focusKeyManager.activeItemIndex&&this.focusKeyManager.activeItemIndex>this.index+t-1&&(this.focusKeyManager.setPreviousItemActive(),this._updateItemTabIndices());this.visibleItems=t,this.showNextArrow=this.index<this.items.length-this.visibleItems}this.wrapper.nativeElement.style.width=this.visibleItems*this.shiftWidth+"px"}}return t.\u0275fac=function(e){return new(e||t)(g.Yb(g.p))},t.\u0275cmp=g.Sb({type:t,selectors:[["app-carousel"]],contentQueries:function(t,e,n){if(1&t&&g.Rb(n,M,!1),2&t){let t;g.Bc(t=g.mc())&&(e.items=t)}},viewQuery:function(t,e){if(1&t&&g.Wc(b,!0),2&t){let t;g.Bc(t=g.mc())&&(e.wrapper=t.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],itemWidth:"itemWidth"},ngContentSelectors:C,decls:6,vars:4,consts:[["role","region",1,"docs-carousel-content-wrapper",3,"keyup","resize"],["contentWrapper",""],["aria-hidden","true","tabindex","-1","class","docs-carousel-nav docs-carousel-nav-prev","mat-mini-fab","","aria-label","previous",3,"click",4,"ngIf"],["role","list","tabindex","0",1,"docs-carousel-content"],["aria-hidden","true","tabindex","-1","class","docs-carousel-nav docs-carousel-nav-next","mat-mini-fab","","aria-label","next",3,"click",4,"ngIf"],["aria-hidden","true","tabindex","-1","mat-mini-fab","","aria-label","previous",1,"docs-carousel-nav","docs-carousel-nav-prev",3,"click"],["aria-hidden","true","tabindex","-1","mat-mini-fab","","aria-label","next",1,"docs-carousel-nav","docs-carousel-nav-next",3,"click"]],template:function(t,e){1&t&&(g.uc(),g.ec(0,"div",0,1),g.lc("keyup",function(t){return e.onKeydown(t)})("resize",function(){return e.onResize()},!1,g.Fc),g.Qc(2,x,3,0,"button",2),g.ec(3,"div",3),g.tc(4),g.dc(),g.Qc(5,w,3,0,"button",4),g.dc()),2&t&&(g.Nc("min-width",e.shiftWidth+"px"),g.Mb(2),g.vc("ngIf",e.showPrevArrow),g.Mb(3),g.vc("ngIf",e.showNextArrow))},directives:[u.t,o.b,s.a],styles:["app-carousel{display:flex;align-items:center;justify-content:center;margin:0 40px}.docs-carousel-content{display:flex;flex-direction:row;overflow:hidden;outline:none}.docs-carousel-content-wrapper{position:relative}[carousel-item]{flex-shrink:0;transition:transform .5s ease-in-out}.docs-carousel-nav{position:absolute;top:50%;transform:translateY(-50%)}.docs-carousel-nav-prev{left:-40px}.docs-carousel-nav-next{right:-40px}"],encapsulation:2}),t})();function _(t,e){if(1&t&&(g.ec(0,"a",19),g.ec(1,"div",20),g.Zb(2,"img",21),g.dc(),g.ec(3,"p"),g.Sc(4),g.ec(5,"small"),g.Sc(6),g.dc(),g.dc(),g.dc()),2&t){const t=e.$implicit;g.xc("routerLink","/components/",t.id,""),g.Mb(2),g.xc("src","../../../assets/screenshots/",t.id,".scene.png",g.Ic),g.Mb(2),g.Uc("",t.nameCn,"\xa0"),g.Mb(2),g.Tc(t.name)}}function P(t,e){if(1&t&&(g.ec(0,"a",22),g.ec(1,"mat-card",23),g.ec(2,"mat-card-title"),g.Sc(3),g.dc(),g.Zb(4,"div",24),g.ec(5,"mat-card-content",25),g.Sc(6),g.dc(),g.dc(),g.dc()),2&t){const t=e.$implicit;g.xc("routerLink","/guide/",t.id,""),g.Mb(3),g.Tc(t.nameCn),g.Mb(3),g.Uc(" ",t.overviewCn," ")}}const O=["datepicker","input","slide-toggle","slider","button"];let S=(()=>{class t{constructor(t,e){this._componentPageTitle=t,this.guideItems=e,this.isNextVersion=location.hostname.startsWith("next.material.angular.io")}ngOnInit(){this._componentPageTitle.title="",this._componentPageTitle.titleCn=""}getTopComponents(){return O.map(t=>p.a.components.find(e=>e.id===t))}}return t.\u0275fac=function(e){return new(e||t)(g.Yb(f.a),g.Yb(m.a))},t.\u0275cmp=g.Sb({type:t,selectors:[["app-homepage"]],decls:79,vars:8,consts:[["focusOnNavigation","","aria-label","Get started","id","homepage-header",1,"docs-header-background"],[1,"docs-header-section"],[1,"docs-header-headline"],[1,"mat-h1"],["translation-result",""],["translation-origin","off"],[1,"docs-header-start"],["translation-result","","mat-raised-button","","routerLink","/guide/getting-started",1,"docs-button"],["translation-origin","off","mat-raised-button","","routerLink","/guide/getting-started",1,"docs-button"],[1,"docs-homepage-promo"],[1,"docs-homepage-row","docs-introduction"],[1,"docs-homepage-row-column"],[1,"docs-homepage-featured-components","docs-homepage-carousel-row"],[3,"itemWidth","aria-label"],["carousel-item","","class","docs-featured-components-carousel-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/components",1,"docs-link"],[1,"docs-homepage-guides","docs-homepage-carousel-row"],["carousel-item","","class","docs-homepage-guides-carousel-item",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/guides",1,"docs-link"],["carousel-item","",1,"docs-featured-components-carousel-item",3,"routerLink"],[1,"docs-homepage-img-container"],["alt","","role","presentation",3,"src"],["carousel-item","",1,"docs-homepage-guides-carousel-item",3,"routerLink"],[1,"docs-homepage-guides-card"],[1,"docs-homepage-guides-card-divider"],[1,"docs-component-category-list-card-summary"]],template:function(t,e){1&t&&(g.ec(0,"header",0),g.ec(1,"div",1),g.ec(2,"div",2),g.ec(3,"h1",3),g.Sc(4,"Angular Material"),g.dc(),g.ec(5,"h2",4),g.Sc(6," Material Design \u7ec4\u4ef6\u5e93 for Angular"),g.dc(),g.ec(7,"h2",5),g.Sc(8," Material Design components for Angular"),g.dc(),g.dc(),g.ec(9,"div",6),g.ec(10,"a",7),g.Sc(11,"\u5feb\u901f\u4e0a\u624b"),g.dc(),g.ec(12,"a",8),g.Sc(13,"Get started"),g.dc(),g.dc(),g.dc(),g.dc(),g.ec(14,"main",9),g.ec(15,"div",10),g.ec(16,"div",11),g.ec(17,"h2",4),g.Sc(18,"\u9ad8\u8d28\u91cf"),g.dc(),g.ec(19,"h2",5),g.Sc(20,"High quality"),g.dc(),g.ec(21,"p",4),g.Sc(22,"\u652f\u6301\u56fd\u9645\u5316\u548c\u65e0\u969c\u788d\u6027\u7684\u7ec4\u4ef6\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u4eba\u8bbe\u8ba1\u3002\u6d4b\u8bd5\u5145\u5206\uff0c\u4fdd\u969c\u6027\u80fd\u548c\u53ef\u9760\u6027\u3002"),g.dc(),g.ec(23,"p",5),g.Sc(24," Internationalized and accessible components for everyone. Well tested to ensure performance and reliability. "),g.dc(),g.ec(25,"p",4),g.Sc(26,"\u76f4\u767d\u7684 API\uff0c\u5728\u5404\u4e2a\u5e73\u53f0\u4e0a\u5177\u6709\u4e00\u81f4\u7684\u884c\u4e3a\u3002"),g.dc(),g.ec(27,"p",5),g.Sc(28,"Straightforward APIs with consistent cross platform behaviour."),g.dc(),g.dc(),g.ec(29,"div",11),g.ec(30,"h2",4),g.Sc(31,"\u591a\u624d\u591a\u827a"),g.dc(),g.ec(32,"h2",5),g.Sc(33,"Versatile"),g.dc(),g.ec(34,"p",4),g.Sc(35,"\u60f3\u4fdd\u6301\u54c1\u724c\u98ce\u683c\uff1f\u559c\u6b22\u67d0\u79cd\u989c\u8272\uff1f\u6ca1\u95ee\u9898\uff01\u652f\u6301\u65e0\u969c\u788d\u6027\u53ca\u56fd\u9645\u5316\uff0c\u8fce\u63a5\u6240\u6709\u7528\u6237\u3002"),g.dc(),g.ec(36,"p",5),g.Sc(37," Provide tools that help developers build their own custom components with common interaction patterns. "),g.dc(),g.ec(38,"p",4),g.Sc(39,"\u53ef\u5728 Material Design \u89c4\u8303\u7684\u6846\u67b6\u5185\u8fdb\u884c\u5b9a\u5236\u3002"),g.dc(),g.ec(40,"p",5),g.Sc(41," Customizable within the bounds of the Material Design specification. "),g.dc(),g.dc(),g.ec(42,"div",11),g.ec(43,"h2",4),g.Sc(44,"\u65e0\u7f1d\u96c6\u6210"),g.dc(),g.ec(45,"h2",5),g.Sc(46,"Frictionless"),g.dc(),g.ec(47,"p",4),g.Sc(48,"\u7531 Angular \u56e2\u961f\u6784\u5efa\uff0c\u4e0e Angular \u65e0\u7f1d\u96c6\u6210"),g.dc(),g.ec(49,"p",5),g.Sc(50," Built by the Angular team to integrate seamlessly with Angular. "),g.dc(),g.ec(51,"p",4),g.Sc(52,"\u4ece\u8349\u7a3f\u9636\u6bb5\u5f00\u59cb\uff0c\u6216\u7a7a\u964d\u5230\u73b0\u6709\u5e94\u7528\u3002"),g.dc(),g.ec(53,"p",5),g.Sc(54," Start from scratch or drop into your existing applications. "),g.dc(),g.dc(),g.dc(),g.Zb(55,"mat-divider"),g.ec(56,"div",12),g.ec(57,"h2",4),g.Sc(58,"\u7279\u6027\u7ec4\u4ef6"),g.dc(),g.ec(59,"h2",5),g.Sc(60,"Featured components"),g.dc(),g.ec(61,"app-carousel",13),g.Qc(62,_,7,4,"a",14),g.dc(),g.ec(63,"a",15),g.Sc(64," \u67e5\u770b\u6240\u6709\u7ec4\u4ef6 "),g.ec(65,"mat-icon"),g.Sc(66,"chevron_right"),g.dc(),g.dc(),g.dc(),g.Zb(67,"mat-divider"),g.ec(68,"div",16),g.Zb(69,"h2",4),g.ec(70,"h2",5),g.Sc(71,"Guides"),g.dc(),g.ec(72,"app-carousel",13),g.Qc(73,P,7,3,"a",17),g.dc(),g.ec(74,"a",18),g.Sc(75," \u67e5\u770b\u6240\u6709\u6307\u5357 "),g.ec(76,"mat-icon"),g.Sc(77,"chevron_right"),g.dc(),g.dc(),g.dc(),g.dc(),g.Zb(78,"app-footer")),2&t&&(g.Qb("is-next-version",e.isNextVersion),g.Mb(61),g.vc("itemWidth",260)("aria-label","Featured components"),g.Mb(1),g.vc("ngForOf",e.getTopComponents()),g.Mb(10),g.vc("itemWidth",260)("aria-label","Guides"),g.Mb(1),g.vc("ngForOf",e.guideItems.getAllItems()))},directives:[c.a,o.a,r.e,d.a,y,u.s,s.a,a.a,M,l.a,l.i,l.d],styles:['.docs-header-background[_ngcontent-%COMP%]{overflow:hidden;position:relative;height:420px}.docs-header-background[_ngcontent-%COMP%]:before{content:"";position:absolute;background-image:url(angular-white-transparent.6504667372b77bd8f80e.svg);background-size:600px;top:0;bottom:0;left:0;right:0;background-repeat:no-repeat;background-position:80% 20px;opacity:.2}.docs-header-section[_ngcontent-%COMP%]{width:90%;position:absolute;z-index:0;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.docs-header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:56px;font-weight:700;line-height:56px;margin:15px 5px}.docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:300;line-height:28px;margin:15px 0 25px}.docs-homepage-promo[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;padding:16px}.docs-homepage-promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.docs-homepage-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;font-weight:400;margin:16px 0;padding:0}.docs-homepage-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:28px;margin:0 0 24px;padding:0}.docs-homepage-promo[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{width:75%}.docs-homepage-promo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.docs-homepage-row[_ngcontent-%COMP%]{width:75%;display:flex;flex-direction:row;margin:50px 0}.docs-homepage-carousel-row[_ngcontent-%COMP%]{margin:50px 0;width:75%;display:flex;flex-direction:column}.docs-homepage-carousel-row[_ngcontent-%COMP%]   a.docs-link[_ngcontent-%COMP%]{width:100%;text-align:right}.docs-homepage-carousel-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card-divider[_ngcontent-%COMP%]{width:30%;height:5px;margin:15px auto}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-carousel-item[_ngcontent-%COMP%]{padding:15px;display:flex;text-decoration:none}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card.mat-card[_ngcontent-%COMP%]{text-align:center}.docs-homepage-guides[_ngcontent-%COMP%]   .docs-homepage-guides-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{height:35%;display:flex;align-items:center;justify-content:center;font-size:20px}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]{padding:15px;text-align:center}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   .docs-homepage-img-container[_ngcontent-%COMP%]{overflow:hidden;width:259px;height:144px;margin-bottom:10px}.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.3s ease-in-out;width:100%}.docs-homepage-row-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 auto;width:30%}.docs-header-start[_ngcontent-%COMP%]{text-align:center;margin:50px 0 0}.docs-header-start[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{font-size:15px}@media (max-width:1200px){.docs-header-background[_ngcontent-%COMP%]{height:330px}.docs-header-background[_ngcontent-%COMP%]:before{background-image:none}}@media (max-width:850px){.docs-header-background[_ngcontent-%COMP%]:before{background-image:none}.docs-introduction[_ngcontent-%COMP%]{flex-direction:column}.docs-homepage-row-column[_ngcontent-%COMP%]{width:100%}}@media (max-width:720px){.docs-header-start[_ngcontent-%COMP%]{margin:15px 0 0}.docs-homepage-carousel-row[_ngcontent-%COMP%], .docs-homepage-row[_ngcontent-%COMP%]{margin:15px 0}}']}),t})();const A=[{path:"",component:S}];let k=(()=>{class t{}return t.\u0275mod=g.Wb({type:t}),t.\u0275inj=g.Vb({factory:function(e){return new(e||t)},providers:[m.a],imports:[[i.a,o.c,a.b,r.f.forChild(A),c.b,s.b,d.b,l.g,u.c,h]]}),t})()},tBat:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL");n("tk/3");let o=(()=>{class t{}return t.\u0275mod=i.Wb({type:t}),t.\u0275inj=i.Vb({factory:function(e){return new(e||t)}}),t})()}}]);