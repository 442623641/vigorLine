# vigorLine

A dynamic line that is commonly used in the interaction of the web head

```js
var vigorLine = new vigorLine(selector,options);
```
**selector** 
menu selector.

**options**

`target` : a selector of Clicked element

`color` *(optional)* :   color of line,default `'#ffffff'`.

`height`*(optional)* :   height of line,default `'0.125em'`.

`initPageIndex`*(optional)* :   first position index,default `0`.

`activeClass`*(optional)* :   active state with line

*eg*
```js
var vigorLine = new vigorLine('.menu',{target:'a',height:'3px'});
```
Have fun!
