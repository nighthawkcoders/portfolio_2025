---
layout: finance
title: Bank Analytics
permalink: /gamify/bankanalytics
---

<html lang="en">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
    /* Hover scale effect for nav links */
    .nav-link-custom {
    transition: transform 0.3s;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 6px;
    }
    .nav-link-custom:hover {
    background-color: #ff9800;
    transform: scale(1.1);
    }
    /* Table header override */
    th.custom-th {
    background-color: #ff9800;
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
    }
    /* Table cell override */
    td.custom-td {
    background-color: #2a2a2a;
    border-bottom: 1px solid #444;
    transition: background 0.3s;
    }
    tr:hover td.custom-td {
    background-color: #ff22a6;
    color: #fff;
    }
</style>
<body class="m-0 p-0" style="font-family: 'Poppins', sans-serif; background-color: #121212; color: #fff;">


<br>
<h1 class="text-center">Bank Analytics</h1>

<!-- Dashboard Content -->
<div class="container my-4">
<div class="row g-4">
    <!-- Left Section - User Details -->
    <div class="col-md">
    <div class="p-4 rounded shadow" style="background-color: #1f1f1f;">
        <div class="mb-4 text-start">
        <h2 class="mb-3" style="color: #ff9800;">User Analytics</h2>
        <div class="p-3 rounded" style="background-color: #2a2a2a;">
            <div class="mb-3" style="font-size: 18px;">
            <span style="color: #ff9800; margin-right: 10px;">Username:</span>
            <span class="name">Loading...</span>
            </div>
            <div class="mb-3" style="font-size: 18px;">
            <span style="color: #ff9800; margin-right: 10px;">Account Balance:</span>
            <span class="balance">Loading...</span>
            </div>
            <div class="mb-3" style="font-size: 18px;">
            <span style="color: #ff9800; margin-right: 10px;">Total Transactions:</span>
            <span>0</span>
            </div>
        </div>
        </div>
    </div>
    </div>
    <!-- Right Section - Leaderboard -->
    <div class="col-md-auto" style="min-width: 400px;">
    <h1 class="mb-3 text-uppercase fw-bold" style="background: linear-gradient(90deg, #ff8c00, #ff22a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding-bottom: 10px; border-bottom: 3px solid #ff22a6; letter-spacing: 2px;">
        Top 10 Users
    </h1>
    <div class="table-responsive">
        <table class="table mb-0" style="background-color: #1f1f1f; border-collapse: collapse; border-radius: 8px; box-shadow: 0 0 15px rgba(255,136,0,0.5); overflow: hidden;">
        <thead>
            <tr>
            <th class="custom-th" style="width:15%;">Rank</th>
            <th class="custom-th" style="width:55%;">Name</th>
            <th class="custom-th" style="width:30%;">Balance</th>
            </tr>
        </thead>
        <tbody id="top-users-table">
            <!-- Leaderboard Data Populated Here -->
        </tbody>
        </table>
    </div>
    </div>
</div>
</div>

<!-- Balance Chart Section -->
<div class="container my-4">
<div class="p-4 rounded shadow" style="background-color: #1f1f1f;">
    <h2 class="mb-3" style="color: #ff9800;">Balance Change History</h2>
    <!-- Hidden div to store bank data passed from backend -->
    <div id="bankData" data-profit-map='{"stocks":[150.25,-75.50,200.00],"casino":[50.00,25.00,12.50],"adventure":[1000.00,-500.00]}'></div>
    <div class="p-3 mb-3 rounded" style="background-color: #2a2a2a;">
    <label for="categorySelect" class="me-2">Select Category:</label>
    <select id="categorySelect" class="form-select d-inline-block w-auto" style="background-color: #3a3a3a; border: 1px solid #ff9800; color: #fff;">
        <option value="">Select a category</option>
    </select>
    </div>
    <div class="chart-container" style="height: 400px;">
    <canvas id="balanceChart"></canvas>
    </div>
</div>
</div>

<!-- Bootstrap JS Bundle (optional for components that require JavaScript) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script type="module">
import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

async function fetchUserDetails() {
    try {
    const response = await fetch(`${javaURI}/api/person/get`, fetchOptions);
    if (!response.ok) throw new Error("Failed to fetch user data");
    const userData = await response.json();
    // Update user details section
    document.querySelector('.name').textContent = userData.uid;
    document.querySelector('.balance').textContent = `$${Number(userData.balance).toFixed(2)}`;
    } catch (error) {
    console.error("Error fetching user data:", error);
    document.querySelector('.name').textContent = "Error loading user";
    }
}

async function fetchLeaderboard() {
    try {
    const response = await fetch(`${javaURI}/api/rankings/leaderboard`, fetchOptions);
    if (!response.ok) throw new Error("Failed to fetch leaderboard data");
    const data = await response.json();
    const topUsersTable = document.querySelector("#top-users-table");
    topUsersTable.innerHTML = "";
    data.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td class="custom-td fw-bold" style="color: #ffcc00;">${index + 1}</td>
        <td class="custom-td fw-bold">${user.name}</td>
        <td class="custom-td fw-bold" style="color: #00ff7f;">$${Number(user.balance).toFixed(2)}</td>
        `;
        topUsersTable.appendChild(row);
    });
    } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    }
}

// Balance Chart Functionality
function initializeBalanceChart() {
    const bankDataElement = document.getElementById('bankData');
    const profitMap = JSON.parse(bankDataElement.getAttribute('data-profit-map'));     
    let balanceChart = null;
    const ctx = document.getElementById('balanceChart').getContext('2d');
    const categorySelect = document.getElementById('categorySelect');
    
    function populateCategoryDropdown() {
    categorySelect.innerHTML = '<option value="">Select a category</option>'; 
    Object.keys(profitMap).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    if (Object.keys(profitMap).length > 0) {
        categorySelect.value = Object.keys(profitMap)[0];
    }
    }
    
    function updateChart() {
    const selectedCategory = categorySelect.value;
    if (!selectedCategory || !profitMap[selectedCategory]) return; 
    const profitData = profitMap[selectedCategory];
    const chartData = {
        labels: profitData.map((_, index) => `Transaction ${index + 1}`),
        datasets: [{
        label: `Balance Changes - ${selectedCategory}`,
        data: profitData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        tension: 0.1
        }, {
        label: `Cumulative Balance - ${selectedCategory}`,
        data: calculateCumulative(profitData),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        tension: 0.1
        }]
    }; 
    if (balanceChart) {
        balanceChart.data = chartData;
        balanceChart.update();
    } else {
        balanceChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
            title: {
                display: true,
                text: 'Balance Change History',
                color: '#ffffff'
            },
            legend: {
                labels: { color: '#ffffff' }
            },
            tooltip: {
                callbacks: {
                label: function(context) {
                    return `${context.dataset.label}: $${context.raw.toFixed(2)}`;
                }
                }
            }
            },
            scales: {
            x: {
                ticks: { color: '#ffffff' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: {
                beginAtZero: false,
                ticks: {
                color: '#ffffff',
                callback: function(value) {
                    return '$' + value.toFixed(2);
                }
                },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
            }
        }
        });
    }
    }
    
    function calculateCumulative(data) {
    let cumulative = 0;
    return data.map(value => {
        cumulative += value;
        return cumulative;
    });
    }
    
    populateCategoryDropdown();
    updateChart();
    categorySelect.addEventListener('change', updateChart);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchUserDetails();
    fetchLeaderboard();
    initializeBalanceChart();
});
</script>
