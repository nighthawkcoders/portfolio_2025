---
toc: false
layout: post
title: AI Generator
categories: [Collaboration]
type: ccc
permalink: /project/teacher-toolkit/generator
---
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>SAGAI Generator</title>
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
      margin-bottom: 20px;
      }
      #saved-questions li strong {
      font-size: 18px;
      text-decoration: underline;
      margin-bottom: 10px;
      display: block;
      }
   </style>
</head>
<body>
   <!-- Navigation buttons -->
   <div class="nav-buttons">
      <a href="{{site.baseurl}}/project/teacher-toolkit"><button>Home</button></a>
      <a href="{{site.baseurl}}/collaboration/2024/10/21/Grader_Grader.html"><button>Grader</button></a>
        <a href="{{site.baseurl}}/project/teacher-toolkit/QNA"><button>QNA</button></a>
   </div>
   <!-- Main Generator Section -->
   <div class="container">
      <h1 class="section-title">GENERATOR</h1>
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
      <div class="bottom-buttons">
         <button class="save-btn" onclick="saveQuestion()">Save Hack</button>
         <button class="view-saved-btn" onclick="toggleModal()">See Saved Hacks</button>
      </div>
      <!-- Modal for Saved Questions -->
      <div id="modal" class="modal">
         <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h2>Saved Questions</h2>
            <ul id="saved-questions" style="list-style: none; padding: 0;"></ul>
         </div>
      </div>
   </div>
   
   <script>
      const savedQuestions = [];
      
      async function submitRequirements() {
          const topic = document.getElementById('topicInput').value;
          const requirements = document.getElementById('requirementsInput').value;
      
          const userRequest = { topic, requirements };
      
          try {
              const response = await fetch('http://localhost:8085/generate/question', {
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
          if (question) {
              const questionData = { question };
              try {
                  const response = await fetch('http://localhost:8085/save-question', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(questionData)
                  });
      
                  if (response.ok) {
                      alert('Question saved to database!');
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
      
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Fetch and display saved questions
    loadSavedQuestions();
}

      
      function closeModal() {
          document.getElementById('modal').style.display = 'none';
      }
      
async function loadSavedQuestions() {
    const list = document.getElementById('saved-questions');
    list.innerHTML = ''; // Clear existing list

    try {
        const response = await fetch('http://localhost:8085/saved-questions');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const questions = await response.json(); // Ensure the response is parsed as JSON

        if (!Array.isArray(questions)) {
            throw new Error('Response is not an array');
        }

        // Populate the modal with the saved questions
        questions.forEach((question, index) => {
            const item = document.createElement('li');
            item.innerHTML = `<strong>Question ${index + 1}:</strong><br>${question}`;
            list.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading saved questions:', error);
        alert('Error loading saved questions: ' + error.message);
    }
}

      
      document.getElementById('submitButton').addEventListener('click', submitRequirements);
   </script>
</body>