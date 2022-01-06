// 有点面向用例的编程那个意思了
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (path[0] != '/') {
        path = '/' + path
    }
    //  没有'//'，只有'/'
    while (path.includes('//')) {
        path = path.replace('//', '/')
    }
    // replace函数不改变字符串
    // 最后一个目录名如果存在，不能以'/'结尾
    while (path.endsWith('/')) {
        path = path.slice(0, -1)
    }
    while (path.includes('/./')) {
        path = path.replace('/./', '/')
    }
    let index = 0
    while (path.includes('/../')) {
        index = path.indexOf('/../')
        let last = path.substr(0, index).lastIndexOf('/')
        let tmp = ''
        if (last != -1) {
            tmp = path.slice(0, last)
            path = path.slice(index + 3)
            path = tmp + path
        } else {
            tmp = path.slice(0, index)
            path = path.slice(index + 3)
            path = tmp + path
        }
    }
    // 如果是最后以什么样的结束的话，判断比较准确
    if (path.endsWith('/.')) {
        path = path.slice(0, -2)
    }
    if (path.endsWith('/..')) {
        path = path.slice(0, -3)
            // 而且还要退出上一个文件夹
        path = path.slice(0, path.lastIndexOf('/'))
    }
    // 始终以斜杠'/'开头
    if (path[0] != '/') {
        path = '/' + path
    }
    // 不包含'.'
    return path
};

// 看了官方的题解才想起来用栈


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    while (path.includes('//')) {
        path = path.replace('//', '/')
    }
    while (path.endsWith('/')) {
        path = path.slice(0, -1)
    }
    while (path[0] == '/') {
        path = path.slice(1)
    }
    let array = path.split('/')
    let stack = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '.') {
            continue
        } else if (array[i] == '..') {
            // 这个时候要把最后一个pop出来，但是不能是第一个
            if (stack.length != 0) {
                stack.pop()
            }
        } else {
            stack.push(array[i])
        }
    }
    return '/' + stack.join('/')
};
// 然后自己写了一个用栈的

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 然后看了答案再改进一下自己的
    // while(path.includes('//'))
    // {
    //     path=path.replace('//','/')
    // }
    // 因为这里即便是n个分界线，也会被分开，只是会有''在数组里面而已
    // while(path.endsWith('/'))
    // {
    //     path=path.slice(0,-1)
    // }
    // while(path[0]=='/')
    // {
    //     path=path.slice(1)
    // }
    let array = path.split('/')
    let stack = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '..') {
            // 这个时候要把最后一个pop出来，但是不能是第一个
            if (stack.length != 0) {
                stack.pop()
            }
        } else if (array[i].length != 0 && array[i] != '.') {
            stack.push(array[i])
        }
    }
    return '/' + stack.join('/')
};
// 再看答案后优化的

// 下面是标准题解
var simplifyPath = function(path) {
    const names = path.split("/");
    const stack = [];
    for (const name of names) {
        if (name === "..") {
            if (stack.length) {
                stack.pop();
            }
        } else if (name.length && name !== ".") {
            stack.push(name);

        }
    }

    return "/" + stack.join("/");
};


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 然后看了答案再改进一下自己的
    // while(path.includes('//'))
    // {
    //     path=path.replace('//','/')
    // }
    // 因为这里即便是n个分界线，也会被分开，只是会有''在数组里面而已
    // while(path.endsWith('/'))
    // {
    //     path=path.slice(0,-1)
    // }
    // while(path[0]=='/')
    // {
    //     path=path.slice(1)
    // }
    const array = path.split('/')
    const stack = []
    for (const name of array) {
        if (name == '..') {
            // 这个时候要把最后一个pop出来，但是不能是第一个
            if (stack.length != 0) {
                stack.pop()
            }
        } else if (name.length != 0 && name != '.') {
            stack.push(name)
        }
    }
    return '/' + stack.join('/')
};
// for of和普通i遍历的区别