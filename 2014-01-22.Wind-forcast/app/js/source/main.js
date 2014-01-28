/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/dd0113b11366fc5b/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var temp = data.current_observation.temperature_string;
    var windDesc = data.current_observation.wind_string;
    var windDir = data.current_observation.wind_dir;
    var degree = data.current_observation.wind_string;
    var speed = data.current_observation.temperature_string;
    var gust = data.current_observation.wind_gust_kph;

    var wind =[temp, windDesc, windDir, degree, speed, gust];

    for (var i = 0; i < wind.length; i++){
      var $div = $('<div>');
      $div.text(wind[i]);
      $('#temprature').append($div);
    }
  }



})();
