(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0b4c2f"],{"0e9c":function(e,t,i){"use strict";var n=i("9ae7"),r=i.n(n);r.a},"99af":function(e,t,i){"use strict";var n=i("23e7"),r=i("d039"),c=i("e8b5"),a=i("861d"),o=i("7b0b"),s=i("50c4"),m=i("8418"),d=i("65f0"),p=i("1dde"),l=i("b622"),f=i("2d00"),w=l("isConcatSpreadable"),u=9007199254740991,g="Maximum allowed index exceeded",b=f>=51||!r((function(){var e=[];return e[w]=!1,e.concat()[0]!==e})),_=p("concat"),y=function(e){if(!a(e))return!1;var t=e[w];return void 0!==t?!!t:c(e)},h=!b||!_;n({target:"Array",proto:!0,forced:h},{concat:function(e){var t,i,n,r,c,a=o(this),p=d(a,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?a:arguments[t],y(c)){if(r=s(c.length),l+r>u)throw TypeError(g);for(i=0;i<r;i++,l++)i in c&&m(p,l,c[i])}else{if(l>=u)throw TypeError(g);m(p,l++,c)}return p.length=l,p}})},"9ae7":function(e,t,i){},bc7c:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"tab d-f"},e._l(e.tabs,(function(t,n){return i("div",{key:n,staticClass:"tabchange d-f align-items justify-content-center",class:{active:n==e.menuIndex},on:{click:function(t){return e.menuShow(n)}}},[e._v(e._s(t))])})),0),i("div",{staticClass:"brand-content d-f"},e._l(e.promos,(function(t,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.type==e.menuIndex,expression:"promo.type==menuIndex"}],key:n,staticClass:"content-wrap raduis4 p-r"},[e._m(0,!0),i("div",{staticClass:"img raduis4"},[i("img",{staticClass:"raduis4",staticStyle:{width:"100%"},attrs:{src:t.src}})]),i("div",{staticClass:"content p-r"},[i("div",{staticClass:"title"},[i("p",[e._v(e._s(t.title))])]),i("span",{staticClass:"period p-a raduis4"},[e._v(e._s(t.time))])])])})),0)])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hover p-a d-f flex-direction-column justify-content-center"},[i("div",{staticClass:"hover-btn"},[i("button",[e._v("查看详情")])])])}],c=(i("99af"),i("b85c")),a={data:function(){return{timer:"",flag:!1,menuIndex:0,tabs:["新手优惠","限时优惠","长期优惠","往期优惠"],promos:[{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",type:"0",title:"贴图回帖可免费获得8UST,新手优惠",time:"",deadline:"2020-8-15 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",type:"0",title:"贴图回帖可免费获得8UST,新手优惠",time:"",deadline:"unlimited"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",type:"0",title:"贴图回帖可免费获得8UST,新手优惠",time:"",deadline:"unlimited"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",type:"0",title:"贴图回帖可免费获得8UST,新手优惠",time:"",deadline:"unlimited"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",type:"1",title:"贴图回帖可免费获得8UST,限时优惠",time:"",deadline:"2020-8-10 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",type:"1",title:"贴图回帖可免费获得8UST,限时优惠",time:"",deadline:"2020-9-11 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",type:"1",title:"贴图回帖可免费获得8UST,限时优惠",time:"",deadline:"2020-10-12 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",type:"1",title:"贴图回帖可免费获得8UST,限时优惠",time:"",deadline:"2020-11-13 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",type:"2",title:"贴图回帖可免费获得8UST,长期优惠",time:"",deadline:"2020-12-10 24:00"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",type:"2",title:"贴图回帖可免费获得8UST,长期优惠",time:"",deadline:"unlimited"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",type:"2",title:"贴图回帖可免费获得8UST,长期优惠",time:"",deadline:"unlimited"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"},{src:"https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",type:"3",title:"贴图回帖可免费获得8UST,已过期",time:"",deadline:"expired"}]}},mounted:function(){this.timer=setInterval(this.getTime,1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{menuShow:function(e){this.menuIndex=e},getTime:function(){var e,t=this.promos,i=Object(c["a"])(this.promos);try{for(i.s();!(e=i.n()).done;){var n=e.value;n["time"]=this.timeDown(n["deadline"])}}catch(r){i.e(r)}finally{i.f()}this.promos=t},timeDown:function(e){if("unlimited"===e)return"长期活动";if("expired"===e)return"已结束";var t=new Date(e),i=new Date,n=t-i;if(n<=0)return"已结束";var r=parseInt(n/1e3/60/60/24),c=parseInt(n/1e3/60/60%24),a=parseInt(n/1e3/60%60),o=parseInt(n/1e3%60);return c=c>9?c:"0"+c,a=a>9?a:"0"+a,o=o>9?o:"0"+o,"截止日期: ".concat(r,"天 ").concat(c,"小时 ").concat(a,"分钟 ").concat(o,"秒")}}},o=a,s=(i("0e9c"),i("2877")),m=Object(s["a"])(o,n,r,!1,null,"e568b77c",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1d0b4c2f.fa805d50.js.map