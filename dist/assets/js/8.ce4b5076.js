(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{10:function(t,s,a){"use strict";function n(t,s,a,n,e,p,r,o){var c,v="function"==typeof t?t.options:t;if(s&&(v.render=s,v.staticRenderFns=a,v._compiled=!0),n&&(v.functional=!0),p&&(v._scopeId="data-v-"+p),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},v._ssrRegister=c):e&&(c=o?function(){e.call(this,this.$root.$options.shadowRoot)}:e),c)if(v.functional){v._injectStyles=c;var _=v.render;v.render=function(t,s){return c.call(s),_(t,s)}}else{var u=v.beforeCreate;v.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:v}}a.d(s,"a",function(){return n})},131:function(t,s,a){t.exports=a.p+"assets/img/screen.481fae18.png"},147:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"框架介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#框架介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 框架介绍")]),t._v(" "),n("h2",{attrs:{id:"技术栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),n("h3",{attrs:{id:"jquery-seajs-sortable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery-seajs-sortable","aria-hidden":"true"}},[t._v("#")]),t._v(" jQuery + seajs + sortable")]),t._v(" "),n("ol",[n("li",[t._v("jQuery: dom操作,绑定事件")]),t._v(" "),n("li",[t._v("seajs: 组件模块按需加载   "),n("a",{attrs:{href:"https://seajs.github.io/seajs/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("seajs文档"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("sortable: 组件拖拽   "),n("a",{attrs:{href:"https://github.com/SortableJS/Sortable",target:"_blank",rel:"noopener noreferrer"}},[t._v("sortable文档"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("js文件路径"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwroot"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("js"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("diy\n│  bindEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        主要负责运营后台编辑页面时候的交互事件绑定\n│  components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js       公用的组件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("包括每个组件的最外层元素"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("编辑"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("删除按钮"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("组件的标题栏\n│  componet_title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("组件的标题栏")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("后面优化已经整理到components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│  config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           全部的配置"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("包括域名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("请求的接口地址\n│  container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("每个组件的最外层元素")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("后面优化已经整理到components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│  edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             每个组件的编辑"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("删除按钮")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("后面优化已经整理到components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│  editpage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js         控制页面的显示"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("包括页面组件列表库"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("预览区域元素控制"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("页面分享逻辑\n│  event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js            筛选器对应的逻辑\n│  fireEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        通过监听对应的组件名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("找到组件对应的js文件并加载然后拿到每个组件暴露的构造函数实例化\n│  jquery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autocomplete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  jquery插件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("筛选器里面有的选项需要支持关键字搜索\n│  jquery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             主入口"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("智能页面js加载的入口"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("再对应的index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html中通过seajs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("加载\n│  more"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             最开始医生组件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("医院组件中用于分页加载的模板文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("后面取消分页之后很少使用\n│  sea"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js               \n│  seajs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        seajs只能加载js文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("想要动态加载css文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("需要用到这个模块\n│  service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js          请求接口用的公共文件\n│  sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js             处理拖拽逻辑的公共文件\n│  Sortable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    \n│  utils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js            工具类函数库"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("包括")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie操作"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("app拉原生"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("时间转换"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│  widget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js           所有筛选器的实例化的逻辑"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("预计筛选器数据的保存"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("都在这里\n│\n├─jquery\n│      jquery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n│\n├─module               "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("组件模块")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("所有的组件都放在module文件夹下面"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("实际开发只需要在这个模块修改内容"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│  ├─act\n│  ├─ad\n│  ├─btnGroup\n│  ├─consult\n│  ├─doctor\n│  ├─doctorsay\n│  ├─goods\n│  ├─hospital\n│  ├─iconGroup\n│  ├─microclass\n│  ├─pic\n│  ├─question\n│  ├─search\n│  ├─swiper\n│  └─tab\n├─Sortable\n│\n└─Swiper"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),t._v("\n样式文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 公共的样式文件 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwroot"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 组件对应的样式 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwroot"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wechat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assemblynew"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\n")])])]),n("h2",{attrs:{id:"seajs全局配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#seajs全局配置","aria-hidden":"true"}},[t._v("#")]),t._v(" seajs全局配置")]),t._v(" "),n("p",[t._v("配置的代码分别位于以下路径:")]),t._v(" "),n("ul",[n("li",[t._v("运营后台: \\www\\91160-com\\NykjAdmin\\91160\\tpl\\page\\setting.html")]),t._v(" "),n("li",[t._v("微信: \\www\\api\\wechat\\app\\Views\\diycms\\index.php")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("两个模板文件中的配置都是类似"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("微信的静态资源版本号需要通过http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("91160.")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("clearCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Joy\\Web\\Controllers\\BaseController\\afterExecuteRoute动态的清除\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" version "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{$smarty.const.VERSION}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nseajs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//wximg.91160.com/wechat/js/diy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件加载的动态路径")]),t._v("\n    alias"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sortable'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sortable.min.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    paths"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///www/api/wechat-vue/wechat/js/diy/config.js中会用到@")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件映射")]),t._v("\n    map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js?v='")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    preload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sortable'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"筛选器介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#筛选器介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 筛选器介绍")]),t._v(" "),n("p",[t._v("筛选器是有很多个微元素交互组合而成,这些微元素包括,新建筛选器的时候,可以任意组合,如果现在的元素满足不了新组件的需求,新增对应的类型即可,对应的代码文件在app/wwwroot/api/wechat-vue/wechat/js/diy/widget.js")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文本框'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'复选框'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checkbox'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'公共科室'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commonSection'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'选择商品'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'selectGoods'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'链接图组'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swiper'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon组：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iconGroup'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'资讯分类：'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'consultList'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'按钮组'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btnGroup'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tab选项卡'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tabGroup'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'带连接的图片'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linkPic'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'注意'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'单选框'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'radio'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'背景图'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bgImage'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url+id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'urlId'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(131),alt:"示例"}})])])},[],!1,null,null,null);s.default=e.exports}}]);