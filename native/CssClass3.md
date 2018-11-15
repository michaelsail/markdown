# 命名规范

使用有意义的或通用的ID和class命名：ID和class的命名应反映该元素的功能或使用通用名称，而不要用抽象的晦涩的命名。反映元素的使用目的是首选；使用通用名称代表该元素不表特定意义，与其同级元素无异，通常是用于辅助命名；使用功能性或通用的名称可以更适用于文档或模版变化的情况。

```css
- /* 不推荐: 无意义 */ #yee-1901 {}
- /* 不推荐: 与样式相关 */ .button-green {}.clear {}
- /* 推荐: 特殊性 */ #gallery {}#login {}.video {}
- /* 推荐: 通用性 */ .aux {}.alt {}
```

常用命名（多记多查英文单词）：

```css
page、wrap、layout、header(head)、footer(foot、ft)、
content(cont)、menu、nav、main、submain、sidebar(side)、logo、banner、
title(tit)、popo(pop)、icon、note、btn、txt、iblock、window(win)、tips等
```

ID和class命名越简短越好，只要足够表达涵义。这样既有助于理解，也能提高代码效率。
```css
- /* 不推荐 */ #navigation {}.atr {}
- /* 推荐 */ #nav {}.author {}
```

类型选择器避免同时使用标签、ID和class作为定位一个元素选择器；从性能上考虑也应尽量减少选择器的层级。

```css
- /* 不推荐 */ul#example {}div.error {}
- /* 推荐 */#example {}.error {}
```

**命名时需要注意的点：**
- 规则命名中，一律采用**小写加中划线的方式**，不允许使用大写字母或 _
- 命名避免使用中文拼音，应该采用更简明有语义的英文单词进行组合
- 命名注意缩写，但是不能盲目缩写，具体请参见常用的CSS命名规则
- 不允许通过1、2、3等序号进行命名
- 避免class与id重名
- id用于标识模块或页面的某一个父容器区域，名称必须唯一，不要随意新建id
- class用于标识某一个类型的对象，命名必须言简意赅。
- 尽可能提高代码模块的复用，样式尽量用组合的方式


规则名称中不应该包含颜色（red/blue）、定位（left/right）等与具体显示效果相关的信息。应该用意义命名，而不是样式显示结果命名。

**常用id的命名：**

(1)页面结构

```css
- 容器: container
- 页头：header
- 内容：content/container
- 页面主体：main
- 页尾：footer
- 导航：nav
- 侧栏：sidebar
- 栏目：column
- 页面外围控制整体布局宽度：wrapper
- 左右中：left right center
```


(2)导航

```css
- 导航：nav
- 主导航：mainbav
- 子导航：subnav
- 顶导航：topnav
- 边导航：sidebar
- 左导航：leftsidebar
- 右导航：rightsidebar
- 菜单：menu
- 子菜单：submenu
- 标题: title
- 摘要: summary
```

(3)功能

```css
- 标志：logo
- 广告：banner
- 登陆：login
- 登录条：loginbar
- 注册：regsiter
- 搜索：search
- 功能区：shop
- 标题：title
- 加入：joinus
- 状态：status
- 按钮：btn
- 滚动：scroll
- 标签页：tab
- 文章列表：list
- 提示信息：msg
- 当前的: current
- 小技巧：tips
- 图标: icon
- 注释：note
- 指南：guild
- 服务：service
- 热点：hot
- 新闻：news
- 下载：download
- 投票：vote
- 合作伙伴：partner
- 友情链接：link
- 版权：copyright
```

