if(!self.define){let e,r={};const n=(n,i)=>(n=new URL(n+".js",i).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let d={};const o=e=>n(e,l),u={module:{uri:l},exports:d,require:o};r[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(s(...e),d)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"web-rendering"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/web-rendering/css/app.fc2830db.css",revision:null},{url:"/web-rendering/index.html",revision:"83d17097843468e4547774178ccf8dd0"},{url:"/web-rendering/js/123.4c299289.js",revision:null},{url:"/web-rendering/js/206.d771b262.js",revision:null},{url:"/web-rendering/js/271.4c8fc1ea.js",revision:null},{url:"/web-rendering/js/313.197cf369.js",revision:null},{url:"/web-rendering/js/516.1ad3f8c8.js",revision:null},{url:"/web-rendering/js/518.f3eb9d84.js",revision:null},{url:"/web-rendering/js/705.d5cd0121.js",revision:null},{url:"/web-rendering/js/app.f2c25979.js",revision:null},{url:"/web-rendering/js/chunk-vendors.416b9bc8.js",revision:null},{url:"/web-rendering/manifest.json",revision:"971e3bb96dae0d05ad4679c1ec7b32d5"},{url:"/web-rendering/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map