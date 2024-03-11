#include<iostream>

using namespace std;

int main() {
    int a;
    cin >> a;
    for(int i = 2; i <= a/2; i++) {
        if(a%i == 0) {
            cout<<"TAK";
            return 0;
        }
    }
    cout<<"NIE";
    return 0;
}