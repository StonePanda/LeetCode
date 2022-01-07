/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 这道题目也是二分查找的一个变种
    // https://leetcode-cn.com/problems/search-a-2d-matrix/solution/yi-wen-dai-ni-gao-ding-duo-ge-er-fen-cha-2hl9/
    // nums已经知道是升序排序的了
    // 那么看到这个熟悉的ologn，就还是用二分法
    let start = 0
    let end = nums.length - 1
    let mid = start + ((end - start) >> 1)
    let starti = -1
    let endi = -1
        // 先确定一个再确定一个
    while (start <= end) {
        // 这个条件里的等于永远都不会变
        mid = start + ((end - start) >> 1)
            // 这个mid的计算方式肯定也不会变
            // if(nums[mid]==target)
            // {
            //     // 那么第一个出现的位置应该就是在start到mid之间
            //     starti=mid<starti?mid:starti
            // }
        if (target <= nums[mid]) {
            // 这里的条件只需要和mid对比！
            end = mid - 1
        } else if (target > nums[mid]) {
            start = mid + 1
        }
    }
    starti = start
    start = 0
    end = nums.length - 1
    mid = start + ((end - start) >> 1)
    while (start <= end) {
        mid = start + ((end - start) >> 1)
        if (target < nums[mid]) {
            end = mid - 1
        } else if (target >= nums[mid]) {
            start = mid + 1
        }
    }
    endi = end
    if (endi > starti || (endi == starti && starti != -1)) {
        return [starti, endi]
    }
    return [-1, -1]
};