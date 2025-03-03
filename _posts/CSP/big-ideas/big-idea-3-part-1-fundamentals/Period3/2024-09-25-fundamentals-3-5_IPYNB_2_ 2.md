---
toc: False
comments: True
permalink: /csp/big-idea/p3/3-5
layout: post
title: 3.5 Booleans (Period 3)
description: Student led teaching on Booleans. Learn how booleans are used in decision-making with logical operators.
author: Trevor V, Wyatt Z, Max G, Johan M, Luke S
menu: /nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #3e2723; /* Dark brown background */
      color: #efebe9; /* Light beige text for contrast */
  }

  /* Styling headers with lighter brown tones */
  h1, h2, h3, h4, h5 {
      color: #efebe9; /* Light beige for headers */
      border-bottom: 2px solid #795548; /* Medium brown border */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #4e342e; /* Darker brown for code background */
      color: #d7ccc8; /* Light brown for inline code */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #4e342e;
      color: #efebe9;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #795548; /* Medium brown for border */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #bcaaa4; /* Lighter brown for keywords */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a1887f; /* Soft brown for strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #d7ccc8; /* Light brown for titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #8d6e63; /* Darker brown for variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #6d4c41; /* Dark brown for comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #a1887f; /* Soft brown for numbers and built-ins */
  }

  .hljs-meta {
      color: #5d4037; /* Dark brown for meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in medium brown */
  blockquote {
      border-left: 4px solid #8d6e63; /* Medium brown */
      padding-left: 10px;
      color: #efebe9;
      font-style: italic;
      background-color: #4e342e;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #a1887f; /* Soft brown for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #efebe9;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #795548; /* Medium brown */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #d7ccc8; /* Light brown links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #8d6e63; /* Dark brown on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #efebe9;
  }

  /* Styling tables with dark brown theme */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #4e342e;
  }
  
  table, th, td {
      border: 1px solid #6d4c41; /* Dark brown for borders */
      padding: 8px;
      color: #efebe9;
  }

  th {
      background-color: #795548; /* Medium brown for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #a1887f; /* Soft brown links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #8d6e63; /* Dark brown on hover */
  }
</style>


# This blog post will go over **BOOLEANS**!

## The only baseline information you should know about Booleans is that they are either **true** or **false**. 

## However, you will notice that boolean statements can look super funky, yet in the end, they will always be either **true** or **false**.

## [Blog about Booleans]({{site.baseurl}}/csp/big-idea/p3/3-5-3)

## [Truth Table]({{site.baseurl}}/csp/big-idea/p3/3-5-2)

## [De Morgan's Law]({{site.baseurl}}/csp/big-idea/p3/3-5-1)

<h1>Mini Booleans Quiz</h1>
<button id="start-quiz" onclick="startQuiz()">Start Quiz</button>

<div id="quiz-questions">

</div>


<script>
   const questions = [
    {
        question: "What is the value of a?",
        content: "a = (5 > 3)",
        answer: "a = true",
        options: [
            {
                text: "a = true",
                correct: true
            },
            {
                text: "a = false",
                correct: false
            },
            {
                text: "a = undefined",
                correct: false
            }
        ]
    },
    {
        question: "What is the value of b?",
        content: "b = (10 === '10')",
        answer: "b = false",
        options: [
            {
                text: "b = true",
                correct: false
            },
            {
                text: "b = false",
                correct: true
            },
            {
                text: "b = undefined",
                correct: false
            }
        ]
    },
    {
        question: "What is the value of c?",
        content: "c = !(false || true)",
        answer: "c = false",
        options: [
            {
                text: "c = true",
                correct: false
            },
            {
                text: "c = false",
                correct: true
            },
            {
                text: "c = undefined",
                correct: false
            }
        ]
    },
    {
        question: "What is the value of d?",
        content: "d = (null == undefined)",
        answer: "d = true",
        options: [
            {
                text: "d = true",
                correct: true
            },
            {
                text: "d = false",
                correct: false
            },
            {
                text: "d = undefined",
                correct: false
            }
        ]
    }
];


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
