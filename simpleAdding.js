/* return the sum of all of the numbers less than x */
let simpleAdding = (x) => {

if (x === 1) {
  return 1;
} else {
  return x + simpleAdding(x - 1);
  }
}

simpleAdding(12);

/* This solution is recursive where it calls itself */

/* This is another recursive solution */
let simpleAdding = (x) => {

  if(num < 1) return NaN;
  else if (num === 1) return 1;
  return simpleAdding(num - 1) + num;
}

simpleAdding()


/* Here is another solution */

let simpleAdding = (x) => {
let total = 0;

for (let i = 1; i <= x; i++) {
  total += i;
}
return total;
}

simpleAdding(12)
