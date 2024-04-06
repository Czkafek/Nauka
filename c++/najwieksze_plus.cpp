#include<iostream>

using namespace std;

int main() {

    int n, r=1, max=0;
    cin>>n;

    bool warunek, ramie;
    
    int t[n];

    for(int i=0; i<n; i++) {
        cin>>t[i];
    }
    
    for(int i=1; i<n; i++) {
        warunek = true;

        if(t[i] > 2) {
            r = 1;
            while(warunek == true) {
                
                ramie = true;
                for(int j=1; j<r*2;) {
                    if(t[i-j] >= r+1) {
                        j++;
                    }
                    else {
                        ramie = false;
                        break;
                    }

                    if(t[i+j] >= r+1) {
                        j++;
                    }
                    else {
                        ramie = false;
                        break;
                    }
                }
                if(ramie == true) {
                    if(r > max) {
                        max = r;
                    }
                }
                else {
                    break;
                }


                r++;
                if(r>=t[i]/2) {
                    warunek = false;
                }
            }


        }

    }
    cout<<max<<endl;



    return 0;
}