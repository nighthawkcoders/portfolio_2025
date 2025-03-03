---
layout: post
title: Programming Fundamentals - P4
description: An introduction to College Board's Big Idea 3, part one.  This is a collection of Python lessons to help students understand the fundamental algorithm and programming elementes required by College Board's AP Computer Science Principles curriculum.
toc: False
comments: False
permalink: /csp/big-idea/p4/fundamentals
courses: {'csp': {'week': 5}}
type: ccc
menu: /nav/csp_units/csp_unit3_p4_fundamentals.html
---

<style>
    .popup {
        position: fixed;
        display: block;
        width: auto;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        }

    .popup-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #121212;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
    }


    .continue-btn {
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0, 110, 255, 0.9);
        cursor: pointer;
    }

    .continue-btn:hover {
        transform: translateY(-3px); /* Slight lift effect on hover */
        box-shadow: 0 6px 15px rgba(0, 110, 255, 1); /* Brighter and more intense shadow on hover */
    }
</style>

<div id="popup" class="popup">
    <div class="popup-content">
        <h2>Welcome to CSP Period 4's Big Idea 3</h2>
        <br>
        <p>Choose a topic you are interested in:</p>
        <br>
        {% include nav/p4prompt.html %}
        <br>
        <p>Press continue to navigate individual notebooks.</p>
        <button class="continue-btn" onclick="closePopup()">Continue</button>
    </div>
</div>

<script>
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }
</script>

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
