#include<iostream>

using namespace std;

int main() {

    int t, n;
    cin>>t;

    for(int i=0; i<t; i++) {
        cin>>n;
        int liczby[n];
        
        for(int j=0; j<n; j++) {
            cin>>liczby[j];
        }

        for(int j=n-1; j>=0; j--) {
            cout<<liczby[j]<<" ";
        }
    }

    return 0;
}