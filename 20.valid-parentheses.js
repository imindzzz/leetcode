/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (34.19%)
 * Total Accepted:    348.8K
 * Total Submissions: 1M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
let KV = {
    "}": "{",
    "]": "[",
    ")": "(",
}
var isValid = function (s) {
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let charReverse = KV[char];
        if (!charReverse) {
            queue.push(char);
        } else {
            if (queue.length === 0) {
                return false;
            }
            let top = queue[queue.length - 1];
            if (charReverse === top) {
                queue.pop();
            } else {
                return false;
            }
        }
    }
    return queue.length === 0;
};
