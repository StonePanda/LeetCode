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
    if(prices.length<=1)
        return 0
    let profit=0
    for(let i=0;i<prices.length-1;i++)
        profit+=Math.min(prices[i]-prices[i+1],0)
    return -profit
};