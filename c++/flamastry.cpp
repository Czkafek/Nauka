#include<iostream>
#include <string> 

using namespace std;

int main() {

    int d, licznik=1, where;
    string wyraz;
    cin >> d;
    
    for(int i=0; i<d; i++) {

        cin>>wyraz;

        for(int j=0; j<wyraz.length(); j++) {

            if(wyraz[j] == wyraz[j+1]) {
                licznik++;
                if(licznik<3) {
                    cout<<wyraz[j];
                }
            }
            else {
                if(licznik>2) {
                    cout<<licznik;
                }
                else {
                    cout<<wyraz[j];
                }
                licznik = 1;
            }

        } 

        cout<<endl;

    }


    return 0;
}