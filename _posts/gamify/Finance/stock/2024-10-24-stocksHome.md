---
layout: base
permalink: /stocks/home
title: Stocks Home
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Market Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: #001f3f; /* Dark blue background */
            color: #fff;
        }
        .navbar .logo {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .navbar .nav-buttons {
            display: flex;
            gap: 20px;
        }
        .navbar .nav-buttons a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            padding: 8px 16px;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        .navbar .nav-buttons a:hover {
            background-color: #ff8c00; /* Orange hover effect */
        }
        .dashboard {
            padding: 20px;
            display: flex;
            justify-content: flex-start;
            gap: 40px;
        }
        .dashboard-content {
            width: 70%; /* Increased width for the left side */
        }
        .sidebar {
            width: 35%; /* Width for the right side */
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: space-between; 
            /*left: 50%;*/
            position: relative; 
            background-color: #121212; /* Orange hover effect */
            padding: 20px; /* Add padding to the sidebar */
            box-sizing: border-box; /* Ensure padding doesn't overflow */
        }
        .stock-table, .your-stocks {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            background-color: #121212; /* Orange hover effect */
            border-collapse: collapse;
        }
        .stock-table table, .your-stocks table {
            width: 100%;
            border-collapse: collapse;
            background-color: #121212; /* Orange hover effect */
        }
        .stock-table th, .stock-table td, .your-stocks th, .your-stocks td {
            padding: 10px;
            text-align: left;
            background-color: #121212; /* Orange hover effect */
        }
        .stock-table th, .your-stocks th {
            background-color: #121212; /* Orange hover effect */
        }
        .welcome {
            font-size: 24px;
            font-weight: bold;
        }
        .summary-cards {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }
        .card {
            padding: 0px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            flex: 1;
            text-align: center;
            color: #fff;
        }
        .card-orange {
            background-color: #FF8C00; /* Orange color */
        }
        .card-purple {
            background-color: #6A0DAD; /* Purple color */
        }
        .card-darkblue {
            background-color: #001f3f; /* Dark blue color */
        }
        .card h2 {
            margin-top: 2px; 
            font-size: 18px;
        }
        .card p {
            font-size: 28px;
            font-weight: bold;
        }
        .chart-container {
            position: relative;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin: 20px 0;
            display: flex;
            gap: 20px;
        }
        .chart {
            height: 100%; 
            width: 100%; 
            background-color: #fff; 
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #999;
            flex: 1;
        }
        .search-container {
            margin-bottom: 20px;
            display: flex;
        }
        .search-container input[type="text"] {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 4px;
            outline: none;
            font-size: 16px;
        }
        .search-button {
            background-color: #ff8c00; 
            color: #fff;
            border: none;
            border-radius: 0 4px 4px 0; 
            padding: 12px 20px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .search-button:hover {
            background-color: #e07b00;
        }
        /* Crypto History Table */
    .crypto-history table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .crypto-history th, .crypto-history td {
        padding: 12px;
        text-align: center;
        border: 1px solid #444;
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .crypto-history th {
        background-color: #222;
        font-weight: bold;
    }
    /* Even Column Spacing */
    .crypto-history td:first-child { width: 20%; }
    .crypto-history td:nth-child(2) { width: 30%; }
    .crypto-history td:nth-child(3) { width: 25%; }
    .crypto-history td:nth-child(4) { width: 25%; }
    /* View Full History Button */
    .view-full-history-btn {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background-color: #444;
        color: white;
        border: none;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        border-radius: 5px;
    }
    .view-full-history-btn:hover {
        background-color: #666;
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
        background-color: rgba(0, 0, 0, 0.7);
        overflow: auto;
    }
    .modal-content {
        background-color: #121212;
        color: white;
        margin: 10% auto;
        padding: 20px;
        border-radius: 10px;
        width: 80%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    /* Close Button */
    .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    .close:hover {
        color: red;
    }
    /* Modal Table */
    .modal table {
        width: 100%;
        border-collapse: collapse;
    }
    .modal th, .modal td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #444;
    }
    .modal th {
        background-color: #333;
        font-weight: bold;
    }
    .crypto-chart-container {
    background-color: #121212;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    }
    .crypto-chart-container h3 {
        color: white;
        margin-bottom: 10px;
    }
    /* 🔹 Crypto Chart Container */
    .crypto-chart-container {
        width: 100%; /* Ensures it doesn't overflow */
        max-width: 700px; /* Limits the chart width */
        height: 400px; /* Set a reasonable height */
        margin: 0 auto; /* Centers the chart */
        padding: 10px;
        background-color: #121212;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    /* 🔹 Chart Canvas */
    #cryptoBalanceChart {
        width: 100% !important;
        height: 100% !important;
    }

    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
          <div class="nav-buttons">
            <a href="{{site.baseurl}}/stocks/home">Home</a>
            <a href="{{site.baseurl}}/crypto/portfolio">Crypto</a>
            <a href="{{site.baseurl}}/stocks/viewer">Stocks</a>
            <a href="{{site.baseurl}}/crypto/mining">Mining</a>
            <a href="{{site.baseurl}}/stocks/buysell">Buy/Sell</a>
            <a href="{{site.baseurl}}/stocks/leaderboard">Leaderboard</a>
            <a href="{{site.baseurl}}/stocks/game">Game</a>
            <a href="{{site.baseurl}}/stocks/portfolio">Portfolio</a>

        </div>
    </nav>
    <!-- Dashboard -->
    <div class="dashboard">
        <div class="dashboard-content">
            <h1 id="userIDName" class="welcome">Hi, Welcome Back</h1>
            <p>Invest your money today!</p>
            <div class="search-container">
                <input type="text" id="searchBar" placeholder="Search...">
                <button class="search-button" onclick="getStockData()">Search</button>
            </div>
            <div class="chart-container" id="chartContainer">
                <div class="chart" id="chart1">
                    <canvas id="stockChart" width="475" height="375">[Graph Placeholder]</canvas>
                </div>
            </div>
            <div class="crypto-chart-container">
                <h3> Portfolio Balance History</h3>
                <canvas id="cryptoBalanceChart"></canvas>
            </div>
            <div id="output" style="color: red; padding-top: 10px;"></div>
        </div>
        <!-- Sidebar -->
        <!-- Sidebar -->
<div class="sidebar">
    <div class="your-stocks">
        <h3>Your Stocks</h3>
        <table id="yourStocksTable">
            <tr>
                <th>Stock</th>
                <th>Price</th>
            </tr>
        </table>
    </div>
<div class="crypto-history">
    <h3>Your Crypto Transaction History</h3>
    <table id="cryptoHistoryTable">
        <tr>
            <th>Type</th>
            <th>Crypto Amount</th>
            <th>Dollar Value</th>
            <th>Timestamp</th>
        </tr>
    </table>
    <button class="view-full-history-btn" onclick="openHistoryModal()">View Full History</button>
</div>

<!-- Modal for Full History -->
<div id="historyModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeHistoryModal()">&times;</span>
        <h3>Full Crypto Transaction History</h3>
        <table id="fullCryptoHistoryTable">
            <tr>
                <th>Type</th>
                <th>Crypto Amount</th>
                <th>Dollar Value</th>
                <th>Timestamp</th>
            </tr>
        </table>
    </div>
</div>

</div>

<script type="module">
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    // Fetch user credentials and update the welcome message
    async function updateWelcomeMessage() {
        try {
            const credentials = await getCredentialsJava();
            const name = credentials?.name; // Assuming the name is stored in the credentials
            if (name) {
                document.getElementById("userIDName").textContent = `Hi ${name}, Welcome Back`;
            } else {
                console.error("User name not found in credentials");
            }
        } catch (error) {
            console.error("Error updating welcome message:", error);
        }
    }
    // Fetch user credentials
    async function getCredentialsJava() {
    const URL = javaURI + '/api/person/get';
    try {
        const response = await fetch(URL, fetchOptions);
        if (response.status !== 200) {
            console.error("HTTP status code: " + response.status);
            return null;
        }

        const data = await response.json();
        if (!data) return null;

        console.log("User Data:", data);

        // Store user email for later use
        if (data.email) {
            localStorage.setItem("userEmail", data.email);
        }

        return data;
    } catch (err) {
        console.error("Fetch error: ", err);
        return null;
    }
}

   async function getUserStocks() {
    try {
        const credentials = await getCredentialsJava(); // Get user data
        const email = credentials?.email; // Extract email
        if (!email) {
            throw new Error("User email not found");
        }
        const response = await fetch(javaURI + `/stocks/table/getStocks?username=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error(`Error fetching stocks: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user stocks:", error);
        return [];
    }
}
    async function updateYourStocksTable() {
        const userStocks = await getUserStocks();
        const table = document.getElementById("yourStocksTable");
        // Clear any existing rows (excluding header)
        table.innerHTML = `
            <tr>
                <th>Stock</th>
                <th>Price</th>
            </tr>`;
        // Populate the table with each user's stock and price
        for (const stockInfo of userStocks) {
            const { stockSymbol } = stockInfo;
            const price = await getStockPrice(stockSymbol);
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${stockSymbol}</td>
                <td id="${stockSymbol}Price">$${price}</td>
            `;
            table.appendChild(row);
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        updateYourStocksTable();
    });
    let stockChart; // Declare stockChart globally
   window.getStockData = async function() {
    const stockSymbol = document.getElementById("searchBar").value;
    document.getElementById("output").textContent = ""; // Clear previous messages
    try {
        const response = await fetch(javaURI + `/api/stocks/${stockSymbol}`);
        const data = await response.json();
        // Extract timestamps and prices
        const timestamps = data?.chart?.result?.[0]?.timestamp;
        const prices = data?.chart?.result?.[0]?.indicators?.quote?.[0]?.close;
        // Check if data exists
        if (timestamps && prices) {
            // Convert timestamps to readable dates
            const labels = timestamps.map(ts => new Date(ts * 1000).toLocaleString());
            displayChart(labels, prices, stockSymbol);
        } else {
            document.getElementById("output").textContent = `Data not found for ${stockSymbol}.`;
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
        document.getElementById("output").textContent = "Error fetching stock data. Please try again later.";
    }
};
function displayChart(labels, prices, tickerSymbol) {
    const ctx = document.getElementById('stockChart').getContext('2d');
    // Destroy the old chart if it exists
    if (stockChart) {
        stockChart.destroy();
    }
    // Create a gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(106, 13, 173, 0.6)'); // Start with purple (rgba)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)'); // Fade to transparent
    // Determine min and max values for the y-axis based on prices
    const minPrice = Math.min(...prices) * 0.55; // 5% below the minimum price
    const maxPrice = Math.max(...prices) * 1.05; // 5% above the maximum price
    // Create a new chart
    stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: tickerSymbol.toUpperCase(),
                data: prices,
                borderColor: '#001f3f', // Dark blue color for the line
                borderWidth: 2,
                fill: true,
                backgroundColor: gradient,
                spanGaps: true,
                pointRadius: 0, // Remove dots
                tension: 0.1 // Smooth the line
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // Hide the legend
                },
                tooltip: {
                    enabled: true, // Enable tooltips
                    mode: 'index', // Tooltip for closest point
                    intersect: false // Show tooltip when hovering close to the line
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Timestamp' },
                    ticks: {
                        callback: function(value) {
                            // Format the timestamp to display only hours
                            return new Date(value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        }
                    },
                    grid: {
                        display: false // Remove grid lines on x-axis
                    }
                },
                y: {
                    title: { display: true, text: 'Price (USD)' },
                    grid: {
                        display: false // Remove grid lines on y-axis
                    }
                }
            }
        }
    });
}
async function getStockPrice(stock) {
        try {
            const response = await fetch(javaURI + `/api/stocks/${stock}`);
            const data = await response.json();
            console.log(data);
            const price = data?.chart?.result?.[0]?.meta?.regularMarketPrice;
            const outputElement = document.getElementById("output");
            if (price !== undefined) {
                //outputElement.textContent = `The price of ${stock} is: $${price}`;
                return(price)
            } else {
                outputElement.textContent = `Price not found for ${stock}.`;
                console.error(`Price not found for ${stock}. Response structure:`, data);
            }
        } catch (error) {
            console.error('Error fetching stock data:', error);
            document.getElementById("output").textContent = "Error fetching stock data. Please try again later.";
        }
return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(prices[symbol]);
                }, 0); // Simulate network delay
            }); 
      }
      document.addEventListener("DOMContentLoaded", () => {
            getCredentialsJava();
            updateStockPrices(); // Call the function after DOM is fully loaded
            getPortfolioPerformance();
            //getUserIdFromAPI();
        });
async function updateStockPrices() {
            const stockSymbols = ['Spotify', 'Apple', 'Google', 'Facebook', 'Microsoft'];
            const tickerSymbols = ['SPOT', 'AAPL', 'GOOG', 'META', 'MSFT'];
            const tickerPrices = [];
            let counter = 0; 
            for (const stock of tickerSymbols) {
                const price = await getStockPrice(stock);
                tickerPrices.push(price)              
                const priceElement = document.getElementById(stockSymbols[counter] + "Price");
                if (priceElement) {
                    priceElement.textContent = `$${price}`;
                } else {
                    console.error(`Element with ID ${stock + "Price"} not found.`);
                }
                counter++;                 
                //console.log(price);
                //console.log(tickerPrices);
                //console.log(priceElement);
                //console.log(counter);
            }
        }
async function updateCryptoHistoryTable() {
    try {
        const email = localStorage.getItem("userEmail");
        if (!email) {
            console.warn("User email not found in localStorage.");
            return;
        }

        console.log(`Fetching transaction history for email: ${email}`);

        const response = await fetch(javaURI + `/api/crypto/history?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error(`Error fetching transaction history: ${response.statusText}`);
        }

        const transactionData = await response.json();
        console.log("Transaction History Response:", transactionData);

        let cryptoHistoryString = transactionData.cryptoHistory;
        if (!cryptoHistoryString || cryptoHistoryString.trim() === "") {
            console.warn("No transaction history found.");
            return;
        }

        const transactionHistory = cryptoHistoryString.split("\n").filter(entry => entry.trim() !== "");
        console.log("Parsed Transaction History:", transactionHistory);

        const table = document.getElementById("cryptoHistoryTable");
        const fullTable = document.getElementById("fullCryptoHistoryTable");
        if (!table || !fullTable) {
            console.error("Table elements not found.");
            return;
        }

        // Clear existing table rows (except header)
        table.innerHTML = `
            <tr>
                <th>Type</th>
                <th>Crypto Amount</th>
                <th>Dollar Value</th>
                <th>Timestamp</th>
            </tr>`;
        fullTable.innerHTML = table.innerHTML; // Clone structure for modal

        // 🟢 **Balance Tracking Fix**
        let runningBalance = 100000; // ✅ Start at $100,000
        let labels = [];
        let balances = [];

        transactionHistory.forEach(transaction => {
            const rowData = parseTransaction(transaction);
            if (rowData) {
                const row = createTransactionRow(rowData);
                table.appendChild(row);
                fullTable.appendChild(row.cloneNode(true));

                // 🟢 **Apply transaction to running balance**
                const transactionAmount = parseFloat(rowData.value.replace("$", ""));
                runningBalance += rowData.type === "Bought" ? -transactionAmount : transactionAmount;

                // Store for graph plotting
                labels.push(rowData.timestamp);
                balances.push(runningBalance);
            }
        });

        // Render updated chart with correct running balance
        renderCryptoBalanceChart(labels, balances);

    } catch (error) {
        console.error("Error updating Crypto Transaction History:", error);
    }
}


/* 🛠️ Function to Parse Transaction Details */
function parseTransaction(transaction) {
    const regex = /(Bought|Sold)\s([\d.]+)\s([A-Z]+)\sfor\s\$([\d.]+)\sat\s([\d-:\s]+)/;
    const match = transaction.match(regex);

    if (match) {
        return {
            type: match[1],
            amount: match[2] + " " + match[3], // Example: "0.5 BTC"
            value: `$${parseFloat(match[4]).toFixed(2)}`, // Format dollar amount
            timestamp: match[5]
        };
    }
    return null;
}

/* 🛠️ Function to Create Table Row */
function createTransactionRow({ type, amount, value, timestamp }) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${type}</td>
        <td>${amount}</td>
        <td>${value}</td>
        <td>${timestamp}</td>
    `;
    return row;
}

function renderCryptoBalanceChart(labels, balances) {
    const ctx = document.getElementById("cryptoBalanceChart").getContext("2d");

    // ✅ Ensure previous chart exists before destroying
    if (window.cryptoBalanceChart instanceof Chart) {
        window.cryptoBalanceChart.destroy();
    }

    // ✅ Set correct Y-axis range
    const yMin = 0;  // 🔥 Start at $100,000
    const yMax = Math.ceil((Math.max(200000, Math.max(...balances) + 5000)) / 30000) * 30000; // Round up to nearest 30,000

    // ✅ Create new chart instance
    window.cryptoBalanceChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Crypto Portfolio Balance (USD)",
                data: balances,
                borderColor: "#FF8C00",
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(255, 140, 0, 0.2)",
                pointRadius: 5, // Dots to make changes visible
                tension: 0.2 // Smooth line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Ensures proper fit
            scales: {
                x: { 
                    title: { display: true, text: "Date" }, 
                    ticks: { autoSkip: true, maxTicksLimit: 10 } // Avoids overcrowding
                },
                y: { 
                    title: { display: true, text: "Portfolio Balance (USD)" },
                    min: yMin, // 🔥 Start at $100,000
                    max: yMax,  // 🔥 Adjust dynamically if needed
                    ticks: { stepSize: 30000 } // **🔥 Increments of 30,000**
                }
            },
            plugins: {
                legend: { display: true, position: "top" },
                tooltip: { enabled: true, mode: "index", intersect: false }
            }
        }
    });
}



/* 🖼️ Modal Functions */
// Open Modal Function
window.openHistoryModal = function() {
    document.getElementById("historyModal").style.display = "block";
}

// Close Modal Function
window.closeHistoryModal = function() {
    document.getElementById("historyModal").style.display = "none";
}

// ✅ Call function when page loads
document.addEventListener("DOMContentLoaded", () => {
    updateCryptoHistoryTable();
});

async function getPortfolioPerformance() {
    try {
        // Fetch user credentials
        const credentials = await getCredentialsJava();
        const email = credentials?.email;
        if (!email) {
            throw new Error("User email not found");
        }
        // Fetch user's stocks and portfolio value using the email
        const userStocks = await getUserStock(email);
        const userValue = await getUserValue(email);
        let totalGain = 0;
        let totalLatestValue = 0;
        let totalOldValue = 0;
        for (const { stockSymbol, quantity } of userStocks) {
            const latestPrice = await getStockPrice(stockSymbol);
            const oldPrice = await getOldStockPrice(stockSymbol);
            // Calculate gain for each stock
            const stockGain = (latestPrice - oldPrice) * quantity;
            totalGain += stockGain;
            // Calculate total values for percent increase calculation
            totalLatestValue += latestPrice * quantity;
            totalOldValue += oldPrice * quantity;
        }
        // Calculate percent increase
        const percentIncrease = ((totalLatestValue - totalOldValue) / totalOldValue) * 100;
        console.log(`Total increase: $${totalGain.toFixed(2)}, Percent increase: ${percentIncrease.toFixed(2)}%`);
        // Update UI elements
        document.getElementById("totalGain").textContent = `$${totalGain.toFixed(2)}`;
        document.getElementById("percentIncrease").textContent = `${percentIncrease.toFixed(2)}%`;
        document.getElementById("portfolioValue").textContent = `$${userValue.toFixed(2)}`;
    } catch (error) {
        console.error("Error fetching portfolio performance:", error);
    }
}
async function getUserStock(user) {
            try {
                const response = await fetch(javaURI + `/stocks/table/getStocks?username=${user}`);
                const stocksData = await response.json();
                console.log(stocksData);
                return stocksData;
            } catch (error) {
                console.error("Error fetching user stocks:", error);
                return [];
            }
        }
async function getOldStockPrice(stock) {
        try {
            const response = await fetch(javaURI + `/api/stocks/${stock}`);
            const data = await response.json();
            console.log(data);
            const oldPrice = data?.chart?.result?.[0]?.meta?.chartPreviousClose;
            const outputElement = document.getElementById("output");
            if (oldPrice !== undefined) {
                //outputElement.textContent = `The price of ${stock} is: $${price}`;
                 console.log(`The previous close price of ${stock} is: $${oldPrice}`);
                return(oldPrice)
            } else {
                outputElement.textContent = `Price not found for ${stock}.`;
                console.error(`Price not found for ${stock}. Response structure:`, data);
            }
        } catch (error) {
            console.error('Error fetching stock data:', error);
            document.getElementById("output").textContent = "Error fetching stock data. Please try again later.";
        }
      }
async function getUserValue(user) {
            try {
                const response = await fetch(javaURI + `/stocks/table/portfolioValue?username=${user}`);
                const stocksData = await response.json();
                console.log(stocksData);
                return stocksData;
            } catch (error) {
                console.error("Error fetching user stocks:", error);
                return [];
            }
        }
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener("DOMContentLoaded", () => {
        updateWelcomeMessage(); // Update the welcome message with the user's name
        updateYourStocksTable();
        updateStockPrices();
        getPortfolioPerformance();
    });
</script>