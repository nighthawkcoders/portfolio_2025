---
toc: False
comments: True
layout: post
title: 3.4.2 Python Hacks
description: Complete these hacks to demonstrate your understanding
permalink: /csp/big-idea/p3/3-4-2
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
      border-bottom: 2px solid #3498db;
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
      border: 1px solid #3498db; /* Updated border color */
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
      background-color: #2980b9;
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
      background-color: #2980b9;
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


## Hacks / Homework
- Hack 1: Write a Python function that takes a string as input and returns the string reversed.
- Hack 2: Create a Python program that counts the number of vowels ('a', 'e', 'i', 'o', 'u') in a given string.
- Hack 3: Given a string, write a function to replace all occurrences of the substring 'abc' with 'xyz'.
- Hack 4: Write a function that checks if a given string is a palindrome (reads the same forward and backward), ignoring spaces, punctuation, and case.
- Hack 5: Write a program that finds and returns the longest word in a given sentence.

**CHALLENGING QUESTION:**
- Hack 6: Given a string containing both letters and digits, write a function that extracts all the numbers, sums them up, and returns the total.
