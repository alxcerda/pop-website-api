(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],m=0,v=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00e5":function(t,e,a){"use strict";var s=a("c425"),n=a.n(s);n.a},"01f7":function(t,e,a){},"0ec6":function(t,e,a){t.exports=a.p+"img/image3.d87db7e7.jpg"},"17e6":function(t,e,a){t.exports=a.p+"img/image2.2fe2ab37.jpg"},"21bb":function(t,e,a){"use strict";var s=a("2dad"),n=a.n(s);n.a},"2dad":function(t,e,a){},"53d7":function(t,e,a){"use strict";var s=a("01f7"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("795d"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view"),a("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("nav",{staticClass:"upper-nav"},[a("MenuIcon",{staticClass:"menu-icon",on:{click:t.toggleNav}}),a("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("POP")]),a("ul",{staticClass:"desktop-nav-ul"},[a("li",[a("router-link",{staticClass:"link",attrs:{to:"/get-app"}},[t._v("Shop")])],1),a("li",[a("router-link",{staticClass:"link",attrs:{to:"/get-app"}},[t._v("Host")])],1),a("li",{on:{click:t.scrollMeTo}},[a("router-link",{staticClass:"link",attrs:{to:"/#about"}},[t._v("About")])],1),a("li",[a("router-link",{staticClass:"link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])],1),a("ul",{ref:"nav",staticClass:"mobile-nav-ul"},[a("li",{on:{click:t.hideNav}},[a("router-link",{staticClass:"link",attrs:{to:"/get-app"}},[t._v("Shop")])],1),a("hr"),a("li",{on:{click:t.hideNav}},[a("router-link",{staticClass:"link",attrs:{to:"/get-app"}},[t._v("Host")])],1),a("hr"),a("li",{on:{click:function(e){t.scrollMeTo(),t.hideNav()}}},[a("router-link",{staticClass:"link",attrs:{to:"/#about"}},[t._v("About")])],1),a("hr"),a("li",{on:{click:t.hideNav}},[a("router-link",{staticClass:"link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1),a("hr")])])},r=[],l=a("ed8c"),c={name:"NavBar",components:{MenuIcon:l["a"]},methods:{hideNav:function(){var t=this.$refs.nav.classList;t.remove("active")},toggleNav:function(){var t=this.$refs.nav.classList;t.contains("active")?t.remove("active"):t.add("active")},scrollMeTo:function(){if("/#about"===this.$route.fullPath){var t=document.getElementById("about"),e=t.offsetTop;window.scrollTo(0,e-100)}}}},u=c,m=(a("ed6b"),a("2877")),v=Object(m["a"])(u,o,r,!1,null,null,null),p=v.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("ul",{staticClass:"footer-links"},[a("li",[a("router-link",{attrs:{to:"/contact"}},[a("div",{staticClass:"footer-link"},[a("div",{staticClass:"link-text"},[t._v("Contact Us")]),a("Email",{staticClass:"icon"})],1)])],1),a("li",[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"footer-link"},[a("a",{staticClass:"link-text",attrs:{href:"https://twitter.com/Pop_Marketplace"}},[t._v(" Follow Us ")]),a("Twitter",{staticClass:"icon"})],1)])],1),a("li",[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"footer-link"},[a("div",{staticClass:"link-text"},[t._v("Privacy Statement")]),a("Information",{staticClass:"icon"})],1)])],1)]),a("div",{staticClass:"copyright"},[a("Copyright"),t._v("Pop Marketplace")],1)])},f=[],h=a("6c95"),b=a("81dd"),g=a("e36a"),C=a("1b04"),_={name:"Footer",components:{Twitter:h["a"],Email:b["a"],Copyright:g["a"],Information:C["a"]}},y=_,x=(a("53d7"),Object(m["a"])(y,d,f,!1,null,null,null)),k=x.exports,w={name:"App",components:{NavBar:p,Footer:k}},N=w,j=(a("5c0b"),Object(m["a"])(N,n,i,!1,null,null,null)),O=j.exports,P=a("dad3"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"page-container"},[a("div",{staticClass:"title-container"},[a("Title"),a("BrowseButton")],1)]),t._m(0),t._m(1),t._m(2),t._m(3)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"sub-heading-text"},[t._v("Discover new styles")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sec"},[s("img",{attrs:{src:a("80e5")}}),s("div",{staticClass:"text-container"},[s("div",{staticClass:"main-text"},[t._v("See what's on sale")]),s("div",{staticClass:"sub-text"},[t._v(" Find your next favourite shirt or shoes from nearby stores ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sec"},[s("div",{staticClass:"text-container"},[s("div",{staticClass:"main-text"},[t._v("Get directions")]),s("div",{staticClass:"sub-text"},[t._v(" When you've found your new fit Pop will show you how to get to the store ")])]),s("img",{attrs:{src:a("17e6")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sec"},[s("img",{attrs:{src:a("0ec6")}}),s("div",{staticClass:"text-container"},[s("div",{staticClass:"main-text"},[t._v("Support local businesses")]),s("div",{staticClass:"sub-text"},[t._v(" All items are sold by independent sellers ")])])])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[t._v("Your Local Marketplace")])},M=[],S={name:"Title"},B=S,F=(a("8b70"),Object(m["a"])(B,T,M,!1,null,null,null)),I=F.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"browse-btn-container"},[a("div",{staticClass:"browse-btn-inner"},[a("div",{staticClass:"browse-btn"},[t._v("Get The App")])])])}],L={name:"BrowseButton"},D=L,H=(a("fcac"),Object(m["a"])(D,U,A,!1,null,null,null)),W=H.exports,q={name:"Home",components:{Title:I,BrowseButton:W}},G=q,J=(a("21bb"),Object(m["a"])(G,E,$,!1,null,null,null)),R=J.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-us"},[a("div",{staticClass:"contact-us-box"},[a("div",{staticClass:"contact-title"},[t._v("Contact Us")]),a("form",{staticClass:"input-container",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"names"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input-message",attrs:{placeholder:"Type your message here..."},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),a("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submit")])])])])},z=[],K=a("04b9"),Q=a.n(K),V={name:"ContactUs",data:function(){return{firstName:"",lastName:"",email:"",message:""}},methods:{submit:function(){Q.a.post("api/contact",{firstName:this.firstName,lastName:this.lastName,email:this.email,message:this.message}).then((function(){return console.log("Contact request added")})).catch((function(t){return console.log(t)})),this.firstName="",this.lastName="",this.email="",this.message=""}}},X=V,Z=(a("8ebb"),Object(m["a"])(X,Y,z,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-ready"},[a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[t._v("We're not quite ready yet!")]),a("hr"),a("div",{staticClass:"container-info"},[t._v(" We appreciate your enthusiasm! If you enter your email below, we'll keep you updated with our progress on Pop (and give you first access when it's ready). ")]),a("form",{staticClass:"submit",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v("Submit")])])])])},at=[],st={name:"NotReady",data:function(){return{email:""}},methods:{submit:function(){Q.a.post("api/email-signup",{email:this.email}).then((function(){return console.log("Email added")})).catch((function(t){return console.log(t)})),this.email=""}}},nt=st,it=(a("00e5"),Object(m["a"])(nt,et,at,!1,null,null,null)),ot=it.exports;s["a"].use(P["a"]);var rt=new P["a"]({mode:"history",routes:[{path:"/",name:"home",component:R},{path:"/get-app",name:"not-ready",component:ot},{path:"/contact",name:"contact-us",component:tt}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),lt=a("7fca"),ct=a.n(lt);s["a"].config.productionTip=!1,new s["a"]({router:rt,render:function(t){return t(O)}}).$mount("#app"),s["a"].use(ct.a)},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"80e5":function(t,e,a){t.exports=a.p+"img/image1.c426c2f6.jpg"},"8b70":function(t,e,a){"use strict";var s=a("ff94"),n=a.n(s);n.a},"8ebb":function(t,e,a){"use strict";var s=a("c290"),n=a.n(s);n.a},"9a57":function(t,e,a){},"9c0c":function(t,e,a){},c290:function(t,e,a){},c425:function(t,e,a){},d5a8:function(t,e,a){},ed6b:function(t,e,a){"use strict";var s=a("d5a8"),n=a.n(s);n.a},fcac:function(t,e,a){"use strict";var s=a("9a57"),n=a.n(s);n.a},ff94:function(t,e,a){}});
//# sourceMappingURL=app.be0c1d28.js.map