(self["webpackChunkweb_rendering"]=self["webpackChunkweb_rendering"]||[]).push([[518],{4019:function(n){n.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(n,t,r){"use strict";var e,i,o,a=r(4019),s=r(9781),c=r(7854),u=r(614),f=r(111),h=r(2597),p=r(648),l=r(6330),d=r(8880),m=r(8052),y=r(3070).f,g=r(7976),A=r(9518),v=r(7674),x=r(5112),b=r(9711),w=c.Int8Array,T=w&&w.prototype,R=c.Uint8ClampedArray,_=R&&R.prototype,P=w&&A(w),S=T&&A(T),E=Object.prototype,C=c.TypeError,O=x("toStringTag"),I=b("TYPED_ARRAY_TAG"),U=b("TYPED_ARRAY_CONSTRUCTOR"),F=a&&!!v&&"Opera"!==p(c.opera),Z=!1,$={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},z={BigInt64Array:8,BigUint64Array:8},B=function(n){if(!f(n))return!1;var t=p(n);return"DataView"===t||h($,t)||h(z,t)},L=function(n){if(!f(n))return!1;var t=p(n);return h($,t)||h(z,t)},D=function(n){if(L(n))return n;throw C("Target is not a typed array")},N=function(n){if(u(n)&&(!v||g(P,n)))return n;throw C(l(n)+" is not a typed array constructor")},Y=function(n,t,r,e){if(s){if(r)for(var i in $){var o=c[i];if(o&&h(o.prototype,n))try{delete o.prototype[n]}catch(a){try{o.prototype[n]=t}catch(u){}}}S[n]&&!r||m(S,n,r?t:F&&T[n]||t,e)}},k=function(n,t,r){var e,i;if(s){if(v){if(r)for(e in $)if(i=c[e],i&&h(i,n))try{delete i[n]}catch(o){}if(P[n]&&!r)return;try{return m(P,n,r?t:F&&P[n]||t)}catch(o){}}for(e in $)i=c[e],!i||i[n]&&!r||m(i,n,t)}};for(e in $)i=c[e],o=i&&i.prototype,o?d(o,U,i):F=!1;for(e in z)i=c[e],o=i&&i.prototype,o&&d(o,U,i);if((!F||!u(P)||P===Function.prototype)&&(P=function(){throw C("Incorrect invocation")},F))for(e in $)c[e]&&v(c[e],P);if((!F||!S||S===E)&&(S=P.prototype,F))for(e in $)c[e]&&v(c[e].prototype,S);if(F&&A(_)!==S&&v(_,S),s&&!h(S,O))for(e in Z=!0,y(S,O,{get:function(){return f(this)?this[I]:void 0}}),$)c[e]&&d(c[e],I,e);n.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_CONSTRUCTOR:U,TYPED_ARRAY_TAG:Z&&I,aTypedArray:D,aTypedArrayConstructor:N,exportTypedArrayMethod:Y,exportTypedArrayStaticMethod:k,isView:B,isTypedArray:L,TypedArray:P,TypedArrayPrototype:S}},8544:function(n,t,r){var e=r(7293);n.exports=!e((function(){function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype}))},9518:function(n,t,r){var e=r(7854),i=r(2597),o=r(614),a=r(7908),s=r(6200),c=r(8544),u=s("IE_PROTO"),f=e.Object,h=f.prototype;n.exports=c?f.getPrototypeOf:function(n){var t=a(n);if(i(t,u))return t[u];var r=t.constructor;return o(r)&&t instanceof r?r.prototype:t instanceof f?h:null}},4590:function(n,t,r){var e=r(7854),i=r(3002),o=e.RangeError;n.exports=function(n,t){var r=i(n);if(r%t)throw o("Wrong offset");return r}},3002:function(n,t,r){var e=r(7854),i=r(9303),o=e.RangeError;n.exports=function(n){var t=i(n);if(t<0)throw o("The argument can't be less than 0");return t}},8675:function(n,t,r){"use strict";var e=r(260),i=r(6244),o=r(9303),a=e.aTypedArray,s=e.exportTypedArrayMethod;s("at",(function(n){var t=a(this),r=i(t),e=o(n),s=e>=0?e:r+e;return s<0||s>=r?void 0:t[s]}))},3462:function(n,t,r){"use strict";var e=r(7854),i=r(6916),o=r(260),a=r(6244),s=r(4590),c=r(7908),u=r(7293),f=e.RangeError,h=e.Int8Array,p=h&&h.prototype,l=p&&p.set,d=o.aTypedArray,m=o.exportTypedArrayMethod,y=!u((function(){var n=new Uint8ClampedArray(2);return i(l,n,{length:1,0:3},1),3!==n[1]})),g=y&&o.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var n=new h(2);return n.set(1),n.set("2",1),0!==n[0]||2!==n[1]}));m("set",(function(n){d(this);var t=s(arguments.length>1?arguments[1]:void 0,1),r=c(n);if(y)return i(l,this,r,t);var e=this.length,o=a(r),u=0;if(o+t>e)throw f("Wrong length");while(u<o)this[t+u]=r[u++]}),!y||g)},1624:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2482);r(1703);class i{constructor(n){(0,e.Z)(this,"buffer",void 0),(0,e.Z)(this,"context",void 0),this.context=n,this.setBuffer()}load(n){this.context.bindBuffer(this.context.ARRAY_BUFFER,this.buffer),this.context.bufferData(this.context.ARRAY_BUFFER,n,this.context.STATIC_DRAW)}setBuffer(){const n=this.context.createBuffer();if(!n)throw new Error("buffer not created.");this.buffer=n}}},9501:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2482);r(1703);class i{constructor(n){(0,e.Z)(this,"context",void 0),(0,e.Z)(this,"program",void 0),this.context=n,this.setProgram()}isLinked(){return this.context.getProgramParameter(this.program,this.context.LINK_STATUS)}link(){if(this.context.linkProgram(this.program),!this.isLinked()){const n=this.context.getProgramInfoLog(this.program);throw this.context.deleteProgram(this.program),new Error(n||"program not linked.")}}setProgram(){const n=this.context.createProgram();if(!n)throw new Error("program not created.");this.program=n}}},9300:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2482);r(1703);class i{constructor(n){(0,e.Z)(this,"canvas",void 0),(0,e.Z)(this,"context",void 0),this.setCanvas(n),this.setContext()}clearColor(n){this.context.clearColor(n[0],n[1],n[2],n[3]),this.context.clear(this.context.COLOR_BUFFER_BIT)}resize(n){this.canvas.width=n[0],this.canvas.height=n[1],this.context.viewport(0,0,n[0],n[1])}setCanvas(n){const t=document.getElementById(n);if(!t)throw new Error("canvas not found.");this.canvas=t}setContext(){const n=this.canvas.getContext("webgl2");if(!n)throw new Error("context not found.");this.context=n}}},2795:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(2482);r(1703);class i{constructor(n,t,r){(0,e.Z)(this,"context",void 0),(0,e.Z)(this,"shader",void 0),(0,e.Z)(this,"source",void 0),(0,e.Z)(this,"type",void 0),this.context=n,this.source=r,this.type=t,this.create(),this.compile()}create(){const n=this.context.createShader(this.type);if(!n)throw new Error("shader not found.");this.shader=n}compile(){if(this.context.shaderSource(this.shader,this.source),this.context.compileShader(this.shader),!this.isCompiled()){const n=this.context.getShaderInfoLog(this.shader);throw this.context.deleteShader(this.shader),new Error(n||"shader not compiled.")}}isCompiled(){return this.context.getShaderParameter(this.shader,this.context.COMPILE_STATUS)}}},7518:function(n,t,r){"use strict";r.r(t),r.d(t,{run:function(){return c}});r(8675),r(3462);var e=r(9300),i=r(9501),o=r(2795),a=r(1624);function s(){const n=new Date,t=[n.getHours(),n.getMinutes(),n.getSeconds()].reduce(((n,t)=>{let r=t.toString().split("");return 1===r.length&&(r=["0",r[0]]),[...n,Number(r[0]),Number(r[1])]}),[]);return t}function c(n){console.log("running...");const t=new e.Z(n),r=[800,500],c=[0,0,0,1];t.resize(r),t.clearColor(c);const{canvas:u,context:f}=t,h=new i.Z(f),p="u_resolution",l="u_time",d="a_index",m="u_verticesCount",y="u_pixelSize",g="u_lineWidth",A=`#version 300 es\n    precision highp float;\n\n    uniform vec2 ${p};\n    uniform int ${l}[6];\n    uniform float ${m};\n    uniform float ${y};\n    uniform float ${g};\n\n    in float ${d};\n\n    int [15]getNumberArray(int number) {\n      int numberArray[15];\n\n      if (number == 0) {\n        numberArray = int[15](\n          1, 1, 1,\n          1, 0, 1,\n          1, 0, 1,\n          1, 0, 1,\n          1, 1, 1\n        );\n      } else if (number == 1) {\n        numberArray = int[15](\n          0, 0, 1,\n          0, 0, 1,\n          0, 0, 1,\n          0, 0, 1,\n          0, 0, 1\n        );\n      } else if (number == 2) {      \n        numberArray = int[15](\n          1, 1, 1,\n          0, 0, 1,\n          1, 1, 1,\n          1, 0, 0,\n          1, 1, 1\n        );\n      } else if (number == 3) {\n        numberArray = int[15](\n          1, 1, 1,\n          0, 0, 1,\n          1, 1, 1,\n          0, 0, 1,\n          1, 1, 1\n        );\n      } else if (number == 4) {\n        numberArray = int[15](\n          1, 0, 1,\n          1, 0, 1,\n          1, 1, 1,\n          0, 0, 1,\n          0, 0, 1\n        );\n      } else if (number == 5) {\n        numberArray = int[15](\n          1, 1, 1,\n          1, 0, 0,\n          1, 1, 1,\n          0, 0, 1,\n          1, 1, 1\n        );\n      } else if (number == 6) {\n        numberArray = int[15](\n          1, 0, 0,\n          1, 0, 0,\n          1, 1, 1,\n          1, 0, 1,\n          1, 1, 1\n        );\n      } else if (number == 7) {\n        numberArray = int[15](\n          1, 1, 1,\n          0, 0, 1,\n          0, 0, 1,\n          0, 0, 1,\n          0, 0, 1\n        );\n      } else if (number == 8) {\n        numberArray = int[15](\n          1, 1, 1,\n          1, 0, 1,\n          1, 1, 1,\n          1, 0, 1,\n          1, 1, 1\n        );\n      } else if (number == 9) {\n        numberArray = int[15](\n          1, 1, 1,\n          1, 0, 1,\n          1, 1, 1,\n          0, 0, 1,\n          1, 1, 1\n        );\n      } else {\n        numberArray = int[15](\n          0, 0, 0,\n          0, 0, 0,\n          0, 0, 0,\n          0, 0, 0,\n          0, 0, 0\n        );\n      }\n\n      return numberArray;\n    }\n\n    void main() {\n      // pixels array size\n      float pixelsSize = 15.0;\n    \n      // position of the digit to draw in u_verticesCount\n      float digitPosition = floor(${d} / pixelsSize);\n    \n      // number to draw\n      int numberToDraw = u_time[int(digitPosition)];\n    \n      // pixels array to draw\n      int pixels[15] = getNumberArray(numberToDraw);\n    \n      // current pixel in pixels array to draw\n      int currentPixelIndex = int(${d} - pixelsSize * digitPosition);\n\n      if (pixels[currentPixelIndex] == 0) {\n        return;\n      }\n\n      // to adapt to screen ratio\n      float aspect = ${p}.y / ${p}.x;\n      vec2 scale = vec2(aspect, 1.0);\n\n      // default offset\n      vec2 positionOffset = vec2(-0.9, 0.25);\n      // spacing between pixels\n      float spacingSize = 0.075;\n      vec2 spacingOffset = vec2(spacingSize, -spacingSize);\n\n      if (${d} > pixelsSize - 1.0) {\n        positionOffset = (positionOffset - vec2(\n          (-(3.0 * spacingSize) - spacingSize) * digitPosition,\n          -(5.0 * spacingSize) * digitPosition\n        ));\n      }\n\n      float currentPixelRow = floor(${d} / ${g});\n      float currentPixelColumn = mod(${d}, ${g});\n      vec2 position = vec2(currentPixelColumn, currentPixelRow) * spacingOffset + positionOffset;\n\n      gl_Position = vec4(position * scale, 0.0, 1.0);\n      gl_PointSize = ${y};\n    }\n  `,v=`#version 300 es\n    precision highp float;\n\n    uniform vec2 ${p};\n    uniform int ${l}[6];\n    uniform float ${m};\n    uniform float ${y};\n\n    out vec4 fragColor;\n\n    void main() {  \n      fragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    }\n  `,x=new o.Z(f,f.VERTEX_SHADER,A),b=new o.Z(f,f.FRAGMENT_SHADER,v);[x,b].map((n=>{n.compile(),f.attachShader(h.program,n.shader)})),h.link(),f.useProgram(h.program);const w=15,T=6*w,R=1,_=15,P=3,S=new Float32Array([...Array(T).keys()].map((n=>Number(n)))),E=new a.Z(f);E.load(S);const C=f.getAttribLocation(h.program,d);f.enableVertexAttribArray(C),f.vertexAttribPointer(C,R,f.FLOAT,!1,0,0);const O=f.getUniformLocation(h.program,p),I=f.getUniformLocation(h.program,l),U=f.getUniformLocation(h.program,m),F=f.getUniformLocation(h.program,y),Z=f.getUniformLocation(h.program,g);f.uniform2f(O,u.width,u.height),f.uniform1iv(I,new Float32Array(s())),f.uniform1f(U,T),f.uniform1f(F,_),f.uniform1f(Z,P);const $=()=>{t.clearColor(c),f.uniform1iv(I,new Float32Array(s())),f.drawArrays(f.POINTS,0,S.length/R),requestAnimationFrame($)};requestAnimationFrame($)}},2482:function(n,t,r){"use strict";function e(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}r.d(t,{Z:function(){return e}})}}]);
//# sourceMappingURL=518.f3eb9d84.js.map