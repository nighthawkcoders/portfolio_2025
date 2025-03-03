---
toc: False
comments: True
layout: post
permalink: /csp/big-idea/p3/3-3-1
title: 3.1 Mathematical Expressions; Mathematical Operations
description: Student led teaching on  Mathematical Expressions. Learn how mathematical expressions involve using arithmetic operators (like addition, subtraction, multiplication, and division) to perform calculations
author: Wyatt Z, Luke S
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


# Mathematical Operations

# Understanding Mathematical Operations in Code

Mathematical operations are fundamental to programming, enabling us to perform calculations, manipulate data, and solve complex problems. Here’s a quick overview of how these operations work in code.

## Basic Operations

1. **Addition (+)**: Combines values.
   ```python
   result = 5 + 3  # result is 8
    ```

2. **Subtraction (-)**: Calculates the difference.
    ```python
    result = 10 - 4  # result is 6
    ```

3. **Multiplication (*)**: Scales a value.
    ```python
    result = 7 * 6  # result is 42
    ```

4. **Exponentiation (^)**: Raising a number to a power can be done using the `**` operator.
    ```python
    result = 2 ** 3  # result is 8
    ```

5. **Modulus (%)**: Finds the remainder of division.
    ```python
    result = 10 % 3  # result is 1
    ```
