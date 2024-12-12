--- 
toc: false
layout: post
title: Grader Project
description: Grade popcorn hacks, generate hacks, or ask questions here
courses: {'csa': {'week': 1}}
categories: ['AP CSA']
type: ccc
permalink: /project/teacher-toolkit
---

{% include nav/home.html %}

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAGAI Login/Signup</title>
    <style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            display: flex;
            justify-content: space-around;
            padding-top: 50px;
        }
        h1 {
            margin-top: 30px;
            font-size: 36px;
        }
        h2 {
            font-size: 16px;
        }
        .nav-buttons {
            margin-top: 20px;
        }
        .nav-buttons button {
            background-color: black;
            color: white;
            border: 1px solid white;
            padding: 10px 20px;
            margin: 0 10px;
            cursor: pointer;
            font-size: 16px;
        }
        .login-signup {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 50px;
        }
        .form-box {
            text-align: left;
            padding: 20px;
            border: 1px solid white;
            width: 250px;
        }
        .form-box label {
            display: block;
            margin-bottom: 8px;
        }
        .form-box input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid white;
            background-color: black;
            color: white;
        }
        .form-box button {
            background-color: white;
            color: black;
            padding: 10px;
            width: 100%;
            cursor: pointer;
            border: none;
        }
        .form-box button:hover {
            background-color: gray;
        }
    </style>
</head>

<body>
    <h1>SAGAI</h1>
    <h2>Super Advanced Grader Artificial Intelligence</h2>
    <div class="nav-buttons">
        <a href="{{site.baseurl}}/collaboration/2024/10/21/Grader_Grader.html"><button>Grader</button></a>
        <a href="{{site.baseurl}}/project/teacher-toolkit/generator"><button>Generator</button></a>
        <a href="{{site.baseurl}}/project/teacher-toolkit/QNA"><button>QNA</button></a>
        <a href="{{site.baseurl}}/collaboration/2024/10/21/Grader_Assignment.html"><button>Assignments</button></a>
    </div>
</body>
