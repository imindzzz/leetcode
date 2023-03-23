/**
 * https://leetcode.cn/problems/best-poker-hand/
 */
#include <iostream>
#include <vector>
using namespace std;

// leetcode start
class Solution {
 public:
  bool isFlush(vector<char>& suits) {
    for (int i = 0; i < suits.size(); i++) {
      if (suits[i] != suits[0]) {
        return false;
      }
    }
    return true;
  }
  /**
   * 最大相同牌的数量
   */
  int getMaxPairSize(vector<int>& ranks) {
    int max = 1;

    for (int i = 0; i < ranks.size(); i++) {
      int innerMax = 1;
      for (int j = i + 1; j < ranks.size(); j++) {
        if (ranks.at(i) == ranks.at(j)) {
          innerMax += 1;
        }
      }
      if (innerMax > max) {
        max = innerMax;
      }
    }
    return max;
  }
  string bestHand(vector<int>& ranks, vector<char>& suits) {
    // cout << ranks << endl;  // leetcode ignore
    // cout << suits << endl;  // leetcode ignore
    if (isFlush(suits)) {
      return "Flush";
    }

    int maxPairSize = getMaxPairSize(ranks);
    cout << "maxPairSize:" << maxPairSize << endl;
    switch (maxPairSize) {
      case 5:
      case 4:
      case 3:
        return "Three of a Kind";
        break;
      case 2:
        return "Pair";
        break;
      case 1:
        return "High Card";
        break;
      default:
        break;
    }
    return "High Card";
  }
};
// leetcode end

bool test1() {
  Solution sol;
  vector<int> ranks = {13, 2, 3, 1, 9};
  vector<char> suits = {'a', 'a', 'a', 'a'};
  return sol.bestHand(ranks, suits) == "Flush";
}

int main() {
  cout << (test1() ? "True" : "False") << endl;
  return 0;
}