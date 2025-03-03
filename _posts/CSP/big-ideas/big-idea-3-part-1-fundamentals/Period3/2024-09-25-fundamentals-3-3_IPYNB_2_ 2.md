---
toc: False
comments: True
layout: post
permalink: /csp/big-idea/p3/3-3
title: 3.3 Mathematical Expressions
description: Student led teaching on  Mathematical Expressions. Learn how mathematical expressions involve using arithmetic operators (like addition, subtraction, multiplication, and division) to perform calculations
author: Trevor V, Wyatt Z, Max G, Johan M, Luke S
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
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
      border-bottom: 2px solid #ff79c6; /* Bright pink */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #ff6bcb; /* Hot pink */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ff79c6; /* Updated border color to bright pink */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #ff79c6; /* Keywords now pink */
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

  /* Highlight blockquotes in pink */
  blockquote {
      border-left: 4px solid #ff6bcb; /* Hot pink */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #ff6bcb; /* Pink color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #ff79c6; /* Bright pink */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #f8b500; /* Golden yellow links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #ff6bcb; /* Hot pink on hover */
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
      background-color: #5e345d;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #ff79c6; /* Pink for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #ff79c6; /* Pink links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #ff6bcb; /* Hot pink on hover */
  }
</style>


## **Mathematical expressions** are used to perform calculations by applying arithmetic operators to variables and values.

Just like in traditional math, operators such as **addition** (+), **subtraction** (-), **multiplication** (*), and **division** (/) allow programmers to manipulate data and generate results. 
 
These expressions can be as simple as adding two numbers or as complex as solving multi-step problems involving variables.

For example, in many programming languages, you might see something like:

```python
x = 5 + 3
y = 3 - 2
z = x * y
q = z / 2
```

Here, the variables x, y, z, and q hold the outcomes of various mathematical operations. By learning how to construct and evaluate mathematical expressions in code, you can create algorithms that automate calculations and solve problems efficiently.

**This blog will go over the basics of mathematical expressions and how to use them efficiently in code.**

<h1>Mini Mathematical Operations Quiz</h1>
<button id="start-quiz" onclick="startQuiz()">Start Quiz</button>

<div id="quiz-questions">

</div>


<script>
    const questions = [
        {
            question: "What is the value of x?",
            content: "x = 999999999^0",
            answer: "x = 1",
            options: [
                {
                    text: "x = 1",
                    correct: true
                },
                {
                    text: "x = -1",
                    correct: false
                },
                {
                    text: "x = 0",
                    correct: false
                }
            ]
        },
        {
            question: "What is the value of y?",
            content: "y = (200/100) + 1",
            answer: "y = 3",
            options: [
                {
                    text: "y = 3",
                    correct: true
                },
                {
                    text: "y = 4",
                    correct: false
                },
                {
                    text: "y = 5",
                    correct: false
                }
            ]
        },
        {
            question: "What is the value of z?",
            content: "z = 100 % 2",
            answer: "z = 0",
            options: [
                {
                    text: "z = 0",
                    correct: true
                },
                {
                    text: "z = 1",
                    correct: false
                },
                {
                    text: "z = 2",
                    correct: false
                }
            ]
        }
    ]

let quizStarted = false

function startQuiz() {
    if (quizStarted) {
        return
    }
    document.getElementById('start-quiz').remove()
    quizStarted = true
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let div = document.createElement('div')
        div.classList.add('question')
        div.innerHTML = `<h2>${question.question}</h2><p>${question.content}</p>`
        document.getElementById('quiz-questions').appendChild(div)

        let options = document.createElement('div')
        div.appendChild(options)
        options.classList.add('options')
        const shuffledOptions = shuffle(question.options)
        for (let i = 0; i < shuffledOptions.length; i++) {
            let option = shuffledOptions[i]
            let optionBtn = document.createElement('button')
            optionBtn.innerHTML = option.text
            optionBtn.value = option.correct
            optionBtn.onclick = function() {
                if (option.correct) {
                    optionBtn.classList.add('correct')
                } else {
                    optionBtn.classList.add('incorrect')
                }
            }
            options.appendChild(optionBtn)
        }
    }
}

function shuffle(array) {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }
  return shuffledArray;
}
</script>

<style>
    .correct {
        background-color: #00FF00 !important;
        color: black !important;
    }
    .incorrect {
        background-color: red !important;
        color: white !important;
    }
</style>
