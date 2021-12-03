/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  var largestSumAfterKNegations = function(nums, k) {
//     nums.sort((a,b)=>a-b) //升序排列
//     let sum=0
//     for(let i=0;i<nums.length;i++){
//         if(k>0){
//             if(nums[i]<0){
//                 nums[i]*=-1
//                 k--
//             }
//             else if(nums[i]==0){
//                 nums[i]*=-1
//                 k=0
//             }
//             else{ //循环到nums[i]>0 但是k还是大于0
//                 if(k%2==0){
//                     k=0
//                 }
//                 else{
//                     k%=2
//                     break
//                 }
//             }

//         }
//     }
//     nums.sort((a,b)=>a-b)
//     for(let i=0;i<nums.length;i++){
//         sum+=nums[i]
//     }
//     if(k==1) return sum-nums[0]*2
//     return sum
// }; 这道题比较简单，但是我把代码写的有点冗余，没有想到把数组按绝对值排序

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a)) //按绝对值降序排列
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (k > 0 && nums[i] < 0) {
            nums[i] *= -1 //最大的负值变正值
            k-- //这个写的时候竟然会忘！！
        }
        sum += nums[i]
    }
    //如果k还大于0，那么肯定没有负数了，选最末尾的值改变为k%2次符号就行
    if (k % 2 == 1) return sum - nums[nums.length - 1] * 2
    return sum
};
// git commit的时候 message写错了，正在尝试补救
// 什么鬼，git commit --amend根本不行

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // 如果可以把负值变成正值，那就变成正值
    // 然后多余的就是变到0上面或者绝对值最小的一个值上面
    nums.sort((a, b) => a - b)
        // 自然升序
    let kj = false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i]
            k--
        } else if (nums[i] == 0) {
            k = 0
        } else {
            // nums[i]>0的时候，如果k还不为0
            if (k % 2 == 1) {
                kj = true
            }
        }
        if (k == 0) {
            break
        }
    }
    nums.sort((a, b) => a - b)
    if (k % 2 == 1) {
        kj = true
    }
    if (kj) {
        nums[0] = -nums[0]
    }
    // console.log(nums)
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    return result
};
// 自己又做了一遍，还是原来的好！