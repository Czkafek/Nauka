#include<iostream>

using namespace std;

int main() {

    int t, n, numbers=0, result;

    cin>>t;
    
    for(int i=0; i<t; i++) {
        result = 0;
        cin>>n;
        
        for(int j=0; j<n; j++) {
            cin>>numbers;
            result += numbers;
        }

        cout<<result<<endl;;


    }

    return 0;
}