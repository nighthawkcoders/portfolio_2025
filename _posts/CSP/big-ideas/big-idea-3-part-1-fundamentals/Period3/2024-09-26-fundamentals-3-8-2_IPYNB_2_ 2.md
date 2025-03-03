---
toc: False
comments: True
layout: post
title: 3.8.2 Use While loops to print strings with booleans
description: Learn to use while loops to repeat code
permalink: /csp/big-idea/p3/3-8-2
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

# Basic Overview
- A **while loop** is a programming structure that allows us to execute a block of code repeatedly as long as a condition is true.
- This can be particularly useful for counting or accumulating values.
- In this example, we will use a while loop to display messages a specific number of times.


```python
# count ← 1
# increasing ← TRUE
#
# WHILE increasing IS TRUE:
#     DISPLAY count
#     count ← count + 1
#     IF count IS GREATER THAN 5:
#         increasing ← FALSE
# END WHILE
#
# WHILE increasing IS FALSE:
#     count ← count - 1
#     DISPLAY count
#     IF count IS EQUAL TO 1:
#         increasing ← TRUE
# END WHILE


i = 1  # Start counting from 1
increasing = True  # Initialize the boolean flag

# Count up from 1 to 5
while increasing:
    print(i)
    i += 1
    if i > 5:
        increasing = False  # Stop increasing once 5 is reached

# Count down from 5 to 1
while not increasing:
    i -= 1
    print(i)
    if i == 1:
        increasing = True  # Reset once 1 is reached

#Problem:
#Use a boolean value to indefinitely print a string, or a message of your personal choice.


```

    1
    2
    3
    4
    5
    5
    4
    3
    2
    1


# What's Happening:
- A **while loop** is a control structure that allows us to execute a block of code repeatedly as long as a specified condition is true.
- In this example, we start with a variable **count** set to 1 and continue looping until **count** exceeds 3.
- Each time the loop executes, it displays a message that includes the current value of **count** and then increments **count** by 1.
- This method can be useful for tasks like counting, accumulating values, or running a block of code until a certain condition changes.
- If the condition never changes (e.g., if the loop's terminating condition is never met), it can lead to an **infinite loop**, which continuously runs the code without stopping.


# Additional Notes:
- **Infinite Loop:** It's important to ensure that the condition in the while loop will eventually become false; otherwise, you may create an infinite loop that never stops running.
- **Control Flow:** While loops can help manage the flow of your program, especially in cases where you do not know in advance how many times you need to repeat a task.
- **Common Use Cases:** While loops are often used in scenarios like reading data until the end of a file, processing user input until a specific command is given, or performing actions until a desired outcome is achieved.
