---
layout: post
title: Quiz Questions for APCSA Unit 10
description: Questions and Code Cells for the Quiz on Unit 10
categories: [AP CSA]
permalink: /csa/units/quiz10
author: Soham Kamat & Aniket Chakradeo
---

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
