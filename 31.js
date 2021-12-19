function nextPermutation(nums) {
    let i = nums.length - 2; // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
        i--;
    }
    if (i >= 0) { // 这个数在数组中存在，从它身后挑一个数，和它换
        let j = nums.length - 1; // 从最后一项，向左遍历
        while (j >= 0 && nums[j] <= nums[i]) { // 寻找第一个大于 nums[i] 的数
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
    }
    // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) { // i 右边的数进行翻转，使得变大的幅度小一些
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
}
// 这个不是官方题解！
// 官方题解写的好难懂，而且没有js，这个是别人的题解

// 下面是我做错的
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var nextPermutation = function(nums) {
//     // 大概是把最后一个升序的变成降序的？
//     // 如果都是降序，那就全部变成升序
//     if(nums.length==1)
//     {
//         return nums
//     }
//     let tmp=-1
//     // 根据题目里范围来的
//     for(let i=nums.length-1;i>0;i--)
//     {
//         if(nums[i]>nums[i-1])
//         {
//             tmp=nums[i-1]
//             nums[i-1]=nums[i]
//             nums[i]=tmp
//             break
//         }
//     }
//     if(tmp==-1)
//     {
//         // 说明全是降序
//         nums.sort((a,b)=>a-b)
//         // 按照升序排一遍
//     }
//     return nums
// };
// 在例子154/265的时候就出问题了
// 输入[1,3,2]应该输出[2,1,3],但是我输出了[3,1,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        console.log(i)
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
        // js里的交换确实可以这样！！
        // 就不用三个语句了
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {

        [nums[l], nums[r]] = [nums[r], nums[l]]
        console.log(nums)
        l++
        r--
    }
    // 反而更不懂了！呵呵！
};

// 可以看下面的接替思路
// 初始待交换位置为-1。倒序找第一个后 > 前位置，前为待交换位置
// 倒序找第一个> 待交换位置的位置，与待交换位置交换
// 从待交换位置 + 1和数组尾部，向中间，双指针交换

// 作者：mantoufan
// 链接：https://leetcode-cn.com/problems/next-permutation/solution/shuang-zhi-zhen-7xing-dai-ma-chao-100-by-mantoufan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 但是不知道为什么要这样！