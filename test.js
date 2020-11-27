class Solution {
    public:
        void dfs(string s,vector<vector<int>>& result,vector<int>& path,int idx){
            if(idx == s.length() & path.size() == 4){
                result.push_back(path);
                return;
            }
            if(path.size() > 4) {
                return;
            }
            if(idx >= s.length()) {
                return;
            }
            path.push_back(s[idx]-'0');
            dfs(s,result,path,idx+1);
            path.pop_back();
            if(path.size() > 0) {
                if(path[path.size()-1] != 0) {
                    int tmp = path[path.size()-1]*10+(s[idx]-'0');
                    if(tmp <= 255) {
                        path[path.size()-1] = tmp;
                        dfs(s,result,path,idx+1);
                    }
                }
            }
        }
        vector<string> restoreIpAddresses(string s) {
            vector<string> vec;
            if(s.length() == 0){
                return vec;
            }
            vector<vector<int>> result;
            vector<int> path;
            dfs(s,result,path,0);
            string tmp;
            for(int i = 0; i < result.size(); i++) {
                tmp = "";
                for(int j = 0; j < 3; j++) {
                    tmp += (to_string(result[i][j])+'.');
                }
                tmp += to_string(result[i][3]);
                vec.push_back(tmp);
            }
            return vec;
        }
    };