!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"1khm":function(n,c,o){"use strict";o.r(c),o.d(c,"CdkPortalExamplesModule",function(){return O}),o.d(c,"CdkPortalOverviewExample",function(){return p}),o.d(c,"ComponentPortalExample",function(){return s});var r=o("+rOU"),l=o("fXoL"),a=["templatePortalContent"],i=["domPortalContent"];function u(t,e){}function b(t,e){1&t&&Object(l.Sc)(0,"Hello, this is a template portal")}var p=function(){var n=function(){function n(e){t(this,n),this._viewContainerRef=e}var c,o,l;return c=n,(o=[{key:"ngAfterViewInit",value:function(){this.componentPortal=new r.d(s),this.templatePortal=new r.i(this.templatePortalContent,this._viewContainerRef),this.domPortal=new r.e(this.domPortalContent)}}])&&e(c.prototype,o),l&&e(c,l),n}();return n.\u0275fac=function(t){return new(t||n)(Object(l.Yb)(l.ab))},n.\u0275cmp=Object(l.Sb)({type:n,selectors:[["cdk-portal-overview-example"]],viewQuery:function(t,e){var n;(1&t&&(Object(l.Wc)(a,!0),Object(l.Wc)(i,!0)),2&t)&&(Object(l.Bc)(n=Object(l.mc)())&&(e.templatePortalContent=n.first),Object(l.Bc)(n=Object(l.mc)())&&(e.domPortalContent=n.first))},decls:15,vars:1,consts:[[1,"example-portal-outlet"],[3,"cdkPortalOutlet"],["templatePortalContent",""],[3,"click"],["domPortalContent",""]],template:function(t,e){1&t&&(Object(l.ec)(0,"h2"),Object(l.Sc)(1,"The portal outlet is below:"),Object(l.dc)(),Object(l.ec)(2,"div",0),Object(l.Qc)(3,u,0,0,"ng-template",1),Object(l.dc)(),Object(l.Qc)(4,b,1,0,"ng-template",null,2,l.Rc),Object(l.ec)(6,"button",3),Object(l.lc)("click",function(){return e.selectedPortal=e.componentPortal}),Object(l.Sc)(7,"Render component portal"),Object(l.dc)(),Object(l.ec)(8,"button",3),Object(l.lc)("click",function(){return e.selectedPortal=e.templatePortal}),Object(l.Sc)(9,"Render template portal"),Object(l.dc)(),Object(l.ec)(10,"button",3),Object(l.lc)("click",function(){return e.selectedPortal=e.domPortal}),Object(l.Sc)(11,"Render DOM portal"),Object(l.dc)(),Object(l.ec)(12,"div",null,4),Object(l.Sc)(14,"Hello, this is a DOM portal"),Object(l.dc)()),2&t&&(Object(l.Mb)(3),Object(l.vc)("cdkPortalOutlet",e.selectedPortal))},directives:[r.c],styles:[".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"]}),n}(),s=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(l.Sb)({type:e,selectors:[["component-portal-example"]],decls:1,vars:0,template:function(t,e){1&t&&Object(l.Sc)(0,"Hello, this is a component portal")},encapsulation:2}),e}(),O=function(){var e=function e(){t(this,e)};return e.\u0275mod=Object(l.Wb)({type:e}),e.\u0275inj=Object(l.Vb)({factory:function(t){return new(t||e)},imports:[[r.h]]}),e}()}}])}();