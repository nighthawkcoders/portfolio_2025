---
layout: base
permalink: /stocks/home2
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
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #001f3f;
            color: #fff;
            box-sizing: border-box;
        }
        .navbar .logo {
            font-size: 2rem;
            flex: 1 1 auto;
        }
        .nav-buttons {
            display: flex;
            flex: 2 1 auto;
            justify-content: flex-end;
            gap: 1.5rem;
            flex-wrap: wrap;
        }
        .nav-buttons a {
            font-size: 1rem;
            padding: 0.5rem 1rem;
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
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        .card {
            padding: 0px;
            margin: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            color: #fff; /* Text color set to white */
            padding-bottom: -40px;
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
            font-size: 20px;
        }
        .card p {
            font-size: 36px;
            font-weight: bold;
        }
        .main-content {
            width: 80%;
            padding: 20px;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 30px;
        }
        .header h1 {
            font-size: 2em;
            font-weight: bold;
            margin: 0;
        }
        .buy-sell-buttons-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* Align the buysell text to the right */
        }
        .buysell {
            margin-top: 10px; /* Add some space between buttons and the buysell text */
            text-align: right;
        }
        .buysell.negative {
            color: #d32f2f; /* Red for negative change */
            margin-left: 30px;
        }
        .buysell.positive {
            color: #388e3c;
            justify-items: right; 
        }
        .price-info h2 {
            font-size: 2.5em;
            font-weight: bold;
            margin: 30px;
        }
        .change.negative {
            color: #d32f2f; /* Red for negative change */
            margin-left: 30px;
        }
        .change.positive {
            color: #388e3c;
            margin-left: 30px;
        }
        .metrics {
            display: flex;
            gap: 15px;
            margin: 20px 0;
        }
        .metric {
            background-color: #ffffff;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 4px;
            text-align: center;
            flex: 1;
        }
        .search-container {
            margin-bottom: 20px; /* Add margin to space it out */
            display: flex;
            margin-right: 30px; 
            margin-left: 30px; 
            margin-top: 30px; 
            background-color: #081e3d;
        }
        .search-container input[type="text"] {
            width: 100%; /* Full width of the graph */
            padding: 12px;
            border: none;
            border-radius: 4px;
            outline: none;
            font-size: 16px;
            background-color: #6ab8f9;
        }
        .search-button {
            background-color: #ff8c00; /* Orange color */
            color: #fff;
            border: none;
            border-radius: 0 4px 4px 0; /* Rounded corners on the right */
            padding: 12px 20px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .search-button:hover {
            background-color: #e07b00; /* Darker orange on hover */
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
            margin-top: 30px; 
            margin-right: 30px; 
            margin-left: 30px; 
        }
        .chart {
            height: 100%; /* Set height to 100% to fill the container */
            width: 100%; /* Set height to 100% to fill the container */
            background-color: #fff; /* Set the chart background to white */
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #999;
            flex: 1;
        }.buy-sell-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .buy-button, .sell-button {
            padding: 12px 20px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            color: #fff;
        }
        .buy-sell-buttons {
            display: flex;
            gap: 15px;
        }
        .buy-button, .sell-button {
            padding: 10px 15px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            color: #fff;
        }
        .buy-button {
            background-color: #388e3c; /* Green for buy */
        }
        .buy-button:hover {
            background-color: #2e7d32;
        }
        .sell-button {
            background-color: #d32f2f; /* Red for sell */
        }
        .sell-button:hover {
            background-color: #c62828;
        }
        html {
            font-size: 16px;
        }
        @media (max-width: 1200px) {
            html {
                font-size: 15px;
            }
        }
        @media (max-width: 992px) {
            html {
                font-size: 14px;
            }
        }
        @media (max-width: 768px) {
            html {
                font-size: 13px;
            }
        }
        @media (max-width: 576px) {
            html {
                font-size: 12px;
            }
        }
        @media (max-width: 768px) {
            .navbar .logo {
                font-size: 1.5rem;
            }
            .nav-buttons a {
                font-size: 0.9rem;
                padding: 0.5rem 1rem;
            }
            .header h1 {
                font-size: 1.75rem;
                flex: 1 1 100%;
                text-align: center;
            }
            .buy-sell-buttons-container {
                flex: 1 1 100%;
                align-items: center;
            }
            .search-container {
                max-width: 90%;
            }
            .summary-cards {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
            .card h2 {
                font-size: 1.1rem;
            }
            .card p {
                font-size: 1.5rem;
            }
            .price-info h2 {
                font-size: 2rem;
            }
            .change {
                font-size: 1rem;
            }
            .metric {
                flex: 1 1 150px;
                padding: 0.75rem;
                font-size: 0.9rem;
            }
        }
        @media (max-width: 480px) {
            .search-container {
                flex-direction: column;
            }
            .search-container input[type="text"], .search-button {
                width: 100%;
                border-radius: 0.25rem;
            }
            .search-button {
                margin-top: 0.5rem;
                border-radius: 0.25rem;
            }
            .buy-sell-buttons {
                flex-direction: column;
                gap: 0.5rem;
            }
            .buy-button, .sell-button {
                width: 100%;
            }
        }
        *, *::before, *::after {
            box-sizing: border-box;
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
            
        </div>
    </nav>
    <!-- Dashboard -->
    <div class="dashboard">
        <div class="dashboard-content">
            <h1 id="userIDName" class="welcome">Hi Rafael, Welcome Back</h1>
            <p>Invest your money with small risk!</p>
            <div class="summary-cards">
                <div class="card card-orange">
                    <h2>Today's Dollar</h2>
                    <h2>Change</h2>
                    <p id="totalGain">NA</p>
                </div>
                <div class="card card-purple">
                    <h2>Today's Percent</h2>
                    <h2>Change</h2>
                    <p id="percentIncrease">NA</p>
                </div>
                <div class="card card-darkblue">
                    <h2>Revenue</h2>
                    <h2>Return</h2>
                    <p id="portfolioValue">NA</p>
                </div>
            </div>
            <div class="search-container">
                <input type="text" id="searchBar" placeholder="Search...">
                <button class="search-button" onclick="getStockData()">Search</button>
            </div>
            <div class="chart-container" id="chartContainer">
                <div class="chart" id="chart1">
                    <canvas id="stockChart" width="475" height="375">[Graph Placeholder]</canvas>
                </div>
            </div>
            <div id="output" style="color: red; padding-top: 10px;"></div>
        </div>
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
            <div class="stock-table">
                <h3>Stock Prices</h3>
                <table>
                    <tr>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Spotify</td>
                        <td id="SpotifyPrice">$297,408</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td id="ApplePrice">$142,845</td>
                    </tr>
                    <tr>
                        <td>Google</td>
                        <td id="GooglePrice">$2,823,894</td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td id="FacebookPrice">$208,123</td>
                    </tr>
                    <tr>
                        <td>Microsoft</td>
                        <td id="MicrosoftPrice">$330,456</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
   <script type="module">
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
   function getCredentialsJava() {
        const URL = javaURI + '/api/person/get';
        return fetch(URL, fetchOptions)
            .then(response => {
                if (response.status !== 200) {
                    console.error("HTTP status code: " + response.status);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (data === null) return null;
                console.log(data);
                return data;
            })
            .catch(err => {
                console.error("Fetch error: ", err);
                return null;
            });
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
