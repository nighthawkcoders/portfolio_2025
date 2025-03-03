---
toc: False
comments: True
layout: post
title: 3.7.1 Intro To Nested Conditionals
permalink: /csp/big-idea/p3/3-7-1
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
      border-bottom: 2px solid #9b59b6; /* Amethyst purple */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #8e44ad; /* Deep purple */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #9b59b6; /* Updated border color to amethyst */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #9b59b6; /* Keywords now purple */
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

  /* Highlight blockquotes in purple */
  blockquote {
      border-left: 4px solid #8e44ad; /* Deep purple */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #8e44ad; /* Purple for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #9b59b6; /* Amethyst purple */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #f39c12; /* Orange links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #8e44ad; /* Purple on hover */
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
      background-color: #48345e;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #9b59b6; /* Purple for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #9b59b6; /* Purple links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #8e44ad; /* Dark purple on hover */
  }
</style>


## NESTED CONDITIONALS

What are nested conditionals?
   Answer: Conditionals inside of conditionals!

Why are they useful?
   Answer: Nested conditionals are useful when you need to check multiple conditions before performing an action.  They allow you to create complex logic flows.

Can you think of some examples? Let's cover them!

## PSUEDOCODE

Let's start nice and simple. We'll lay out the logic of the nested conditionals using words. The goal is to display number that integers and greater than 1.

### if the number entered has a decimal, then it will not be displayed (exit loop)
### if the number the number is less than 0,  then it will not be displayed (exit loop)
### else: display the number on the screen!
