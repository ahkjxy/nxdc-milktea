(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orders-orders"],{"4eae":function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"ListCell",props:{arrow:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},lineLeft:{type:Boolean,default:!1},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},last:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#5A5B5C"},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};t.default=o},"565f":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"tui-cell-class tui-list-cell",class:{"tui-cell-arrow":e.arrow,"tui-cell-last":e.last,"tui-line-left":e.lineLeft,"tui-line-right":e.lineRight,"tui-radius":e.radius},style:{background:e.bgcolor,fontSize:e.size+"rpx",color:e.color,padding:e.padding},attrs:{"hover-class":e.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default"),e.arrow?n("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/navigator-1.png"}}):e._e()],2)},i=[]},a877:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-4f962fb9]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-4f962fb9]:before{content:"\\e667"}.iconshoucangfill[data-v-4f962fb9]:before{content:"\\e6c9"}.iconjifen[data-v-4f962fb9]:before{content:"\\e642"}.iconradio-button-off[data-v-4f962fb9]:before{content:"\\e688"}.iconradio-button-on[data-v-4f962fb9]:before{content:"\\e689"}.iconhelp[data-v-4f962fb9]:before{content:"\\e752"}.iconwxpay[data-v-4f962fb9]:before{content:"\\e611"}.iconbalance[data-v-4f962fb9]:before{content:"\\e619"}.iconadd-select[data-v-4f962fb9]:before{content:"\\e7b0"}.iconsami-select[data-v-4f962fb9]:before{content:"\\e7b1"}.iconmap[data-v-4f962fb9]:before{content:"\\e758"}.iconsuccess[data-v-4f962fb9]:before{content:"\\e767"}.iconsuccess-fill[data-v-4f962fb9]:before{content:"\\e78d"}.iconiconset0136[data-v-4f962fb9]:before{content:"\\e623"}.iconzan[data-v-4f962fb9]:before{content:"\\e640"}.iconjifenqiandao[data-v-4f962fb9]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-4f962fb9]:before{content:"\\e606"}.icondaohang[data-v-4f962fb9]:before{content:"\\e641"}.iconwodelianxikefu[data-v-4f962fb9]:before{content:"\\e671"}.iconwodexinyuan[data-v-4f962fb9]:before{content:"\\e675"}.iconphone[data-v-4f962fb9]:before{content:"\\e6dd"}.icondingdan[data-v-4f962fb9]:before{content:"\\e645"}.iconliwu[data-v-4f962fb9]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-4f962fb9]:before{content:"\\e60d"}.iconyinpin[data-v-4f962fb9]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-4f962fb9]:before{content:"\\e685"}.iconico[data-v-4f962fb9]:before{content:"\\e646"}.iconwode[data-v-4f962fb9]:before{content:"\\e616"}.icongengduofuwu[data-v-4f962fb9]:before{content:"\\e607"}.iconqucan[data-v-4f962fb9]:before{content:"\\e625"}.iconyou[data-v-4f962fb9]:before{content:"\\e618"}.iconshouhuodizhi[data-v-4f962fb9]:before{content:"\\e666"}.iconshangcheng[data-v-4f962fb9]:before{content:"\\e63b"}.iconadd[data-v-4f962fb9]:before{content:"\\e742"}.iconarrow-right[data-v-4f962fb9]:before{content:"\\e743"}.iconarrow-lift[data-v-4f962fb9]:before{content:"\\e744"}.iconarrow-up[data-v-4f962fb9]:before{content:"\\e745"}.iconclose[data-v-4f962fb9]:before{content:"\\e747"}.iconleftbutton[data-v-4f962fb9]:before{content:"\\e755"}.iconreduce[data-v-4f962fb9]:before{content:"\\e75e"}.iconseleted[data-v-4f962fb9]:before{content:"\\e763"}.iconRightbutton[data-v-4f962fb9]:before{content:"\\e765"}.iconleftbutton-fill[data-v-4f962fb9]:before{content:"\\e782"}.iconRightbutton-fill[data-v-4f962fb9]:before{content:"\\e78a"}.iconarrow-down[data-v-4f962fb9]:before{content:"\\e7b2"}.iconaixin1[data-v-4f962fb9]:before{content:"\\e63c"}.tui-list-cell[data-v-4f962fb9]{position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-radius[data-v-4f962fb9]{border-radius:%?12?%;overflow:hidden}.tui-cell-hover[data-v-4f962fb9]{background:#f7f7f9!important}.tui-list-cell[data-v-4f962fb9]::after{content:"";position:absolute;border-bottom:%?2?% solid #eee;-webkit-transform:scaleY(.8);transform:scaleY(.8);bottom:0;right:0;left:0}.tui-line-left[data-v-4f962fb9]::after{left:%?30?%!important}.tui-line-right[data-v-4f962fb9]::after{right:%?30?%!important}.tui-cell-last[data-v-4f962fb9]::after{border-bottom:0!important}.arrow[data-v-4f962fb9]{width:%?50?%;height:%?50?%;position:relative;margin-right:%?-10?%;-webkit-flex-shrink:0;flex-shrink:0}',""]),e.exports=t},b123:function(e,t,n){"use strict";n.r(t);var o=n("f3c3"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},b540:function(e,t,n){"use strict";n.r(t);var o=n("565f"),a=n("f417");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("e487");var r,f=n("f0c5"),c=Object(f["a"])(a["default"],o["b"],o["c"],!1,null,"4f962fb9",null,!1,o["a"],r);t["default"]=c.exports},b6a0:function(e,t,n){var o=n("a877");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("6cd65ae6",o,!0,{sourceMap:!1,shadowMode:!1})},bde4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={listCell:n("b540").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"orders-list d-flex flex-column w-100",staticStyle:{padding:"20rpx","padding-bottom":"0"}},e._l(e.orders,(function(t,o){return n("v-uni-view",{key:o,staticClass:"order-item",staticStyle:{"margin-bottom":"30rpx"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.detail(t.id)}}},[n("list-cell",{attrs:{hover:!1}},[n("v-uni-view",{staticClass:"w-100 d-flex align-items-center"},[n("v-uni-view",{staticClass:"flex-fill d-flex flex-column"},[n("v-uni-view",{staticClass:"font-size-lg text-color-base",staticStyle:{"margin-bottom":"20rpx"}},[e._v(e._s(t.store.name))]),n("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("订单编号："+e._s(t.order_no))])],1),n("v-uni-view",{staticClass:"font-size-lg text-color-primary"},[e._v(e._s(t.status_text))])],1)],1),n("list-cell",{attrs:{hover:!1,last:!0}},[n("v-uni-view",{staticClass:"w-100 d-flex flex-column"},[n("v-uni-view",{staticClass:"w-100 text-truncate font-size-lg text-color-base",staticStyle:{"margin-bottom":"20rpx"}},[e._v(e._s(e.orderGoodsName(t.goods)))]),n("v-uni-view",{staticClass:"d-flex justify-content-between align-items-center",staticStyle:{"margin-bottom":"30rpx"}},[n("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v(e._s(e.$util.formatDateTime(t.created_at)))]),n("v-uni-view",{staticClass:"d-flex font-size-sm text-color-base align-items-center"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx"}},[e._v("共"+e._s(t.goods_num)+"件商品，实付")]),n("v-uni-view",{staticClass:"font-size-lg"},[e._v("￥"+e._s(t.amount))])],1)],1),n("v-uni-view",{staticClass:"d-flex align-items-center justify-content-end"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx"}},[t.invoice_status>0?n("v-uni-button",{attrs:{type:"primary",plain:!0,size:"mini"}},[e._v("查看发票")]):n("v-uni-button",{attrs:{type:"primary",plain:!0,size:"mini"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.goToInvoice.apply(void 0,arguments)}}},[e._v("开发票")])],1),n("v-uni-view",[n("v-uni-button",{attrs:{type:"primary",plain:!0,size:"mini"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.review(t)}}},[e._v("去评价")])],1)],1)],1)],1)],1)})),1)],1)},i=[]},d5be:function(e,t,n){"use strict";n.r(t);var o=n("bde4"),a=n("b123");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r,f=n("f0c5"),c=Object(f["a"])(a["default"],o["b"],o["c"],!1,null,"e6d1cab0",null,!1,o["a"],r);t["default"]=c.exports},e487:function(e,t,n){"use strict";var o=n("b6a0"),a=n.n(o);a.a},f3c3:function(e,t,n){"use strict";var o=n("4ea4");n("99af"),n("4160"),n("a15b"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=o(n("1da1")),i=o(n("b540")),r={components:{listCell:i.default},data:function(){return{page:1,pageSize:5,orders:[]}},computed:{orderGoodsName:function(){return function(e){var t=[];return e.forEach((function(e){return t.push(e.name+"*"+e.number)})),t.join("，")}}},onLoad:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.getters.isLogin||uni.navigateTo({url:"/pages/login/login"}),t.next=3,e.getOrders(!1);case 3:case"end":return t.stop()}}),t)})))()},onReachBottom:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getOrders(!1);case 2:case"end":return t.stop()}}),t)})))()},onPullDownRefresh:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getOrders(!0);case 2:case"end":return t.stop()}}),t)})))()},methods:{getOrders:function(){var e=arguments,t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]&&e[0],uni.showLoading({title:"加载中"}),n.next=4,t.$api("orders");case 4:a=n.sent,o&&(t.orders=[],t.page=1),a=a.slice(t.pageSize*(t.page-1),t.pageSize*t.page),a.length&&(t.orders=t.orders.concat(a),t.page+=1),uni.hideLoading();case 9:case"end":return n.stop()}}),n)})))()},detail:function(e){uni.navigateTo({url:"/pages/orders/detail?id="+e})},review:function(e){var t=e.completed_time.split(" ")[0];uni.navigateTo({url:"/pages/review/review?storename="+e.store.name+"&typeCate="+e.typeCate+"&date="+t})},goToInvoice:function(){uni.navigateTo({url:"/pages/invoice/invoice"})}}};t.default=r},f417:function(e,t,n){"use strict";n.r(t);var o=n("4eae"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a}}]);