/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) { 自己写的，一遍就通过了，我看思路也是对的
//     if(prices.length<=1){
//         return 0
//     }
//     let preDiff=0
//     let profit=0
//     for(let i=0;i<prices.length;i++){
//         preDiff=prices[i]-prices[i+1]
//         if(preDiff <=0)
//             profit+=preDiff
//     }
//     return -profit
// };

//看了教程写的，这样代码更短更简洁，其实那个-profit，也可以换成把profit当成正的
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1)
        return 0
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++)
        profit += Math.min(prices[i] - prices[i + 1], 0)
    return -profit
};
// 这个之前是按照贪心算法做的
// 现在再来一遍动规的做法

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 还是沿用上一次的二维数组
    // 然后我在分析的时候还是遇到了一些问题
    // 是因为对dp数组的定义不清
    // dp[i][0]是说在i这个节点，买还是不买
    // 买的话，持有的股票是-prices[i]
    // 不买的话，持有的股票是dp[i-1][0]
    // dp[i][1]是说在i这个节点，卖还是不卖
    // let dp=Array(prices.length).fill(Array(2))
    // 使用上面这种初始化的时候，所有dp[i]指向的都是同一个空数组
    // 因为复杂数据类型给你的是一个引用，而这一句只调用了一次Array(2)
    // 所以，所有的dp[i]都指向了这个Array(2)的引用地址
    // 那么如果是用循环进行初始化的话
    // 那么就会有很多个Array(2)
    // 那么就不会出现对dp[i][0]改变的话，所有的全部都会改变的情况
    let dp = Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(2)
    }
    dp[0] = [-prices[0], 0]
    let profit = 0
    for (let i = 1; i < dp.length; i++) {
        // 这个节点买入,这个节点不买入
        dp[i][0] = Math.max(-prices[i], dp[i - 1][0])
            // 这个节点卖出,这个节点不卖出
            // 这里跟之前的与上一个收益dp[i-1][1]比较是不一样的!
        dp[i][1] = Math.max(prices[i] + dp[i - 1][0], 0)
            // 今天赚到钱了,立马买入
        if (dp[i][1] > 0) {
            dp[i][0] = -prices[i]
        }
        profit += dp[i][1]
            // 上面这种初始化，只是改变了dp[i]的内容
            // 并没有改变dp[i]指向的引用，所以所有的dp[i]都一样
            // 用dp[i]=[i,0]这种形式的时候
            // 就是把dp[i]所指向的引用地址改变了
            // 所以所有的dp[i]就不一样了!
            // OHYEAH!终于把这个搞清楚了!
    }
    return profit
};