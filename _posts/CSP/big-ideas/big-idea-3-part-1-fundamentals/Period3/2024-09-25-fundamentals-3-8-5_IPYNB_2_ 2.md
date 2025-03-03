---
toc: False
comments: True
layout: post
title: 3.8.5 Nested If Statements
description: Learn what a nested if statement is and does, practice problems for getting familiar with nested if statements
permalink: /csp/big-idea/p3/3-8-5
author: Elliot
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

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


### Basic Overview:

- A **nested if statement** is an if statement placed inside another if, else if, or even a loop.
- You can use nested if statements inside a for loop to perform multiple condition checks.
- A **for loop** iterates through a collection (like a list) and checks various conditions using if statements in each iteration.
- Based on the condition results, the corresponding code is executed.


```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for num in numbers:
    if num % 2 == 0:  # Check if the number is even
        if num > 5:  # Another condition inside the first if statement
            print(num, "is even and greater than 5")
        else:
            print(num, "is even and less than or equal to 5")
    else:  # If it's not even, it must be odd
        print(num, "is odd")

```

    1 is odd
    2 is even and less than or equal to 5
    3 is odd
    4 is even and less than or equal to 5
    5 is odd
    6 is even and greater than 5
    7 is odd
    8 is even and greater than 5
    9 is odd
    10 is even and greater than 5


### Practice Problem
- Here, there are four numbers listed. Using your knowledge of nested if statements, write code that will print the positive numbers in one group and the negative numbers as one group.
- Helpful Hint: the command that checks if a number is negative is "if num<0"


```python
# List of numbers
numbers = [10, -5, 7, -3]

# Your task: Write a loop with nested if statements to print whether each number is positive or negative

```


```python
# <h2> Answer to the Practice Problem </h2>

numbers = [0, -3, 5, -8, 2, 0, 7, -1]
for num in numbers:
    if num == 0:  # Check if the number is zero
        print(num, "is zero")
    else:
        if num > 0:  # Check if the number is positive
            if num % 2 == 0:  # Nested if to check if it's even
                print(num, "is positive and even")
            else:  # If it's not even, it must be odd
                print(num, "is positive and odd")
        else:  # If it's not positive, it must be negative
            print(num, "is negative")
```

    0 is zero
    -3 is negative
    5 is positive and odd
    -8 is negative
    2 is positive and even
    0 is zero
    7 is positive and odd
    -1 is negative


### What is Happening:
- The code loops through a list of numbers.
- For each number, it first checks if the number is even.
  - If even, it checks if the number is greater than 5.
  - If the number is not greater than 5, it prints that it is even and ≤ 5.
- If the number is odd, it simply prints that the number is odd.

### Additional Notes:
- **Multiple Conditions**: Nested if statements allow you to add layers of condition checks, which is helpful when you want to ensure that several criteria are met before executing certain code.
- **Code Readability**: While nested if statements provide flexibility, too many levels of nesting can make the code harder to read. Always try to keep nesting simple and clear.
- **Real-World Use**: Nested if statements are commonly used in scenarios where decisions need to be made based on multiple criteria, such as filtering or categorizing data.
