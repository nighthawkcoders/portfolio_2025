---
toc: False
comments: True
layout: post
title: 3.10 Javascript Lists (More Information)
description: This is part 2 of the lesson. This develops lists even further, focusing on Javascript arrays!
permalink: /csp/big-idea/p3/3-10-2
author: Jackson Patrick and Arush Shah
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">How are Lists Displayed in Javascript? 💻</span>

In Javascript, lists work slightly differently. Instead, we refer to these kinds of lists as "arrays." How we modify, add (append), delete, or access arrays works differently compared to traditional Python lists. Here’s an example:

</div>



```javascript
%%javascript

let fruits = ['apple', 'banana', 'orange']; // This is how you would establish an array. 

```


    <IPython.core.display.Javascript object>


<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Accessing and Modifying 🗂️</span>

Similar to Python, you can reference an element simply by using its index. Remember that the index starts at 0. Negative indexing is not supported by JS, but you can always use `.length` in order to reference a specific element.

</div>



```javascript
%%javascript

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'

console.log(fruits[fruits.length - 1]); // 'cherry'

```


    <IPython.core.display.Javascript object>


<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Removing and Checking for Existence ➖❌</span>

There are multiple ways you can remove an element. `pop()` is one way, but it targets the last element in the array. Conversely, `shift()` removes the first element. You will most likely want to target an element of a specific index, in which case you would use `splice(start, deleteCount)`.

As for checking for existence, using `indexOf()` is a great way. This will return the index of the value. If it doesn't exist, you will receive an output of -1.

</div>



```javascript
%%javascript

let fruits = ['apple', 'banana', 'cherry'];
let lastFruit = fruits.pop(); // 'cherry'
console.log(fruits); // ['apple', 'banana']

let firstFruit = fruits.shift(); // 'apple'
console.log(fruits); // ['banana']

let colors = ['red', 'green', 'blue'];
colors.splice(1, 1); // Removes 'green'
console.log(colors); // ['red', 'blue']

// Checking for existence
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('orange')); // -1

```


    <IPython.core.display.Javascript object>


<div style="border: 2px solid #A8D5BA; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Popcorn Hack (Classwork) 🍿</span>
<ul>
  <li>
    Let's see what you can do with a JS array. Reverse the order of your array WITHOUT creating a new array. This should be quick!
  </li>
</ul>

</div>


