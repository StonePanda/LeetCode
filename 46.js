// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var permute = function(nums) {
//     let result=[]
//     let path=[]
//     function backtracking(nums,startIndex){
//         if(path.length==nums.length){
//             result.push(path.slice())
//             return
//         }
//         for(let i=0;i<nums.length;i++){
//             // if(path.length==0) path.push(nums[i]) else 
//             if(path.indexOf(nums[i])==-1) path.push(nums[i])
//             else continue
//             backtracking(nums,startIndex+1)
//             path.pop()
//         }
//     }
//     backtracking(nums,0)
//     return result
// };
// 竟然自己做过了，其实写for循环的时候陷入了一种奇怪的思路
// 就是不知道怎么取后面要push进去的数
// 因为这个不再是startIndex后面的数，而是前面的数也要push进去
// 所以for循环，必须一致都是从0到尾的循环
// 另外好像startIndex就毫无作用了
// 猛一没有startIndex确实不习惯

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var permute = function(nums) {
//     let result=[]
//     let path=[]
//     function backtracking(nums){
//         if(path.length==nums.length){
//             result.push(path.slice())
//             return
//         }
//         for(let i=0;i<nums.length;i++){
//             // if(path.length==0) path.push(nums[i]) else 
//             if(path.indexOf(nums[i])==-1) path.push(nums[i])
//             else continue
//             backtracking(nums)
//             path.pop()
//         }
//     }
//     backtracking(nums)
//     return result
// };

// 教程里的方法更省时
// 教程里的思路是一样的，但是用了used数组，如果这一支（纵向，递归遍历）已经used了，那肯定不能再用了
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result=[]
    let path=[]
    let used=Array(nums.length).fill(false)
    function backtracking(nums){
        if(path.length==nums.length){
            result.push(path.slice())
            return
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]==true) continue
            used[i]=true
            path.push(nums[i])
            backtracking(nums)
            path.pop()
            used[i]=false
        }
    }
    backtracking(nums)
    return result
};