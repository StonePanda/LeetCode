/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {
//     // i，j，k不一定是连在一起的
//     // 感觉可以用回溯法！
//     let path = []
//         // let result=[]
//     function backtracking(nums, startIndex) {
//         // console.log(startIndex,path)
//         if (path.length == 3) {
//             return true
//         }
//         if (startIndex >= nums.length && path.length < 3) {
//             return false
//         }
//         for (let i = startIndex; i < nums.length; i++) {
//             if (path.length != 0 && nums[i] <= path[path.length - 1]) {
//                 continue
//             }
//             path.push(nums[i])
//             if (backtracking(nums, i + 1)) {
//                 return true
//             } else {
//                 // 前面已经return false了
//                 path.pop()
//             }
//         }
//         return false
//     }
//     return backtracking(nums, 0)
// };
// 又是超时啦！感觉回溯法好容易超时哦！
// 看看可不可以优化！
// 然后发现想不出来

var increasingTriplet = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return false;
    }
    const leftMin = new Array(n).fill(0);
    leftMin[0] = nums[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
    }
    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
            return true;
        }
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // i，j，k不一定是连在一起的
    // 感觉可以用回溯法！
    // 然后发现回溯法超时了！
    // 要找三个数，还是这种大规模数组
    // 然后就想到以中间的为中心，两边分别找最小值和最大值！
    // 记住！！
    const n = nums.length
    if (n < 3) {
        return false
    }
    const leftMin = new Array(n)
    leftMin[0] = nums[0]
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i])
    }
    const rightMax = new Array(n)
    rightMax[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i])
    }
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
            return true
        }
    }
    return false
};
// 看着官方题解写了一遍的