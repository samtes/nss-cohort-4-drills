/* exported sumFirst10FibNums, rotateLeft, sumMultiple3or5, nearHundred, standardDiv, firstLastSix,  add, variance, avarage, suare, sumOfSquare */

function add(arr){
  'use strict';
  var result = 0;
  for (var i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}

function square (x){
  'use strict';
  return x*x;
}

function sumOfSquare(arr){
  'use strict';
  var result = 0;
  for (var i = 0; i < arr.length; i++){
    result += square(arr[i]);
  }
  return result;
}

function avarage(arr){
  'use strict';
  var result = 0;
  for (var i = 0; i< arr.length; i++){
    result += arr[i];
  }
  return result/arr.length;
}

function variance(arr){
  'use strict';
  var result = 0;
  for (var i = 0; i < arr.length; i++){
    result += square(arr[i]-avarage(arr));
  }
  return result;
}

function standardDiv(arr){
  'use strict';
  var Var = variance(arr);
  return Math.round(Math.sqrt(Var));
}

function nearHundred(num){
  'use strict';
  var hun = 100;
  if (hun - num < 10 || num - hun < 10){
    return true;
  } else {
    return false;
  }
}

function firstLastSix(arr){
  'use strict';
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 6 && arr.indexOf(6) === 0 || arr.indexOf(6) === (arr.length-1)){
      return true;
    } else {
      return false;
    }
  }
}

function rotateLeft(arr){
  'use strict';
  var array = arr;
  return array.push(arr.splice(0, 1));
}


function sumMultiple3or5(){
  'use strict';
  var temp = 0;
  for (var i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0){
      temp += i;
    }
    return temp;
  }
}

function sumFirst10FibNums(){
  'use strict';
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var fib = [1];
  var result = 0;
  for (var i = 0; i < 10; i++){
    result += num[i];
    console.log(result);
    fib.push(result);
  }
}
