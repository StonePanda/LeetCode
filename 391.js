/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    // 矩形之间有交叉
    // 怎么判断矩形是否构成了一个大的矩形
    // 没什么思路！

    // 做的时候就是完全没有思路，然后看了题解
    // 矩形被精确覆盖的判断：四个角的顶点只能出现一次，其他的顶点只能出现偶数次，最后的面积等于所有矩形的面积之和
    // 而且其他顶点出现的次数最多只有四次，也就是出现两次或者四次
    // 所以我们要记录顶点出现的次数

    // 但是这一道题必须用map表达键值对，因为我不想改变数组类型为字符串
    // 如果用object，它的键必须是字符串类型的
    // 然后发现map的键也不能是数组类型，所以不能用points做键
    // mdn上有三条可以帮你决定选择用map还是object的建议：
    // 1.如果键在运行时才知道，或者所有的键类型相同，所有的值类型相同，用map
    // 2.如果需要将原始值存储为键，则使用map，因为object将每个键视为字符串，不管它时数组、boolean值还是其他
    // 3.如果需要对个别元素进行操作，使用object
    // 综上所述，这道题我还是用map吧!
    // 最后的矩形，可以用最小x、y 最大x、y来确定
    let points = new Map()
    let areas = 0
    let [minx, miny, maxx, maxy] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    for (let i = 0; i < rectangles.length; i++) {
        let [a1, a2, a3, a4] = rectangles[i]
        if (a1 < minx) {
            minx = a1
        }
        if (a3 > maxx) {
            maxx = a3
        }
        if (a2 < miny) {
            miny = a2
        }
        if (a4 > maxy) {
            maxy = a4
        }
        areas += (a3 - a1) * (a4 - a2)
        points.set([a1, a2].toString(), (points.get([a1, a2].toString()) || 0) + 1)
        points.set([a3, a4].toString(), (points.get([a3, a4].toString()) || 0) + 1)
        points.set([a3, a2].toString(), (points.get([a3, a2].toString()) || 0) + 1)
        points.set([a1, a4].toString(), (points.get([a1, a4].toString()) || 0) + 1)
            // 这里 undefined||0 为0，任何一个非0值||0都是非0值本身
    }
    // 将map按照值顺序排序
    if ((maxx - minx) * (maxy - miny) != areas) {
        return false
    }
    // console.log(minx,miny,maxx,maxy)
    let bigpoints = [
            [minx, miny].toString(), [minx, maxy].toString(), [maxx, miny].toString(), [maxx, maxy].toString()
        ]
        // console.log(bigpoints)
    for (let [key, value] of points) {
        if (value == 1) {
            if (bigpoints.indexOf(key) == -1) {
                return false
            } else {
                bigpoints.splice(bigpoints.indexOf(key), 1)
            }
        } else if (value != 2 && value != 4) {
            return false
        }
    }
    if (bigpoints.length != 0) {
        return false
    }
    return true
};