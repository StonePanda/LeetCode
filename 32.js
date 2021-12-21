const longestValidParentheses = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == '(') { // 左括号的索引，入栈
            stack.push(i);
        } else { // 遍历到右括号
            stack.pop(); // 栈顶的左括号被匹配，出栈
            if (stack.length) { // 栈未空
                const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
                maxLen = Math.max(maxLen, curMaxLen); // 挑战最大值
            } else { // 栈空了
                stack.push(i); // 入栈充当参照
            }
        }
    }
    return maxLen;
};

//   上面是传说中的那位笨猪爆破组大佬写的
// 其实她的题解里面还有图示，是比较容易看懂的

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 懒得搞了，直接看题解吧！
    // 总之最近的态度就是很不端正，各种想要逃避！/(ㄒoㄒ)/~~
    let maxlen = 0
    const stack = []
    stack.push(-1)
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c == '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length) {
                // 栈未空
                const curMaxLen = i - stack[stack.length - 1]
                maxlen = Math.max(maxlen, curMaxLen)
            } else {
                stack.push(i)
            }
        }
    }
    return maxlen
};
// 敷衍完了！下班！