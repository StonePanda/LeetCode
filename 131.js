// 第一次没有认真看题
/**
 * @param {string} s
 * @return {string[][]}
 */
//  var partition = function(s) {
//     function isPalin(str){
//         if(str.length==1) return true
//         else if(str.length%2==0){
//             for(let i=0;i<str.length/2;i++)
//                 if(str[i]!=str[i+str.length/2]) return false
//             return true
//         }
//         else{
//             for(let i=0;i<(str.length-1)/2;i++)
//                 if(str[i]!=str[i+(str.length+1)/2]) return false
//             return true
//         }
//     }
//     let result=[]
//     let tmpstr=''
//     function backtracking(s,startIndex){
//         if(isPalin(tmpstr)){
//             result.push(tmpstr)
//             return
//         }
//         for(let i=startIndex;i<s.length;i++){
//             tmpstr+=s[i]
//             backtracking(s,i+1)
//             tmpstr=tmpstr.substring(0,substring.length-1)   
//         }
//     }
//     backtracking(s,0)
//     return result
// };
// 看成找到是回文串的子串了
// 然后怎么分割，我连横向遍历和纵向遍历的逻辑都写不出来


//  其实脑子有那么一瞬间是对的念头，但是不自信，脑子混混沉沉，今天就先过了吧
/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    function isPalin(s,start,end){
        for(let i=start,j=end;i<j;i++,j--){
            if(s[i]!=s[j]) return false
        }
        return true
    }
    let result=[]
    let path=[]
    function backtracking(s,startIndex){
        if(startIndex>=s.length){
            result.push(path.slice())
            return
        }
        for(let i=1;startIndex+i<=s.length;i++){
            if(isPalin(s,startIndex,startIndex+i-1))
                path.push(s.substring(startIndex,startIndex+i))
            else continue
            backtracking(s,startIndex+i)
            path.pop()
        }
    }
    backtracking(s,0)
    return result
};