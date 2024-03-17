#include<iostream>

using namespace std;

int main() {

    long long d, a, b, ileRazy, wynik;
    cin>>d;

    for(int i=0; i<d; i++) {
        
        cin>>a>>b;
        wynik = a%10;
        int numbers[9];
        int j = 1;
        numbers[0] = wynik%10;
        wynik =(wynik*a)%10;
        
        while(wynik%10 != a%10) {
            numbers[j] = wynik%10;
            wynik = (wynik * a) % 10;
            j++;
        }
        cout<<numbers[(b-1)%j]<<endl;

    }
    return 0; 
}

/*
    int numbers[9];
    int j = 1;
    numbers[0] = wynik%10;
    wynik *= wynik;
    
    while(wynik%10 != a%10) {
        numbers[j] = wynik%10;
        wynik *= a;
        j++;
    }

    cout<<numbers[(b-1)%(j+1)]<<endl;
*/