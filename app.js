'use strict';
let memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  let value = fib(n - 2) + fib(n - 1);
  memo.set(n, value);
  return value;
}

let length = 40;
for (let i = 1; i <= length; i++) {
  console.log(fib(i));
}