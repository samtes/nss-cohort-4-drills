(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){

    $('#addImage').click(addImageToDiv);

    function addImageToDiv(){
      var url = $('#imgUrl').val();
      var image = $('<img src="'+ url +'" width="100" height="100">');
      $('#container').append(image);
      $('#imgUrl').val('');
    }
  }
})();
