let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



function binarySearch(find) {

    let n = Math.round((array.length - 1) / 2);
    let middle = Math.round((array.length -1) / 2);

    search();

    function search() {



        if ( array[middle] === find ) {
            return middle;
        }
        else if ( array[middle] > find ) {  // left
            middle = middle - Math.round(middle/2);
            binarySearch(find);
        }
        else {                              // right
            middle = middle + Math.round(middle/2);
            binarySearch(find);
        }

    }

}

    let found = binarySearch(5);

    console.log(found);



    // jeśli wybieramy prawą połowę to dodajemy, a jak lewą to odejmujemy
    // używamy formuły  middle = middle -+ elementsLeft / 2
    // elementLeft = array.length - middle
    // chyba będziesz pamiętać reszte
    // dasz radę wierzę w ciebie ziomek, dokonasz tego







