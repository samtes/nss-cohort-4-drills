(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(pushToSelect);
    $('#getImg').click(getImages);
    $('#clearImg').click(clearImage);
  }

  function clearImage(){
    $('#container > div').remove();
    $('#zipcode').focus();
  }

  function getImages(){
    var zipcode = $('#zip').val();
    var url = 'http://api.wunderground.com/api/dd0113b11366fc5b/webcams/q/'+zipcode+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var count = data.webcams;
    for (var i = 0; i < count.length; i++){
      var images = data.webcams[i].WIDGETCURRENTIMAGEURL;
      var place = data.webcams[i].neighborhood;
      var $parDiv = $('<div>');
      var $div = $('<div>');
      var $img = $('<img>');
      $div.text(place);
      $img.attr('src', images);
      $parDiv.addClass('style');
      $parDiv.append($div, $img);
      $('#container').prepend($parDiv);
     // $('#container').prepend($img);
    }
  }

  function pushToSelect(){
    var zipcode = $('#zipcode').val();
    var $option = $('<option>'+zipcode+'</option>');
    $option.val(zipcode);
    $('#zip').append($option);
  }




})();
