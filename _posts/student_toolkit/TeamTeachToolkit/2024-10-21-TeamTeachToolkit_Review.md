---
toc: false
layout: post
title: Review Page
description: Post questions and get replies from peers
permalink: /student/TeamTeachToolkit/review
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review Page</title>
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
    .underline { 
      background-color: #222;
      border: 1px solid black;
      /*outline: 4px; */
      /* outline-offset: 10px; */
      /* border-radius: 6px; */
      border-bottom: 5px solid white; 
    } 
    h4 {
      border-bottom: 5px solid white; 
    }
    .post-meta {
      display: none;
    }
    .subject-container  {
      box-shadow: none !important;
      background-color: #1e1e1e;
      border: none !important;
      padding-right: 20px;
      padding-left: 20px;
      padding-bottom: 20px;
    }
</style>

</head>

<body>
    <!-- Navigation buttons -->
    <div class="nav-buttons">
        <a href="{{site.baseurl}}/student/TeamTeachToolkit"><button>Home</button></a>
        <a href="{{site.baseurl}}/student/TeamTeachToolkit/grader"><button>Grader</button></a>
        <a href="{{site.baseurl}}/student/TeamTeachToolkit/generator"><button>Generator</button></a>
    </div>
    <!-- Main Q&A Section -->
    <div class="container">
        <!-- Question submission section -->
        <div id="ask-question">
            <h2>Ask a Question:</h2>
            <textarea id="question-input" placeholder="Insert questions, generated hacks, or responses here..."></textarea><br>
            <!--Drop down menu-->
              <select id="subject">
              <option value="other" selected="selected">Other</option>
              <option value="primitiveType">Primitive Type</option>
              <option value="objects">Objects</option>
              <option value="booleanAndIf">Boolean Expressions and if Statements</option>
              <option value="iteration">Iteration</option>
              <option value="classes">Classes</option>
              <option value="array">Array</option>
              <option value="arrayList">ArrayList</option>
              <option value="2DArray">2D Array</option>
              <option value="inheritance">Inheritance</option>
              <option value="recursion">Recursion</option>
            </select> <br>
            <button id="submit-button">Submit Question</button>
        </div>
        <!-- Questions container -->
        <div id="questions-container">
            <h2>Questions</h2>
            <!-- Questions will be dynamically inserted here -->
        </div>
        <div id="questions-container-other"  class="subject-container">
            <h4>other</h4>
        </div>
         <div id="questions-container-primitiveType" class="subject-container">
            <h4>primitive Type</h4>
        </div>
        <div id="questions-container-objects"   class="subject-container">
            <h4>objects</h4>
        </div>
          <div id="questions-container-booleanAndIf"  class="subject-container">
            <h4>boolean And If</h4>
        </div>
          <div id="questions-container-iteration"  class="subject-container">
            <h4>iteration</h4>
        </div>
          <div id="questions-container-classes"  class="subject-container">
            <h4>classes</h4>
        </div>
          <div id="questions-container-array"  class="subject-container">
            <h4>array</h4>
        </div>
          <div id="questions-container-arrayList"  class="subject-container">
            <h4>arrayList</h4>
        </div>
          <div id="questions-container-2DArray"  class="subject-container">
            <h4>2DArray</h4>
        </div>
         <div id="questions-container-inheritance"  class="subject-container">
            <h4>inheritance</h4>
        </div>
         <div id="questions-container-recursion"  class="subject-container">
            <h4>recursion</h4>
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
        /*
        * Helper Function to toggle the arrow 
        */
        function toggleReplyBox(questionId) {
            const replyBox = document.getElementById(`reply-box-${questionId}`);
            replyBox.style.display = replyBox.style.display === 'block' ? 'none' : 'block';
        }
        /*
        * Helper Function to get the subject Container by subject string
        */
        function getSubjectContainerBySubject(subject) {
             let subjectContainer;
              let container = "questions-container"
              if(subject){
                  container = container+ "-"+subject;
                  subjectContainer = document.getElementById(container);
              }else{
                  subjectContainer = document.getElementById('questions-container-other');
              }
              if(!subjectContainer){
                subjectContainer = document.getElementById('questions-container-other');
              }
              return subjectContainer
        }
    </script>
  
<script type="module">
  import {javaURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
  getMessages(javaURI, fetchOptions);

  /**
   *  Method to get all messages during startup
   * */
  function getMessages(javaURI, fetchOptions){ 
    // prepare HTML defined "result" container for new outputj
    const resultContainer = document.getElementById("result");

    // prepare fetch urls
    // const url = `${pythonURI}/api/jokes`;
    const url = `${javaURI}/api/sagai/messages`;
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
                showMessage(row);
            }
        })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + ": " + getURL);
    });
  }

  /**
   * Function for each message show with submit comment
   * */
  function showMessage(message){
        let questionContainer = getSubjectContainerBySubject(message.subject);

       
        // Create the reply box (hidden by default)
        const commentDiv = showSubmitComment(message);
       // Create the new question element
        const messageDiv = showMessageHeader(message,commentDiv);
       
        // Add everything to the DOM
        const questionsHeader = questionContainer.querySelector("h4");
        questionsHeader.insertAdjacentElement("afterend", messageDiv);
        messageDiv.insertAdjacentElement("afterend", commentDiv);           
  }
  /**
   * function to show Message Header for a Message
   * */
  function showMessageHeader(message,commentDiv){
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('question');
        messageDiv.id = `question-${message.id}`;
        const questionTextDiv = document.createElement('div');
        questionTextDiv.innerHTML = message.content ;

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add('arrow');
        deleteDiv.innerHTML = '&#x1F5D1;'; // Down arrow symbol
        deleteDiv.onclick = () => deleteMessage(message.id, commentDiv,  messageDiv, message.subject);


        const arrowDiv = document.createElement('div');
        arrowDiv.classList.add('arrow');
        arrowDiv.innerHTML = '&#9662;'; // Down arrow symbol
        arrowDiv.onclick = () => toggleReplyBox(message.id);
        messageDiv.appendChild(questionTextDiv);
        messageDiv.appendChild(deleteDiv);
        messageDiv.appendChild(arrowDiv);
        return messageDiv;
  } 
  /**
   * function to show Comment text and Submit button
   * */
  function showSubmitComment(message){
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('reply-box');
        commentDiv.id = `reply-box-${message.id}`;

       
        const replyTextArea = document.createElement('textarea');
        replyTextArea.placeholder = 'Insert your reply here...';
        const replyButton = document.createElement('button');
        replyButton.innerHTML = 'Submit Reply';
        replyButton.onclick = () => createComment(message.id, replyTextArea, commentDiv);
        commentDiv.appendChild(replyTextArea);
        commentDiv.appendChild(replyButton);

         for (const comment of message.comments){
            showCommentAndDelete(commentDiv, comment);
        }
        return commentDiv;
  }
  /**
   * Function to show the comment and delete button
   * */
  function showCommentAndDelete(commentDiv,comment){
    const commentDivContainer = document.createElement('div');
            commentDivContainer.classList.add('question');
            const commentDivText = document.createElement('div');
            commentDivText.classList.add('reply-text');
            commentDivText.innerHTML = `<p>${comment.content}</p>`;
            const deleteDiv = document.createElement('div');
            deleteDiv.classList.add('arrow');
            deleteDiv.innerHTML = '&#x1F5D1;'; // Down arrow symbol
            deleteDiv.onclick = () => deleteComment(comment.id, commentDivContainer,  commentDiv);
            commentDivContainer.appendChild(commentDivText);
            commentDivContainer.appendChild(deleteDiv);
            commentDiv.appendChild(commentDivContainer);
  }

  /*
  * function to submit and create Message to the backend service
  */
  function createMessage() {
    const questionText = document.getElementById('question-input').value;
    // Read value from list selected from user
    const subjectText = document.querySelector('#subject').value;
    const postURL = `${javaURI}/api/sagai/messages/sagai/message`;
    const data = {
                content: questionText,
                subject: subjectText
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
          document.getElementById('question-input').value = "";
          showMessage(data);
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  /**
   * function to create comments for Message
   * */
  function createComment(questionId, replyTextArea, commentDiv) {
    const replyText = replyTextArea.value;
    if (replyText.trim() == "") {
        return;
    }
    const questionText = document.getElementById('question-input').value;
   
    const postURL = `${javaURI}/api/sagai/comments/${questionId}`;
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
                showCommentAndDelete(commentDiv, data);
      })
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  /*
  * function to delete comment 
  */
  function deleteComment(commentId, replyTextArea, commentDiv) {
    const postURL = `${javaURI}/api/sagai/comments/${commentId}`;
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
      commentDiv.removeChild(replyTextArea);
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  /*
  * function to delete Message
  */
  function deleteMessage(commentId, commentDiv, messageDiv, subject) {
    const postURL = `${javaURI}/api/sagai/messages/${commentId}`;
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
      const questionContainer = getSubjectContainerBySubject(subject);
      questionContainer.removeChild(commentDiv);
       questionContainer.removeChild(messageDiv);        
    })
    // catch fetch errors (ie Nginx ACCESS to server blocked)
    .catch(err => {
      error(err + " " + postURL);
    });
  
  }

  /*
  * Helper function to show error to the User
  */
  function error(err) {
    // log as Error in console
    const resultContainer = document.getElementById("result");
    console.error(err);
    // append error to resultContainer
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
    alert(err);
  }
    document.getElementById('submit-button').addEventListener('click', createMessage);
</script>  

</body>