#include<iostream>

using namespace std;

int main() {

    int n, r;
    bool warunek = true;
    cin>>n;

    if(n<10) {
        cout<<9<<endl;
    }
    else if(n<20) {
        cout<<18<<endl;
    }
    else {
        int tmp = n-(n%10)+10;
        r = tmp-n;
        if(r>(9-(n%9))) {
            tmp = n + 9 - n%9;
            cout<<tmp<<endl;
        }
        else if(10-r >= (n%9)) {
            tmp = n - (n%9);
            cout<<tmp<<endl;
        }
        else {
            n -= (n%100 - n%10);
            while(warunek = true) {
                if((n%9)==0) {
                    warunek = false;
                }
                else {
                    n += 10;
                }
            }
            cout<<n<<endl;
        }
    }
    return 0;
}