#include<iostream>

using namespace std;

int main() {

    int t, n, ile=0, num, rev, dig;

    cin>>t;

    for(int i=0; i<t; i++) {
        cin>>n;

        if(n<10) {
            cout<<n<<endl;
        }
        else {
            num = n;
            rev = 0;
            while(num>0) {
                dig=num%10;
                rev = rev*10+dig; 
                num = num/10;
            }
            while(n!=rev) {
                num = n;
                rev = 0;
                while(num>0) {
                    dig=num%10;
                    rev = rev*10+dig; 
                    num = num/10;
                }
                ile++;
            }
            cout<<n<<" "<<ile<<endl;

        }
    }

    return 0;
}