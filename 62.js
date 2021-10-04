/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // 感觉自己找不到规律
    // 毫无思路
    // 对dp数组也是毫无思路
    // 就是被几个向右几个向下弄得乱了思路
    // 按坐标去想，机器人的初始位置是[0,0]，终点位置是[m-1,n-1]
    // dp[i][j]表示，机器人到位置[i,j]时总共有dp[i][j]条路径
    // 那么dp[i][j]=dp[i][j-1]+dp[i-1][j]
    // 因为达到那个点就只有这两个方向
    // 确定dp数组、递推公式、遍历顺序后
    // 初始化
    let dp=[]
    for(let i=0;i<m;i++) dp[i]=[]
    // 上面就是js二维数组的初始化
    for(let i=0;i<m;i++) dp[i][0]=1
    for(let j=0;j<n;j++) dp[0][j]=1
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};