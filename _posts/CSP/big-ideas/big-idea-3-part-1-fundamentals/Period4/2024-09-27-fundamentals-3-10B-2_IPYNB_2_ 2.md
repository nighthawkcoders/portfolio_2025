---
toc: False
comments: True
layout: post
title: 3.10.2 Python Lists - Period 4
description: This is student-led teaching on lists
author: Zafeer Ahmed (Period 4)
menu: nav/csp_units/csp_unit3_p5_fundamentals.html
permalink: /csp/big-idea/p4/3-10B-2
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
# Initialize an empty list
aList = []

# Assuming 'i' is defined, e.g., i = 0; before accessing
i = 0  # Example definition

# Accessing list values
x = aList[i]  # Assigns value of aList[i] to variable x
aList[i] = x  # This does nothing meaningful as x is being assigned back to the same index

# Function to insert a value at a specific index
value = 10  # Example value
aList.insert(i, value)  # Inserts value at index i

# Function to remove a value at a specific index
aList.pop(i)  # Removes the element at index i

# Function to get the length of the list
print(len(aList))  # Returns the number of elements in aList

# Function to append a value to the end of the list
aList.append(value)  # Adds value to the end of aList

# Using insert() to add an item at the beginning
aList.insert(0, value)  # Adds value to the beginning of the list

# Using pop() to remove the last item
aList.pop()  # Removes the last item

# Using pop(0) to remove the first item
aList.pop(0)  # Removes the first item

# Using remove() to remove the value "value"
aList.remove(value)

# Function that prints various types of data
print(aList)  # This would output the values of aList

```

Python lists are ordered collections that can hold different data types (numbers, strings, etc.), allowing the storage and manipulation of multiple values within a single variable. Lists are commonly used for iterating over data, transforming data, and creating complex structures like matrices.

<div class="glowing-text">
Initializing a List
</div>

To start a list, we first store the list under a name. Initializing a list in Python is the same as JavaScript, where square brackets are used to store its values. However, defining a variable is not necessary.

Here is an example:


```python
testScores = []
```

testScores is the name of the list and as there is no values inside the brackets, the list is empty. Here is an updated list with some numbers.


```python
testScores = [66, 94, 86, 72]
```

Storing numbers in lists is the same as JavaScript, where each value in the list is separated by a comma. Storing strings in Python is also the same.

Here is an example:


```python
fruits = ["banana", "apple", "strawberry", "watermelon"]
```

Each string is surrounded by quotation marks, with a comma after each string.

<div class="glowing-text">
Accessing List Values
</div>

Just like in JavaScript, the computer assigns an index to each item in the list. Also,the first item in a list is at index 0, not index 1. So here are the indexes for the fruits list above:

    0              1               2                  3      
    
"banana"        "apple"      "strawberry"        "watermelon" 

To reference an item in the array, use bracket notation:


```python
firstFruit = fruits[0]; # this variable stores "banana"
lastFruit = fruits[3]; # this variable stores "watermelon"
```

<div class="glowing-text">
Updating a List
</div>

To update an item in a list, we need to know its index. In Python, we use bracket notation to update a value. After adding that value, the index of the following values is shifted by 1. Let's add some more fruits to our list


```python
fruits[1] = "pear" 
fruits[2] = "pineapple"
```

The fruits list now stores the values "pear", "pineapple", "banana", "apple", "strawberry", and "watermelon".

<div class="glowing-text">
Appending List Items
</div>

This is where Python and JavaScript lists really differentiate. We can append an item to a list by calling the append() method. 

For example, from the previous testScores list, we can add more:


```python
testScores.append(34)
testScores.append(68)
```

Now the list will store the values:
66, 94, 86, 72, 34, 68

In order to add an item at the beginning or between two values, we use the insert() method.

Here is an example:


```python
testScores.insert(0, 83)
testScores.insert(4, 90)
```

Now the list will store the values:
83, 66, 94, 86, 90, 72, 34, 68

As you can see, the number 83 is at the beginning of the list. If we look at the code snippet that made that happen, we see inside the parentheses the numbers 0, and 83. 83 is the value added, and 0 is the index the value is assigned to. We can see this with the code snippet that added 90 to our test scores at the index 4.

Popcorn Hack #1: We can use the insert() method to add values at a certain index. Negative indexes count from the end of the list. 

Here is an example using the fruits list:


```python
fruits.insert(-1, "orange") # This would add the value "orange" to the end of the list
fruits.insert(-3, "blackberry") # This would add the value "blackberry" to the third from the last index
```

Make your own list (with numbers or strings), and add values to it using the insert() method with negative indexes

Popcorn Hack #2: We can use the extend() method to add two lists together.

For example:


```python
fruits = ["apple", "banana"]
more_fruits = ["strawberry", "cherry"]

# Using extend to add more_fruits to fruits
fruits.extend(more_fruits)
```

Make two lists and add them together using the extend() popcorn hack.

<div class="glowing-text">
Removing an Item
</div>

In Python, to remove an item, we use the pop() method. Unlike in JavaScript, pop() is not only used to remove the last item of a list, but any item of the list. 

Here is an example:


```python
testScores.pop(0)
testScores.pop(3)
testScores.pop()
```

Here are three different codes snippets that remove values at different indexes. pop(0) removes the first (index 0) value, pop(3) removes the fourth (index 3) value, and pop() removes the last value.

You can also remove items using their value by using the remove() method.

Here is an example:


```python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
```

This removes the value "banana" from the list.

Popcorn Hack #3: You can also remove items by using the del (short for delete) function. 

Here is an example:


```python
fruits = ["apple", "banana", "cherry"]
del fruits[1] 
```

The function "del" will delete the value at the index 1, which in this case, is "banana". The resulting list is "apple", "cherry".

Create your own list, and remove three items from the list using three different methods.

<div class="glowing-text">
Iteration over lists with loops
</div>

In Python, iterating over lists with loops allows us to access and manipulate each element in the list one at a time. There are a multitude of methods to iterate through lists, with the most common being for loops, like in JavaScript. Here is how it works:


```python
fruits = ["banana", "apple", "strawberry"]

for fruit in fruits:
    print(fruit)

```

This snippet of code tells us that there is a list named fruits, and that for every fruit in fruits, the computer will print that fruit. The output would be banana, apple, and strawberry.

<div class="glowing-text">
Iteration with Computation
</div>

Instead of just displaying the elements in the list, we can also compute new values based on all of the values in the list. For example, this code computes the total cost based on the list of individual prices.


```python
numbers = [1, 2, 3, 4, 5]
total_sum = 0

for number in numbers:
    total_sum += number

print(total_sum) # Output would be 15

```

Similar to JavaScript, we can make it more complicated by using conditionals inside the loop to compute values based on whether or not they meet a requirement. This code computes the sum of only the even numbers.


```python
numbers = [1, 2, 3, 4, 5]
even_sum = 0

for number in numbers:
    if number % 2 == 0:  # Checks if the number is even
        even_sum += number

print(even_sum) # Output would be 6 

```

<div class="glowing-text">
Key Points
</div>

Initializing Lists:
- Lists are initialized using square brackets

Accessing and Modifying Lists:
- Each item in a list has an index, starting at 0
- We can update specific items in a list using bracket notation

Iteration:
- Loops enable us to repeatedly perform the same operation on every element in a array, which is vital for scalability
- A for loop enables us to perform the same operation on every element in a array
- A for loop can also be used to display all items in a array, iterating through each index without needing to write separate lines for each item

List Operations:
- We can change items in a list using the insert(), pop(), append(), and remove() methods

Advanced Iteration:
- Loops can be used to compute totals or compile a separate list based on conditions

<div class="glowing-text">
Hacks
</div>

Now go onto the Python hacks, and complete the hacks for homework. 
