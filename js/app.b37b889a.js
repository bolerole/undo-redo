(function(t){function e(e){for(var s,i,a=e[0],u=e[1],c=e[2],l=0,d=[];l<a.length;l++)i=a[l],r[i]&&d.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/undo-redo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("c21b"),r=n.n(s);r.a},"18ac":function(t,e,n){"use strict";var s=n("e7e1"),r=n.n(s);r.a},3616:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("c5f6"),n("04ff"),n("6762"),n("2fdb"),n("cadf"),n("551c"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("Controller",{attrs:{rect:t.rect},on:{transformed:t.onTransformed,record:t.record}}),n("div",{staticClass:"side-panel absolute"},[n("Info",{attrs:{rect:t.rect},on:{transformed:t.onTransformed,record:t.record}}),n("History",{attrs:{history:t.history},on:{command:t.execute,cursor:t.moveCursor}})],1),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ctrl-guide"},[n("p",[t._v("Mousedown any control points to resize or rotate.")]),n("p",[t._v("To resize with fixed ratio, hold "),n("kbd",[t._v("Shift")]),t._v(" key.")]),n("p",[n("a",{attrs:{href:"https://github.com/ioslh/undo-redo",target:"_blank"}},[t._v("https://github.com/ioslh/undo-redo")])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controller"},[n("div",{staticClass:"absolute internal",style:t.internalStyle,on:{mousedown:function(e){e.stopPropagation(),t.onMouseDown(e,"move")}}},[t.showHandlers?t._l(t.handlers,function(e){return n("i",{key:e,staticClass:"handler absolute",class:"rotate"===e?e:e.split(""),on:{mousedown:function(n){n.stopPropagation(),t.onMouseDown(n,e)}}})}):t._e()],2),n("div",{staticClass:"absolute external"}),t.showResizeGuide?n("div",{staticClass:"absolute resize-guide",style:t.resizeGuideStyle}):t._e(),t.showRotateGuide?n("div",{staticClass:"absolute rotate-guide",style:t.rotateGuideStyle}):t._e()])},a=[],u=n("9393"),c=function(t){return JSON.parse(JSON.stringify(t))},h=n("1f5d"),l=n.n(h),d=["rotate","lt","ct","rt","lm","rm","lb","cb","rb"],f={props:{rect:Object},data:function(){return{handlers:d,adjustType:null,isAdjusting:!1,fixedRatio:!1,bodyCursor:"auto"}},watch:{bodyCursor:function(){document.body.style.cursor=this.bodyCursor}},computed:{bounds:function(){return Object(h["computeEndPoints"])(this.rect)},showRotateGuide:function(){return"rotate"===this.adjustType},rotateGuideStyle:function(){if(!this.showRotateGuide)return{};var t=this.bounds,e=t.center,n=t.lt,s=t.rb,r=e.x,o=e.y,i=Object(h["pointsDistance"])(n,s);return{left:"".concat(r-i/2,"px"),top:"".concat(o-i/2,"px"),width:"".concat(i,"px"),height:"".concat(i,"px")}},showResizeGuide:function(){return this.fixedRatio&&this.adjustType&&"rotate"!==this.adjustType},resizeGuideStyle:function(){if(!this.showResizeGuide)return{};var t,e,n=this.adjustType,s=this.bounds;if("lt"===n||"rb"===n){var r=[s.lt,s.rb];t=r[0],e=r[1]}else if("rt"===n||"lb"===n){var o=[s.rt,s.lb];t=o[0],e=o[1]}else if("cb"===n||"ct"===n){var i=[s.cb,s.ct];t=i[0],e=i[1]}else{var a=[s.lm,s.rm];t=a[0],e=a[1]}var u=2e3,c=Object(h["centerPoint"])(t,e),l=Object(h["lineDegrees"])(t,e);return{left:"".concat(c.x,"px"),top:"".concat(c.y-u/2,"px"),height:"".concat(u,"px"),transform:"rotate(".concat(l,"deg)")}},internalStyle:function(){var t=this.rect,e=t.x,n=t.y,s=t.w,r=t.h,o=t.r,i=t.animation,a={left:"".concat(e,"px"),top:"".concat(n,"px"),width:"".concat(s,"px"),height:"".concat(r,"px"),transform:"rotate(".concat(o,"deg)")};return a["transition"]=i?"all .5s":"none",a},showHandlers:function(){return!this.isAdjusting||"move"!==this.adjustType}},methods:{computeMousePosition:function(t){var e=t.pageX,n=t.pageY;return{x:e,y:n}},onMouseDown:function(t,e){this.adjustType=t.metaKey?"rotate":e,this.mouseStart=this.computeMousePosition(t),this.rectStart=c(this.rect),this.fixedRatio=t.shiftKey,document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)},onMouseMove:function(t){var e=this;this.mouseEnd=this.computeMousePosition(t);var n=["x","y"].map(function(t){return Math.abs(e.mouseEnd[t]-e.mouseStart[t])}),s=Object(u["a"])(n,2),r=s[0],o=s[1];if(r>2||o>2){this.isAdjusting=!0,this.setDocumentCursor(this.mouseEnd);var i=l()(this.adjustType,this.mouseStart,this.mouseEnd,this.rectStart,this.fixedRatio);this.$emit("transformed",i)}},onMouseUp:function(){this.adjustType=null,this.bodyCursor="auto",this.$emit("record"),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)},setDocumentCursor:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("move"===this.adjustType)return this.bodyCursor="move";if("rotate"===this.adjustType)return this.bodyCursor="-webkit-grab";var n=this.bounds.center,s={x:(t.x||0)-n.x,y:(t.y||0)-n.y},r=Object(h["angleDegrees"])(s),o=e?10:0;switch(!0){case r<=-180+o:return this.bodyCursor="ew-resize";case r<-90-o:return this.bodyCursor="nwse-resize";case r<=-90+o:return this.bodyCursor="ns-resize";case r<0-o:return this.bodyCursor="nesw-resize";case r<=0+o:return this.bodyCursor="ew-resize";case r<90-o:return this.bodyCursor="nwse-resize";case r<=90+o:return this.bodyCursor="ns-resize";case r<180-o:return this.bodyCursor="nesw-resize";case r<=180+o:return this.bodyCursor="ew-resize"}},preventDrag:function(t){t.stopPropagation(),t.preventDefault()}},mounted:function(){document.addEventListener("drag",this.preventDrag),document.addEventListener("dragstart",this.preventDrag)},beforeDestroy:function(){document.removeEventListener("drag",this.preventDrag),document.removeEventListener("dragstart",this.preventDrag)}},p=f,v=(n("18ac"),n("2877")),y=Object(v["a"])(p,i,a,!1,null,"1a42136c",null);y.options.__file="Controller.vue";var m=y.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history"},[n("h4",[t._v("History")]),n("div",{staticClass:"actions"},[n("div",{staticClass:"action undo",class:{valid:t.history.canUndo},on:{click:function(e){t.execute("undo")}}},[t._v("Undo")]),n("div",{staticClass:"action redo",class:{valid:t.history.canRedo},on:{click:function(e){t.execute("redo")}}},[t._v("Redo")]),n("div",{staticClass:"action clear",class:{valid:t.history.canClear},on:{click:function(e){t.execute("clear")}}},[t._v("Clear")])]),t.displaySnapshots.length?n("transition-group",{attrs:{name:"flip-list",tag:"ul"}},[n("li",{key:"special-newest",staticClass:"special"},[t._v("NEWEST")]),t._l(t.displaySnapshots,function(e){return n("li",{key:e.snapshot.uuid,class:{current:e.index===t.history.cursor},on:{click:function(n){t.moveCursor(e.index)}}},t._l(t.keys,function(s){return n("div",{key:s,staticClass:"key"},[n("div",{staticClass:"result"},[t._v(t._s(t._f("numberBeautify")(e.snapshot[s])))]),n("div",{staticClass:"tag"},[t._v(t._s(s.toUpperCase()))])])}))}),n("li",{key:"special-oldest",staticClass:"special"},[t._v("OLDEST")])],2):n("div",{staticClass:"empty"},[t._v("empty snapshots")])],1)},g=[],_={props:{history:Object},computed:{displaySnapshots:function(){return this.history.snapshots.map(function(t,e){return{snapshot:t,index:e}}).reverse()}},data:function(){return{keys:["x","y","w","h","r"],snapshot:{x:0,y:0,w:0,h:0,r:0}}},methods:{execute:function(t){this.$emit("command",t)},moveCursor:function(t){this.$emit("cursor",t)}}},x=_,C=(n("6ece"),Object(v["a"])(x,b,g,!1,null,"0bfb47b6",null));C.options.__file="History.vue";var w=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h4",[t._v("Rectangle")]),n("ul",t._l(t.displayKeys,function(e){return n("li",{key:e},[n("label",[t._v(t._s(e.toUpperCase()))]),n("div",{class:e},[n("input",{attrs:{type:"number"},domProps:{value:t._f("numberBeautify")(t.rect[e])},on:{change:function(n){t.onValueChange(e,n)},input:function(n){t.onValueChange(e,n)}}})])])}))])},k=[],O=n("a322"),S=(n("ac6a"),n("456d"),n("133d")),T={props:{rect:Object},computed:{displayKeys:function(){var t=this.rect,e=(t.animation,Object(S["a"])(t,["animation"]));return Object.keys(e)}},methods:{onValueChange:function(t,e){var n=this,s=Number(e.target.value);s="r"===t?s>180?180:s<-180?-180:s:s<0?0:s,this.$emit("transformed",Object(O["a"])({},t,s)),this.$nextTick(function(){n.$emit("record")})}}},E=T,M=(n("b5c1"),Object(v["a"])(E,j,k,!1,null,"29fc4e25",null));M.options.__file="Info.vue";var z=M.exports,D=(n("7514"),n("6bde")),R=n("c665"),P=n("aa9a"),$=function(){return"".concat(+new Date).concat(Math.random())},G=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;Object(R["a"])(this,t),this.maxSnapshots=e,this.snapshots=[],this.cursor=-1}return Object(P["a"])(t,[{key:"record",value:function(t){if(this.checkRepeat(t))return!1;while(this.cursor<this.snapshots.length-1)this.snapshots.pop();t.uuid=$(),this.snapshots.push(t),this.snapshots.length>this.maxSnapshots&&this.snapshots.shift(),this.cursor=this.snapshots.length-1}},{key:"undo",value:function(){return this.canUndo?(this.cursor-=1,this.snapshots[this.cursor]):null}},{key:"redo",value:function(){return this.canRedo?(this.cursor+=1,this.snapshots[this.cursor]):null}},{key:"move",value:function(t){if(this.snapshots.length>t)return this.cursor=t,this.snapshots[this.cursor]}},{key:"clear",value:function(){this.cursor=-1,this.snapshots=[]}},{key:"checkRepeat",value:function(t){var e,n=t;if(e=this.cursor>=0?this.snapshots[this.cursor]:"","object"!==Object(D["a"])(e)||"object"!==Object(D["a"])(n))return!1;var s=!1;return["x","y","w","h","r"].find(function(t){return s=e[t]!==n[t],s}),!s}},{key:"canUndo",get:function(){return this.cursor>0}},{key:"canClear",get:function(){return this.snapshots.length}},{key:"canRedo",get:function(){return this.snapshots.length>this.cursor+1}}]),t}(),L=G,U={name:"app",components:{Controller:m,History:w,Info:z},data:function(){return{history:new L(20),rect:{x:100,y:100,w:100,h:100,r:0,animation:!1}}},mounted:function(){this.record()},methods:{onTransformed:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},s=["x","y","w","h","r"];s.forEach(function(e){e in t&&(n[e]=t[e])}),n.animation=e,this.rect=n},record:function(){this.history.record(c(this.rect))},execute:function(t){var e=null;switch(t){case"undo":e=this.history.undo();break;case"redo":e=this.history.redo();break;case"clear":this.history.clear();break;default:}e&&this.onTransformed(e,!0)},moveCursor:function(t){var e=this.history.move(t);e&&this.onTransformed(e,!0)}}},H=U,N=(n("034f"),Object(v["a"])(H,r,o,!1,null,null,null));N.options.__file="App.vue";var A=N.exports;s["a"].config.productionTip=!1,s["a"].filter("numberBeautify",function(t){var e=String(t);return e.includes(".")?t.toFixed(2):Number.parseInt(t,10)}),new s["a"]({render:function(t){return t(A)}}).$mount("#app")},"6e8a":function(t,e,n){},"6ece":function(t,e,n){"use strict";var s=n("6e8a"),r=n.n(s);r.a},b5c1:function(t,e,n){"use strict";var s=n("3616"),r=n.n(s);r.a},c21b:function(t,e,n){},e7e1:function(t,e,n){}});
//# sourceMappingURL=app.b37b889a.js.map