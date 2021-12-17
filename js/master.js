'use strict';

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
  item.onclick = function(){
    document.getElementById('big-img').src = this.dataset.image;
  }
});

document.getElementById('works').select.onchange = function(){
  location.href = document.getElementById('works').select.value;
}
