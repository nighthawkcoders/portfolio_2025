---
toc: False
comments: True
layout: post
title: 3.8.6 Iterating over a created list using loops
description: Learn how to iterate over a list.
permalink: /csp/big-idea/p3/3-8-6
author: Nikhil
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


## Basic Overview:
- We create a list of numbers: `[1, 2, 3, 4, 5]`.
- A `for` loop iterates over each item in the list.
- The loop prints each item in the list.

## What's Happening:
In this lesson, we learn how to iterate over a list using loops. A list is a collection of items, and a loop allows us to access each item one by one. In this example, we use a `for` loop to iterate over a list of numbers, and the loop prints each number from the list. The same concept can be applied to any collection, such as a list of favorite foods, which you can display using a loop.


```python
# Pseudocode:
# numbers ← [1, 2, 3, 4, 5]
# FOR EACH number IN numbers:
#     DISPLAY number
# END FOR

# Python Code:
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    print(number)

#Problem: Looping Through a List
#Create a list of your three favorite foods. Write a loop to display each food item in the list.

```

    1
    2
    3
    4
    5


# Homework Hack:

You are tasked with writing a simple Python script that uses a for loop to iterate through a list of numbers and print each number.

Requirements:

Write a for loop to iterate through the given list of numbers.
Print each number as you iterate through the list.
Input: Use the list of numbers: [1, 2, 3, 4, 5]

Expected Output: You should print each number from the list.


```python
#Sample Answers:

numbers = [1, 2, 3, 4, 5]
for number in numbers:
    print(number)

```

    1
    2
    3
    4
    5


## Additional Notes:
- **Lists**: A list is a sequence of items stored together in a single variable. You can store numbers, strings, or even other lists inside a list.
- **For Loop**: The `for` loop is commonly used to iterate over elements in a collection, such as a list. This loop automatically moves through the collection, one item at a time, until all items have been processed.
- **Use Case**: Iterating over a list is helpful when you need to perform the same operation on each item, like printing, modifying, or checking conditions.
