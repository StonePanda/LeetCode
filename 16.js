/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 这个摆明了是要计算出来所有的和
    // 除非是直接等于target，是可以直接不再循环了，否则肯定是要全部计算出来，然后找出最接近的
    // 假如我们还是用双指针法去做
    // 但是做的太胡乱了，感觉还是先计算出所有的sum，然后再找和sum最接近的吧！
    let result = []
    nums.sort((a, b) => (a - b))
        // 升序排序
    for (let i = 0; i < nums.length; i++) {
        // 还是要去重的
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        let L = i + 1,
            R = nums.length - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            result.push(sum)
            if (sum == target) {
                return target
            } else if (sum < target) {
                L++
                // 去重的位置非常需要注意，不去重了！怎么总是出错！！
            } else if (sum > target) {
                R--
            }

        }
    }
    // 如果循环里没有return的话，说明没有和target相等的
    result.push(target)
    result.sort((a, b) => (a - b))
    let targetindex = result.indexOf(target)
        // console.log(result,targetindex)
    if (targetindex == 0) {
        return result[1]
    }
    if (targetindex == result.length - 1) {
        return result[result.length - 2]
    }
    if (target - result[targetindex - 1] >= result[targetindex + 1] - target) {
        return result[targetindex + 1]
    } else {
        return result[targetindex - 1]
    }
};
// 总之就是在里面进行去重的时候总是报错！！！
// 最后直接没去重，但是也通过了！！