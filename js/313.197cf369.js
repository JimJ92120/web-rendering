(self["webpackChunkweb_rendering"]=self["webpackChunkweb_rendering"]||[]).push([[313],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,r,n){"use strict";var e,o,i,a=n(4019),c=n(9781),s=n(7854),f=n(614),u=n(111),h=n(2597),p=n(648),d=n(6330),l=n(8880),y=n(8052),v=n(3070).f,g=n(7976),A=n(9518),m=n(7674),x=n(5112),w=n(9711),T=s.Int8Array,R=T&&T.prototype,_=s.Uint8ClampedArray,E=_&&_.prototype,C=T&&A(T),S=R&&A(R),P=Object.prototype,b=s.TypeError,I=x("toStringTag"),O=w("TYPED_ARRAY_TAG"),U=w("TYPED_ARRAY_CONSTRUCTOR"),Z=a&&!!m&&"Opera"!==p(s.opera),F=!1,$={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},L=function(t){if(!u(t))return!1;var r=p(t);return"DataView"===r||h($,r)||h(B,r)},Y=function(t){if(!u(t))return!1;var r=p(t);return h($,r)||h(B,r)},k=function(t){if(Y(t))return t;throw b("Target is not a typed array")},D=function(t){if(f(t)&&(!m||g(C,t)))return t;throw b(d(t)+" is not a typed array constructor")},V=function(t,r,n,e){if(c){if(n)for(var o in $){var i=s[o];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(a){try{i.prototype[t]=r}catch(f){}}}S[t]&&!n||y(S,t,n?r:Z&&R[t]||r,e)}},z=function(t,r,n){var e,o;if(c){if(m){if(n)for(e in $)if(o=s[e],o&&h(o,t))try{delete o[t]}catch(i){}if(C[t]&&!n)return;try{return y(C,t,n?r:Z&&C[t]||r)}catch(i){}}for(e in $)o=s[e],!o||o[t]&&!n||y(o,t,r)}};for(e in $)o=s[e],i=o&&o.prototype,i?l(i,U,o):Z=!1;for(e in B)o=s[e],i=o&&o.prototype,i&&l(i,U,o);if((!Z||!f(C)||C===Function.prototype)&&(C=function(){throw b("Incorrect invocation")},Z))for(e in $)s[e]&&m(s[e],C);if((!Z||!S||S===P)&&(S=C.prototype,Z))for(e in $)s[e]&&m(s[e].prototype,S);if(Z&&A(E)!==S&&m(E,S),c&&!h(S,I))for(e in F=!0,v(S,I,{get:function(){return u(this)?this[O]:void 0}}),$)s[e]&&l(s[e],O,e);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:Z,TYPED_ARRAY_CONSTRUCTOR:U,TYPED_ARRAY_TAG:F&&O,aTypedArray:k,aTypedArrayConstructor:D,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:z,isView:L,isTypedArray:Y,TypedArray:C,TypedArrayPrototype:S}},8544:function(t,r,n){var e=n(7293);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9518:function(t,r,n){var e=n(7854),o=n(2597),i=n(614),a=n(7908),c=n(6200),s=n(8544),f=c("IE_PROTO"),u=e.Object,h=u.prototype;t.exports=s?u.getPrototypeOf:function(t){var r=a(t);if(o(r,f))return r[f];var n=r.constructor;return i(n)&&r instanceof n?n.prototype:r instanceof u?h:null}},4590:function(t,r,n){var e=n(7854),o=n(3002),i=e.RangeError;t.exports=function(t,r){var n=o(t);if(n%r)throw i("Wrong offset");return n}},3002:function(t,r,n){var e=n(7854),o=n(9303),i=e.RangeError;t.exports=function(t){var r=o(t);if(r<0)throw i("The argument can't be less than 0");return r}},8675:function(t,r,n){"use strict";var e=n(260),o=n(6244),i=n(9303),a=e.aTypedArray,c=e.exportTypedArrayMethod;c("at",(function(t){var r=a(this),n=o(r),e=i(t),c=e>=0?e:n+e;return c<0||c>=n?void 0:r[c]}))},3462:function(t,r,n){"use strict";var e=n(7854),o=n(6916),i=n(260),a=n(6244),c=n(4590),s=n(7908),f=n(7293),u=e.RangeError,h=e.Int8Array,p=h&&h.prototype,d=p&&p.set,l=i.aTypedArray,y=i.exportTypedArrayMethod,v=!f((function(){var t=new Uint8ClampedArray(2);return o(d,t,{length:1,0:3},1),3!==t[1]})),g=v&&i.NATIVE_ARRAY_BUFFER_VIEWS&&f((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));y("set",(function(t){l(this);var r=c(arguments.length>1?arguments[1]:void 0,1),n=s(t);if(v)return o(d,this,n,r);var e=this.length,i=a(n),f=0;if(i+r>e)throw u("Wrong length");while(f<i)this[r+f]=n[f++]}),!v||g)},1624:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(2482);n(1703);class o{constructor(t){(0,e.Z)(this,"buffer",void 0),(0,e.Z)(this,"context",void 0),this.context=t,this.setBuffer()}load(t){this.context.bindBuffer(this.context.ARRAY_BUFFER,this.buffer),this.context.bufferData(this.context.ARRAY_BUFFER,t,this.context.STATIC_DRAW)}setBuffer(){const t=this.context.createBuffer();if(!t)throw new Error("buffer not created.");this.buffer=t}}},9501:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(2482);n(1703);class o{constructor(t){(0,e.Z)(this,"context",void 0),(0,e.Z)(this,"program",void 0),this.context=t,this.setProgram()}isLinked(){return this.context.getProgramParameter(this.program,this.context.LINK_STATUS)}link(){if(this.context.linkProgram(this.program),!this.isLinked()){const t=this.context.getProgramInfoLog(this.program);throw this.context.deleteProgram(this.program),new Error(t||"program not linked.")}}setProgram(){const t=this.context.createProgram();if(!t)throw new Error("program not created.");this.program=t}}},9300:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(2482);n(1703);class o{constructor(t){(0,e.Z)(this,"canvas",void 0),(0,e.Z)(this,"context",void 0),this.setCanvas(t),this.setContext()}clearColor(t){this.context.clearColor(t[0],t[1],t[2],t[3]),this.context.clear(this.context.COLOR_BUFFER_BIT)}resize(t){this.canvas.width=t[0],this.canvas.height=t[1],this.context.viewport(0,0,t[0],t[1])}setCanvas(t){const r=document.getElementById(t);if(!r)throw new Error("canvas not found.");this.canvas=r}setContext(){const t=this.canvas.getContext("webgl2");if(!t)throw new Error("context not found.");this.context=t}}},2795:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(2482);n(1703);class o{constructor(t,r,n){(0,e.Z)(this,"context",void 0),(0,e.Z)(this,"shader",void 0),(0,e.Z)(this,"source",void 0),(0,e.Z)(this,"type",void 0),this.context=t,this.source=n,this.type=r,this.create(),this.compile()}create(){const t=this.context.createShader(this.type);if(!t)throw new Error("shader not found.");this.shader=t}compile(){if(this.context.shaderSource(this.shader,this.source),this.context.compileShader(this.shader),!this.isCompiled()){const t=this.context.getShaderInfoLog(this.shader);throw this.context.deleteShader(this.shader),new Error(t||"shader not compiled.")}}isCompiled(){return this.context.getShaderParameter(this.shader,this.context.COMPILE_STATUS)}}},7313:function(t,r,n){"use strict";n.r(r),n.d(r,{run:function(){return c}});n(8675),n(3462);var e=n(9300),o=n(9501),i=n(2795),a=n(1624);function c(t){console.log("running...");const r=new e.Z(t),n=[800,500],c=[0,0,0,1];r.resize(n),r.clearColor(c);const{canvas:s,context:f}=r,u=new o.Z(f),h="a_index",p="u_count",d="u_pixelSize",l="u_resolution",y="u_startColor",v=`#version 300 es\n    precision highp float;\n  \n    uniform float ${p};\n    uniform float ${d};\n    uniform vec2 ${l};\n    uniform vec3 ${y};\n  \n    in float ${h};\n\n    out float index;\n\n    void main() {\n      vec2 position = ${l} * (${h} / ${p}) * (${h} / ${p});\n      vec2 zeroToOne = position.xy / ${l};\n      vec2 zeroToTwo = zeroToOne * 2.0;\n      vec2 clipSpace = (zeroToTwo - 1.0);\n\n      gl_Position = vec4(clipSpace, 0.0, 1.0);\n      gl_PointSize = ${d};\n\n      index = a_index;\n    }\n  `,g=`#version 300 es\n    precision highp float;\n\n    uniform float ${p};\n    uniform vec3 ${y};\n\n    in float index;\n    in vec3 vertexColor;\n\n    out vec4 fragColor;\n\n    void main() {\n      vec3 color;\n\n      if (${y} == vec3(0.0)) {\n        color = vec3(index / ${p});\n      } else {\n        color = ${y} * (index / ${p});\n      }\n\n      fragColor = vec4(color, 1.0);\n    }\n  `,A=new i.Z(f,f.VERTEX_SHADER,v),m=new i.Z(f,f.FRAGMENT_SHADER,g);[A,m].map((t=>{t.compile(),f.attachShader(u.program,t.shader)})),u.link(),f.useProgram(u.program);const x=10,w=10,T=[1,0,0],R=1,_=new Float32Array([...Array(x).keys()].map((t=>t+1))),E=new a.Z(f);E.load(_);const C=f.getAttribLocation(u.program,h),S=f.getUniformLocation(u.program,l),P=f.getUniformLocation(u.program,d),b=f.getUniformLocation(u.program,p),I=f.getUniformLocation(u.program,y);let O;f.enableVertexAttribArray(C),f.uniform2f(S,s.width,s.height),f.uniform1f(P,w),f.uniform1f(b,x),f.uniform3fv(I,T),f.vertexAttribPointer(C,R,f.FLOAT,!1,0,0);const U=50;let Z=0,F=w;const $=()=>{r.clearColor(c),0===Z?++F:1===Z&&--F,F<=w?Z=0:F>=U&&(Z=1),f.uniform1f(P,F),f.drawArrays(f.POINTS,0,_.length/R),O=requestAnimationFrame($)};requestAnimationFrame($)}},2482:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}n.d(r,{Z:function(){return e}})}}]);
//# sourceMappingURL=313.197cf369.js.map