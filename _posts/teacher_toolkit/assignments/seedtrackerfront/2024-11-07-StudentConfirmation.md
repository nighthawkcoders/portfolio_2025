---
toc: false
layout: post
title: Seed Tracker Student Confirmation
type: ccc
permalink: /student/seedtracker/confirm
---


<head>
  <title>Student Confirmation</title>
  <style>
    /* ... eshaan add in style later ... */
  </style>
</head>
<body>

<h1>Student Confirmation</h1>
<table id="submissionsTable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Request Sent</th>
    </tr>
  </thead>
  <tbody>
    <!-- Table rows will be populated here -->
  </tbody>
</table>

<script type="module">
  import { javaURI } from '{{site.baseurl}}/assets/js/api/config.js';
  async function fetchSubmissions() {
    try {
      const response = await fetch(`${javaURI}/api/grades/requests/seed`); // Replace with your actual backend API endpoint
      const submissions = await response.json();
      console.log(submissions);

      const tableBody = document.getElementById('submissionsTable').querySelector('tbody');
      tableBody.innerHTML = '';

      if (submissions.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="2">No submissions found</td></tr>`;
      } else {
        submissions.forEach(submission => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${submission.id}</td>
            <td>Sent</td>
          `;
          tableBody.appendChild(row);
        });
      }

    } catch (error) {
      console.error('Error fetching submissions:', error);
      const tableBody = document.getElementById('submissionsTable').querySelector('tbody');
      tableBody.innerHTML = `<tr><td colspan="2">Error loading data: ${error.message}</td></tr>`;
    }
  }

  // Fetch data on page load
  document.addEventListener('DOMContentLoaded', fetchSubmissions);
</script>

</body>