/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize != 0) {
        return false
    }
    hand.sort((a, b) => a - b)
        // 自然升序排序
    let map = new Map()
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1)
    }
    let keys = Array.from(map.keys())
    while (keys.length != 0) {
        let start = keys[0]
        let qua = map.get(start)
        for (let i = 0; i < groupSize; i++) {
            let qua1 = map.get(start + i)
            if (qua1 == undefined || qua1 - qua < 0) {
                return false
            }
            map.set(start + i, qua1 - qua)
        }
        for (let [key, value] of map) {
            if (value == 0) {
                map.delete(key)
            }
        }
        keys = Array.from(map.keys())
    }
    return true
};