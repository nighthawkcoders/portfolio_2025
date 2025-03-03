---
layout: post
title: Quiz Questions for APCSA Unit 2
description: Quiz Questions and Code Cells for APCSA Unit 2
categories: [AP CSA]
permalink: /csa/units/quiz2
menu: nav/CSA_Units/csa_unit2.html
author: Soham Kamat & Aniket Chakradeo
---

## Unit 2: Using Objects Quiz

### Question 1
**Which method can be used to convert a string to lowercase in Java?**

a) `toLowerCase()`

b) `lower()`

c) `toLower()`

d) `toLowerCase(String str)`

**Answer:** a) `toLowerCase()`

---




```Java
// Hack Q1,1: comment code (focus on Primitives, Arrays, Objects, and Methods)
// Hack Q1,2: make a class with main method to test all the failure cases

String[] arr1 = {"a", "b", "c", "d"};
String[] arr2 = {"A", "B", "C", "D"};

String msg = "The arrays are equal";

if (arr1.length != arr2.length) {
    msg = "The arrays are not uniform";
} else {
    for (int i = 0; i < arr1.length; i++) {
        if (!arr1[i].toLowerCase().equals(arr2[i].toLowerCase())) {
            msg = "The arrays contain differences in elements";
            break;
        }
    }
}

System.out.println(msg);

```

### Question 2
**What is the output of the following code?**

```java
String s = "Hello World!";
System.out.println(s.length());
```

a) `11`

b) `12`

c) `13`

d) `10`

Answer: 

---



```Java
// Answer Q2
// Hack: Prove it with code
```

### Question 3

**Which of the following is a correct way to create an instance of the String class?**

a) `String s = 'Hello';`

b) `String s = new String("Hello");`

c) `String s = String("Hello");`

d) `String s = Hello;`

Answer: 

---


```Java
// Answer Q3, be careful with answer
// Hack: Prove it with code
```
