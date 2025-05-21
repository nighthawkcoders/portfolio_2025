---
layout: post
title: Your Analytics
permalink: /analytics
search_exclude: true
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

<div class="px-5 py-5 mx-auto bg-[#0a0a23] text-gray-300 max-w-5xl">
  <table class="w-full table-fixed border border-gray-700 bg-gray-900 rounded-lg shadow-lg">
    <!-- Tab Buttons as Table Headers -->
    <thead class="bg-gray-800 border-b border-gray-700">
      <tr class="text-center text-gray-200 text-sm">
        <th class="px-4 py-3 hover:bg-[#1d3557] cursor-pointer" onclick="openTab(event, 'Github')">GitHub</th>
        <th class="px-4 py-3 hover:bg-[#1d3557] cursor-pointer" onclick="openTab(event, 'Bathroom')">Bathroom</th>
        <th class="px-4 py-3 hover:bg-[#1d3557] cursor-pointer" onclick="openTab(event, 'Grades')">Grades</th>
      </tr>
    </thead>
    <!-- Tabbed Content Area -->
    <tbody>
      <!-- GitHub Tab -->
      <tr id="Github" class="tabcontent hidden">
        <td colspan="3" class="p-0 bg-[#101020] rounded-b-lg">
          <div class="w-full h-full px-6 py-6 bg-gray-900 rounded-b-lg border-t border-gray-700">
            <h2 class="text-2xl font-bold mb-2 text-blue-300">GitHub Content</h2>
            <p class="text-gray-400">GitHub content goes here...</p>
          </div>
        </td>
      </tr>
      <!-- Bathroom Tab -->
      <tr id="Bathroom" class="tabcontent hidden">
        <td colspan="3" class="p-0 bg-[#101020] rounded-b-lg">
          <div class="w-full h-full px-6 py-6 bg-gray-900 rounded-b-lg border-t border-gray-700">
            <h2 class="text-2xl font-bold mb-2 text-blue-300">Bathroom Stats</h2>
            <p class="text-gray-400">Bathroom content goes here...</p>
          </div>
        </td>
      </tr>
      <!-- Grades Tab -->
      <tr id="Grades" class="tabcontent hidden">
        <td colspan="3" class="p-0 bg-[#101020] rounded-b-lg">
          <div class="w-full h-full px-6 py-6 bg-gray-900 rounded-b-lg border-t border-gray-700 text-gray-300">
            <h2 class="text-2xl font-bold mb-4 text-blue-300">Grades</h2>
            <!-- Grades Table -->
            <table class="w-full mb-4 border border-gray-700 text-sm text-gray-300">
              <thead class="bg-gray-700 text-gray-300 uppercase">
                <tr>
                  <th class="px-6 py-3">Assignment</th>
                  <th class="px-6 py-3">Grade</th>
                </tr>
              </thead>
              <tbody id="gradesTable">
                <!-- dynamic rows -->
              </tbody>
            </table>
            <!-- Assignment Selector -->
            <label for="assignmentSelect" class="block mb-2 text-gray-400">Choose an Assignment:</label>
            <select id="assignmentSelect" class="w-full bg-gray-800 border border-gray-600 text-white rounded px-4 py-2 mb-5">
              <!-- dynamic options -->
            </select>
            <!-- Box & Whisker Plot -->
            <div class="mb-5">
              <h3 class="text-xl font-semibold mb-2 text-blue-200">📦 Box and Whisker Plot</h3>
              <div id="boxPlot" class="bg-gray-700 p-4 rounded border border-gray-600 text-gray-300">
                <!-- plot goes here -->
              </div>
            </div>
            <!-- Your Grade -->
            <div>
              <h3 class="text-xl font-semibold mb-2 text-blue-200">🎓 Your Grade</h3>
              <p id="userGrade" class="text-gray-300">Loading your grade...</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<script>
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
</script>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URLs to fetch profile links, user data, and commits
    const profileLinksUrl = `${pythonURI}/api/analytics/github/user/profile_links`;
    const userProfileUrl = `${pythonURI}/api/analytics/github/user`;
    const commitsUrl = `${pythonURI}/api/analytics/github/user/commits`;
    const prsUrl = `${pythonURI}/api/analytics/github/user/prs`;
    const issuesUrl = `${pythonURI}/api/analytics/github/user/issues`;

    async function fetchData() {
        try {
            // Define the fetch requests
            const profileLinksRequest = fetch(profileLinksUrl, fetchOptions);
            const userProfileRequest = fetch(userProfileUrl, fetchOptions);
            const commitsRequest = fetch(commitsUrl, fetchOptions);
            const prsRequest = fetch(prsUrl, fetchOptions);
            const issuesRequest = fetch(issuesUrl, fetchOptions);

            // Run all fetch requests concurrently
            const [profileLinksResponse, userProfileResponse, commitsResponse, prsResponse, issuesResponse] = await Promise.all([
                profileLinksRequest,
                userProfileRequest,
                commitsRequest,
                prsRequest,
                issuesRequest
            ]);

            // Check for errors in the responses
            if (!profileLinksResponse.ok) {
                throw new Error('Failed to fetch profile links: ' + profileLinksResponse.statusText);
            }
            if (!userProfileResponse.ok) {
                throw new Error('Failed to fetch user profile: ' + userProfileResponse.statusText);
            }
            if (!commitsResponse.ok) {
                throw new Error('Failed to fetch commits: ' + commitsResponse.statusText);
            }
            if (!prsResponse.ok) {
                throw new Error('Failed to fetch pull requests: ' + prsResponse.statusText);
            }
            if (!issuesResponse.ok) {
                throw new Error('Failed to fetch issues: ' + issuesResponse.statusText);
            }

            // Parse the JSON data
            const profileLinks = await profileLinksResponse.json();
            const userProfile = await userProfileResponse.json();
            const commitsData = await commitsResponse.json();
            const prsData = await prsResponse.json();
            const issuesData = await issuesResponse.json();

            // Extract commits count
            const commitsArray = commitsData.details_of_commits || [];
            const commitsCount = commitsData.total_commit_contributions || 0;
            const prsArray = prsData.pull_requests || [];
            const prsCount = prsArray.length || 0;
            const issuesArray = issuesData.issues || [];
            const issuesCount = issuesArray.length || 0;

            // Extract relevant information from the user profile data
            const username = userProfile.login || 'N/A';
            const profileUrl = profileLinks.profile_url || 'N/A';
            const avatarUrl = userProfile.avatar_url || '';
            const publicReposUrl = profileLinks.repos_url || 'N/A';  // Added for repos URL
            const publicRepos = userProfile.public_repos || 'N/A';
            const publicGists = userProfile.public_gists || 'N/A';
            const followers = userProfile.followers || 'N/A';
            const following = userProfile.following || 'N/A';

            // Update the HTML elements with the data
            document.getElementById('avatar').src = avatarUrl;
            document.getElementById('username').textContent = `Username: ${username}`;
            document.getElementById('profile-url').innerHTML = `Profile URL: <a href="${profileUrl}" target="_blank">${profileUrl}</a>`;  // Added link to profile URL
            document.getElementById('public-repos').textContent = `Public Repos: ${publicRepos}`;
            document.getElementById('public-gists').textContent = `Public Gists: ${publicGists}`;
            document.getElementById('followers').textContent = `Followers: ${followers}`;

            document.getElementById('commits-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Commits: ${commitsCount}`;
            document.querySelector('#commits-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(commitsArray);
            });

            document.getElementById('prs-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Pull Requests: ${prsCount}`;
            document.querySelector('#prs-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(prsArray);
            });

            document.getElementById('issues-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Issues: ${issuesCount}`;
            document.querySelector('#issues-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(issuesArray);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to convert JSON data to a string with clickable links via Regular Expression (RegEx)
    function jsonToHtml(json) {
        const jsonString = JSON.stringify(json, null, 2);
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return jsonString.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
    }

    // Function to show modal with data
    function showModal(data) {
        const modal = document.getElementById('dataModal');
        const modalData = document.getElementById('modalData');
        const closeBtn = document.getElementsByClassName['close'](0);

        modalData.innerHTML = jsonToHtml(data);
        modal.style.display = 'block';

        closeBtn.onclick = function () {
            modal.style.display = 'none';
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Call the fetchData function to initiate the requests
    fetchData();
</script>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script type="module">
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    function calculateAverageDuration(timeIn) {
        const visits = timeIn.split(',');
        let totalDuration = 0;
        visits.forEach(visit => {
            const [checkIn, checkOut] = visit.split('-');
            const formatTime = time => time.padStart(5, '0');
            const checkInTime = new Date('1970-01-01T' + formatTime(checkIn)).getTime();
            const checkOutTime = new Date('1970-01-01T' + formatTime(checkOut)).getTime();
            totalDuration += (checkOutTime - checkInTime) / 1000 / 60;
        });
        return totalDuration / visits.length;
    }

    function getTinkle(personName) {
        fetch(`${javaURI}/api/tinkle/${personName}`, { ...fetchOptions, credentials: 'include' })
            .then(response => response.ok ? response.json() : null)
            .then(data => {
                if (!data) return;
                const timeIn = data.timeIn;
                document.getElementById('num-times').textContent = timeIn.split(',').length;
                document.getElementById('avg-duration').textContent = calculateAverageDuration(timeIn).toFixed(2);
                updateChart(timeIn);
            })
            .catch(console.error);
    }

    function getPerson() {
        fetch(`${javaURI}/api/person/get`, { ...fetchOptions, credentials: 'include' })
            .then(response => response.ok ? response.json() : null)
            .then(data => { if (data) getTinkle(encodeURIComponent(data.name)); })
            .catch(console.error);
    }

    function getPeriod(time) {
        const periods = [
            ['08:35', '09:41'],
            ['09:46', '10:55'],
            ['11:37', '12:43'],
            ['13:18', '14:24'],
            ['14:29', '15:35']
        ];
        const t = new Date('1970-01-01T' + time).getTime();
        return periods.findIndex(([start, end]) => t >= new Date('1970-01-01T' + start).getTime() && t <= new Date('1970-01-01T' + end).getTime()) + 1;
    }

    function updateChart(timeIn) {
        const periodCounts = Array(5).fill(0);
        timeIn.split(',').forEach(visit => {
            const checkIn = visit.split('-')[0];
            const period = getPeriod(checkIn);
            if (period) periodCounts[period - 1]++;
        });
        const ctx = document.getElementById('bathroomChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
                datasets: [{
                    label: 'Bathroom Usage',
                    data: periodCounts,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: { scales: { y: { beginAtZero: true } } }
        });
    }

    window.addEventListener('load', getPerson);
</script>

<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    let userId = -1;
    let grades = [];
    let assignment;

    function populateTable(grades) {
        const tableBody = document.getElementById("gradesTable").getElementsByTagName("tbody")[0];
        
        tableBody.innerHTML = "";

        grades.forEach(stugrade => {
            let row = tableBody.insertRow();

            let cell1 = row.insertCell(0);
            cell1.textContent = stugrade[1];

            let cell2 = row.insertCell(1);
            cell2.textContent = stugrade[0];
        });

        displayAverage(grades);
    }

    function displayAverage(grades) {
        let total = 0;
        let count = grades.length;

        grades.forEach(stugrade => {
            total += parseFloat(stugrade[0]); 
        });

        let average = (total / count).toFixed(2); 

        const averageDiv = document.getElementById("averageDiv");
        if (averageDiv) {
            averageDiv.innerHTML = `<strong>Average Grade: ${average}</strong>`;
        } else {
            const newAverageDiv = document.createElement("div");
            newAverageDiv.id = "averageDiv";
            newAverageDiv.innerHTML = `<strong>Average Grade: ${average}</strong>`;
            document.body.appendChild(newAverageDiv);
        }
    }

    async function getUserId() {
        const url_persons = `${javaURI}/api/person/get`;
        await fetch(url_persons, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                userId = data.id;
            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }

    async function fetchAssignmentbyId(assignmentId) {
        try {
            const response = await fetch(javaURI + "/api/assignments/" + String(assignmentId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch assignments: ${response.statusText}`);
            }

            const assignment = await response.text();
            return assignment;  

        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    }

    async function getGrades() {
        const urlGrade = javaURI + '/api/synergy/grades';

        try {
            const response = await fetch(urlGrade, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to get data: ' + response.statusText);
            }

            const data = await response.json();
            await getUserId();  

            for (const grade of data) {
                if (grade.studentId == userId) {
                    let stugrade = [];
                    stugrade.push(grade.grade);
                    
                    const assignmentDetails = await fetchAssignmentbyId(grade.assignmentId);
                    stugrade.push(assignmentDetails);
                    
                    grades.push(stugrade);
                }
            }

            populateTable(grades);

        } catch (error) {
            console.error('Error fetching grades:', error);
        }
    }

    window.onload = async function() {
        await getUserId();
        await getGrades(); 
    };
</script>

<script type="module">
    import { javaURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    document.getElementById('assignmentSelect').addEventListener('change', fetchGrades);

    async function loadAssignments() {
        const options = {
            URL: `${javaURI}/api/synergy/grades`,
            method: "GET",
            cache: "no-cache",
        };
        console.log(options.URL);
        try {
            const response = await fetch(options.URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to load assignments: ${response.status}`);
            }
            const responseData = await response.json();
            const assignmentIds = [...new Set(responseData.map(item => item.assignmentId))];
            console.log("API Response Data:", responseData);
            console.log("assignment IDS:", assignmentIds);
            const assignmentSelect = document.getElementById('assignmentSelect');
            assignmentSelect.innerHTML = "";
            assignmentIds.forEach(id => {
                const option = document.createElement('option');
                option.value = id;
                option.text = `Assignment ${id}`;
                assignmentSelect.add(option);
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchGrades() {
        const assignmentId = document.getElementById('assignmentSelect').value;
        const options = {
            method: "GET",
            cache: "no-cache",
        };
        try {
            const gradesResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/grades`, fetchOptions);
            if (!gradesResponse.ok) {
                throw new Error(`Failed to fetch grades data: ${gradesResponse.status}`);
            }
            const gradesText = await gradesResponse.text();
            console.log("Grades Response Text:", gradesText);
            if (!gradesText) {
                throw new Error("Response body is empty");
            }
            const gradesData = JSON.parse(gradesText);
            const grades = gradesData.grades;
            console.log("grades:", grades);
            const userResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/student/grade`, fetchOptions);
            if (!userResponse.ok) {
                throw new Error(`Failed to fetch user-specific grades: ${userResponse.status}`);
            }
            const userData = await userResponse.json();
            console.log("Grades Data:", grades);
            console.log("User Data:", userData);
            createBoxPlot(grades, userData);
            showCharts();
            displayUserData(userData);
        } catch (error) {
            console.error("Error fetching or parsing grades:", error.message);
        }
    }

    let thereIsABoxPlot = false;
    function createBoxPlot(grades, userData) {
        if (!thereIsABoxPlot) {
            thereIsABoxPlot = true;
        } else {
            Plotly.purge(document.getElementById("boxPlot"));
        }
        const trace = {
            y: grades,
            type: 'box',
            name: 'Grades',
            marker: { color: 'rgba(255, 193, 7, 0.6)' },
            line: { color: '#ffa726' }
        };
        const userTrace = {
            y: [userData],
            x: ['Grades'],  // Ensures the dot aligns with the box plot's category
            mode: 'markers',
            name: 'Your Grade',
            marker: { color: 'red', size: 10 }
        };

        const data = [trace, userTrace];
        const layout = {
            title: 'Grades Box and Whisker Plot',
            titlefont: { color: '#ffa726' },
            yaxis: { title: 'Grades', zeroline: false, color: '#ffffff' },
            paper_bgcolor: '#2c2c2e',
            plot_bgcolor: '#2c2c2e'
        };
        Plotly.newPlot('boxPlot', data, layout);
    }

    function showCharts() {
        document.getElementById('boxPlotSection').classList.add('visible');
    }

    window.onload = loadAssignments;

    function displayUserData(userData) {
        const userGradeElement = document.getElementById('userGrade');
        if (userData) {
            userGradeElement.textContent = `Your grade for this assignment is: ${userData}`;
        } else {
            console.warn("Unexpected User Data Structure:", userData);
            userGradeElement.textContent = "No grade available for this assignment.";
        }
    }
</script>

<script>
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
</script>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // URLs to fetch profile links, user data, and commits
    const profileLinksUrl = `${pythonURI}/api/analytics/github/user/profile_links`;
    const userProfileUrl = `${pythonURI}/api/analytics/github/user`;
    const commitsUrl = `${pythonURI}/api/analytics/github/user/commits`;
    const prsUrl = `${pythonURI}/api/analytics/github/user/prs`;
    const issuesUrl = `${pythonURI}/api/analytics/github/user/issues`;

    async function fetchData() {
        try {
            // Define the fetch requests
            const profileLinksRequest = fetch(profileLinksUrl, fetchOptions);
            const userProfileRequest = fetch(userProfileUrl, fetchOptions);
            const commitsRequest = fetch(commitsUrl, fetchOptions);
            const prsRequest = fetch(prsUrl, fetchOptions);
            const issuesRequest = fetch(issuesUrl, fetchOptions);

            // Run all fetch requests concurrently
            const [profileLinksResponse, userProfileResponse, commitsResponse, prsResponse, issuesResponse] = await Promise.all([
                profileLinksRequest,
                userProfileRequest,
                commitsRequest,
                prsRequest,
                issuesRequest
            ]);

            // Check for errors in the responses
            if (!profileLinksResponse.ok) {
                throw new Error('Failed to fetch profile links: ' + profileLinksResponse.statusText);
            }
            if (!userProfileResponse.ok) {
                throw new Error('Failed to fetch user profile: ' + userProfileResponse.statusText);
            }
            if (!commitsResponse.ok) {
                throw new Error('Failed to fetch commits: ' + commitsResponse.statusText);
            }
            if (!prsResponse.ok) {
                throw new Error('Failed to fetch pull requests: ' + prsResponse.statusText);
            }
            if (!issuesResponse.ok) {
                throw new Error('Failed to fetch issues: ' + issuesResponse.statusText);
            }

            // Parse the JSON data
            const profileLinks = await profileLinksResponse.json();
            const userProfile = await userProfileResponse.json();
            const commitsData = await commitsResponse.json();
            const prsData = await prsResponse.json();
            const issuesData = await issuesResponse.json();

            // Extract commits count
            const commitsArray = commitsData.details_of_commits || [];
            const commitsCount = commitsData.total_commit_contributions || 0;
            const prsArray = prsData.pull_requests || [];
            const prsCount = prsArray.length || 0;
            const issuesArray = issuesData.issues || [];
            const issuesCount = issuesArray.length || 0;

            // Extract relevant information from the user profile data
            const username = userProfile.login || 'N/A';
            const profileUrl = profileLinks.profile_url || 'N/A';
            const avatarUrl = userProfile.avatar_url || '';
            const publicReposUrl = profileLinks.repos_url || 'N/A';  // Added for repos URL
            const publicRepos = userProfile.public_repos || 'N/A';
            const publicGists = userProfile.public_gists || 'N/A';
            const followers = userProfile.followers || 'N/A';
            const following = userProfile.following || 'N/A';

            // Update the HTML elements with the data
            document.getElementById('avatar').src = avatarUrl;
            document.getElementById('username').textContent = `Username: ${username}`;
            document.getElementById('profile-url').innerHTML = `Profile URL: <a href="${profileUrl}" target="_blank">${profileUrl}</a>`;  // Added link to profile URL
            document.getElementById('public-repos').textContent = `Public Repos: ${publicRepos}`;
            document.getElementById('public-gists').textContent = `Public Gists: ${publicGists}`;
            document.getElementById('followers').textContent = `Followers: ${followers}`;

            document.getElementById('commits-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Commits: ${commitsCount}`;
            document.querySelector('#commits-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(commitsArray);
            });

            document.getElementById('prs-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Pull Requests: ${prsCount}`;
            document.querySelector('#prs-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(prsArray);
            });

            document.getElementById('issues-count').innerHTML = '<a href="#" class="info-link"><i class="fas fa-info-circle info-icon"></i></a>' + `Issues: ${issuesCount}`;
            document.querySelector('#issues-count .info-link').addEventListener('click', (event) => {
                event.preventDefault();
                showModal(issuesArray);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to convert JSON data to a string with clickable links via Regular Expression (RegEx)
    function jsonToHtml(json) {
        const jsonString = JSON.stringify(json, null, 2);
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return jsonString.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
    }

    // Function to show modal with data
    function showModal(data) {
        const modal = document.getElementById('dataModal');
        const modalData = document.getElementById('modalData');
        const closeBtn = document.getElementsByClassName['close'](0);

        modalData.innerHTML = jsonToHtml(data);
        modal.style.display = 'block';

        closeBtn.onclick = function () {
            modal.style.display = 'none';
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Call the fetchData function to initiate the requests
    fetchData();
</script>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script type="module">
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    function calculateAverageDuration(timeIn) {
        const visits = timeIn.split(',');
        let totalDuration = 0;
        visits.forEach(visit => {
            const [checkIn, checkOut] = visit.split('-');
            const formatTime = time => time.padStart(5, '0');
            const checkInTime = new Date('1970-01-01T' + formatTime(checkIn)).getTime();
            const checkOutTime = new Date('1970-01-01T' + formatTime(checkOut)).getTime();
            totalDuration += (checkOutTime - checkInTime) / 1000 / 60;
        });
        return totalDuration / visits.length;
    }

    function getTinkle(personName) {
        fetch(`${javaURI}/api/tinkle/${personName}`, { ...fetchOptions, credentials: 'include' })
            .then(response => response.ok ? response.json() : null)
            .then(data => {
                if (!data) return;
                const timeIn = data.timeIn;
                document.getElementById('num-times').textContent = timeIn.split(',').length;
                document.getElementById('avg-duration').textContent = calculateAverageDuration(timeIn).toFixed(2);
                updateChart(timeIn);
            })
            .catch(console.error);
    }

    function getPerson() {
        fetch(`${javaURI}/api/person/get`, { ...fetchOptions, credentials: 'include' })
            .then(response => response.ok ? response.json() : null)
            .then(data => { if (data) getTinkle(encodeURIComponent(data.name)); })
            .catch(console.error);
    }

    function getPeriod(time) {
        const periods = [
            ['08:35', '09:41'],
            ['09:46', '10:55'],
            ['11:37', '12:43'],
            ['13:18', '14:24'],
            ['14:29', '15:35']
        ];
        const t = new Date('1970-01-01T' + time).getTime();
        return periods.findIndex(([start, end]) => t >= new Date('1970-01-01T' + start).getTime() && t <= new Date('1970-01-01T' + end).getTime()) + 1;
    }

    function updateChart(timeIn) {
        const periodCounts = Array(5).fill(0);
        timeIn.split(',').forEach(visit => {
            const checkIn = visit.split('-')[0];
            const period = getPeriod(checkIn);
            if (period) periodCounts[period - 1]++;
        });
        const ctx = document.getElementById('bathroomChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
                datasets: [{
                    label: 'Bathroom Usage',
                    data: periodCounts,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: { scales: { y: { beginAtZero: true } } }
        });
    }

    window.addEventListener('load', getPerson);
</script>

<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    let userId = -1;
    let grades = [];
    let assignment;

    function populateTable(grades) {
        const tableBody = document.getElementById("gradesTable").getElementsByTagName("tbody")[0];
        
        tableBody.innerHTML = "";

        grades.forEach(stugrade => {
            let row = tableBody.insertRow();

            let cell1 = row.insertCell(0);
            cell1.textContent = stugrade[1];

            let cell2 = row.insertCell(1);
            cell2.textContent = stugrade[0];
        });

        displayAverage(grades);
    }

    function displayAverage(grades) {
        let total = 0;
        let count = grades.length;

        grades.forEach(stugrade => {
            total += parseFloat(stugrade[0]); 
        });

        let average = (total / count).toFixed(2); 

        const averageDiv = document.getElementById("averageDiv");
        if (averageDiv) {
            averageDiv.innerHTML = `<strong>Average Grade: ${average}</strong>`;
        } else {
            const newAverageDiv = document.createElement("div");
            newAverageDiv.id = "averageDiv";
            newAverageDiv.innerHTML = `<strong>Average Grade: ${average}</strong>`;
            document.body.appendChild(newAverageDiv);
        }
    }

    async function getUserId() {
        const url_persons = `${javaURI}/api/person/get`;
        await fetch(url_persons, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                userId = data.id;
            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }

    async function fetchAssignmentbyId(assignmentId) {
        try {
            const response = await fetch(javaURI + "/api/assignments/" + String(assignmentId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch assignments: ${response.statusText}`);
            }

            const assignment = await response.text();
            return assignment;  

        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    }

    async function getGrades() {
        const urlGrade = javaURI + '/api/synergy/grades';

        try {
            const response = await fetch(urlGrade, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to get data: ' + response.statusText);
            }

            const data = await response.json();
            await getUserId();  

            for (const grade of data) {
                if (grade.studentId == userId) {
                    let stugrade = [];
                    stugrade.push(grade.grade);
                    
                    const assignmentDetails = await fetchAssignmentbyId(grade.assignmentId);
                    stugrade.push(assignmentDetails);
                    
                    grades.push(stugrade);
                }
            }

            populateTable(grades);

        } catch (error) {
            console.error('Error fetching grades:', error);
        }
    }

    window.onload = async function() {
        await getUserId();
        await getGrades(); 
    };
</script>

<script type="module">
    import { javaURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    document.getElementById('assignmentSelect').addEventListener('change', fetchGrades);

    async function loadAssignments() {
        const options = {
            URL: `${javaURI}/api/synergy/grades`,
            method: "GET",
            cache: "no-cache",
        };
        console.log(options.URL);
        try {
            const response = await fetch(options.URL, fetchOptions);
            if (!response.ok) {
                throw new Error(`Failed to load assignments: ${response.status}`);
            }
            const responseData = await response.json();
            const assignmentIds = [...new Set(responseData.map(item => item.assignmentId))];
            console.log("API Response Data:", responseData);
            console.log("assignment IDS:", assignmentIds);
            const assignmentSelect = document.getElementById('assignmentSelect');
            assignmentSelect.innerHTML = "";
            assignmentIds.forEach(id => {
                const option = document.createElement('option');
                option.value = id;
                option.text = `Assignment ${id}`;
                assignmentSelect.add(option);
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchGrades() {
        const assignmentId = document.getElementById('assignmentSelect').value;
        const options = {
            method: "GET",
            cache: "no-cache",
        };
        try {
            const gradesResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/grades`, fetchOptions);
            if (!gradesResponse.ok) {
                throw new Error(`Failed to fetch grades data: ${gradesResponse.status}`);
            }
            const gradesText = await gradesResponse.text();
            console.log("Grades Response Text:", gradesText);
            if (!gradesText) {
                throw new Error("Response body is empty");
            }
            const gradesData = JSON.parse(gradesText);
            const grades = gradesData.grades;
            console.log("grades:", grades);
            const userResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/student/grade`, fetchOptions);
            if (!userResponse.ok) {
                throw new Error(`Failed to fetch user-specific grades: ${userResponse.status}`);
            }
            const userData = await userResponse.json();
            console.log("Grades Data:", grades);
            console.log("User Data:", userData);
            createBoxPlot(grades, userData);
            showCharts();
            displayUserData(userData);
        } catch (error) {
            console.error("Error fetching or parsing grades:", error.message);
        }
    }

    let thereIsABoxPlot = false;
    function createBoxPlot(grades, userData) {
        if (!thereIsABoxPlot) {
            thereIsABoxPlot = true;
        } else {
            Plotly.purge(document.getElementById("boxPlot"));
        }
        const trace = {
            y: grades,
            type: 'box',
            name: 'Grades',
            marker: { color: 'rgba(255, 193, 7, 0.6)' },
            line: { color: '#ffa726' }
        };
        const userTrace = {
            y: [userData],
            x: ['Grades'],  // Ensures the dot aligns with the box plot's category
            mode: 'markers',
            name: 'Your Grade',
            marker: { color: 'red', size: 10 }
        };

        const data = [trace, userTrace];
        const layout = {
            title: 'Grades Box and Whisker Plot',
            titlefont: { color: '#ffa726' },
            yaxis: { title: 'Grades', zeroline: false, color: '#ffffff' },
            paper_bgcolor: '#2c2c2e',
            plot_bgcolor: '#2c2c2e'
        };
        Plotly.newPlot('boxPlot', data, layout);
    }

    function showCharts() {
        document.getElementById('boxPlotSection').classList.add('visible');
    }

    window.onload = loadAssignments;

    function displayUserData(userData) {
        const userGradeElement = document.getElementById('userGrade');
        if (userData) {
            userGradeElement.textContent = `Your grade for this assignment is: ${userData}`;
        } else {
            console.warn("Unexpected User Data Structure:", userData);
            userGradeElement.textContent = "No grade available for this assignment.";
        }
    }
</script>
