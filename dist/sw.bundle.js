if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const c=e=>n(e,f),d={module:{uri:f},exports:s,require:c};i[f]=Promise.all(a.map((e=>d[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-0300ce97"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"192.bundle.js",revision:"417f8058bf773d5c087613724b456c03"},{url:"2.bundle.js",revision:"a27efe0e11a871a06af6483bd0c52dc4"},{url:"8e438958ab0a4ec5a228.jpg",revision:null},{url:"aa6581159e60eae64e59.jpg",revision:null},{url:"app.webmanifest",revision:"cf99b402e350209298431daf6b9951b2"},{url:"app~7bd12dde.bundle.js",revision:"f304aefb4cea2c9af58b913859dfc32d"},{url:"app~a51fa3f5.bundle.js",revision:"b4fef5f684975a1559eb732c700cbe37"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"105dfe9064deb4b018e0ec0a56809931"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"d1a5013fb972e31b9232e2359d718cf7"},{url:"app~e4317507.bundle.js",revision:"3d1bcab9d4869b30ba7656c8d13995a1"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"bae0fe31dc2f97e8f41d7a9b383c6c46"},{url:"icons/icon-128x128.png",revision:"0ebffa38534d2422f5e0dcb4e9d07ece"},{url:"icons/icon-144x144.png",revision:"622d938625c74970fcb3adf169aff19d"},{url:"icons/icon-152x152.png",revision:"59a5aba6021ce85c1584087e1ffdf026"},{url:"icons/icon-192x192.png",revision:"bae0fe31dc2f97e8f41d7a9b383c6c46"},{url:"icons/icon-384x384.png",revision:"99d24cfa7f730bdcee4dbf6afab7bf38"},{url:"icons/icon-512x512.png",revision:"a8fc8ad91a72197e2a9a8e4961e49bc2"},{url:"icons/icon-72x72.png",revision:"de03bc43f48155490015564309c72821"},{url:"icons/icon-96x96.png",revision:"54252fb6c4bf2cf3dcded4ad0044f4d1"},{url:"images/heros/hero-image_4-large.jpg",revision:"36ecae0a6af53108b75d1787208640de"},{url:"images/heros/hero-image_4-small.jpg",revision:"09473ff37a1d35aa80e34d57e615e863"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"2e0a18ab14015138f0e74bf83ed06a50"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"2023-06-06T22:48:37.730Z",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map