"use strict";(self.webpackChunkmoviesSearcher_react=self.webpackChunkmoviesSearcher_react||[]).push([[375],{8093:function(n,e,r){r.d(e,{$w:function(){return l},Wf:function(){return f},Xj:function(){return p},YJ:function(){return d},_L:function(){return u}});var t=r(5861),a=r(7757),o=r.n(a),i=r(4569),c=r.n(i),s="e38ebe2f0be6ffcd2bd323ee6fa50d71";c().defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1375:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,a,o,i,c,s,u,d,p,l,f,x,h,v=r(885),g=r(8093),m=r(2791),Z=r(6871),b=r(168),j=r(501),w=r(6031),y=w.ZP.section(t||(t=(0,b.Z)(["\n  width: 100%;\n  background-color: #e2e2e2;\n  padding: 32px 0 40px;\n"]))),k=(0,w.ZP)(j.OL)(a||(a=(0,b.Z)(["\n  padding: 10px;\n  color: #515151;\n  font-size: 18px;\n  font-weight: 700;\n  margin-left: 10px;\n  border: 3px solid tomato;\n  border-radius: 4px;\n\n  &.active {\n    color: tomato;\n    border-color: #515151;\n  }\n  &:hover {\n    color: tomato;\n  }\n"]))),P=w.ZP.div(o||(o=(0,b.Z)(["\n  height: 550px;\n  display: flex;\n  align-items: center;\n  background-color: tomato;\n  border-radius: 10px;\n"]))),_=w.ZP.img(i||(i=(0,b.Z)(["\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n"]))),L=w.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  margin-top: 25px;\n"]))),S=w.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-left: 20px;\n"]))),z=w.ZP.h2(u||(u=(0,b.Z)(["\n  color: #515151;\n  padding: 10px;\n"]))),O=w.ZP.h3(d||(d=(0,b.Z)(["\n  color: #515151;\n  padding: 10px;\n"]))),U=w.ZP.h3(p||(p=(0,b.Z)(["\n  display: flex;\n  color: #515151;\n  padding: 10px;\n"]))),C=w.ZP.p(l||(l=(0,b.Z)(["\n  display: flex;\n  color: #515151;\n  padding: 10px;\n"]))),W=(0,w.ZP)(j.OL)(f||(f=(0,b.Z)(["\n  padding: 12px;\n  color: #515151;\n  font-size: 18px;\n  font-weight: 700;\n  margin-left: 10px;\n  border: 3px solid tomato;\n  border-radius: 4px;\n\n  &.active {\n    color: tomato;\n    border-color: #515151;\n  }\n  &:hover {\n    color: tomato;\n  }\n"]))),A=w.ZP.ul(x||(x=(0,b.Z)(["\n  display: flex;\n"]))),E=w.ZP.li(h||(h=(0,b.Z)(["\n  display: flex;\n"]))),G=r(184),J=(0,m.lazy)((function(){return r.e(387).then(r.bind(r,3387))})),R=(0,m.lazy)((function(){return r.e(779).then(r.bind(r,9779))})),Y={title:"",poster_path:"",vote_average:"",overview:"",genres:[]},q=function(){var n,e,r=(0,Z.UO)().movieId,t=(0,m.useState)(Y),a=(0,v.Z)(t,2),o=a[0],i=a[1],c=(0,Z.TH)();if((0,m.useEffect)((function(){(0,g.YJ)(r).then(i).catch("Error")}),[r]),o){var s=o.title,u=o.poster_path,d=o.vote_average,p=o.overview,l=o.genres.map((function(n){return n.name})).join(", "),f=null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(y,{children:[(0,G.jsx)(k,{to:f,children:"Go to back"}),(0,G.jsxs)(L,{children:[(0,G.jsx)(P,{children:(0,G.jsx)(_,{src:"https://image.tmdb.org/t/p/w300".concat(u),alt:s})}),(0,G.jsxs)(S,{children:[(0,G.jsx)(z,{children:s}),(0,G.jsxs)(O,{children:["User score: ",d]}),(0,G.jsxs)(U,{children:["Overview: ",p]}),(0,G.jsxs)(C,{children:["Genres: ",l]}),(0,G.jsxs)(A,{children:[(0,G.jsx)(E,{children:(0,G.jsx)(W,{to:"cast",state:c.state,children:"Cast"})}),(0,G.jsx)(E,{children:(0,G.jsx)(W,{to:"reviews",state:c.state,children:"Reviews"})})]})]})]}),(0,G.jsx)(m.Suspense,{fallback:(0,G.jsx)("div",{children:"Loading page..."}),children:(0,G.jsxs)(Z.Z5,{children:[(0,G.jsx)(Z.AW,{path:"cast",element:(0,G.jsx)(J,{id:r})}),(0,G.jsx)(Z.AW,{path:"reviews",element:(0,G.jsx)(R,{id:r})})]})})]})})}}}}]);
//# sourceMappingURL=375.682e7998.chunk.js.map