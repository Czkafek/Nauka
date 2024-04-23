#include<iostream>

using namespace std;

int main() {

    int n, m, tmp, tmp2, counter=0;
    bool warunek = true;
    cin>>n>>m;

    int a[n], b[n], g[m];

    for(int i=0; i<n; i++) {
        cin>>a[i]>>b[i];
    }
    for(int i=0; i<m; i++) {
        cin>>g[i];
    }
    int max=b[0];
    for(int i=1; i<n; i++) {
        if(max<b[i]) {
            max=b[i];
        }
    }
    int sumy[max];

    int right = m;
    int left = 0;
    int mid;

    while(left<=right) {
        if(counter==10) {
            break;
        }
        mid = (right+left)/2;
        for(int i=0; i<max; i++) {
            sumy[i] = 0;
        }
        cout<<"----------------------------------"<<endl;
        cout<<"counter: "<<counter<<endl;
        cout<<"left: "<<left<<endl;
        cout<<"right: "<<right<<endl;
        cout<<"mid: "<<mid<<endl;

        for(int i=0; i<mid; i++) {
            tmp = g[i];
            sumy[tmp] = 1;
        }
        for(int i=1; i<max; i++) {
            sumy[i] += sumy[i-1];
        }
        for(int i=0; i<n; i++) {
            tmp = b[i]-1;
            tmp2 = a[i]-2;
            if((sumy[tmp]-sumy[tmp2])==0) {
                i=n;
                left = mid+1;
                warunek = false;
            }
        }
        if(warunek == true) {
            right = mid-1;
        }
        counter++;

    }
    cout<<left<<endl;

    


    return 0;
}