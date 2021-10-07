/**
 * @param {number} n
 * @return {number}
 */
//  var integerBreak = function(n) {
//     // 动态规划好难啊，我连第一步dp数组的定义以及下标的定义都没办法确定
//     // dp[i]就是i被分解后的加数数组
//     if(n==2) return 1
//     if(n==3) return 2
//     if(n==4) return 4
//     let dp=[]
//     dp[5]=[3,2]
//     for(let i=6;i<=n;i++){
//         if(dp[i-1][dp[i-1].length-1]<=3){
//             dp[i]=dp[i-1].slice()
//             dp[i][dp[i].length-1]++
//         }
//         else if(dp[i-1][dp[i-1].length-1]==4){
//             dp[i]=dp[i-1].slice()
//             dp[i][dp[i].length-1]=3
//             dp[i].push(2)
//         }
//     }
//     let res=1
//     for(let i=0;i<dp[n].length;i++){
//         res*=dp[n][i]
//     }
//     return res
// };
// 第一次自己写对了，就是突然就找到规律了？
// 反正就是拆分成3和2或者3和4
// 看了教程发现这个就是教程里用的贪心算法，可能是由什么数学定律在里面的吧

// 然后用真正的动规算法做了一下
/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {
    // 按照教程里的真正的动态规划来说呢
    // dp[i]表示i的最大乘积，有两种渠道可以得到dp[i]，一个是j*(i-j),另外一种是j*dp[i-j]
    let dp=Array(n+1)
    for(let i=0;i<dp.length;i++) dp[i]=1
    for(let i=3;i<=n;i++){
        for(let j=1;j<i-1;j++){
            dp[i]=Math.max(dp[i],Math.max((i-j)*j, dp[i-j]*j))
            // 这里先将dp[i]和后面的值进行了比较，所以dp[i]必须的初始化，不然Math.max是无法比较的
        }
    }
    return dp[n]
};