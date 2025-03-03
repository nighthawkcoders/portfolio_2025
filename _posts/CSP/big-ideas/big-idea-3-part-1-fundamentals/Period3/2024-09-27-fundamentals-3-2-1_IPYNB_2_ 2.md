---
toc: False
comments: True
layout: post
title: 3.2.1 Data Types Part 1
description: Student led teaching on data types and when to use them.
permalink: /csp/big-idea/p3/3-2-1
author: Michelle Kuruvilla
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #2c3e50;
      color: #ecf0f1;
  }

  /* Styling headers with lighter text and borders */
  h1, h2, h3, h4, h5 {
      color: #ecf0f1;
      border-bottom: 2px solid #2ecc71; /* Emerald green */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #27ae60; /* Darker green */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2ecc71; /* Updated border color to emerald green */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #2ecc71; /* Keywords now green */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a6e22e; /* Strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #e6db74; /* Function titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #fd971f; /* Variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #75715e; /* Comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #ae81ff; /* Numbers and built-ins */
  }

  .hljs-meta {
      color: #66d9ef; /* Meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in green */
  blockquote {
      border-left: 4px solid #27ae60; /* Dark green */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #27ae60; /* Green color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #2ecc71; /* Emerald green */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #f1c40f; /* Yellow links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #27ae60; /* Green on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #ecf0f1;
  }

  /* Styling tables with dark theme */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #345e40;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #2ecc71; /* Green for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #2ecc71; /* Green links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #27ae60; /* Dark green on hover */
  }
</style>


<h1>Integers</h1>

Integers are a important data type in computer science. They can be used to represent whole numbers, both positive and negative, including zero. In many programming languages, integers are used for counting, indexing, and various arithmetic operations.



```python
# Example of integer operations in Python
a = 5
b = 3


# Performing arithmetic operations
sum_result = a + b       # 8
product_result = a * b   # 15
mod_result = a % b       # 2


# Output the results
print("Sum:", sum_result)
print("Product:", product_result)
print("Modulo:", mod_result)



```

    Sum: 8
    Product: 15
    Modulo: 2



```python
// Integers in JavaScript


// In JavaScript, integers are part of the broader "Number" type.
// All numbers, whether integers or floating-point, are represented as a "Number".

// Properties of Integers:
console.log("Properties of Integers in JavaScript:");
console.log("1. Whole numbers without any decimal point.");
console.log("2. Represented as the Number type.");
console.log("3. Safe integers range from -(2^53 - 1) to (2^53 - 1).");


// Common Operations on Integers:
let a = 5;
let b = 3;


// Performing arithmetic operations
let sum = a + b;           // Addition
let product = a * b;       // Multiplication
let division = a / b;      // Division
let mod = a % b;           // Modulo


// Outputting the results
console.log(`Sum: ${sum}`);           // 8
console.log(`Product: ${product}`);    // 15
console.log(`Division: ${division}`);  // 1.6666666666666667
console.log(`Modulo: ${mod}`);         // 2


// Incrementing and decrementing
a++;                              // a becomes 6
b--;                              // b becomes 2
console.log(`Incremented a: ${a}`); // 6
console.log(`Decremented b: ${b}`); // 2


// Using BigInt for very large integers
let largeNumber = 123456789012345678901234567890n; // n suffix denotes BigInt
let anotherBigInt = BigInt(98765432109876543210);
let bigSum = largeNumber + anotherBigInt; // BigInt addition


```

<h1>Floating-Point Numbers</h1>

Floating-point numbers represent real numbers that have a decimal point. They are used to approximate real numbers when dealing with fractional or very large values in programming.


```python
# Example of floating-point operations in Python
x = 5.75
y = 3.4


# Performing arithmetic operations
sum_result = x + y            # 9.15
product_result = x * y        # 19.55
division_result = x / y       # 1.6911764705882353


# Output the results
print("Sum:", sum_result)
print("Product:", product_result)
print("Division:", division_result)


# Floating-point precision issue
a = 0.1
b = 0.2
precision_issue = a + b        # 0.30000000000000004


# Output the precision issue result
print("Precision Issue (0.1 + 0.2):", precision_issue)

```

    Sum: 9.15
    Product: 19.55
    Division: 1.6911764705882353
    Precision Issue (0.1 + 0.2): 0.30000000000000004



```javascript
%%javascript
// Lesson on Floating-Point Numbers in JavaScript

// Precision Issues
let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(`Expected: 0.3, Actual: ${sum}`); // Outputs: 0.30000000000000004


// Understanding Rounding Errors
let roundedSum = (0.1 + 0.2).toFixed(2);
// rounds sum to 2 decimal places

// Range of Floating-Point Numbers
let maxFloat = Number.MAX_VALUE; // Maximum floating-point value
console.log(`Maximum Float Value: ${maxFloat}`);
let overflow = maxFloat * 2; // Attempting to exceed the limit
console.log(`Overflow Example: ${overflow}`); // Outputs: Infinity

```

<h1>Strings</h1>

A string is a sequence of characters, such as letters, numbers, symbols, and spaces. Strings are widely used in programming to represent text and are usually enclosed in quotes (`" "` or `' '`).


```python
# Example of string operations in Python
name = "Alice"
greeting = "Hello, " + name   # Concatenation
print(greeting)               # Output: Hello, Alice

# String length
length = len(name)            # 5

# Using string methods
uppercase_name = name.upper() # 'ALICE'

```

    Hello, Alice



```javascript
%%javascript
// Strings in Javascript
// Scripts are used to automate tasks, manipulate data, and perform various operations in software applications


// Example of a Simple Script: 
let greeting = "Hello, World!"; // Declare a variable with a greeting message
console.log(greeting); // Output the greeting to the console


// More Complex Script Example: 
console.log("\n4. More Complex Script Example:");
// Demonstrates a more complex script involving functions.
function calculateSum(a, b) {
    return a + b; // Function to calculate the sum of two numbers
}


```

<h1>Lists</h1>

A list is an ordered collection of elements, which can include numbers, strings, or other objects. Lists are a fundamental data structure in programming that allows for efficient data management and manipulation.


```python
## Examples of Lists in Python

## Lists in Python are versatile and can be used to store a collection of items. Below are some common operations performed on lists.

### Creating a List

# Creating a list
my_list = [10, 20, 30, 40]
print("Initial List:", my_list)  # Output: Initial List: [10, 20, 30, 40]

```

    Initial List: [10, 20, 30, 40]



```javascript
%%javascript

// In JavaScript, lists are typically represented using Arrays,
// which are a special type of object for ordered collections of elements.

// Creating an array
let myArray = [10, 20, 30, 40];
console.log("Initial Array:", myArray);  // Output: Initial Array: [10, 20, 30, 40]


// Accessing elements
let firstElement = myArray[0];  // 10
console.log("First Element:", firstElement);  // Output: First Element: 10


// Appending an element
myArray.push(50);
console.log("After Appending 50:", myArray);  // Output: After Appending 50: [10, 20, 30, 40, 50]


// Inserting an element
myArray.splice(2, 0, 25);  // Insert 25 at index 2
console.log("After Inserting 25 at index 2:", myArray);  // Output: [10, 20, 25, 30, 40, 50]


// Removing an element by value
let removedElement = myArray.splice(3, 1);  // Remove 1 element at index 3
console.log("Removed Element:", removedElement);  // Output: Removed Element: 30
console.log("Array After Removing Element at Index 3:", myArray);  // Output: [10, 20, 25, 40, 50]


```

<h1>Popcorn Hack: create a simple python script to add two integers</h1>


```python

def add_two_numbers(num1, num2):
    """Function to add two integers."""
    return num1 + num2

# Get user input
try:
    # Prompt the user for two integers
    first_number = int(input("Enter the first integer: "))
    second_number = int(input("Enter the second integer: "))

    # Call the function to add the numbers
    result = add_two_numbers(first_number, second_number)

    # Print the result
    print(f"The sum of {first_number} and {second_number} is: {result}")

except ValueError:
    print("Please enter valid integers.")

```

<h1>Popcorn Hack: Simple Python script to count the length of a string</h1>



```python
# Get user input
user_string = input("Please enter a string: ")

# Count the length of the string
string_length = len(user_string)

# Print the length of the string
print(f"The length of the entered string is: {string_length}")

```

<h1>Popcorn Hack: Simple JavaScript function to check for `null`(`none` in python)</h1>



```python
function isNull(val) {
    return val === null ? "No value" : "Value exists";
}

// Test the function
console.log(isNull(null));  // Output: No value
console.log(isNull(10));    // Output: Value exists

```
