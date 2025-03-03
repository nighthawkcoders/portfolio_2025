---
toc: False
comments: True
layout: post
title: 3.8.4 While Loops
description: Learn to use while loops to repeat code
permalink: /csp/big-idea/p3/3-8-4
author: Hithin
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

# Basic Overview:
- A **while loop** is a control structure that repeatedly executes a block of code as long as a specified condition remains true.
- This type of loop is particularly useful for tasks like counting, accumulating values, or continuing until a particular condition is met.
- In this lesson, the while loop is demonstrated to display a message with a count from 1 to 3.


```python
# In this example, we will use a while loop to display letters from 'A' to 'E' and calculate their corresponding ASCII values.

# Pseudocode:
# count ← 1
# WHILE count IS LESS THAN OR EQUAL TO 3:
#     DISPLAY "This is message number" count
#     count ← count + 1
# END WHILE


# Python Code:
count = 1  # Start counting from 1
while count <= 3:  # Continue while count is 3 or less
    print("This is message number", count)  # Display the current message number
    count += 1  # Increment count by 1

#Problem: Infinite Loop with a While Statement
#Write a while loop that continuously prints "Hello, World!" until you stop the program.

```

    This is message number 1
    This is message number 2
    This is message number 3


# What's Happening:
- We start with the variable **count** set to 1.
- The loop checks if **count** is less than or equal to 3, and as long as this condition is true, the code inside the loop runs.
- On each iteration, the current message number is printed, and **count** is incremented by 1.
- Once **count** exceeds 3, the condition becomes false, and the loop terminates.

# Additional Notes:
- **Infinite Loops:** Care must be taken to ensure that the condition in the loop will eventually become false; otherwise, it could result in an infinite loop that never stops.
- **Practical Use Cases:** While loops are great for situations where the number of iterations isn't known ahead of time, like reading data until the end of a file or waiting for specific user input.
- **Common Pitfall:** A common mistake is forgetting to update the loop control variable (like **count** in this case), which can cause an infinite loop if the condition never becomes false.
