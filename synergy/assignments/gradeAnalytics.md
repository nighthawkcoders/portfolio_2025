---
layout: page 
title: Grade Analytics 
permalink: /synergy/analytics
search_exclude: true
show_reading_time: false 
---

<head>
    <title>Grades Analytics</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
<body>

<div class="container">
    <h1>📊 Grades Analytics</h1>
    <!-- Assignment Selection Dropdown -->
    <label for="assignmentSelect">Choose an Assignment:</label>
    <select id="assignmentSelect"></select>
    <!-- Histogram Section -->
    <div class="chart-section" id="histogramSection">
        <h2>📈 Histogram of Grades</h2>
        <canvas id="histogram"></canvas>
    </div>
    <!-- Pie Chart Section -->
    <div class="chart-section" id="pieChartSection">
        <h2>🍰 Pie Chart of Grade Distribution</h2>
        <canvas id="pieChart"></canvas>
    </div>
    <!-- Box and Whisker Plot Section -->
    <div class="chart-section" id="boxPlotSection">
        <h2>📦 Box and Whisker Plot</h2>
        <div id="boxPlot"></div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js"></script>
<script type="module">
    document.getElementById('assignmentSelect').addEventListener('change', fetchGrades);
    import { login, javaURI, pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    // Utility to get a cookie by its name
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }
    // Decodes and validates the JWT token
    function decodeToken() {
        const token = getCookie('jwt_java_spring');
        if (!token) {
            console.error("Token not found in cookies");
            alert("You must log in to access Grade Analytics.");
            return null;
        }
        try {
            const decodedToken = jwt_decode(token); // Decode the token
            console.log("Decoded JWT:", decodedToken.sub); // Log email or user ID
            return token;
        } catch (err) {
            console.error('Error decoding token:', err);
            alert("Invalid token. Please log in again.");
            return null;
        }
    }
    function getUserId() {
        const token = getCookie('jwt_java_spring');
        if (!token) {
            console.error("Token not found in cookies");
            alert("You must log in to access Grade Analytics.");
            return null;
        }
        try {
            const decodedToken = jwt_decode(token);
            console.log("Decoded User ID:", decodedToken.sub); // Replace sub with the correct key if needed
            return decodedToken.sub; // Assuming the user ID is stored in the sub field of the JWT
        } catch (err) {
            console.error('Error decoding token:', err);
            alert("Invalid token. Please log in again.");
            return null;
        }
    }
    // Fetch grades based on selected assignment
    // Load assignments for dropdown
    async function loadAssignments() {
    const options = {
        URL: `${javaURI}/api/synergy/grades`, // Correct endpoint
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
        assignmentSelect.innerHTML = ""; // Clear existing options
        // Populate dropdown with assignment IDs
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
    const userId = getUserId();
    const options = {
        method: "GET",
        cache: "no-cache",
    };
    try {
        // Fetch grades for the selected assignment
        const gradesResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/grades`, fetchOptions);
        if (!gradesResponse.ok) {
            throw new Error(`Failed to fetch grades data: ${gradesResponse.status}`);
        }
        const gradesText = await gradesResponse.text(); // Get the raw response text
        console.log("Grades Response Text:", gradesText);
        if (!gradesText) {
            throw new Error("Response body is empty");
        }
        const gradesData = JSON.parse(gradesText); // Parse the response if it's valid
        const grades = gradesData.grades;
        console.log("grades:", grades);
        // Fetch user-specific grades for the assignment
        const userResponse = await fetch(`${javaURI}/api/analytics/assignment/${assignmentId}/student/${userId}/grade`, fetchOptions);
        if (!userResponse.ok) {
            throw new Error(`Failed to fetch user-specific grades: ${userResponse.status}`);
        }
        const userData = await userResponse.json();
        console.log("Grades Data:", grades);
        console.log("User Data:", userData);
        // Update charts with grades data
        createHistogram(grades);
        createPieChart(grades);
        createBoxPlot(grades);
        showCharts();
        // Optionally, display user-specific data on the page
        displayUserData(userData);
    } catch (error) {
        console.error("Error fetching or parsing grades:", error.message);
    }
}
    let histogram;
    function createHistogram(grades) {
        const ctx = document.getElementById('histogram').getContext('2d');        
        if (histogram) histogram.destroy();
        histogram = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Array.from(new Set(grades)).sort((a, b) => a - b),
                datasets: [{
                    label: 'Frequency of Grades',
                    data: Array.from(new Set(grades)).map(grade => grades.filter(g => g === grade).length),
                    backgroundColor: 'rgba(255, 193, 7, 0.6)',
                    borderColor: 'rgba(255, 193, 7, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                },
                plugins: {
                    title: { display: true, text: 'Grades Histogram', color: '#ffa726' },
                    legend: { labels: { color: '#ffffff' } }
                }
            }
        });
    }
    let pieChart;
    function createPieChart(grades) {
        const ctx = document.getElementById('pieChart').getContext('2d');
        const gradeRanges = {
            'A (90-100)': grades.filter(g => g >= .90).length,
            'B (80-89)': grades.filter(g => g >= .80 && g < .90).length,
            'C (70-79)': grades.filter(g => g >= .70 && g < .80).length,
            'D (60-69)': grades.filter(g => g >= .60 && g < .70).length,
            'F (< 60)': grades.filter(g => g < .60).length
        };
        if (pieChart) pieChart.destroy();
        pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(gradeRanges),
                datasets: [{
                    label: 'Grade Distribution',
                    data: Object.values(gradeRanges),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)', 
                        'rgba(75, 192, 192, 0.6)', 
                        'rgba(255, 206, 86, 0.6)', 
                        'rgba(255, 159, 64, 0.6)', 
                        'rgba(255, 99, 132, 0.6)'  
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: { display: true, text: 'Grade Distribution Pie Chart', color: '#ffa726' },
                    legend: { labels: { color: '#ffffff' } }
                }
            }
        });
    }
    let thereIsABoxPlot = false;
    function createBoxPlot(grades) {
        if (!thereIsABoxPlot) {thereIsABoxPlot = true;}
        else { Plotly.purge(document.getElementById("boxPlot")); }
        const trace = {
            y: grades,
            type: 'box',
            name: 'Grades',
            marker: { color: 'rgba(255, 193, 7, 0.6)' },
            line: { color: '#ffa726' }
        };
        const data = [trace];
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
        document.getElementById('histogramSection').classList.add('visible');
        document.getElementById('pieChartSection').classList.add('visible');
        document.getElementById('boxPlotSection').classList.add('visible');
    }
    window.onload = loadAssignments;

</script>

</body>