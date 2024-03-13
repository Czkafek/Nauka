#include<iostream>

using namespace std;

int main() {
    int n, a;
    cin>>n;
    for(int j=0; j<n; j++) {
        bool czyPierwsza = true;
        cin>>a;
        if(a == 0 || a ==1) {
            cout<<"NIE"<<endl;
        }
        else {
            for(int i = 2; i <= a/2; i++) {
                if(a%i == 0) {
                    cout<<"NIE"<<endl;
                    czyPierwsza = false;
                    break;
                }
            }
            if(czyPierwsza == true){
                cout<<"TAK"<<endl;
            }
        }
    }
    
    return 0;
}


