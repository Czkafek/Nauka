#include<iostream>

using namespace std;

int main() {

    int n, progres=0;
    cin>>n;

    int t[n];
    for(int i=0; i<n; i++) {
        cin>>t[i];
    }
    

    int left=0;
    int right = 200000;
    int mid;
    while(left < right) {
        mid = (left+right)/2;
        progres = 0;
        
        for(int i=0; i<n; i++) {
            
            if(progres == mid*2 + 1) {
                break;
            }
            else if(t[i]>mid) {
                if(progres != mid) { // 6 5 4 6 3 5 2
                    progres++;
                }
                else {
                    if(t[i] > 2*mid) {
                        progres++;
                    }
                }
            }
            else {
                progres = 0;
            }

        }

        cout<<"right: "<<right<<endl;
        cout<<"left: "<<left<<endl;
        cout<<"mid: "<<mid<<endl;
        cout<<"progres: "<<progres<<endl;
        cout<<"----------------------------------------------------------"<<endl;
        if(progres != 2*mid + 1) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
    }
    if(progres==0) {
         cout<<mid-1<<endl;   
    }
    else {
        cout<<mid<<endl;
    }



    return 0;
}