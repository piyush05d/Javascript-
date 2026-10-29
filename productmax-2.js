console.log("hey piyush");
let arr = [3, 4, 5, 1, 2, 6]
let max = 0;
let min = 0;
function maxproduct(arr) {


   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         min = max;
         max = arr[i]
      }
      else if (arr[i] > min) {
         min = arr[i];
      }
    
   }
   return min * max
}

let result = maxproduct(arr);
console.log(result);
