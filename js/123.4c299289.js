(self["webpackChunkweb_rendering"]=self["webpackChunkweb_rendering"]||[]).push([[123],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,o,n){"use strict";var r,e,i,s=n(4019),a=n(9781),c=n(7854),f=n(614),u=n(111),p=n(2597),h=n(648),l=n(6330),d=n(8880),y=n(8052),v=n(3070).f,m=n(7976),g=n(9518),x=n(7674),A=n(5112),w=n(9711),T=c.Int8Array,R=T&&T.prototype,_=c.Uint8ClampedArray,E=_&&_.prototype,P=T&&g(T),C=R&&g(R),b=Object.prototype,S=c.TypeError,$=A("toStringTag"),I=w("TYPED_ARRAY_TAG"),U=w("TYPED_ARRAY_CONSTRUCTOR"),Z=s&&!!x&&"Opera"!==h(c.opera),F=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!u(t))return!1;var o=h(t);return"DataView"===o||p(O,o)||p(D,o)},L=function(t){if(!u(t))return!1;var o=h(t);return p(O,o)||p(D,o)},Y=function(t){if(L(t))return t;throw S("Target is not a typed array")},k=function(t){if(f(t)&&(!x||m(P,t)))return t;throw S(l(t)+" is not a typed array constructor")},V=function(t,o,n,r){if(a){if(n)for(var e in O){var i=c[e];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(s){try{i.prototype[t]=o}catch(f){}}}C[t]&&!n||y(C,t,n?o:Z&&R[t]||o,r)}},N=function(t,o,n){var r,e;if(a){if(x){if(n)for(r in O)if(e=c[r],e&&p(e,t))try{delete e[t]}catch(i){}if(P[t]&&!n)return;try{return y(P,t,n?o:Z&&P[t]||o)}catch(i){}}for(r in O)e=c[r],!e||e[t]&&!n||y(e,t,o)}};for(r in O)e=c[r],i=e&&e.prototype,i?d(i,U,e):Z=!1;for(r in D)e=c[r],i=e&&e.prototype,i&&d(i,U,e);if((!Z||!f(P)||P===Function.prototype)&&(P=function(){throw S("Incorrect invocation")},Z))for(r in O)c[r]&&x(c[r],P);if((!Z||!C||C===b)&&(C=P.prototype,Z))for(r in O)c[r]&&x(c[r].prototype,C);if(Z&&g(E)!==C&&x(E,C),a&&!p(C,$))for(r in F=!0,v(C,$,{get:function(){return u(this)?this[I]:void 0}}),O)c[r]&&d(c[r],I,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:Z,TYPED_ARRAY_CONSTRUCTOR:U,TYPED_ARRAY_TAG:F&&I,aTypedArray:Y,aTypedArrayConstructor:k,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:N,isView:B,isTypedArray:L,TypedArray:P,TypedArrayPrototype:C}},8544:function(t,o,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9518:function(t,o,n){var r=n(7854),e=n(2597),i=n(614),s=n(7908),a=n(6200),c=n(8544),f=a("IE_PROTO"),u=r.Object,p=u.prototype;t.exports=c?u.getPrototypeOf:function(t){var o=s(t);if(e(o,f))return o[f];var n=o.constructor;return i(n)&&o instanceof n?n.prototype:o instanceof u?p:null}},4590:function(t,o,n){var r=n(7854),e=n(3002),i=r.RangeError;t.exports=function(t,o){var n=e(t);if(n%o)throw i("Wrong offset");return n}},3002:function(t,o,n){var r=n(7854),e=n(9303),i=r.RangeError;t.exports=function(t){var o=e(t);if(o<0)throw i("The argument can't be less than 0");return o}},8675:function(t,o,n){"use strict";var r=n(260),e=n(6244),i=n(9303),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var o=s(this),n=e(o),r=i(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:o[a]}))},3462:function(t,o,n){"use strict";var r=n(7854),e=n(6916),i=n(260),s=n(6244),a=n(4590),c=n(7908),f=n(7293),u=r.RangeError,p=r.Int8Array,h=p&&p.prototype,l=h&&h.set,d=i.aTypedArray,y=i.exportTypedArrayMethod,v=!f((function(){var t=new Uint8ClampedArray(2);return e(l,t,{length:1,0:3},1),3!==t[1]})),m=v&&i.NATIVE_ARRAY_BUFFER_VIEWS&&f((function(){var t=new p(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));y("set",(function(t){d(this);var o=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(v)return e(l,this,n,o);var r=this.length,i=s(n),f=0;if(i+o>r)throw u("Wrong length");while(f<i)this[o+f]=n[f++]}),!v||m)},1624:function(t,o,n){"use strict";n.d(o,{Z:function(){return e}});var r=n(2482);n(1703);class e{constructor(t){(0,r.Z)(this,"buffer",void 0),(0,r.Z)(this,"context",void 0),this.context=t,this.setBuffer()}load(t){this.context.bindBuffer(this.context.ARRAY_BUFFER,this.buffer),this.context.bufferData(this.context.ARRAY_BUFFER,t,this.context.STATIC_DRAW)}setBuffer(){const t=this.context.createBuffer();if(!t)throw new Error("buffer not created.");this.buffer=t}}},9501:function(t,o,n){"use strict";n.d(o,{Z:function(){return e}});var r=n(2482);n(1703);class e{constructor(t){(0,r.Z)(this,"context",void 0),(0,r.Z)(this,"program",void 0),this.context=t,this.setProgram()}isLinked(){return this.context.getProgramParameter(this.program,this.context.LINK_STATUS)}link(){if(this.context.linkProgram(this.program),!this.isLinked()){const t=this.context.getProgramInfoLog(this.program);throw this.context.deleteProgram(this.program),new Error(t||"program not linked.")}}setProgram(){const t=this.context.createProgram();if(!t)throw new Error("program not created.");this.program=t}}},9300:function(t,o,n){"use strict";n.d(o,{Z:function(){return e}});var r=n(2482);n(1703);class e{constructor(t){(0,r.Z)(this,"canvas",void 0),(0,r.Z)(this,"context",void 0),this.setCanvas(t),this.setContext()}clearColor(t){this.context.clearColor(t[0],t[1],t[2],t[3]),this.context.clear(this.context.COLOR_BUFFER_BIT)}resize(t){this.canvas.width=t[0],this.canvas.height=t[1],this.context.viewport(0,0,t[0],t[1])}setCanvas(t){const o=document.getElementById(t);if(!o)throw new Error("canvas not found.");this.canvas=o}setContext(){const t=this.canvas.getContext("webgl2");if(!t)throw new Error("context not found.");this.context=t}}},2795:function(t,o,n){"use strict";n.d(o,{Z:function(){return e}});var r=n(2482);n(1703);class e{constructor(t,o,n){(0,r.Z)(this,"context",void 0),(0,r.Z)(this,"shader",void 0),(0,r.Z)(this,"source",void 0),(0,r.Z)(this,"type",void 0),this.context=t,this.source=n,this.type=o,this.create(),this.compile()}create(){const t=this.context.createShader(this.type);if(!t)throw new Error("shader not found.");this.shader=t}compile(){if(this.context.shaderSource(this.shader,this.source),this.context.compileShader(this.shader),!this.isCompiled()){const t=this.context.getShaderInfoLog(this.shader);throw this.context.deleteShader(this.shader),new Error(t||"shader not compiled.")}}isCompiled(){return this.context.getShaderParameter(this.shader,this.context.COMPILE_STATUS)}}},1123:function(t,o,n){"use strict";n.r(o),n.d(o,{run:function(){return a}});n(8675),n(3462);var r=n(9300),e=n(9501),i=n(2795),s=n(1624);function a(t){console.log("running...");const o=new r.Z(t),n=[800,500],a=[0,1,1,1];o.resize(n),o.clearColor(a);const{canvas:c,context:f}=o,u=new e.Z(f),p="u_resolution",h="u_loopTime",l="u_verticesCount",d="u_pointSize",y="a_index",v=`#version 300 es\n    precision highp float;\n\n    uniform vec2 ${p};\n    uniform float ${h};\n    uniform float ${l};\n    uniform float ${d};\n\n    in float ${y};\n\n    out float index;\n    out vec2 pixelPosition;\n\n    vec2 getPointDimension (float pointSize, vec2 resolution) {\n      return pointSize / resolution * 2.0;\n    }\n\n    void positionToResolution(inout vec2 position, vec2 pointDimension) {\n      position = position * pointDimension - 1.0 + pointDimension / 2.0;\n    }\n\n    void main() {\n      vec2 pointDimension = getPointDimension(${d}, ${p});\n\n      // vec2 position = vec2(pow(${y}, 2.0));\n\n      vec2 limit = ${p} / ${d};\n\n      // draw from bottom to top\n      float x = mod(${y}, limit[0]);\n      float y = floor(${y} / limit[0]);\n    \n      vec2 position = vec2(x, y);\n\n      positionToResolution(position, pointDimension);\n\n      gl_Position = vec4(position, 0.0, 1.0);\n      gl_PointSize = ${d};\n\n      index = ${y};\n      pixelPosition = vec2(x, y);\n    }\n  `,m=`#version 300 es\n    precision highp float;\n\n    uniform vec2 ${p};\n    uniform float ${h};\n    uniform float ${l};\n    uniform float ${d};\n\n    in float index;\n    in vec2 pixelPosition;\n\n    out vec4 fragColor;\n\n    // float plot(vec2 st) {\n    //   return smoothstep(0.02, 0.0, abs(st.y - st.x));\n    // }\n\n    float plot(vec2 st, float pct) {\n      return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);\n    }\n\n    void main() {\n      // vec2 st = gl_FragCoord.xy / ${p};\n      vec2 st = pixelPosition / ${p};\n\n      // float y = fract(st.x * pixelPosition[1]);\n      float y = fract(st.x);\n\n      vec3 color = vec3(y);\n      vec3 plotColor = vec3(1.0, 0.0, 0.0);\n\n      // float pct = plot(st);\n      float pct = plot(st, y);\n      color = (0.75 - pct) * color + pct * plotColor;\n\n      fragColor = vec4(color, 1.0) / fract(${h} / 5000.0);\n    }\n  `,g=new i.Z(f,f.VERTEX_SHADER,v),x=new i.Z(f,f.FRAGMENT_SHADER,m);[g,x].map((t=>{t.compile(),f.attachShader(u.program,t.shader)})),u.link(),f.useProgram(u.program);const A=50,w=n[0]*n[1]/A,T=1,R=new Float32Array([...Array(w).keys()].map((t=>Number(t)))),_=new s.Z(f);_.load(R);const E=f.getAttribLocation(u.program,y);f.enableVertexAttribArray(E),f.vertexAttribPointer(E,T,f.FLOAT,!1,0,0);const P=f.getUniformLocation(u.program,p),C=f.getUniformLocation(u.program,h),b=f.getUniformLocation(u.program,l),S=f.getUniformLocation(u.program,d);f.uniform2f(P,c.width,c.height),f.uniform1f(b,w),f.uniform1f(S,A);let $=0;const I=()=>{o.clearColor(a),f.uniform1f(C,$),f.drawArrays(f.POINTS,0,R.length/T),$=requestAnimationFrame(I)};requestAnimationFrame(I)}},2482:function(t,o,n){"use strict";function r(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}n.d(o,{Z:function(){return r}})}}]);
//# sourceMappingURL=123.4c299289.js.map