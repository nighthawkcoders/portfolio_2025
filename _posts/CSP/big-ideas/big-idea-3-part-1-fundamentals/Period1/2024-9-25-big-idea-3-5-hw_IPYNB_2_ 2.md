---
toc: False
comments: True
layout: post
title: 3.5 Booleans Homework
description: Student led teaching on Booleans. Learn how booleans are used in decision-making with logical operators (like less than or greater than).
permalink: /csp/big-idea/3-5-hw
author: Bailey, Travis, Leon, Anyi
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
---

<style>
    .left-pattern, .right-pattern {
        position: fixed;
        top: 0;
        width: 200px;
        height: 100%;
        background-image: url('https://cdn.pixabay.com/photo/2022/11/02/22/25/background-7566164_1280.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
    .left-pattern {
        left: 0;
    }
    .right-pattern {
        right: 0;
    }
    body {
        font-family: 'Comic Sans MS', cursive, sans-serif;
    }
    h1 {
            color: #ffffff;  
            text-shadow: 
                0 0 3px #00ccff,  
                0 0 6px #00ccff, 
                0 0 10px #00ccff;
        }
</style>

<!-- Left and right side patterns -->
<div class='left-pattern'></div>
<div class='right-pattern'></div>

<h1>Homework Hacks 📕</h1>
Review the instructions and examples in the lesson and create a truth table using Python. Additionally look up and learn about De Morgan's Law and see how it can be used to create a boolean expression. 

Here is an example:


```python
function deMorganLaw() {
    console.log("A      B        Result");
    let values = [false, true];

    for (let A of values) {
        for (let B of values) {
            let result = !(A && B) === (!A || !B);
            console.log(`${A}  ${B}  ${result}`);
        }
    }
}

deMorganLaw();
```

Result:


```python
A      B        Result
false  false    true
false  true     true
true   false    true
true   true     true
```

<h1>Take a quiz</h1>
Test out your skills with this quiz.

<a href="https://quizizz.com/join/quiz/66f58e14ced426df9b54f913/start?studentShare=true">Quizizz Link</a>
