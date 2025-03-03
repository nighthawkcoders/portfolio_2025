---
toc: False
comments: True
layout: post
title: 3.1.2 Python Hacks
description: Get ready to test your knowledge on variables with this homework.
permalink: /csp/big-idea/p3/3-1-2
author: Ahaan Vaidyanathan, Spencer Lyons, Vasanth Rajasekaran, Xavier Thompson
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
 border-bottom: 2px solid #f1c40f;
 padding-bottom: 5px;
 margin-bottom: 15px;
 }

 /* Custom style for inline code */
 code {
 background-color: #34495e;
 color: #e74c3c;
 padding: 2px 5px;
 border-radius: 4px;
 }

 /* Custom style for preformatted code blocks */
 pre {
 background-color: #2b2b2b;
 color: #f1f1f1;
 padding: 10px;
 border-radius: 5px;
 border: 1px solid #f1c40f; /* Updated border color */
 overflow-x: auto;
 }

 /* Code block syntax highlighting */
 .hljs-keyword, .hljs-selector-tag, .hljs-subst {
 color: #f92672; /* Keywords */
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

 /* Highlight blockquotes in orange */
 blockquote {
 border-left: 4px solid #f39c12;
 padding-left: 10px;
 color: #ecf0f1;
 font-style: italic;
 background-color: #2d2d2d;
 padding: 10px;
 border-radius: 4px;
 }

 /* Styling for emphasized text */
 em {
 color: #f39c12; /* Orange color for emphasized text */
 font-style: italic;
 }

 /* Style for bold text */
 strong {
 color: #ecf0f1;
 font-weight: bold;
 }

 /* Menu styling */
 .menu {
 background-color: #f1c40f;
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
 background-color: #5e5e34;
 }
 
 table, th, td {
 border: 1px solid #7f8c8d;
 padding: 8px;
 color: #ecf0f1;
 }

 th {
 background-color: #f1c40f;
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


### Hack 1: Types of Variables
Write a Python program that assigns a variable and changes its value type multiple times. Use the type() function to track and print the type of the variable after each reassignment.



```python
# Step 1: Initialize the variable
# Your code here

# Step 2: Reassign a new type
# Your code here

# Step 3: Reassign to another type
# Your code here

# Step 4: Reassign to a boolean
# Your code here

```

### Hack 2: Variable Swapping

Swap the values of two variables without using a third (temporary) variable.


```python
# Step 1: Initialize variables
a = 5
b = 10

# Step 2: Swap values without using a temporary variable
# Your code here

# Step 3: Print the swapped values
print("a =", a)
print("b =", b)
```

### Hack 3: Variables in Memory

Create a Python program that assigns the same value to two different variables, and then check if they point to the same memory address. Use the id() function for comparison.


```python
# Step 1: Assign the same value to two variables
# Your code here

# Step 2: Compare memory addresses
# Your code here

# Step 3: Print whether they are stored at the same location
# Your code here
```
