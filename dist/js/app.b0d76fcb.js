(function(e){function t(t){for(var n,o,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4733ab8f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a4b05966"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:"",height:"100px"}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[e._v(" MAXIMUM ")])],1),r("v-spacer"),r("v-select",{attrs:{items:e.items,label:"Выберите курс","hide-details":""},model:{value:e.currentCourse,callback:function(t){e.currentCourse=t},expression:"currentCourse"}})],1),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("router-view")],1)],1)],1)},a=[],u=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("2fa7")),s=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"App",data:function(){return{currentCourse:""}},computed:i({},Object(s["c"])(["getCourses","getCurrentCourse"]),{items:function(){var e=[];return this.getCourses.forEach((function(t){e.push({text:t.name,value:t.id})})),e}}),methods:i({},Object(s["b"])(["fetchData","changeCurrentCourse"])),watch:{currentCourse:function(){this.changeCurrentCourse(this.currentCourse),"lessons"!==this.$router.currentRoute.name&&this.$router.push("/lessons")}},mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.fetchData("courses"),this.fetchData("lessons");case 2:case"end":return e.stop()}}),null,this)}},f=l,p=(r("5c0b"),r("2877")),d=r("6544"),h=r.n(d),b=r("7496"),m=r("40dc"),v=r("a523"),g=r("a75b"),y=r("b974"),C=r("2fa4"),w=Object(p["a"])(f,o,a,!1,null,null,null),O=w.exports;h()(w,{VApp:b["a"],VAppBar:m["a"],VContainer:v["a"],VContent:g["a"],VSelect:y["a"],VSpacer:C["a"]});var j=r("8c4f"),_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Главная страница "),n("br"),e._v(" платформы для онлайн курсов")]),n("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])}],P={name:"home"},E=P,D=(r("5af1"),Object(p["a"])(E,_,x,!1,null,"904a771e",null)),S=D.exports;n["a"].use(j["a"]);var k=[{path:"/",name:"home",component:S},{path:"/lessons",name:"lessons",component:function(){return r.e("about").then(r.bind(null,"4905"))}},{path:"/lesson/:id",name:"lesson",component:function(){return r.e("about").then(r.bind(null,"fa8f"))},children:[{path:"tests",component:function(){return r.e("about").then(r.bind(null,"751f"))}},{path:"statistics",component:function(){return r.e("about").then(r.bind(null,"fcd1"))}}]}],A=new j["a"]({routes:k}),T=A,L=(r("7db0"),{state:{courses:[],lessons:[],currentCourse:""},getters:{getCourses:function(e){return e.courses},getCurrentCourse:function(e){return e.currentCourse},getLessons:function(e){return e.lessons.filter((function(t){return t.courseId===e.currentCourse}))},getLessonById:function(e){return function(t){return e.lessons.find((function(e){return e.id===t}))}}},mutations:{updateData:function(e,t){e[t.field]=t.resData},updateCurrentCourse:function(e,t){e.currentCourse=t}},actions:{fetchData:function(e,t){var r,n,o;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(fetch("https://5daca7380af117001417072a.mockapi.io/api/v1/"+t));case 2:return r=a.sent,a.next=5,regeneratorRuntime.awrap(r.json());case 5:n=a.sent,o={field:t,resData:n},e.commit("updateData",o);case 8:case"end":return a.stop()}}))},changeCurrentCourse:function(e,t){e.commit("updateCurrentCourse",t)}}});n["a"].use(s["a"]);var M=new s["a"].Store({state:{},mutations:{},actions:{},modules:{courses:L}}),V=r("f309");n["a"].use(V["a"]);var $=new V["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:T,store:M,vuetify:$,render:function(e){return e(O)}}).$mount("#app")},"5af1":function(e,t,r){"use strict";var n=r("da38"),o=r.n(n);o.a},"5c0b":function(e,t,r){"use strict";var n=r("91cd"),o=r.n(n);o.a},"91cd":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},da38:function(e,t,r){}});
//# sourceMappingURL=app.b0d76fcb.js.map