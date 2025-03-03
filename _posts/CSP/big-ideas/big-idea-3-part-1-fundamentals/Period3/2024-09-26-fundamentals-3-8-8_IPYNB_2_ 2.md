---
toc: False
comments: True
layout: post
title: 3.8.8 Breaking loops by checking for conditions
description: Learn to break loops using conditional statements, and the continue function.
permalink: /csp/big-idea/p3/3-8-8
author: Nikhil
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

## Basic Overview:
This lesson introduces the use of `break` and `continue` in loops to control the flow of iteration. The `break` statement is used to exit a loop prematurely when a specific condition is met, while the `continue` statement skips over certain iterations without terminating the loop. The lesson also covers handling errors in loops, such as division by zero or operations on incompatible data types, using `try` and `except` blocks.



```python
#numbers ← [1, 2, 3, 4, 5]
#FOR EACH num IN numbers:
 
#    IF num EQUALS 3:
#        CONTINUE
#    IF num EQUALS 5:
#       BREAK 
#    DISPLAY num
#END FOR


# Example 8: For loop with continue and break
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        continue  # Skip the number 3
    if num == 5:
        break  # Exit the loop when 5 is encountered
    print(num)

    


```

    1
    2
    4



```python
#Possible homework answer:

numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        continue  # Skip the number 3
    if num == 5:
        break  # Exit the loop when 5 is encountered
    print(num)

```

# Homework Hack

You are given a list of numbers, and your task is to write a Python script that iterates through the list and applies the following rules:

Skip over the number 3 and do not print it.
Stop the loop completely once the number 5 is encountered.
Print the remaining numbers that follow these rules.
Requirements:

Use a for loop to iterate through the list.
Use an if condition with continue to skip the number 3.
Use an if condition with break to exit the loop when the number 5 is encountered.
Print the numbers that are not skipped or cause the loop to break.
Input: The given list is: [1, 2, 3, 4, 5]

Expected Output: You should print all numbers except 3 and stop printing after 5.

## What's Happening:
In the first part of the code, the `for` loop iterates over the list `[1, 2, 3, 4, 5]`. The `continue` statement skips the number 3, so it doesn't get printed, and the `break` statement stops the loop when the number 5 is encountered, preventing any further iteration. As a result, only the numbers 1 and 2 are printed before the loop breaks.

In the second part of the code, the `for` loop processes each element in the `numbers` list, attempting to divide 10 by each element. If the element is a number, the division occurs. If the element is 0, it triggers a `ZeroDivisionError`, and the program prints "Division by zero." If the element is a string, such as "three" or "five," it raises a `TypeError`, and the program prints "Type error."

## Additional Notes:
- **Breaking Loops**: The `break` statement allows for early exit from a loop when a specific condition is met, such as encountering a certain value in the loop.
- **Skipping Iterations**: The `continue` statement skips the current iteration and moves to the next one, useful when you want to bypass certain values or conditions in a loop.
- **Error Handling**: Using `try` and `except` blocks in loops ensures that even if an error occurs (e.g., division by zero or a type mismatch), the program won't crash, and the error can be handled gracefully.
- **Common Use Cases**: `break` and `continue` are often used in cases where you want more control over the loop's flow, such as skipping unnecessary steps or stopping the loop under specific conditions. Error handling in loops is useful when processing user input or handling data from diverse sources.

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

