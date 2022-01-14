/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // 提前看到了答案方法，用的优先队列和二分法
    // 感觉没什么思路。。。
};



// 下面是官方题解
var kSmallestPairs = function(nums1, nums2, k) {
    m = nums1.length
    n = nums2.length
        /*二分查找第 k 小的数对和的大小*/
    let left = nums1[0] + nums2[0];
    let right = nums1[m - 1] + nums2[n - 1];
    let pairSum = right;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        let cnt = 0;
        let start = 0;
        let end = n - 1;
        while (start < m && end >= 0) {
            if (nums1[start] + nums2[end] > mid) {
                end--;
            } else {
                cnt += end + 1;
                start++;
            }
        }
        if (cnt < k) {
            left = mid + 1;
        } else {
            pairSum = mid;
            right = mid - 1;
        }
    }

    const ans = [];
    let pos = n - 1;
    /*找到小于目标值 pairSum 的数对*/
    for (let i = 0; i < m; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
            pos--;
        }
        for (let j = 0; j <= pos && k > 0; j++, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[j]);
            ans.push(list);
        }
    }

    /*找到等于目标值 pairSum 的数对*/
    pos = n - 1;
    for (let i = 0; i < m && k > 0; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
            pos--;
        }
        for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum; j--, k--) {
            const list = [];
            list.push(nums1[i]);
            list.push(nums2[pos]);
            ans.push(list);
        }
    }
    return ans;
}


// 下面是自己打了一遍，感觉周五不适合学习，溜咯！
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // 提前看到了答案方法，用的优先队列和二分法
    // 感觉没什么思路。。。
    // 看了看答案感觉暂时没看懂呢！看看代码吧！

    const m = nums1.length
    const n = nums2.length
        // 二分查找第k小的数对和的大小
    let left = nums1[0] + nums2[0]
    let right = nums1[m - 1] + nums2[n - 1]
    let pairSum = right
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
        let cnt = 0
        let start = 0
        let end = n - 1
        while (start < m && end >= 0) {
            // start是nums1中的index
            // end是nums2中的index
            // 如果第一个里最小的+第二个最大的>数对和的中间值
            // 这个中间值并不是具体的数对和的中间值
            if (nums1[start] + nums2[end] > mid) {
                end--
            } else {
                // 如果小于等于mid，那么cnt是第一个数*所有第二个里的数
                // 同时第一个数组往前移一下
                cnt += end + 1
                start++
            }
        }
        if (cnt < k) {
            // 如果少于k组，那么继续更精确地求pairsum
            left = mid + 1
        } else {
            pairSum = mid
            right = mid - 1
        }
    }

    // 找到小于目标值pairsum的数对
    const ans = []
    let pos = n - 1
    for (let i = 0; i < m; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
            pos--
        }
        for (let j = 0; j <= pos && k > 0; j++, k--) {
            const list = []
            list.push(nums1[i])
            list.push(nums2[j])
            ans.push(list)
        }
    }

    // 找到目标值等于目标值pairsum的数对
    pos = n - 1
    for (let i = 0; i < m && k > 0; i++) {
        while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
            pos--
        }
        for (let j = i; k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum; j--, k--) {
            const list = []
            list.push(nums1[i])
            list.push(nums2[pos])
            ans.push(list)
        }
    }
    return ans
};