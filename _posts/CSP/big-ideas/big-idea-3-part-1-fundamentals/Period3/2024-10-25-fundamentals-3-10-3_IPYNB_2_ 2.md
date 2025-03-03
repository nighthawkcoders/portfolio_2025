---
toc: False
comments: True
layout: post
title: 3.10 Python Hacks
description: Following 10.1, now it's your time to show your learning! Complete the following below. These are your hacks for Python lists.
permalink: /csp/big-idea/p3/3-10-3
author: Aranya
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Popcorn Hack (Classwork) 🍿</span>

If you have a Python list of numbers, but want to keep certain numbers (EX: even ones), you can actually use what is called a "list comprehension." What this essentially does is it creates another list, but you can apply a filter or operation to it to help you get specific outputs.

</div>



```python
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = [num for num in numbers if num % 2 == 0]

print(even_numbers)  # Output: [2, 4, 6], thanks to the list comprehension! 

# List comprehensions allow you to write shorter code that is easier to read. It could even save you time! 

```

    [2, 4, 6]


<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Hacks (Homework)</span>

<ul>
  <li>Create a program that lets users manage a list of their choosing. Users can add elements, remove them, check if an element exists, and display the current list.</li>
  <li>A function that can find the maximum and minimum value of a list using iteration.</li>
</ul>

</div>


<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Below is a sample code with explanations if you are stuck. <strong><span style="color: #FF9999;">Use this as a guide. Do NOT copy and paste.</span></strong></span>

</div>



```python
# Basic Python Program for List Management and Finding Max/Min Values

# Function to display the list
def display_list(aList):
    print("Current list:", aList)

# Function to add an item to the list
def add_item(aList, item):
    aList.append(item)
    print(f"'{item}' added to the list.")

# Function to remove an item from the list
def remove_item(aList, item):
    if item in aList:
        aList.remove(item)
        print(f"'{item}' removed from the list.")
    else:
        print(f"'{item}' not found in the list.")

# Function to check if an item exists in the list
def check_item(aList, item):
    if item in aList:
        print(f"'{item}' is in the list.")
    else:
        print(f"'{item}' is not in the list.")

# Function to find the maximum value in the list
def find_max(aList):
    max_val = aList[0]
    for num in aList:
        if num > max_val:
            max_val = num
    return max_val

# Function to find the minimum value in the list
def find_min(aList):
    min_val = aList[0]
    for num in aList:
        if num < min_val:
            min_val = num
    return min_val

# Initialize the list
user_list = []

# Simulating inputs instead of using input() for Jupyter
actions = [
    ('add', 'apple'),
    ('add', 'banana'),
    ('check', 'banana'),
    ('remove', 'apple'),
    ('display', None),
    ('add', 10),
    ('add', 5),
    ('max', None),
    ('min', None),
    ('quit', None)
]

# Simulating a loop to execute the operations
for action, value in actions:
    if action == 'add':
        add_item(user_list, value)
    elif action == 'remove':
        remove_item(user_list, value)
    elif action == 'check':
        check_item(user_list, value)
    elif action == 'display':
        display_list(user_list)
    elif action == 'max':
        if user_list and all(isinstance(x, (int, float)) for x in user_list):
            print("Max value in the list:", find_max(user_list))
        else:
            print("The list is empty or contains non-numeric values.")
    elif action == 'min':
        if user_list and all(isinstance(x, (int, float)) for x in user_list):
            print("Min value in the list:", find_min(user_list))
        else:
            print("The list is empty or contains non-numeric values.")
    elif action == 'quit':
        print("Exiting program.")
        break

```

    'apple' added to the list.
    'banana' added to the list.
    'banana' is in the list.
    'apple' removed from the list.
    Current list: ['banana']
    '10' added to the list.
    '5' added to the list.
    The list is empty or contains non-numeric values.
    The list is empty or contains non-numeric values.
    Exiting program.


<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">How it Works:</span>

<hr>

<ol>
  <li>
    <span style="font-weight: bold;">Predefined Actions:</span>
    <ul>
      <li>Since Jupyter Notebooks are not well-suited for interactive <code>input()</code> calls, a list of actions called <code>actions</code> is predefined, simulating user inputs.</li>
      <li>Each action is a tuple of the form <code>(operation, value)</code>. For example, <code>('add', 'apple')</code> adds the item 'apple' to the list.</li>
    </ul>
  </li>
  
  <li>
    <span style="font-weight: bold;">Operations Loop:</span>
    <ul>
      <li>A loop processes each action. Based on the operation (add, remove, check, etc.), the corresponding function is called.</li>
      <li>When the operation is <code>'quit'</code>, the loop exits.</li>
    </ul>
  </li>
  
  <li>
    <span style="font-weight: bold;">Max/Min Operations:</span>
    <ul>
      <li>The <code>find_max()</code> and <code>find_min()</code> functions are only called when the list contains numerical values. You can mix both string and numerical values in the list, but <code>find_max()</code> and <code>find_min()</code> only make sense for numbers.</li>
    </ul>
  </li>
</ol>

<span style="color: #87CEFA;">Customization:</span>

<ul>
  <li>You can modify the <code>actions</code> list to simulate different scenarios, and the program will print the output in sequence as it processes the actions.</li>
</ul>

</div>

