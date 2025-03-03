---
toc: False
comments: True
layout: post
title: 3.4.4 Javascript Hacks
description: Complete these hacks to demonstrate your understanding of the content
permalink: /csp/big-idea/p3/3-4-4
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


## Hack 1
A student was instructed to provide a list of ALL the countries in Africa. Your task is to now convert the list, which is provided as a string and convert it to an array.

String:
"Algeria, Angola, Benin, Botswana, Burkina Faso, Burundi, Cabo Verde, Cameroon, Central African Republic, Chad, Comoros, Congo (Congo-Brazzaville), Cote d'Ivoire, Djibouti, DR Congo (Congo-Kinshasa), Egypt, Equatorial Guinea, Eritrea, Eswatini, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guinea-Bissau, Kenya, Lesotho, Liberia, Libya, Madagascar, Malawi, Mali, Mauritania, Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, Rwanda, Sao Tome and Principe, Senegal, Seychelles, Sierra Leone, Somalia, South Africa, South Sudan, Sudan, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe"

**You must complete this hack using a string method**

## Hack 2
Applications that are more personalized are always great to have! Please create a program that prompts the user for their name, age, favorite food, & favorite book. Store all these prompts as variables and then use concatenation or interpolation to make a cohesive message out of these prompts.

To get you started, here's how you can prompt someone in JavaScript: ```prompt("Please enter your name")```

## Hack 3

### Part 1
We received this message from a noisy audio file: `"The...secret...to...life...is...(redacted)"`

There seems to be white noise in between words. Please remove the `...` between the words using a string method.

Expected output: "The secret to life is (redacted)"


### Part 2
Once you figure out how to remove this white noise, we should create a program to remove it from any file! Please create a program that takes user input and can remove the ... that may or may not be in the input.

Example input & output:
- Input: `Hello...World`
- Output: `Hello World`

