#include<iostream>

using namespace std;

int main() {

    int d, licznik=1;
    string wyraz;
    cin >> d;
    
    for(int i=0; i<d; i++) {

        cin>>wyraz;

        for(int j=0; j<wyraz.length(); j++) {

            if(wyraz[j] == wyraz[j+1]) {
                licznik++;
            }
            else {
                if(licznik>2) {
                    wyraz[j+2-licznik] = licznik;
                    j = j+3-licznik;
                }
            }

        } 

    }


    return 0;
}