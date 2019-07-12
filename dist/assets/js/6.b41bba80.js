(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,s,r){"use strict";function a(t,s,r,a,e,o,n,p){var v,_="function"==typeof t?t.options:t;if(s&&(_.render=s,_.staticRenderFns=r,_._compiled=!0),a&&(_.functional=!0),o&&(_._scopeId="data-v-"+o),n?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},_._ssrRegister=v):e&&(v=p?function(){e.call(this,this.$root.$options.shadowRoot)}:e),v)if(_.functional){_._injectStyles=v;var c=_.render;_.render=function(t,s){return v.call(s),c(t,s)}}else{var i=_.beforeCreate;_.beforeCreate=i?[].concat(i,v):[v]}return{exports:t,options:_}}r.d(s,"a",function(){return a})},166:function(t,s,r){"use strict";r.r(s);var a=r(10),e=Object(a.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端xss攻击和防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端xss攻击和防御","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端XSS攻击和防御")]),t._v(" "),a("p",[a("strong",[t._v("2019年3月初第三方软件扫描我们网站发现安全漏洞，需要紧急修复")])]),t._v(" "),a("h2",{attrs:{id:"xss跨站脚本攻击-cross-site-scripting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本攻击-cross-site-scripting","aria-hidden":"true"}},[t._v("#")]),t._v(" xss跨站脚本攻击(Cross Site Scripting)")]),t._v(" "),a("p",[t._v("是一种经常出现在web应用中的计算机安全漏洞，指攻击者在网页中嵌入客户端脚本(例如JavaScript), 当用户浏览此网页时，脚本就会在用户的浏览器上执行，从而达到攻击者的目的。比如获取用户的Cookie，导航到恶意网站,携带木马等。")]),t._v(" "),a("p",[t._v("大部分的xss漏洞都是由于没有处理好用户的输入，导致攻击脚本在浏览器中执行，这就是跨站脚本漏洞的根源。")]),t._v(" "),a("p",[a("font",{attrs:{color:"#f00"}},[t._v("XSS 简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。")])],1),t._v(" "),a("h2",{attrs:{id:"xss攻击类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击类型","aria-hidden":"true"}},[t._v("#")]),t._v(" xss攻击类型")]),t._v(" "),a("p",[t._v("总体上分为两类："),a("strong",[t._v("持久型和非持久型")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("1、持久型")])]),t._v(" "),a("p",[t._v("也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。")]),t._v(" "),a("p",[t._v("举个例子，对于评论功能来说，就得防范持久型 XSS攻击，因为我可以在评论中输入以下内容")]),t._v(" "),a("img",{attrs:{src:r(53),width:"310"}}),t._v(" "),a("img",{attrs:{src:r(54),width:"310"}}),t._v(" "),a("p",[t._v("这种情况如果前后端没有做好防御的话，这段评论就会被存储到数据库中，这样每个打开该页面的用户都会被攻击到。")]),t._v(" "),a("p",[a("strong",[t._v("2、非持久型")])]),t._v(" "),a("p",[t._v("相比于前者危害就小的多了，一般通过"),a("strong",[t._v("修改 URL 参数")]),t._v("的方式加入攻击代码，诱导用户访问链接从而进行攻击。")]),t._v(" "),a("p",[t._v("举个例子，如果页面需要从 URL 中获取某些参数作为内容的话，不经过过滤就会导致攻击代码被执行")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("但是对于这种攻击方式来说，如果用户使用 Chrome 这类浏览器的话，浏览器就能自动帮助用户防御攻击。但是我们不能因此就不防御此类攻击了，因为我不能确保用户都使用了该类浏览器。")]),t._v(" "),a("h2",{attrs:{id:"常见的xss攻击方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的xss攻击方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的xss攻击方法")]),t._v(" "),a("p",[t._v("1、绕过XSS-Filter，利用<>标签注入Html/JavaScript代码；")]),t._v(" "),a("p",[t._v("2、利用HTML标签的属性值进行xss攻击。例如："),a("code",[t._v("<img src=\"javascript:alert('xss')\"/>")]),t._v("；（当然并不是所有的Web浏览器都支持Javascript伪协议，所以此类XSS攻击具有一定的局限性）")]),t._v(" "),a("p",[t._v("3、空格、回车和Tab。如果XSS Filter仅仅将敏感的输入字符列入黑名单，比如javascript，用户可以利用空格、回车和Tab键来绕过过滤，例如："),a("code",[t._v('<img src="javas cript:alert(/xss/);"/>；')])]),t._v(" "),a("p",[t._v("4、利用事件来执行跨站脚本。例如："),a("code",[t._v('<img src="#" onerror= "alert(1)"/>')]),t._v("，当src错误的视乎就会执行onerror事件；")]),t._v(" "),a("p",[t._v("5、利用CSS跨站。例如："),a("code",[t._v("Body {backgrund-image: url(\"javascript:alert('xss')\")}；")])]),t._v(" "),a("p",[t._v("6、扰乱过滤规则。例如："),a("code",[t._v('<IMG SRC="javaSCript: alert(/xss/);"/>；')])]),t._v(" "),a("p",[t._v("7、利用字符编码，透过这种技巧，不仅能让XSS代码绕过服务端的过滤，还能更好地隐藏Shellcode；（JS支持unicode、eacapes、十六进制、十进制等编码形式）")]),t._v(" "),a("p",[t._v("8、拆分跨站法，将xss攻击的代码拆分开来，适用于应用程序没有过滤 XSS关键字符（如<、>）却对输入字符长度有限制的情况下；")]),t._v(" "),a("p",[t._v("9、DOM型的XSS主要是由客户端的脚本通过DOM动态地输出数据到页面上，它不依赖于提交数据到服务器，而是从客户端获得DOM中的数据在本地执行。容易导致DOM型的XSS的输入源包括：```Document.URL、Location(.pathname|.href|.search|.hash)、")]),t._v(" "),a("p",[t._v("Document.referrer、Window.name、Document.cookie、localStorage/globalStorage；```")]),t._v(" "),a("h2",{attrs:{id:"xss攻击防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击防御","aria-hidden":"true"}},[t._v("#")]),t._v(" XSS攻击防御")]),t._v(" "),a("p",[t._v("原则：不相信客户输入的数据")]),t._v(" "),a("p",[t._v("注意:  攻击代码不一定在 "),a("code",[t._v("<script><\/script>")]),t._v(" 中")]),t._v(" "),a("p",[a("strong",[t._v("1.使用XSS Filter")])]),t._v(" "),a("p",[t._v("输入过滤，对用户提交的数据进行有效性验证，仅接受指定长度范围内并符合我们期望格式的的内容提交，阻止或者忽略除此外的其他任何数据。比如：电话号码必须是数字和中划线组成，而且要设定长度上限。过滤一些些常见的敏感字符，例如："),a("code",[t._v('< > ‘ “ & # \\ javascript expression "onclick=" "onfocus"；')]),t._v("过滤或移除特殊的Html标签， 例如: "),a("code",[t._v("<script>, <iframe> , &lt; for <, &gt; for >, &quot for；")]),t._v("过滤JavaScript 事件的标签，例如 "),a("code",[t._v('"onclick=", "onfocus"')]),t._v("等等。")]),t._v(" "),a("p",[t._v("输出编码，当需要将一个字符串输出到Web网页时，同时又不确定这个字符串中是否包括XSS特殊字符（如"),a("code",[t._v("< > &‘”")]),t._v("等），为了确保输出内容的完整性和正确性，可以使用编码（HTMLEncode）进行处理。")]),t._v(" "),a("p",[a("strong",[t._v("2.DOM型的XSS攻击防御")])]),t._v(" "),a("p",[t._v("把变量输出到页面时要做好相关的编码转义工作，如要输出到 "),a("code",[t._v("<script><\/script>")]),t._v("中，可以进行JS编码；要输出到HTML内容或属性，则进行HTML编码处理。根据不同的语境采用不同的编码处理方式。")]),t._v(" "),a("p",[a("strong",[t._v("3.HttpOnly Cookie")])]),t._v(" "),a("p",[t._v("将重要的cookie标记为http only, 这样的话当浏览器向Web服务器发起请求的时就会带上cookie字段，但是在脚本中却不能访问这个cookie，这样就避免了XSS攻击利用JavaScript的document.cookie获取cookie")])])},[],!1,null,null,null);s.default=e.exports},53:function(t,s,r){t.exports=r.p+"assets/img/1.c25627e7.png"},54:function(t,s,r){t.exports=r.p+"assets/img/2.6c13c79a.png"}}]);