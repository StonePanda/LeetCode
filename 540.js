var singleNonDuplicate = function(nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (nums[mid] === nums[mid ^ 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
};

// 作者： LeetCode - Solution
// 链接： https: //leetcode-cn.com/problems/single-element-in-a-sorted-array/solution/you-xu-shu-zu-zhong-de-dan-yi-yuan-su-by-y8gh/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
// 上面是官方题解

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    // 数组有序
    // 对数的时间复杂度要用到什么？，肯定不是一个for循环，for循环时on时间复杂度
    // 对数的时间复杂度肯定是二分查找或者是二分搜索
    // 如何移动两边的指针，发现，在要找到的数的左边，相同的数下标必须是偶数、奇数
    // 在找到数的右边，相同的数下标必须是奇数、偶数
    // 假如说mid是偶数，那么判断mid和mid+1的情况，相等的话，mid<x
    // 假如说mid是奇数，判断mid和mid-1的情况，如果相等，mid<x
    // 上面不相等，那就是mid>=x
    // 我们要做的是，上面就是不管mid是偶数还是奇数，都是判断mid异或1的情况
    // 如果mid和mid异或1相等，那么low肯定是mid+1，不相等，那么high就是mid，注意不是mid-1
    let low = 0,
        high = nums.length - 1
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low
        if (nums[mid] == nums[mid ^ 1]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return nums[low]
};
// 下面是自己照着写的