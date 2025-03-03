---
toc: False
comments: True
permalink: /csp/big-idea/p3/3-5-1
layout: post
title: 3.5 Booleans; De Morgan's Law (Period 3)
description: Student led teaching on Booleans. Learn how booleans are used in decision-making with logical operators.
author: Trevor V
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


# De Morgan's Law

#### According to De Morgan's first law, the complement of the union of two sets A and B is equal to the intersection of the complement of the sets A and B

## Examples:


> "I don't like chocolate or vanilla" **=** "I do not like chocolate and I do not like vanilla" 

`In this example, both statements are logically the same`


![De Morgan's Law](https://blog.penjee.com/wp-content/uploads/2016/12/demorgans-law-formula_all.png)


# De Morgans Law in Code!

## Javascript Example:


```javascript
%%javascript

let x = 19;
let y = 50;

// ! means not. So !true is false.

// || means OR.
if (!(x > 20 || y > 20)) {
    console.log("I am the same condition as the one below!")
    //This will not be true since x is less than 20
}

// && means AND.
if (!(x > 20) && !(y > 20)) {
    console.log("I am the same condition as the one above!")
    //This will also not be true since x is less than 20
}

x = 50
y = 100

if (!(x < 20 || y < 20)) {
    console.log("I will be true since both is also greater than 20 now!")
    //This WILL be true since both variables are greater than 20
}

// && means AND.
if (!(x < 20) && !(y < 20)) {
    console.log("I am the same condition as the one above!")
    //This WILL be true since both variables are greater than 20
}


// In all, not(X OR Y) is the same as (not(x) AND not(Y))
```


    <IPython.core.display.Javascript object>


## Python Example:


```python
x = 19
y = 50

if not (x > 20 or y > 20):
    print("Im not gonna be true since X is less than 20")
    # This will not be true since x is less than 20

if not (x > 20) and not (y > 20):
    print("I am the same condition as the one above!")
    # This will also not be true since x is less than 20

x = 50
y = 100

if not (x < 20 or y < 20):
    print("I will be true since both x and y are greater than 20 now!")
    # This WILL be true since both variables are greater than 20

if not (x < 20) and not (y < 20):
    print("I will also be true since both x and y are greater than 20 now!")
    # This WILL be true since both variables are greater than 20

# In all, not(X OR Y) is the same as (not(X) AND not(Y))
```

    I will be true since both x and y are greater than 20 now!
    I will also be true since both x and y are greater than 20 now!

