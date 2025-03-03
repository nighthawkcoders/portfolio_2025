---
toc: false
layout: post
title: Seed Tracker Teacher
type: ccc
permalink: /teacher/seed
---

<head>
  <title>Student Weekly Project Submissions</title>
  <style>
    /* ... eshaan add in style later ... */
  </style>
</head>
<body>

<h1>Student Weekly Project Submissions</h1>
<table id="submissionsTable">
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Comment</th>
      <th>Request</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<script type="module">
  // Fetch all submissions when the page loads
  import { javaURI } from '{{site.baseurl}}/assets/js/api/config.js';

  async function fetchSubmissions() {
    try {
      const response = await fetch(`${javaURI}/api/grades/requests/seed`);
      const submissions = await response.json();

      const tableBody = document.getElementById('submissionsTable').querySelector('tbody');
      tableBody.innerHTML = '';  // Clear existing rows

      if (submissions.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4">No submissions found</td></tr>`;
      } else {
        submissions.forEach(submission => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${submission.name}</td>
            <td>${submission.comment}</td>
            <td id="request-${submission.id}">${submission.grade}</td>
            <td>
              <button onclick="adjustRequest(${submission.id}, 0.05)">+</button>
              <button onclick="adjustRequest(${submission.id}, -0.05)">-</button>
            </td>
          `;
          tableBody.appendChild(row);
        });
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      const tableBody = document.getElementById('submissionsTable').querySelector('tbody');
      tableBody.innerHTML = `<tr><td colspan="4">Error loading data: ${error.message}</td></tr>`;
    }
  }

  // Adjust the grade by +0.05 or -0.05, update the backend as well
  async function adjustRequest(id, change) {
  try {
    const requestElement = document.getElementById(`request-${id}`);
    let currentRequest = parseFloat(requestElement.textContent);
    const updatedRequest = currentRequest + change;

    // Update the frontend
    requestElement.textContent = updatedRequest.toFixed(2);

    // Update the backend
  const response = await fetch(`${javaURI}/api/grades/requests/seed/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grade: updatedRequest,
      }),   
    });

    if (!response.ok) {
      throw new Error('Error updating request in backend');
    }

    } catch (error) {
      console.error('Error adjusting request:', error);
    }
  }

  // Fetch data when the page is fully loaded
  document.addEventListener('DOMContentLoaded', fetchSubmissions);
</script>

</body>
