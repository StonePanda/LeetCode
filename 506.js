/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let rankScore = score.slice().sort((a, b) => b - a)
        // 自然降序排序
    let scoreMap = new Map()
    for (let i = 0; i < rankScore.length; i++) {
        if (i == 0) {
            scoreMap.set(rankScore[i], 'Gold Medal')
        } else if (i == 1) {
            scoreMap.set(rankScore[i], 'Silver Medal')
        } else if (i == 2) {
            scoreMap.set(rankScore[i], 'Bronze Medal')
        } else {
            scoreMap.set(rankScore[i], (i + 1).toString())
        }
    }
    let result = []
    for (let i = 0; i < score.length; i++) {
        result.push(scoreMap.get(score[i]))
    }
    return result
};