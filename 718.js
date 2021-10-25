/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    // 使用动态规划做的话，dp[i]表示循环到nums1[i]和nums2[i]的时候，最长重复子数组的长度为dp[i]
    // 两个整数数组的长度不一定相等
    // 这种二维比较的没什么思路！！
    // 看教程！！

    // 这一道题记一下，顺便看看之前的动规题目有的长度也是需要比数组长度大一的，为什么？

    // 因为是两个数组，所以是二维的dp数组
    // dp[i][j]表示A[0,i-1]和B[0,j-1]数组之间的最长重复子数组数目
    // 为什么不是[0,i]和[0,j]，因为如果是按照这个下标来的话，初始化都很难
    // 可以看下教程里推出来的状态图
    let dp = Array(nums1.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(nums2.length + 1).fill(0)
    }
    // 上面已经初始化过了，对于，两个初始行和初始列，肯定是0，因为是无意义的
    let result = 0
        // 这样就不用最后sort了
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            if (dp[i][j] > result) {
                result = dp[i][j]
            }
        }
    }
    // console.log(dp)
    return result
};

// 这道题目相当于我是直接看的教程，其实直接看状态图的就能明白算法的原理