---
toc: False
comments: True
layout: post
title: 3.2.2 Data Types Part 2
description: None
permalink: /csp/big-idea/p3/3-2-2
author: Gabriela Connelly, Michelle Kuruvilla
menu: nav/csp_units/csp_unit3_p3_fundamentals.html
---

<style>
  /* Global styling for the notebook with dark background */
  body {
      font-family: 'Arial', sans-serif;
      background-color: #2c3e50;
      color: #ecf0f1;
  }

  /* Styling headers with lighter text and borders */
  h1, h2, h3, h4, h5 {
      color: #ecf0f1;
      border-bottom: 2px solid #2ecc71; /* Emerald green */
      padding-bottom: 5px;
      margin-bottom: 15px;
  }

  /* Custom style for inline code */
  code {
      background-color: #34495e;
      color: #27ae60; /* Darker green */
      padding: 2px 5px;
      border-radius: 4px;
  }

  /* Custom style for preformatted code blocks */
  pre {
      background-color: #2b2b2b;
      color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2ecc71; /* Updated border color to emerald green */
      overflow-x: auto;
  }

  /* Code block syntax highlighting */
  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
      color: #2ecc71; /* Keywords now green */
  }

  .hljs-string, .hljs-attr, .hljs-symbol, .hljs-bullet, .hljs-addition {
      color: #a6e22e; /* Strings */
  }

  .hljs-title, .hljs-section, .hljs-attribute {
      color: #e6db74; /* Function titles and sections */
  }

  .hljs-variable, .hljs-template-variable {
      color: #fd971f; /* Variables */
  }

  .hljs-comment, .hljs-quote, .hljs-deletion {
      color: #75715e; /* Comments */
  }

  .hljs-number, .hljs-regexp, .hljs-literal, .hljs-type, .hljs-built_in, .hljs-builtin-name {
      color: #ae81ff; /* Numbers and built-ins */
  }

  .hljs-meta {
      color: #66d9ef; /* Meta information */
  }

  .hljs-emphasis {
      font-style: italic;
  }

  .hljs-strong {
      font-weight: bold;
  }

  /* Highlight blockquotes in green */
  blockquote {
      border-left: 4px solid #27ae60; /* Dark green */
      padding-left: 10px;
      color: #ecf0f1;
      font-style: italic;
      background-color: #2d2d2d;
      padding: 10px;
      border-radius: 4px;
  }

  /* Styling for emphasized text */
  em {
      color: #27ae60; /* Green color for emphasized text */
      font-style: italic;
  }

  /* Style for bold text */
  strong {
      color: #ecf0f1;
      font-weight: bold;
  }

  /* Menu styling */
  .menu {
      background-color: #2ecc71; /* Emerald green */
      color: white;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
  }

  .menu a {
      color: #f1c40f; /* Yellow links in menu */
      text-decoration: none;
      padding: 0 10px;
  }

  .menu a:hover {
      color: #27ae60; /* Green on hover */
  }

  /* Adjust the styling for markdown lists */
  ul {
      list-style-type: square;
      color: #ecf0f1;
  }

  /* Styling tables with dark theme */
  table {
      border-collapse: collapse;
      width: 100%;
      background-color: #345e40;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #2ecc71; /* Green for table headers */
      color: white;
  }

  /* Custom styling for links with better visibility */
  a {
      color: #2ecc71; /* Green links */
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
      color: #27ae60; /* Dark green on hover */
  }
</style>


<h1>Tuples</h1>

A tuple is an immutable ordered collection of elements. Unlike lists, tuples cannot be modified after their creation, making them useful for storing fixed collections of items.




```python
# Example of tuple operations in Python


# Creating a tuple
my_tuple = (10, 20, 30, "Hello")
print("Initial Tuple:", my_tuple)  # Output: Initial Tuple: (10, 20, 30, "Hello")


# Accessing elements
first_element = my_tuple[0]  # 10
print("First Element:", first_element)  # Output: First Element: 10


# Length of the tuple
length = len(my_tuple)
print("Length of the Tuple:", length)  # Output: Length of the Tuple: 4


# Concatenation
another_tuple = (40, 50)
concatenated = my_tuple + another_tuple
print("Concatenated Tuple:", concatenated)  # Output: Concatenated Tuple: (10, 20, 30, "Hello", 40, 50)


# Repetition
repeated = my_tuple * 2
print("Repeated Tuple:", repeated)  # Output: Repeated Tuple: (10, 20, 30, "Hello", 10, 20, 30, "Hello")


# Attempting to modify a tuple (will raise an error)
# Uncommenting the line below will result in a TypeError
my_tuple[1] = 25  # This will result in a TypeError

```

    Initial Tuple: (10, 20, 30, 'Hello')
    First Element: 10
    Length of the Tuple: 4
    Concatenated Tuple: (10, 20, 30, 'Hello', 40, 50)
    Repeated Tuple: (10, 20, 30, 'Hello', 10, 20, 30, 'Hello')



    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    Cell In[7], line 32
         27 print("Repeated Tuple:", repeated)  # Output: Repeated Tuple: (10, 20, 30, "Hello", 10, 20, 30, "Hello")
         30 # Attempting to modify a tuple (will raise an error)
         31 # Uncommenting the line below will result in a TypeError
    ---> 32 my_tuple[1] = 25  # This will result in a TypeError


    TypeError: 'tuple' object does not support item assignment



```javascript
%%javascript

// Although JavaScript doesn't have a built-in tuple type,
// we can use arrays to emulate tuple behavior.


// Creating a tuple-like array
let myTuple = [10, "Hello", true];
console.log("Initial Tuple:", myTuple);  // Output: Initial Tuple: [10, "Hello", true]


// Accessing elements
let firstElement = myTuple[0];  // 10
console.log("First Element:", firstElement);  // Output: First Element: 10


// Length of the tuple-like array
let length = myTuple.length;
console.log("Length of the Tuple-like Array:", length);  // Output: Length of the Tuple-like Array: 3


```

<h1>Dictionaries</h1>

A dictionary is a collection of key-value pairs, where each key is unique. It allows you to store and retrieve data based on a key rather than an index, like in a list.


```python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(person["name"])  # Output: Alice

```

    Alice



```javascript
%%javascript

// Define a dictionary (object) to store student information
let students = {
    "Alice": {
        "age": 25,
        "isStudent": true,
        "courses": ["Math", "Science"]
    },
    "Bob": {
        "age": 22,
        "isStudent": true,
        "courses": ["History", "Art"]
    },
    "Charlie": {
        "age": 28,
        "isStudent": false,
        "courses": []
    }
};

// Accessing information from the dictionary
console.log("Alice's age: ", students["Alice"]["age"]);  // Output: Alice's age: 25
console.log("Bob's courses: ", students["Bob"]["courses"]);  // Output: Bob's courses: ["History", "Art"]

// Adding a new student to the dictionary
students["David"] = {
    "age": 24,
    "isStudent": true,
    "courses": ["Computer Science", "Physics"]
};

// Modifying information
students["Alice"]["isStudent"] = false;  // Alice is no longer a student
console.log("Updated Alice's information: ", students["Alice"]);
// Output: Updated Alice's information: {age: 25, isStudent: false, courses: ["Math", "Science"]}

```

<h1>Sets</h1>
<p>
   - A set is an unordered collection of unique items. Sets are useful when you want to ensure that there are no duplicate elements. <br>
   - Sets are unordered and unindexed. You cannot access elements by position. <br>
   - Sets automatically remove duplicates. <br>
</p>


```python
fruits = {"apple", "banana", "orange"}
print(fruits)  # Output: {'banana', 'apple', 'orange'} (order is not guaranteed)

# Adding a new item to a set
fruits.add("grape")
print(fruits)  # Output: {'banana', 'grape', 'apple', 'orange'}

# Duplicate items are ignored
fruits.add("apple")
print(fruits)  # Output: {'banana', 'grape', 'apple', 'orange'}

```

    {'banana', 'orange', 'apple'}
    {'banana', 'orange', 'grape', 'apple'}
    {'banana', 'orange', 'grape', 'apple'}



```javascript
%%javascript

// Creating a new Set with some initial values
let fruits = new Set(["apple", "banana", "orange"]);

// Adding values to the Set
fruits.add("grape");
fruits.add("banana");  // This won't be added again since it's a duplicate

// Display the contents of the Set
console.log(fruits);  // Output: Set(4) {"apple", "banana", "orange", "grape"}

// Deleting an item from the Set
fruits.delete("orange");
console.log("After deleting 'orange':", fruits);  // Output: Set(3) {"apple", "banana", "grape"}

```

<h1>Booleans</h1>

A boolean is a data type that can have one of two values: `True` or `False`. Booleans are commonly used in conditional statements to control the flow of programs.


```python
is_sunny = True
is_raining = False

if is_sunny:
    print("Go outside!")  # Output: Go outside!

```

    Go outside!



```python
%% javascript

// Simple boolean values
let isStudent = true;
let isLoggedIn = false;

// Check conditions with booleans
if (isStudent) {
    console.log("The user is a student.");
} else {
    console.log("The user is not a student.");
}
// Output: The user is a student.

```

<h1>None</h1>

None is a special constant in Python that represents the absence of a value or a null value. It’s commonly used as a placeholder for optional or yet-to-be-assigned values. It is also used to indicate "no value" or "empty"


```python
val = None
print(val is None)  # Output: True

```

    True



```python
let val = null;
console.log(val === null);  // Output: true

```

<h1>Popcorn Hack: create a dictionary, update an item, and add an item</h1>


```python
# Creating dictionary 
person = {
    "name": "Alice",
    "age": 25,
    "is_student": False
}

person["age"] = 26     # Update item

# Adding an item
person["David"] = {
    "name": "David",   
    "age": 22,
    "is_student": True
} 
```
