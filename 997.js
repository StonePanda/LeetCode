/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length == 0) {
        if (n == 1) {
            return n
        }
        return -1
    }
    let civilian = []
    let judge = []
    for (let i = 0; i < trust.length; i++) {
        if (civilian.indexOf(trust[i][0]) == -1) {
            civilian.push(trust[i][0])
        }
        if (judge.indexOf(trust[i][1]) == -1) {

            judge.push(trust[i][1])
        }
    }
    let result = []
    if (judge.length == 0) {
        return -1
    }
    for (let i = 0; i < judge.length; i++) {
        // 小镇的法官不相信任何人
        if (civilian.indexOf(judge[i]) != -1) {
            continue
        }
        result.push(judge[i])
    }
    if (result.length != 1) {
        return -1
    }
    // 每个人都要新人法官要怎么判断？
    // 每个人都信任法官也要判断一下，那就1到n出了法官之外，其他的在trust中都可以找到
    // 二维数组indexOf一维数组是不可以的
    civilian = []
    for (let i = 0; i < trust.length; i++) {
        if (trust[i][1] == result[0]) {
            if (civilian.indexOf(trust[i][0]) == -1) {
                civilian.push(trust[i][0])
            }
        }
    }
    if (civilian.length != n - 1) {
        return -1
    }
    return result[0]
};