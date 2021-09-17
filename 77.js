// 这道题自己写出来了，但是在例子26/27的时候显示超出时间限制
// 我自己在浏览器里跑了一下
// 发现是可以跑出来的
// 但是确实是有一些慢
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//  var combine = function(n, k) {
//     let result=[]
//     if(n==k){
//         let pure=[]
//         for(let i=1;i<=n;i++) pure.push(i)
//         result.push(pure)
//         return result
//     }
//     else{
//         result=combine(n-1,k)
//         reslen=result.length
//         for(let i=0;i<reslen;i++){
//             for(let j=0;j<k;j++){
//                 let tmp=result[i].slice()
//                 tmp[j]=n
//                 tmp.sort((a,b)=>a-b)
//                 if(!result.toString().includes(tmp))
//                     result.push(tmp)
//             }
//         }
//         return result
//     }
// };
// 上面是自己的写的,其实递归的思想是对的,但是太慢了
// 我自己的方法是根据result不断地递归
// 但是教程里的递归和for循环的方向和我的不一样,逐渐从[1,2,3,4]先挑1,[2,3,4],在挑2,[3,4]等,从上往下
// 最好是自己跑一遍
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    // 存放结果集合
    let result=[]
    // 存放符合条件的结果
    let path=[]
    function backtracking(n,k,startIndex){
        if(path.length==k){
            result.push(path.slice())
            return
        }
        else{
            for(let i=startIndex;i<=n;i++){
                path.push(i)
                backtracking(n,k,i+1)
                path.pop()
            }
        }
    }
    backtracking(n,k,1)
    return result
};