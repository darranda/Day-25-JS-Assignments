/* function outer(){
  
function inner() {
   
}

inner();
}

outer(); */

// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
let a = 'string one';
let b = {firstName: 'Darranda', lastName:'Foy'};
    function outer () {
    
console.log (a); 
console.log (b);

// Log the values of a and b in the inner function.
// Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
// Update the inner function to take two parameters named a and b.
// Inside the inner function, update a property of the b object.
function inner () {
let a = 'string two';
let b = {nickNameOne: 'Randa', nickNameTwo: 'D'}
 console.log (a,b);

b.nickNameOne = 'Ran';
console.log (b)
}   
inner (a, b);
console.log (a,b);
}
outer ();