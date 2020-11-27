#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<int> gardenNoAdj(int N, vector<vector<int>>& paths) {
        vector<vector<int>> graph(N + 1);
        for (const auto&path : paths) {
            graph[path[0]].push_back(path[1]);
            graph[path[1]].push_back(path[0]);
        }       

      //   vector<int> res(N, -1);
      //   for (int i = 1; i <= N; i++) {
      //       set<int> colorUsed = {1, 2, 3, 4}; // to use smaller color first
      //       // unordered_set<int> colorUsed = {1, 2, 3, 4}; // use random color
      //       for (const auto& neighbor : graph[i]) {
      //           if (res[neighbor - 1] != -1) { // colored already
      //               colorUsed.erase(res[neighbor - 1]);
      //           }
      //       }
      //       res[i - 1] = *colorUsed.begin();
      //   }

      //   return res;
      return 0
    }
};

int main()
{
   vector<string> msg;

   for (const string& word : msg)
   {
      cout << word << " ";
   }
   cout << endl;
   cout << "hello world" << endl;
   return 0;
}
 