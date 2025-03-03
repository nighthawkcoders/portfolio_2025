---
toc: False
comments: True
layout: post
title: 3.2.3 JSON implementation
description: Student led teaching on converting from Python to JSON.
permalink: /csp/big-idea/p3/3-2-3
author: Gabriela Connelly
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


<h1>JSON - JavaScript Object Notation</h1>
<p>
    JSON is a lightweight data interchange format that is easy for people and machines to understand. It is widely used for data exchange between a client and a server, as well as for storing and transporting data.
    In Python, the `json` module provides methods to convert Python objects into JSON and vice versa. This process is known as serialization (converting Python objects to JSON) and deserialization (converting JSON to Python objects). JSON is used when data is sent from a web server to a webpage.
</p>


```python
# using json.dumps method to serialize Python objects into a JSON-formatted string
import json

# Python dictionary
python_dict = {
    "name": "Alice",
    "age": 25,
    "is_student": False,
    "courses": ["Math", "Science"],
    "details": {
        "height": 1.65,
        "address": "123 Main St"
    }
}

# Convert dictionary to JSON string
json_string = json.dumps(python_dict)
print(json_string)

# writes the JSON string representation of python_dict directly into a file
with open('data.json', 'w') as json_file:
    json.dump(python_dict, json_file)


```

    {"name": "Alice", "age": 25, "is_student": false, "courses": ["Math", "Science"], "details": {"height": 1.65, "address": "123 Main St"}}


<h1>Formatting</h1>
<p>
    Key Parameters for Formatting JSON: <br>
    - `indent`: Adds indentation to each level of the JSON object, making it easier to read <br>
    - `separators`: Controls how items are separated in the JSON string. By default, the separators are `(", ", ": ") <br>
    - `sort_keys`: When `True`, this sorts the keys in the output JSON by alphabetical order. <br>
</p>


```python
import json

python_dict = {
    "name": "Alice",
    "age": 25,
    "is_student": False,
    "courses": ["Math", "Science"],
    "details": {
        "height": 1.65,
        "address": "123 Main St"
    }
}

y = json.dumps(python_dict, indent=4) # `indent` formats the JSON string for readability
print(y + "\n") # '\n' adds a space 

y = json.dumps(python_dict, indent=4, separators=(".", " = ")) # uses a '=' instead of ':'
print(y + "\n")


```

    {
        "name": "Alice",
        "age": 25,
        "is_student": false,
        "courses": [
            "Math",
            "Science"
        ],
        "details": {
            "height": 1.65,
            "address": "123 Main St"
        }
    }
    
    {
        "name" = "Alice".
        "age" = 25.
        "is_student" = false.
        "courses" = [
            "Math".
            "Science"
        ].
        "details" = {
            "height" = 1.65.
            "address" = "123 Main St"
        }
    }
    


<h1>
    JSON in JavaScript
</h1>
<p>
    JSON (JavaScript Object Notation) is natively supported in JavaScript and is widely used for data interchange. You can convert JavaScript objects to JSON strings using the built-in  `JSON` object.
</p>


```python

// Step 1: Creating a JavaScript object
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    courses: ["Math", "Science"]
};

// Step 2: Converting the object to a JSON string
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Step 3: Parsing the JSON string back into a JavaScript object
const parsedPerson = JSON.parse(jsonString);
console.log("Parsed Person Object:", parsedPerson);

// Accessing properties from the parsed object
console.log("Name:", parsedPerson.name);  // Output: Alice
console.log("Age:", parsedPerson.age);    // Output: 30

```

<h1>
    Popcorn Hack: Use JSON to make a dictionary, modify it, and update the changes
</h1>


```python
import json

book_data = {
    "title": "Python for Beginners",
    "author": "Jane Smith",
    "publication_year": 2022,
    "genres": [
        "Education",
        "Programming",
        "Technology"
    ],
    "ratings": {
        "average_rating": 4.7,
        "number_of_ratings": 180
    }
}

book_json = json.dumps(book_data, indent=4)
print(book_json)

book_data['ratings']['average_rating'] = 4.9

updated_book_json = json.dumps(book_data, indent=4)
print(updated_book_json)
```

<h1>
    Homework
</h1>
<p>
    1. Create a dictionary with at least 3 keys. Print the dictionary. <br>
    2. Start with this dictionary: person = {"name": "Alice", "age": 30} <br>
            i. Update the age to 31 <br>
            ii. print the updated dictionary. <br>
</p>


<h1>
    Grading for Hacks and Homework
</h1>
<ul>
    <li style="padding-bottom: 10px;">all requirements must be completed</li>
    <li style="padding-bottom: 10px;">be creative! go above and beyond when possible</li>
        <li style="padding-bottom: 10px;">show understanding by explaining each step</li>
</ul>


