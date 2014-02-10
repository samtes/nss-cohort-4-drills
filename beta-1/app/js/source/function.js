/* exported fibnacciNums, rearrangeArray, firstLastSix, sumMultipleOf, rotateLeft, nearHundred, product, standardDiv, add, variance, avarage, suare, sumOfSquare */

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

function product(arr){
  'use strict';
  var result = 1;
  for (var i = 0; i < arr.length; i++){
    result *= arr[i];
  }
  return result;
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
  if (num < 100){
    if (100 - num < 11){
      return true;
    } else {
      return false;
    }
  } else {
    if (num - 100 < 11){
      return true;
    } else {
      return false;
    }
  }
}

function firstLastSix(arr){
  'use strict';
  if (arr[0] === 6 || arr[arr.length - 1] === 6){
    return true;
  } else {
    return false;
  }
}

function rotateLeft(arr){
  'use strict';
  return arr.push(arr.splice(0, 1));
}

function sumMultipleOf(arr){
  'use strict';
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i]%3 === 0 || arr[i]%5 === 0){
      result.push(arr[i]);
    }
  }
  return add(result);
}


function rearrangeArray(arr){
    'use strict';
    debugger;
    var rev = arr.reverse();
    var num = 0;
    var result = [];
    for (var i = 0; i < rev.length; i++){
      if (rev[i] === 0){
        result.push(num);
        num = 0;
      } else if (rev[i]%2 !== 0 && rev[i] > num){
        result.push(rev[i]);
        num = rev[i];
      } else {
        result.push(rev[i]);
      }
    }
    return result.reverse();
  }

function fibnacciNums(num){
  'use strict';
  var fib = [1,1];
  var nextNum = 0;

  for (var i = 0; i < num-2; i++){
    nextNum = fib[i]+fib[i+1];
    fib.push(nextNum);
  }
  return fib;
}








