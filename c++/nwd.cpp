#include<iostream>

using namespace std;

int nwd(int a, int b) {

    while(b!=0) {
        int pom = b;
        b = a%b;
        a = pom;
    }

    return a;

}

int main() {

    int t, a, b;
    cin>>t;

    for(int i=0; i<t; i++) {
        cin>>a>>b;
        cout<<nwd(a,b)<<endl;
    }


    return 0;
}