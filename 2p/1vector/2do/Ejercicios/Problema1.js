//EDUARDO FLORES NAVA
/*PROBLEM 1
* insertAt(p,v)
*
* inserts a value v, at position p, in the array
* @arg {number} p - position
* @arg {number} v - value
* @example
* insertAt(3,3)
* Verify operation result by outputing the array before and after
*/

let numbers = [ 3, 2, 1,7,5,8,9,6];
    numbers.splice(3,0,'Número');
    console.log(numbers);