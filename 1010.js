/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 感觉是一个双循环就能解决的事情？
    let result = 0
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) {
                result += 1
            }
        }
    }
    return result
};
// 虽然是中等题目，但其实一个双循环就可以解决了
// 但是我尝试用回溯算法做一下
/**
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function(time) {
//     // 感觉是一个双循环就能解决的事情？
//     // 用回溯算法做一下
//     // 用回溯算法反而超出时间限制？
//     // 在例子25/34的时候超出了
//     let result = 0
//     let path = []

//     function backtracking(time, startIndex) {
//         if (startIndex > time.length || path.length > 2) {
//             return
//         }
//         if (path.length == 2 && (path[0] + path[1]) % 60 == 0) {
//             result += 1
//         }
//         for (let i = startIndex; i < time.length; i++) {
//             path.push(time[i])
//             backtracking(time, i + 1)
//             path.pop()
//         }
//     }
//     backtracking(time, 0)
//     return result
// };
// 用回溯反而超时！

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 感觉是一个双循环就能解决的事情？
    // 用动态规划算一下
    // dp[i]表示循环到time[i]时候有几对总持续时间可以被60整除
    // 上面一维的没思路，二维的定义一直很模糊
    // 放弃了，看了看答案好像是JS的双循环不会超时，但是C++和JAVA的却会超时，懒得整了！
};