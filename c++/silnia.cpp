#include<iostream>

using namespace std;

int main() {
    int d, n;
    cin>>d;
    for(int i=0; i<d; i++) {
        int wynik = 1;
        cin>>n;
        if( n >= 10) {
            cout<<"0 0"<<endl;
        }
        else if(n <= 1) {
            cout<<"0 1"<<endl;
        }
        else {
            for(int j=1; j<=n; j++) {
                wynik = wynik * j;
            }
            cout<<(wynik%100)/10<<" "<<(wynik%10)<<endl;
        }
    }


    return 0;
}