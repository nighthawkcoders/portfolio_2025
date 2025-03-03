---
comments: True
layout: post
type: hacks
title: 3.6 Conditionals Part 1
escription: Student led teaching on Conditionals.
menu: nav/csp_units/csp_unit3_p5_fundamentals.html
submenu: lesson3_6
author: Shriya S
permalink: csp/big-idea/p5/3-6-1
---

## Introduction to if statements
A conditional statement allows you to execute certain code only if a specified condition evaluates to true. It typically involves keywords like if, and can include elif and else to handle multiple conditions.

## Flowchart Example
<div style="text-align: center;"><img src="{{site.baseurl}}/images/csp-period-5-flowcharts/conditional.png" alt="Conditionals Flowchart"></div>

## Baking Example of Conditional in **Python**
This is an exmaple of a conditional that would occur when using an oven for baking. These are important as it shows when to start the oven and use it. 



```python
%%python
oven_temperature = 500

def start_baking():
    print("I'm baking!")

if oven_temperature >= 350:
    start_baking()  # Calls a function to start the baking process
```

    I'm baking!


This code shows that once the oven is at 350 degrees it will turn on and start the baking process. 

## Popcorn Hack
Change the what the oven temperature would be to see how different oven temperatures will make a specific message be printed!

## Baking Example of Conditional in **Javascript**
This is an exmaple of a conditional that would occur when using an oven for baking; the same as above but in javascript!


```python
%%js
function startBaking() {
    // Code to start the baking process
    // For example, you might want to change some state or update UI here
}

let ovenTemperature = 375; // Example temperature

if (ovenTemperature >= 350) {
    startBaking(); // Calls a function to start the baking process
}

```


    <IPython.core.display.Javascript object>


## Hacks #1
- create a simple conditional statement like the ones above (do it in a different situation, so not baking)

## Hack #2 
Your hack is to create a piece of code that compares two statements and checks if they are equal to each other
