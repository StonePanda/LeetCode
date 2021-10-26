// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
//  var maxUncrossedLines = function(nums1, nums2) {
//     // 有点类似于子数组，因为不相交，肯定是平行的
//     // 就是感觉i<=j 和i>=j都应该计算，然后比较较大值
//     // 这一道题需要连续吗？不需要
//     let dp=Array(nums1.length+1)
//     let result=0
//     for(let i=0;i<dp.length;i++)
//     {
//         dp[i]=Array(nums2.length+1).fill(0)
//     }
//     // 二维数组用slice()函数不顶用了
//     let dp1=JSON.parse(JSON.stringify(dp))
//     for(let i=1;i<dp.length;i++)
//     {
//         for(j=1;j<dp[0].length;j++)
//         {
//             // 等于是一个麻烦事儿，始终小于或者大于是肯定不会相交的
//             if(nums1[i]==nums2[j]&&i<=j)
//             {
//                 dp[i][j]=dp[i-1][j-1]+1
//             }
//             else
//             {
//                 dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
//             }
//             if(nums1[i]==nums2[j]&&i>=j)
//             {
//                 dp1[i][j]=dp1[i-1][j-1]+1
//             }
//             else
//             {
//                 dp1[i][j]=Math.max(dp1[i-1][j],dp1[i][j-1])
//             }
//             if(dp[i][j]>result || dp1[i][j]>result)
//             {
//                 result=Math.max(dp[i][j],dp1[i][j])
//             }
//         }
//     }
//     console.log(dp)
//     // console.log(dp1)
//     return result
// };
// 这一道题自己没有思路，想出来的思路看例子很容易就毙掉了


// 看了教程发现，其实和上次做的字符串的问题很像的
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var maxUncrossedLines = function(nums1, nums2) {
    // 这道题之前自己的思路是错误的，其实就是找到相同的子序列
    // 准确的表述是：找到这两个数组之间的最长的公共子序列
    // 这个跟字符串那个子序列的题目是一样的，可以是不连续的
    // 关于非连续的最长公共子序列，自己按照for循环推一遍
    // 就明白它的原理了
    let dp=Array(nums1.length+1)
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=Array(nums2.length+1).fill(0)
    }
    for(let i=1;i<dp.length;i++)
    {
        for(let j=1;j<dp[0].length;j++)
        {
            // 不要忘记dp[i][j]表示的是[0,i-1]的数组和[0,j-1]的数组
            if(nums1[i-1]==nums2[j-1])
            {
                dp[i][j]=dp[i-1][j-1]+1
            }
            else
            {
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    return dp[nums1.length][nums2.length]
};