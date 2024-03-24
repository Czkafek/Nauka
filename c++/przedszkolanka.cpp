#include<iostream>

using namespace std;

int main() {

    int d, a ,b;
    cin>>d;

    for(int i=0; i<d; i++) {
        cin>>a>>b;
        int c=a, d=b;
        
        while(d!=0)
        {
            int pom = d;
            d = c%d;
            c = pom;  
        }
        cout<<a/c*b<<endl;

    }

    return 0;
}