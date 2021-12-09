/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    // 遍历一次board，要获取x的数量，和O的数量，O的数量一定是小于等于X的数量，否则就是不合规
    // 当X的形状成形的时候，O的数量一定是X的数量减一
    // 遍历一遍board，记录下X和O的数量和X的位置
    let Xnum = 0
    let Onum = 0
        // 判断行成型，列成型，对角线成型
    let rowNum = [0, 0, 0]
        // 每一行的X数量
    let colNum = [0, 0, 0]
        // 每一列X的数量
    let diaNum = [0, 0]
        // 两个对角线上的数量
    let OrowNum = [0, 0, 0]
        // 每一行的X数量
    let OcolNum = [0, 0, 0]
        // 每一列X的数量
    let OdiaNum = [0, 0]
        // 两个对角线上的数量
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'X') {
                Xnum += 1
                rowNum[i] += 1
                colNum[j] += 1
                if (i == j && i == 1) {
                    diaNum[0] += 1
                    diaNum[1] += 1
                } else if (i == j) {
                    diaNum[0] += 1
                } else if (Math.abs(i - j) == 2) {
                    diaNum[1] += 1
                }
            } else if (board[i][j] == 'O') {
                Onum += 1
                OrowNum[i] += 1
                OcolNum[j] += 1
                if (i == j && i == 1) {
                    OdiaNum[0] += 1
                    OdiaNum[1] += 1
                } else if (i == j) {
                    OdiaNum[0] += 1
                } else if (Math.abs(i - j) == 2) {
                    OdiaNum[1] += 1
                }
            }
        }
    }
    if (Onum > Xnum) {
        return false
    }
    if (Xnum < 3 && (Onum == Xnum - 1 || Onum == Xnum)) {
        return true
    }
    // Xnum>=3的时候就要判断是否成型了
    // 行，列，对角线，只能有一个成型
    let rowOk = (rowNum.indexOf(3) != -1)
        // 如果为true,表示行成型，否则，行里没有成型的
    let colOk = (colNum.indexOf(3) != -1)
    let diaOk = (diaNum.indexOf(3) != -1)
    let OrowOk = (OrowNum.indexOf(3) != -1)
        // 如果为true,表示行成型，否则，行里没有成型的
    let OcolOk = (OcolNum.indexOf(3) != -1)
    let OdiaOk = (OdiaNum.indexOf(3) != -1)
        // 出现两个赢家，不对！出现一个赢家！对!
    let Xok = ((!rowOk && (colOk || diaOk)) || (!colOk && (rowOk || diaOk)) || (!diaOk && (colOk || rowOk)))
    let Ook = ((!OrowOk && (OcolOk || OdiaOk)) || (!OcolOk && (OrowOk || OdiaOk)) || (!OdiaOk && (OcolOk || OrowOk)))
    if (Xok && Ook) {
        return false
    } else if (Xok && !Ook) {
        // X赢了，O没赢
        if (Onum == Xnum - 1) {
            return true
        }
        return false
    } else if (Ook && !Xok) {
        // O赢了，X没赢
        if (Onum == Xnum) {
            return true
        }
        return false
    } else {
        // 两个都没有赢
        if (Onum == Xnum - 1 || Onum == Xnum) {
            return true
        }
        return false
    }
    // if(!(rowOk||colOk||diaOk))
    // {
    //     // 三个都是false,但有可能是O赢
    //     // 如果O赢的话，X的数目比较等于O的数目
    //     if((!OrowOk&&(OcolOk||OdiaOk))||(!OcolOk&&(OrowOk||OdiaOk))||(!OdiaOk&&(OcolOk||OrowOk)))
    //     {
    //         // O赢了
    //         if(Onum==Xnum)
    //         {
    //             return true
    //         }
    //         return false
    //     }
    //     if( Onum==Xnum-1 || Onum==Xnum)
    //     {
    //         return true
    //     }
    //     return false
    // }
    // // console.log(rowOk,colOk,diaOk)
    // // 可以有两个成型的时候
    // // 这个真是X赢得时候，也有O赢得时候
    // if((!rowOk&&(colOk||diaOk))||(!colOk&&(rowOk||diaOk))||(!diaOk&&(colOk||rowOk)))
    // {
    //     // 成型了
    //     if(Onum==Xnum-1)
    //     {
    //         return true
    //     }
    //     return false
    // }
    // return false
};
// 面向测试的编程哈哈哈