/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    // 排列,完全背包问题
    // dp[j]表示j为target的时候，所有可能的组合数
    // 初始化
    let dp=Array(target+1).fill(0)
    dp[0]=1
    // 递推公式的确定：dp[j]+=dp[j-nums[i]]
    // 因为这一道题是排列问题，所以要先遍历容量，再遍历物品
    for(let i=0;i<=target;i++)
    {
        for(let j=0;j<=nums.length;j++)
        {
            if(nums[j]<=i)
            {
                dp[i]+=dp[i-nums[j]]
            }
        }
    }
    return dp[target]
};
// 这一道有了前面的知识铺垫就比较简单
// 第一遍就过了