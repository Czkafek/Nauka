#include<iostream>

using namespace std;

int main() {

    int n;
    cin>>n;
    int liczby[n];
    for(int i=0; i<n; i++) {
        cin>>liczby[i];
    }

    int suma = 0, wynik = 0;
    int left = 0;
    int right = 0;

    for(int i=0; i<n; i++) {

        while(suma >= 0) {
            suma += liczby[right];
            right++;
            if(suma>wynik) {
                wynik = suma;
            }
        }
        suma -=liczby[right];
        left++;
    }
    
    cout<<wynik<<endl;


    return 0;
}