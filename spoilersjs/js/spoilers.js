/***************************************
    @title SpoilerJS
    @description JS plugin to hide posible spoilers
    @author Antonio Villamarín
    @date 2011
    @license MIT
****************************************/

;
function getColor(e) {
  var c = getComputedStyle(e).getPropertyValue('color');
  var m = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(c)

  return 'rgba(' + [m[1], m[2], m[3], 1].join(',') + ')';
}

function getFontSize(e) {
  return getComputedStyle(e).getPropertyValue('font-size');
}

function loadCSS(cssFile) {
  var css = window.document.createElement( "link" );
  css.rel = 'stylesheet';
  css.type = 'text/css';
  css.href = cssFile;
  css.media = 'all';
  document.getElementsByTagName('head')[0].appendChild(css);
}

(function(){

  // Vars and config
  var s = document.querySelectorAll('.spoiler');
  var texts = {
    hide: 'HIDE',
    show: 'SHOW'
  };

  loadCSS('../spoilersjs/css/spoilersjs.css');

  for(var i=0; i<s.length; i++) {
    s[i].style.textShadow = '0 0 '+(getFontSize(s[i]))+' '+getColor(s[i]);
    s[i].style.color = 'transparent';
    s[i].innerHTML = '<span class="spoiler-tag">'+texts.show+'</span> ' + s[i].innerHTML;

    document.querySelectorAll('.spoiler-tag')[i].onclick = function() {
      var sp = this.parentNode;
      var shadow = getFontSize(sp);
      var color = getColor(sp);

      if (sp.style.color != 'transparent') {
        sp.style.color = 'transparent';
        sp.style.textShadow = '0 0 '+shadow+' '+color;
        this.innerHTML = texts.show;
      } else {
        sp.style.color = color;
        sp.style.textShadow = '0 0 0';
        this.innerHTML = texts.hide;
      }

      console.log('0 0 '+shadow+' '+this.color);
    };
  }
})();
