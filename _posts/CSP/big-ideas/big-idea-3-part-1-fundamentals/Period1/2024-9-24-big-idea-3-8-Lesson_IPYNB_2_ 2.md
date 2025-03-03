---
toc: False
comments: True
layout: post
title: Iterations In Python and JavaScript 3.8
description: Learn about the giant world of iterations.
permalink: /csp/big-idea/3-8/p1
categories: ['CSP Big Idea 3']
author: Arya, Shawn, Aarav
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
---

<img src="https://media4.giphy.com/media/l0HlJcWbeo9AgcbPq/giphy.gif?cid=6c09b952arn38n02bg6y5a0r0cavnn9ax4lll9akws9ckwhe&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="Animated GIF" width = "175" height = "175">


<h1>
  Iterations 3.8 | Introduction
</h1>

<style>
  h1 {
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    animation: typing 3s steps(30, end) infinite, blink-caret 0.75s step-end infinite, glow 1s ease-in-out infinite alternate;
    text-shadow: 0 0 5px purple, 0 0 10px purple, 0 0 15px purple, 0 0 20px purple;
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: purple; }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 5px purple, 0 0 10px purple, 0 0 15px purple, 0 0 20px purple;
    }
    to {
      text-shadow: 0 0 20px purple, 0 0 30px purple, 0 0 40px purple, 0 0 50px purple;
    }
  }
</style>



Iterations or Loops are super important when coding in Python or Javascript. They essentially allow you to repeat tasks over and over again for as long as you want as much as you want.

There are 4 types of loops that will be covered:
- For loops
- While loops
- Do/While loops
- Infinite loops

For Loops:
- Used to iterate over a sequence
- repeat a code a certain number of times, 
- "for" goes through each item


```python
# Example 1: Simple for loop in Python
groceries = ["milk", "bread", "eggs", "juice", "yogurt"]
for grocery in groceries:
    print(grocery)
```


```python
#Example 2: Simple for loop in JavaScript
let groceries = ["milk", "bread", "eggs", "juice", "yogurt"];
for (let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]);
}
```


```python
%%js
console.log("hello")
```


    <IPython.core.display.Javascript object>


While Loops:
- keeps running as a given condition is True
- this loop starts with count = 0
- as long as condition is met, of count being less than 5, it will keep running
    Inside Loop:
    - prints current value of count
    - count gets increased by one ever iteration


```python
# Example While Loop in Python
count = 0
while count < 5:
    print(count)
    count += 1
```


```python
# Example While Loop in JavaScript

let count = 0;

while (count < 5) [
    console.log(count);
    count++;
]
```

Do-While Loops:
- executes code block at least one before checking condition
- guarentees that loops is run at least one time, no matter the condition

Infinite Loops:
- a loop that never stops running because condition never becomes False
- this is the same code as previous while loops, but you never update count so it always remains at 0
- because it is at 0, the while loop runs forever


```python
# Example of Infinite Loop in Python
count = 0
while count < 5:
    print(count)
    # Forgetting to update `count` makes it run forever
```


```python
%%js
# Example of Infinite Loop in JavaScript

let count = 0;

while (count < 5) {
    console.log(count);
    # Forgetting to update the 'count' causes an infinite loop
}
```


    <IPython.core.display.Javascript object>


# Looping with Dictionaries
- Iterate through the elements of lists and dictionaries


```python
person = {"name": "Arya", "age": 15, "city": "San Diego"}
for key, value in person.items():
    print(key, ":", value)
```

How This Works:
Dictionary Definition: The dictionary person has three key-value pairs:

"name": "Arya"
"age": 15
"city": "San Diego"
FOR EACH key, value IN person::

FOR EACH means the loop will go through each element in the dictionary.
In Python, dictionaries store key-value pairs. For example, "name" is a key, and "Arya" is its corresponding value.
The .items() method is used to get both the key and the value in each iteration.
Loop Execution:

First Iteration:
key = "name"
value = "Arya"
The program displays: name : Arya
Second Iteration:
key = "age"
value = 15
The program displays: age : 15
Third Iteration:
key = "city"
value = "San Diego"
The program displays: city : San Diego
DISPLAY key, ":", value:

For each pair, it prints the key, followed by a colon :, and then the value.
In Python, this is done using print(key, ":", value).

# Looping with Index Variable 
- using range()


```python
fruits = ['apple', 'banana', 'cherry']
for i in range(len(fruits)):
    print(f"Index {i}: {fruits[i]}")

```

How it works:

- range(len(fruits)) generates numbers from 0 to 2 (since len(fruits) is 3).
- The loop runs 3 times (one for each index), and in each iteration:
    - i takes the value of the index.
    - fruits[i] gives the element at that index.

# Nested If Statements
- when an if statement is placed inside another if, elif, or else statement


```python
age = 20
has_ticket = True

if age >= 18:
    print("You are old enough to watch the movie.")
    if has_ticket:
        print("You can enter the theater.")
    else:
        print("You need a ticket to enter.")
else:
    print("You are too young to watch this movie.")

```

    You are old enough to watch the movie.
    You can enter the theater.


Explanation:
- if checks if age variable is over 18, prints false if not
- if if statement is checked then moves on to next if statement and checks has_ticket
- if has_ticket true then prints statment, if false prints another statement

# APCSP Pseudo-Code: Nested Loops for Group Names


```python
groups = [['arya', 'shawn'], ['aarav']]

for pair in groups:
    for person in pair:
        print(person + ' is cool')
    print(pair[0] + ' and ' + pair[1] + ' love to code code code')
```

# Try/Except


```python
try:
    num = int(input("Enter a number: "))  # Code that might raise an exception
    result = 10 / num  # Could raise ZeroDivisionError if num is 0
    print("Result:", result)
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print("Operation was successful!")
```

Explanation: 
- The try block tells user to enter a number, then tries to divide the number by 10
- The Value error code runs when the number is not a valid integer
- if the input is 0, then runs zero division error
- the else block runs if try was succesful
Why Use Try/Except?
-  Imagine you're asking a friend to do math. If they don't understand and say something wrong, you want to guide them back instead of just getting frustrated. That's what try/except does in programming—it helps manage mistakes without crashing.
