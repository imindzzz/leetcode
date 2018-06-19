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
    let st = "$" + s.split("").join("#");
    let Len = [0];
    let mx = 0, ans = 0, po = 0;//mx即为当前计算回文串最右边字符的最大值
    for (let i = 1; i <= st.length; i++) {
        if (mx > i) {
            Len[i] = Math.min(mx - i, Len[2 * po - i]);//在Len[j]和mx-i中取个小
        } else {
            Len[i] = 1;//如果i>=mx，要从头开始匹配
        }
        while (st[i - Len[i]] == st[i + Len[i]]) {
            Len[i]++;
        }
        if (Len[i] + i > mx) {//若新计算的回文串右端点位置大于mx，要更新po和mx的值
            mx = Len[i] + i;
            po = i;
        }
        // ans = Math.max(ans, Len[i]);
        if (Len[ans] < Len[i]) {
            ans = i;
        }
    }
    // console.log(st.split(""));
    // console.log(Len);
    let re = st.substr(ans - Len[ans], ans + Len[ans]);
    re = re.match(/[a-z]/ig).join("");
    return re;//返回Len[i]中的最大值-1即为原串的最长回文子串额长度 
};