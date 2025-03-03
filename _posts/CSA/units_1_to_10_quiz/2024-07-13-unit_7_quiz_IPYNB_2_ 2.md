---
layout: post
title: Quiz Questions for APCSA Unit 7
description: Questions and Code Cells for the Quiz on Unit 7
categories: [AP CSA]
permalink: /csa/units/quiz7
author: Soham Kamat & Aniket Chakradeo
---

## Unit 7: ArrayList
How do you create an ArrayList of Strings in Java?<br>
a) ArrayList<String> list = new ArrayList<>();<br>
b) ArrayList<String> list = new ArrayList<String>();<br>
c) ArrayList<String> list = new ArrayList();<br>
d) ArrayList list = new ArrayList<String>();

Answer: b) ArrayList<String> list = new ArrayList<String>();

Which method is used to add an element to an ArrayList?<br>
a) add()<br>
b) insert()<br>
c) append()<br>
d) push()

Answer: a) add()

What is the output of the following code?
```java
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
System.out.println(list.get(1));
```
a) 10<br>
b) 20<br>
c) 1<br>
d) Compile-time error

Answer: b) 20


## Unit 8: 2D Array

How do you declare a 2D array of integers in Java?<br>
a) int[][] array;<br>
b) int array[][];<br>
c) int[] array[];<br>
d) All of the above

Answer: d) All of the above

What is the output of the following code?
```java
int[][] arr = { {1, 2}, {3, 4} };
System.out.println(arr[1][0]);
```
a) 1<br>
b) 2<br>
c) 3<br>
d) 4

Answer: c) 3

Which of the following correctly initializes a 2D array with 3 rows and 4 columns?<br>
a) int[][] arr = new int[3][4];<br>
b) int[] arr = new int[3][4];<br>
c) int[][] arr = new int[4][3];<br>
d) int[] arr = new int[4][3];

Answer: a) int[][] arr = new int[3][4];

## Unit 9: Inheritance
Which keyword is used to inherit a class in Java?<br>
a) inherits<br>
b) extends<br>
c) implements<br>
d) super

Answer: b) extends

What is the correct way to call a parent class's constructor in a subclass?<br>
a) super();<br>
b) parent();<br>
c) base();<br>
d) this();

Answer: a) super();

Which of the following statements about inheritance is true?<br>
a) A subclass can inherit private members of a superclass.<br>
b) A subclass cannot override methods of a superclass.<br>
c) A subclass can only have one superclass.<br>
d) A subclass must have the same name as the superclass.

Answer: c) A subclass can only have one superclass.

## Unit 10: Recursion

Which of the following is an example of a recursive method?<br>
a) A method that calls itself<br>
b) A method that calls another method<br>
c) A method that runs indefinitely<br>
d) A method that returns a value

Answer: a) A method that calls itself

What is the base case in a recursive method?<br>
a) The condition under which the method stops calling itself<br>
b) The first call to the recursive method<br>
c) The last call to the recursive method<br>
d) The condition under which the method calls itself

Answer: a) The condition under which the method stops calling itself

What will be the output of the following recursive method when called with factorial(3)?
```java
public int factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
```
a) 6<br>
b) 3<br>
c) 0<br>
d) 1

Answer: a) 6
