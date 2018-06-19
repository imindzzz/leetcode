/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.46%)
 * Total Accepted:    329.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxObj = { max: -Infinity, i: NaN, j: NaN }
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            if (isPalindrome(s, i, j)) {
                if (maxObj.max < (j - i + 1)) {
                    maxObj = {
                        max: (j - i + 1),
                        i, j
                    }
                }
            }
        }
    }
    return s.substr(maxObj.i, maxObj.max);
};
var isPalindrome = function (s, i, j) {
    while (i < j) {
        if (s[i] != s[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
}
