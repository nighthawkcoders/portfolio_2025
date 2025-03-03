---
toc: False
comments: True
layout: post
title: 3.7 Homework Question
description: Test your understanding of nested conditionals
permalink: /csp/big-idea/p3/3-7-4
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


## Testing Your Skills (HW Question #1)
- Create a simple system using `if` and `else` statements that determines whether or not a user (based on their age) is eligible to vote
- If the person is less than 18 years old, they should not be able to vote
- If the person is 18 years old or older, they are able to vote 
- You should get something like this:

## Explanation
- The if statement checks if the user's age is greater than or equal to 18. If they are 18, that means that the statement is true and will print "You are eligible to vote." If the age requirement is not met, that means the statement will be false and the else statement will print "You are not eligible to vote."

## Quick Quiz

## What would the function output if the user's age was 16?


```python
%%html

<div id="answer" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You are not eligible to vote."
</div>

<button onclick="document.getElementById('answer').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>
```



<div id="answer" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You are not eligible to vote."
</div>

<button onclick="document.getElementById('answer').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>



## When the age of the user is greater than 18, what is the condition in the if statement?


```python
%%html

<div id="answer1" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You are eligible to vote."
</div>

<button onclick="document.getElementById('answer1').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>
```



<div id="answer1" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You are eligible to vote."
</div>

<button onclick="document.getElementById('answer1').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>



## What is the purpose of the if statement in the function?


```python
%%html

<div id="answer2" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> To determine if you are eligible to vote!
</div>

<button onclick="document.getElementById('answer2').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>
```



<div id="answer2" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> To determine if you are eligible to vote!
</div>

<button onclick="document.getElementById('answer2').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>



## HW Question #2
- Create a simple system using `if` and `else` statements that determines what the user would eat
- If the person is healthy, make them eat an apple
- If the person doesn't care about what they eat, make them drink coffee
- If the person is unhealthy, make them eat chocolate
- You should get something like this:


```python
# Get user input
health_status = input("Are you healthy, unhealthy, or indifferent about food? (healthy/unhealthy/indifferent): ").lower()
if health_status == "healthy":
    print("Treat yourself to chocolate!")
else:
    # Check for the other conditions within the else block
    if health_status == "unhealthy":
        print("You should eat an apple!")
    else: 
        print("You don't care about what you eat. How about a coffee?")
```

    You should eat an apple!


## Explanation
- The if statement checks if the user's health status is "healthy." If this condition is true, the program will print "You should eat an apple!" indicating a healthy choice.
- If the health status is not "healthy," the else statement is executed. Within this block, another if statement checks if the user's health status is "unhealthy." If this condition is true, the program will print "You should eat chocolate!"
- Lastly, if neither condition is met when the user doesn't care about what they eat, the else statement will execute, printing "You don't care about what you eat. How about a coffee?" This covers the case for users who are indifferent about their food choices. Keep in mind, you can also achieve this same result using `elif statements` instead of having to create chains of `if` and `else statements`.


```python
# Get user input
health_status = input("Are you healthy, unhealthy, or indifferent about food? (healthy/unhealthy/indifferent): ").strip().lower()
if health_status == "healthy":
    print("You should eat an apple!")
elif health_status == "unhealthy":
    print("You should eat chocolate!")
elif health_status == "indifferent":
    print("You don't care about what you eat. How about a coffee?")
else:
    print("Invalid input! Please enter 'healthy', 'unhealthy', or 'indifferent'.")
```

- Notice how there's no inner constructs in this code, so it does not contain nested conditionals!

## Quick Quiz

## What would the function output if the user's age was not healthy?


```python
%%html

<div id="answer3" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You should eat an apple!"
</div>

<button onclick="document.getElementById('answer3').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>
```



<div id="answer3" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "You should eat an apple!"
</div>

<button onclick="document.getElementById('answer3').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>



## When the age of the user is unhealthy, what is the condition in the if statement?


```python
%%html

<div id="answer4" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "Treat yourself to chocolate!"
</div>

<button onclick="document.getElementById('answer4').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>
```



<div id="answer4" style="display:none; border: 1px solid; padding: 10px; margin-top: 10px;">
    <b>Answer:</b> It would say, "Treat yourself to chocolate!"
</div>

<button onclick="document.getElementById('answer4').style.display='block'; this.style.display='none';">
    Reveal Answer
</button>


