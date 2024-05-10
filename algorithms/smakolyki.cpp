#include<iostream>

using namespace std;

int main() {

    int a,b;
    int long long wynik = 0;
    cin>>a>>b;

    int liczby[a];
    int ilosc[b];

    for(int i=0; i<a; i++) {
        cin>>liczby[i];
    }
    int right = 0;
    int left = 0;
    for(int j=0; j<b; j++) {
        ilosc[j] = 0;
    }

    for(int i=0; i<a; i++) {

        while(right<a && ilosc[liczby[right]-1]<1) {
            ilosc[liczby[right]-1]++;
            right++;
            wynik += (right - left);
        }
        ilosc[liczby[left]-1]--;
        left++;
    }
    
    cout<<wynik<<endl;



    return 0;
}