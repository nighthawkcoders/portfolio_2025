---
toc: False
comments: True
layout: post
title: 3.8.1 Recursion Iteration and Nested For Loops P3
description: Lesson on Iteration Recursion and Nested For Loops, including popcorn hacks, homework, and basic explanation of what is going on.
permalink: /csp/big-idea/p3/3-8-1
author: Armaghan
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

## Basic Overview

Recursion is a process in which a function calls itself as part of its execution. It is a powerful technique used to solve problems by breaking them down into simpler sub-problems of the same type.

Recursion typically involves two essential parts:

1. **Base case** – The condition that stops the recursion.
2. **Recursive case** – The part where the function continues calling itself.


# Pseudocode Explanation


```python
Define a function factorial with parameter n
  If n equals 0
    Return 1
  Else if n is less than 0
    Return "undefined"
  Else if n is a float
    Return "not solvable"
  Else
    Return n multiplied by factorial of n-1

Take user input as num
Call factorial(num) and print the result
```


      Cell In[2], line 1
        Define a function factorial with parameter n
               ^
    SyntaxError: invalid syntax



# Python Example
Here’s an example of a simple factorial function that uses recursion. It will keep calling itself, multiplying numbers, until the base case (when `n == 0`) is reached.


```python
# Function to calculate factorial
def factorial(n):
    # Base case: stop recursion when n is 0
    if n == 0:  
        return 1  # 0! is 1  
    
    # Handle negative input
    elif n < 0:  
        return "undefined"  # Undefined for negative numbers  
    
    # Handle non-integer input
    elif isinstance(n, float):  
        return "not solvable without gamma function"  # Only accept integers  
    
    # Recursive case: call the function again with (n-1)
    else:  
        return n * factorial(n - 1)  # Function calls itself with n-1  

# Take user input for a number
num = int(input("Enter a number to calculate its factorial: "))  

# Call the factorial function and print the result
result = factorial(num)  
print(f"Factorial of {num} is", result)

```

    Factorial of 8 is 40320


# Javascript example


```javascript
%%javascript
// Function to calculate factorial
function factorial(n) {
    if (n === 0) {
        return 1;  // Base case: 0! is 1
    } else if (n < 0) {
        return "undefined";  // Handle negative numbers
    } else if (Math.floor(n) !== n) {
        return "not solvable without gamma function";  // Handle non-integers
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

// Example usage
let num = 4;  // Number to calculate factorial for
console.log("Factorial of " + num + " is " + factorial(num));  // Output the result
```


    <IPython.core.display.Javascript object>


# Notes
- **Base Case**: The function checks if `n` is 0 and returns 1, stopping further recursion.
- **Recursive Case**: For any other positive integer, it returns `n` multiplied by the factorial of `n-1`, continuing the process.

## What is Happening

- **Factorial Function**: The function checks if `n` is zero (base case), then returns 1. For any other positive integer, it multiplies `n` by the factorial of `n-1`, recursively.

- **Stopping Condition**: The recursion stops when `n` reaches 0.

- **Negative Input Handling**: In this example, negative numbers return `"undefined"`, and floats return a message indicating they are not supported without a gamma function.


# Overview of Nested For Loops
A **nested for loop** occurs when a for loop is placed inside another for loop. This structure allows us to perform repeated actions within multiple layers, making it useful when working with multi-dimensional data, such as matrices or grids.

- The **outer loop** controls the number of iterations for the overall process.
- The **inner loop** runs completely for each iteration of the outer loop, meaning it executes once for each value of the outer loop.


### Python Example:


```python
# List of groups
groups = [['Armaghan', 'Elliot'], ['Nikhil', 'Hithin']]

# Nested loop to go through each person in each group
for pair in groups:
    for person in pair:
        print(person + ' is always coding')
    # Final message after each group
    print(pair[0] + ' and ' + pair[1] + ' loves to Code Code Code!')
```

    Armaghan is always coding
    Elliot is always coding
    Armaghan and Elliot loves to Code Code Code!
    Nikhil is always coding
    Hithin is always coding
    Nikhil and Hithin loves to Code Code Code!


# Notes:
- This hack shows how nested loops can be used to loop through multiple levels of data.
- The outer loop goes through the groups, while the inner loop goes through the people in each group.


## Homework Hack for Recursion

### Instructions:
1. Create a function to calculate the factorial of a number.
2. Inside the function, use recursion (calling the function within itself) to continue the calculation.
3. Display the result of the factorial calculation along with a custom message.
4. Ensure to handle base cases and edge cases like negative or non-integer inputs.
5. Find the factorial of any number ranging from 9-13 and make sure the output message makes sense.


### Python Example:

<details>
<summary>See Example Answer</summary>
<pre><code>
# Recursive function to calculate factorial
def factorial(n):
    if n == 0:  # Base case: stop recursion at 0
        return 1
    elif n < 0:  # Edge case: Handle negative numbers
        return "undefined"
    elif isinstance(n, float):  # Edge case: Handle non-integers
        return "not solvable without gamma function"
    else:
        return n * factorial(n - 1)  # Recursive case
# Example use case with recursion
result = factorial(9)
print(f"The factorial of 9 is {result}!")
</code></pre>
</details>

# Popcorn Hack


```python
# Create an empty list
nums = []

# Get user input for how many numbers they want to add
num_of_inputs = int(input("How many numbers do you want to add to the list? "))

# Use a loop to get inputs and append them to the list
for _ in range(num_of_inputs):
    number = int(input("Enter a number: "))
    nums.append(number)

# Use a for loop to iterate through the list and check divisibility by 3
print("Numbers divisible by 3:")
for num in nums:
    if num % 3 == 0:  # Nested if statement to check divisibility by 3
        print(num)
```

    Numbers divisible by 3:
    3
    6
    9
    12
    15
    18


# PopCorn hack: Find numbers divisible by 2.

<style>
  /* Global styling for the notebook with forest green background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #2e8b57; /* Forest green background */
      color: #ecf0f1; /* Light text */
  }

  /* Styling headers with lighter text and borders */
  h1, h2, h3, h4, h5 {
      color: #ecf0f1; /* Light text for headings */
      border-bottom: 2px solid #66cdaa; /* Lighter green for borders */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #3b6b4b; /* Darker forest green for inline code */
      color: #e74c3c; /* Red code color */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b4d3a; /* Dark forest green for code blocks */
      color: #f1f1f1; /* Light text */
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #66cdaa; /* Lighter green border */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #f92672; /* Keywords in red */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a6e22e; /* Strings in green */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #e6db74; /* Function titles in yellow */
  }

  .hljs-variable, .hljs-template-variable {
      color: #fd971f; /* Variables in orange */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #75715e; /* Comments in gray */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #ae81ff; /* Numbers in purple */
  }

  .hljs-meta {
      color: #66d9ef; /* Meta in light blue */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in forest green */
  blockquote {
      border-left: 4px solid #66cdaa; /* Lighter green border */
      padding-left: 10px;
      color: #ecf0f1; /* Light text */
      font-style: italic;
      background-color: #2f4f4f; /* Darker green background */
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #f39c12; /* Orange for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #228b22; /* Strong forest green */
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
      color: #f39c12; /* Orange on hover */
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
      background-color: #34495e;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #228b22; /* Forest green for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #1abc9c;
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #16a085;
  }
</style>
