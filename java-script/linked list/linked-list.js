class Node {
    data;
    next;
    constructor(data) {
        this.data = data;
    }
}

head = new Node(4);
nodeB = new Node(2);
nodeC = new Node(3);
nodeD = new Node(10);
nodeE = new Node(21);
nodeF = new Node(83);
nodeG = new Node(7);

head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;
nodeF.next = nodeG;


function countNodes(head) {
    let tmp = head;
    let tmpData = head.next.data;
    let i = 1;

    while( tmp.next != null ) {
        if(tmp != null) {
            i++;
        }
        else {
            tmp = null;
        }
        tmp = tmp.next;
    }
    return i;
}

let result = countNodes(head);

console.log(result);


