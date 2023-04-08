/* Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number, 
i.e. how many times it will multiply the first number.
Since it is recursive, you must call the function within the function and you must also have a base condition to avoid an infinite loop.*/

function recursive (x, y) {
    if (y <= 1) {
    return 1;
} else {
    return x * recursive (x,y-1);
}
}
//console.log(recursiveFunction(b,exponent))
//Console log the result and run the function on the following numbers:

console.log(recursive(2,5))
console.log(recursive(7,3))
console.log(recursive(12,2))
console.log(recursive(9,4))
