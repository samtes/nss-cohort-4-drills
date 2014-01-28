/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#incept').click(inception);
  }

  function inception(){
    var num = $('#number').val() * 1;
    var $seed = $('#seed');

    for (var i=0; i < num; i++){
      var $div = createDiv();
      $seed.wrap($div);
      $seed = $('#container > div');
    }
    $('#number').val('');
    $('#number').focus();
  }

  function createDiv(){
    var $div = $('<div>');
    var border = '1px solid ' + randomColor();
    $div.css('border', border);

    return $div;
  }

  function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return 'rgb('+r+','+g+','+b+')';
  }


})();
