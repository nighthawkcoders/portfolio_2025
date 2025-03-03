---
toc: False
comments: True
layout: post
title: 3.10 Python Lists and Intro
description: This is student-led teaching on lists! Here you'll learn how to manipulate individual elements or items in a list using indexing.
permalink: /csp/big-idea/p3/3-10-1
author: Ryan Nguyen and Yash Patil
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<div style="border: 2px solid #4CAF50; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Welcome to Lesson 3.10! 🎉</span>

<p>In this lesson, we will focus on Python Lists and JavaScript Arrays (a type of list). The emphasis will be on completing hacks in both languages.</p>

<p>Time Expectations:</p>
<ul>
  <li>⏳ Popcorn Hacks: ~20-30 minutes in class</li>
  <li>📚 Homework: ~30 minutes, consisting of 3 tasks</li>
  <li>Submission: Remember to submit both the popcorn hacks we gave to you in-class and the actual homework that was assigned.</li>
</ul>

<p>Good luck and happy coding!</p>
</div>


<div style="border: 2px solid #4CAF50; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Python List Basics 🐍</span>

<p>In the context of Python, a list is a collection of items that are both ordered and mutable (changeable). Python lists support a variety of data types, such as:</p>
<ul>
  <li>Integers (whole numbers)</li>
  <li>Strings</li>
  <li>Decimal numbers</li>
</ul>

<p>To create a Python list, use square brackets <code>[]</code>. The items inside the brackets should be separated by commas.</p>

</div>




```python
my_list = [1, 2, 3, 'string', 4.78]
print(my_list)  # This will print the contents of the list.
```

    [1, 2, 3, 'string', 4.78]


<div style="border: 2px solid #4CAF50; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Accessing and Modifying Python Lists 🎯</span>

When you want to reference a specific element in a Python list, you use its index. Python lists start at an index of 0, meaning the first item is at index 0 when reading left to right. 

To avoid confusion, you can think of it as subtracting one from the item's position (e.g., position 5 becomes index 4). You can also use negative indexing to reference items from right to left, starting at -1.

Since Python lists are mutable, you can modify the value of a specific element by referencing its index. For example, in a list named `my_list`, you can change the second element by setting `my_list[1] = "new_value"`.

</div>



```python
my_list = [1, 2, 3, 'string', 4.78]
first_item = my_list[0]  # 1
last_item = my_list[-1]   # 4.78 (negative index counts from the end)

my_list[1] = 'banana'  # Now my_list is [1, 'banana', 3, 'string', 4.78]. 

```

<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Adding and Removing Items/Elements ✨</span>

<ul>
  <li>To add an item to the end of your list, use the <code>.append()</code> method. This is typically placed after the name of your list, since the period (.) allows you to access certain properties within the list.</li>
  <li>You can also use the <code>.insert()</code> method to insert the element at a particular index. Format it as <code>(index #, insert something here)</code>.</li>
  <li>To remove an element, use the <code>.remove()</code> method, which removes the first occurrence of the specified element in the list.</li>
</ul>

</div>



```python
my_list = [1, 2, 3, 'string', 4.78]
my_list.append('orange')  # Adds 'orange' to the end
my_list.insert(2, 'grape')  # Inserts 'grape' at index 2

my_list.remove(3)  # Removes 3
print(my_list)  # Output the modified list
```

<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Checking for Existence 👁️👁️</span>

Checking for the existence of an element is simple! Use the keywords "in" or "not in." This is usually paired with a print statement to inform the user about the existence of an item in the list.

</div>



```python
fruits = ['apple', 'banana', 'cherry']

# Check for existence
if 'banana' in fruits:
    print("Banana is in the list!")
else:
    print("Banana is not in the list.")
```

    Banana is in the list!


<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Iterations 🔁</span>

A for loop is the typical way to iterate through lists in Python. For loops go through each element and perform operations. You can also use while loops, but they continue to run as long as a given condition is true.

</div>



```python
fruits = ['apple', 'banana', 'cherry']

for fruit in fruits:
    print(fruit)  # For loop
    
    
    i = 0
while i < len(fruits):
    print(fruits[i])  # While loop
    i += 1

```

<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">More Examples If You're Stuck! ➕</span>

</div>

If you're a little lost on how to use a Python list, below is an example that combines some of the operations and topics discussed in 3.10.

```python
# Creating a list of colors
colors = ['red', 'blue', 'green']

# Modifying the list
colors.append('yellow')  # Adds 'yellow' to the end
colors.insert(1, 'orange')  # Inserts 'orange' at index 1
print(colors)  # Output: ['red', 'orange', 'blue', 'green', 'yellow']

# Removing an element
colors.remove('blue')  # Removes 'blue'
print(colors)  # Output: ['red', 'orange', 'green', 'yellow']

# Checking for existence
if 'orange' in colors:
    print("Orange is in the list!")

# Iterating over the list
for color in colors:
    print(color)  # Prints each color

```

<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Popcorn Hack (Classwork) 🍿</span>

<ul>
  <li>Create a list of your choosing.</li>
  <li>Remove the last element or item in that list.</li>
  <li>Remove the first element or item in that list.</li>
  <li>Remove an element or item in the list that has a different index than the first or last element/item.</li>
  <li>Print the final list.</li>
</ul>

</div>

