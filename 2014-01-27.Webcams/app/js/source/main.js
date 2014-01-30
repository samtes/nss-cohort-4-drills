(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(pushToSelect);
    $('#getImg').click(getImages);
    $('#clearImg').click(clearImage);
  }

//...this function will clear all the generated images from the '#container' div ... and refocus the cursor on the '#zipcode' text field.//
  function clearImage(){
    $('#container > div').remove();
    $('#zipcode').focus();
  }

//... this function defines the url and concatinate the zip code to it...//
  function getImages(){
    clearImage();
    var zipcode = $('#zip').val();
    var url = 'http://api.wunderground.com/api/dd0113b11366fc5b/webcams/q/'+zipcode+'.json?callback=?';
    $.getJSON(url, receive);
  }

//...this function generated empty div and appends the neighbourhood name in a div and and the img from the webcam in the div// 
  function receive(data){
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
    }
  }

//... this function pushes the zipcodes to the dropdown select.//
  function pushToSelect(){
    var zipcode = $('#zipcode').val();
    var $option = $('<option>'+zipcode+'</option>');
    $option.val(zipcode);
    $('#zip').append($option);
  }




})();
