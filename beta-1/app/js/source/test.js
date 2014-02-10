/* global rearrangeArray:false, fibnacciNums: false, rotateLeft:false, sumMultipleOf:false, firstLastSix:false, nearHundred:false, deepEqual:false,  variance: false, product:false, standardDiv:false, add: false, avarage:false, square:false, sumOfSquare:false, test:false, ok:false */

'use strict';

test('add', function(){
  var x = add([2, 5, 5]);

  ok( x === 12, 'x should be 12');
});

test('square', function(){
  var x = square(2);

  ok( x === 4, 'x should be 4');
});


test('product', function(){
  var x = product([2, 3, 4]);

  ok( x === 24, 'x should be 24');
});

test('sumOfSquare', function(){
  var x = sumOfSquare([2, 4]);

  ok( x === 20, 'x should be 20');
});

test('avarage', function(){
  var x = avarage([2, 4]);

  ok( x === 3, 'x should be 3');
});

test('variance', function(){
  var x = variance([2, 4]);

  ok( x === 2, 'x should be 2');
});

test('standardDiv', function(){
  var x = standardDiv([2, 4]);

  ok( x === 1, 'x should be 1');
});

test('nearHundred', function(){
  var x = nearHundred(89);
  var y = nearHundred(90);
  var z = nearHundred(109);
  var j = nearHundred(111);

  deepEqual( x, false, 'x should be false');
  deepEqual( y, true, 'y should be true');
  deepEqual( z, true, 'z should be true');
  deepEqual( j, false, 'j should be false');
});

test('firstLastSix', function(){
  var x = firstLastSix([6,4,5,7,2]);
  var y = firstLastSix([3,4,5,7,2]);
  var g = firstLastSix([4,6,5,7,2]);
  var z = firstLastSix([4,5,7,2,6]);

  deepEqual(x, true, 'x is true because the array starts with 6');
  deepEqual(y, false, 'y is false');
  deepEqual(g, false, 'g is false');
  deepEqual(z, true, 'z is true because the array ends with 6');
});


test('rotateLeft', function(){
  var x = rotateLeft([6,4,5,7,2]);
  var y = rotateLeft([3,4,5,7,2]);
  var g = rotateLeft([4,6,5,7,2]);
  var z = rotateLeft([4,5,7,2,6]);
  var j = rotateLeft([8,5,7,2,6]);

  ok(x, [4,5,7,2,6], 'x should be [4,5,7,2,6]');
  ok(y, [4,5,7,2,3], 'y should be [4,5,7,2,3]');
  ok(g, [5,7,2,6,4], 'g should be [6,5,7,2,4]');
  ok(z, [5,7,2,6,4], 'z should be [5,7,2,6,4]');
  ok(j, [5,7,2,6,8], 'j should be [5,7,2,6,8]');
});


test('sumMultipleOf', function(){
  var x = sumMultipleOf([16,24,25,75,20]);
  var y = sumMultipleOf([3,14,55,73,26]);
  var g = sumMultipleOf([445,6,15,8,12]);
  var z = sumMultipleOf([4,5,76,20,68]);
  var j = sumMultipleOf([8,5,7,2,6]);

  ok(x, 144, 'x should be 144');
  ok(y, 53, 'y should be 53');
  ok(g, 478, 'g should be 478');
  ok(z, 25, 'z should be 25');
  ok(j, 11, 'j should be 11');
});


test('rearrangeArray', function(){
  var x = rearrangeArray([0,1,6,2,0,4,25,0,7,9,5,2]);
  var y = rearrangeArray([0,7,6,2,0,4,25,0,7,3,5,2]);

  deepEqual(x, [1,1,6,2,25,4,25,9,7,9,5,2], 'x should be ');
  deepEqual(y, [7,7,6,2,25,4,25,7,7,3,5,2], 'y should be ');
});

test('fibnacciNums', function(){
  var x = fibnacciNums(10);
  var y = fibnacciNums(20);

  deepEqual(x, [1,1,2,3,5,8,13,21,34,55], 'x should be 232');
  deepEqual(y, [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765], 'y should be 232');
});

