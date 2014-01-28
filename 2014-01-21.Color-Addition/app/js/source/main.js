(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){

    $('#addCol').click(addColToDiv);

    function addColToDiv(){
      var col = $('#imgCol').val().split(',');
      var count = 1;
      var r1 = Math.floor(Math.random()*255);
      var r2 = Math.floor(Math.random()*255);
      var r3 = Math.floor(Math.random()*255);

      for (var i = 0; i < col.length; i++){
        var $box = $('<div class="colorMe">'+(i+1)+'</div>').css('background-color', col[i]);
        $('#container').append($box);
        count += i;
        if (i === col.length - 1){
          count += i;
          var $random = $('<div class="colorMe">'+count+'</div>').css('background-color', 'rgb('+r1+','+r2+','+r3+')');
          $('#container').append($random);
        }
      }
    }
  }

})();
