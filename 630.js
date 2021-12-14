/**
 * @param {number[][]} courses
 * @return {number}
 */
// 大佬的解题思路如下：
// 按结束时间排序，可以保证我们优先考虑加入先结束的课程。
// 在课程塞满的时候，用当前的(如果耗时更短)替换耗时最长的那一个(所以使用优先队列维护时长)，
// 这样做的意义在于我们用更少的时间完成了相同数量的课程，可以保证后面加入更多课程且不可能比原来的方案的课程少。

var scheduleCourse = function(courses) {
    courses.sort((a, b) => (a[1] - b[1]))
    const pq = new PriorityQueue()
    let t = 0
    for (const course of courses) {
        if (t + course[0] > course[1] && pq.size > 0 && pq.peek() > course[0])
            t -= pq.poll()
        if (t + course[0] <= course[1]) {
            t += course[0]
            pq.offer(course[0])
        }
    }
    return pq.size
};

class PriorityQueue {
    constructor(
        compare = (a, b) => a > b
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
// 上面是一个大佬的题解



// 其实没懂！！
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    // 基本上是照着题解打的，但是要自己搞清楚
    // 先看优先队列是什么
    // 优先队列是计算机科学中的一类抽象数据类型。优先队列中的每个元素都有各自的优先级，优先级最高的元素最先得到服务；优先级相同的元素按照其在优先队列中的顺序得到服务。优先队列往往用堆来实现。

    // 感觉可以用回溯法做
    // 但是又发现顺序不是一定的
    // 算了困难题直接看题解，不跟自己过不去，/(ㄒoㄒ)/~~
    courses.sort((a, b) => (a[1] - b[1]))
        // 按照结束时间排序
    const pq = new PriorityQueue()
    let t = 0
    for (const course of courses) {
        if (t + course[0] > course[1] && pq.size > 0 && pq.peek() > course[0]) {
            t -= pq.poll()
        }
        if (t + course[0] <= course[1]) {
            t += course[0]
            pq.offer(course[0])
        }
    }
    return pq.size
};


// 这个是基于二叉堆实现的优先队列
class PriorityQueue {
    constructor(compare = (a, b) => a > b) {
        this.data = []
        this.size = 0
        this.compare = compare
            // 这里这个compare使用了默认形参
            // 可以自己对比一下compare这个函数里的a>b和a-b的区别
            // 自己写的时候不知道咋回事儿就联想到了sort函数
            // 然后就弄混了
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
            // 这里先传size过去,然后再自增
            // 如使用后置（Postfix）自增，操作符在操作数后（例如  x++）， 操作数将在自增前返回。

        // 如使用前置（Prefix）自增，操作符在操作数前（例如 ++x）， 操作数将先自增后返回。
    }

    poll() {
        // poll 轮询
        if (this.size === 0) {
            return null
        }
        this._swap(0, --this.size)
            // 表示私有函数或者是私有变量
            // 加下划线是程序员约定俗成的，js官方并没有这样的定义
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
            // 左移表示index*Math.pow(2,1)
            // 左移几位就是×2的几次方
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