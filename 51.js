/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let result=[]
    let path=[]
    function backtracking(n){
        if(path.length==n){
            result.push(path.slice())
            return
        }
        for(let i=0;i<n;i++){
            if(path.indexOf(i)!=-1) continue
            let slash=false
            for(let j=0;j<path.length;j++){
                if(Math.abs(i-path[j])==Math.abs(path.length-j))
                    slash=true
            }
            if(slash) continue
            path.push(i)
            backtracking(n)
            path.pop()
        }
    }
    backtracking(n)
    let tmp=''
    let endpath=[]
    let endresult=[]
    for(let i=0;i<result.length;i++){
        endpath=[]
        for(let j=0;j<n;j++){
            tmp=''
            for(let k=0;k<n;k++){
                if(k==result[i][j]) tmp+="Q"
                else tmp+="."
            }
            endpath.push(tmp)
        }
        endresult.push(endpath.slice())
    }
    return endresult
};
// n皇后问题，第一遍自己已经通过了，但是执行用时很长，毕竟真地用了好多个循环