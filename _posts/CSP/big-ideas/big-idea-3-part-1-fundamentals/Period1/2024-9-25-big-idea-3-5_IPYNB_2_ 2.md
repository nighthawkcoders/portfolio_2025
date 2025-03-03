---
toc: False
comments: True
layout: post
title: 3.5 Booleans 🔄
description: Student led teaching on Booleans. Learn how booleans are used in decision-making with logical operators (like less than or greater than).
permalink: /csp/big-idea/3-5/p1
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
    .wtv {
    background-color: #1e3d59;
    padding: 10px;
    border-radius: 5px;
    }
</style>

<!-- Left and right side patterns -->
<div class='left-pattern'></div>
<div class='right-pattern'></div>

<div class="wtv">
    <h1>Booleans 🔄</h1>
</div>

### Basic Concept
##### Booleans either have a value of true or false
- true: Represents a logically true condition.
- false: Represents a logically false condition.

##### A Boolean Expression is an expression that produces a Boolean (Either true or false) when evaluated
- Common Boolean Expressions include equal to(=), greater than(>), less than(<), etc. 
- These are called Relational Operators

##### Logical Operators allow you to combine multiple boolean expressions into one boolean output

<div class="wtv">
    <h1>Example 1</h1>
</div>

Create a program to check if a boolean is true. Create another to check if both are true or if either is true.


```python
var variableA = true;
var variableB = false;

if (variableA == true) {
    console.log("VariableA is true!");
} else if (variableA == false) {
    console.log("VariableA is false!")
}

if (variableA == true && variableB == false) {
    "variableA is true and variableB is false"
}

if (variableA == true || variableB == true) {
    "Either variableA or variableB is true"
}
```


```python
variableA = True
variableB = False

if variableA:
    print("VariableA is true!")
else:
    print("VariableA is false!")

if variableA and not variableB:
    print("VariableA is true and Variable B is false")

if variableA or varaibleB:
    print("Either variableA or variableB is true")    
```

<div class="wtv">
    <h1>Relational Operators</h1>
</div>

- Equal to: a == b (True if a is equal to b)
- Not Equal to: a != b (True if a is not equal to b)
- Greater than: a > b (True if a is greater than b)
- Less than: a < b (True if a is less than b)
- Greater than or Equal to: a >= b (True if a is greater than or equal to b)
- Less than or Equal to: a <= b (True if a is less than or equal to b)

<div class="wtv">
    <h1>Example 2</h1>
</div>

Create a boolean expression to check if a number is greater than 10.


```python
if (number > 10) {
    console.log("number is greater than ten!");
} else {
    console.log("number is not greater than ten!")
}
```


```python
if number > 10:
    print("number is greater than ten!")
else:
    print("number is not greater than ten!")
```

<div class="wtv">
    <h1>Logical Operators</h1>
</div>

#### NOT
- NOT evaluates as true if the condition after not is false. If the condition is true, it evaluates as false.

#### AND
- AND evaluates as true if both conditions are true. If either or both conditions are false, it evaluates as false.

#### OR
- OR evaluates as true if either condition is true or if both conditions are true. If both are false, it evaluates as false.

<div class="wtv">
    <h1>Example 3</h1>
</div>
Create a boolean expression to check if a number is three digits.


```python
if (number >= 100) and (number <= 999){
    console.log("number is three digits!");
}   else {
    console.log("number is not three digits!")
    }
```


```python
if number >= 100 and number <= 999:
    print("number is three digits!")
else:
    print("number is not three digits!")

```
