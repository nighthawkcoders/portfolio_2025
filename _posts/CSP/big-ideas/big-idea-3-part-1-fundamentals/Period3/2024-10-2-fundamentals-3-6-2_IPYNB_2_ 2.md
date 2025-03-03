---
toc: False
comments: True
layout: post
title: 3.6.2 Simple Javascript Conditionals
permalink: /csp/big-idea/p3/3-6-2
author: Zoe, Avika, Rutvik, Jonah, Aarush
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
      border-bottom: 2px solid #e74c3c; /* Updated to red */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #c0392b; /* Updated to dark red */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #e74c3c; /* Updated border color to red */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #e74c3c; /* Keywords now red */
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

  /* Highlight blockquotes in red */
  blockquote {
      border-left: 4px solid #c0392b;
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #c0392b; /* Red color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #e74c3c; /* Updated to red */
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
      color: #c0392b; /* Red on hover */
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
      background-color: #5e3a34;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #e74c3c; /* Updated to red */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #e74c3c; /* Updated to red */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #c0392b; /* Dark red on hover */
  }
</style>


## Testing Your Skills (Hack #1)

### How Conditionals Work: if statement: The condition inside the if block checks if the score is greater than or equal to 90.  If true, it runs the block of code that prints "A".
### else if statement: This checks another condition if the first if statement is false. Each else if provides an additional condition to check, such as whether the score is between 80 and 89. 
### else statement: The else block runs if none of the previous conditions are true. This is the fallback case, which in this example applies to any score below 70.


```python
function getGrade() {
    let score = prompt("Enter the score (0-100):");
    score = Number(score);  // Convert input to a number
  
    if (score >= 90) {
      console.log("A");
    } else if (score >= 80) {
      console.log("B");
    } else if (score >= 70) {
      console.log("C");
    } else {
      console.log("F");
    }
  }
  
  // Call the function to get a grade
  getGrade();
```
