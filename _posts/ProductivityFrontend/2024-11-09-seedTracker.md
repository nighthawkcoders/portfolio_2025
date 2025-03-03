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

        /* Modal Styling */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            transition: opacity 0.3s ease;
        }

        .modal {
            background-color: #fff;
            padding: 25px;
            border-radius: 12px;
            width: 350px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
            text-align: center;
            animation: modalOpen 0.4s ease-out;
            position: relative;
        }

        .modal-header {
            font-size: 20px;
            font-weight: bold;
            color: #374785;
            margin-bottom: 16px;
        }

        .score-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
        }

        .increment-controls {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-top: 15px;
        }

        .increment-button {
            background-color: #ff6b6b;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            font-size: 12px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .increment-button:hover {
            background-color: #ff4b4b;
        }

        .score-button {
            background-color: #ff6b6b;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s;
        }

        .score-button:hover {
            background-color: #ff4b4b;
        }

        .score-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        .score-display {
            font-size: 24px;
            font-weight: bold;
            color: #374785;
            min-width: 60px;
            text-align: center;
        }

        .close {
            color: #ff6b6b;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 10px;
            transition: transform 0.2s;
        }

        .close:hover {
            transform: rotate(90deg);
        }

        @keyframes modalOpen {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Weekly Project Submission</h1>
        <div class="form-group">
            <label for="studentId">Student ID</label>
            <input type="number" id="studentId" placeholder="Enter your Student ID" required>
        </div>
        <div class="form-group">
            <label for="studentName">Student Name</label>
            <input type="text" id="studentName" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" required>
        </div>
        <div class="form-group">
            <label for="activityLog">Weekly Activity Log</label>
            <textarea id="activityLog" rows="4" placeholder="Describe what you did this week..." required></textarea>
        </div>
        
        <div class="form-group">
            <button onclick="openModal('seedStarterModal')">Seed Starter</button>
            <button onclick="openModal('classroomConductModal')">Classroom Conduct</button>
            <button onclick="openModal('ecEventModal')">EC Event</button>
            <button onclick="openModal('ecAssignmentModal')">EC Assignment</button>
            <button onclick="openModal('attendanceModal')">Attendance</button>
        </div>
        
        <div class="form-group">
            <label>Total Seed: <span id="totalSeed">0</span> / 3</label>
        </div>
        
        <div class="form-group">
            <button onclick="submitEntry()">Submit Entry</button>
        </div>
        <div class="message" id="message"></div>
    </div>

    <!-- Modals -->
    <div id="seedStarterModal" class="modal-overlay" onclick="closeModal('seedStarterModal')">
        <div class="modal" onclick="event.stopPropagation();">
            <span class="close" onclick="closeModal('seedStarterModal')">&times;</span>
            <div class="modal-header">Seed Starter</div>
            <div class="modal-content">
                <div class="score-controls">
                    <button class="score-button" onclick="adjustScore('seedStarter', -0.1)">-</button>
                    <div class="score-display"><span id="seedStarterValue">0</span> / 3</div>
                    <button class="score-button" onclick="adjustScore('seedStarter', 0.1)">+</button>
                </div>
                <div class="increment-controls">
                    <button class="increment-button" onclick="adjustScore('seedStarter', 0.01)">+0.01</button>
                    <button class="increment-button" onclick="adjustScore('seedStarter', 0.05)">+0.05</button>
                    <button class="increment-button" onclick="adjustScore('seedStarter', 0.25)">+0.25</button>
                    <button class="increment-button" onclick="adjustScore('seedStarter', 0.5)">+0.5</button>
                    <button class="increment-button" onclick="adjustScore('seedStarter', 1.0)">+1.0</button>
                </div>
            </div>
        </div>
    </div>

    <div id="classroomConductModal" class="modal-overlay" onclick="closeModal('classroomConductModal')">
        <div class="modal" onclick="event.stopPropagation();">
            <span class="close" onclick="closeModal('classroomConductModal')">&times;</span>
            <div class="modal-header">Classroom Conduct</div>
            <div class="modal-content">
                <div class="score-controls">
                    <button class="score-button" onclick="adjustScore('classroomConduct', -0.1)">-</button>
                    <div class="score-display"><span id="classroomConductValue">0</span></div>
                    <button class="score-button" onclick="adjustScore('classroomConduct', 0.1)">+</button>
                </div>
                <div class="increment-controls">
                    <button class="increment-button" onclick="adjustScore('classroomConduct', 0.01)">+0.01</button>
                    <button class="increment-button" onclick="adjustScore('classroomConduct', 0.05)">+0.05</button>
                    <button class="increment-button" onclick="adjustScore('classroomConduct', 0.25)">+0.25</button>
                    <button class="increment-button" onclick="adjustScore('classroomConduct', 0.5)">+0.5</button>
                    <button class="increment-button" onclick="adjustScore('classroomConduct', 1.0)">+1.0</button>
                </div>
            </div>
        </div>
    </div>

    <div id="ecEventModal" class="modal-overlay" onclick="closeModal('ecEventModal')">
        <div class="modal" onclick="event.stopPropagation();">
            <span class="close" onclick="closeModal('ecEventModal')">&times;</span>
            <div class="modal-header">EC Event</div>
            <div class="modal-content">
                <div class="score-controls">
                    <button class="score-button" onclick="adjustScore('ecEvent', -0.1)">-</button>
                    <div class="score-display"><span id="ecEventValue">0</span></div>
                    <button class="score-button" onclick="adjustScore('ecEvent', 0.1)">+</button>
                </div>
                <div class="increment-controls">
                    <button class="increment-button" onclick="adjustScore('ecEvent', 0.01)">+0.01</button>
                    <button class="increment-button" onclick="adjustScore('ecEvent', 0.05)">+0.05</button>
                    <button class="increment-button" onclick="adjustScore('ecEvent', 0.25)">+0.25</button>
                    <button class="increment-button" onclick="adjustScore('ecEvent', 0.5)">+0.5</button>
                    <button class="increment-button" onclick="adjustScore('ecEvent', 1.0)">+1.0</button>
                </div>
            </div>
        </div>
    </div>

    <div id="ecAssignmentModal" class="modal-overlay" onclick="closeModal('ecAssignmentModal')">
        <div class="modal" onclick="event.stopPropagation();">
            <span class="close" onclick="closeModal('ecAssignmentModal')">&times;</span>
            <div class="modal-header">EC Assignment</div>
            <div class="modal-content">
                <div class="score-controls">
                    <button class="score-button" onclick="adjustScore('ecAssignment', -0.1)">-</button>
                    <div class="score-display"><span id="ecAssignmentValue">0</span></div>
                    <button class="score-button" onclick="adjustScore('ecAssignment', 0.1)">+</button>
                </div>
                <div class="increment-controls">
                    <button class="increment-button" onclick="adjustScore('ecAssignment', 0.01)">+0.01</button>
                    <button class="increment-button" onclick="adjustScore('ecAssignment', 0.05)">+0.05</button>
                    <button class="increment-button" onclick="adjustScore('ecAssignment', 0.25)">+0.25</button>
                    <button class="increment-button" onclick="adjustScore('ecAssignment', 0.5)">+0.5</button>
                    <button class="increment-button" onclick="adjustScore('ecAssignment', 1.0)">+1.0</button>
                </div>
            </div>
        </div>
    </div>

    <div id="attendanceModal" class="modal-overlay" onclick="closeModal('attendanceModal')">
        <div class="modal" onclick="event.stopPropagation();">
            <span class="close" onclick="closeModal('attendanceModal')">&times;</span>
            <div class="modal-header">Attendance</div>
            <div class="modal-content">
                <div class="score-controls">
                    <button class="score-button" onclick="adjustScore('attendance', -0.1)">-</button>
                    <div class="score-display"><span id="attendanceValue">0</span></div>
                    <button class="score-button" onclick="adjustScore('attendance', 0.1)">+</button>
                </div>
                <div class="increment-controls">
                    <button class="increment-button" onclick="adjustScore('attendance', 0.01)">+0.01</button>
                    <button class="increment-button" onclick="adjustScore('attendance', 0.05)">+0.05</button>
                    <button class="increment-button" onclick="adjustScore('attendance', 0.25)">+0.25</button>
                    <button class="increment-button" onclick="adjustScore('attendance', 0.5)">+0.5</button>
                    <button class="increment-button" onclick="adjustScore('attendance', 1.0)">+1.0</button>
                </div>
            </div>
        </div>
    </div>

    <script type="module">
        import { javaURI } from '{{site.baseurl}}/assets/js/api/config.js';

        // Store scores in an object
        const scores = {
            seedStarter: 0,
            classroomConduct: 0,
            ecEvent: 0,
            ecAssignment: 0,
            attendance: 0
        };

        function adjustScore(id, change) {
            // Get current score
            let currentScore = scores[id];
            let newScore = currentScore + change;
            
            // Enforce limits
            newScore = Math.max(0, Math.min(3, newScore)); // Cannot go below 0 or above 3
            
            // Update score
            scores[id] = newScore;
            
            // Update display
            document.getElementById(`${id}Value`).innerText = newScore.toFixed(2);
            
            // Update total
            updateTotalSeed();
        }

        async function submitEntry() {
            const studentId = document.getElementById('studentId');
            const studentName = document.getElementById('studentName');
            const subject = document.getElementById('subject');
            const activityLog = document.getElementById('activityLog');
            const messageElement = document.getElementById('message');

            if (!studentId || !studentName || !subject || !activityLog) {
                messageElement.textContent = "Please fill in all fields before submitting.";
                return;
            }

            const totalSeed = parseFloat(document.getElementById('totalSeed').innerText);

            const entryData = {
                studentId: parseInt(studentId.value),
                name: studentName.value,
                subject: subject.value,
                grade: totalSeed,
                comment: activityLog.value.trim()
            };

            try {
                const response = await fetch(`${javaURI}/api/seeds/`, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(entryData)
                });

                if (response.ok) {
                    const result = await response.json();
                    messageElement.textContent = `Entry submitted successfully! Your Entry ID is: ${result.id}`;
                    resetScores();
                } else {
                    const errorText = await response.text();
                    messageElement.textContent = `Error submitting entry: ${errorText}`;
                    console.error("Submission error:", errorText);
                }
            } catch (error) {
                messageElement.textContent = "Error submitting entry. Please try again.";
                console.error("Fetch error:", error);
            }
        }

        function openModal(id) { 
            document.getElementById(id).style.display = "flex"; 
        }

        function closeModal(id) { 
            document.getElementById(id).style.display = "none"; 
        }

        function resetScores() {
            // Reset all scores to 0
            Object.keys(scores).forEach(key => {
                scores[key] = 0;
                document.getElementById(`${key}Value`).innerText = "0";
            });
            updateTotalSeed();
        }

        function updateTotalSeed() {
            // Calculate total from scores object
            const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
            // Update total display
            document.getElementById("totalSeed").innerText = Math.min(3, total).toFixed(2);
        }

        // Attach functions to window
        window.submitEntry = submitEntry;
        window.openModal = openModal;
        window.closeModal = closeModal;
        window.adjustScore = adjustScore;
        window.updateTotalSeed = updateTotalSeed;
    </script>
</body>
</html>