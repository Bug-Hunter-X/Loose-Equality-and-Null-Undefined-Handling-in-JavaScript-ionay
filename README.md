# Loose Equality and Null/Undefined Handling in JavaScript

This repository demonstrates a common error in JavaScript related to loose equality (==) when dealing with null or undefined values.  The example showcases how using loose equality can lead to unexpected behavior and how strict equality (===) provides more reliable results.

## The Problem

The provided `foo` function intends to add two numbers, handling the case where either input might be null or undefined. It uses loose equality (`==`) for null checks. While this might seem to work initially, it masks a potential problem: loose equality doesn't distinguish between null and 0, or undefined and 0. This can lead to unexpected results if 0 is a valid input value.

## The Solution

The solution uses strict equality (`===`) to explicitly check for null or undefined and avoids the ambiguity of loose equality. This ensures that only true null or undefined values are treated as special cases, leading to clearer and more robust code.

## How to Run

1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files.
3. Observe the differences in handling null/undefined values between the two versions.
4. Run both JavaScript files to compare outputs using Node.js or a browser's developer console.