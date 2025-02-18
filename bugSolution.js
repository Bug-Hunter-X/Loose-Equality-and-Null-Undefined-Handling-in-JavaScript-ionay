function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined inputs explicitly
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); // Output: 5
console.log(foo(5,0)); // Output: 5