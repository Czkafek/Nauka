#include<iostream>

using namespace std;

int main() {

    int n, l, counter=0, tmp;
    bool warunek = true;

    cin>>n>>l;

    string t;
    cin>>t;

    int r[n];
    for(int i=0; i<n; i++) {
        cin>>r[i];
    }

    for(int i=0; i<l; i++) {

        if(t[i]!='D') {
            tmp = t[i]-'0';
            tmp--;
            if(r[tmp] != 0) {
                r[tmp]--;
            }
            else {
                warunek = false;
                break;
            }
        }
        else {
            counter++;
        }

    }

    if(warunek == true) {

        for(int i=0; i<n; i++) {
            counter = counter - r[i];
        }
        if(counter>0) {
            cout<<"NIE"<<endl;
        }
        else {
            cout<<"TAK"<<endl;
        }

    }
    else {
        cout<<"NIE"<<endl;
    }

    return 0;
}