/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//  var merge = function(intervals) {
//     intervals.sort(function(a,b){
//         if(a[0]==b[0]) return a[1]-b[1]
//         return a[0]-b[0]
//     })
//     let result=[intervals[0]]
//     for(let i=1;i<intervals.length;i++){
//         // 存在重叠情况
//         if(result[result.length-1][1]>=intervals[i][0]){
//             // 把两个变成一样的
//             // 但是result[resut.length-1][0]<=intervals[i][0]
//             // 是由排序决定的
//             // 但是终止点其实并不确定，所以要改变的是终止点
//             result[result.length-1][1]=Math.max(result[result.length-1][1],intervals[i][1])
//         }
//         // 不存在重叠的情况
//         else{
//             result.push(intervals[i])
//         }
//     }
//     // 然后再去看数组操作才发现JS的数组操作也不算太弱，毕竟splice确实是有原地修改数组的功能，他本身的意思就是拼接
//     // 是我误会JS了，像JS道歉
//     return result
// };

// 第一次写就通过了，基本上没什么难度
// 但是刚开始写只是遵循了前面几道题的思路，把有重叠的区间变成一样的区间
// 想着后面再去除重复的元素
// 但是直接一个一个push好像更简单一些
// 然后看教程发现C++数组有返回最后一个元素的函数
// 哼，JS这次是真没有！真地没有错怪他！他确实数组处理能力差一些