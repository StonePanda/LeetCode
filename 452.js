/**
 * @param {number[][]} points
 * @return {number}
 */
//  var findMinArrowShots = function(points) {
//     // 把点按照升序排序
//     points.sort(function(a,b){
//         if(a[0]==b[0]) return a[1]-b[1]
//         return a[0]-b[0]
//     })
//     // 对每一个球，要比较两边的，看哪边的重叠的球多才会选哪个
//     let pointbreak=[]
//     for(let i=0;i<points.length;i++){
//         // 自己肯定是可以被射掉的
//         let rightcount=leftcount=1
//         for(let j=i+1;j<points.length;j++){
//             if(points[j][0]<=points[i][1]) rightcount++
//             else break
//         }
//         for(let j=i-1;j>=0;j--){
//             if(points[j][1]>=points[i][0]) leftcount++
//             else break
//         }
//         // 哪边的多就得排除哪边么？万一其他气球有更多可以同时射掉的？
//         // 所以先不管，先把这个球那边射得多存起来，还要区分方向
//         if(leftcount>rightcount) pointbreak.push(leftcount*-1)
//         else pointbreak.push(rightcount)
//     }
//     // 决定用哪个数来break,不用被break的设置为0，剩下的就是需要几支箭
//     // 在这里不知道怎么选择了
// }; 第一次自己写的时候就在这里卡住了，不知道怎么选择哪个数来先break才能达到最大利益

// 发现自己做算法的时候经常会举一些不符合题目条件的例子，然后导致算法写不出来
// 这次气球问题就是，列的pointbreak数组实际上不可能存在，我却一直根据那个数组设想来写
// 肯定写不出来的
// 哎！烦！


// 看了教程后写的，不知道为啥感觉没有那么难，我假想的数据把自己弄错了
/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    // 把气球按照起始点升序排序，后面就知道为什么不需要管终止点了
    points.sort(function(a,b){
        return a[0]-b[0]
    })
    // 仔细想想气球不存在我包含你，但是你不包含我，气球能被一起射掉
    // 一定是两边都有重叠
    // 所以就是从左边开始遍历
    // points数组不为空，那么至少需要一只箭
    let result=1
    for(let i=1;i<points.length;i++){
        // 两个气球根本没有挨着
        if(points[i][0]>points[i-1][1])
            result++
        else{
            // 假如气球两边都挨着，那么只能选择一遍挨着，这道题选择左边，一是本身result是1，而是我们都是i和i-1比较,这样后面挨不着的箭+1即可
            points[i][1]=Math.min(points[i][1],points[i-1][1])
        }
    }
    return result
};