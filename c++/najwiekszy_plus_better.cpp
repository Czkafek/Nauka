#include<iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);

    cin.tie(0);
    cout.tie(0);

    int n, progres=0;
    cin>>n;

    int t[n];
    for(int i=0; i<n; i++) {
        cin>>t[i];
    }
    

    int left=0;
    int right = 200000;
    int mid;    
    while(left <= right) {
        mid = (left+right)/2;
        progres = 0;
        
        for(int i=0; i<n; i++) {
            
            if(progres == mid*2 + 1) {
                break;
            }
            else if(t[i]>mid) {
                if(progres != mid) {
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

        if(progres != 2*mid + 1) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
    }
    cout<<left-1<<endl;



    return 0;
}