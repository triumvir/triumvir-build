(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{7228:function(t){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},4575:function(t){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},3913:function(t){function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},5318:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},3884:function(t){t.exports=function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(e.push(s.value),!n||e.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return e}}},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},9489:function(t){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},n(e,r)}t.exports=n},3038:function(t,n,e){var r=e(2858),o=e(3884),a=e(379),s=e(521);t.exports=function(t,n){return r(t)||o(t,n)||a(t,n)||s()}},8:function(t){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},379:function(t,n,e){var r=e(7228);t.exports=function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},6086:function(t){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},8391:function(t,n){"use strict";n.__esModule=!0,n.cancelIdleCallback=n.requestIdleCallback=void 0;var e="undefined"!==typeof self&&self.requestIdleCallback||function(t){var n=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)};n.requestIdleCallback=e;var r="undefined"!==typeof self&&self.cancelIdleCallback||function(t){return clearTimeout(t)};n.cancelIdleCallback=r},2533:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return s}});var r=e(5893),o=e(9008),a=e(5675);function s(t){var n=t.posts;return(0,r.jsxs)("html",{children:[(0,r.jsx)("div",{children:(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",crossorigin:"anonymous"}),(0,r.jsx)("link",{rel:"stylesheet",href:"../styles/Home.module.css"})]})}),(0,r.jsxs)("nav",{class:"navbar navbar-expand-md navbar-light fixed-top",children:[(0,r.jsx)("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{class:"navbar-toggler-icon"})}),(0,r.jsx)("a",{class:"navbar-brand",href:"/#",children:(0,r.jsx)(a.default,{id:"nav-logo",src:"/img/logo.jpg",width:50,height:50})}),(0,r.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{class:"nav navbar-nav mr-auto",children:[(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)("a",{class:"nav-link",href:"#about",children:"Links"})}),(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)("a",{class:"nav-link",href:"#contact",children:"Contact"})})]})})]}),(0,r.jsx)("div",{class:"jumbotron hero-image",children:(0,r.jsxs)("div",{class:"container hero-content",children:[(0,r.jsx)("h1",{class:"display-4",children:" Welcome to Heart of Ontario Snowmobile Club "}),(0,r.jsx)("p",{class:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),(0,r.jsxs)("p",{class:"lead",children:[(0,r.jsx)("a",{class:"btn btn-primary btn-lg hero-btn",href:"#",role:"button",children:"Learn more"}),(0,r.jsx)("a",{class:"btn btn-primary btn-lg hero-btn",href:"#",role:"button",children:"View Schedule"})]})]})}),(0,r.jsx)("div",{children:n&&n.map((function(t){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:t.title}),(0,r.jsx)("p",{children:t.content}),(0,r.jsx)(a.default,{src:"http://localhost:1337/uploads/large_12month_calendar_aafc74ae61.png",height:700,width:700}),(0,r.jsx)("button",{type:"button",class:"btn btn-dark",children:"Dark"})]},t.id)}))}),(0,r.jsx)("footer",{children:(0,r.jsx)("div",{class:"container",children:(0,r.jsxs)("div",{class:"row",children:[(0,r.jsxs)("div",{class:"foot-item col-md-6 col-sm-12",children:[(0,r.jsx)("a",{href:"https://www.google.com/maps/place/211+Laidlaw+St+S,+Cannington,+ON+L0E+1E0/@44.3434275,-79.0381341,17z/data=!3m1!4b1!4m5!3m4!1s0x89d55d69865af4a9:0x3826695c647920f7!8m2!3d44.3434275!4d-79.0359454",children:(0,r.jsx)("p",{children:"211 Laidlaw St S, Cannington, ON, L0E 1E0"})}),(0,r.jsx)("a",{href:"#contact",children:"info@heartofontario.ca"})]}),(0,r.jsx)("div",{class:"foot-item col-md-6 col-sm-12",children:(0,r.jsx)("p",{children:"Copyright Heart of Ontario Snowmobile Club 2021 All Rights Reserved"})})]})})})]})}},7200:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/links",function(){return e(2533)}])},9008:function(t,n,e){t.exports=e(7947)}},function(t){t.O(0,[774,675],(function(){return n=7200,t(t.s=n);var n}));var n=t.O();_N_E=n}]);