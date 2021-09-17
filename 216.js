/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
//  var combinationSum3 = function(k, n) {
//     let result=[]
//     let path=[]
//     let sum=0
//     function backtracking(k,n,startIndex){
//         if(sum==n && path.length==k){
//             result.push(path.slice())
//             return
//         }
//         else{
//             for(let i=startIndex;i<=n;i++){
//                 path.push(i)
//                 sum+=i
//                 backtracking(k,n,i+1)
//                 sum-=path.pop()
//             }
//         }
//     }
//     backtracking(k,n,1)
//     return result
// };
// 回溯法真地很难,我真地只能套模板
// 结果竟然在例子4/18的时候就超出时间限制了
// 结果发现是模板确实没错，但是i的范围我搞错了
// 哈哈，难道之后就要硬套模板吗
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    let result=[]
    let path=[]
    let sum=0
    function backtracking(k,n,startIndex){
        if(sum==n && path.length==k){
            result.push(path.slice())
            return
        }
        else{
            for(let i=startIndex;i<=9;i++){
                path.push(i)
                sum+=i
                backtracking(k,n,i+1)
                sum-=path.pop()
            }
        }
    }
    backtracking(k,n,1)
    return result
};