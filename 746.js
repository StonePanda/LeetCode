/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    if(cost.length==2) return Math.min(cost[0],cost[1])
    let dp=[]
    let sumcost=0
    if(cost[0]+cost[2]>cost[1]) dp[0]=1
    else dp[0]=0
    sumcost+=cost[dp[0]]
    while(dp[dp.length-1]+2<cost.length){
        if(cost[dp[dp.length-1]+1]>=cost[dp[dp.length-1]+2]){
            sumcost+=cost[dp[dp.length-1]+2]
            dp.push(dp[dp.length-1]+2)
        }
        else{
            sumcost+=cost[dp[dp.length-1]+1]
            dp.push(dp[dp.length-1]+1)
        }
    }
    return sumcost
};
// 动规第三题，但是还是不太会用这个算法
// 第一次自己写的在示例250/283这里出现问题了
// [0,1,2,2]

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    // 这里的dp数组自己就判断错了，应该是和cost等长，判断每到
    // 这个台阶所需要的最小的花费
    // 要么是i-1跳过来，要么是i-2跳过来，就这样判断到最后一个
    let dp=[]
    dp[0]=cost[0]
    dp[1]=cost[1]
    for(let i=2;i<cost.length;i++){
        dp[i]=Math.min(dp[i-1],dp[i-2])+cost[i]
    }
    return Math.min(dp[dp.length-1],dp[dp.length-2])
    // 这里为什么还要比较，因为有可能最后一步是跳到倒数第二个，然后它再跳两个就结束了
};