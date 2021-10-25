/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // 这道题和昨天题目300的区别是，从不连续变到了连续
    let dp = Array(nums.length).fill(1)
    for (let i = 1; i < dp.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = Math.max(dp[i], dp[i - 1] + 1)
        }
    }
    dp.sort((a, b) => (b - a))
    return dp[0]
};
// 这道题目有了昨天的题目做铺垫，就简单多啦！