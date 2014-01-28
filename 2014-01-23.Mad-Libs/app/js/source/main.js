/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#words').click(splitString);
    $('#container').on('click', '.word', spitWord);
    $('#clear').click(clearAll);
  }

  function clearAll(){
    $('#string').val('');
    $( '#display' ).empty();
    $( '#container' ).empty();
  }

  function spitWord(){
    var word = $(this).text();
    var $li = $('<li><h2>' + word+' ' +'</h2></li>');
    $('#display').append($li);
  }


  function splitString(){
    var string = $('#string').val().split(' ');

    for (var i = 0; i < string.length; i++){
      $('#container').append('<div class="word"> '+string[i]+'</div>');
    }
  }


})();
