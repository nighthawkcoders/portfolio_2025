---
layout: post
title: Big Idea 3.10 Part 1- Creating Lists
description: Learn more about lists and how to create them!
permalink: /csp/big-idea/p1/3-10
menu: nav/csp_units/csp_unit3_p1_fundamentals.html
toc: True
author: Manahil
comments: True
---

<style>
 h1 {
   animation: glow 1s ease-in-out infinite alternate;
 }
</style>


<style>
@keyframes glow {
 from {
   text-shadow: 0 0 5px #e3768a, 0 0 10px #ae76e3, 0 0 15px #7d76e3, 0 0 20px #6385cf;
 }
 to {
   text-shadow: 0 0 20px #6385cf, 0 0 30px #7d76e3, 0 0 40px #ae76e3, 0 0 50px #e3768a;
 }
}
</style>




<style>
:root {
   --light-pink: #e0b4d4;
   --medium-pink: #4a5a94;
   --dark-pink: #302e63;
   --accent-pink: #ff75ba;
   --background-pink: #ffe6f0;
}


body {
   color: var(--dark-pink) !important;
}


article {
   background-color: var(--light-pink) !important;
   color: var(--dark-pink) !important;
   border: 2px solid var(--medium-pink) !important;
   padding: 20px !important;
   border-radius: 8px !important;
}


a {
   color: var(--accent-pink) !important;
}


a:hover {
   color: var(--light-pink) !important;
}


h1, h2, h3, h4 {
   color: white !important;
}


blockquote {
   background-color: #272726 !important;
   color: var(--dark-pink) !important;
   padding: 10px 20px !important;
   margin: 10px 0 !important;
   border-radius: 4px !important;
}


code {
   background-color: var(--medium-pink) !important;
   color: white !important;
   padding: 2px 4px !important;
   border-radius: 4px !important;
}


table td {
   background-color: var(--dark-pink) !important;
}
</style>

## Lists

**In Python**, a list is an ordered, mutable collection that can hold different types of data. This makes lists versatile, as they can store integers, strings, or even other lists. One key feature of lists in Python is that they are indexed starting from 0, meaning the first element in a list is at index 0. For example, in the list `my_list = ['apple', 'banana', 'cherry']`, the first element is `'apple'`, located at `my_list[0]`.

**Learning Objectives,** 
- You will be able to write expressions that use list indexing and list procedures. 
- For algorithms involving elements of a list, you will be able to write iteration statements to traverse a list. 

# Key Points
- Ordered: The elements have a defined order, meaning you can refer to an item by its index.
- Mutable: You can change the items within a list (unlike tuples which are immutable).

## Creating a List
This code creates a list and assigns it to the variable `aList`. You can use this empty list to add elements later in your code.


```python
# Python

# Creating an empty list
aList = []
```


```python
%%js
// Javascript

// Creating an empty array
let aList = [];
```

This code reassigns the variable aList to a new list that contains five elements: the integers 1, 2, 3, and the strings 'apple' and 'banana'.


```python
# Python 

# Creating a list with elements
aList = [1, 2, 3, 'apple', 'banana']
```


```python
%%js
// Javascript

// Creating an array with elements
let aList = [1, 2, 3, 'apple', 'banana'];
```

## Accessing Elements
You can access an element at a specific index using the syntax `aList[i]`. Remember, the first element is at index `0`.


```python
# Python

aList = ['apple', 'banana', 'cherry']
print(aList[0])  # Output: 'apple'
```

These lines access the first and second elements of the list "aList" using the index 0 and assigns it to the constant firstElement and secondElement.


```python
%%js
// Javascript

const aList = ['apple', 'banana', 'cherry'];
const firstElement = aList[0]; // apple
const secondElement = aList[1]; // banana
```

## Appending Elements
In Python, use the `append()` method to add an element to the end of the list. This method is a built-in function in Python that modifies the original list without needing to create a new one.



```python
# Python

aList.append('grape')  # Adds 'grape' at the end
print(aList)  # Output: ['apple', 'banana', 'cherry', 'grape']
```

In JavaScript, This line uses the `push()` method to add the string `grape` to the end of the list. This method is similar to the append() method in Python.


```python
%%js
// Javascript

// Adding 'grape' at the end
aList.push('grape');

// Printing the array
console.log(aList); // Output: ['apple', 'banana', 'cherry', 'grape']
```

## Here's one more example of these operations in Python


```python
- aList = [1, 2, 3, 4]
- print(aList[1])  # Output: 2
- aList.append(5)  # Output: [1, 2, 3, 4,5]
```

## Popcorn Hack
- Try making your own list then apend an element
