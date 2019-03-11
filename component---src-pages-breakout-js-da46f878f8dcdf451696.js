(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{139:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var i=n(7),s=n.n(i),r=n(0),o=n.n(r),u=n(146),c=n.n(u),h=function(t){function e(){return t.apply(this,arguments)||this}s()(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(){return!1},n.componentDidMount=function(){new c.a(this.refs._canvas).run()},n.render=function(){return o.a.createElement("canvas",{ref:"_canvas",width:"300",height:"300"})},e}(o.a.Component)},142:function(t,e,n){var i=n(72),s=n(54),r=n(32),o=n(73),u=n(26),c=n(75),h=Object.getOwnPropertyDescriptor;e.f=n(17)?h:function(t,e){if(t=r(t),e=o(e,!0),c)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i.f.call(t,e),t[e])}},143:function(t,e,n){var i=n(6),s=n(19),r=n(33),o=n(144),u=n(25).f;t.exports=function(t){var e=s.Symbol||(s.Symbol=r?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:o.f(t)})}},144:function(t,e,n){e.f=n(3)},145:function(t,e,n){var i=n(76),s=n(55).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},146:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}var l,f,p,y,d,v,b,w,x,m,g;n(147),n(149),n(151),n(152),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,w=function(){function t(e,n,i){c(this,t),this.elem=e,this.width=n,this.height=i,this.canvas=this.elem,this.ctx=this.canvas.getContext("2d"),this.ctx.onclick=function(){return window.location=this.canvas.toDataURL("image/png")}}return a(t,[{key:"clear",value:function(){return this.ctx.clearRect(0,0,this.width,this.height),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="#FFFFFF"}},{key:"circle",value:function(t,e,n){return this.ctx.fillStyle="#FFFFFF",this.ctx.beginPath(),this.ctx.arc(t,e,n,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()}},{key:"rect",value:function(t,e,n,i,s){return this.ctx.fillStyle="#000000",null!=s&&(this.ctx.fillStyle=s),this.ctx.beginPath(),this.ctx.rect(t,e,n,i),this.ctx.closePath(),this.ctx.fill()}}]),t}(),v=function(){function t(){var e=this;c(this,t),this.pos=new g(0,0),document.addEventListener("mousemove",function(t){return e.onMouseMove(t)})}return a(t,[{key:"onMouseMove",value:function(t){return this.pos.x=t.pageX,this.pos.y=t.pageY}}]),t}(),d=function(){function t(){var e=this;c(this,t),this.left=!1,this.right=!1,document.addEventListener("keydown",function(t){return e.onKeyDown(t)}),document.addEventListener("keyup",function(t){return e.onKeyUp(t)})}return a(t,[{key:"onKeyDown",value:function(t){switch(t.keyCode){case 39:case 73:return this.right=!0;case 37:case 78:return this.left=!0}}},{key:"onKeyUp",value:function(t){switch(t.keyCode){case 39:case 73:return this.right=!1;case 37:case 78:return this.left=!1}}}]),t}(),x=function(){function t(e){c(this,t),this.screen=e}return a(t,[{key:"update",value:function(t){}},{key:"draw",value:function(){}}]),t}(),g=function t(e,n){c(this,t),this.x=e,this.y=n},f=function(t){function e(t,n,i,o,u,h){var a;return c(this,e),(a=s(this,r(e).call(this,t))).color=h,a.pos=new g(n,i),a.size=new g(o,u),a.destroyed=!1,a}return o(e,x),a(e,[{key:"draw",value:function(){if(!this.destroyed)return this.screen.rect(this.pos.x,this.pos.y,this.size.x,this.size.y,this.color)}}]),e}(),p=function(t){function e(t){var n,i,o,u,h,a,l,p;for(c(this,e),(n=s(this,r(e).call(this,t))).rows=5,n.cols=5,n.blockWidth=n.screen.width/n.cols-1,n.blockHeight=15,n.blockPadding=1,a=["#FF1C0A","#FFFD0A","#00A308","#0008DB","#EB0093"],n.blocks=new Array(n.rows),l=i=0,u=n.rows;0<=u?i<u:i>u;l=0<=u?++i:--i)for(n.blocks[l]=new Array(n.cols),p=o=0,h=n.cols;0<=h?o<h:o>h;p=0<=h?++o:--o)n.blocks[l][p]=new f(n.screen,l*(n.blockWidth+n.blockPadding)+n.blockPadding,p*(n.blockHeight+n.blockPadding)+n.blockPadding,n.blockWidth,n.blockHeight,a[p]);return n}return o(e,x),a(e,[{key:"draw",value:function(){var t,e,n,i,s;for(n=[],i=t=0,e=this.rows;0<=e?t<e:t>e;i=0<=e?++t:--t)n.push(function(){var t,e,n;for(n=[],s=t=0,e=this.cols;0<=e?t<e:t>e;s=0<=e?++t:--t)n.push(this.blocks[i][s].draw());return n}.call(this));return n}}]),e}(),l=function(t){function e(t,n,i){var o;return c(this,e),(o=s(this,r(e).call(this,t))).paddle=n,o.blocks=i,o.size=new g(10,10),o.vel=new g(0,190),o.reset(),o}return o(e,x),a(e,[{key:"reset",value:function(){if(this.pos=new g(this.paddle.pos.x+this.paddle.size.x/2,this.paddle.pos.y-190),this.vel.y<0)return this.vel.y*=-1}},{key:"isOut",value:function(){return this.pos.y-this.size.y>this.screen.height}},{key:"update",value:function(t){var e,n,i,s,r,o,u,c,h,a,l,f,p,d,v;for((a=new g(0,0)).x=this.vel.x*t,a.y=this.vel.y*t,e=new g(this.pos.x,this.pos.y+this.size.y),s=new g(this.pos.x,this.pos.y-this.size.y),n=new g(this.pos.x-this.size.x,this.pos.y),i=new g(this.pos.x+this.size.x,this.pos.y),n.x<0&&this.vel.x<0?this.vel.x*=-1:i.x>this.screen.width&&this.vel.x>0?this.vel.x*=-1:s.y<0&&this.vel.y<0&&(this.vel.y*=-1),l=this.screen.height-this.paddle.size.y,e.y<l&&e.y+a.y>l&&this.hasCollidedWithPaddle()&&this.vel.y>0&&(h=(this.pos.x-(this.paddle.pos.x+this.paddle.size.x/2))/(this.paddle.size.x/2),this.vel.x=150*h,this.vel.y*=-1),d=u=0,f=this.blocks.rows;0<=f?u<f:u>f;d=0<=f?++u:--u)for(v=c=0,p=this.blocks.cols;0<=p?c<p:c>p;v=0<=p?++c:--c)(r=this.blocks.blocks[d][v]).destroyed||(o=!1,y.pointInRect(s,r.pos,r.size)&&this.vel.y<0&&(o=!0,this.vel.y*=-1),y.pointInRect(e,r.pos,r.size)&&this.vel.y>0&&(o=!0,this.vel.y*=-1),y.pointInRect(n,r.pos,r.size)&&this.vel.x<0&&(o=!0,this.vel.x*=-1),y.pointInRect(i,r.pos,r.size)&&this.vel.x>0&&(o=!0,this.vel.x*=-1),o&&(r.destroyed=!0));return this.pos.x+=a.x,this.pos.y+=a.y}},{key:"hasCollidedWithPaddle",value:function(){return this.pos.x+this.size.x>this.paddle.pos.x&&this.pos.x-this.size.x<this.paddle.pos.x+this.paddle.size.x}},{key:"draw",value:function(){return this.screen.circle(this.pos.x,this.pos.y,10)}}]),e}(),y=function(){function t(){c(this,t)}return a(t,null,[{key:"pointInRect",value:function(t,e,n){return t.x>e.x&&t.x<e.x+n.x&&t.y>e.y&&t.y<e.y+n.y}}]),t}(),b=function(t){function e(t,n,i){var o;return c(this,e),(o=s(this,r(e).call(this,t))).mouseInput=n,o.keyboardInput=i,o.size=new g(75,10),o.pos=new g(o.screen.width/2-o.size.x/2,o.screen.height-10),o.lastMousePos=o.mouseInput.pos.x,o.color="#444444",o}return o(e,x),a(e,[{key:"update",value:function(t){return this.lastMousePos!==this.mouseInput.pos.x&&(this.pos.x=this.mouseInput.pos.x-this.size.x/2),!0===this.keyboardInput.left&&(this.pos.x-=600*t),!0===this.keyboardInput.right&&(this.pos.x+=600*t),this.pos.x<0&&(this.pos.x=0),this.pos.x+this.size.x>this.screen.width&&(this.pos.x=this.screen.width-this.size.x),this.lastMousePos=this.mouseInput.pos.x}},{key:"draw",value:function(){return this.screen.rect(this.pos.x,this.pos.y,this.size.x,this.size.y,this.color)}}]),e}(),m=function(){function t(){c(this,t)}return a(t,[{key:"start",value:function(){return this.startDate=new Date,this.lastDate=new Date}},{key:"advance",value:function(){var t;return t=new Date,this.diffInMilliseconds=t-this.lastDate,this.diff=this.diffInMilliseconds/1e3,this.timeInMilliseconds+=t-this.startDate,this.time=this.timeInMilliseconds/1e3,this.lastDate=new Date}}]),t}();var k=function(){function t(e){var n,i;c(this,t),this.elem=e,this.paused=!1,this.screen=new w(this.elem,300,300),this.timer=new m,this.mouseInput=new v,this.keyboardInput=new d,this.sprites=[],i=new b(this.screen,this.mouseInput,this.keyboardInput),this.sprites.push(i),n=new p(this.screen),this.sprites.push(n),this.ball=new l(this.screen,i,n),this.sprites.push(this.ball)}return a(t,[{key:"run",value:function(){var t=this;return this.timer.start(),setInterval(function(){return t.update()},20)}},{key:"update",value:function(){var t,e,n,i,s;if(this.timer.advance(),!this.paused){for(this.ball.isOut()&&this.ball.reset(),this.screen.clear(),i=[],t=0,e=(n=this.sprites).length;t<e;t++)(s=n[t]).update(this.timer.diff),i.push(s.draw());return i}}}]),t}();e.default=k},147:function(t,e,n){var i=n(12);i(i.P,"Array",{fill:n(148)}),n(38)("fill")},148:function(t,e,n){"use strict";var i=n(27),s=n(77),r=n(14);t.exports=function(t){for(var e=i(this),n=r(e.length),o=arguments.length,u=s(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,h=void 0===c?n:s(c,n);h>u;)e[u++]=t;return e}},149:function(t,e,n){var i=n(12);i(i.S,"Object",{setPrototypeOf:n(150).set})},150:function(t,e,n){var i=n(11),s=n(5),r=function(t,e){if(s(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(21)(Function.call,n(142).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},151:function(t,e,n){n(143)("asyncIterator")},152:function(t,e,n){"use strict";var i=n(6),s=n(26),r=n(17),o=n(12),u=n(20),c=n(153).KEY,h=n(18),a=n(36),l=n(37),f=n(34),p=n(3),y=n(144),d=n(143),v=n(154),b=n(78),w=n(5),x=n(11),m=n(32),g=n(73),k=n(54),O=n(79),P=n(155),S=n(142),z=n(25),_=n(35),I=S.f,F=z.f,j=P.f,E=i.Symbol,D=i.JSON,M=D&&D.stringify,C=p("_hidden"),N=p("toPrimitive"),R={}.propertyIsEnumerable,A=a("symbol-registry"),W=a("symbols"),K=a("op-symbols"),J=Object.prototype,T="function"==typeof E,L=i.QObject,U=!L||!L.prototype||!L.prototype.findChild,H=r&&h(function(){return 7!=O(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=I(J,e);i&&delete J[e],F(t,e,n),i&&t!==J&&F(J,e,i)}:F,Y=function(t){var e=W[t]=O(E.prototype);return e._k=t,e},B=T&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},G=function(t,e,n){return t===J&&G(K,e,n),w(t),e=g(e,!0),w(n),s(W,e)?(n.enumerable?(s(t,C)&&t[C][e]&&(t[C][e]=!1),n=O(n,{enumerable:k(0,!1)})):(s(t,C)||F(t,C,k(1,{})),t[C][e]=!0),H(t,e,n)):F(t,e,n)},Q=function(t,e){w(t);for(var n,i=v(e=m(e)),s=0,r=i.length;r>s;)G(t,n=i[s++],e[n]);return t},X=function(t){var e=R.call(this,t=g(t,!0));return!(this===J&&s(W,t)&&!s(K,t))&&(!(e||!s(this,t)||!s(W,t)||s(this,C)&&this[C][t])||e)},q=function(t,e){if(t=m(t),e=g(e,!0),t!==J||!s(W,e)||s(K,e)){var n=I(t,e);return!n||!s(W,e)||s(t,C)&&t[C][e]||(n.enumerable=!0),n}},V=function(t){for(var e,n=j(m(t)),i=[],r=0;n.length>r;)s(W,e=n[r++])||e==C||e==c||i.push(e);return i},Z=function(t){for(var e,n=t===J,i=j(n?K:m(t)),r=[],o=0;i.length>o;)!s(W,e=i[o++])||n&&!s(J,e)||r.push(W[e]);return r};T||(u((E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(K,n),s(this,C)&&s(this[C],t)&&(this[C][t]=!1),H(this,t,k(1,n))};return r&&U&&H(J,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",function(){return this._k}),S.f=q,z.f=G,n(145).f=P.f=V,n(72).f=X,n(74).f=Z,r&&!n(33)&&u(J,"propertyIsEnumerable",X,!0),y.f=function(t){return Y(p(t))}),o(o.G+o.W+o.F*!T,{Symbol:E});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)p($[tt++]);for(var et=_(p.store),nt=0;et.length>nt;)d(et[nt++]);o(o.S+o.F*!T,"Symbol",{for:function(t){return s(A,t+="")?A[t]:A[t]=E(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),o(o.S+o.F*!T,"Object",{create:function(t,e){return void 0===e?O(t):Q(O(t),e)},defineProperty:G,defineProperties:Q,getOwnPropertyDescriptor:q,getOwnPropertyNames:V,getOwnPropertySymbols:Z}),D&&o(o.S+o.F*(!T||h(function(){var t=E();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))})),"JSON",{stringify:function(t){for(var e,n,i=[t],s=1;arguments.length>s;)i.push(arguments[s++]);if(n=e=i[1],(x(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),i[1]=e,M.apply(D,i)}}),E.prototype[N]||n(13)(E.prototype,N,E.prototype.valueOf),l(E,"Symbol"),l(Math,"Math",!0),l(i.JSON,"JSON",!0)},153:function(t,e,n){var i=n(34)("meta"),s=n(11),r=n(26),o=n(25).f,u=0,c=Object.isExtensible||function(){return!0},h=!n(18)(function(){return c(Object.preventExtensions({}))}),a=function(t){o(t,i,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:i,NEED:!1,fastKey:function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!c(t))return"F";if(!e)return"E";a(t)}return t[i].i},getWeak:function(t,e){if(!r(t,i)){if(!c(t))return!0;if(!e)return!1;a(t)}return t[i].w},onFreeze:function(t){return h&&l.NEED&&c(t)&&!r(t,i)&&a(t),t}}},154:function(t,e,n){var i=n(35),s=n(74),r=n(72);t.exports=function(t){var e=i(t),n=s.f;if(n)for(var o,u=n(t),c=r.f,h=0;u.length>h;)c.call(t,o=u[h++])&&e.push(o);return e}},155:function(t,e,n){var i=n(32),s=n(145).f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?function(t){try{return s(t)}catch(e){return o.slice()}}(t):s(i(t))}}}]);
//# sourceMappingURL=component---src-pages-breakout-js-da46f878f8dcdf451696.js.map