/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (24.79%)
 * Total Accepted:    504.9K
 * Total Submissions: 2M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * 
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the
 * answer must be a substring, "pwke" is a subsequence and not a substring.
 */
/**
 * 滑动窗口
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }
    let max = 1;
    let left = 0, right = 1;
    while (right < s.length) {
        let char = s[right];
        //判断是否有重复
        let flag = -1;
        for (let i = left; i < right; i++) {
            if (s[i] === char) {
                flag = i;
                break;
            }
        }
        //找到重复 left指针移动到重复的位置后面
        if (flag != -1) {
            left = flag + 1;
        } else {
            max = Math.max(max, right - left + 1);
        }
        right++;
    }

    return max;
};
// lengthOfLongestSubstring("abcabcbb");
