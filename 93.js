/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    if(s.length>12) return []
    let result=[]
    let path=[]
    function backtracking(s,startIndex){
        if(path.length==4 && startIndex==s.length){
            // 如果path已经有四个了,但是startIndex还是小于长度
            // 理论上应该是刚好等于length的
            result.push(path.toString().replaceAll(',','.'))
            return
        }
        for(let i=1;i<=3 && startIndex+i<=s.length;i++){
            if(s[startIndex]=='0'){
                if(i==1) path.push(s[startIndex])
                else continue
            }
            else if(s.substring(startIndex,startIndex+i)<=255 && s.substring(startIndex,startIndex+i)>0){
                path.push(s.substring(startIndex,startIndex+i))
            }
            else continue
            backtracking(s,startIndex+i)
            path.pop()
        }
    }
    backtracking(s,0)
    return result
};
// 算是自己写出来的啦
// 但是需要注意的是startIndex也得满足一定条件，也就是刚好到最后才能算结果
// 然后就是在s[startIndex]=='0'的时候,我要想把0push进去,下面就不能是+i,前面的处理必须得保持一致
// 然后就是>12还是先判断一下,不让它们进递归,不然容易超时