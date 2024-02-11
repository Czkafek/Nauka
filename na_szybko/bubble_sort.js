let table = [0, 1, 10, 89, 24, 58, 98, 102, 38, 69, 420, 2137, 25];

function bubbleSort(table) {

    let n = table.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n-1; j++) {
            if( table[j] > table[j+1] ) {
                let tmp = table[j];  // tmp = table[3] so tmp = 89
                table[j] = table[j+1];  // table[3] = table[4] so table[3] = 24
                table[j+1] = tmp; // table[4] = tmp so table[4] = 89
            }
        }
    }

    return table;
}

let sorted_table = bubbleSort(table);

for(let tab in sorted_table) {
    console.log(sorted_table[tab]);
}
