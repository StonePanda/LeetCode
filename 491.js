// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var findSubsequences = function(nums) {
//     let result=[]
//     let path=[]
//     function backtracking(nums,startIndex){
//         // if(startIndex>nums.length) return 实际上根本不会走到这里
//         if(path.length>=2){
//             let hasSame=false
//             for(let i=0;i<result.length;i++)
//                 if(result[i].toString()==path.toString()) hasSame=true
//             if(!hasSame) result.push(path.slice())
//         }
//         for(let i=startIndex;i<nums.length;i++){
//             if(path.length==0||path[path.length-1]<=nums[i]) path.push(nums[i])
//             else continue
//             backtracking(nums,i+1)
//             path.pop()
//         }
//     }
//     backtracking(nums,0)
//     return result
// };

// 自己写的时候就知道会超出时间限制，因为这道题不能sort，不知道怎么表示要加入的必须是没有被用过的
// 而且是第五个例子就超时了
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// 改变了方法，不是在最后结果那里进行，而是在path push的时候就注意，然而，碰上下面这个例子还是不行
// 例子41/58
// [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1]

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
//  var findSubsequences = function(nums) {
//     let result=[]
//     let path=[]
//     let same=[]
//     let onlynum=[]
//     for(let i=0;i<nums.length;i++){
//         if(onlynum.indexOf(nums[i])==-1){
//             same.push(false)
//             onlynum.push(nums[i])
//         }
//         else same.push(true)
//     }
//     function backtracking(nums,startIndex){
//         // if(startIndex>nums.length) return 实际上根本不会走到这里
//         if(path.length>=2){
//             result.push(path.slice())
//         }
//         for(let i=startIndex;i<nums.length;i++){
//             if(path.length==0||path[path.length-1]==nums[i]||(path[path.length-1]<nums[i]&&same[i]==false)) path.push(nums[i])
//             else continue
//             backtracking(nums,i+1)
//             path.pop()
//         }
//     }
//     backtracking(nums,0)
//     return result
// };


// 看了教程+自己摸索后写的
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
    let result=[]
    let path=[]
    // let used=Array(nums.length).fill(false) 为什么之前的used不能用，因为这道题数组不能sort，比如对于45767这样的数组，用used有什么用
    // 要记录的是同一层内用过的数字，如果前面有用过这个数字，就不再push
    
    function backtracking(nums,startIndex){
        
        // if(startIndex>nums.length) return 实际上根本不会走到这里
        if(path.length>=2){
            result.push(path.slice())
        }
        let layerused=[]
        for(let i=startIndex;i<nums.length;i++){
            // if((path.length!=0 && path[path.length-1]>nums[i])||layerused.indexOf(nums[i])!=-1) continue
            // 一定要push的情况，path为空push，或者是没有用过的，又符合条件的
            // 一定要跳过的情况，已经用过了，不符合条件的
            // 这道题，我下面这种考虑push的情况
            // 第一次是这么写的 if(path.length==0||(nums[i]>=path[path.length-1] && layerused.indexOf(nums[i])==-1))
            // 在面对[1,1,1]这种情况的时候就会解答错误，因为在path==0的时候，有可能是被pop完了，但是同一层仍有数字已经被用了！
            // 注意path.length==0这种情况！！
            if(layerused.indexOf(nums[i])==-1&&(nums[i]>=path[path.length-1]||path.length==0)) path.push(nums[i])
            else continue
            layerused.push(nums[i])
            backtracking(nums,i+1)
            path.pop()
        }
    }
    backtracking(nums,0)
    return result
};