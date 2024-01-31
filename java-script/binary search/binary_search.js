let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

console.log(array.length);

function findIndex(array, find) {
    
    let n = array.length;
    let mid = Math.round(n / 2);

    while( mid != n+1) {
        if ( find <= array[mid] ) {
            if ( find === array[mid]) {
                return mid;
            }
            mid = Math.round(mid/2)
        }
        else if ( find > array[mid] ) {
            mid += Math.round(mid/2)
        }
    }
 
    return -1;

}

let find = findIndex(array, 30);

console.log(find);
