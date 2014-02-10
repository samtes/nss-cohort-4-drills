/* global nearHundred:false, rotateLeft:false,  ok:false,  test:false, deepEqual:false */

'use strict';

test('nearHundred', function(){
  var x = nearHundred(90);

  ok( x === true , 'x should be true');
});

test('nearHundred', function(){
  var x = nearHundred(99);

  ok( x === true , 'x should be true');
});


test('nearHundred', function(){
  var x = nearHundred(89);

  ok( x === false, 'x should be false');
});


test('nearHundred', function(){
  var x = nearHundred(109);

  ok( x === true, 'x should be true');
});


test('nearHundred', function(){
  var x = nearHundred(111);

  ok( x === false, 'x should be false');
});


test('firstLastSix', function(){
  var x = nearHundred([6, 2, 5, 1]);

  deepEqual( x === true, 'x should be true');
});

test('firstLastSix', function(){
  var x = nearHundred([3,6, 2, 5, 1]);

  ok( x === false, 'x should be false');
});


test('firstLastSix', function(){
  var x = nearHundred([3, 2, 5, 1, 6]);

  deepEqual( x === true, 'x should be true');
});


test('rotateLeft', function(){
  var x = rotateLeft([3, 2, 5, 1, 6]);

  deepEqual( x[0] === 2, 'x should be true');
});




