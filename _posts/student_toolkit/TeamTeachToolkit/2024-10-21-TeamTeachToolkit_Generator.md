---
toc: false
layout: post
title: Hacks Generator
permalink: /student/TeamTeachToolkit/generator
description: Generate MC or FRQ hacks based on specific units
---
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Hacks Generator</title>
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
      }
      .section-title {
      font-size: 36px;
      margin-bottom: 30px;
      }
      .form-box {
      text-align: left;
      margin: 0 auto;
      width: 500px;
      }
      .form-box label {
      display: block;
      margin-bottom: 10px;
      font-size: 18px;
      }
      .form-box input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      background-color: white;
      color: black;
      border: none;
      font-size: 16px;
      }
      .submit-btn {
      display: block;
      width: 100%;
      background-color: white;
      color: black;
      border: 1px solid white;
      padding: 10px;
      cursor: pointer;
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 20px;
      }
      .submit-btn:hover {
      background-color: gray;
      color: white;
      }
      .output {
      font-size: 15px;
      margin-top: 10px;
      padding: 15px;
      background-color: #333;
      color: white;
      border: none;
      text-align: center;
      width: 500px;
      box-sizing: border-box;
      margin: 0 auto;
      border-radius: 8px;
      }
      .output p {
      margin: 0;
      padding: 5px 0;
      }
      .output strong {
      display: block;
      font-size: 18px;
      margin-top: 10px;
      }
      .output pre {
      color: #f8f8f2;
      font-size: 14px;
      padding: 12px;
      border: none;
      border-radius: 5px;
      font-family: 'Courier New', monospace;
      white-space: pre-wrap;
      overflow-x: auto;
      margin: 15px 0;
      text-align: left;
      background: none;
      }
      .output code {
      font-size: 15px;
      color: #f8f8f2;
      background: none;
      padding: 0;
      font-family: 'Courier New', monospace;
      }
      /* Modal Styling */
      .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.8);
      }
      .modal-content {
      background-color: #222;
      margin: 10% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 60%;
      color: white;
      border-radius: 10px;
      text-align: left;
      }
      .modal-content h3 {
      margin-top: 0;
      }
      .close-btn {
      color: white;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      }
      .close-btn:hover,
      .close-btn:focus {
      color: red;
      }
      /* Save Hack and See Saved Hacks Buttons */
      .bottom-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 500px;
      margin: 20px auto;
      }
      .save-btn, .view-saved-btn {
      background-color: white;
      color: black;
      border: 1px solid white;
      padding: 10px;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      border-radius: 5px;
      }
      .save-btn:hover, .view-saved-btn:hover {
      background-color: gray;
      color: white;
      }
      .save-btn {
      width: 100px;
      }
      .view-saved-btn {
      width: 200px;
      }
      /* Saved Questions Styling */
      #saved-questions li {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      list-style: none;
      }
      #saved-questions li strong {
      font-size: 18px;
      text-decoration: underline;
      margin-bottom: 10px;
      display: block;
      }
    .tag-container {
        margin-bottom: 5px;
    }
    .tag {
        display: inline-block;
        background: #007bff;
        color: white;
        padding: 3px 8px;
        margin-right: 5px;
        border-radius: 3px;
        font-size: 12px;
    }
    .question-text {
        font-size: 16px;
        color: #333;
    }
    .tag-input {
    width: 20%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
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
      <a href="{{site.baseurl}}/student/TeamTeachToolkit/grader"><button>Grader</button></a>
      <a href="{{site.baseurl}}/student/TeamTeachToolkit/review"><button>Review</button></a>
   </div>
   <!-- Main Generator Section -->
   <div class="container">
      <!-- Generator Form -->
      <div class="form-box">
         <label for="topicInput">Generate a hack:</label>
         <input type="text" id="topicInput" required placeholder="Insert topic here">
         <input type="text" id="requirementsInput" required placeholder="MC, FRQ, or other instructions">
         <button class="submit-btn" type="button" id="submitButton">Generate</button>
      </div>
      <!-- Output Section -->
      <h2>Output question:</h2>
      <div class="output" id="output">Hack will display here</div>
      <!-- Tags Input -->
      <div>
         <label for="tagInput">Enter tags (comma-separated):</label>
         <input type="text" id="tagInput" placeholder="Enter tags" class="tag-input">
      </div>
      <!-- Bottom Buttons -->
      <div class="bottom-buttons">
         <button class="save-btn" onclick="saveQuestion()">Save Hack</button>
         <button class="view-saved-btn" onclick="toggleModal()">See Saved Hacks</button>
      </div>
      <!-- Modal for Saved Questions -->
      <div id="modal" class="modal">
         <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h2>Saved Questions</h2>
            <select id="tagFilter" onchange="loadSavedQuestions()">
               <option value="">All Tags</option>
            </select>
            <ul id="saved-questions" style="list-style: none; padding: 0;"></ul>
         </div>
      </div>
   </div>

   <script type="module">
      import { javaURI } from '{{site.baseurl}}/assets/js/api/config.js';

      async function submitRequirements() {
         const topic = document.getElementById('topicInput').value;
         const requirements = document.getElementById('requirementsInput').value;
         const userRequest = { topic, requirements };

         try {
            const response = await fetch(`${javaURI}/generate/question`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(userRequest)
            });

            if (!response.ok) {
               throw new Error('Network response was not ok: ' + response.statusText);
            }

            const generatedQuestion = await response.text();
            displayQuestion(generatedQuestion);
         } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while generating the question. Please try again.');
         }
      }

      function displayQuestion(question) {
         const outputElement = document.getElementById('output');
         const formattedQuestion = question
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/(?:\r\n|\r|\n)/g, '<br>')
            .replace(/(A\.\s|B\.\s|C\.\s|D\.\s)/g, '<br><strong>$1</strong>')
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
         outputElement.innerHTML = formattedQuestion;
      }

      async function saveQuestion() {
         const question = document.getElementById('output').innerHTML;
         const tags = document.getElementById('tagInput').value.split(',').map(tag => tag.trim());

         if (question) {
            const questionData = { question, tags };
            try {
               const response = await fetch(`${javaURI}/save-question`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(questionData)
               });

               if (response.ok) {
                  alert('Question saved to database!');
                  loadTags(); // Refresh tag dropdown after saving
               } else {
                  alert('Failed to save question. Please try again.');
               }
            } catch (error) {
               console.error('Error saving question:', error);
               alert('An error occurred while saving the question.');
            }
         } else {
            alert('No question to save!');
         }
      }

      async function loadSavedQuestions() {
         const tagFilter = document.getElementById('tagFilter').value;
         const list = document.getElementById('saved-questions');
         list.innerHTML = ''; // Clear existing list

         try {
            const response = await fetch(`${javaURI}/saved-questions`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const questions = await response.json();
            questions.forEach(({ question, tags }) => {
               if (!tagFilter || tags.includes(tagFilter)) {
                  const item = document.createElement('li');
                  item.classList.add('saved-question-item');

                  const tagContainer = document.createElement('div');
                  tagContainer.classList.add('tag-container');

                  tags.forEach(tag => {
                     const tagElement = document.createElement('span');
                     tagElement.classList.add('tag');
                     tagElement.innerText = tag;
                     tagContainer.appendChild(tagElement);
                  });

                  const questionText = document.createElement('p');
                  questionText.classList.add('question-text');
                  questionText.innerHTML = question;

                  item.appendChild(tagContainer);
                  item.appendChild(questionText);
                  list.appendChild(item);
               }
            });
         } catch (error) {
            console.error('Error loading saved questions:', error);
            alert('Error loading saved questions: ' + error.message);
         }
      }

      async function loadTags() {
         const tagFilter = document.getElementById('tagFilter');
         tagFilter.innerHTML = '<option value="">All Tags</option>'; // Reset dropdown

         try {
            const response = await fetch(`${javaURI}/saved-questions`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const questions = await response.json();
            const uniqueTags = new Set();

            questions.forEach(({ tags }) => {
               tags.forEach(tag => uniqueTags.add(tag));
            });

            uniqueTags.forEach(tag => {
               const option = document.createElement('option');
               option.value = tag;
               option.innerText = tag;
               tagFilter.appendChild(option);
            });
         } catch (error) {
            console.error('Error loading tags:', error);
         }
      }

      function toggleModal() {
         document.getElementById('modal').style.display = 'block';
         loadSavedQuestions();
         loadTags();
      }

      function closeModal() {
         document.getElementById('modal').style.display = 'none';
      }

      document.getElementById('submitButton').addEventListener('click', submitRequirements);
      window.saveQuestion = saveQuestion;
      window.toggleModal = toggleModal;
      window.closeModal = closeModal;
   </script>
</body>
