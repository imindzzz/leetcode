/**
 * https://leetcode.cn/problems/arithmetic-subarrays/
 */
#include <iostream>
#include <vector>
using namespace std;
// #include <bits/stdc++.h>

// leetcode start
class Solution {
 public:
  vector<bool> checkArithmeticSubarrays(vector<int>& nums,
                                        vector<int>& l,
                                        vector<int>& r) {
    vector<bool> res(l.size(), true);

    for (int i = 0; i < l.size(); ++i) {
      int left = l[i];
      int right = r[i];
      // 截取nums数组为新数组并重新排序
      vector<int> new_nums(nums.begin() + left, nums.begin() + right + 1);

      for (int j = 0; j < new_nums.size() - 1; ++j) {
        for (int k = j + 1; k < new_nums.size(); ++k) {
          if (new_nums[j] < new_nums[k]) {
            int temp = new_nums[j];
            new_nums[j] = new_nums[k];
            new_nums[k] = temp;
          }
        }
      }

      // 判断是否等差
      int diff = new_nums[0] - new_nums[1];
      for (int j = 0; j < new_nums.size() - 1; ++j) {
        if (new_nums[j] - new_nums[j + 1] != diff) {
          res[i] = false;
          break;
        }
      }
    }
    return res;
  }
};
// leetcode end

bool test1() {
  Solution sol;
  vector<int> nums = {4, 6, 5, 9, 3, 7};
  vector<int> l = {0, 0, 2};
  vector<int> r = {2, 3, 5};
  vector<bool> answer = {true, false, true};
  vector<bool> result = sol.checkArithmeticSubarrays(nums, l, r);

  // 判断result和answer的每一个元素是否都相等
  for (int i = 0; i < result.size(); ++i) {
    cout << "test1 " << result[i] << endl;
    if (result[i] != answer[i]) {
      return false;
    }
  }
  return true;
}

bool test2() {
  Solution sol;
  vector<int> nums = {-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10};
  vector<int> l = {0, 1, 6, 4, 8, 7};
  vector<int> r = {4, 4, 9, 7, 9, 10};
  vector<bool> answer = {false, true, false, false, true, true};
  vector<bool> result = sol.checkArithmeticSubarrays(nums, l, r);

  // 判断result和answer的每一个元素是否都相等
  for (int i = 0; i < result.size(); ++i) {
    cout << "test2 " << result[i] << endl;
    if (result[i] != answer[i]) {
      return false;
    }
  }
  return true;
}

int main() {
  cout << (test1() ? "True" : "False") << endl;
  cout << (test2() ? "True" : "False") << endl;
  return 0;
}