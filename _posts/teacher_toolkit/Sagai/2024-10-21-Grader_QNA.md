---
toc: false
layout: post
title: QNA
description: Post questions and get replies from peers
categories: [Collaboration]
type: ccc
permalink: /project/teacher-toolkit/QNA
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Q&A Page</title>
    <style>
    body {
        background-color: black;
        color: #e0e0e0;
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
        width: 80%; 
        margin-left: auto;
        margin-right: auto;
    }
    #ask-question {
        margin-top: 30px;
    }
    textarea {
        width: 60%;
        max-width: 600px;
        padding: 15px;
        margin: 15px 0;
        box-sizing: border-box;
        background: linear-gradient(135deg, #333, #444);
        border: 2px solid #555;
        border-radius: 12px;
        color: #f0f0f0;
        resize: vertical;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
    }
    textarea:hover {
        border-color: #777;
        transform: translateY(-3px);
    }
    textarea:focus {
        border-color: #888;
        box-shadow: 0 10px 16px rgba(0, 0, 0, 0.5);
        outline: none;
    }
    button {
        padding: 10px 20px;
        margin: 10px;
        background-color: #333;
        border: 2px solid #555;
        color: #e0e0e0;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
    }
    button:hover {
        background-color: #555;
        transform: scale(1.05);
    }
    .question {
        background-color: #222;
        padding: 15px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
    }
    .question div {
        display: inline-block;
    }
    .question .arrow {
        cursor: pointer;
        font-size: 24px;
        padding: 0 10px;
        transition: transform 0.3s;
    }
    .question .arrow:hover {
        transform: rotate(180deg);
    }
    .reply-box {
        display: none;
        background-color: #333;
        padding: 10px;
        margin-top: 10px;
        border-radius: 8px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .reply-box textarea {
        width: 100%;
        margin: 10px 0;
        background-color: #444;
        border: 1px solid #555;
        color: white;
        border-radius: 6px;
        padding: 10px;
    }
    .reply-box button {
        background-color: #444;
        border: 1px solid #555;
        padding: 10px;
        width: 100%;
        border-radius: 6px;
        margin-top: 10px;
    }
    .reply-box button:hover {
        background-color: gray;
    }
    .reply-text {
        display: flex;
        padding: 8px;
        margin-bottom: 8px;
        background-color: #222;
        border-radius: 6px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
    }
    .profile-img {
        width: 40px;
        height: 40px;
        background-color: gray;
        border-radius: 50%;
        margin-right: 10px;
    }
    .reply-content {
        flex-grow: 1;
    }
    .username {
        font-weight: bold;
        margin-right: 5px;
        color: #00bcd4;  /* Instagram-like highlight */
    }
    .timestamp {
        color: #888;
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
    .reply-text p {
        margin: 5px 0;
        color: #ddd;
    }
    .section-title {
        font-size: 36px;
        margin-bottom: 30px;
        color: #e0e0e0;
    }
    .output {
        margin-top: 20px;
        background-color: #1f1f1f;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
</style>

</head>
<body>
    <!-- Navigation buttons -->
    <div class="nav-buttons">
        <a href="{{site.baseurl}}/project/teacher-toolkit"><button>Home</button></a>
        <a href="{{site.baseurl}}/collaboration/2024/10/21/Grader_Grader.html"><button>Grader</button></a>
        <a href="{{site.baseurl}}/project/teacher-toolkit/generator"><button>Generator</button></a>
    </div>
    <!-- Main Q&A Section -->
    <div class="container">
        <h1 class="section-title">QNA</h1>
        <!-- Question submission section -->
        <div id="ask-question">
            <h2>Ask a Question:</h2>
            <textarea id="question-input" placeholder="Insert question here..."></textarea><br>
            <button id="submit-button">Submit Question</button>
        </div>
        <!-- Questions container -->
        <div id="questions-container">
            <h2>Questions</h2>
            <!-- Questions will be dynamically inserted here -->
        </div>
        <table>
  <thead>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>
    </div>
    <script>
        let questionCount = 0;
        // Function to submit a new question and append it to the list of questions
        // Function to toggle reply box visibility
        function toggleReplyBox(questionId) {
            const replyBox = document.getElementById(`reply-box-${questionId}`);
            replyBox.style.display = replyBox.style.display === 'block' ? 'none' : 'block';
        }
    </script>
  
<script type="module">
  import { javaURI, pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

  // prepare HTML defined "result" container for new outputj
  const resultContainer = document.getElementById("result");

  // prepare fetch urls
  // const url = `${pythonURI}/api/jokes`;
  const url = `http://localhost:8085/api/saigai/messages`;
  const getURL = url +"/";
  const likeURL = url + "/message";  // haha reaction
  const jeerURL = url + "/jeer/";  // boohoo reaction

  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const postOptions = {...fetchOptions,
    method: 'POST',
  }; // clones and replaces method

  // fetch the API
  fetch(getURL,fetchOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          error('GET API response failure: ' + response.status);
          return;
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
          for (const row of data) {
              populateQuestion(row);
          }
      })
  })
  // catch fetch errors (ie Nginx ACCESS to server blocked)
  .catch(err => {
    error(err + ": " + getURL);
  });

  function populateQuestion(row){
        const questionContainer = document.getElementById('questions-container');
        // Create the new question element
        const questionDiv = returnQuestionDiv(row);
        // Create the reply box (hidden by default)
        const replyDiv = returnReplyDiv(row);
        // Add everything to the DOM
        const questionsHeader = questionContainer.querySelector("h2");
        questionsHeader.insertAdjacentElement("afterend", questionDiv);
        questionDiv.insertAdjacentElement("afterend", replyDiv);           
        //questionContainer.appendChild(questionDiv);
        //questionContainer.appendChild(replyDiv);
        // Clear input field after submission
        //document.getElementById('question-input').value = "";
  }

  function returnQuestionDiv(row){
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.id = `question-${row.id}`;
        const questionTextDiv = document.createElement('div');
        questionTextDiv.innerHTML = row.content ;
        const arrowDiv = document.createElement('div');
        arrowDiv.classList.add('arrow');
        arrowDiv.innerHTML = '&#9662;'; // Down arrow symbol
        arrowDiv.onclick = () => toggleReplyBox(row.id);
        questionDiv.appendChild(questionTextDiv);
        questionDiv.appendChild(arrowDiv);
        return questionDiv;
  } 

  function returnReplyDiv(row){
        const replyDiv = document.createElement('div');
        replyDiv.classList.add('reply-box');
        replyDiv.id = `reply-box-${row.id}`;

       
        const replyTextArea = document.createElement('textarea');
        replyTextArea.placeholder = 'Insert your reply here...';
        const replyButton = document.createElement('button');
        replyButton.innerHTML = 'Submit Reply';
        replyButton.onclick = () => submitMessageReply(row.id, replyTextArea, replyDiv);
        replyDiv.appendChild(replyTextArea);
        replyDiv.appendChild(replyButton);

         for (const comment of row.comments){
            addCommenttoReplyDiv(replyDiv, comment);
        }
        return replyDiv;
  }
  function addCommenttoReplyDiv(replyDiv,comment){
    const replyDivContainer = document.createElement('div');
            replyDivContainer.classList.add('question');
            const replyDivText = document.createElement('div');
            replyDivText.classList.add('reply-text');
            replyDivText.innerHTML = `<p>${comment.content}</p>`;
            const deleteDiv = document.createElement('div');
            deleteDiv.classList.add('arrow');
            deleteDiv.innerHTML = '&#x1F5D1;'; // Down arrow symbol
            deleteDiv.onclick = () => deleteMessageReply(comment.id, replyDivContainer,  replyDiv);
            replyDivContainer.appendChild(replyDivText);
            replyDivContainer.appendChild(deleteDiv);
            replyDiv.appendChild(replyDivContainer);
  }

  // Reaction function to likes or jeers user actions
  function submitMessage() {
    const questionText = document.getElementById('question-input').value;
    const postURL = `http://localhost:8085/api/saigai/messages/saigai/message`;
    const data = {
                content: questionText
            };
     const jsonData = JSON.stringify(data);
  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const postOptions = {...fetchOptions,
    method: 'POST',
    body:jsonData
  }; // clones and replaces method
    // fetch the API
    fetch(postURL, postOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if(response.status == 409){
        error("Message is similar to previously asked question: " + response.status)
          return;  // api failure
      }else if (response.status != 201) {
          error("Post API response failure: " + response.status)
          return;  // api failure
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
            populateQuestion(data);
            document.getElementById('question-input').value = "";
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  // Reaction function to likes or jeers user actions
  function submitMessageReply(questionId, replyTextArea, replyDiv) {
    const replyText = replyTextArea.value;
    if (replyText.trim() == "") {
        return;
    }
    const questionText = document.getElementById('question-input').value;
    const postURL = `http://localhost:8085/api/saigai/comments/${questionId}`;
    const data = {
                content: replyText
            };
     const jsonData = JSON.stringify(data);
  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const postOptions = {...fetchOptions,
    method: 'POST',
    body:jsonData
  }; // clones and replaces method
    // fetch the API
    fetch(postURL, postOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status != 200) {
          error("Post API response failure: " + response.status)
          return;  // api failure
      }
      // valid response will have JSON data
      response.json().then(data => {
          console.log(data);
                addCommenttoReplyDiv(replyDiv, data);
            // const replyDivText = document.createElement('div');
            // replyDivText.classList.add('reply-text');
            // replyDivText.innerHTML = `<p>${data.content}</p>`;
            // replyDiv.appendChild(replyDivText);
         
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  // Reaction function to likes or jeers user actions
  function deleteMessageReply(commentId, replyTextArea, replyDiv) {
    const postURL = `http://localhost:8085/api/saigai/comments/${commentId}`;
  // prepare fetch PUT options, clones with JS Spread Operator (...)
  const postOptions = {...fetchOptions,
    method: 'DELETE',
  }; // clones and replaces method
    // fetch the API
    fetch(postURL, postOptions)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status != 200) {
          error("Delete API response failure: " + response.status)
          return;  // api failure
      }
    
      replyDiv.removeChild(replyTextArea);
         
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  // Something went wrong with actions or responses
  function error(err) {
    // log as Error in console
    console.error(err);
    // append error to resultContainer
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  }
    document.getElementById('submit-button').addEventListener('click', submitMessage);
</script>  

</body>