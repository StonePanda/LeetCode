/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum=0
    let weight=0
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i]
    }
    if(sum%2==1)
    {
        return false
    }
    weight=sum/2
    let dp=Array(nums.length)
    for(let i=0;i<dp.length;i++)
    {
        dp[i]=Array(weight+1)
    }
    // dp现在是二维数组，row的长度是nums的长度
    // 步骤1：确定dp[i][j]的意义，dp[i][j]表示weight为j的时候，放入了0-i下标的数字的最大值，如果循环到最后,weight那一列刚好有等于weight的，那么return true，否则就是false
    // 递推公式是dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i]) 这个递推公式是对于物体i来说，只有放进去和不放进去两种情况
    // 步骤2：初始化：weight从0开始，因为j-weight[i]有可能刚好等于0
    for(let i=0;i<dp.length;i++)
    {
        dp[i][0]=0
    }
    for(let j=0;j<dp[0].length;j++)
    {
        if(j>=nums[0])
        {
            dp[0][j]=nums[0]
        }
        else
        {
            dp[0][j]=0
        }
    }
    for(let i=1;i<dp.length;i++)
    {
        for(let j=1;j<dp[0].length;j++)
        {
            if(j<nums[i])
            {
                // 不放i的最大值，就是前面dp[i-1][j]
                dp[i][j]=dp[i-1][j]
            }
            else
            {
                dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
            }
        }
    }
    for(let i=0;i<dp.length;i++){
        if(dp[i][weight]==weight)
        {
            return true
        }
    }
    return false
};
// 根据刚刚看完的动态规划01背包问题自己写的，第一遍也通过了
// 但是教程里的是一维数组，我不太喜欢一维数组，主要是自己有些地方感觉没想通
// 所以还是先用二维数组吧