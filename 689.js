/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    // 其实就是要把前2*k项最大的值包括进去，而且字典序最小？
    // 大概的理解就是上面的意思
    // 我自己没什么思路，要实现我想的非常复杂
    // 而且不一定正确
    // 所以直接看了题解
    // 题解的方法一是滑动数组
    // 就按照滑动数组去做吧
    let maxSum1 = 0
    let maxIndex1 = 0
    let sum1 = 0
        // 一个数组时候的最大值
        // 数组1的和
    let maxSum12 = 0
    let maxSum12Index1 = 0
    let maxIndex2 = 0
    let sum2 = 0
        // 两个数组的时候的最大值
        // 数组2的和
    let maxSum123 = 0
        // 三个数组的最大值
    let sum3 = 0
        // 数组3的和
    let result = []
        // 记录数组的下标形式
        // 滑动窗口的三个数组其实滑动就是从[0,k-1][k,2*k-1],[2*k,3*k-1]
        // 开始的
        // 而且三个窗口都是同步移动，只是遇到更大的记录下来值而已
    for (let i = k * 2; i <= nums.length - 1; i++) {
        // i不是起始位置，i是最后一个位置
        sum3 += nums[i]
        sum2 += nums[i - k]
        sum1 += nums[i - k * 2]
        if (i >= 3 * k - 1) {
            // console.log(sum1,maxSum1)
            if (sum1 > maxSum1) {
                maxSum1 = sum1
                maxIndex1 = i - k * 3 + 1
            }
            if (maxSum1 + sum2 > maxSum12) {
                maxSum12 = maxSum1 + sum2
                maxSum12Index1 = maxIndex1
                maxIndex2 = i - k * 2 + 1
                    // 这里不能一直记录的原因
                    // 是如果有一个大的就更新，可能会导致有重叠
                    // 具体看示例14/43
                    // [1,2,1,2,6,7,5,1]
                    // 2
            }
            if (maxSum12 + sum3 > maxSum123) {
                maxSum123 = maxSum12 + sum3
                result[0] = maxSum12Index1
                result[1] = maxIndex2
                result[2] = i - k + 1
            }
            sum1 -= nums[i - k * 3 + 1]
            sum2 -= nums[i - k * 2 + 1]
            sum3 -= nums[i - k + 1]
        }
    }
    return result
};