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
                    for(int k=j; k<licznik; k++) {
                        wyraz[k] = ' ';
                    }
                    /*  
                        Na koniec zrób pętle, która usuwa miejsca ze spacją ze stringa, dzieki czemu, nie będzie trzeba wracać j, i napraw górę
                    */
                }
            }

        } 

    }


    return 0;
}