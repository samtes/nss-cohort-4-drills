(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){

    $('#insertList').click(createLists);

    function createLists(){
      var number = parseFloat($('#insertNumber').val());
      for (var i = 0; i < number; i++){
        if (i%2 === 0){
          $('#Lists').append('<li class="even">Even</li>');
        } else{
          $('#Lists').append('<li class="odd">Odd</li>');
        }
      }
    }
  }
})();
