/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 如果存在就返回索引，如果不存在就返回left
    let left = 0
    let right = nums.length - 1
    let mid = left + ((right - left) >> 1)
    for (let i = 0; i < nums.length; i++) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] >= target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return left
};
// 从35开始，要争取努力达到100%啦！

// 首先是官方题解的对比：
// 然后就发现自己是不是不带脑子写代码啊！
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0,
        right = n - 1,
        ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};

// 下面是仿照官方题解
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 如果存在就返回索引，如果不存在就返回left
    const n = nums.length
    let left = 0,
        right = n - 1,
        mid = ((right - left) >> 1) + left,
        ans = n;
    while (left <= right) {
        mid = ((right - left) >> 1) + left
        if (target <= nums[mid]) {
            ans = mid
                // 这里合并了
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return ans
};

// 自己根据官方题解又写的
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 如果存在就返回索引，如果不存在就返回left
    // 自己再写一遍
    const n = nums.length
    let left = 0,
        right = n - 1,
        mid = ((right - left) >> 1) + left;
    while (left <= right) {
        mid = ((right - left) >> 1) + left
        if (nums[mid] == target) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            // 这里确实不用再判断了
            left = mid + 1
        }
    }
    return left
};

// 代码随想录的解法，其实都一样的啦
var searchInsert = function(nums, target) {
    let l = 0,
        r = nums.length - 1,
        ans = nums.length;

    while (l <= r) {
        const mid = l + Math.floor((r - l) >> 1);

        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            ans = mid;
            r = mid - 1;
        }
    }

    return ans;
};

// 下面是执行用时100%的用例：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return test2(nums, target)
};

function test2(nums, target) {
    const t = target

    //小数组使用遍历.....
    if (nums.length < 50) {
        let i = 0
        for (i; i < nums.length; i++) {
            if (nums[i] >= t) {
                return i
            }
        }
        return i
    }

    const countMid = (head, tail) => head + Math.floor((tail - head) / 2)
    let head = 0
    let tail = nums.length - 1
    let mid = countMid(head, tail);
    // 这里也要判断一下
    if (t < nums[0]) return 0
    if (t > nums[nums.length - 1]) return nums.length
    while (head < tail) {
        const n = nums[mid]
        if (n < t) {
            head = mid + 1
            mid = countMid(head, tail)
        } else if (n > t) {
            tail = mid - 1
            mid = countMid(head, tail)
        } else {
            return mid
        }
    }
    return mid > 0 ? mid : 0
}



// 下面是消耗内存最小的例子：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    var bir;
    while (l <= r) {
        bir = Math.floor((l + r) / 2)
        if (nums[bir] == target || (nums[bir - 1] < target && nums[bir] > target)) {
            return bir
        } else if (nums[bir] < target) {
            l = bir + 1
        } else {
            r = bir - 1
        }
    }
    return target < nums[0] ? 0 : nums.length;
};


// 用时优化后，没什么用！！
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 这道题优化的话不管是时间还是内存消耗都还是用的二分法:
    // 但是执行用时就是可以先小数组遍历一下，然后边界判断一下
    // 不知为何，优化了没有用！
    const nLen = nums.length
    if (target < nums[0]) {
        return 0
    }
    if (target > nums[nLen - 1]) {
        return nLen
    }
    // 小数组使用遍历
    if (nLen < 50) {
        for (let i = 0; i < nLen; i++) {
            if (nums[i] >= target) {
                return i
            }
        }
    }

    // 其他的就二分
    let left = 0,
        right = nLen - 1,
        mid = left + ((right - left) >> 1);
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        const n = nums[mid]
        if (n == target) {
            return mid
        } else if (n > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
};

// 这个也是没什么用！
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 这道题优化的话不管是时间还是内存消耗都还是用的二分法:
    // 但是执行用时就是可以先小数组遍历一下，然后边界判断一下
    // 不知为何，优化了没有用！
    // 内存优化：
    let l = 0,
        r = nums.length - 1,
        mid;
    while (l <= r) {
        mid = ((l + r) >> 1)
        if (nums[mid] == target || (nums[mid - 1] < target && nums[mid] > target)) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return target < nums[0] ? 0 : nums.length
};

// 后来发现是leetcode上的记录可能也和做的时间有关