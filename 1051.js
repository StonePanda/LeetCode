/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // 递减的反面不是递增，而是非递减，非递减是指可以平滑（相等），可以严格递增
    // 简单的做法肯定是，排序然后不相等的就记录
    let origin = heights.slice()
        // 按照升序排列
    heights.sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != origin[i]) {
            result++
        }
    }
    return result
};
// 上面的是最简单的
// 看了一下答案，最吸引的人是桶排序
// 桶排序是什么，就相当于把67281，放在了1-10的桶中，然后遍历桶
// 相当于两个遍历就完了
// 当然数目多的时候，667722888899911，这样可以分范围放，比如1-2，3-4，这样的桶
// 然后桶内排序，然后再输出桶内的值
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // 递减的反面不是递增，而是非递减，非递减是指可以平滑（相等），可以严格递增
    // 简单的做法肯定是，排序然后不相等的就记录

    // 发现答案全是跟排序相关的
    // 所以就来用个桶排序吧！
    let buckets = new Array(101).fill(0)
        // 初始化了101个桶
    for (let i = 0; i < heights.length; i++) {
        buckets[heights[i]] += 1
    }
    // 把数放进桶里，计数了
    let result = 0
    let j = 0
    for (let i = 0; i < buckets.length; i++) {
        // 如果大于0，说明里面还有数
        while (buckets[i]-- > 0) {
            if (i !== heights[j++]) {
                result++
            }
        }
    }
    return result
};
// 用时减小