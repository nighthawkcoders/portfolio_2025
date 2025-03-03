---
toc: False
comments: True
layout: post
title: 3.10 Javascript Hacks
description: This builds off the initial 3.10.2 lesson. Here you'll find the popcorn hacks (classwork) and hacks (homework) for arrays!
permalink: /csp/big-idea/p3/3-10-4
author: Arush Shah and Ryan Nguyen
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<div style="border: 2px solid #B8D5D8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Popcorn Hacks (Classwork) 🍿</span>

<ul>
  <li>
    All it takes to perform some complex calculations is one method. <code>reduce()</code> sums all the numbers in a given array. More specifically, <code>reduce()</code> takes a callback function (basically a function that can be referenced in later bits of code), which processes all the items in a given array. Create a list that uses this function.
  </li>
  
  <li>
    Now create another array containing the integers: 3, 4, 8, 9, 1, 80, and 77. Put these integers in RANDOM ORDER. This will be the second popcorn hack. Now use the <code>sort()</code> method to reorganize these integers in numerical order. Now do the same thing again, but this time write out the integers using words. Sort these alphabetically.
  </li>

</ul>

</div>




```javascript
%%javascript

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 15

// Accumulator holds the running total (or whatever you want to accumulate). Current refers to the current item being processed. The second argument (0) initializes the accumulator.
```

<div style="border: 2px solid #D8BFD8; padding: 15px; border-radius: 10px;">

<span style="color: #87CEFA;">Javascript Hack 🏬🛒</span>

<ul>
  <li>
    It's time to go shopping! Try to create a program that allows users to manage items using an array, which can be visually represented with a shopping cart. 
  </li>
  <li>
    While not necessary, feel free to show the cart filling up with icons (items) as the user adds or subtracts items.
  </li>
</ul>

</div>


