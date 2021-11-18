/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     // 其实就是背包问题，用回溯算法解决
//     // 因为答案中要求不可以包含重复的三元组，所以还要加一个used数组
//     nums.sort((a, b) => (a - b))
//         // 按照升序排列
//     let used = new Array(nums.length).fill(false)
//     let result = []
//     let path = []

//     function backtracking(nums, startIndex) {
//         if (startIndex > nums.length) {
//             return
//         }
//         if (path.length == 3) {
//             if (path[0] + path[1] + path[2] == 0) {
//                 result.push(path.slice())
//             }
//             return
//         }
//         for (let i = startIndex; i < nums.length; i++) {
//             if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
//                 continue
//             }
//             path.push(nums[i])
//             used[i] = true
//             backtracking(nums, i + 1)
//             path.pop()
//             used[i] = false
//         }
//     }
//     backtracking(nums, 0)
//     return result
// };
// 上面的回溯算法！竟然超出时间限制了！！！
// 啊啊啊啊啊啊啊！！！
// 在例子315/318就超出时间限制了！

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     // 其实就是背包问题，用回溯算法解决
//     // 因为答案中要求不可以包含重复的三元组，所以还要加一个used数组
//     nums.sort((a, b) => (a - b))
//         // 按照升序排列
//     let used = new Array(nums.length).fill(false)
//     let result = []
//     let path = []

//     function backtracking(nums, startIndex) {
//         if (startIndex > nums.length) {
//             return
//         }
//         if (path.length == 3) {
//             if (path[0] + path[1] + path[2] == 0) {
//                 result.push(path.slice())
//             }
//             return
//         }
//         for (let i = startIndex; i < nums.length; i++) {
//             if (path.length == 0 && nums[i] > 0) {
//                 // 这个时候肯定没办法相加后还等于0了，但是这样还是超出时间限制！！！
//                 return
//             }
//             if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
//                 continue
//             }
//             path.push(nums[i])
//             used[i] = true
//             backtracking(nums, i + 1)
//             path.pop()
//             used[i] = false
//         }
//     }
//     backtracking(nums, 0)
//     return result
// };

// 上面是尝试剪枝！但是还是失败了！！
// 流下泪了！
// 看教程了！


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 其实就是背包问题，用回溯算法解决
    // 因为答案中要求不可以包含重复的三元组，所以还要加一个used数组
    nums.sort((a, b) => (a - b))
        // 按照升序排列
        // 放弃了！回溯超时啊！/(ㄒoㄒ)/~~

    // 下面是看了题解后的做法，就是一个for循环固定一个nums[i]，然后再来一个while循环，固定后面两个指针，分别是nums[L]和nums[R]
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            // 去重
            continue
        }
        let L = i + 1,
            R = nums.length - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum == 0) {
                result.push([nums[i], nums[L], nums[R]])
                    // 已经记录的值才能够去重！没记录的如果去重，很容易导致L>=R
                while (nums[L] == nums[L + 1]) {
                    L++
                }
                while (nums[R] == nums[R - 1]) {
                    R--
                }
                // 等于0，指针也要移动
                L++
                R--
            }
            // 不能让指针同时移动！！
            else if (sum < 0) {
                L++
            } else if (sum > 0) {
                R--
            }
        }
    }
    return result
};