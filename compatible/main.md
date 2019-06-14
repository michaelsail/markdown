# 基本信息

<font color="#f00">兼容性测试：比web浏览器还恐怖的手机浏览器</font>

**web站点兼容性测试**

**对于web网站，一般来说，目前我们需要兼容的是**

1个操作系统（windows）X 4种浏览器（ie8、firefox、chorme）= 3种情况

**要求高一点的web网站需要兼容的是**

1个操作系统（windows）X 10 种浏览器（ie6、ie7、ie8、ie9、firefox3.6、firefox、chorme、opera、safari、遨游）+ 1个操作系统（mac） X 1种浏览器（safari）= 11种情况

**wap站兼容性测试**

**<font color="#f00">做过wap站点开发之后，你就会发现…IE6其实已经是很好的浏览器了，真的。</font>**

**手机浏览器有多少种需要兼容**

要做到比较好的兼容性，我们要兼容的手机浏览器至少有二十种情况（手机自带的浏览器+用户可安装的浏览器）

**影响你wap页面整体效果的还包括：**
手机型号、
操作系统、
浏览器类型、
屏幕尺寸、
颜色深度

## 遇到过的奇葩兼容问题

**1、input、textarea**

**input或者textarea获得焦点时**

ios不在可视范围时页面会往上滚动到可视范围，
<font color="#f00">但是！！！</font>微信浏览器中，键盘收起时不会回落，safari是正常的

**如果进入页面默认是要定位到input框，并且需要可以直接拉起键盘可以直接输入，**

安卓是可以获取到焦点，但是不能拉起键盘，ios连焦点都获取不到

fixed和input一起时，键盘拉起，ios中各种展示不正常，看不到框，或者框跟键盘中间有空隙



**2、rem页面1px的线显示问题**

1px转换成rem后在iphone6里面看是好的，但是到6plus上面就没有那条线


**3、new Date("2017-08-11 12:00:00")**

IOS中不支持 - 连接日期
报错：Invalid Date 需要写成
```var d = new Date("2017-08-11 12:00:00".replace(/-/g, "/"));```


**4、class通过css动态排序**
```css
.list{float:left;width:40px;height:40px;}
#myRed   {-webkit-order: 2; background-color:coral}
#myBlue  {-webkit-order: 4; background-color:lightblue}
#myGreen {-webkit-order: 3; background-color:lightgreen}
#myPink  {-webkit-order: 1; background-color:pink}
```

```html
<div class="list" id="myRedDIV"></div>
<div class="list" id="myBlueDIV"></div>
<div class="list" id="myGreenDIV"></div>
<div class="list" id="myPinkDIV"></div>
```
<img src="./1.png" width="288">


**5、移动端 HTML5 audio autoplay 失效问题**

这个不是 BUG，由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用JS的触发播放，必须由用户来触发才可以播放。

解决方法思路：先通过用户touchstart触碰，触发播放并暂停（音频开始加载，后面用 JS 再操作就没问题了）。

解决代码：
```javascript
document.addEventListener('touchstart', function () {
    document.getElementsByTagName('audio')[0].play();
    document.getElementsByTagName('audio')[0].pause();
});
```

**6、安卓手机line-height不居中**

设置line-height，padding,带边框的内容在安卓手机中文字总是视觉感偏上，

原因：

1.字体大小不要使用奇数字号，带小数点的更不要提了。也就是说被2整除的整数且不可小于12px。


2.使用rem的单位时造成（根元素如果动态改变时，根元素字体可能不是整数）。

**解决方法：**

1、设置字体大小大于12px，然后用transform: scale()缩小到需要的大小

2、在元素外再包一层，使用表格布局display: table-cell
