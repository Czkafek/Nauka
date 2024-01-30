let n = 6;
let t = [1, 10, 18, 13, 17, 3];

for(let i = 0; i < n; i++) {
    for(j = 0; j < n-1; j++) {
        if( t[j] > t[j+1]) {
            let tmp =  t[j];
            t[j] = t[j+1];
            t[j+1] = tmp;
        }
    }
}

console.log(t);