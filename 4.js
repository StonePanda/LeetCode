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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 划分数组
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    if (nums1.length == 0) {
        if (nums2.length % 2 == 1) {
            return nums2[Math.floor(nums2.length / 2)]
        } else {
            return (nums2[nums2.length / 2] + nums2[nums2.length / 2 - 1]) / 2
        }
    }
    let maxLeftA, maxLeftB, minRightA, minRightB
    let j
    for (let i = 0; i <= nums1.length; i++) {
        j = Math.floor((nums1.length + nums2.length + 1) / 2) - i
            // console.log(j)
        if (i == 0) {
            maxLeftA = -Infinity
            minRightA = nums1[i]
        } else if (i == nums1.length) {
            minRightA = Infinity
            maxLeftA = nums1[i - 1]
        } else {
            maxLeftA = nums1[i - 1]
            minRightA = nums1[i]
        }
        if (j == 0) {
            maxLeftB = -Infinity
            minRightB = nums2[j]
        } else if (j == nums2.length) {
            minRightB = Infinity
            maxLeftB = nums2[j - 1]
        } else {
            maxLeftB = nums2[j - 1]
            minRightB = nums2[j]
        }
        // console.log(maxLeftA,maxLeftB,minRightA,minRightB)
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((nums1.length + nums2.length) % 2 == 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
            } else {
                return Math.max(maxLeftA, maxLeftB)
            }
        }
    }
};