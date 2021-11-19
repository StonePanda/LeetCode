/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // 这个nums的长度比较小
    // 感觉可以用回溯
    nums.sort((a, b) => a - b)
    let used = new Array(nums.length).fill(false)
        // 按照自然升序排序
    let result = []
    let path = []

    function backtracking(nums, target, startIndex) {
        if (startIndex > nums.length) {
            return
        }
        if (path.length == 4) {
            if (path[0] + path[1] + path[2] + path[3] == target) {
                result.push(path.slice())
            }
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            // 不能这样剪枝的原因是因为target为负，nums也为负的时候！！
            //     if(path.length==0 && nums[i]>target)
            //     {
            //         return
            //     }
            if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
                continue
            }
            used[i] = true
            path.push(nums[i])
            backtracking(nums, target, i + 1)
            path.pop()
            used[i] = false
        }
    }
    backtracking(nums, target, 0)
    return result
};