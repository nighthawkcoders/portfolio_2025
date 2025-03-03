---
layout: post
title: Programming Fundamentals - P3
description: An introduction to College Board's Big Idea 3, part one.  This is a collection of Python lessons to help students understand the fundamental algorithm and programming elementes required by College Board's AP Computer Science Principles curriculum.
toc: False
comments: False
permalink: /csp/big-idea/p3/fundamentals
courses: {'csp': {'week': 5}}
type: ccc
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #2c3e50; /* Dark metallic grey */
      color: #ecf0f1; /* Light grey text for contrast */
  }

  /* Styling headers with metallic silver tones */
  h1, h2, h3, h4, h5 {
      color: #ecf0f1; /* Light grey for headers */
      border-bottom: 2px solid #bdc3c7; /* Light silver */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e; /* Darker metallic grey */
      color: #95a5a6; /* Soft metallic silver */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #34495e;
      color: #ecf0f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #bdc3c7; /* Light silver for border */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #bdc3c7; /* Light silver for keywords */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a3a3a3; /* Medium metallic silver for strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #d0d0d0; /* Brighter silver for titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #7f8c8d; /* Dark grey for variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #95a5a6; /* Soft metallic silver for comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #e0e0e0; /* Bright metallic for numbers and built-ins */
  }

  .hljs-meta {
      color: #7f8c8d; /* Dark grey for meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in metallic grey */
  blockquote {
      border-left: 4px solid #95a5a6; /* Soft metallic grey */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #34495e;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #bdc3c7; /* Light silver for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #7f8c8d; /* Dark metallic grey */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #d0d0d0; /* Bright silver links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #bdc3c7; /* Soft silver on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #ecf0f1;
  }

  /* Styling tables with metallic tones */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #54585c;
  }
  
  table, th, td {
      border: 1px solid #95a5a6; /* Soft metallic grey for borders */
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #7f8c8d; /* Dark metallic grey for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #bdc3c7; /* Light silver links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #d0d0d0; /* Brighter silver on hover */
  }
</style>


## Algorithms and Programming
Welcome to the exciting world of Computer Science!

### What you will learn

College Board Big Idea 3 is divided into two parts.

#### Part 1 - Fundamentals (This unit)
In this unit, you will cover the foundational concepts of programming, including:
- 3.1 Variables
- 3.2 Data Abstraction
- 3.3 Mathematical Expressions
- 3.4 Strings
- 3.5 Booleans
- 3.6 Conditionals
- 3.7 Nested Conditionals
- 3.8 Iteration
- 3.10 Lists

#### Part 2 - Core Concepts (Next unit)
In the next unit, you will delve into more complex topics, such as:
- 3.9 Developing Algorithms
- 3.11 Search
- 3.12 Calling Procedures
- 3.13 Developing Procedures and Procedural Abstraction
- 3.14 Libraries
- 3.15 Random Values
- 3.16 Simulations
- 3.17 Algorithmic Efficiency
- 3.18 Undecidable Problems

### Why it matters

Understanding algorithms and programming is fundamental to your AP CSP class and your AP Exam Project called the "Create Performance Task". 

These concepts are essential for all types of programming, including full-stack applications and analyzing vast datasets with machine learning.

Additionally, coding improves your logical thinking skills. The concepts covered in these two units are indispensable for AP CSP and beyond!

<style>
    .popup {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.85);
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        overflow-y: hidden;
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .popup-content {
        background-color: #1e1e1e;
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        max-width: 700px;
        width: 90%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
        position: relative;
        transition: transform 0.4s ease, opacity 0.4s ease;
    }

    .popup-content h1 {
        color: #eaeaea;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .popup-content p {
        color: #cccccc;
        font-size: 16px;
        margin-bottom: 30px;
    }

    .button {
        display: inline-block;
        padding: 12px 18px;
        font-size: 14px;
        color: white;
        background-color: #333333;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.2s ease;
        text-align: center;
        width: 100%;
    }

    .button:hover {
        background-color: #555555;
        transform: translateY(-2px);
    }

    .button:active {
        transform: translateY(2px) scale(0.98);
        background-color: #666666;
    }

    .button-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
        justify-items: center;
    }

    .continue-button {
        margin-top: 30px;
        background-color: #2a9d8f;
        padding: 14px 24px;
        font-size: 16px;
    }

    .continue-button:hover {
        background-color: #24897d;
    }

    .close-popup {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #cccccc;
        font-size: 18px;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .close-popup:hover::after {
        content: 'Close';
        position: absolute;
        top: -25px;
        right: 15px;
        background-color: #444;
        color: white;
        padding: 5px;
        border-radius: 5px;
        font-size: 12px;
    }

    .popup.show .popup-content {
        transform: scale(1);
        opacity: 1;
    }

    /* Responsive Layout */
    @media (max-width: 600px) {
        .popup-content {
            padding: 20px;
        }

        .button-container {
            grid-template-columns: 1fr;
        }
    }
</style>

<div id="welcome-popup" class="popup preload">
    <div class="popup-content">
        <span class="close-popup" onclick="closePopup()">✕</span>
        <h1>Welcome to P3's Big Ideas</h1>
        <p>Select a lesson below or continue to the main page:</p>

        <div class="button-container">
            <button class="button" aria-label="Lesson 1 - Variables" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-1-0')">Lesson 1 - Variables</button>
            <button class="button" aria-label="Lesson 2 - Data Abstraction" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-2')">Lesson 2 - Data Abstraction</button>
            <button class="button" aria-label="Lesson 3 - Math Expressions" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-3')">Lesson 3 - Math Expressions</button>
            <button class="button" aria-label="Lesson 4 - Strings" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-4-0')">Lesson 4 - Strings</button>
            <button class="button" aria-label="Lesson 5 - Booleans" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-5')">Lesson 5 - Booleans</button>
            <button class="button" aria-label="Lesson 6 - Conditionals" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-6')">Lesson 6 - Conditionals</button>
            <button class="button" aria-label="Lesson 7 - Nested Conditionals" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-7')">Lesson 7 - Nested Conditionals</button>
            <button class="button" aria-label="Lesson 8 - Iteration" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-8-1')">Lesson 8 - Iteration</button>
            <button class="button" aria-label="Lesson 9 - Lists" onclick="navigate('{{site.baseurl}}/csp/big-idea/p3/3-10-1')">Lesson 9 - Lists</button>
        </div>

        <button class="button continue-button" aria-label="Continue to Main Page" onclick="continueToMain()">Continue to Main Page</button>
    </div>
</div>

<script>
    window.onload = function() {
        document.getElementById('welcome-popup').classList.add('show');
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    function navigate(url) {
        window.location.href = url;
    }

    function continueToMain() {
        document.getElementById('welcome-popup').style.display = 'none';
        document.body.style.overflowY = 'auto';
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function closePopup() {
        document.getElementById('welcome-popup').style.display = 'none';
        document.body.style.overflowY = 'auto';
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
</script>


## Getting Started
To start your journey into algorithms and programming, follow these steps:

1. **Familiarize Yourself with Basic Terms**: Look up the terms listed below and others that are unknown as you work through coding exercises.
2. **Engage in Hands-On Practice**: Use Jupyter code cells to work through the coding exercises provided in the hacks. Create a Python cell and insert it at any point in the exercise. Don’t hesitate to experiment and explore beyond the curriculum.
3. **Consistent Practice**: The key to mastering programming is consistent practice, problem-solving, asking questions, and conducting research.

### Basic Terms
- **Algorithm**: A step-by-step procedure for solving a problem or performing a task.
- **Pseudocode**: A way to describe algorithms using a mixture of natural language and programming language elements.
- **College Board Pseudocode**: A language used on the AP exam. It does not run or compile, but it is used to express knowledge of programming fundamentals.
- **Debugging**: The process of finding and fixing errors in a program.
- **Debugger**: A tool used to debug code. It allows developers to step through lines of code and examine variables.
- **Control Structures**: Constructs that control the flow of execution in a program (e.g., loops, conditionals).

### Resource
For more detailed information and resources, visit the official [College Board AP CSP page](https://apstudents.collegeboard.org/courses/ap-computer-science-principles).
