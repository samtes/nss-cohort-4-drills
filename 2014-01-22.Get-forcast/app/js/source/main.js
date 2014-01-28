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
    console.log(data);
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
