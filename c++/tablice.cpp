#include<iostream>

using namespace std;

int main() {

    int t, n;
    string liczby;
    cin>>t;

    for(int i=0; i<t; i++) {
        cin>>n;
        getline(cin, liczby);

        for(int j=n*2-1; j>=0; j--) {
            cout<<liczby[j];
        }
    }

    return 0;
}