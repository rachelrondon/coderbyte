/* 1. Order the numbers in ascending order
   2. Order the numbers in descending order
   3. Subtract the smaller number from the larger number
   4. Then repeat the previous step */
   let KaprekarsConstant = (numbers) => {

     let ascending = numbers.sort();
     let descending = ascending.reverse();
     console.log(ascending);
     console.log(descending);
   };


   KaprekarsConstant([5,2,4,6]);
