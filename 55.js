/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var canJump = function(nums) { 自己写的到最后也没有通过
//     if(nums.length==1)
//         return true
//     let i=0
//     while(i<nums.length){
//         if(nums[i]==0)
//             return false
//         if(nums[i]+i>=nums.length-1)
//             return true
//         let k=0
//         let iinc=0
//         for(let j=1;j<=nums[i];j++){
//             if(nums[i+j]>=k){
//                 k=nums[i+j]
//                 iinc=j
//             }
//         }
//         if(iinc==0)
//             return false
//         i+=iinc
//     }
//     return false
// };
// 自己写的思路是，跳到自己能跳到的最远的最大值，判断能否跳完
// 但是在例子是[4,2,0,0,1,1,4,4,4,0,4,0]，就无法解决了

// 看了解析后，发现这里的贪心，局部最优以及全局最优都是从覆盖范围考虑
// 如果能够覆盖最后一个值，那就true，不用考虑中间是怎么眺的
// 遍历循环数组，每个正数，都会被判断能否增长cover范围，所以不会出现漏掉的情况
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    if(nums.length==1) return true
    let cover=0
    for(let i=0;i<=cover;i++){
        cover=Math.max(i+nums[i],cover)
        if(cover>=nums.length-1)
            return true
    }
    return false
};