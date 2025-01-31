---
toc: false
layout: post
title: Seed Tracker Teacher
type: ccc
permalink: /project/mort-translator/student-tracker
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Project Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F9F9F9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 20px;
        }
        .container {
            background-color: #000000;
            padding: 30px;
            border-radius: 12px;
            animation: moving-glow 2s infinite;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 600px;
            max-width: 100%;
        }
        h1 {
            font-size: 28px;
            color: white;
            margin-bottom: 20px;
        }
        .form-group {
            width: 100%;
            margin-bottom: 12px;
        }
        .form-group label {
            font-size: 18px;
            color: white;
            margin-bottom: 5px;
            display: block;
        }
        .form-group input,
        .form-group button {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            margin: 12px 0;
            border: 1px solid #ddd;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .form-group button {
            background-color: #4CAF50;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
            border: none;
        }
        .form-group button:hover {
            background-color: #45A049;
        }
        .range-value {
            font-weight: bold;
            font-size: 18px;
            color: #00FFA2;
            text-align: center;
            margin-top: 8px;
        }
        @keyframes moving-glow {
            0% {
                box-shadow: 0 0 10px rgba(81, 0, 255, 0.8);
            }
            50% {
                box-shadow: 0 0 30px rgba(81, 0, 255, 0.8);
            }
            100% {
                box-shadow: 0 0 10px rgba(81, 0, 255, 0.8);
            }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Project Submission</h1>
    <div class="form-group">
        <label for="studentName">Student Name</label>
        <input type="text" id="studentName" placeholder="Enter your name" required>
    </div>
    <div class="form-group">
        <label for="gradeRequest">Requested Grade (Seed)</label>
        <input type="range" id="gradeRequest" min="0" max="1" step="0.1" value="0.5" oninput="updateRangeValue(this.value)">
        <div class="range-value" id="rangeValue">5</div>
    </div>
    <div class="form-group">
        <button onclick="submitEntry()">Submit Entry</button>
    </div>
    <div class="range-value" id="message"></div>
</div>

<script>
    function updateRangeValue(value) {
        document.getElementById('rangeValue').innerText = value;
    }

    async function submitEntry() {
        const studentName = document.getElementById('studentName').value;
        const gradeRequest = document.getElementById('gradeRequest').value;
        const messageElement = document.getElementById('message');

        if (!studentName) {
            messageElement.textContent = "Please enter your name before submitting.";
            return;
        }

        // check that this matches an ID in the database 

        const entryData = {
            name: studentName,
            grade: parseFloat(gradeRequest)
        };

        try {
            const response = await fetch('http://localhost:8085/api/grades/requests/seed', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entryData)
            });

            if (response.ok) {
                const result = await response.json();
                messageElement.textContent = `Entry submitted successfully! Your Entry ID is: ${result.id}`;
            } else {
                throw new Error("Failed to submit entry");
            }
        } catch (error) {
            messageElement.textContent = "Error submitting entry. Please try again.";
            console.error("Submission error:", error);
        }
    }
</script>
</body>
</html>
