---
toc: false
layout: post
title: Hacks Grader
permalink: /student/TeamTeachToolkit/grader
description: Grade hacks on a 0.55 scale while also providing feedback
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacks Grader</title>
<style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1, h2 {
            margin-top: 10px;
        }
        .nav-buttons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
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
        .nav-buttons button:hover {
            background-color: gray;
        }
        .signout {
            text-align: right;
            padding: 10px;
            margin-right: 20px;
        }
        .container {
            margin-top: 40px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #ask-question {
            margin-top: 30px;
        }
        textarea {
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            box-sizing: border-box;
            background-color: #333;
            border: 1px solid #555;
            color: white;
            resize: none;
            overflow: hidden;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            background-color: black;
            border: 1px solid white;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: gray;
        }
        .question {
            background-color: #222;
            padding: 10px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .reply-box {
            display: none;
            background-color: #333;
            padding: 10px;
            margin-top: 10px;
        }
        .arrow {
            cursor: pointer;
            font-size: 24px;
            padding: 0 10px;
        }
        .section-title {
            font-size: 36px;
            margin-bottom: 30px;
        }
        .output {
            margin-top: 20px;
        }
        .form-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .form-box label {
            width: 50%;
            text-align: left;
            margin-top: 10px;
        }
        select {
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            box-sizing: border-box;
            background-color: #333;
            border: 1px solid #555;
            color: white;
        }
        .post-meta {
            display: none;
        }
    </style>
</head>
<body>

    <!-- Navigation buttons -->
    <div class="nav-buttons">
      <a href="{{site.baseurl}}/student/TeamTeachToolkit"><button>Home</button></a>
      <a href="{{site.baseurl}}/student/TeamTeachToolkit/generator"><button>Generator</button></a>
        <a href="{{site.baseurl}}/student/TeamTeachToolkit/review"><button>Review</button></a>
    </div>

    <!-- Main Grader section -->
    <div class="container">
        <!-- Grading Form -->
        <div class="form-box">
            <label for="requirements">Requirements:</label>
            <textarea id="requirements" placeholder="Write requirements here" oninput="adjustTextareaHeight(this)"></textarea>
            
            <label for="code">Code:</label>
            <textarea id="code" placeholder="Insert your code here" oninput="adjustTextareaHeight(this)"></textarea>
            
            <button class="submit-btn" onclick="submitCode()">Submit Requirement and Code</button>

            <!-- Displayed output -->
            <div class="output">
                <p><strong>Feedback:</strong> <span id="feedback"></span></p>
            </div>
        </div>
    </div>

    <script>
        function adjustTextareaHeight(textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }

        function submitCode() {
            // Get the values from the dropdown and textarea
            const prompt = document.getElementById("requirements").value;
            const codeBlock = document.getElementById("code").value;

            // Prepare the data to send in the POST request
            const requestData = {
                prompt: prompt,
                code_block: codeBlock
            };

            // Send the POST request using fetch
            fetch('https://grading.stu.nighthawkcodingsociety.com/grader/input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())  // Parse the response as JSON
            .then(data => {
                // Process the response data here (e.g., display feedback)
                document.getElementById('feedback').innerText = data.response;
            })
            .catch(error => {
                // Handle errors (e.g., network issues)
                alert("An error occurred: " + error.message);
            });
        }
    </script>

</body>
</html>