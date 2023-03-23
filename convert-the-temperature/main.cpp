/**
 * https://leetcode.cn/problems/convert-the-temperature/
 */
#include <iostream>
#include <vector>
using namespace std;

// leetcode start
class Solution {
 public:
  vector<double> convertTemperature(double celsius) {
    // vector<double> result = {};
    // result.insert(result.end(), celsius + 273.15);
    // result.insert(result.end(), celsius * 1.8 + 32);
    // return result;

    return {celsius + 273.15, celsius * 1.80 + 32.00};
  }
};
// leetcode end

bool test1() {
  Solution sol;
  vector<double> result = sol.convertTemperature(36.500);
  return result.at(0) == 309.65 && result.at(1) == 97.70;
}
bool test2() {
  Solution sol;
  vector<double> result = sol.convertTemperature(122.11);
  return result.at(0) == 395.26 && result.at(1) == 251.798;
}

int main() {
  cout << (test1() ? "True" : "False") << endl;
  cout << (test2() ? "True" : "False") << endl;

  return 0;
}