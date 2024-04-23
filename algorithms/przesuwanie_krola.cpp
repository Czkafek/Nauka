#include<iostream>

using namespace std;

int main() {

    string pozycja, cel;
    string pozycja_litera, cel_litera;
    string baza[8] = {"a","b","c","d","e","f","g","h"};
    int pozycja_liczba, cel_liczba, pozycja_litera_indeks, cel_litera_indeks;
    bool warunek_liczba = false;
    bool warunek_litera = false;

    cin>>pozycja;
    cin>>cel;
    pozycja_litera = pozycja[0];
    pozycja_liczba = pozycja[1] - '0';
    
    cel_litera = cel[0];
    cel_liczba = cel[1] - '0';
    
    for(int i=0; i<9; i++) {
        if(pozycja_litera == baza[i]) {
            pozycja_litera_indeks = i;
        }
        if(cel_litera == baza[i]) {
            cel_litera_indeks = i;
        }
    }
    
    cel_litera = cel[0];
    cel_liczba = cel[1] - '0';

    string kierunek, kierunki[10];
    int i = 0;

    if((pozycja_liczba != cel_liczba)||(pozycja_litera_indeks != cel_litera_indeks)) {
        while((warunek_liczba == false)||(warunek_litera == false)) {
        kierunek = "";
        
        if(pozycja_liczba > cel_liczba) {
            pozycja_liczba--;
            kierunek = "S";
        }
        else if(pozycja_liczba < cel_liczba) {
            pozycja_liczba++;
            kierunek = "N";
        }
        else {
            warunek_liczba = true;
        }
        
        if(pozycja_litera_indeks > cel_litera_indeks) {
            pozycja_litera_indeks--;
            kierunek += "W";
        }
        else if(pozycja_litera_indeks < cel_litera_indeks) {
            pozycja_litera_indeks++;
            kierunek += "E";
        }
        else {
            warunek_litera = true;
        }
        
        kierunki[i] = kierunek;

        i++;
    
        }        
        i--;
        cout<<i<<endl;
        
    }
    else {
        cout<<"0"<<endl;
    }
    for(int j=0; j<i; j++) {
        cout<<kierunki[j]<<" ";
    }

    return 0;
}