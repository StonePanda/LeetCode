/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    // 不能调整顺序！！
    // 因为答案里的判断是根据原始数组的位置判断的！
    // 先把nums进行排序
    let oriNums = nums.slice()
    nums.sort((a, b) => a - b)
        // 自然升序排序
        // console.log(nums)
    let minVal = nums[0] + nums[1] + nums[2]
    let ans = 0
    for (let i = 3; i < oriNums.length; i++) {
        if (oriNums[i] < minVal) {
            continue
        } else {
            for (let j = 0; j < i; j++) {
                for (let k = j + 1; k < i; k++) {
                    for (let l = k + 1; l < i; l++) {
                        if (oriNums[j] + oriNums[k] + oriNums[l] == oriNums[i]) {
                            // console.log(nums[j],nums[k],nums[l],nums[i])
                            // console.log(j,k,l,i)
                            ans++
                        }
                    }
                }
            }
        }
    }
    return ans
};