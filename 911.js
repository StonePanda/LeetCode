/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.persons = persons.slice()
    this.times = times.slice()
    let tickets = []
        // 出现顺序也来整一下？
    let personApp = []
    for (let i = 0; i <= persons.length - 1; i++) {
        let tmp = personApp.indexOf(this.persons[i])
        if (tmp == -1) {
            personApp.unshift(this.persons[i])
            tickets.unshift(1)
        } else {
            personApp.splice(tmp, 1)
            personApp.unshift(this.persons[i])
            let newti = tickets[tmp] + 1
            tickets.splice(tmp, 1)
            tickets.unshift(newti)
        }
    }
    // 找到tickets里的最大值
    // 第一个最大值，也就是出现的最后的那个
    let max = tickets[0]
    let result = personApp[0]
    for (let i = 0; i < tickets.length; i++) {
        if (max < tickets[i]) {
            max = tickets[i]
            result = personApp[i]
        }
    }
    this.maxOut = result
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    if (t >= this.times[this.times.length - 1]) {
        return this.maxOut
    }
    // 在时刻t的时候，谁的票更多
    let index = 0
    for (let i = 0; i < this.times.length; i++) {
        if (i < this.times.length - 1) {
            if (t > this.times[i] && t < this.times[i + 1]) {
                index = i
                break
            }
            if (t == this.times[i]) {
                index = i
                break
            }
        } else if (t >= this.times[i]) {
            index = i
            break
        }
    }
    let tickets = []
        // 出现顺序也来整一下？
    let personApp = []
    for (let i = 0; i <= index; i++) {
        let tmp = personApp.indexOf(this.persons[i])
        if (tmp == -1) {
            personApp.unshift(this.persons[i])
            tickets.unshift(1)
        } else {
            personApp.splice(tmp, 1)
            personApp.unshift(this.persons[i])
            let newti = tickets[tmp] + 1
            tickets.splice(tmp, 1)
            tickets.unshift(newti)
        }
    }
    // 找到tickets里的最大值
    // 第一个最大值，也就是出现的最后的那个
    let max = tickets[0]
    let result = personApp[0]
    for (let i = 0; i < tickets.length; i++) {
        if (max < tickets[i]) {
            max = tickets[i]
            result = personApp[i]
        }
    }
    return result
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

// 自己做的时候超时了！！

// 下面是官方题解
var TopVotedCandidate = function(persons, times) {
    this.tops = [];
    this.voteCounts = new Map();
    this.voteCounts.set(-1, -1);
    this.times = times;
    let top = -1;
    for (let i = 0; i < persons.length; ++i) {
        const p = persons[i];
        if (!this.voteCounts.has(p)) {
            this.voteCounts.set(p, 0);
        } else {
            this.voteCounts.set(p, this.voteCounts.get(p) + 1);
        }
        if (this.voteCounts.get(p) >= this.voteCounts.get(top)) {
            top = p;
        }
        this.tops.push(top);
    }
};

TopVotedCandidate.prototype.q = function(t) {
    let l = 0,
        r = this.times.length - 1;
    // 找到满足 times[l] <= t 的最大的 l
    while (l < r) {
        const m = l + Math.floor((r - l + 1) / 2);
        if (this.times[m] <= t) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    return this.tops[l];
};

// 下面是看了题解后自己写的
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.times = times.slice()
        // 弄晕拉！
        // 计算一下persons出现的时候各个位置的tops就可以了
    this.tops = []
    let voteMap = new Map()
    let top = persons[0]
    for (let i = 0; i < persons.length; i++) {
        let p = persons[i]
        voteMap.set(p, (voteMap.get(p) || 0) + 1)
        if (voteMap.get(p) >= voteMap.get(top)) {
            top = p
        }
        this.tops.push(top)
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let last = this.times.length - 1
    if (t > this.times[last]) {
        return this.tops[last]
    }
    for (let i = 0; i <= last; i++) {
        if (this.times[i] == t) {
            return this.tops[i]
        }
        if (this.times[i] > t) {
            if (i == 0) {
                return this.tops[0]
            }
            return this.tops[i - 1]
        }
    }
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */