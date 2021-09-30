/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    let result=[]
    const blank=[]
    // 先把所有要填的格子都列出来
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]=='.') blank.push([i,j])
        }
    }
    function backtracking(board,startIndex){
        console.log(startIndex)
        if(startIndex>=blank.length){
            result=board.slice()
            return
        }
        let [row,col]=blank[startIndex]
        for(let i=0;i<board.length;i++){
            if(isvalid(startIndex,i)){
                board[row].splice(col,1,i.toString())
                backtracking(board,startIndex+1)
                board[row].splice(col,1,".")
            }
        }
    }
    function isvalid(startIndex,i){
        let [row,col]=blank[startIndex]
        if(board[row].indexOf(i)!=-1) return false
        for(let k=0;k<board.length;k++){
            if(board[k][col]==i) return false
        }
        if(row<3){
            if(col<3){
                for(let k=0;k<3;k++){
                    for(let j=0;j<3;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else if(col<6){
                for(let k=0;k<3;k++){
                    for(let j=3;j<6;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else{
                for(let k=0;k<3;k++){
                    for(let j=6;j<9;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
        }
        else if(row<6){
            if(col<3){
                for(let k=3;k<6;k++){
                    for(let j=0;j<3;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else if(col<6){
                for(let k=3;k<6;k++){
                    for(let j=3;j<6;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else{
                for(let k=3;k<6;k++){
                    for(let j=6;j<9;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
        }
        else{
            if(col<3){
                for(let k=6;k<9;k++){
                    for(let j=0;j<3;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else if(col<6){
                for(let k=6;k<9;k++){
                    for(let j=3;j<6;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
            else{
                for(let k=6;k<9;k++){
                    for(let j=6;j<9;j++){
                        if(board[k][j]==i) return false
                    }
                }
            }
        }
        return true
    }
    backtracking(board,0)
    console.log(result)
    return result
};
// 第一次自己写的，超出时间限制，不知道结果对不对
// 思路是对的，但是真地非常之复杂

// 看教程后写的
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    function backtracking(board){
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]!='.') continue
                for(let k=1;k<=board.length;k++){
                    if(isValid(i,j,k,board)){
                        board[i][j]=k.toString()
                        if(backtracking(board)) return true
                        // 上面这一行的解释是：如果找到一组，就立刻返回
                        board[i][j]="."
                    }
                }
                return false
            }
        }
        return true
    }
    function isValid(row,col,val,board){
        if(board[row].indexOf(val.toString())!=-1) return false
        for(let i=0;i<board.length;i++){
            if(board[i][col]==val) return false
        }
        let startRow=Number.parseInt(row/3)*3
        let startCol=Number.parseInt(col/3)*3
        for(let i=startRow;i<startRow+3;i++){
            for(let j=startCol;j<startCol+3;j++){
                if(board[i][j]==val) return false
            }
        }
        return true
    }
    backtracking(board)
    return board
};