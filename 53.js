/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己写的，连示例代码（[-2,1,-3,4,-1,2,1,-5,4]）都没通过，但是实在是没有想法了
// nums[i]和nums[j]相等的时候没法判断，这就是这个程序的问题，都是正数和都是负数的时候，都舍弃也觉得都是有问题的
//  var maxSubArray = function(nums) {
//     let i=sum=0
//     let j=nums.length-1
//     for(let k=0;k<nums.length;k++){
//         sum+=nums[k]
//     }
//     let maxsum=sum
//     while(i<j){
//         if(nums[i]<=0 && nums[j]>0){
//             sum-=nums[i]
//             i++

//         }
//         else if(nums[j]<=0 && nums[i]>0){
//             sum-=nums[j]
//             j--


//         }
//         else{
//             if(nums[i]<=nums[j]){
//                 sum-=nums[i]
//                 i++
//             }
//             else{
//                 sum-=nums[j]
//                 j--
//             }
//         }
//         if(sum>maxsum)
//             maxsum=sum
//     }
//     return maxsum
// };

// 看了解析后，发现这道题的思路是，从头开始计算连续和，在连续和为负数的时候，就舍弃掉前面所有的数
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxsum=nums[0]
    let i=sum=0
    while(i<nums.length){
        sum+=nums[i]
        maxsum=(sum>maxsum)?sum:maxsum //这样可以让代码看起来更简洁
        sum=(sum<=0)?0:sum
        i++
    }
    return maxsum
};