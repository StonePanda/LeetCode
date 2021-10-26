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
    let maxsum = nums[0]
    let i = sum = 0
    while (i < nums.length) {
        sum += nums[i]
        maxsum = (sum > maxsum) ? sum : maxsum //这样可以让代码看起来更简洁
        sum = (sum <= 0) ? 0 : sum
        i++
    }
    return maxsum
};

// 这道题自己做了一遍，然后初始化没有考虑好，导致提交了好几遍都是解答错误！
// 但最后彻底不行的方式还是内存超出了：
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     // 重新再用动态规划的方式做一遍
//     // 一维dp数组感觉不太合理，二维的话dp[i][j]就必须要满足一个i<=j
//     if (nums.length == 1) {
//         return nums[0]
//     }
//     let dp = Array(nums.length)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = Array(nums.length).fill(0)
//     }
//     // 初始化没有初始化好！
//     let result = nums[0]
//     for (let i = 0; i < dp.length; i++) {
//         for (let j = i; j < dp[0].length; j++) {
//             if (j == 0) {
//                 dp[i][j] = nums[0]
//             } else {
//                 dp[i][j] = dp[i][j - 1] + nums[j]
//             }
//             if (dp[i][j] > result) {
//                 result = dp[i][j]
//             }
//         }
//     }
//     console.log(dp)
//     return result
// };


// 我真是好蠢！！

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 重新再用动态规划的方式做一遍
    // 天呐！我的脑子真是太笨啦！反正就是跟之前的二维dp数组缠上了！
    // 就是用一维dp数组就可以！哎呀！！烦烦烦！！
    let dp = Array(nums.length)
        // 其实这道题的贪心思路就是，连续和为负我就舍弃之前的连续和，从现在开始往后面算
        // dp[i]=Math.max(dp[i-1]+nums[i],nums[i])
    dp[0] = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        if (dp[i] > result) {
            result = dp[i]
        }
    }
    return result
};