---
toc: False
comments: True
layout: post
title: 3.4.3 Javascript Strings
description: Here you'll learn how strings are used in Javascript
permalink: /csp/big-idea/p3/3-4-3
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
      border-bottom: 2px solid #3498db;
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
      border: 1px solid #3498db; /* Updated border color */
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
      background-color: #2980b9;
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
      background-color: #34495e;
  }
  
  table, th, td {
      border: 1px solid #7f8c8d;
      padding: 8px;
      color: #ecf0f1;
  }

  th {
      background-color: #2980b9;
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


## Javascript Strings
The concepts of Python Strings & Javascript Strings are the same, however the way these concepts are implemented across these two languages vary, and there are some important distinctions that'll be highlighted in this blog. If you haven't already, check out the first blog that goes into detail about what strings are as we won't be covering that here.

### Making Strings
When it comes to making strings, there are three ways of going about it--- Each method requiring that you surround the text you want to make a string with these characters. These methods are listed below:

Single Quotes ('')
Double Quotes ("")
Backticks     (``)

Single Quotes and Double Quotes are the most conventionally used and serve the same purpose. Surrounding text as to delineate them as strings and not another data type. So most of the time, you'll be using either single or double quotes.

However, the last option, strings that use backticks (known as template strings), are also very important to know and a proficient coder in Javascript will take advantage of this type of string when the opportunity arises. We'll come back to this string later, but what you should know now is that it allows you to implant javascript code that isn't inherently a string into your string, such as a variable.

To confirm whether a variable is a string or not, you can put the potential string inside typeof().



```python
%%js

// Single Quotes
let greeting = 'Hello World.'

// Double Quotes
let age = "15"

// Checking if string
typeof(greeting) //Output: True
typeof(age) //Output: True
```

### Concatenation
Concatenation is the combining or joining of different strings. It allows us to take one string and merge it with another. Refer to the example below:


```python
%%js

let greeting = "Hello " + "World";
console.log(greeting); // Output: Hello World

let word = "Book" + "case";
console.log(word) //Output: Bookcase

console.log ( greeting + word ) //Output: Hello World Bookcase
```

The idea behind concatenation serves to solve the problem that often we need to separate strings to store dynamic data (such as data inputted by the user) and combine them to create one coherent string.


```python
%%js

// Example 1
let userName = prompt("Enter your name: ");
let userAge = prompt("Enter your age: ");

let message = "Your name is " + userName + " and you are " + userAge + " years old."
console.log(message)


// Example 2
let favoriteColor = prompt("Enter your favorite color: ");
let favoriteAnimal = prompt("Enter your favorite animal: ");

let message = "Your favorite color is " + favoriteColor + " and your favorite animal is " + favoriteAnimal + ".";
console.log(message);
```

Now, while concatenation is great to know & understand, when coding in Javascript, there has never been a time where I have actually used concatenation in a real project, simply because of how messy and inefficient it is compared to **string interpolation**. 


### String Interpolation
String interpolation brings us back to the sacred backticks or template string! Instead of joining different strings together, template strings allow us to have variables and other javascript expressions directly embedded into our string.

The following examples are the same as the ones above, but we utilize interpolation instead of concatenation:


```python
%%js

// Example 1
let userName = prompt("Enter your name: ");
let userAge = prompt("Enter your age: ");

let message = `Your name is ${userName} and you are ${userAge} years old.`
console.log(message);


// Example 2
let favoriteColor = prompt("Enter your favorite color: ");
let favoriteAnimal = prompt("Enter your favorite animal: ");

let message = `Your favorite color is ${favoriteColor} and your favorite animal is ${favoriteAnimal}.`
console.log(message);
```

As you can see for yourself, interpolation is much cleaner & efficient than concatenation. The only things you need to do in order to interpolate a string is to:
1. Use backticks
2. Surround the variable or javascript expression in **${variable_here}**

### Popcorn Hack #1
> - Define three variables: name, age, city
> - Combine these variables into the following message: Hello, my name is [*name*]. I am [*age*] years old and I live in [*city*].
> - Do this exercise using both concatenation and interpolation

<details>
<summary>See Example Answer</summary>
<pre><code>
let name = Xavier
let age = 15
let city = San Diego

 //Concatenation
let concatenatedMessage = "Hello my name is " + name + ". I am " + age + " years old and I live in " + city + "."

//Interpolation
let Interpolatedmessage = "Hello my name is ${name}. I am ${age} years old and I live in ${city}.
    
</code></pre>
</details>

### Indexing a Character

Indexing a character is just a more technically correct way of saying how to access a character within a string. Each character in a string is assigned a number that we can use to access it individually.


```python
%%js

let state = "California"

console.log(state[0]) //Output: C
console.log(state.at(0)) //Output: C

console.log(state[-1]) //Output: undefined
console.log(state.at(-1)) //Output: a
```

If you recall from the Python Strings Lesson, the first character starts at 0 and we can only count backwards with negative numbers. For JavaScript, there are two ways to access a character:

1. brackets: **[#]**
2. at method: **.at(#)**

I personally recommend using .at() as brackets can't do negative numbers (outputs undefined) unless you take a few extra steps, making it unreasonably more complex.

However, unlike Python, we cannot index multiple characters through the methods listed above. It's not as simple unfortunately as [0:7]. This leads us into our next section on how to index multiple characters through **substrings**

### Substrings
There are 3 ways to retrieve a substring in JavaScript: ```substring```, ```substr```, & ```slice```

For this blog post, we'll be exclusively covering ```slice``` which is arguably the most flexible of the three options. Feel free to look into the others, but keep in mind slice can do anything the other methods can and more.

Substrings is a part of a string that we have taken using the **slice** function. It allows us to take more than one character as indexing allows.

The slice() method extracts characters from a string between two specified indices and returns a new string. It takes two parameters:
- The starting index (inclusive)
- The ending index (exclusive)



```python
%%js

let message = "Hello, World!";
let country = "Eritrea";
let continent = "Africa";

console.log( message.slice(0, 5) ); //Output: Hello
console.log( message.slice(-6,-1) ); //Output: World

//Output everything starting at the "r"
console.log( country.slice(1) ); //Output: ritrea

//Output everything starting at "t"
console.log ( country.slice(-4) ); //Output: trea

//Index starting at f and ending at c (using both positive and negative indices)
console.log ( country.slice(1, -1) ) //Output: fric
```

When given a lot of data that is in the form of text (which it often is), utilizing this ability to extract certain portions of text from strings via slicing will serve to be vital.

### Popcorn Hack #2
> You are given a string "The quick brown fox jumps over the lazy dog". Your task is to write code that uses the slice() method to:
> - Extract the word "quick"
> - Extract the word "lazy" using a negative starting index
> - Extract everything from the word "fox" to the end of the sentence
> - Output these extractions at the end of the code

<details>
<summary>See Example Answer</summary>
<pre><code>
//Define string
let str = "The quick brown fox jumps over the lazy dog"

//Extraction
let wordOne = str.slice(4,9);
let wordTwo = str.slice(-8,-4);
let sentence = str.slice(16);

//Output
console.log(wordOne)
console.log(wordTwo)
console.log(sentence)
    
</code></pre>
</details>

### Escape Characters
The \ is often known as the escape character as inputting it into a string allows you to temporarily escape the string and add something to the string that isn't just text (or text that can't be added conventionally).

Here are some of the most common uses:


```python
%%js
let greeting = "Hello World"

// Create a new line
console.log("Hello\nWorld") //Output: Hello
                            //        World

// Create a horizontal tab
console.log("Hello\tWorld") //Output: Hello   World

// Create a slash
console.log("Hello\\World") //Output: Hello\World

//Add a unicode character
console.log("\u2665") //Output: ♥
```

As you can see in the example above, one ought only add a \ then an n afterwards to create a new line.


Other uses of the escape character include adding an actual slash into the string by doing ```\\``` or adding a tab by doing ```\t```. There are plenty more examples of what escape characters can do & I encourage you look into them.

### String Methods
You've already seen an example of a string method (The ```slice``` function), and what methods fundamentally are, are functions that can change or manipulate a string in a variety of ways.

I've listed some examples below, but there are countless more that can be utilized.


```python
%%js

let state = "TeXas";

// Capitalize string
let capitalize = state.toUpperCase(); //Output: TEXAS

// Lowercase string
let lowercase = state.toLowerCase(); //Output: texas


// Remove added spaces
let stateCapital = "    Austin    ";
let trim = stateCapital.trim() //Output: Austin


// Repeat ha three times
console.log("ha".repeat(3));  //Output: hahaha
```

### Popcorn Hack #3
>Examine the following string: "Spain, Song Dynasty, Aztecs, Byzantine Empire"

>Using a string method(s), make a program that replaces Spain with "Al-Andalus" and "Aztecs" with "The Triple Alliance" and then outputs the updated string at the end.

<details>
<summary>See Example Answer</summary>
<pre><code>
let civilizations = "Spain, Song Dynasty, Aztecs, Byzantine Empire"

let updatedCivilizations = civilizations.replace("Spain", "Al-Andalus").replace("Aztecs", "The Triple Alliance")

console.log(updatedCivilizations)
    
</code></pre>
</details>

### Conclusion / Things to Research Further
From making strings all the way to using functions to manipulate them, this lesson has covered all that you'll need to know when starting out with JavaScript strings. However, these are only the basics, and there is yet so much more that one can learn when it comes to strings. From comparing strings, converting strings to other data types, usage of regex, listless numbers of other string methods that are used, and much much more.

That, I recommend you look into yourself. It's really quite interesting and will enhance your proficiency of not only JavaScript but programming languages in general.

### Further Study on Strings

To learn more about handling strings in JavaScript, check out the following resource:

Click the button below to directly access the tutorial:

[![JavaScript Strings](https://img.shields.io/badge/Explore%20JavaScript%20Strings-green)](https://www.w3schools.com/js/js_strings.asp)

