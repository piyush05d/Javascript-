let  nums =[1,2,3,4]
let target = 4


var twoSum = function (nums, target) {
   for (let i = 0; i < nums.length; i++) {

      for (let j = i+1 ; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            console.log('found')
            return [i, j];
         }
      }
   }
};

console.log(twoSum(nums, target));
