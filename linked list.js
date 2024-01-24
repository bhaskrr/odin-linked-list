class node{
    constructor(value = null){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // adds a new node containing value to the end of the list
    append(value){
        const newNode = new node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // adds a new node containing value to the start of the list
    prepend(value){
        const newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
        if(this.tail === null){
            this.tail = newNode;
        }
        this.size++;
    }

    //returns the total number of nodes in the list
    size(){
        return this.size;
    }

    //returns the first node in the list
    head(){
        return this.head;
    }

    //returns the last node in the list
    tail(){
        return this.tail;
    }

    //returns the node at the given index
    at(index){
        if(index < 0 || index > this.size){
            return null;
        }
        let currentNode = this.head;
        for(let i = 0;i< index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    //removes the last element from the list
    pop(){
        if(this.size === 0){
            return null;
        }
        let currentNode = this.head;
        while(currentNode.next != this.tail){
            currentNode = currentNode.next;
        }
        const removedNode = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        this.size--;
        return removedNode;
    }

    //returns true if the passed in value is in the list and otherwise returns false
    contains(value){
        let currentNode = this.head;
        while(currentNode != null){
            if(currentNode.value == value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    //returns the index of the node containing value, or null if not found
    find(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            if(currentNode.value == value){
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return null;
    }

    /*represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    The format should be: ( value ) -> ( value ) -> ( value ) -> null*/
    toString(){
        let stringRepresentation = "( ";
        let currentNode = this.head;
        while(currentNode != null){
            stringRepresentation += currentNode.value + " ) ->";
            currentNode = currentNode.next;
        }
        stringRepresentation += null;
        return stringRepresentation;
    };

    /*inserts a new node with the provided value at the given index */
    insertAt(value, index){
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        while(currentIndex != index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        const newNode = new node();
        newNode.value = value;
        previousNode.next = newNode;
        newNode.next = currentNode;
    }

    /*removes the node at the given index */
    removeAt(index){
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;

        while(currentIndex != index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        previousNode.next = currentNode.next;
        currentNode.next = null;
    }
}