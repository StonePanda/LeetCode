/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 题目中要求了时间复杂度是O(n)，那说明只能一个循环
    // 假如先不考虑题目中的复杂度要求
    // 没有思路

};
// 总之就是没思路

// 下面是大佬的解法，官方题解没有js
const firstMissingPositive = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
            nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
        ) {
            const temp = nums[nums[i] - 1]; // 交换
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
};

// 作者： xiao_ben_zhu
// 链接： https: //leetcode-cn.com/problems/first-missing-positive/solution/shou-hui-tu-jie-si-lu-de-xi-zhi-chan-shu-tong-pai-/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。

// 发现自己可能之前做过类似的题目，思路是有一点给相似的
// 但是想的不全面，在第三个例子的时候就不行了


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 题目中要求了时间复杂度是O(n)，那说明只能一个循环
    // 假如先不考虑题目中的复杂度要求
    // 没有思路
    // 看答案中的思路，就是利用nums来承载一些更多的信息
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] >= 1 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            // 假如说答案是n，那也就是说1，n-1都在数组里
            // 那么n-1最大为nums.length，那么n最大为nums.length+1
            // 那就是数组里的数目最大就是1到nums.length
            // 如果是这个范围外的就不管了，我们先把这些范围内的正整数排好序
            // 排序的呢，是index为0，1，2，。。。
            // 然后数字就是1，2，3。。。
            const tmp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = tmp
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
};
// 厉害呀！！多向大佬学习！