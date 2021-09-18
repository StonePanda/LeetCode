/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    let digittoChar=['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let result=[]
    let path=''
    function backtracking(digits,digitIndex){
        if(digitIndex==digits.length){
            result.push(path)
            return
        }
        else{
            for(let i=0;i<digittoChar[Number(digits[digitIndex])].length;i++){
                path+=digittoChar[Number(digits[digitIndex])][i]
                backtracking(digits,digitIndex+1)
                path=path.slice(0,-1)
            }
        }
    }
    if(digits.length==0) return result
    backtracking(digits,0)
    return result
};

// 算是复习一遍回溯算法，已经会写回溯算法的横向遍历和纵向遍历的图了
// 也搞清楚了回溯算法的三个步骤，1.确定回溯函数参数，2.确定终止条件，3.确定for循环的逻辑
// 但是还是要多练，这个是回溯函数的参数我自己弄错了，然后终止条件是不是应该和回溯参数相关呢
// 终止条件也写错了，看看后续接着练习吧