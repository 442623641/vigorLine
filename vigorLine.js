/*! vigorline v1.0.0 ~ (c) 2016 LeoZhang */
(function(window,document) {
  
  bind = function(fn, me){ 
    return function(){ 
      return fn.apply(me, arguments); 
    }
  }
      // 获取元素到文档区域的坐标 
      function getPosition(element) { 
        var actualLeft = element.offsetLeft, 
        actualTop = element.offsetTop, 
        current = element.offsetParent; // 取得元素的offsetParent 
        // 一直循环直到根元素 
        while (current !== null) { 
          actualLeft += current.offsetLeft; 
          actualTop += current.offsetTop; 
          current = current.offsetParent; 
        } 
        // 返回包含left、top坐标的对象 
        return { 
          left: actualLeft, 
          top: actualTop 
        }; 
      } 

      function vigorLine(menu,opt) {
          // Default options
          this.options = {
            color:'#fff',
            height:'0.125em',
            initPageIndex:0,
            activeClass:'line-active'
          }
           // User defined options
          for (i in opt) this.options[i] = opt[i];
          this.menu = document.querySelector(menu);
          this.update = bind(this.update, this);

          if (!this.menu) return;

          this.line= document.createElement("div"); 
          this.line.setAttribute('style','position: absolute;'+
            'bottom: 0;'+
            'height: '+this.options.height+';'+
            'background-color: '+this.options.color+';'+
            'width: 1px !important;'+
            '-webkit-transform: translateX(0);'+
            'transform: translateX(0);'+
            '-webkit-transform-origin: left;'+
            'transform-origin: left;'+
            '-webkit-transition: -webkit-transform 0.4s;'+
            'transition: -webkit-transform 0.4s;'+
            'transition: transform 0.4s;'+
            'transition: transform 0.4s, -webkit-transform 0.4s;'+
            '-webkit-backface-visibility: hidden;'+
            'backface-visibility: hidden;'+
            '-webkit-transform-style: preserve-3d;'+
            'transform-style: preserve-3d;'+
            'will-change: transform;');
          this.menu.appendChild(this.line); 
          var _this= this, buttons=this.menu.querySelectorAll(this.options.target);

          if(!buttons.length) return;

          //bind envent
          for (var i = buttons.length - 1; i >= 0; i--) {
            buttons[i].index=i;
            buttons[i].addEventListener("click", function(e){
                if (this.className&&this.className.indexOf(_this.options.activeClass)<0){
                  var pre=_this.menu.querySelector('.'+_this.options.activeClass);
                  pre&&(pre.className=pre.className.replace(' '+_this.options.activeClass,'').replace(_this.options.activeClass,''));
                  this.className=this.className?(this.className+' '+_this.options.activeClass):_this.options.activeClass;
                  _this.update(); 
                }
                typeof _this.onclick  ==='function'&& _this.onclick(this,e);
            });
          }

          buttons[_this.options.initPageIndex].click();
          window.onresize=function(){_this.update};
        }

        vigorLine.prototype.update = function() {
          var el, leftPos, ratio;
          el = this.menu.querySelector('.'+this.options.activeClass);
          if (el) {
            leftPos = getPosition(el).left;
            ratio = el.offsetWidth;
          } else {
            leftPos = ratio = 0;
          }
          return this.line.style.transform=this.line.style.webkitTransform="translateX( " + leftPos + "px ) scaleX( " + ratio + " )";
        };

        if ( typeof module != 'undefined' && module.exports ) {
          module.exports = vigorLine;
        } else if ( typeof define == 'function' && define.amd ) {
          define( function () { return vigorLine; } );
        } else {
          window.vigorLine = vigorLine;
        }
})(window,document);