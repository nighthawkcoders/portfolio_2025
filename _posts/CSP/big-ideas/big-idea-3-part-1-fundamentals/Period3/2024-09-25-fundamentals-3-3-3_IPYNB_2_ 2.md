---
toc: False
comments: True
layout: post
permalink: /csp/big-idea/p3/3-3-3
title: 3.3 Mathematical Expressions; Fibonacci Sequence
description: Student led teaching on  Mathematical Expressions. Learn how mathematical expressions involve using arithmetic operators (like addition, subtraction, multiplication, and division) to perform calculations
author: Max G, Johan M
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
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
      border-bottom: 2px solid #ff79c6; /* Bright pink */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #ff6bcb; /* Hot pink */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ff79c6; /* Updated border color to bright pink */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #ff79c6; /* Keywords now pink */
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

  /* Highlight blockquotes in pink */
  blockquote {
      border-left: 4px solid #ff6bcb; /* Hot pink */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #ff6bcb; /* Pink color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #ff79c6; /* Bright pink */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #f8b500; /* Golden yellow links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #ff6bcb; /* Hot pink on hover */
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
      background-color: #5e345d;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #ff79c6; /* Pink for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #ff79c6; /* Pink links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #ff6bcb; /* Hot pink on hover */
  }
</style>


# Fibonacci Sequence Function (Python)


The Fibonacci sequence is the series
of numbers where each number is the sum
of the two preceding numbers before it. 
For example, the terms of the sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...
To get these values you need to add 0+0 to get the first term then 0+1=1 to get the second, then 0+1=1 to get the third term,
then 1+1=2 then 2+1=3 then 3+2=5 infinitley in that order to get the next following terms.
This code is an equation in which you can get these terms without having to perform the necessary calculations. An input leads to an Output.
In this case, term input number will give you a value of the fibonacci sequence corresponding to the term number you inputted earlier.


```python


def fibonacci(n):
    # Handle the base cases. These are also terms that have to be followed by the code.
    if n <= 0:
        # establishing that the variable n cannot equal or be less than 0
        return "Input should be a positive integer."
    
    elif n == 1:
        return 0
    #if n=1 the return is 0... these lines are
    #used becasue that is the first fibbonacci number
    elif n == 2:
        return 1
    #this is the second fibbonacci number
    
    # Start with the first two Fibonacci numbers
    fib_1, fib_2 = 0, 1
    
    # Use an iterative approach to find the nth Fibonacci number. This is the function that models the Fibonacci sequence.
    for i in range(3, n+1):
        fib_next = fib_1 + fib_2
        fib_1, fib_2 = fib_2, fib_next
    #the loop starts at 3 and runs until n variable plus 1
    #fib next is the  sum of previous 2 fibonacci sequnces
    # 
    return fib_2
#when the loop finishes, fib 2 is the nth fibonacci number 
n = 8
result = fibonacci(n)

#you want to end with an output message so you need to use print
print(f"The {n}th Fibonacci number is: {result}")
```

    The 9th Fibonacci number is: 21

