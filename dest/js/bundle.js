parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Wldl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=document.querySelector(".header"),n=["#2980b9","#3498db","#27ae60","#8e44ad","#e74c3c","#f1c40f","#ecf0f1","#1abc9c"],o=function(e){return'<svg class="header__icon-bg header__icon-bg--1">\n                <use xlink:href="img/svg/code.svg#'.concat(e,'"></use>\n            </svg>')},t=function(){var n="";["icon-jquery","icon-mongodb","icon-html5","icon-css3","icon-sass","icon-node-dot-js","icon-react","icon-javascript","icon-free-code-camp","icon-document-code","icon-document-code1","icon-visualstudiocode","icon-embed1","icon-embed"].forEach(function(e){n+=o(e)}),e.insertAdjacentHTML("afterbegin",n)},c=function(){t();var e=function(e){return Math.floor(Math.random()*e)},o=function(o,t){o.style.opacity=.7,o.style.bottom="".concat(t,"px"),o.style.left="".concat(e(window.innerWidth-20),"px");var c=e(6)+2;return o.style.width="".concat(c,"rem"),o.style.height="".concat(c,"rem"),o.style.fill=n[e(n.length)],o};console.log(window.innerWidth,window.innerHeight);var c=document.querySelectorAll(".header__icon-bg"),i=0,r=setInterval(function(){var n,t=e(3)+4;i<c.length?(n=o(c[i],-20),i++,function(e,n,t){setInterval(function(){n>1e3&&(e=o(e,n=0)),n+=t,e.style.bottom="".concat(n,"px")},50)}(n,-20,t)):clearInterval(r)},1e3)},i=c;exports.default=i;
},{}],"Ayce":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=document.querySelector(".portofolio__container"),t=function(o){var t="";return o.forEach(function(o){t+='<li class="portofolio__tools--item">'.concat(o,"</li>")}),t},e=function(e){var i=e.projectName,a=e.image,n=e.tools,s=e.summary,r=e.liveLink,c=e.gitLink,l=t(n),p='\n    <figure class="portofolio__photo">\n        <img src="'.concat(a,'" alt="img" class="portofolio__img">\n        <h4 class="heading-4 portofolio__project-title">').concat(i,"</h4>\n    </figure>"),m='\n    <div class="portofolio__tools">\n        <div class="portofolio__tools--title">Built with:</div>\n        <ul class="portofolio__tools--list">'.concat(l,"</ul>\n    </div>"),g='<div class="portofolio__project-summary">'.concat(s,"</div>"),u='\n    <div class="portofolio__project-buttons">\n        \x3c!-- <button class="portofolio__btn-primary">View Live</button>\n        <button class="portofolio__btn-secondary">View Source Code</button> --\x3e\n        <a target="_blank" rel="noopener noreferrer" href="'.concat(r,'" class="portofolio__btn-primary">View Live</a>\n        <a target="_blank" rel="noopener noreferrer" href="').concat(c,'" class="portofolio__btn-secondary">View Source Code</a>\n    </div>'),d='\n    <div class="portofolio__box">\n        '.concat(p,"\n        ").concat(m,"\n        ").concat(g,"\n        ").concat(u,"\n    </div>");o.insertAdjacentHTML("beforeend",d)},i=function(){[{projectName:"CRMag-Client",image:"img/crmag-client.png",tools:["React","React Router DOM","JSX","CSS","Sass","CRMag API"],summary:"This is an online store that consumes an API that I created",liveLink:"https://adi1496.github.io/crmag-app/",gitLink:"https://github.com/adi1496/crmag-app"},{projectName:"CRMag API",image:"img/crmag-client-cover.png",tools:["Node.js","Express","Mongoose","Json Web Token","BcryptJS","Nodemailer"],summary:"This is an online store that consumes an API that I created",liveLink:"",gitLink:"https://github.com/adi1496/crmag"},{projectName:"AssistCar",image:"img/assistcar.png",tools:["Node.js","Express","Mongoose","Json Web Token","BcryptJS","Nodemailer"],summary:"This is an online store that consumes an API that I created",liveLink:"http://assistcar.herokuapp.com/",gitLink:"https://github.com/adi1496/AssistCar"},{projectName:"BudgetApp",image:"img/budgetapp.png",tools:["Vanilla JS","Firebase","Firestore","HTML","CSS","PWA"],summary:"This is an online store that consumes an API that I created",liveLink:"https://adi1496.github.io/budget-app/",gitLink:"https://github.com/adi1496/budget-app"},{projectName:"Fooders",image:"img/fooders.png",tools:["Vanilla JS","HTML","CSS","API","SCSS"],summary:"This is an online store that consumes an API that I created",liveLink:"https://foodersapp.herokuapp.com/",gitLink:"https://github.com/adi1496/Fooders"}].forEach(function(o){e(o)})},a=i;exports.default=a;
},{}],"kueR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=document.querySelector(".footer__social"),n=document.querySelector(".header__social"),a=function(e){var n=e.link,a=e.svgName;return'<a target="_blank" href="'.concat(n,'" class="header__link">\n                        <svg class="header__icon header__icon--linkedin">\n                            <use xlink:href="img/svg/social.svg#').concat(a,'"></use>\n                        </svg>\n                    </a>')},t=function(){var t="";[{link:"https://www.linkedin.com/in/adi-matei-9a999012a/",svgName:"icon-linkedin"},{link:"https://github.com/adi1496",svgName:"icon-github"},{link:"https://www.hackerrank.com/ady_matey",svgName:"icon-hackerrank"}].forEach(function(e){t+=a(e)}),n.insertAdjacentHTML("beforeend",t),e.insertAdjacentHTML("beforeend",t)},i=t;exports.default=i;
},{}],"dP6J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=document.getElementById("frontend-skills"),e=document.getElementById("backend-skills"),i=document.getElementById("other-skills"),c=function(n,e,i){var c='<li class="skills__item">\n                    <img src="'.concat(e,'" alt="rest-api" class="skills__icon">\n                    <div class="skills__name">').concat(n,"</div>\n                </li>");i.insertAdjacentHTML("beforeend",c)},s=function(n,e){var i=n[0],s=n[1];if("Rest API"!==i){var o='<li class="skills__item">\n                    <svg class="skills__icon">\n                        <use xlink:href="img/svg/brands-color.svg#'.concat(s,'"></use>\n                    </svg>\n                    <div class="skills__name">').concat(i,"</div>\n                </li>");e.insertAdjacentHTML("beforeend",o)}else c(i,s,e)},o=function(){[["HTML",'icon-html5"'],["CSS","icon-css3"],["SASS","icon-sass"],["JavaScript","icon-javascript"],["TypeScript","icon-typescript"],["React","icon-react"],["JSX","icon-react"],["Light jQuery","icon-jquery"]].forEach(function(e){s(e,n)}),[["Node.js","icon-node-dot-js"],["Express","icon-node-dot-js"],["MongoDB","icon-mongodb"],["Mongoose","icon-mongodb"],["Rest API","img/restAPI.png"],["Auth-Security","icon-lock-stripes"],["Microservices","icon-embed"]].forEach(function(n){s(n,e)}),[["NPM","icon-npm"],["Postman","icon-postman"],["Git","icon-git"],["GitHub","icon-github"],["Parcel","icon-embed"],["Webpack","icon-webpack"]].forEach(function(n){s(n,i)})},t=o;exports.default=t;
},{}],"bDoZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){document.querySelectorAll(".navigation__item").forEach(function(e){e.addEventListener("click",function(e){switch(e.preventDefault(),console.log(e.target.id),e.target.id){case"home-btn":document.getElementById("header").scrollIntoView({behavior:"smooth"});break;case"about-btn":document.getElementById("about-me").scrollIntoView({behavior:"smooth"});break;case"portofolio-btn":document.getElementById("portofolio").scrollIntoView({behavior:"smooth"});break;case"contact-btn":document.getElementById("contact").scrollIntoView({behavior:"smooth"})}})}),document.querySelector(".header__button").addEventListener("click",function(e){e.preventDefault(),document.getElementById("about-me").scrollIntoView({behavior:"smooth"})})},t=e;exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./animations.js")),r=n(require("./projects.js")),t=n(require("./social.js")),u=n(require("./skills.js")),i=n(require("./listeners.js"));function n(e){return e&&e.__esModule?e:{default:e}}(0,t.default)(),(0,u.default)(),(0,r.default)(),(0,i.default)(),(0,e.default)(),window.addEventListener("resize",function(r){r.preventDefault(),document.querySelectorAll(".header__icon-bg").forEach(function(e){return e.remove()}),(0,e.default)()});
},{"./animations.js":"Wldl","./projects.js":"Ayce","./social.js":"kueR","./skills.js":"dP6J","./listeners.js":"bDoZ"}]},{},["Focm"], null)
//# sourceMappingURL=/bundle.js.map