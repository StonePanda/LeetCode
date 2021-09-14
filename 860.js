/**
 * @param {number[]} bills
 * @return {boolean}
 */
//  var lemonadeChange = function(bills) {
//     let fives=0
//     let tens=0
//     for(let i=0;i<bills.length;i++){
//         if(bills[i]==5) fives++
//         else if(bills[i]==10){
//             if(fives==0) return false
//             else{
//                 fives--
//                 tens++
//             }
//         }
//         else{
//             if(tens==0){
//                 if(fives<3) return false
//                 else fives-=3
//             }
//             else{
//                 if(fives==0) return false
//                 else{
//                     tens--
//                     fives--
//                 }
//             }
//         }
//     }
//     return true
// }; 因为是简单题目，自己写的，比较冗余

// 根据教程写的，其实好像没有使代码简单得多，但是优先找10美元这种想法确实贪心
/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let fives=0
    let tens=0
    for(let i=0;i<bills.length;i++){
        if(bills[i]==5) fives++
        else if(bills[i]==10){
            if(fives==0) return false
            fives--
            tens++
        }
        else{
            // 优先找零10美元，因为5美元更万能
            if(fives>0 && tens>0){
                fives--
                tens--
            }else if(fives>=3){
                fives-=3
            }
            else return false
        }
    }
    return true
};