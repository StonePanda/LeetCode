// 确实是删的不对
// 自己做的思路是错的
/**
 * @param {number[][]} intervals
 * @return {number}
 */
//  var eraseOverlapIntervals = function(intervals) {
//     // 将线段按照先起点再终点的方式升序排列
//     intervals.sort(function(a,b){
//         if(a[0]==b[0]) return a[1]-b[1]
//         return a[0]-b[0]
//     })
//     for(let i=0;i<intervals.length;i++){
//         console.log(intervals[i])
//     }
//     console.log('输出完了')
//     let count=0
//     let i=0
//     while(i<intervals.length-1){
//         // 存在重叠情况
//         if(intervals[i][1]>intervals[i+1][0]){
//             count++
//             // 删除较长的那个元素
//             if((intervals[i][1]-intervals[i][0])>intervals[i+1][1]-intervals[i+1][0]){
//                 console.log(intervals[i])
//                 intervals.splice(i,1)
//             } 
//             else{
//                 console.log(intervals[i+1])
//                 intervals.splice(i+1,1)
//             } 
//         }
//         else{
//             // 不存在重叠情况，i往前移
//             i++
//         }
//     }
//     return count
// };
// 上面是自己写的代码，但是思路是错误的
// 比如例子[58,95][66,98][82,97][95,99]
// 这个时候按我的方法会删除前面三个，但实际上是删除中间两个就可以了
// 再根据上面的例子又加了一个倒序的检查最长删除，然后和前面的取最小
// 发现还是不行
// 那肯定就是我这个思路有问题
/**
 * @param {number[][]} intervals
 * @return {number}
 */
//  var eraseOverlapIntervals = function(intervals) {
//     // 将线段按照先起点再终点的方式升序排列
//     intervals.sort(function(a,b){
//         if(a[0]==b[0]) return a[1]-b[1]
//         return a[0]-b[0]
//     })
//     let count=0
//     let i=0
//     let hintervals=intervals.slice()
//     while(i<intervals.length-1){
//         // 存在重叠情况
//         if(intervals[i][1]>intervals[i+1][0]){
//             count++
//             // 删除较长的那个元素
//             if((intervals[i][1]-intervals[i][0])>intervals[i+1][1]-intervals[i+1][0]){
//                 intervals.splice(i,1)
//             } 
//             else{
//                 intervals.splice(i+1,1)
//             } 
//         }
//         else{
//             // 不存在重叠情况，i往前移
//             i++
//         }
//     }
//     // 还有一种情况，从后面往前面遍历，选择最少的那个？
//     let hcount=0
//     let hi=hintervals.length-1
//     while(hi>0){
//         // 存在重叠情况
//         console.log(hi)
//         console.log(hintervals)
//         if(hintervals[hi][0]<hintervals[hi-1][1]){
//             hcount++
//             // 删除较长的那个元素
//             if((hintervals[hi][1]-hintervals[hi][0])>hintervals[hi-1][1]-hintervals[hi-1][0]){
//                 hintervals.splice(hi,1)
//                 hi--
//             } 
//             else{
//                 hintervals.splice(hi-1,1)
//                 hi--
//             } 
//         }
//         else{
//             // 不存在重叠情况，i往前移
//             hi--
//         }
//     }
//     return Math.min(count,hcount)
// };

// 上面的代码在输入是：
// [[-25322,-4602],[-35630,-28832],[-33802,29009],[13393,24550],[-10655,16361],[-2835,10053],[-2290,17156],[1236,14847],[-45022,-1296],[-34574,-1993],[-14129,15626],[3010,14502],[42403,45946],[-22117,13380],[7337,33635],[-38153,27794],[47640,49108],[40578,46264],[-38497,-13790],[-7530,4977],[-29009,43543],[-49069,32526],[21409,43622],[-28569,16493],[-28301,34058]]
// 的时候报错了

// 认输，看教程
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    // 做的时候就感觉和前面的射气球很像了
    // 但是区别是射气球是最少用几个箭，其实弓箭数量不就是非交叉区间的数量
    // 去掉的都是交叉区间，也就是总数-弓箭数
    // 还有就是这道题的重叠不包含边界重叠
    // 按照右边界升序排序
    // 按照右边界排序的话，就得从左往右排序，将第一个右边界找出来
    // 把所有包含它的线段右边界都变成它，然后找下一个右边界，知道找完整个数组
    intervals.sort(function(a,b){
        return a[1]-b[1]
    })
    let count=0
    for(let i=0;i<intervals.length-1;i++){
        // 有重叠情况
        if(intervals[i][1]>intervals[i+1][0]){
            count++
            // 统一右边界
            intervals[i+1][1]=intervals[i][1]
        }
    }
    return count
};