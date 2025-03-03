---
toc: false
layout: post
title: Seed Tracker Teacher
type: ccc
permalink: /student/seedtracker
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Weekly Project Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
            max-width: 450px;
            width: 100%;
            text-align: center;
        }
        .container h1 {
            font-size: 26px;
            margin-bottom: 20px;
            color: #374785;
        }
        .form-group {
            margin-bottom: 18px;
            text-align: left;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
            color: #24305e;
        }
        .form-group input,
        .form-group textarea,
        .form-group button {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
        }
        .form-group textarea {
            resize: vertical;
        }
        .form-group button {
            background-color: #ff6b6b;
            color: #ffffff;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: background-color 0.3s;
            border: none;
        }
        .form-group button:hover {
            background-color: #ff4b4b;
        }
        .form-group input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
        }
        .form-group input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #374785;
            cursor: pointer;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        }
        .form-group input[type="range"]::-webkit-slider-runnable-track {
            height: 5px;
            border-radius: 3px;
            background: #d3d3d3;
        }
        .range-value {
            font-weight: bold;
            font-size: 18px;
            color: #ff6b6b;
            text-align: center;
            margin-top: 8px;
        }
        .message {
            font-size: 14px;
            color: #374785;
            margin-top: 15px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Weekly Project Submission</h1>
    <div class="form-group">
        <label for="studentName">Student Name</label>
        <input type="text" id="studentName" placeholder="Enter your name" required>
    </div>
    <div class="form-group">
        <label for="activityLog">Weekly Activity Log</label>
        <textarea id="activityLog" rows="4" placeholder="Describe what you did this week..." required></textarea>
    </div>
    <div class="form-group">
        <label for="gradeRequest">Requested Grade (Seed)</label>
        <input type="range" id="gradeRequest" min="0" max="1" step="0.1" value="0.5" oninput="updateRangeValue(this.value)">
        <div class="range-value" id="rangeValue">5</div>
    </div>
    <div class="form-group">
        <button onclick="submitEntry()">Submit Entry</button>
    </div>
    <div class="message" id="message"></div>
</div>

<script type="module">
    import { javaURI } from '{{site.baseurl}}/assets/js/api/config.js';

    function updateRangeValue(value) {
        document.getElementById('rangeValue').innerText = value;
    }

    async function submitEntry() {
        const studentName = document.getElementById('studentName').value;
        const activityLog = document.getElementById('activityLog').value;
        const gradeRequest = document.getElementById('gradeRequest').value;
        const messageElement = document.getElementById('message');

        // Data validation
        if (!studentName || !activityLog) {
            messageElement.textContent = "Please fill in all fields before submitting.";
            return;
        }

        // Preparing the data for submission
        const entryData = {
            name: studentName,
            comment: activityLog,
            grade: parseFloat(gradeRequest)
        };

        try {
            // Post data to the backend
            const response = await fetch(`${javaURI}/api/grades/requests/seed`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entryData)
            });

            // Check if the submission was successful
            if (response.ok) {
                const result = await response.json();
                const generatedId = result.id;  // Backend-generated ID
                messageElement.textContent = `Entry submitted successfully! Your Entry ID is: ${generatedId}`;
            } else {
                throw new Error("Failed to submit entry");
            }
        } catch (error) {
            messageElement.textContent = "Error submitting entry. Please try again.";
            console.error("Submission error:", error);
        }
    }

    // Adding event listener to submit on pressing "Enter"
    document.getElementById('activityLog').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the Enter key from creating a new line
            submitEntry();
        }
    });
</script>

</body>
</html>