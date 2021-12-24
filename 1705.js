/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
// var eatenApples = function(apples, days) {
//     // 就是先吃较早腐烂的
//     // 准备一个apples，如果i小于要push进去的弗兰日期，那么就是可以的
//     // 每天最多吃一个苹果，说明也可以不吃
//     let latest = 0
//     for (let i = 0; i < days.length; i++) {
//         latest = Math.max(latest, i + days[i])
//     }
//     let eatApples = new Array(latest).fill(0)
//     for (let i = 0; i < apples.length; i++) {
//         if (apples[i] != 0) {
//             eatApples[i + days[i] - 1] += apples[i]
//         }
//     }
//     console.log(eatApples)
//         // 检验能不能吃那么多
//         // 就是检验eatApples数组，如果不为0，那么sums和i-上一个不为0就只能选择最小的那个
//         // eatApples的方法不对，因为苹果是在那一天产生的也需要知道！
//         // 总感觉之前做过类似的！用map
//     let zeroNums = 0
//     let ans = 0
//     for (let i = 0; i < eatApples.length; i++) {
//         if (eatApples[i] == 0) {
//             zeroNums += 1
//         } else {
//             if (zeroNums < eatApples[i]) {
//                 ans += zeroNums
//                 ans += 1
//                     // 这是不为0那个位置的
//                 zeroNums = 0
//             } else if (zeroNums == eatApples[i]) {
//                 ans += zeroNums
//                 zeroNums = 1
//             } else {
//                 zeroNums = 0
//                 ans += eatApples[i]
//             }
//         }
//     }
//     return ans
// };

// 上面是自己写的方法，但是不对！
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
// var eatenApples = function(apples, days) {
//     // 就是先吃较早腐烂的
//     // 准备一个apples，如果i小于要push进去的弗兰日期，那么就是可以的
//     // 每天最多吃一个苹果，说明也可以不吃
//     // 感觉用贪心算法就能做呢！
//     let latest = 0
//     for (let i = 0; i < days.length; i++) {
//         latest = Math.max(latest, i + days[i])
//     }
//     let eatApples = new Array(latest).fill(0)
//     let ans = 0
//     for (let i = 0; i < apples.length; i++) {
//         if (apples[i] != 0) {
//             // 哎，好烦！！干哦！！
//             // 一有就先吃不对，一有就等到最后吃也不对！
//             for (let j = i + days[i] - 1; j >= i && apples[i] > 0; j--) {
//                 if (eatApples[j] == 0) {
//                     eatApples[j] += 1
//                     ans++
//                     // 吃一个苹果
//                     apples[i]--
//                 }
//             }
//         }
//     }
//     console.log(eatApples)
//     return ans
// };
// 上面还是不对的

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
// var eatenApples = function(apples, days) {
//     // 就是先吃较早腐烂的
//     // 准备一个apples，如果i小于要push进去的弗兰日期，那么就是可以的
//     // 每天最多吃一个苹果，说明也可以不吃
//     // 感觉用贪心算法就能做呢！
//     // 感觉和前不久做的优先队列那道题目很像。
// };
var eatenApples = function(apples, days) {
    const pq = new PriorityQueue(),
        n = apples.length
    let i = 0,
        ans = 0
    for (; i < n; i++) {
        while (pq.size > 0 && pq.peek()[0] <= i)
            pq.poll()
        if (apples[i] > 0)
            pq.offer([i + days[i], apples[i]])
        if (pq.size > 0) {
            ans++
            if (--pq.peek()[1] == 0)
                pq.poll()
        }
    }
    while (pq.size > 0) {
        const cur = pq.poll()
        const d = Math.min(cur[0] - i, cur[1])
        i += d
        ans += d
        while (pq.size > 0 && pq.peek()[0] <= i)
            pq.poll()
    }
    return ans
};


class PriorityQueue {
    constructor(
        compare = (a, b) => a[0] < b[0]
    ) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) { return null }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size &&
                this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0 &&
            this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}

// 作者：himymBen
// 链接：https://leetcode-cn.com/problems/maximum-number-of-eaten-apples/solution/pythonjavajavascriptgo-zui-xiao-dui-tan-3jflb/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 明天搞！不想搞了！