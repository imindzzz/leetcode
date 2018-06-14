/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (41.83%)
 * Total Accepted:    360.5K
 * Total Submissions: 861.1K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let re = l1;
    let pre = null;
    while ((l1 != null && l2 != null)) {
        if (l1.val > l2.val) {
            let temp = l2;
            l2 = l2.next;
            if (pre === null) {
                //如果是l1的第一个节点
                temp.next = l1;
                re = temp;
            } else {
                temp.next = l1.next;
                pre.next = temp;
                l1 = temp;
            }
            l1 = temp;
            continue;
        }
        pre = l1;
        l1 = l1.next;
    };
    return re;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
function test(arr) {
    do {
        let val = arr.pop();
    } while (arr.length >= 0)
}
test([1, 2]);