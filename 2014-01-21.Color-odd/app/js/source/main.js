(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#addBut').click(addButton);

    function addButton(){
     var b2 = '<butto id="two"> Make One Disappear</button>'
     var b3 = '<butto id="three"> Make Two Disappear</button>'
     $('#container').append(b2, b3);
    }
  }

})();
