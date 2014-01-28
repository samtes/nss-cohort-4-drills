/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#image').click(createImage);
  }

  function createImage(){
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/dd0113b11366fc5b/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(url, run);
  }

  function run(imgs){
    var img1 = imgs.satellite.image_url;
    var img2 = imgs.satellite.image_url_ir4;
    var img3 = imgs.satellite.image_url_vis;

    $('#img1').attr('src', img1);
    $('#img2').attr('src', img2);
    $('#img3').attr('src', img3);

  }




})();
