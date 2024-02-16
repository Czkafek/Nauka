let array = [120, 69, 420, 56798, 1245, 123, 1, 2, 3, 8, 657, 10];

function bubbleSort(array) {
    let n = array.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n-1; j++) {
            if(array[j] > array[j+1]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }

    return array;

}

let sortedArray = bubbleSort(array);

for(let x of sortedArray) {
    console.log(x);
}