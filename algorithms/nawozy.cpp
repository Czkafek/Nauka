#include<iostream>

using namespace std;

int main() {

    int n, l;
    // n - liczba rodzajów nawozów
    // l - długość ogrodu

    cin>>n>>l;

    int t[l];
    for(int i=0; i<l; i++) {
        cin>>t[i];
    }

    int r[n];
    for(int i=0; i<n; i++) {
        cin>>r[i];
    }

    cout<<"n: "<<n<<endl;
    cout<<"l: "<<l<<endl;
    cout<<"t[l]: "<<t<<endl;
    cout<<"r[n]: "<<r<<endl;

    return 0;
}