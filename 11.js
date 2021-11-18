/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     // 最简单的思路就是直接两个for循环，但是不知道会不会超时！
//     // 果然超时了！在例子55/60的时候就超时了！
//     let result = 0
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let tmp = (j - i) * Math.min(height[i], height[j])
//             if (tmp > result) {
//                 result = tmp
//             }
//         }
//     }
//     return result
// };
// 超时了！然后换其他方法做！

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 最简单的思路就是直接两个for循环，但是不知道会不会超时！
    // 果然超时了！在例子55/60的时候就超时了！

    // 试试动态规划！但是想了想动态规划还是双for循环啊！

    // 试试回溯法！不太对！

    // 想想贪心，感觉没什么思路！

    // 所以直接看了题解！双指针法！记住了！！
    // 双指针为什么移动较小的，如果移动较大的，那么面积是往小了算的！自己思考一下！

    let i = 0,
        j = height.length - 1,
        max = 0
    while (i < j) {
        let tmp = (j - i) * Math.min(height[i], height[j])
        if (tmp > max) {
            max = tmp
        }
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
};