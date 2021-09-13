/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//  var canCompleteCircuit = function(gas, cost) {
//     let sumgas=0
//     for(let i=0;i<gas.length;i++){
//         gas[i]-=cost[i]
//         sumgas+=gas[i]
//     }
//     if(sumgas<0) return -1
//     for(let i=0;i<gas.length;i++){
//         if(gas[i]>=0){
//             sumgas=0
//             startpoi=true
//             for(let j=i;j<gas.length;j++){
//                 sumgas+=gas[j]
//                 if(sumgas<0){
//                     startpoi=false
//                     break
//                 }
//             }
//             if(startpoi==true){
//                 for(let j=0;j<i;j++){
//                     sumgas+=gas[j]
//                     if(sumgas<0){
//                         startpoi=false
//                         break
//                     }
//                 }
//             }
//             if(startpoi==true) return i
//         }
//     }
// }; 竟然自己做通过了一道中等困难题目，看来九个小时睡眠确实很有效
//自己的思路就是，先把gas变成gas-cost，然后看那些>=0的点，如果它后面相加没有小于0的时候，再往前面相加也没有小于0的时候，那就是畅通无阻，这就是起点

// 看了题解后的思路
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let start=curSum=totalSum=0
    for(let i=0;i<gas.length;i++){
        curSum+=gas[i]-cost[i]
        totalSum+=gas[i]-cost[i]
        if(curSum<0){ //如果现在总和已经小于0了，那么前面的一定都不能做起点，从i+1开始重新找起点
            start=i+1
            curSum=0 //如果后面还有小于0的，那么会一直更新，知道最后一个，当然还是会判断无法返回的情况，但是通过舍弃前面绝不可能是起点的点这个思路绝对是对的
        }
    }
    if(totalSum<0) return -1
    return start
};