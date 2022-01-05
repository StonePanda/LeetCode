/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     // 什么意思？怎么没搞懂？
//     // for(let i=0;i<nums.length;i++)
//     // {
//     //     if(nums[i]==target)
//     //     {
//     //         return i
//     //     }
//     // }
//     // return -1
//     // 看进阶
//     // 看了答案才知道要写什么
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     // 看进阶
//     // 看了答案才知道要写什么
//     // 答案里的评论比较经典：
//     // 二分法，一定是一半有序，一半无序，无序二分，一半有序，一半无序，无序再二分。。。
//     let index = Math.floor(nums.length / 2)
//     if (index == 0) {
//         return nums[0] == target ? 0 : -1
//     }
//     let left = 0
//     let right = nums.length - 1
//     while (index != 0) {
//         if (nums[left] == target) {
//             return left
//         }
//         if (nums[right] == target) {
//             return right
//         }
//         if (nums[index] == target) {
//             return index
//         }
//         // 先判断有序，还是先判断在哪个范围？
//         if (nums[left] < nums[index]) {
//             // 说明这里是有序的
//             if (target > nums[left] && target < nums[index]) {
//                 // 在这个范围里，继续二分查找？
//             } else {
//                 // 不在这个范围里，那就在另一个范围里查查
//             }
//         } else {
//             // 说明左半部分是无序的
//         }

//     }
// };

// 先写一个自白书吧

/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 时间复杂度：O(logn)
    // 空间复杂度：O(1)
    // [6,7,8,1,2,3,4,5]
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (nums[mid] === target) return mid;

        // [start, mid]有序

        // ️⚠️注意这里的等号
        if (nums[mid] >= nums[start]) {
            //target 在 [start, mid] 之间

            // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                //target 不在 [start, mid] 之间
                start = mid + 1;
            }
        } else {
            // [mid, end]有序

            // target 在 [mid, end] 之间
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                // target 不在 [mid, end] 之间
                end = mid - 1;
            }
        }
    }

    return -1;
};

// 看了别人的题解

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 看进阶
    // 看了答案才知道要写什么
    // 答案里的评论比较经典：
    // 二分法，一定是一半有序，一半无序，无序二分，一半有序，一半无序，无序再二分。。。

    // 先想好思路再去写代码，因为之前写的太乱了！
    // 先找到有序数组，如果target在有序数组里，那么就二分查找就可以
    // 如果target不在有序数组里，那说明在无序数组里，那无序数组里
    // 昨日遗留的题目
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        const mid = start + ((end - start) >> 1)
        if (nums[mid] == target) {
            return mid
        }

        // 下面这里写的时候我当时忘记了，一定是一个有序，或者另一个有序
        // 必定是一个有序的
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
};
// 二分法