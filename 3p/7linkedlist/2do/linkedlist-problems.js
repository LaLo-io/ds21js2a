/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * add(v)
 *
 * add an element at the end to the linked-list
 * @arg {type} v - value; may be of chars, numbers, u objects
 *
 * @example
 * add(3)
 * add element at the beginning 
 
 SOLUCION
 
 */
 function Node(element) {
    this.element = element;
    this.next = null;
}

function List() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
}

function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
} 
   
let nums = new LList();
nums.insert(4, "head");
nums.insert(8, 3);
nums.insert(5, 9);  
nums.display() ;


/*
 * PROBLEM 2
 * size()
 *
 * returns the size of the linked-list
 * @returns {number} - size
 *
 * @example
 * size()
 * Verify operation result
 
 SOLUCION
 */
 function Node(element) {
    this.element = element;
    this.next = null;
    }
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    }
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
    }
    return currNode;
    } 
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
    }  
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
    }
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    }
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
    } 
   
/*
 * PROBLEM 3
 * remove(p)
 *
 * remove element at position p
 * @arg {number} p - position
 * p must be a valid position between 0 and size()-1
 *
 * @example
 * remove(3)
 * Verify operation result
 * may use size
 
 SOLUCION
 
 */
  function Node(element) {
    this.element = element;
    this.next = null;
    }
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    }
function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
    }
    return currNode;
    } 
function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
    }  
function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
    }
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let  current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    }
function display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
    } 
let nums = new LList();
    nums.insert(9, "head");
    nums.insert(4, 9);
    nums.insert(6, 4);
    nums.insert(3, 6); 
   
    nums.display();
    console.log();
    nums.remove(4);
    nums.display();


/*
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */