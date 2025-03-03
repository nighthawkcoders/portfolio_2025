---
toc: False
comments: True
layout: post
title: 3.8.7 Iterating over a list using loops and printing a message
description: Learn how to iterate over a list/dictionaryand then print a message afterwards.
permalink: /csp/big-idea/p3/3-8-7
author: Nikhil
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

## Basic Overview:
- **Lists**: We loop through a list of colors, printing each color.
- **Dictionaries**: We loop through a dictionary of fruits, where the key is the fruit name and the value is the quantity. The loop prints both the fruit name and quantity.


```python
# In programming, loops are used to iterate over collections of data, such as lists or dictionaries.
# This allows us to perform operations on each item without manually writing repetitive code.
# In this example, we will iterate over a list of colors and a dictionary containing fruit details.

# Pseudocode:
# colors ← ["red", "blue", "green", "yellow"]
# FOR EACH color IN colors:
#     DISPLAY color
# END FOR


# Example 1: Loop through a list of colors
colors = ["red", "blue", "green", "yellow"]
for color in colors:
    print(color)  # Display each color

# Example 2: Loop through a fruit dictionary
fruits = {"apple": 3, "banana": 5, "cherry": 7}  # Number of each type of fruit
for fruit, quantity in fruits.items():
    print(fruit, ":", quantity)  # Display each fruit and its quantity

    #Problem: Looping Through a List
    #Create a list of your three favorite foods. Write a loop to display each food item in the list.

    
```

    red
    blue
    green
    yellow
    apple : 3
    banana : 5
    cherry : 7


# Homework Hack:

You are tasked with solving two exercises involving loops in Python. The goal is to understand how to iterate through different types of collections (lists and dictionaries) and print their contents.

Requirements:

Exercise 1:
Write a for loop to iterate through a list of colors and print each color.
Exercise 2:
Write a for loop to iterate through a dictionary of fruits where the keys represent the type of fruit, and the values represent the quantity of each fruit. Print the fruit's name and its corresponding quantity in the format: "fruit_name : quantity".
Input:

For the first exercise, use the list of colors: ["red", "blue", "green", "yellow"]

For the second exercise, use the dictionary of fruits: {"apple": 3, "banana": 5, "cherry": 7}

Expected Output: You should print each color from the list, and each fruit with its quantity from the dictionary.




```python
#Sample answers:

# Example 1: Loop through a list of colors
colors = ["red", "blue", "green", "yellow"]
for color in colors:
    print(color)  # Display each color

# Example 2: Loop through a fruit dictionary
fruits = {"apple": 3, "banana": 5, "cherry": 7}  # Number of each type of fruit
for fruit, quantity in fruits.items():
    print(fruit, ":", quantity)

```

    red
    blue
    green
    yellow
    apple : 3
    banana : 5
    cherry : 7


## What's Happening:
In the first example, the `for` loop iterates over each element in the `colors` list. The loop goes through the list one by one, and each color is printed to the console. The loop ends after all the colors ("red," "blue," "green," and "yellow") are displayed.

In the second example, the `for` loop iterates over the key-value pairs in the `fruits` dictionary using the `.items()` method. The loop prints the fruit name (key) along with its quantity (value). For each fruit in the dictionary—apple, banana, and cherry—the loop prints the name of the fruit followed by its quantity, such as "apple: 3" and so on.

<script src="https://utteranc.es/client.js"
        repo="nikhilsna/Sprint2_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

## Additional Notes:
- **List Iteration**: Using a `for` loop allows us to access and perform actions on each element in a list. This is useful when you have a collection of similar data, like colors or items in a store.
- **Dictionary Iteration**: In a dictionary, a `for` loop iterates over key-value pairs using `.items()`. This is particularly useful for tasks where you need to manage related data, such as inventory lists (fruit and quantity).
- **Use Cases**: Looping over collections like lists and dictionaries is common in scenarios where you need to analyze data, summarize content, or automate tasks that involve processing multiple items.

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

