# 书写规范

## 排版规范
(1)使用4个空格，而不使用tab或者混用空格+tab作为缩进；
(2)规则可以写成单行，或者多行，但是整个文件内的规则排版必须统一；

**单行形式书写风格的排版约束**
- 如果是在html中写内联的css，则必须写成单行；
- 每一条规则的大括号 { 前后加空格 ；
- 每一条规则结束的大括号 } 前加空格；
- 属性名冒号之前不加空格，冒号之后加空格；
- 每一个属性值后必须添加分号; 并且分号后空格；
- 多个selector共用一个样式集，则多个selector必须写成多行形式 ；

**多行形式书写风格的排版约束**
- 每一条规则的大括号 { 前添加空格;
- 多个selector共用一个样式集，则多个selector必须写成多行形式 ;
- 每一条规则结束的大括号 } 必须与规则选择器的第一个字符对齐 ;
- 属性名冒号之前不加空格，冒号之后加空格;
- 属性值之后添加分号;


## 属性编写顺序

**HTML 属性编写顺序确保代码的易读性。**

```html
class
id, name
data-*
src, for, type, href, value
title, alt
role, aria-*
```
class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

**CSS 编写顺序**

```css
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  display: block;
  float: right;
  width: 100px;
  height: 100px;

  border: 1px solid #e5e5e5;
  border-radius: 3px;
  line-height: 1.5;
  text-align: center;

  font: normal 13px "Helvetica Neue", sans-serif;
  color: #333;
  background-color: #f5f5f5;
  opacity: 1;
```

- 链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active

## 规则书写规范
- 使用单引号，不允许使用双引号;
- 每个声明结束都应该带一个分号，不管是不是最后一个声明;
- 除16进制颜色和字体设置外，CSS文件中的所有的代码都应该小写;
- 除了重置浏览器默认样式外，禁止直接为html tag添加css样式设置;
- 每一条规则应该确保选择器唯一，禁止直接为全局.nav/.header/.body等类设置属性;

## 代码性能优化
- 对margin、padding、border的-left/-top/-right/-bottom的设置，尽量使用短名称。
- 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置。
- 注意选择器的性能，不要使用低性能的选择器。
- 禁止在css中使用*选择符。
- 除非必须，否则，一般有class或id的，不需要再写上元素对应的tag。
- 0后面不需要单位，比如0px可以省略成0，0.8px可以省略成.8px。
- 如果是16进制表示颜色，则颜色取值应该大写。
- 如果可以，颜色尽量用三位字符表示，例如#AABBCC写成#ABC 。
- 如果没有边框时，不要写成border:0，应该写成border:none 。
- 尽量避免使用AlphaImageLoader 。
- 在保持代码解耦的前提下，尽量合并重复的样式。
- background、font等可以缩写的属性，尽量使用缩写形式 。

## 字体规则
- 为了防止文件合并及编码转换时造成问题，建议将样式中文字体名字改成对应的英文名字，如：黑体(SimHei) 宋体(SimSun) 微软雅黑 (Microsoft Yahei，几个单词中间有空格组成的必须加引号)
- 字体粗细采用具体数值，粗体bold写为700，正常normal写为400
- font-size必须以px或rem为单位，推荐用rem，不允许使用xx-small/x-small/small/medium/large/x-large/xx-large等值
- 为了对font-family取值进行统一，更好的支持各个操作系统上各个浏览器的兼容性，font-family不允许在业务代码中随意设置



