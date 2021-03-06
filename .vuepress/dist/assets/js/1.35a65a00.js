(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,e,s){t.exports=s.p+"assets/img/screen-1.8c656508.jpg"},148:function(t,e,s){t.exports=s.p+"assets/img/screen-2.bcff4be4.jpg"},149:function(t,e,s){t.exports=s.p+"assets/img/screen-3.649b22ba.jpg"},150:function(t,e,s){t.exports=s.p+"assets/img/component-1.cfddaea7.png"},151:function(t,e,s){t.exports=s.p+"assets/img/component-2.688c1590.jpg"},179:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),a("h2",{attrs:{id:"_1-样式结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-样式结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.样式结构")]),t._v(" "),a("p",[t._v("先在\\www\\91160-com\\NykjAdmin\\91160\\tpl\\page\\setting.html写好对应的html结构以及在\\www/api/wechat-vue/wechat/css/assemblynew.cssl里写好样式")]),t._v(" "),a("h2",{attrs:{id:"_2-创建筛选器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建筛选器","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.创建筛选器")]),t._v(" "),a("p",[a("img",{attrs:{src:s(147),alt:"screen-1"}}),t._v(" "),a("img",{attrs:{src:s(148),alt:"screen-2"}}),t._v(" "),a("img",{attrs:{src:s(149),alt:"screen-3"}})]),t._v(" "),a("h2",{attrs:{id:"_3-创建组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.创建组件")]),t._v(" "),a("p",[t._v("注意事项:")]),t._v(" "),a("ol",[a("li",[a("img",{attrs:{src:s(150),alt:"组件英文名"}})]),t._v(" "),a("li",[t._v("组件的接口地址和默认数据分两种情况\n"),a("ul",[a("li",[t._v("需要后台查数据,组件接口地址找后端要,默认数据与后端协商")]),t._v(" "),a("li",[t._v('不需要后台查数据,组件接口地址统一是[{"m":"CmsSelfApi","f":"indexInfo"}],默认数据就是创建筛选器之后保存的数据\n'),a("img",{attrs:{src:s(151),alt:"默认数据"}})])])])]),t._v(" "),a("h2",{attrs:{id:"_4-配置组件对应的js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置组件对应的js文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.配置组件对应的js文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在/www/api/wechat-vue/wechat/js/diy/config.js中配置组件对应的js文件路径, @的意思在模板文件中配置过\nwindow.GLOBALCONFIG = {\n    components:{\n        swiper:'@/swiper/swiper.js',\n        search:'@/search/search.js',\n        doctorAcross:'@/doctor/doctorAcross.js',\n    }\n}\n")])])]),a("h2",{attrs:{id:"_5-编辑组件代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-编辑组件代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.编辑组件代码")]),t._v(" "),a("p",[t._v("组件的格式需要保持保持统一,方便在/www/api/wechat-vue/wechat/js/diy/firEvent.js中全局调用,这样就可以尽可能少的去了解框架其他部分的代码,")]),t._v(" "),a("h3",{attrs:{id:"格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("define(function(require, exports, module) {\n\tvar MicroclassFun = function(){\n\t}\n\tmodule.exports = MicroclassFun; // 暴露一个构造函数\n\n\tMicroclassFun.prototype = {\n\t\tinit:function (obj) { // 构造函数的原型上面需要有一个init方式,用户初始化数据\n\t\t}\n\t}\t\n});\n")])])]),a("h3",{attrs:{id:"组件里面的常用代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件里面的常用代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件里面的常用代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("define(function(require, exports, module) {\n\tvar edit = componentsTpl.edit;    // 编辑删除按钮\n\tvar componentTitle = componentsTpl.component_title;  // 组件的标题\n\tvar methods = require('../../editpage.js')   \n    // 里面包含很多公共的方法,所有的组件都需要调用一下methods.initDom,会根据筛选器的配置控制组件的展示\n\n\tvar MicroclassFun = function(){\n\t\tthis.componentTitle = $(componentTitle);\n\t}\n\tmodule.exports = MicroclassFun;\n\n\tMicroclassFun.prototype = {\n\t\tinit:function(obj) { // 一般所有的组件组装的逻辑,都放在这里\n\t\t\tobj.container.append(this.componentTitle).append($(edit));\n\t\t\tif(obj.assembly_content) {//如果有数据,就初始化\n\t\t\t\tmethods.initDom(obj.container,obj.assembly_content)\t\n\t\t\t}\n\t\t\tmethods.replaceDom(obj)\n\t\t}\n\t}\t\n});\n")])])]),a("h2",{attrs:{id:"_6-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.调试")]),t._v(" "),a("ol",[a("li",[t._v("新建页面,新建页面的时候可以控制页面的分享内容,背景图,有效期")]),t._v(" "),a("li",[t._v("排版,\n"),a("ul",[a("li",[t._v("从左侧组件列表里面拖拽对应的组件到中间的预览区域,")]),t._v(" "),a("li",[t._v("在对应的组件上,右键会出现编辑和删除按钮")]),t._v(" "),a("li",[t._v("点击编辑, 自动请求接口实例化筛选器")]),t._v(" "),a("li",[t._v("配置筛选器参数,保存,自动刷新页面")])])])])])}],n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);r.options.__file="main.md";e.default=r.exports}}]);