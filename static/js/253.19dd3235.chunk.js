"use strict";(self.webpackChunkmoviesSearcher_react=self.webpackChunkmoviesSearcher_react||[]).push([[253],{8093:function(n,r,t){t.d(r,{$w:function(){return d},Wf:function(){return l},Xj:function(){return f},YJ:function(){return p},_L:function(){return s}});var e=t(5861),a=t(7757),o=t.n(a),c=t(4569),u=t.n(c),i="e38ebe2f0be6ffcd2bd323ee6fa50d71";u().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,e.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day?api_key=".concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(r,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},6253:function(n,r,t){t.r(r),t.d(r,{default:function(){return j}});var e,a,o,c,u,i,s=t(885),p=t(8093),f=t(2791),d=t(501),l=t(6871),v=t(168),h=t(6031),x=h.ZP.input(e||(e=(0,v.Z)(["\n  border: 3px solid tomato;\n  border-radius: 4px;\n  padding: 5px;\n  color: #515151;\n  background-color: transparent;\n  font-size: 15px;\n"]))),m=h.ZP.button(a||(a=(0,v.Z)(["\n  padding: 5px;\n  margin-top: 5px;\n  color: #515151;\n  background-color: transparent;\n  font-size: 18px;\n  font-weight: 700;\n  margin-left: 10px;\n  border: 3px solid tomato;\n  border-radius: 4px;\n\n  &.active {\n    color: tomato;\n    border-color: #515151;\n  }\n  &:hover {\n    color: tomato;\n  }\n"]))),b=t(184),g=function(n){var r=n.onSearch,t=(0,f.useState)(""),e=(0,s.Z)(t,2),a=e[0],o=e[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault(),a.trim()&&(r(a),o(""))},children:[(0,b.jsx)(x,{type:"text",value:a,onChange:function(n){return o(n.target.value)}}),(0,b.jsx)(m,{type:"submit",children:"Search"})]})})},Z=h.ZP.section(o||(o=(0,v.Z)(["\n  width: 100%;\n  padding: 5px 0 40px;\n"]))),k=h.ZP.ul(c||(c=(0,v.Z)(["\n  border-top: 1px solid #515151;\n  margin-top: 5px;\n"]))),w=h.ZP.li(u||(u=(0,v.Z)(["\n  padding: 10px;\n  border-bottom: 1px solid #515151;\n"]))),y=(0,h.ZP)(d.OL)(i||(i=(0,v.Z)(["\n  color: tomato;\n  &:hover {\n    color: black;\n  }\n"]))),j=function(){var n=(0,f.useState)([]),r=(0,s.Z)(n,2),t=r[0],e=r[1],a=(0,d.lr)(),o=(0,s.Z)(a,2),c=o[0],u=o[1],i=(0,l.TH)();(0,f.useEffect)((function(){var n,r=null!==(n=c.get("query"))&&void 0!==n?n:"";r&&v(r)}),[]);var v=function(n){u({query:n}),(0,p.Wf)(n).then((function(n){return e(n.results)})).catch("Error")};return(0,b.jsxs)(Z,{children:[(0,b.jsx)(g,{onSearch:v}),t.length>0&&(0,b.jsx)(k,{children:t.map((function(n){var r=n.id,t=n.title;return(0,b.jsx)(w,{children:(0,b.jsx)(y,{to:"".concat(r),state:{from:i},children:t})},r)}))})]})}}}]);
//# sourceMappingURL=253.19dd3235.chunk.js.map