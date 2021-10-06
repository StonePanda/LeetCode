/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
//  var uniquePathsWithObstacles = function(obstacleGrid) {
//     let dp=[]
//     for(let i=0;i<obstacleGrid.length;i++) dp[i]=[]
//     for(let i=0;i<obstacleGrid.length;i++){
//         if(obstacleGrid[i][0]==1) dp[i][0]=0
//         else dp[i][0]=1
//     }
//     for(let i=0;i<obstacleGrid[0].length;i++){
//         if(obstacleGrid[0][i]==1) dp[0][i]=0
//         else dp[0][i]=1
//     }
//     for(let i=1;i<obstacleGrid.length;i++){
//         for(let j=1;j<obstacleGrid[0].length;j++){
//             if(obstacleGrid[i][j]==1) dp[i][j]=0
//             else dp[i][j]=dp[i-1][j]+dp[i][j-1]
//         }
//     }
//     return dp[dp.length-1][dp[0].length-1]
// };
// 第一次自己写的，但是在例子25/41的时候报错了
// [[1,0]] 应该输出0，但是我输出了1
// 其实就是没有考虑，在边界点如果有石头了，那么石头后面的应该都是0才对
// 在考虑了边界石头后，修改如下通过
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]==1) return 0
    let dp=[]
    for(let i=0;i<obstacleGrid.length;i++) dp[i]=[]
    let boundaryStone=false
    for(let i=0;i<obstacleGrid.length;i++){
        if(obstacleGrid[i][0]==1) boundaryStone=true
        if(!boundaryStone) dp[i][0]=1
        else dp[i][0]=0
    }
    boundaryStone=false
    for(let i=0;i<obstacleGrid[0].length;i++){
        if(obstacleGrid[0][i]==1) boundaryStone=true
        if(!boundaryStone) dp[0][i]=1
        else dp[0][i]=0
    }
    for(let i=1;i<obstacleGrid.length;i++){
        for(let j=1;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j]==1) dp[i][j]=0
            else dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};