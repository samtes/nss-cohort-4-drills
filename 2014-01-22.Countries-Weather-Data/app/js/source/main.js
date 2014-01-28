/* jshint camelcase:false */

(function() {

  'use strict';
  var counter = 0;

  $(document).ready(init);

  function init(){
    $('#addColor').click(pushColor);
  }

  function pushColor(){
    var color = $('#input').val();
    var $option = $('<option>');
    var text = $option.text(color);
    var val = $option.val(counter);
    counter++;

    $('#colors').append(text);
    $('#colors').append(val);
    $('#input').val('');
    $('#input').focus();
  }




})();
