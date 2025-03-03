---
toc: False
comments: True
permalink: /csp/big-idea/p3/3-5-3
layout: post
title: 3.5 Booleans; All About Booleans (Period 3)
description: Student led teaching on Booleans. Learn how booleans are used in decision-making with logical operators.
author: Max G, Johan M, Trevor V
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #3e2723; /* Dark brown background */
      color: #efebe9; /* Light beige text for contrast */
  }

  /* Styling headers with lighter brown tones */
  h1, h2, h3, h4, h5 {
      color: #efebe9; /* Light beige for headers */
      border-bottom: 2px solid #795548; /* Medium brown border */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #4e342e; /* Darker brown for code background */
      color: #d7ccc8; /* Light brown for inline code */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #4e342e;
      color: #efebe9;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #795548; /* Medium brown for border */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #bcaaa4; /* Lighter brown for keywords */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a1887f; /* Soft brown for strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #d7ccc8; /* Light brown for titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #8d6e63; /* Darker brown for variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #6d4c41; /* Dark brown for comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #a1887f; /* Soft brown for numbers and built-ins */
  }

  .hljs-meta {
      color: #5d4037; /* Dark brown for meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in medium brown */
  blockquote {
      border-left: 4px solid #8d6e63; /* Medium brown */
      padding-left: 10px;
      color: #efebe9;
      font-style: italic;
      background-color: #4e342e;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #a1887f; /* Soft brown for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #efebe9;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #795548; /* Medium brown */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #d7ccc8; /* Light brown links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #8d6e63; /* Dark brown on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #efebe9;
  }

  /* Styling tables with dark brown theme */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #4e342e;
  }
  
  table, th, td {
      border: 1px solid #6d4c41; /* Dark brown for borders */
      padding: 8px;
      color: #efebe9;
  }

  th {
      background-color: #795548; /* Medium brown for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #a1887f; /* Soft brown links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #8d6e63; /* Dark brown on hover */
  }
</style>


# All About Booleans

# What Are Booleans?
In programming, a Boolean is a data type that can hold one of two values: true or false. These values are used to represent truth values, which are fundamental in controlling the flow of a program.

# Basic Boolean Values
True: Indicates a logically true condition.
False: Indicates a logically false condition.
# Boolean Expressions
A Boolean expression is a statement that evaluates either true or false. Common Boolean expressions often involve comparison or relational operators, such as:

Equal to (==)

Not equal to (!=)

Greater than (>)

Less than (<)

Greater than or equal to (>=)

Less than or equal to (<=)




```javascript
%%javascript

// Example 1: Checking if a boolean is true

const variableA = true;
const variableB = false;

if (variableA) {
    console.log("VariableA is true!");
} else {
    console.log("VariableA is false!");
}

if (variableA && !variableB) {
    console.log("VariableA is true and VariableB is false");
}

if (variableA || variableB) {
    console.log("Either VariableA or VariableB is true");
}

```


    <IPython.core.display.Javascript object>



```javascript
%%javascript

// booleans in javascript
const number = 1;

if (number > 10) {
    console.log("Number is greater than ten!");
} else {
    console.log("Number is not greater than ten!");
}
```


    <IPython.core.display.Javascript object>



```javascript
%%javascript

//Example of using Booleans with numbers in Python

const temperature = 105  
is_hot = temperature > 100 //Boolean expression (WILL BE TRUE)

const number = 50

if (number > 100) {
    console.log("It's a a big number day!")
} else {
    console.log("It's a small number")
}

```


    <IPython.core.display.Javascript object>

