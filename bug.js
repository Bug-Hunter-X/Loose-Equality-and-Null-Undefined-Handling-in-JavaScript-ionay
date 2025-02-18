function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined inputs
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10