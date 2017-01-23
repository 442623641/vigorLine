# vigorLine

A dynamic line that is commonly used in the interaction of the web Navigation
[Demo](http://139.196.8.187/vigorLine)

```js
var vigorLine = new vigorLine(selector,options);
vigorLine.onclick=function(element,e){
	console.log(element);
	///todo 
	///...
}
```
**selector** 
menu selector.

**options**

`target` : a selector of Clicked element

`color` *(optional)* :   color of line,default `'#ffffff'`.

`height`*(optional)* :   height of line,default `'0.125em'`.

`initPageIndex`*(optional)* :   first position,default `0`.

`activeClass`*(optional)* :   active state with line.

`onclick`*(optional)* :   a function of callback which will be executed when the button is clicked.

*eg*
```js
var vigorLine = new vigorLine('.menu',{target:'a',height:'3px'});
vigorLine.onclick=function(element,e){
	console.log(element.index);
}
```
Have fun!
