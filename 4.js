/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 服了，用下面竟然就行！！
    // 合并数组
    let nums = nums1.concat(nums2)
    nums.sort((a, b) => a - b)
        // 升序
    let len = nums.length
    if (len % 2 == 0) {
        return (nums[len / 2] + nums[len / 2 - 1]) / 2
    } else {
        return nums[(len / 2) | 0]
    }
};
// 上面的竟然通过了，太神奇了！