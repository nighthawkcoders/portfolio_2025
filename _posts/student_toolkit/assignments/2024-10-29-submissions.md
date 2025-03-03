---
toc: false
title: Submission Page
permalink: /student/submissions
search_exclude: true
layout: post
---

<title>Submission Form</title>
<style>
    #searchBar, #rowsPerPage {
    width: auto; /* Automatically adjust to content size */
    max-width: 250px; /* Limit max width */
}
    /* Container for search bar and rows per page */
    #search-container {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    /* Adjust submission section size */
    #submission-section {
        max-width: 600px;
        margin: 0 auto;
    }
    /* For the buttons and table in the student section */
    #namesTableBody {s
        width: 75%;
        max-height: 50px;  /* Add max height to allow for scrolling if needed */
        overflow-y: auto;
    }
    #timer-container {
        text-align: center;
        font-size: 24px;
        font-family: Arial, sans-serif;
        margin-top: 20px;
    }
    #time-left {
        font-weight: bold;
        transition: color 0.3s ease;
    }
    select, input[type="url"], textarea, button {
        width: 100%;
        padding: 15px; 
        font-size: 18px; 
        margin: 12px 0; 
        border: 1px solid #ddd;
        border-radius: 6px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    textarea {
        resize: vertical;
        min-height: 150px; 
    }
    button {
        background-color: #4CAF50;
        color: white;
        font-size: 18px; 
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #45A049;
    }
    .modal-content h2 {
        font-size: 28px; 
        color: white;
        margin-bottom: 20px;
    }
    .output-box {
        margin-top: 15px;
        font-size: 30px;
        color: #ffffff;
        animation: moving-glow2 2s infinite;
    }
    .Assignment-Name{
        font-size: 20px; 
        color: white;
    }
    .Assignment-Content{
        font-size: 16px; 
        color: white;
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
    @keyframes moving-glow2 {
        0% {
            box-shadow: 0 0 10px rgba(0, 255, 162, 0.8);
        }
        50% {
            box-shadow: 0 0 30px rgba(0, 255, 162, 0.8);
        }
        100% {
            box-shadow: 0 0 10px rgba(0, 255, 162, 0.8);
        }
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s infinite;
    }
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
}
/* Hide default checkbox */
.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
/* The track */
.slider {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 24px;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s;
}
/* The circular slider */
.slider::before {
    content: "";
    position: absolute;
    height: 17px;
    width: 20px;
    left: 1px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
}
.toggle-switch input:checked + .slider {
    background-color: #4CAF50; /* Change background to green */
}
.toggle-switch input:checked + .slider::before {
    transform: translateX(26px); /* Move the circular knob */
}
.message {
    font-size: 15px;
}
</style>

<div class="toggle-container">
    <label class="toggle-switch">
        <input type="checkbox" id="myToggle"/> 
        <span class="slider"></span>
    </label>
    <p id="message" class="message">
        Check the toggle to enable group submissions (add members of your group into a common submission).
    </p>
</div>
<div id="modal" class="modal">
    <div class="modal-content">
        <h2>Submit here</h2>
        <select id="assignment-select">
            <option value="" disabled selected>Select a Assignment</option>
        </select>
    </div>
    <div class="Assignment-Content" id="Assignment-Content">Assignment-Content</div>
    <div id="timer-container">
        <p id="time-left"></p>
    </div>
    <br><br>
    <div class="Group Submit" id="Group Submit">
        <div>
            <label for="searchBar">Search for a name: </label>
            <input type="text" id="searchBar" placeholder="Search for a name..." onkeyup="filterNames()">
        </div>
        <div>
            <label for="rowsPerPage">Rows per page: </label>
            <select id="rowsPerPage" onchange="changeRowsPerPage()">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="1000">1000</option>
                <option value="1000">2000</option>
            </select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="namesTableBody"></tbody>
        </table>
        <!-- <div id="pagination-container">
            <button id="prevPage" onclick="changePage(-1)">Previous</button>
            <span id="pageInfo">Page 1 of 10</span>
            <button id="nextPage" onclick="changePage(1)">Next</button>
        </div> -->
        <div class="Review-Group" id="Review-Group">Group Members: </div>
        <br><br><br>
    </div>
<div>
    <label for="submissionContent" style="font-size: 18px;">Submission Content:</label>
    <input type="url" id="submissionContent" required />
</div>
<br><br>
<div>
    <label for="comments" style="font-size: 18px;">Comments:</label>
    <textarea id="comments" rows="4" style="width: 100%;"></textarea>
</div>
<br><br>
<button id="submit-assignment">Submit Assignment</button>
<br><br>
<div class="output-box" id="outputBox"></div>
<br><br>
<h1>Previous Submissions for: </h1>
<div class="Assignment-Name" id="Assignment-name">Assignment-Content</div>
<br><br>
<table id="submissions-table" style="width: 100%; margin-top: 20px;">
    <thead>
        <tr>
            <th>Submisssion Content</th>
            <th>Grade</th>
            <th>Feedback</th>
        </tr>
    </thead>
    <tbody>
        <!-- Submissions will be populated here -->
    </tbody>
</table>

</div>


<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    let selectedTask = "";
    let tasks = "";
    let assignmentIds = [];
    let submissions=[];
    let assignIndex = 0;
    let assignments;
    let userId=-1;
    let StuName;
    let Student;
     let people = [], filteredPeople = [], listofpeople = new Set(), currentPage = 1, rowsPerPage = 5, totalPages = 1;
     let listofpeopleIds=new Set();

    document.getElementById("submit-assignment").addEventListener("click", Submit);
    document.getElementById("myToggle").addEventListener("change", function() {
        if (this.checked) {
            console.log("Toggle is ON");
            // Perform action when toggled ON
            document.getElementById("Group Submit").style.display = "block";
        } else {
            console.log("Toggle is OFF");
            // Perform action when toggled OFF
            document.getElementById("Group Submit").style.display = "none";
        }
    });
    function disableGroupSubmit(){
         document.getElementById("Group Submit").style.display = "none";
    }
    function Submit() {
        let urllink_submit=javaURI+"/api/submissions/submit/";
        const submissionContent = document.getElementById('submissionContent').value;
        const comment=document.getElementById('comments').value;
        getUserId();
        if(userId==-1){
            alert("Please login first");
            return;
        }
        const studentId=userId;
        const assigmentId=assignments[assignIndex-1].id;
        urllink_submit+=assigmentId.toString();
        let isLate=false;
        const now = new Date();
        const deadlineDate = new Date(assignments[assignIndex-1].dueDate);
        console.log(now);
        console.log(deadlineDate);
        console.log(deadlineDate-now);

        console.log(listofpeopleIds);
        // const dataRequest = {
        //     "studentId":studentId,
        //     "content": submissionContent,
        //     "comment": comment,
        //     "isLate": deadlineDate - now < 0
        // };
        const formData =  new FormData();
        formData.append('studentId', studentId);
        formData.append('content', submissionContent);
        formData.append('comment', comment);
        formData.append('isLate', deadlineDate-now<0);

        // const data;
        console.log(Array.from(listofpeopleIds));
        const submissionData = {
            assignmentId: assigmentId,  
            studentIds: Array.from(listofpeopleIds), 
            content: submissionContent,
            comment: comment,
            isLate: deadlineDate - now < 0
        };
        console.log(JSON.stringify(submissionData));

        // console.log(dataRequest);

        fetch(urllink_submit, {
                ...fetchOptions,
                method: "POST",
                 body: JSON.stringify(submissionData)
            })
        .then(response => {
            const outputBox = document.getElementById('outputBox');
            if (response.ok) {
                outputBox.innerText = 'Successful Submission! ';
                fetchSubmissions();
                return response.json();
            } else {
                outputBox.innerText = 'Failed Submission! ';
                throw new Error('Failed to submit data: ' + response.statusText);
            }
            

        })
        .then(result => {
            console.log('Submission successful:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }



    async function fetchAssignments() {
        try {
            const response = await fetch(javaURI+"/api/assignments/debug", fetchOptions);
            assignments=await response.json();
            populateAssignmentDropdown(assignments);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    function populateAssignmentDropdown(Assignments) {
        const assignmentSelect = document.getElementById('assignment-select');
        Assignments.forEach(assignment => {
            const option = document.createElement('option');
            option.value = assignment.name;
            option.textContent = assignment.name;
            assignmentSelect.appendChild(option);
            assignmentIds.push(assignment.id);
        });
    }
    
    document.getElementById("assignment-select").addEventListener("change", function() {
        selectedTask = this.value;
        assignIndex = this.selectedIndex;
        document.getElementById("Assignment-Content").innerText=assignments[assignIndex-1].description;
        console.log(assignments[assignIndex-1].dueDate);
        console.log(calculateTimeLeft(assignments[assignIndex-1].dueDate));
        console.log(assignments[assignIndex-1].timestamp);
        document.getElementById("Assignment-name").innerText= this.value;
        fetchSubmissions();
    });

    function calculateTimeLeft(deadline) {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const diff = deadlineDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
            const totalTime = deadlineDate - new Date(deadline);  
            const timeLeft = deadlineDate - now;
            const percentageLeft = (timeLeft / totalTime) * 100;
            updateTimeText(days,hours,minutes);

            return `${days}d ${hours}h ${minutes}m left`;
        } else {
            updateTimeText(-0.5,-0.5,-0.5); 
            return "Deadline Passed";
        }
    }

    function updateTimeText(days, hours, minutes) {
        const timeLeftElement = document.getElementById('time-left');
        let message = '';
        let color = '';
        let shouldShake = false;
        if (days > 3) {
            message = `Time Left: ${days}d ${hours}h ${minutes}m`;
            color = 'green';
        } else if (days <= 3 && days > 0) {
            message = `Time Left: ${days}d ${hours}h ${minutes}m (Hurry up!)`;
            color = 'orange';
        } else if (days <= 0 && (hours > 0 || minutes > 0)) {
            message = `Time Left: ${hours}h ${minutes}m (Almost due!)`;
            color = 'red';
            shouldShake = true;
        } else {
            message = 'Deadline Passed';
            color = 'red';
            shouldShake = true;
        }

        timeLeftElement.textContent = message;
        timeLeftElement.style.color = color;

        if (shouldShake) {
            timeLeftElement.classList.add('shake');
        } else {
            timeLeftElement.classList.remove('shake');
        }
    }


     async function getUserId(){
        const url_persons = `${javaURI}/api/person/get`;
        await fetch(url_persons, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                userId=data.id;
                console.log("here",data);
                StuName=data.name;
                let info=data.name+","+String(data.id);
                console.log(info);
                addName(info);


            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }


    async function fetchSubmissions(){
        const urllink=javaURI+"/api/submissions/getSubmissions";
        const urllink2=javaURI+"/assignment/"+assignIndex.toString();
        const theUserId=await getUserId();
        console.log("here");
        try {
            const response = await fetch(`${urllink}/${userId}`, fetchOptions);
            const Submissions=await response.json();
            console.log("bruh");
            console.log(JSON.stringify(Submissions)+"------");
            populateSubmissionsTable(JSON.stringify(Submissions));
        } catch (error) {
            console.log("this is so skibbidi");
            console.error('Error fetching submissions:', error);
        }
    }

    function populateSubmissionsTable(submissionsJson) {
        const submissions = JSON.parse(submissionsJson);
        const tableBody = document.getElementById('submissions-table').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; 
    
        submissions.forEach(submission => {
            const row = document.createElement('tr');
            console.log(submission.assignment?.id+" "+assignIndex+"$$$$$");
            if(submission.assignment?.id==assignIndex){
                console.log("SKIBBBB");
                const contentCell = document.createElement('td');
                contentCell.textContent = submission.content || 'N/A'; 
                row.appendChild(contentCell);
    
                const gradeCell = document.createElement('td');
                gradeCell.textContent = submission.grade || 'Ungraded'; 
                row.appendChild(gradeCell);
                console.log(submission.grade);
    
                const feedbackCell = document.createElement('td');
                feedbackCell.textContent = submission.feedback || 'No feedback yet'; 
                row.appendChild(feedbackCell);
    
    
                
                tableBody.appendChild(row);
            }
    
           
        });
    }
    window.filterNames = function filterNames() {
        const searchTerm = document.getElementById("searchBar").value.toLowerCase();
        filteredPeople = people.filter(person => person.name.toLowerCase().includes(searchTerm));
        totalPages = Math.ceil(filteredPeople.length / rowsPerPage);
        currentPage = 1; // Reset to first page after filtering
        populateTable(filteredPeople.slice(0, rowsPerPage));
    };

    window.addName = function(info) {
        console.log(info.split(","));
        info=info.split(",");
        console.log("Added name:", info[0]);
        listofpeople.add(info[0]);
        listofpeopleIds.add(Number(info[1]));
        console.log(listofpeople);
        const reviewGroup = document.getElementById('Review-Group');
        reviewGroup.textContent =  "Group Members: "+Array.from(listofpeople).join(", ");
        console.log(listofpeopleIds);
    };

    async function fetchAllStudents() {
        try {
            const response = await fetch(javaURI + "/api/people", fetchOptions);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            people = await response.json();
            filteredPeople = people;
            totalPages = Math.ceil(people.length / rowsPerPage);
            populateTable(people.slice(0, rowsPerPage));
        } catch (error) {
            console.error("Error fetching names:", error);
        }
    }

    window.changeRowsPerPage = function changeRowsPerPage() {
        rowsPerPage = parseInt(document.getElementById("rowsPerPage").value);
        currentPage = 1;
        totalPages = Math.ceil(filteredPeople.length / rowsPerPage);
        const startIdx = 0;
        const endIdx = rowsPerPage;
        populateTable(filteredPeople.slice(startIdx, endIdx));
    };

    // window.changePage = function changePage(direction) {
    //     if (direction === 'prev' && currentPage > 1) {
    //         currentPage--;
    //     } else if (direction === 'next' && currentPage < totalPages) {
    //         currentPage++;
    //     }
    //     const startIdx = (currentPage - 1) * rowsPerPage;
    //     const endIdx = startIdx + rowsPerPage;
    //     populateTable(filteredPeople.slice(startIdx, endIdx));
    // };

    window.updatePageInfo = function updatePageInfo() {
    const pageInfo = document.getElementById("pageInfo");
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;
};


    function populateTable(names) {
        const tableBody = document.getElementById("namesTableBody");
        tableBody.innerHTML = "";
        names.forEach(name => {
            const row = document.createElement("tr");
            let info=[name.name,name.id];
            
            row.innerHTML = `<td>${name.name}</td><td><button onclick="addName('${info}')">Add</button></td>`;
            tableBody.appendChild(row);
        });
        updatePageInfo();
    }

    fetchAllStudents();
    disableGroupSubmit();
   document.addEventListener("DOMContentLoaded", async () => {
    await getUserId();
    await fetchSubmissions();
    await fetchAssignments();
});

</script>