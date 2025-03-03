---
toc: False
comments: True
layout: post
title: 3.2 Data Abstraction - Hacks and Homework
description: Here, you will learn how to represent a list or string using a variable, generalize data sources through variables, use abstraction to manage complexity in a program, and explain how abstraction manages complexity.
permalink: /csp/big-idea/p3/3-2/
author: Gabriela, Jowan, Michelle
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
      border-bottom: 2px solid #2ecc71; /* Emerald green */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #27ae60; /* Darker green */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2ecc71; /* Updated border color to emerald green */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #2ecc71; /* Keywords now green */
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

  /* Highlight blockquotes in green */
  blockquote {
      border-left: 4px solid #27ae60; /* Dark green */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #27ae60; /* Green color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #2ecc71; /* Emerald green */
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
      color: #27ae60; /* Green on hover */
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
      background-color: #345e40;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #2ecc71; /* Green for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #2ecc71; /* Green links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #27ae60; /* Dark green on hover */
  }
</style>


Data types are classifications that specify what kind of data a variable can hold. In programming, knowing and using the right data types is critical for processing data accurately. In this lesson, we are going over strings, lists, integers, floating-point numbers, tuples, dictionaries, booleans, and sets. These different data types allow computers to represent real-world information (e.g., using strings to store text, integers for counting, booleans for binary conditions).

<h1>
Homework Rubric
</h1>

| Criteria               | Excellent (.95 points)                                               | Good (.90 points)                        | Fair (.80 points)                         | Needs Improvement (.70 points)            | Unacceptable (.50 points)                    |
|------------------------|-------------------------------------------------------------------|----------------------------------------|-----------------------------------------|-----------------------------------------|------------------------------------------|
| **Understanding**       | Demonstrates a thorough understanding of the topic                | Shows good understanding, with minor errors | Shows basic understanding, but lacks depth | Shows limited understanding with major errors | Fails to show any understanding of the topic |
| **Completeness**        | All parts of the assignment are fully completed                   | Most parts completed, with minor omissions | Some parts are missing or incomplete      | Several parts missing or incomplete       | Assignment is largely incomplete          |
| **Accuracy**            | All answers are correct and fully justified                       | Most answers are correct, with good justification | Some correct answers, but lacks clear justification | Few correct answers, with little justification | Almost all answers are incorrect          |
| **Presentation**        | Well-organized, neat, and easy to read                            | Neatly presented, but with minor formatting issues | Presentation is somewhat disorganized   | Poor organization, difficult to follow  | Presentation is messy and hard to read    |
| **Timeliness**          | Submitted on time or early                                        | Submitted on time                      | Submitted within 1 day of the deadline  | Submitted 2-3 days after the deadline   | Submitted more than 3 days late           |

