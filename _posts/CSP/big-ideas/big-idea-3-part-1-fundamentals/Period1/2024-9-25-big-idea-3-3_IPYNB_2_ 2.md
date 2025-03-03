---
toc: False
comments: True
layout: post
title: 3.3 Mathematical Expressions 🔣
description: Student led teaching on  Mathematical Expressions. Learn how mathematical expressions involve using arithmetic operators (like addition, subtraction, multiplication, and division) to perform calculations
permalink: /csp/big-idea/3-3/p1
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
    .wtv {
    background-color: #1e3d59;
    padding: 10px;
    border-radius: 5px;
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


<div class="wtv">
<h1>Mathematical Operations 🔣</h1>
</div>

- ➕Addition: a + b 
- ➖Subtraction: a - b
- ✖️Multiplication: a * b
- ➗Division: a / b
- Modulus (remainder of a/b): JavaScript: a MOD b, Python: a % b
- Math is performed according to order of operations (PEMDAS)
- For those who aren't familiar with PEMDAS, the first opperation performed is anything in parantheses, then comes exponents, then multiplication and division at the same time in order from left to right and then addition and subtraction from left to right
- Modulus is performed at the same time as multiplication or division




<div class="wtv">
<h1>Example 1</h1>
</div>
Write a function that will output a y value for y = 7(x+4)-6 when given an input of an x value. 



```python
# Defines the function so that it can be called later
def output(x):
    # Prints the output by first performing x plus 4, then that quantity times 7 and finally subtracting 6 from that answer.
    print(7 * (x + 4) - 6)
```

<div class="wtv">
<h1>Example 2</h1>
What will the code below print?
</div>


```python
number1 = 8
number2 = 3
number3 = number1 % number2
number4 = number3 * number1 + 70
print(number4)
```

<div class="wtv">
<h1>Example 3</h1>
Create a list of numbers that will all be tested for whether they are divisible by 3. If they are divisible by 3 the output will say that the number is divisible by 3 and if they aren't divisible by 3 the output will be the remainder when the number is divided by 3.
</div>


```python
# List of numbers. Can be changed to include any number of integers.
numbers = [14, 18, 19, 23]

# For loop that will run through every number in the list of numbers.
for num in numbers:
    # Creates a variable which stores the modulus of each number when divided by 3.
    remainder = num % 3
    # Checks to see if the modulus is 0 meaning there is no remainder when divided.
    if remainder == 0:
        # Prints that the number is divisible if there is no remainder.
        print(num, "is divisible by 3")
    # Runs if the remainder is anything other than 0.
    else:
        # Prints that the remainder when divided by 3 is whatever the modulus was stored as.
        print("The remainder when", num, "is divided by 3 is", remainder)
```
