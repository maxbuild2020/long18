(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf3ce2c"],{1148:function(t,e,n){"use strict";var r=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),s=n("1d80"),c=n("4840"),l=n("8aa5"),o=n("50c4"),u=n("14c3"),f=n("9263"),p=n("d039"),v=[].push,d=Math.min,g=4294967295,m=!p((function(){return!RegExp(g,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var c,l,o,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=new RegExp(t.source,p+"g");while(c=f.call(m,r)){if(l=m.lastIndex,l>d&&(u.push(r.slice(d,c.index)),c.length>1&&c.index<r.length&&v.apply(u,c.slice(1)),o=c[0].length,d=l,u.length>=i))break;m.lastIndex===c.index&&m.lastIndex++}return d===r.length?!o&&m.test("")||u.push(""):u.push(r.slice(d)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var s=n(r,t,this,a,r!==e);if(s.done)return s.value;var f=i(t),p=String(this),v=c(f,RegExp),h=f.unicode,_=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),x=new v(m?f:"^(?:"+f.source+")",_),b=void 0===a?g:a>>>0;if(0===b)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,E=0,C=[];while(E<p.length){x.lastIndex=m?E:0;var w,A=u(x,m?p:p.slice(E));if(null===A||(w=d(o(x.lastIndex+(m?0:E)),p.length))===y)E=l(p,E,h);else{if(C.push(p.slice(y,E)),C.length===b)return C;for(var I=1;I<=A.length-1;I++)if(C.push(A[I]),C.length===b)return C;E=y=w}}return C.push(p.slice(y)),C}]}),!m)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),s=n("50c4"),c=n("a691"),l=n("1d80"),o=n("8aa5"),u=n("14c3"),f=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=r.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(n,r){var a=l(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!h&&_||"string"===typeof r&&-1===r.indexOf(x)){var i=n(e,t,this,r);if(i.done)return i.value}var l=a(t),v=String(this),d="function"===typeof r;d||(r=String(r));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}var E=[];while(1){var C=u(l,v);if(null===C)break;if(E.push(C),!g)break;var w=String(C[0]);""===w&&(l.lastIndex=o(v,s(l.lastIndex),y))}for(var A="",I=0,R=0;R<E.length;R++){C=E[R];for(var S=String(C[0]),T=f(p(c(C.index),v.length),0),$=[],P=1;P<C.length;P++)$.push(m(C[P]));var j=C.groups;if(d){var k=[S].concat($,T,v);void 0!==j&&k.push(j);var F=String(r.apply(void 0,k))}else F=b(S,v,T,$,j,r);T>=I&&(A+=v.slice(I,T)+F,I=T+S.length)}return A+v.slice(I)}];function b(t,n,r,a,s,c){var l=r+t.length,o=a.length,u=g;return void 0!==s&&(s=i(s),u=d),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>o){var f=v(u/10);return 0===f?e:f<=o?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},"69bf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slots"},[n("div",{staticClass:"slots-header d-f justify-content-between align-items-center"},[n("div",{staticClass:"game-pool"},[n("div",{staticClass:"game-pool-wraper"},[n("div",{staticClass:"game-pool-bg",class:{active:t.isActive}},[n("p",[t._v("电子游戏奖金奖池")]),n("span",[t._v(t._s(t._f("currency")(t.totalAmount,"¥")))])])])]),n("div",{staticClass:"game-pool-platform"},[t._m(0),n("p",[t._v("AG电游总奖金")]),n("span",[t._v(t._s(t._f("currency")(t.AGAmount,"¥")))])]),n("div",{staticClass:"game-pool-platform"},[t._m(1),n("p",[t._v("PT电游总奖金")]),n("span",[t._v(t._s(t._f("currency")(t.MGAmount,"¥")))])]),n("div",{staticClass:"game-pool-platform"},[t._m(2),n("p",[t._v("MG电游总奖金")]),n("span",[t._v(t._s(t._f("currency")(t.MGAmount,"¥")))])])]),t._m(3),n("div",{staticClass:"high d-f justify-content-between"},[t._m(4),n("div",{staticClass:"high-prize raduis4"},[t._m(5),n("div",{staticClass:"content-item d-f"},t._l(t.prizes,(function(e,r){return n("div",{key:r,staticClass:"content-wraper d-f p-r"},[t._m(6,!0),n("div",{staticClass:"inner-content"},[n("div",{staticClass:"tiny-title"},[t._v(t._s(e.game))]),n("div",{staticClass:"tiny-content"},[n("p",[t._v(" 人气 "),n("span",[t._v(t._s(e.popularity))])]),n("p",[t._v(" 派彩 "),n("span",[t._v(t._s(e.bonus))])]),n("div",{staticClass:"type"},[n("span",[t._v(t._s(e.platform))]),n("span",[t._v("|")]),n("span",[t._v(t._s(e.thread)+"线")])])])])])})),0)])]),n("div",{staticClass:"high-jackpot raduis4"},[t._m(7),n("div",{staticClass:"content-item d-f"},t._l(t.jackpots,(function(e,r){return n("div",{key:r},[n("div",[n("div",{staticClass:"content-wraper d-f"},[t._m(8,!0),n("div",{staticClass:"inner-content"},[n("div",{staticClass:"tiny-title"},[t._v(t._s(e.game))]),n("div",{staticClass:"tiny-content"},[n("div",{staticClass:"type"},[n("span",[t._v(t._s(e.thread))]),n("span",[t._v("|")]),n("span",[t._v(t._s(e.platform)+"线")])])])])])]),n("div",{staticClass:"jackpot"},[n("span",[t._v(t._s(e.amountx))])])])})),0)]),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-pool-platform-wraper"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/ag.892a02b5.png_.webp",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-pool-platform-wraper"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/pt.4e030d7c.png_.webp",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-pool-platform-wraper"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/mg.b41feb90.png_.webp",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab d-f"},[n("span",{staticClass:"d-f align-items justify-content-center"},[t._v("真人娱乐")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"high-explosive raduis4"},[n("div",{staticClass:"title"},[t._v(" 高爆 "),n("span",[t._v("7日内数据统计")])]),n("div",{staticClass:"content-wraper d-f"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/fishking.4949dc8d.png_.webp?22d0b4dc164d374aec4558b66eb08830"}})]),n("div",{staticClass:"inner-content"},[n("div",{staticClass:"tiny-title"},[t._v("AG捕鱼王")]),n("div",{staticClass:"tiny-content"},[n("p",[t._v(" 投注笔数 "),n("span",[t._v("266,395,636.00")])]),n("p",[t._v(" 派奖金额 "),n("span",[t._v("228,581,096.41")])])]),n("button",[t._v("立即游戏")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v(" 高派彩 "),n("span",[t._v("7日内数据统计")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img d-f flex-direction-column align-content-between"},[n("img",{staticClass:"raduis4",attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/glrj.png_.webp"}}),n("button",{staticClass:"raduis4"},[t._v("立即游戏")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v(" 高奖池 "),n("span",[t._v("7日内数据统计")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img d-f flex-direction-column align-content-between"},[n("img",{staticClass:"raduis4",attrs:{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/zcjbjp.png_.webp"}}),n("button",{staticClass:"raduis4"},[t._v("立即游戏")])])}],i=(n("a15b"),n("b680"),n("ac1f"),n("5319"),n("1276"),n("b85c")),s=n("c48c"),c={data:function(){return{totalAmount:876524321,AGAmount:153454323,PTAmount:645633233,MGAmount:342345454,isActive:!0,jackpotsAmount:"",timer1:"",timer2:"",prizes:[{game:"疯狂铁路-疯狂铁路疯狂铁路",popularity:"996,588.00",bonus:"3,250.00",platform:"PNG",thread:"0"},{game:"八宝一路",popularity:"994,314.00",bonus:"70,098.00",platform:"PT",thread:"243"},{game:"押韵的卷轴",popularity:"988,056.00",bonus:"38,373.00",platform:"MG",thread:"0"},{game:"万圣节",popularity:"984,490.00",bonus:"6,250.00",platform:"PNG",thread:"0"},{game:"疯狂铁路",popularity:"984,325.00",bonus:"9,250.00",platform:"TTG",thread:"10"}],jackpots:[{game:"角斗士",platform:"PT",thread:"25",amount:parseInt("1231248"),amountx:""},{game:"招财进宝",platform:"PT",thread:"9",amount:parseInt("12423534"),amountx:""},{game:"炫酷水果",platform:"PT",thread:"25",amount:parseInt("6543521"),amountx:""},{game:"泰国神庙",platform:"PT",thread:"15",amount:parseInt("123466666"),amountx:""},{game:"沉默的武士",platform:"PT",thread:"25",amount:parseInt("7654332"),amountx:""}]}},methods:{toggle:function(){var t=this;setInterval((function(){t.isActive=!t.isActive}),1e3)},getAmount:function(){var t,e=this.jackpots,n=Object(i["a"])(this.jackpots);try{for(n.s();!(t=n.n()).done;){var r=t.value;r["amountx"]=this.momney(r["amount"]+=.01)}}catch(a){n.e(a)}finally{n.f()}this.jackpots=e},momney:function(t,e){e=e>0&&e<=20?e:2,t=parseFloat((t+"").replace(/[^\d\.-]/g,"")).toFixed(e)+"";for(var n=t.split(".")[0].split("").reverse(),r=t.split(".")[1],a="",i=0;i<n.length;i++)a+=n[i]+((i+1)%3==0&&i+1!=n.length?",":"");return a.split("").reverse().join("")+"."+r}},mounted:function(){var t=this;this.timer1=setInterval((function(){t.AGAmount+=.01,t.MGAmount+=.01,t.PTAmount+=.01,t.totalAmount+=.01}),100),this.timer2=setInterval(this.getAmount,100)},beforeDestroy:function(){clearInterval(this.timer1),clearInterval(this.timer2)},filters:{currency:s["a"]}},l=c,o=(n("ee55"),n("2877")),u=Object(o["a"])(l,r,a,!1,null,"4da7ccf7",null);e["default"]=u.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||o;f&&(c=function(t){var e,n,a,c,f=this,p=o&&f.sticky,v=r.call(f),d=f.source,g=0,m=t;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),m=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(d="(?: "+d+")",m=" "+m,g++),n=new RegExp("^(?:"+d+")",v)),u&&(n=new RegExp("^"+d+"$(?!\\s)",v)),l&&(e=f.lastIndex),a=i.call(p?n:f,m),p?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&s.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),i=n("fc6a"),s=n("a640"),c=[].join,l=a!=Object,o=s("join",",");r({target:"Array",proto:!0,forced:l||!o},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a494:function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},b680:function(t,e,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),s=n("1148"),c=n("d039"),l=1..toFixed,o=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){l.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,n,r,c,l=i(this),p=a(t),v=[0,0,0,0,0,0],d="",g="0",m=function(t,e){var n=-1,r=e;while(++n<6)r+=t*v[n],v[n]=r%1e7,r=o(r/1e7)},h=function(t){var e=6,n=0;while(--e>=0)n+=v[e],v[e]=o(n/t),n=n%t*1e7},_=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var n=String(v[t]);e=""===e?n:e+s.call("0",7-n.length)+n}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(d="-",l=-l),l>1e-21)if(e=f(l*u(2,69,1))-69,n=e<0?l*u(2,-e,1):l/u(2,e,1),n*=4503599627370496,e=52-e,e>0){m(0,n),r=p;while(r>=7)m(1e7,0),r-=7;m(u(10,r,1),0),r=e-1;while(r>=23)h(1<<23),r-=23;h(1<<r),m(1,1),h(2),g=_()}else m(0,n),m(1<<-e,0),g=_()+s.call("0",p);return p>0?(c=g.length,g=d+(c<=p?"0."+s.call("0",p-c)+g:g.slice(0,c-p)+"."+g.slice(c-p))):g=d+g,g}})},c48c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("b680"),n("ac1f"),n("5319");var r=/(\d{3})(?=\d)/g;function a(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"",n=null!=n?n:2;var a=Math.abs(t).toFixed(n),i=n?a.slice(0,-1-n):a,s=i.length%3,c=s>0?i.slice(0,s)+(i.length>3?",":""):"",l=n?a.slice(-1-n):"",o=t<0?"-":"";return o+e+c+i.slice(s).replace(r,"$1,")+l}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),s=n("9263"),c=n("9112"),l=i("species"),o=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=i(t),g=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),m=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!g||!m||"replace"===t&&(!o||!u||p)||"split"===t&&!v){var h=/./[d],_=n(d,""[t],(function(t,e,n,r,a){return e.exec===s?g&&!a?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=_[0],b=_[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},ee55:function(t,e,n){"use strict";var r=n("a494"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-2cf3ce2c.3ac7a54d.js.map