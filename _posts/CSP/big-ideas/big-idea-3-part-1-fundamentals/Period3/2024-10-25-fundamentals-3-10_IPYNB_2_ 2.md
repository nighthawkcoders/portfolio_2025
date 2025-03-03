---
toc: False
comments: True
layout: post
title: 3.10 Lists
description: This is student-led teaching on lists! Here you'll learn how to manipulate individual elements or items in a list using indexing.
permalink: /csp/big-idea/3-10
author: Ryan, Jackson, Arush, Yash, Aranya
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

## Lists



A Python list is an ordered and changeable collection of data objects. Unlike an array, which can contain objects of a single type, a list can contain a mixture of objects. Python lists are ordered (have a specific sequence) and mutable (changeable after a list is created). 
They start from 0. (The 1st element would actually be the 0th element.) 




## List Operations 

- aList[i] - This access your list at index i. An index is a numeric value that represents the position of an element within that data structure. For example, the first element of aList is at index 1, represented by aList[1]. 
- x <- aList[i] - Assigns value of aList[i] to variable x
- aList[i] <- x - Assigns value of x to aList[i]
- aList[i] <- aList[j] - Assigns value of aList[j] to aList[i]
    
- INSERT(aList, i , value) - aList is the list in which you want to insert the value. i is the index at which you want to insert the value. value is the value you want to insert at that index
- APPEND(aList, value) - The value you put in is placed at the end of aList
- REMOVE(aList, i) - aList is the list in which you want to delete the value. i is the index at which you want to delete the value.
- LENGTH(aList) - Gives you the number of elements in aList

- FOR EACH item IN aList {
    
} - Item is a var assigned each element of aList in order from first element to last. The code inside the for loop is run once for every assignment of item.

**Creating a list:**

In order to create a list named "aList", type aList = [].
This creates an empty list.
A list with elements would look like this aList = [element1,element2,element3]

**Append:**

In Python, the append() method is used to add an element to the end of a list.
The element in the parenthesis is what is added to the list.
If you would like, you can also use extend(). It does the same thing.


```python
# College Board Pseudo Code
aList ← []

USER_INPUT ← ("Enter an item you want (or 'q' to quit): ")

REPEAT UNTIL USER_INPUT ← q{
    APPEND (aList, USER_INPUT)
}

DISPLAY(aList)
```


      Cell In[1], line 2
        aList ← []
              ^
    SyntaxError: invalid character '←' (U+2190)




```python
aList = []

while True:
    user_input = input("Enter an item you want (or 'q' to quit): ")
    
    if user_input.lower() == 'q':
        break
    
    aList.append(user_input)

print("Things You Want:", aList)
```

    Things You Want: ['1', 'item', '2']


**Accessing an element:**

In order to access a specific element from a list, you would put the element in []. For example, If I had to access the third element in the list aList, I would say "aList[2]". You can also access a range of data. For example, you would put aList[1:3], which will pull all items in the list using that range as a guide. 


```python
# College Board Pseudo Code
aList ← []

USER_INPUT ← ("Enter an item you want (or 'q' to quit): ")

REPEAT UNTIL USER_INPUT ← q{
    APPEND (aList, USER_INPUT)
}

DISPLAY(aList[2])
```


```python
aList = []

while True:
    user_input = input("Enter an item you want (or 'q' to quit): ")
    
    if user_input.lower() == 'q':
        break
    
    aList.append(user_input)

print("The Second thing on your list is", aList[1])
print(aList)
print("Here is a range of data", aList[1:3])
print(aList)
```

**Deleting an element:**

In order to delete an element, choose the element the same way you would access it but put "del" before it. For example, If I had to delete the third element in a list called aList, I would say "del aList[2]".


```python
# College Board Pseudo Code
aList ← []

USER_INPUT ← ("Enter an item you want (or 'q' to quit): ")

REPEAT UNTIL USER_INPUT ← q{
    APPEND (aList, USER_INPUT)
}

REMOVE (aList, 2)

DISPLAY(aList)
```


```python
aList = []

while True:
    user_input = input("Enter an item you want (or 'q' to quit): ")
    
    if user_input.lower() == 'q':
        break
    
    aList.append(user_input)

print("This is your list: ", aList)

del aList[1]

print("This is your new list: ", aList)
```

    This is your list:  ['5', '4', '4']
    This is your new list:  ['5', '4']


**Assigning a value:**

To assign the values a list named bList to aList of one list to another you simply have to do aList = bList. If you want to directly change the value of an item in a list, you use the "=" operator. For instance, you may write random_list[5] = 90, where the 5 in brackets references the index. You can do this as well with a "range" of items. In other words, when you use a colon. This might look like random_list[1:2] = [200, 300]. 

**Length of a list:**

To get the length of a list named aList, you just need to do len(aList). This gives you the number of elements in a list.


```python
aList = ["Yeezys","Yeezys"]
bList = ["No Yeezys"]

bList = aList
list_length = len(bList)

print("Things I want:", bList)
print("How many yeezys:",list_length)
```

    Things I want: ['Yeezys', 'Yeezys']
    How many yeezys: 2


For each item in a list:

If you want to do something to each item in a list, you will need to iterate over it. An example of that is shown below.


```python
my_list = [1, 2, 3, 4, 5]
print("Original List:", my_list)

for i in range(len(my_list)):
    my_list[i] += 1

print("Modified List:", my_list)
print("Length of the list:", len(my_list))
```

    Original List: [1, 2, 3, 4, 5]
    Modified List: [2, 3, 4, 5, 6]
    Length of the list: 5


**Checking if an Element Exists:**

To check if an element exists in a list in Python, you can use the in keyword. This keyword returns True if the element is found in the list and False otherwise. An example of this is below. 


```python
my_list = [10, 20, 30, 40, 50]

# Check for an element
element_to_check = 30

if element_to_check in my_list:
    print(f"{element_to_check} is in the list.")
else:
    print(f"{element_to_check} is not in the list.")

```

# Sum of Even Numbers of a list

## Pseudocode


```python

sum -> 10
nums ← [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum ← 0

FOR EACH score IN nums
    IF score MOD 2 = 0 THEN
        even_sum ← even_sum + score
    END IF
END FOR

DISPLAY ("Sum of even numbers in the list:", even_sum)



```


      Cell In[3], line 3
        nums ← [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
             ^
    SyntaxError: invalid character '←' (U+2190)




```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0
for score in nums:
    if score % 2 == 0: # Check if the remainder when divided by 2 is 0 (even number)
        even_sum += score # If previous requirement is fulfilled, add to sum
print("Sum of even numbers in the list:", even_sum)
```

    Sum of even numbers in the list: 30



```python
## Overview of  Python and College Board Pseudo Code


Creating a List
Python: my_list = [1, 2, 3]
Pseudo Code: my_list ← [1, 2, 3]

Accessing Elements
Python: value = my_list[index]
Pseudo Code: value <- my_list[index]

Appending Elements
Python: my_list.append(new_value)
Pseudo Code: Append new_value to my_list

Inserting Elements
Python: my_list.insert(index, new_value)
Pseudo Code: Insert new_value at index in my_list

Removing Elements
Python: my_list.remove(value)
Pseudo Code: Remove value from my_list

Modifying Elements
Python: my_list[index] = new_value
Pseudo Code: my_list[index] <- new_value

Checking Length
Python: length = len(my_list)
Pseudo Code: length <- Length of my_list

Iterating through a List
Python: for item in my_list: 
{ <block of statement> }
Pseudo Code: For each item in my_list: 
{ <block of statement> }




Checking for Existence
Python: if value in my_list:
{ <block of statement> }
Pseudo Code: If value is in my_list: 
{ <block of statement> }

List Slicing
Python: sub_list = my_list[start:end]
Pseudo Code: sub_list <- my_list[start:end]
```
