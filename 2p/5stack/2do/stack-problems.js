/* EDUARDO FLORES NAVA
/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation
 
 *SOLUCION 
*/
function Stack() {
    this.dataStore = [];
        this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
 function peek() {
    return this.dataStore[this.top-1];
    }
 function push(element) {
    this.dataStore[this.top++] = element;
    }
 function clear() {
    this.top = 0;
    }
 function pop() {
    return this.dataStore[--this.top];
    }
 function length() {
    return this.top;
    }
 let s = new Stack();
     s.push("Gerardo");
     s.push("Brandon");
     console.log("length: " + s.length());
     console.log(s.peek());
     s.push("Valeria");
     console.log(s.peek());
     console.log("length: " + s.length());
     console.log(s.peek());
     s.push("Alejandra");
     s.push("Julia");
     s.push("Romero");
     console.log("length: " + s.length());
     console.log(s.peek()); 
     s.push("Angel");
     console.log(s.peek());
 /*
  * PROBLEM 2
  * Base Conversions
 SOLUCION
  */
 function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }  
 function push(element) {
    this.dataStore[this.top++] = element;
    }
 function peek() {
    return this.dataStore[this.top-1];
    }
 function pop() {
    return this.dataStore[--this.top];
    }
 function clear() {
    this.top = 0;
    }
 function length() {
    return this.top;
    }
      
 function mulBase(num, base) {
        let s = new Stack();
        do {
        s.push(num % base);
        num = Math.floor(num /= base);
        } while (num > 0);
        let converted = "";
         while (s.length() > 0) {
        converted += s.pop();
        }
        return converted;
    }
 
    let num = 15;
    let base = 4;
    let newNum = mulBase(num, base);
    console.log(num + " convertido a base " + base + " es " + newNum);
 
