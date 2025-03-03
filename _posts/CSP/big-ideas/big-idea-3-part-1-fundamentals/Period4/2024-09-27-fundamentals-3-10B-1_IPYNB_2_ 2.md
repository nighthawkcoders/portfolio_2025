---
toc: False
comments: True
layout: post
title: 3.10.1 JavaScript Arrays (Lists) - Period 4
description: This is student-led teaching on lists
author: Noah Harris (Period 4)
menu: nav/csp_units/csp_unit3_p5_fundamentals.html
permalink: /csp/big-idea/p4/3-10B-1
---

<style>
    .glowing-text {
        color: white;
        text-shadow: 0 0 10px #055cd3, 0 0 20px #055cd3, 0 0 30px #055cd3;
        font-size: 32px;
    }
</style>

Here are all of the code snippets used in the lesson:


```python
// Initialize an empty array
var aList = [];

// Assuming 'i' is defined, e.g., var i = 0; before accessing
var i = 0; // Example definition

// Accessing array values
var x = aList[i]; // Assigns value of aList[i] to variable x
aList[i] = x; // This does nothing meaningful as x is being assigned back to the same index

// Function to insert a value at a specific index
var value = 10; // Example value
aList.splice(i, 0, value); // Inserts value at index i

// Function to remove a value at a specific index
aList.splice(i, 1); // Removes the element at index i

// Function to get the length of the array
console.log(aList.length); // Returns the number of elements in aList

// Function to append a value to the end of the array
aList.push(value); // Adds value to the end of aList

// Using unshift() to add an item at the beginning
aList.unshift(value); // Adds value to the beginning of the list

// Using pop() to remove the last item
aList.pop(); // Removes the last item

// Using shift() to remove the first item
aList.shift(); // Removes the first item

// Function that logs various types of data
console.log(aList); // This would output the values of aList

```

<div class="glowing-text">
Arrays
</div>

JavaScript lists, which are represented by arrays, are ordered collections that can hold different data types, enabling the storage and manipulation of multiple values within a single variable. Lists are commonly used for iterating over data, transforming data, and creating complex structures like matrices.

<div class="glowing-text">
Initializing an Array
</div>

In order to start a list, we need to initialize a variable to store the list. In JavaScript, a list is called an array and we use square brackets to store it. 

For example:


```python
var numbers = [ ]; 
```


numbers is the name of the array and the array is completely empty as there are no values in the brackets. Here is an updated array with 5 numbers: 


```python
var numbers = [10, 12, 13, 21, 49];
```


Each value in the array is separated by a comma, but you can store more than numbers in a array. Here is an example with an array of strings. 


```python
var sports = [ "soccer", "football", "basketball", "tennis", "wrestling"];
```


As you can see, each string is surrounded by quotation marks, and the comma is outside the quotations.

Popcorn Hack #1: You can easily reverse an array using the reverse() method. Here is an example using the numbers array from above. 


```python
var numbers = [10, 12, 13, 21, 49];
numbers.reverse();
console.log(numbers); // Output: [49, 21, 13, 12, 10]
```


Now create your own array and then reverse it using the reverse() method.

<div class="glowing-text">
Accessing array values
</div>

The computer assigns an index to each item in the array, so that it can keep track of where it stored that item in its memory. In JavaScript, the first item in a array is at index 0, not index 1. So here are the indexes for the sports array above:

    0              1               2                  3                4
    
"soccer"      "football"      "basketball"        "tennis"        "wrestling"

To reference an item in the array, use bracket notation: 



```python
var firstSport = sports[0]; // this variable stores "soccer"
var lastSport = sports[4]; // this variable stores "wrestling"
```

<div class="glowing-text">
 Updating Arrays
</div>

We can update an item in an array if we know its index. In JavaScript, bracket notation is used to update a value. After adding that value, the index of the following values is shifted by 1. For example let's add two sports to the sports array from above.



```python
sports=[1] = "swimming";
sports=[2] = "baseball";
```


The sports array will now store "soccer", "swimming", "baseball", "football", "basketball", "tennis", and "wrestling".

<div class="glowing-text">
Appending Array Items
</div>

We can append an item to an array, which is adding a new item to the end of the array. In JavaScript, we can call the push() method on a array, and pass the new item as a parameter. For example, from the previous numbers array, we can add more:



```python
numbers.push (50);
numbers.push (88);
numbers.push (92);
```


Now the array will look like this ...

10, 12, 13, 21, 49, 50, 88, 92 

With the number 10 being index 0 and the number 92 being index 7

We can also add an item to the beginning of the array using the unshift() method. For example:



```python
numbers.unshift (8)
numbers.unshift (6)
```


Now the array will look like this...

6, 8, 12, 13, 21, 49, 50, 88, 92

Popcorn Hack #2: You can combine the push() with the spread operator (...) to add multiple items to an array at once. This also works with the unshift() method.
For example:



```python
var numbers = [1, 2, 3, 4, 5, 6];
var moreNumbers= [7, 8, 9, 10];
numbers.push(...moreNumbers);
console.log(numbers); // Output would be[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


Make your own array using the unshift() method and the spread operator.

But what if we wanted to add an item in between two items? One way to do this in JavaScript is by using the splice() method.



```python
numbers.splice(0, 0, 5)
```


This method has 3 parameters: the index where the computer should insert the item, the number of items to remove, and the item to insert. In the above example, the index of the number is 0, the amount of items removed is 0, so the code will insert the number 5 in the first position and shifter all of the other items up by one index.

<div class="glowing-text">
Removing an Item
</div>

We now know how to add an item to the array wherever we want, now we need to know how to delete an item. In JavaScript, one way to remove items is again with the splice() method. If you remember, the second parameter to splice() specifies the number of items to remove, so by specifing a non-zero number and not providing a third parameter, we can remove an item.



```python
numbers.splice(4,1);
```


That line of code specifies an index of 4 and a number to remove of 1, so that the computer will remove one number at index 4, so in the numbers list, number 21 is in the index 4 position and will be removed.

A method to remove just the first element would be the shift() method and just the last element would be the pop() method.



```python
numbers.pop(); 
numbers.shift(); 
```

<div class="glowing-text">
Iteration over arrays with loops
</div>

Arrays are used to store sequences of related data. We often want to perform the same operation on every element in an array. In JavaScript, you can do this by iterating over the array with a loop.

Here is an example using a for loop:




```python
var numbers = [1, 2, 3, 4, 5]; // Define an array of numbers
var squares = []; // Create an empty array to store the squares

// Use a for loop to iterate through the numbers
for (var i = 0; i < numbers.length; i++) {
    var square = numbers[i] * numbers[i]; // Calculate the square of each number
    squares.push(square); // Add the square to the squares array
}

// Display the result
console.log(squares); // Output would be [1, 4, 9, 16, 25]

```



Lets explain further:
var i = 0: This initializes the loop counter variable i to equal 0. This starts the loop at the first element of the array.

i < numbers.length: "i" is the loop counter variable that starts at zero and is incremented with each repetition of the loop. "numbers" is the array that contains elements. ".length" returns the total number of elements in the numbers array (in this case, there are 5 elements). When i = 0, 0 < 5, which is true, the loop runs. This repeats, with i equaling 1, 2, 3, and 4. When i = 5, 5 < 5, which is not true, therefore the loop stops.

i++: "i" is the counter loop variable that starts at zero, and "++" is a shorthand notation that adds one on every repetition. Without this, "i" would always equal 0.

<div class="glowing-text">
Iteration with Computation
</div>

Instead of just displaying the elements in the array, we can also compute new values based on all of the values in the array. For example, this code computes the total cost based on the array of individual prices.




```python
var totalCost = 0;
var prices = [1.20, 4.40, 6.31, 9.30];
for (var i = 0; i < prices.length; i++) {
   totalCost += prices[i];
}
console.log(totalCost); // Output would be [21.21]
```


We can make it more complicated by using conditionals inside the loop to compute values based on whether or not they meet a requirement. This code computes the number of names with more than 4 letters.



```python
var longNamesCount = 0;
var names = ['Noah', 'James', 'Zafeer', 'Luke', 'John', 'Travis', 'Alex'];
for (var i = 0; i < names.length; i++) {
   if (names[i].length > 4) {
      longNamesCount++;
   }
}
console.log(longNameCount); // Output would be [3]
```


Popcorn Hack #3: Instead of manually iterating through an array and counting every "long name," you can use the filter() method.
For example:



```python
var names = ['Noah', 'James', 'Zafeer', 'Luke', 'John', 'Travis', 'Alex'];
var longNameCount = names.filter(name => name.length > 4).length; 
console.log(longNameCount); // Output would be [3]
```


Make your own array using the filter() method

<div class="glowing-text">
Key Points:
</div>

Variables and Arrays:
- Variables allow us to store and name data, which can be single pieces of information or collections like lists (arrays)
- In JavaScript, lists are called arrays and are initialized using square brackets

Accessing and Modifying Arrays:
- Each item in an array has an index, starting at 0
- We can update specific items in a array using bracket notation

Iteration:
- Loops enable us to repeatedly perform the same operation on every element in a array, which is vital for scalability
- A for loop enables us to perform the same operation on every element in a array
- A for loop can also be used to display all items in a array, iterating through each index without needing to write separate lines for each item

List Operations:
- We can change items in the beginning and end of an array using push(), shift(), unshift(), and pop()
- The splice() method allows us to insert items at a specific index in the array, and shift exsisting items as needed
- The splice() method also allows us to remove items, by specifying the index and number of items to remove

Advanced Iteration:
- Loops can be used to compute totals or compile a separate list based on conditions

<div class="glowing-text">
Hacks
</div>

Now go onto the Javascript hacks, and complete the hacks for homework. 

