---
toc: False
comments: True
layout: post
title: 3.4.1 Python Strings
description: This is  a student-led taught lesson on strings, here you'll learn some major concepts from Big Idea 3
permalink: /csp/big-idea/p3/3-4-1
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


## Introduction to Strings
Strings in Python & in programming languages in general are a way of storing data that is text.

Strings are always surrounded with single or double quotes. Both have the same effect, but stick with the one you choose to use.


```python
print("Welcome")
print("Hello!")
print("124")
```

    Welcome
    Hello!
    124


Did you see that? We can have numbers as strings too! So long as a number is encapsulated in quotations, then it's considered to be a str and not a int or a float, which are the data types usually associated to numbers.

### Popcorn Hack 1

This will be the first popcorn hack worth 25 on your grade on this lesson. Each Popcorn hack is 25%

-Create three strings in python and print your result
-Reflect, did you have any errors?

### Concatenation
One of the main things that can be done with strings is connecting them together, formally known as concatenation.


```python
print("Hello, " + "World!")
print("1" + "2" + "3")
```

    Hello, World!
    123


While in the examples above, the reason why we would concatenate isn't made clear, the reason concatenation is so useful is when we have two or more variables that may not be statically defined, we can combine them together to form a cohesive string.


```python
x = input("What's your first name?")
y = input("what's your last name?")
print("Your name is: " + x + " " + y)
```

    Your name is: Ahaan Vaidyanathan


### Popcorn Hack 2

- Try the string concatenation with your own name!
- Change/add more about yourself as a challenge to you concatenation

### Repetition / Multiplication
A really cool feature of python that isn't avaliable in other languages is it's ability to multiply strings like you would with an integer.


```python
#Repetition
color = "Green"
repeat_color = color * 3
print(repeat_color)
```

    GreenGreenGreen


The usage of multiplying text in Python isn't used in most circumstances, but when it comes to making something artistic of out text (ASCII Art), then this feature of python may come in handy later on.

### Indexing
Indexing is the process of accessing a specific char (or sequence of chars) in a string. Each character in a string is assigned two numbers that is used to identify its position in a string. Take the following string:

"HELLO"
> When indexing, it's best to look at HELLO from its constituent parts.

```
['H'] ['E'] ['L'] ['L'] ['O']
```

Intutively, we would imagine that H would be assigned 1 as its the first character, however an important fact to note is in programming, we start counting at 0. So H would be assigned 0, E would be assigned 1, and so on.


```python
# Stored String
greeting = "HELLO"

#Indexes
print(greeting[0])
print(greeting[4])
print(greeting[3])
print(greeting[1])
```

    H
    O
    L
    E


However, as mentioned before, characters in a string are assigned two numbers which can be used to index them from the string. Positive numbers & negative ones. The negative ones allow you to start at the end of the string instead.


```python
# Stored String
greeting = "HELLO"

print(greeting[-1])
print(greeting[-5])
```

    O
    H


<!-- #### HACK #1
Use the ability to index strings to create a program that checks whether or not a word is a palindrome.

Expected outputs:
- If Palindrome: True
- If not Palindrome: False -->

### String Slicing
String slicing is a expanded version of indexing, which instead of taking only one character, we can take multiple characters in a string.

Bellow illustrates how this can be done:


```python
element = "Hydrogen"
print(element[0:5])
```

    Hydro


To index a section you begin with the starting character (0) and end with the index of the last character + 1.

In this case of 0:5, 0 is inclusive (the character with index 0 is included), while 5 is exclusive (the character with index 5 is excluded). So that's why the character , "g" which has an index of 5 isn't included despite being a part of the slice 0:5

This is essentially the basics in which you can do to index anything but there are some important concepts to note:


```python
element = "Lithium"

# Specify an entire String
print(element[:])

# Reverse a String
print(element[::-1])

# Indexing a character after every x number of characters
print(element[1::2])

```

    Lithium
    muihtiL
    ihu


### String Methods
String Methods are functions that can change or manipulate a string in a variety of ways.

Here are some common methods:


```python
name = "vasanth"
country = "Democratic Republic of the Congo"

# Capitalizes first letter
print(name.capitalize())

# UPPERCASE string
print(name.upper())

# lowercase string
print(name.lower())

# Count # of characters in string
print(len(name))

# # swaps the case of all characters in the string
# upper case character to lowercase and viceversa
print(country.swapcase())
```

    Vasanth
    VASANTH
    vasanth
    7
    dEMOCRATIC rEPUBLIC OF THE cONGO


There are many more strings methods that can be utilized, many of which that can be found on external sites.

### Further Study on Strings

To learn more about handling strings in Python, check out the following resource:

Click the button below to directly access the tutorial:

[![Python Strings](https://img.shields.io/badge/Explore%20Python%20Strings-blue)](https://www.w3schools.com/python/python_strings.asp)


