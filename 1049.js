/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    // 这道题在上午的时候一直在二维数组里面套
    // 看了教程才知道，其实是一维数组的解法！
    // 所以一维数组也是要记得dp[j]=Math.max(dp[j],dp[j-weight[i]]+value[i])
    // 然后一维数组的遍历顺序:先遍历物体i从0到最后一个，j背包重量倒序！从bagweight一直到weight[i]
    // 然后这一道题就可以看作是尽量把石头分成重量相近的两堆，也就和昨天的题目很相似了
    
    // 先确定dp[j]的含义，就是能够装j重量石头的背包
    // 然后把背包重量设置为总重量的一半，装尽可能多的石头，然后剩下的石头和这对石头相减
        let sum=0
        for(let i=0;i<stones.length;i++)
        {
            sum+=stones[i]
        }
        let dp=Array(parseInt(sum/2)+1)
        for(let i=0;i<dp.length;i++)
        {
            dp[i]=0
        }
        for(let i=0;i<stones.length;i++)
        {
            for(let j=dp.length-1;j>=stones[i];j--)
            {
                dp[j]=Math.max(dp[j],dp[j-stones[i]]+stones[i])
            }
        }
        return Math.abs(sum-dp[dp.length-1]*2)
    };