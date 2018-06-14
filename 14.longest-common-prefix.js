/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.70%)
 * Total Accepted:    285.3K
 * Total Submissions: 899.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let re = "";
    if (strs.length === 0) {
        return re;
    }
    let maxI = Math.min(...strs.map(x => x.length));
    for (let i = 0; i < maxI; i++) {
        let flag = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            re += strs[0][i];
        } else {
            break;
        }
    }
    return re;
};
