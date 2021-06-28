/*EDUARDO FLORES NAVA
/*PROBLEMA 0
 * insert(n)
 *
 * inserts a node into a tree
 * @arg {data} n - data may be: object, char, number, string
 *
 * @example
 * insert('one')
 
 SOLUCION
 */
 
 function Node(data,left,right){
    this.data=data;
    this.left=left;
    this.right=right;
  }
  
  function BST (){
    this.root=null;
    this.insert=insert;
  }  
  
  function insert(data){
    let n=new Node(data,null,null);
    if(this.root==null){
      this.root=n;
    }
    else{
      let current=this.root;
      let parent;
      while(true){
        parent=current;
        if(data<current.data){
          current=current.left;
          if(current==null){
            parent.left=n;
            break;
          }
        }
        else{
          current=current.right;
          if(current==null){
            parent.right=n;
            break;
          }
        }
      }
    }
  }  
  
  let nums=new BST();
  nums.insert(22);
  nums.insert(23);
  nums.insert(16);
  nums.insert(3);
  
  console.log(nums.root);
  
  
  
  /*PROBLEMA 1
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
  nums.insert(10, 4);
  
  nums.display() ;
  
  /*PROBLEMA 3
  * posorder(n)
  *
  * traverses a tree in POSORDER
  * @arg {tree} n - tree
  *
  * @example
  * posorder(root)
  SOLUCION
  */
  function Node(data,left,right){
     this.data=data;
     this.left=left;
     this.right=right;
     this.show=show;
  }
  
  function show(){
     return this.data;
  } 
  
  function BST (){
     this.root=null;
     this.insert=insert;
     this.postOrder=postOrder;
  }
  
  function postOrder(node) {
     if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
     }
  }  
  
  function insert(data){
     let n=new Node(data,null,null);
     if(this.root==null){
        this.root=n;
     }
     else{
        let current=this.root;
        let parent;
        while(true){
           parent=current;
           if(data<current.data){
              current=current.left;
              if(current==null){
              parent.left=n;
              break;
              }
           }
           else{
             current=current.right;
             if(current==null){
              parent.right=n;
              break;
              }
           }
        }
     }
  }
  
  let nums=new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);
  console.log('Postorder traversal :');
  postOrder(nums.root);        