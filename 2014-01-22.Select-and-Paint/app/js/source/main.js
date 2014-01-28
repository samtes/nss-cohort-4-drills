/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addColor').click(pushColor);
    $('#colors').change(changeColor);
  }

  function changeColor(){
    var col = $('#colors').val();
    $('#display').css('background-color', col);
  }

  function pushColor(){
    var color = $('#input').val();
    var $option = $('<option>');
    var text = $option.text(color.toUpperCase());
    var val = $option.val(color);
    $('#colors').append(text);
    $('#colors').append(val);
    $('#input').val('');
    $('#input').focus();
  }




})();
