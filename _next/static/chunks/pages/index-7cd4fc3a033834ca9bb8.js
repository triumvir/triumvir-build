(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7228:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e}},4575:function(e){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function r(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}e.exports=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}},5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},3884:function(e){e.exports=function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){a=!0,s=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw s}}return n}}},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},9489:function(e){function r(n,t){return e.exports=r=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},r(n,t)}e.exports=r},3038:function(e,r,n){var t=n(2858),a=n(3884),s=n(379),o=n(521);e.exports=function(e,r){return t(e)||a(e,r)||s(e,r)||o()}},8:function(e){function r(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(n)}e.exports=r},379:function(e,r,n){var t=n(7228);e.exports=function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}},6086:function(e){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},8391:function(e,r){"use strict";r.__esModule=!0,r.cancelIdleCallback=r.requestIdleCallback=void 0;var n="undefined"!==typeof self&&self.requestIdleCallback||function(e){var r=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})}),1)};r.requestIdleCallback=n;var t="undefined"!==typeof self&&self.cancelIdleCallback||function(e){return clearTimeout(e)};r.cancelIdleCallback=t},8340:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return J},default:function(){return Y}});var t=n(5893),a=n(9008),s=n(5675),o=n(9578),i=n(8829),c=n(4184),l=n.n(c),d=n(7294),u=n(6792),f=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.fluid,a=e.as,s=void 0===a?"div":a,c=e.className,f=(0,i.Z)(e,["bsPrefix","fluid","as","className"]),m=(0,u.vE)(n,"container"),v="string"===typeof t?"-"+t:"-fluid";return d.createElement(s,(0,o.Z)({ref:r},f,{className:l()(c,t?""+m+v:m)}))}));f.displayName="Container",f.defaultProps={fluid:!1};var m=f,v=["xl","lg","md","sm","xs"],h=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.className,a=e.noGutters,s=e.as,c=void 0===s?"div":s,f=(0,i.Z)(e,["bsPrefix","className","noGutters","as"]),m=(0,u.vE)(n,"row"),h=m+"-cols",x=[];return v.forEach((function(e){var r,n=f[e];delete f[e];var t="xs"!==e?"-"+e:"";null!=(r=null!=n&&"object"===typeof n?n.cols:n)&&x.push(""+h+t+"-"+r)})),d.createElement(c,(0,o.Z)({ref:r},f,{className:l().apply(void 0,[t,m,a&&"no-gutters"].concat(x))}))}));h.displayName="Row",h.defaultProps={noGutters:!1};var x=h,b=["xl","lg","md","sm","xs"],p=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.className,a=e.as,s=void 0===a?"div":a,c=(0,i.Z)(e,["bsPrefix","className","as"]),f=(0,u.vE)(n,"col"),m=[],v=[];return b.forEach((function(e){var r,n,t,a=c[e];if(delete c[e],"object"===typeof a&&null!=a){var s=a.span;r=void 0===s||s,n=a.offset,t=a.order}else r=a;var o="xs"!==e?"-"+e:"";r&&m.push(!0===r?""+f+o:""+f+o+"-"+r),null!=t&&v.push("order"+o+"-"+t),null!=n&&v.push("offset"+o+"-"+n)})),m.length||m.push(f),d.createElement(s,(0,o.Z)({},c,{ref:r,className:l().apply(void 0,[t].concat(m,v))}))}));p.displayName="Col";var y=p,j=n(4680),g=function(e){return d.forwardRef((function(r,n){return d.createElement("div",(0,o.Z)({},r,{ref:n,className:l()(r.className,e)}))}))},N=n(8154),w=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.className,a=e.variant,s=e.as,c=void 0===s?"img":s,f=(0,i.Z)(e,["bsPrefix","className","variant","as"]),m=(0,u.vE)(n,"card-img");return d.createElement(c,(0,o.Z)({ref:r,className:l()(a?m+"-"+a:m,t)},f))}));w.displayName="CardImg",w.defaultProps={variant:null};var E=w,Z=g("h5"),C=g("h6"),T=(0,j.Z)("card-body"),P=(0,j.Z)("card-title",{Component:Z}),S=(0,j.Z)("card-subtitle",{Component:C}),O=(0,j.Z)("card-link",{Component:"a"}),R=(0,j.Z)("card-text",{Component:"p"}),I=(0,j.Z)("card-header"),_=(0,j.Z)("card-footer"),k=(0,j.Z)("card-img-overlay"),B=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.className,a=e.bg,s=e.text,c=e.border,f=e.body,m=e.children,v=e.as,h=void 0===v?"div":v,x=(0,i.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=(0,u.vE)(n,"card"),p=(0,d.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return d.createElement(N.Z.Provider,{value:p},d.createElement(h,(0,o.Z)({ref:r},x,{className:l()(t,b,a&&"bg-"+a,s&&"text-"+s,c&&"border-"+c)}),f?d.createElement(T,null,m):m))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=E,B.Title=P,B.Subtitle=S,B.Body=T,B.Link=O,B.Text=R,B.Header=I,B.Footer=_,B.ImgOverlay=k;var A=B,K=n(5005),G=n(2629),M=n(5017),L=d.createContext(null);L.displayName="AccordionContext";var W=L;var D=d.forwardRef((function(e,r){var n=e.as,t=void 0===n?"button":n,a=e.children,s=e.eventKey,c=e.onClick,l=(0,i.Z)(e,["as","children","eventKey","onClick"]),u=function(e,r){var n=(0,d.useContext)(W),t=(0,d.useContext)(M.Z);return function(a){t&&t(e===n?null:e,a),r&&r(a)}}(s,c);return"button"===t&&(l.type="button"),d.createElement(t,(0,o.Z)({ref:r,onClick:u},l),a)})),H=n(1113),z=d.forwardRef((function(e,r){var n=e.children,t=e.eventKey,a=(0,i.Z)(e,["children","eventKey"]),s=(0,d.useContext)(W);return d.createElement(M.Z.Provider,{value:null},d.createElement(H.Z,(0,o.Z)({ref:r,in:s===t},a),d.createElement("div",null,d.Children.only(n))))}));z.displayName="AccordionCollapse";var F=z,U=d.forwardRef((function(e,r){var n=(0,G.Ch)(e,{activeKey:"onSelect"}),t=n.as,a=void 0===t?"div":t,s=n.activeKey,c=n.bsPrefix,f=n.children,m=n.className,v=n.onSelect,h=(0,i.Z)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),x=l()(m,(0,u.vE)(c,"accordion"));return d.createElement(W.Provider,{value:s||null},d.createElement(M.Z.Provider,{value:v||null},d.createElement(a,(0,o.Z)({ref:r},h,{className:x}),f)))}));U.displayName="Accordion",U.Toggle=D,U.Collapse=F;var V=U,q=d.forwardRef((function(e,r){var n=e.bsPrefix,t=e.size,a=e.toggle,s=e.vertical,c=e.className,f=e.as,m=void 0===f?"div":f,v=(0,i.Z)(e,["bsPrefix","size","toggle","vertical","className","as"]),h=(0,u.vE)(n,"btn-group"),x=h;return s&&(x=h+"-vertical"),d.createElement(m,(0,o.Z)({},v,{ref:r,className:l()(c,x,t&&h+"-"+t,a&&h+"-toggle")}))}));q.displayName="ButtonGroup",q.defaultProps={vertical:!1,toggle:!1,role:"group"};var X=q,J=!0;function Y(e){e.posts,e.schedules;return(0,t.jsxs)("html",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.default,{children:(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",integrity:"sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",crossorigin:"anonymous"})})}),(0,t.jsxs)("section",{children:[(0,t.jsxs)("div",{class:"container-fluid jumbotron-content",children:[(0,t.jsx)(s.default,{src:"/img/logo_flat.png",height:50,width:50}),(0,t.jsx)("h1",{class:"display-4 jumbo-header",children:"THE BEST WEB SERVICES IN ONTARIO"}),(0,t.jsx)("p",{children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."}),(0,t.jsx)("button",{type:"button",class:"btn btn-primary",children:"CONTACT US"}),(0,t.jsx)("button",{type:"button",class:"btn btn-secondary",children:"LEARN MORE"})]}),(0,t.jsx)("div",{class:"wave wave1"}),(0,t.jsx)("div",{class:"wave wave2"}),(0,t.jsx)("div",{class:"wave wave3"}),(0,t.jsx)("div",{class:"wave wave4"})]}),(0,t.jsx)(m,{children:(0,t.jsxs)(x,{className:"about-section",children:[(0,t.jsx)(y,{className:"about-headshot",sm:6,children:(0,t.jsx)(s.default,{src:"/img/about-headshots.png",height:300,width:300})}),(0,t.jsxs)(y,{sm:6,children:[(0,t.jsx)("h2",{class:"about-header",children:"EFFECTIVE SOLUTIONS FOR YOUR BUSINESS"}),(0,t.jsx)("p",{class:"about-content",children:"Triumvir is a cutting edge digital agency based in the Greater Toronto Area. With over a decade of combined experiences helping businesses thrive online, we are dedicated to providing innovative and effective solutions."}),(0,t.jsxs)("p",{class:"about-content",children:["Read more about our team ",(0,t.jsx)("i",{class:"fas fa-chevron-down"})]}),(0,t.jsx)(K.Z,{className:"about-btn",variant:"outline-primary",children:"READ MORE"})]})]})}),(0,t.jsxs)(m,{children:[(0,t.jsx)("h1",{class:"services-header",children:"SELECT A SERVICE TO LEARN MORE"}),(0,t.jsxs)(V,{children:[(0,t.jsx)("div",{class:"accordion-selector",children:(0,t.jsxs)(X,{children:[(0,t.jsxs)(V.Toggle,{className:"btn-secondary accordion-btn",as:K.Z,eventKey:"0",children:[(0,t.jsx)("p",{class:"accordion-btn-title",children:"Private Hosting"}),(0,t.jsx)("i",{class:"fas fa-arrow-circle-down"})]}),(0,t.jsxs)(V.Toggle,{className:"btn-secondary accordion-btn",as:K.Z,eventKey:"1",children:[(0,t.jsx)("p",{class:"accordion-btn-title",children:"Web Development"}),(0,t.jsx)("i",{class:"fas fa-arrow-circle-down"})]}),(0,t.jsxs)(V.Toggle,{className:"btn-secondary accordion-btn",as:K.Z,eventKey:"2",children:[(0,t.jsx)("p",{class:"accordion-btn-title",children:"SEO & Branding"}),(0,t.jsx)("i",{class:"fas fa-arrow-circle-down"})]})]})}),(0,t.jsxs)(x,{children:[(0,t.jsx)(V.Collapse,{className:"accordion-content",eventKey:"0",children:(0,t.jsx)(A.Body,{children:(0,t.jsx)(A,{children:(0,t.jsx)(A.Body,{className:"about-card-body",children:(0,t.jsxs)(x,{children:[(0,t.jsx)(y,{sm:4,children:(0,t.jsx)(A.Img,{src:"/img/web-dev.gif"})}),(0,t.jsxs)(y,{sm:8,children:[(0,t.jsx)(A.Title,{className:"about-card-title",children:"Private Hosting"}),(0,t.jsx)(A.Text,{className:"about-card-content",children:"With a 99.99% uptime guarantee and included monthly backup and security audit, our custom hosting solutions will provide the reliability you need to grow."}),(0,t.jsx)(K.Z,{variant:"primary",children:"Go somewhere"})]})]})})})})}),(0,t.jsx)(V.Collapse,{className:"accordion-content",eventKey:"1",children:(0,t.jsx)(A.Body,{children:(0,t.jsx)(A,{children:(0,t.jsx)(A.Body,{className:"about-card-body",children:(0,t.jsxs)(x,{children:[(0,t.jsx)(y,{sm:4,children:(0,t.jsx)(A.Img,{src:"/img/web-dev.gif"})}),(0,t.jsxs)(y,{sm:8,children:[(0,t.jsx)(A.Title,{className:"about-card-title",children:"Web Development"}),(0,t.jsx)(A.Text,{className:"about-card-content",children:"Experts in web design, we craft cutting-edge online experiences that will look great on any device."}),(0,t.jsx)(K.Z,{variant:"primary",children:"Go somewhere"})]})]})})})})}),(0,t.jsx)(V.Collapse,{className:"accordion-content",eventKey:"2",children:(0,t.jsx)(A.Body,{children:(0,t.jsx)(A,{children:(0,t.jsx)(A.Body,{className:"about-card-body",children:(0,t.jsxs)(x,{children:[(0,t.jsx)(y,{sm:4,children:(0,t.jsx)(A.Img,{src:"/img/web-dev.gif"})}),(0,t.jsxs)(y,{sm:8,children:[(0,t.jsx)(A.Title,{className:"about-card-title",children:"SEO & Branding"}),(0,t.jsx)(A.Text,{className:"about-card-content",children:"Brand assets, search engine optimization and marketing campaign management are among the selection of effective services we offer."}),(0,t.jsx)(K.Z,{variant:"primary",children:"Go somewhere"})]})]})})})})})]})]})]})]})}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8340)}])},9008:function(e,r,n){e.exports=n(7947)}},function(e){e.O(0,[774,675,438],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);