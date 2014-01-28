/* jshint camelcase:false */

(function() {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(pushZip);
    $('#addZip2').click(displayInfo);
  }
  function displayInfo(){
    var zipInfo = $('#zipSelect').val();
    var url = 'http://api.wunderground.com/api/dd0113b11366fc5b/forecast/q/'+zipInfo+'.json?callback=?';
    $.getJSON(url, run);
  }

  function run (data){
    var fourDays = data.forecast.simpleforecast.forecastday;
    var containers = $('.weather');

    for (var i = 0; i < fourDays.length; i++){
      var day = fourDays[i].date.weekday;
      var condition = fourDays[i].conditions;
      var image = fourDays[i].icon_url;

      $(containers[i]).find('h2').text(day);
      $(containers[i]).find('h3').text(condition);
      $(containers[i]).find('img').attr('src', image);
    }
  }

  function pushZip(){
    var zip = $('#zip').val();
    var $option = $('<option>');
    var text = $option.text(zip.toUpperCase());
    var val = $option.val(zip);
    $('#zipSelect').append(text);
    $('#zipSelect').append(val);
    $('#input').val('');
    $('#input').focus();
  }




})();
