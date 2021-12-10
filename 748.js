/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    // 满足要求的最短的，首先是licensePlate可以做全部转小写
    licensePlate = licensePlate.toLowerCase()
    let plateMap = new Map()
        // 加个优化
    let plateLen = 0
    for (let i = 0; i < licensePlate.length; i++) {
        if (licensePlate[i] >= 'a' && licensePlate <= 'z') {
            plateLen++
            plateMap.set(licensePlate[i], (plateMap.get(licensePlate[i]) || 0) + 1)
        }
    }
    let result = ''
    let resultlen = Number.MAX_SAFE_INTEGER
    words.sort(function(a, b) {
        return a.length - b.length
    })
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < plateLen) {
            continue
        }
        let comple = true
        for (let [key, value] of plateMap) {
            let pos = words[i].indexOf(key)
            let count = 0
            while (pos != -1) {
                count++
                pos = words[i].indexOf(key, pos + 1)
            }
            if (count < value) {
                comple = false
                break
            }
        }
        if (comple) {
            if (resultlen > words[i].length) {
                resultlen = words[i].length
                result = words[i]
            }
        }
    }
    return result
};