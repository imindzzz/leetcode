/**
 * https://leetcode.cn/problems/two-sum/
 */
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> temp = {};
    for (int i = 0; i < nums.size(); i++) {
      for (int j = i + 1; j < nums.size(); j++) {
        cout << nums[i] << nums[j] << target << '\n';
        if (nums[i] + nums[j] == target) {
          temp.push_back(i);
          temp.push_back(j);
          // cout << i;
          break;
        }
      }
    }
    cout << "中文";
    return temp;
  }
};

int main() {
  Solution sol;
  vector<int> nums = {2, 7, 11, 15};
  sol.twoSum(nums, 9);
}
