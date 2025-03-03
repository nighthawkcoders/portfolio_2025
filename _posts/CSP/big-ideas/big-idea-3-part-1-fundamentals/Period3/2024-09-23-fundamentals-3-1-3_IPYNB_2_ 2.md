---
toc: False
comments: True
layout: post
title: 3.1.3 Javascript Variables
description: Let's learn how variables work in Javascript
permalink: /csp/big-idea/p3/3-1-3
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
 border-bottom: 2px solid #f1c40f;
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
 border: 1px solid #f1c40f; /* Updated border color */
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
 background-color: #f1c40f;
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
 background-color: #5e5e34;
 }
 
 table, th, td {
 border: 1px solid #7f8c8d;
 padding: 8px;
 color: #ecf0f1;
 }

 th {
 background-color: #f1c40f;
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


### Variables
Variables are containers that are used to store data in programming languages. In JavaScript there are 3 ways to declare a variable.
1. var
2. let
3. const

var is an outdated way of declaring variables, and so we will disregard teaching it as you will only use let and const.

Const: Use when the variable shouldn't be reassigned.
Let: Use when the variable's value may change over time.


```
%%js

//Pi and user variables don't change
const pi = 3.14159265358979;
const user = "Spencer";

//Count variable is being updated
let count = 0;
for (let i = 0; i < 10; i++) {
    console.log(i)
}
```

### Assignment Operator
JavaScript's assignment operator is equal (=) which assigns the value of the thing to the right to equal the variable to the left. The equal sign shouldn't be confused as equality, as it's exclusively reserved for assignment in programming languages.

> **==** is used to test equality between two things


```
%%js 
let x = 5
let y = 3
let z = 2
```

### Variable Naming
There are some limitations when it comes to naming variables in JavaScript
1. The name can only contain letters, digits, or the symbols $ and _.
2. The variable musn't start with a digit

Examples of valid & invalid variable names:


```
%%js 

//Valid variable names
let color;
let _favoriteColor;

//Invalid  variable names
let 123badVariable;
let my-age;


```

### Naming Conventions

When naming variables, it's an important skill to make clear, concise, and meaningful variable names. This will help your peers and your future self.

Here are some guidelines to follow:

- Use clear, human-readable names like `userName` or `shoppingCart`.
- Avoid using cryptic abbreviations or single-letter names like `a`, `b`, or `c`, unless it’s absolutely clear what they mean.
- Strive for names that are both descriptive and to the point. Generic names like `data` or `value` don’t provide much insight.
- Stick to consistent terminology. If you refer to someone on your site as a “user,” stay consistent with terms like `currentUser` or `newUser` instead of changing it up with something like `currentVisitor`.

Here are some examples:


```
// BAD: unclear and too generic
let a = 30;
let data = "John Doe";
let value = true;

// GOOD: descriptive and clear
let userAge = 30;
let userName = "John Doe";
let isUserLoggedIn = true;

// BAD: abbreviations and short names
let usrNm = "Jane";
let c = 100;
let t = new Date();

// GOOD: human-readable and consistent
let customerName = "Jane";
let cartTotal = 100;
let currentDate = new Date();

// BAD: inconsistent terminology
let visitorId = 123;
let currentVisitor = "John";
let siteMember = "Jane";

// GOOD: consistent and concise
let userId = 123;
let currentUser = "John";
let newUser = "Jane";

```

### Further Study on Coding Conventions

To deepen your understanding of variables and coding conventions, you can explore the following resource:

- [**JavaScript Naming Conventions**](https://www.w3schools.com/js/js_conventions.asp)

Click the button below to directly access the tutorial:

[![JavaScript Conventions](https://img.shields.io/badge/Explore%20JavaScript%20Conventions-green)](https://www.w3schools.com/js/js_conventions.asp)

