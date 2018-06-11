/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.91%)
 * Total Accepted:    257.4K
 * Total Submissions: 759.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fitstp = head, slowp = head;
    //快指针先移动n个节点
    for (let i = 0; i < n; i++) {
        fitstp = fitstp.next;
    }
    //如果快指针直接移动到了尾部，说明n是节点长度，删掉head
    if (!fitstp) {
        return head.next;
    }
    //快慢指针同时移动
    while (!!fitstp.next) {
        fitstp = fitstp.next;
        slowp = slowp.next;
    }
    slowp.next = slowp.next.next;
    return head;
};
