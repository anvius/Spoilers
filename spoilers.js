/***************************************
    @title SpoilerJS
    @description JS plugin to hide posible spoilers
    @author Antonio Villamarín
    @date 2011
    @license MIT
****************************************/

;
(function(){

  function getColor(e) {
    var c = getComputedStyle(e).getPropertyValue('color');
    var m = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(c)

    return 'rgba(' + [m[1], m[2], m[3], 1].join(',') + ')';
  }

  var s = document.querySelectorAll('.spoiler');

  for(var i=0; i<s.length; i++) {
    s[i].oldColor = getColor(s[i]);
    s[i].oldTextShadow = getComputedStyle(s[i]).getPropertyValue('text-shadow');
    s[i].oldCursor = getComputedStyle(s[i]).getPropertyValue('cursor');

    s[i].style.textShadow = '0 0 '+getComputedStyle(s[i]).getPropertyValue('font-size')+' '+s[i].oldColor;
    s[i].style.color = 'transparent';
    s[i].style.cursor = 'pointer';
    s[i].title = 'Warning!!! ... Spoiler';
    s[i].onclick = function() {
      this.style.textShadow = this.oldTextShadow;
      this.style.color = this.oldColor;
      this.style.cursor = this.oldCursor;
      this.onclick = false;
    };
  }
})();
