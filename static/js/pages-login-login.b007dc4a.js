(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"04f6":function(t,e,n){"use strict";n.r(e);var i=n("5d0c"),a=n("76d2");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("93ff");var c,r=n("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"47d4f609",null,!1,i["a"],c);e["default"]=d.exports},"07ac7":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("5530")),c=i(n("5f05")),r=n("2f62"),d={data:function(){return{}},methods:(0,o.default)((0,o.default)({},(0,r.mapMutations)(["SET_MEMBER"])),{},{getUserInfo:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,o,r,d,f,s,u,v,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.detail,a=i.errMsg,o=i.userInfo,"getUserInfo:ok"===a){n.next=8;break}return uni.showModal({title:"提示",content:"您取消了授权登录，请重新授权",showCancel:!1}),e.SET_MEMBER(c.default),uni.navigateBack(),n.abrupt("return");case 8:r=o.avatarUrl,d=o.city,f=o.country,s=o.gender,u=o.nickName,v=o.province,l=Object.assign(c.default,{avatar:r,city:d,country:f,gender:s,nickname:u,province:v}),e.SET_MEMBER(l),uni.navigateBack();case 12:case"end":return n.stop()}}),n)})))()},login:function(){this.SET_MEMBER(c.default),uni.navigateBack()}})};e.default=d},"236c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-47d4f609]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-47d4f609]:before{content:"\\e667"}.iconshoucangfill[data-v-47d4f609]:before{content:"\\e6c9"}.iconjifen[data-v-47d4f609]:before{content:"\\e642"}.iconradio-button-off[data-v-47d4f609]:before{content:"\\e688"}.iconradio-button-on[data-v-47d4f609]:before{content:"\\e689"}.iconhelp[data-v-47d4f609]:before{content:"\\e752"}.iconwxpay[data-v-47d4f609]:before{content:"\\e611"}.iconbalance[data-v-47d4f609]:before{content:"\\e619"}.iconadd-select[data-v-47d4f609]:before{content:"\\e7b0"}.iconsami-select[data-v-47d4f609]:before{content:"\\e7b1"}.iconmap[data-v-47d4f609]:before{content:"\\e758"}.iconsuccess[data-v-47d4f609]:before{content:"\\e767"}.iconsuccess-fill[data-v-47d4f609]:before{content:"\\e78d"}.iconiconset0136[data-v-47d4f609]:before{content:"\\e623"}.iconzan[data-v-47d4f609]:before{content:"\\e640"}.iconjifenqiandao[data-v-47d4f609]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-47d4f609]:before{content:"\\e606"}.icondaohang[data-v-47d4f609]:before{content:"\\e641"}.iconwodelianxikefu[data-v-47d4f609]:before{content:"\\e671"}.iconwodexinyuan[data-v-47d4f609]:before{content:"\\e675"}.iconphone[data-v-47d4f609]:before{content:"\\e6dd"}.icondingdan[data-v-47d4f609]:before{content:"\\e645"}.iconliwu[data-v-47d4f609]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-47d4f609]:before{content:"\\e60d"}.iconyinpin[data-v-47d4f609]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-47d4f609]:before{content:"\\e685"}.iconico[data-v-47d4f609]:before{content:"\\e646"}.iconwode[data-v-47d4f609]:before{content:"\\e616"}.icongengduofuwu[data-v-47d4f609]:before{content:"\\e607"}.iconqucan[data-v-47d4f609]:before{content:"\\e625"}.iconyou[data-v-47d4f609]:before{content:"\\e618"}.iconshouhuodizhi[data-v-47d4f609]:before{content:"\\e666"}.iconshangcheng[data-v-47d4f609]:before{content:"\\e63b"}.iconadd[data-v-47d4f609]:before{content:"\\e742"}.iconarrow-right[data-v-47d4f609]:before{content:"\\e743"}.iconarrow-lift[data-v-47d4f609]:before{content:"\\e744"}.iconarrow-up[data-v-47d4f609]:before{content:"\\e745"}.iconclose[data-v-47d4f609]:before{content:"\\e747"}.iconleftbutton[data-v-47d4f609]:before{content:"\\e755"}.iconreduce[data-v-47d4f609]:before{content:"\\e75e"}.iconseleted[data-v-47d4f609]:before{content:"\\e763"}.iconRightbutton[data-v-47d4f609]:before{content:"\\e765"}.iconleftbutton-fill[data-v-47d4f609]:before{content:"\\e782"}.iconRightbutton-fill[data-v-47d4f609]:before{content:"\\e78a"}.iconarrow-down[data-v-47d4f609]:before{content:"\\e7b2"}.iconaixin1[data-v-47d4f609]:before{content:"\\e63c"}.intro[data-v-47d4f609]{width:100%;height:60vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;font-size:%?28?%;color:#919293}.intro uni-image[data-v-47d4f609]{width:%?165?%;height:%?165?%}.intro .tips[data-v-47d4f609]{line-height:%?72?%;text-align:center}.bottom[data-v-47d4f609]{height:40vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%}.bottom .login-btn[data-v-47d4f609]{width:100%;border-radius:50rem!important;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?10?% 0}.bottom .login-btn uni-image[data-v-47d4f609]{width:%?36?%;height:%?30?%;margin-right:%?10?%}.bottom .row .grid[data-v-47d4f609]{width:20%}.bottom .row .grid uni-image[data-v-47d4f609]{width:%?60?%;height:%?60?%;margin-bottom:%?10?%}',""]),t.exports=e},"5d0c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"intro"},[n("v-uni-image",{attrs:{src:"/static/images/logo.png"}}),n("v-uni-view",{staticClass:"tips"},[t._v("一杯好茶，一口软欧包"),n("br"),t._v("在奈雪遇见两种美好")])],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-button",{staticClass:"login-btn",attrs:{type:"primary",size:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"d-flex flex-column justify-content-evenly align-items-center text-center",staticStyle:{height:"30vh"}},[n("v-uni-view",{staticClass:"w-100 font-size-base text-color-assist"},[t._v("新用户登录即加入会员，享会员权益")]),n("v-uni-view",{staticClass:"w-100 row d-flex just-content-around align-items-center font-size-sm text-color-assist"},[n("v-uni-view",{staticClass:"grid"},[n("v-uni-image",{attrs:{src:"/static/images/mine/rhyl.png"}}),n("v-uni-view",[t._v("入会有礼")])],1),n("v-uni-view",{staticClass:"grid"},[n("v-uni-image",{attrs:{src:"/static/images/mine/jfdh.png"}}),n("v-uni-view",[t._v("积分兑换")])],1),n("v-uni-view",{staticClass:"grid"},[n("v-uni-image",{attrs:{src:"/static/images/mine/sjtq.png"}}),n("v-uni-view",[t._v("升级特权")])],1),n("v-uni-view",{staticClass:"grid"},[n("v-uni-image",{attrs:{src:"/static/images/mine/srtq.png"}}),n("v-uni-view",[t._v("生日特权")])],1),n("v-uni-view",{staticClass:"grid"},[n("v-uni-image",{attrs:{src:"/static/images/mine/nxbz.png"}}),n("v-uni-view",[t._v("奈雪宝藏")])],1)],1),n("v-uni-view",{staticClass:"font-size-base text-color-primary"},[t._v("会员权益说明")])],1)],1)],1)},o=[]},"76d2":function(t,e,n){"use strict";n.r(e);var i=n("07ac7"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"93ff":function(t,e,n){"use strict";var i=n("ef1a"),a=n.n(i);a.a},ef1a:function(t,e,n){var i=n("236c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5af3d77c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);