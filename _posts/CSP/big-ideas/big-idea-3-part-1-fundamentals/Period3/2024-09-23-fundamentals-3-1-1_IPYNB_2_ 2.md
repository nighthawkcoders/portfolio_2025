---
toc: False
comments: True
layout: post
title: 3.1.1 Python Variables
description: This is a student taught lesson on Python Variables, here you'll learn key concepts from Big Idea 3!
permalink: /csp/big-idea/p3/3-1-1
author: Ahaan Vaidyanathan, Spencer Lyons, Vasanth Rajasekaran, Xavier Thompson
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
 border-bottom: 2px solid #f1c40f;
 padding-bottom: 5px;
 margin-bottom: 15px;
 }

 /* Custom style for inline code */
 code {
 background-color: #34495e;
 color: #e74c3c;
 padding: 2px 5px;
 border-radius: 4px;
 }

 /* Custom style for preformatted code blocks */
 pre {
 background-color: #2b2b2b;
 color: #f1f1f1;
 padding: 10px;
 border-radius: 5px;
 border: 1px solid #f1c40f; /* Updated border color */
 overflow-x: auto;
 }

 /* Code block syntax highlighting */
 .hljs-keyword, .hljs-selector-tag, .hljs-subst {
 color: #f92672; /* Keywords */
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

 /* Highlight blockquotes in orange */
 blockquote {
 border-left: 4px solid #f39c12;
 padding-left: 10px;
 color: #ecf0f1;
 font-style: italic;
 background-color: #2d2d2d;
 padding: 10px;
 border-radius: 4px;
 }

 /* Styling for emphasized text */
 em {
 color: #f39c12; /* Orange color for emphasized text */
 font-style: italic;
 }

 /* Style for bold text */
 strong {
 color: #ecf0f1;
 font-weight: bold;
 }

 /* Menu styling */
 .menu {
 background-color: #f1c40f;
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
 color: #f39c12; /* Orange on hover */
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
 background-color: #5e5e34;
 }
 
 table, th, td {
 border: 1px solid #7f8c8d;
 padding: 8px;
 color: #ecf0f1;
 }

 th {
 background-color: #f1c40f;
 color: white;
 }

 /* Custom styling for links with better visibility */
 a {
 color: #1abc9c;
 text-decoration: none;
 }

 a:hover {
 text-decoration: underline;
 color: #16a085;
 }
</style>


## The Magic of Python Variables

Variables essentially act as storage containers to store information

For Example:


```python
example = 3
starter = "Hello world!!"
value = "variable"
```

Here we are assigning variables, as you can see these variables can contain numbers or text.

Now, we can do:


```python
print(starter)
print(example)
print(value)
```

    Hello world!!
    3
    variable


As shown, the print function allows us to display the values of our variables as output.

We use variables because it allows us to have more efficency when creating our code (imagine having to type out your phrases everytime). So there are many ways to excute and code a program, however we always want to find the most efficent way. Let's look at this example.


```python
print("Hello World, Welcome")
print("Hello World, Welcome")
print("Hello World, Welcome")
print("Hello World, Welcome")
print("Hello World, Welcome")
```

    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome


This is really tedious and time consuming, let's explore how to make it more efficient using variables.



```python
hi= "Hello World, Welcome"

print(hi)
print(hi)
print(hi)
print(hi)
print(hi)

```

    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome
    Hello World, Welcome


This is way you need to put in less effort, and is much more efficent than typing hello world 5 times. **BUT** there is an even more efficent way to set this code up with For Loops, but that is for a later lesson.

### Variable Naming:

There are <span style="color:orange">4 Important</span> coding practices to follow when it comes to naming variables. These "coding practices" are called **Naming Conventions**, these conventions are a set of rules on how to name a variable.


#### SnakeCase

In SnakeCase, spaces between words in a variable name are replaced with an underscore (_). Everything is written in lowercase. This is the standard way to name variables, functions, and methods in Python.

Here's a cool example on how we can use SnakeCase!


```python
snake_case_example = "This is how variables are named using SnakeCase"
# Notice that the variable is lowercase and words are broken a part by spaces
print(snake_case_example)

```

    This is how variables are named using SnakeCase


#### PascalCase

In PascalCase, every word in the name starts with a capital letter, and there are no spaces between words. This style is mainly used for naming classes in Python, but not for variables.



```python
PascalCase = "This is how variables are named using PascalCase"
# Notice that the words aren't broken up by spaces and that the words start with capital letters
print(PascalCase)
```

    This is how variables are named using PascalCase


#### CamelCase

CamelCase is where you have the first word in lowercase and then the first letter of the subsequent words are capitalized. 


```python
camelCase = "This is how we can name variables using CamelCase"
# Notice how the first word is completely lower case and the first letter of the second word is upper case.
print(camelCase)
```

### UpperCase Constants
Upper case constants are variables in programming that are typically named using all capital letters to indicate that their value should remain unchanged throughout the execution of a program. They often represent fixed values, such as configuration settings, limits, or mathematical constants like pi (3.14). Using upper case helps to distinguish constants from regular variables, enhancing code readability and maintainability. Common practices include using underscores to separate words (e.g., MAX_SIZE) and defining them at the beginning of a file or class for easy access and modification.


```python
PI = 3.14159
EULER_NUMBER = 2.71828

ERROR_NOT_FOUND = 404
ERROR_SERVER = 500

print(PI)
print(EULER_NUMBER)
print(ERROR_NOT_FOUND)
print(ERROR_SERVER)
```

    3.14159
    2.71828
    404
    500


> ### Popcorn Hack # 1 
> Try making your own PascalCase variable and set the variable to a string.

> ### Popcorn Hack # 2
> Now try making your own CamelCase variable and set the variable equal to a integer.

### Variable Types

In Python there are many variables
Some include...

#### Integers
Integers are numerical values such as 1, 2, 3, 4 or -1. There are no decimals in an integer. 
'''

> These values must be whole digit numbers


```python
int_var = 10
# This variable is defined using SnakeCase
```

#### Strings
Strings are a chain of text, numbers or characters, all inside of “ "
'''
> Numbers can be set as strings but must also be included in " " or using the str() function.


```python
# Numbers can be turned into strings by using quotes or the str() function
str_var = "Hello World"

# Convert a value to a string using the str() function
int_var = 104
str_var = str(int_var)  # Turns the number 104 into the string "104"

# You can access individual characters of the string using square brackets
letter_one = str_var[0]  # Gets the first character (e.g., "1" from "104")

# You can also get a section of the string by specifying a range in the brackets
half = str_var[0:5]  # Gets characters from position 0 to 4

# To split a string into parts, use split() and specify the separator (e.g., space)
str_var.split(" ")  # Splits the string into a list at each space, like ["Hello", "World"]

# To join parts of a list into a string, use the join() function with a separator
rejoin_str = ","  # Defines the character that will be used to join parts (a comma)
rejoin_str.join(str_var)  # Joins the parts using the separator (comma) between each letter

```




    '1,0,4'




#### Boolean
Booleans are True or False, they are used for conditional statements (Usually in "if statements" or "while loops").
'''
> These can be extremely useful in **if statements**.


```python
bool_var = True 

if bool_var:
 int_var = 10
else:
 str_var = "Hello World"
```


#### Float
Floats are numbers that have decimals


```python
# Float Examples
pi = 3.141
e = 2.718
atmGasConstant = 0.08206
standardTemperature = 273.15
faradayConstant = 96485.00
```


#### Lists
Lists are ordered collections of items in Python. They can contain a mix of different data types, including integers, floats, strings, and more. However, it is more common to have list contain the same data type.


```python
# Lists are very useful to store data for a later use, its like a bunch of variables compacted into one.
lst = ["s", "i", "g", "m", "a"]

# To retrieve something from a list, you take the index or the value's position in the list, you do it like this.
lst[0]
# Here the list will retrieve the 0th value of the list, which is "s", lists start at 0.

lst[0:3] # You can grab values from one index to another, similar to what we did in strings

# Index can also be found with the list.index() function
lst.index("g")
# The output would be 3

# To add a value to the list, you can use the list.append() function
lst.append("69")

Output: lst = ["s", "i", "g", "m", "a", 69] # Lists can include different kinds of values (int, str, bool, float, list)

# To remove a value from the list, you can use the list.remove() function
lst.remove("s")

Output: lst = [ "i", "g", "m", "a", 69]
```

> ### Popcorn Hack # 3
> Try making your own set of 3 variable variables.
> It can be anything. Use your creativity!
> Try a String or a Float

## Hacks Practice
Review each of the sections above and produce a python program that stores:

- Name as a string
- Age as a integer
- Favorite food as a string
- Mix the name, age, food into a List and a Dictionary
- Be sure to follow Snake case convention for your variables
- Build your own code cell(s) that define each variable types
- Experiment with the + operator on string types, integer types, and float types. What operations can the + operator perform?
- Provide comments and outputs in the cell that are easy to follow



```python
### Store as a Dictionary

my_dict = {
 "name": "Ahaan",
 "age": 15,
 "Favorite Food": "Pizza",
 "status": "Not as cool as spencer"
}

### Store as regular variables which can be called at any time

favorite_food = "Pizza"
my_name = "Ahaan Vaidyanathan"
my_age = 15
status = "Not as cool as spencer"

### Store as a List

my_list = ["Ahaan", 15, "Pizza"]

 
```

### Experimenting with the + operator on string types, integer types, and float types. 

There are multiple examples, here for this example. Remember, we have to use the str conversion when combining a integer or float with a string. You can also use commas to add a space and combine text.

Here are both examples:



```python
print("Hi" + " "+ "I am"+ " "+str(15)+ " "+ "years old")
print("Congrats for Learning 3.1")

# With commas
print("Hi", "how", "are", "you" + "?") # Can be useful when printing out separate strings without combining them.

# Or even better
code = "code "
print(code * 3) # The asterisk can be used to print a variable multiple times
```

### Further Study on Coding Conventions

To deepen your understanding of variables and coding conventions, you can explore the following resource:

Click the button below to directly access the tutorial:

[![Python Variables](https://img.shields.io/badge/Explore%20Python%20Variables-blue)](https://www.w3schools.com/python/python_variables_names.asp)


<iframe src="https://www.online-python.com/" width="100%" height="600"></iframe>

