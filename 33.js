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