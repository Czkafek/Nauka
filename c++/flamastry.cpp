#include<iostream>
#include <string> 

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
                if(licznik>2) {
                    wyraz[j] = ' ';
                }
            }
            else {
                if(licznik>2) {
                    string licznik_word = to_string(licznik);
                    wyraz[j+2-licznik] = licznik_word;
                }
            }

        } 

        for(int j=0; j<wyraz.length(); j++) {
            if(wyraz[j] != ' ') {
                cout<<wyraz[j];
            }
        }
        cout<<endl;

    }


    return 0;
}