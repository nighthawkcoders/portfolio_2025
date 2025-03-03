---
toc: false
layout: post
title: Seed Tracker Log
type: ccc
permalink: /project/mort-translator/teacher-seed-log
---

<html lang="en">
<head>
    <title>Seed Tracker Log</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Chart.js CDN -->
</head>
<body>
<h1>Teacher Seed Log</h1>

<!-- Dropdown to select a student -->
<label for="studentSelect">Select Student:</label>
<select id="studentSelect">
  <option value="">-- Choose a Student --</option>
</select>

<!-- Canvas for the graph -->
<canvas id="seedGraph" width="600" height="400"></canvas>

<script type="module">
  import {javaURI} from '{{site.baseurl}}/assets/js/api/config.js';

  // Fetch student list and populate dropdown
  async function fetchStudents() {
    try {
        const response = await fetch(`${javaURI}/api/seeds/`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const seedEntries = await response.json();
        console.log("Fetched seed data:", seedEntries); // Debugging log

        if (!Array.isArray(seedEntries)) throw new Error("API response is not an array");

        const studentSelect = document.getElementById('studentSelect');
        studentSelect.innerHTML = '<option value="">-- Choose a Student --</option>'; // Reset dropdown

        // Extract unique student names from the seed data
        const studentNames = [...new Set(seedEntries.map(entry => entry.name))];

        studentNames.forEach(name => {
            if (!name) {
                console.warn("Skipping empty student name:", name);
                return; // Skip invalid names
            }
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            studentSelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error fetching student list:', error);
        alert("Failed to load student list. Check console for details.");
    }
}

  // Generate an array of dates from August 21 to today
  function generateDateRange() {
    const startDate = new Date('2024-08-21'); // Start from August 21, 2024
    const today = new Date(); // Current date
    const dateRange = [];

    // Loop through and create dates between the start and today
    while (startDate <= today) {
      dateRange.push(new Date(startDate)); // Add the current date to the array
      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    return dateRange;
  }

  // Format the date into a readable format (e.g., "MM/DD/YYYY")
  function formatDate(date) {
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Get the month with leading 0
    const day = ('0' + date.getDate()).slice(-2); // Get the day with leading 0
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  // Fetch and display the seed graph for the selected student
  async function fetchSeedLog(studentName) {
    try {
      const response = await fetch(`${javaURI}/api/seeds/?name=${studentName}`);
      const seedLog = await response.json();

      const dateRange = generateDateRange();
      const dates = dateRange.map(formatDate);  // Format the dates
      const seeds = new Array(dates.length).fill(null); // Initialize seed values array

      // Populate seed values for corresponding dates
      seedLog.forEach(entry => {
        const entryDate = new Date(entry.timestamp);
        const formattedEntryDate = formatDate(entryDate);

        // Find the index of the date in the date range
        const index = dates.indexOf(formattedEntryDate);
        if (index !== -1) {
          seeds[index] = Math.min(Math.max(entry.newSeed, 0), 1); // Scale seed value between 0 and 1
        }
      });

      // Generate the graph
      createGraph(dates, seeds);
    } catch (error) {
      console.error('Error fetching seed log:', error);
    }
  }

  // Create the seed change graph
  function createGraph(dates, seeds) {
    const ctx = document.getElementById('seedGraph').getContext('2d');

    // Create a new chart
    new Chart(ctx, {
      type: 'line',  // Line chart type
      data: {
        labels: dates,  // Dates on the X-axis
        datasets: [{
          label: 'Seed Value',
          data: seeds,  // Seed values on the Y-axis
          borderColor: 'rgba(75, 192, 192, 1)', // Line color
          fill: false, // No fill under the line
          tension: 0.1,  // Smooth line
          pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Points color
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date'
            },
            ticks: {
              autoSkip: true, // Skip ticks if they overlap
              maxRotation: 45, // Rotate labels to avoid overlap
            },
          },
          y: {
            min: 0, // Minimum seed value
            max: 1, // Maximum seed value
            ticks: {
              stepSize: 0.05 // Scaling the y-axis in increments of 0.05
            },
            title: {
              display: true,
              text: 'Seed Value'
            }
          }
        },
        responsive: true,  // Responsive chart
        plugins: {
          legend: {
            position: 'top',  // Position of the legend
          },
        },
      }
    });
  }

  // Event listener for student selection
  document.getElementById('studentSelect').addEventListener('change', (event) => {
    const studentName = event.target.value;
    if (studentName) {
      fetchSeedLog(studentName);
    } else {
      document.getElementById('seedGraph').innerHTML = ''; // Clear the graph if no student is selected
    }
  });

  // Load students when the page loads
  document.addEventListener('DOMContentLoaded', fetchStudents);
</script>

</body>
</html>
