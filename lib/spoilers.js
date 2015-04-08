/***************************************
    @title SpoilerJS
    @description JS plugin to hide posible spoilers
    @author Antonio Villamarín
    @date 2011
    @license MIT
****************************************/

(function(){

  function getColor(e) {
    var c = getComputedStyle(e).getPropertyValue('color');
    var m = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(c)

    return 'rgba(' + [m[1], m[2], m[3], 1].join(',') + ')';

  }

  var spoilers = document.querySelectorAll('.spoiler');
  var colors = [];

  for(var i=0; i<spoilers.length; i++) {
    colors[i] = getColor(spoilers[i]);
    spoilers[i].innerHTML = '<span class="spoilerTag">SHOW</span> ' + spoilers[i].innerHTML;
    spoilers[i].style.textShadow = '0 0 1.6rem ' + getColor(spoilers[i]);
    spoilers[i].style.color = 'transparent';
  }

  var tags = document.querySelectorAll('.spoilerTag');
  for(var i=0; i<tags.length; i++) {
    tags[i].style.color = 'white';
    tags[i].style.backgroundColor = 'gold';
    tags[i].style.textShadow = '0 0 0';
    tags[i].style.padding = '0.5rem';
    tags[i].style.fontSize = '0.5rem';
    tags[i].style.margin = '1rem';
    tags[i].style.textDecoration = 'none';
    tags[i].style.fontWeight = 'bold';
    tags[i].style.verticalAlign = 'middle';
    tags[i].style.borderRadius = '0.5rem';
    tags[i].style.fontFamily = 'Helvetica, Arial, sans-serif';
    tags[i].style.cursor = 'pointer';
    j = i;
    tags[i].onclick = function() {
      if(this.parentNode.style.color != 'transparent') {
        this.parentNode.style.textShadow = '0 0 1.6rem ' + colors[j];
        this.parentNode.style.color = 'transparent';
        this.innerHTML = 'SHOW';
      } else {
        this.parentNode.style.textShadow = '0 0 0';
        this.parentNode.style.color = colors[j];
        this.innerHTML = 'HIDE';
      }
    };
  }
})();
