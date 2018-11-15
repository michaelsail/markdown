# 注释规范

1、文件顶部注释（推荐使用）

```javascript
- /*
- * @description: 中文说明
- * @author: name
- * @update: name (2013-04-13 18:32)
- */
```


2、模块注释

```javascript
- /* module: module1 by 张三 */
- …
- /* module: module2 by 张三 */
模块注释必须单独写在一行
```


3、 单行注释与多行注释

```javascript
/* this is a short comment
*/单行注释可以写在单独一行，也可以写在行尾，注释中的每一行长度不超过40个汉字，或者80个英文字符。/*
* this is comment line 1.
* this is comment line 2.
*/多行注释必须写在单独行内
```

4、特殊注释

```css
/* TODO: xxxx by name 2013-04-13 18:32 *//* BUGFIX: xxxx by name
2012-04-13 18:32 */用于标注修改、待办等信息
```

5、区块注释

```css
- /* Header */
- /* Footer */
- /* Gallery */
复制代码对一个代码区块注释（可选），将样式语句分区块并在新行中对其注释。
```

