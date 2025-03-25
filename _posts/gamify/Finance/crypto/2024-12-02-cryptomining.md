---
layout: post
title: Crypto Mining Simulator
type: issues
permalink: /crypto/mining
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-zoom/2.0.1/chartjs-plugin-zoom.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<style>
       .notification { /* This entire style, ".notification", is what makes the notification pops out from the top right! */
       position: fixed;
       top: 20px;
       right: 20px;
       background-color: #333;
       color: white;
       padding: 10px;
       border-radius: 5px;
       z-index: 1000; // Ensure it appears above other elements
   }
   .shadow-red-glow {
    box-shadow: 0 4px 15px -3px rgba(239, 68, 68, 0.3);
    }
    .shadow-green-glow {
        box-shadow: 0 4px 15px -3px rgba(16, 185, 129, 0.3);
    }
   /* GPU Inventory Styles */
   .dashboard-card {
       @apply bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700;
       transition: transform 0.2s, box-shadow 0.2s;
   }
   .dashboard-card:hover {
       transform: translateY(-2px);
       box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
   }
   .dashboard-card h2 {
       @apply text-xl font-bold mb-4 text-blue-400;
       border-bottom: 2px solid rgba(59, 130, 246, 0.2);
       padding-bottom: 0.5rem;
   }
   .stat-label {
       @apply text-gray-400 text-sm font-medium mb-1;
   }
   .stat-value {
       @apply text-2xl font-bold;
       text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
   }
   #gpu-inventory {
       @apply mt-4;
       min-height: 200px; /* Ensure minimum height even when empty */
   }
   .gpu-card {
       @apply bg-gray-800 rounded-lg p-4 shadow-lg mb-4;
       border: 1px solid rgba(255, 255, 255, 0.1);
   }
    /* Updated Navigation Bar Styles */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px; /* Reduced horizontal padding */
        background-color: #001f3f;
        color: #fff;
        width: 100%;
    }
    .navbar .logo {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-right: 20px; /* Add margin to separate logo from nav buttons */
    }
    .navbar .nav-buttons {
        display: flex;
        gap: 15px; /* Reduced gap between buttons */
        flex-wrap: nowrap; /* Prevent wrapping */
        align-items: center;
    }
    .navbar .nav-buttons a {
        color: #fff;
        text-decoration: none;
        font-size: 15px; /* Slightly smaller font size */
        padding: 6px 12px; /* Reduced padding */
        border-radius: 4px;
        transition: background-color 0.3s;
        white-space: nowrap; /* Prevent text wrapping */
    }
    .navbar .nav-buttons a:hover {
        background-color: #ff8c00;
    }
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
    background-color: #001f3f;
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
    background-color: #ff8c00;
}
.dashboard {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
}
.dashboard-content {
    width: 70%;
}
.sidebar {
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.stock-table, .your-stocks {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.your-stocks, .stock-table {
    height: full;
}
.stock-table table, .your-stocks table {
    width: 100%;
    border-collapse: collapse;
}
.stock-table table, th, td, .your-stocks table, th, td {
    border: none;
}
.stock-table th, td, .your-stocks th, td {
    padding: 10px;
    text-align: left;
}
.stock-table th, .your-stocks th {
    background-color: #f2f2f2;
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
    padding-bottom: -40px;
}
.card-orange {
    background-color: #FF8C00;
}
.card-purple {
    background-color: #6A0DAD;
}
.card-darkblue {
    background-color: #001f3f;
}
.card h2 {
    font-size: 20px;
}
.card p {
    font-size: 36px;
    font-weight: bold;
}
.chart-container {
    @apply bg-gray-800 rounded-lg p-6 border border-gray-700;
    height: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
/* ===== Mining Button Effects ===== */
#start-mining {
    background: linear-gradient(135deg, 
        rgba(147, 51, 234, 0.1) 0%,    /* Purple */
        rgba(59, 130, 246, 0.1) 50%,  /* Blue */
        rgba(239, 68, 68, 0.1) 100%   /* Red */
    );
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
        45deg,
        #9333ea,  /* Purple */
        #3b82f6,  /* Blue */
        #ef4444   /* Red */
    );
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(8px);
}
/* Hover effect with chromatic aberration */
#start-mining:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 0 25px rgba(147, 51, 234, 0.4),
                0 0 15px rgba(59, 130, 246, 0.4),
                0 0 5px rgba(239, 68, 68, 0.4);
}
/* Active state with particle effect */
#start-mining.active {
    background: linear-gradient(135deg,
        rgba(147, 51, 234, 0.2) 0%,
        rgba(59, 130, 246, 0.2) 50%,
        rgba(239, 68, 68, 0.2) 100%
    );
    box-shadow: 0 0 40px rgba(147, 51, 234, 0.6),
                inset 0 0 20px rgba(59, 130, 246, 0.4);
}
/* RGB Cyclic Animation */
@keyframes chromatic-pulse {
    0% {
        border-color: #9333ea;  /* Purple */
        box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
    }
    33% {
        border-color: #3b82f6;   /* Blue */
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
    }
    66% {
        border-color: #ef4444;  /* Red */
        box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
    }
    100% {
        border-color: #9333ea;  /* Purple */
        box-shadow: 0 0 15px rgba(147, 51, 234, 0.4);
    }
}
#start-mining:not(.active) {
    animation: chromatic-pulse 3s ease-in-out infinite;
}
/* Holographic overlay effect */
#start-mining::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 25%,
        rgba(147, 51, 234, 0.1) 33%,
        rgba(59, 130, 246, 0.1) 66%,
        transparent 75%
    );
    transform: rotate(45deg);
    animation: prismatic-flow 4s infinite linear;
    mix-blend-mode: screen;
}
@keyframes prismatic-flow {
    0% { transform: translateX(-150%) rotate(45deg); }
    100% { transform: translateX(150%) rotate(45deg); }
}
/* Text glow with color transition */
#start-mining span {
    position: relative;
    z-index: 2;
    animation: text-glow 2s ease-in-out infinite alternate;
}
@keyframes text-glow {
    from {
        text-shadow: 0 0 5px rgba(147, 51, 234, 0.5),
                     0 0 10px rgba(59, 130, 246, 0.5),
                     0 0 15px rgba(239, 68, 68, 0.5);
    }
    to {
        text-shadow: 0 0 10px rgba(147, 51, 234, 0.8),
                     0 0 20px rgba(59, 130, 246, 0.8),
                     0 0 30px rgba(239, 68, 68, 0.8);
    }
}
/* GPU Shop Modal */
.gpu-shop-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
}
/* GPU Shop Content */
.gpu-shop-content {
    background-color: #1F2937;
    width: 90%;
    max-width: 900px;
    max-height: 80vh;
    border-radius: 0.5rem;
    padding: 1.5rem;
    position: relative;
}
/* GPU List Container (with scrollbar) */
.gpu-list-container {
    overflow-y: auto;
    max-height: calc(80vh - 4rem);
    padding-right: 1rem;
    scrollbar-width: thin;
    scrollbar-color: #4B5563 #1F2937;
}
/* Scrollbar Style */
.gpu-list-container::-webkit-scrollbar {
    width: 8px;
}
.gpu-list-container::-webkit-scrollbar-track {
    background: #1F2937;
}
.gpu-list-container::-webkit-scrollbar-thumb {
    background-color: #4B5563;
    border-radius: 4px;
}
/* GPU Card Base Style */
.gpu-card {
    background: rgba(26, 31, 46, 0.95);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    backdrop-filter: blur(5px);
}
/* Different price GPU Hover Effect */
.gpu-card.starter:hover { /* Free GPU */
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
    border-color: rgba(34, 197, 94, 0.5);
}
.gpu-card.budget:hover { /* Entry-level */
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    border-color: rgba(59, 130, 246, 0.5);
}
.gpu-card.mid-range:hover { /* Mid-range */
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
    border-color: rgba(147, 51, 234, 0.5);
}
.gpu-card.high-end:hover { /* High-end */
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
    border-color: rgba(251, 146, 60, 0.5);
}
.gpu-card.premium:hover { /* Premium */
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
    border-color: rgba(239, 68, 68, 0.5);
}
/* difference color = different category */
.gpu-card.starter h3 { color: #22C55E; }  /* Green */
.gpu-card.budget h3 { color: #3B82F6; }   /* Blue */
.gpu-card.mid-range h3 { color: #9333EA; } /* Purple */
.gpu-card.high-end h3 { color: #FB923C; } /* Orange */
.gpu-card.premium h3 { color: #EF4444; }  /* Red */
/* Buy Button Style */
.gpu-card button {
    background: rgba(39, 39, 42, 0.9);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
}
.gpu-card button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px currentColor;
}
/* Performance Metrics Style */
.gpu-card .performance-metrics {
    color: #A1A1AA;
    font-size: 0.875rem;
}
.gpu-card .performance-metrics span {
    color: white;
    font-weight: 500;
}
/* ROI Display Style */
.gpu-card .roi-indicator {
    color: #FACC15;
    font-weight: bold;
    text-shadow: 0 0 8px rgba(250, 204, 21, 0.3);
}
/* Update the active-gpus-modal styles to match GPU Shop */
.active-gpus-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
}
.active-gpus-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1f2937;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 90%;
    max-width: 900px;
    max-height: 80vh;
}
#active-gpus-list {
    overflow-y: auto;
    max-height: calc(80vh - 120px);
    padding-right: 1rem;
    margin-right: -1rem;
    scrollbar-width: thin;
    scrollbar-color: #4b5563 #1f2937;
}
#active-gpus-list::-webkit-scrollbar {
    width: 8px;
}
#active-gpus-list::-webkit-scrollbar-track {
    background: #1f2937;
}
#active-gpus-list::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 4px;
}
/* Update the GPU cards style */
#active-gpus-list .gpu-card {
    background: rgba(17, 24, 39, 0.95);
    border-radius: 0.75rem;
    padding: 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(75, 85, 99, 0.4);
    transition: all 0.2s ease-in-out;
}
#active-gpus-list .gpu-card:hover {
    transform: translateY(-2px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}
@keyframes rainbow-breathe {
    0% { background-position: 0% 50%; text-shadow: 0 0 10px #ff0000; }
    25% { background-position: 100% 50%; text-shadow: 0 0 10px #00ff00; }
    50% { background-position: 0% 50%; text-shadow: 0 0 10px #0000ff; }
    75% { background-position: 100% 50%; text-shadow: 0 0 10px #ff00ff; }
    100% { background-position: 0% 50%; text-shadow: 0 0 10px #ff0000; }
}
@keyframes rgb-border-breathe {
    0% { border-color: rgba(255, 0, 0, 0.7); box-shadow: 0 -4px 15px -3px rgba(255, 0, 0, 0.4); }
    33% { border-color: rgba(0, 255, 0, 0.7); box-shadow: 0 -4px 15px -3px rgba(0, 255, 0, 0.4); }
    66% { border-color: rgba(0, 0, 255, 0.7); box-shadow: 0 -4px 15px -3px rgba(0, 0, 255, 0.4); }
    100% { border-color: rgba(255, 0, 0, 0.7); box-shadow: 0 -4px 15px -3px rgba(255, 0, 0, 0.4); }
}
</style>
<body class="bg-gray-900 text-white min-h-screen p-6">
    <div class="text-center mb-4 text-yellow-400">
        *** note: If the stats number are not showing, try to stop the mining and start again... <br>
        *** note: If it says "Error loading mining state. Please try again.", please check if you are logged in or no...
    </div>
    <!-- Navigation Bar -->
  <nav class="navbar">
      <div class="nav-buttons">
          <a href="{{site.baseurl}}/stocks/home">Home</a>
          <a href="{{site.baseurl}}/crypto/portfolio">Crypto</a>
          <a href="{{site.baseurl}}/stocks/viewer">Stocks</a>
          <a href="{{site.baseurl}}/crypto/mining">Mining</a>
          <a href="{{site.baseurl}}/stocks/buysell">Buy/Sell</a>
          <a href="{{site.baseurl}}/stocks/game">Game</a>
          <a href="{{site.baseurl}}/stocks/portfolio">Portfolio</a>
      </div>
  </nav>
    <div class="container mx-auto">
        <!-- Core Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Wallet -->
            <div class="dashboard-card">
                <h2>Wallet</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">BTC Balance</div>
                        <div class="stat-value" id="btc-balance">0.00000000</div>
                    </div>
                    <div>
                        <div class="stat-label">Pending BTC</div>
                        <div class="stat-value text-yellow-400" id="pending-balance">0.00000000</div>
                    </div>
                    <div>
                        <div class="stat-label">USD Value</div>
                        <div class="stat-value" id="usd-value">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label" id="pool-info">Min. Payout: 0.001 BTC</div>
                    </div>
                </div>
            </div>
            <!-- Mining Stats -->
            <div class="dashboard-card">
                <h2>Mining Stats</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Hashrate</div>
                        <div class="stat-value" id="hashrate">0 MH/s</div>
                    </div>
                    <div>
                        <div class="stat-label">Shares</div>
                        <div class="stat-value" id="shares">0</div>
                    </div>
                </div>
            </div>
            <!-- Hardware -->
            <div class="dashboard-card">
                <h2>Hardware</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Current GPU</div>
                        <div class="stat-value text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" 
                             onclick="openActiveGPUsModal()" 
                             id="current-gpu">
                            No GPU
                        </div>
                    </div>
                    <div>
                        <div class="stat-label">GPU Temperature</div>
                        <div class="stat-value" id="gpu-temp">0°C</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Draw</div>
                        <div class="stat-value" id="power-draw">0W</div>
                    </div>
                </div>
            </div>
            <!-- Profitability -->
            <div class="dashboard-card">
                <h2>Profitability</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">24h Revenue</div>
                        <div class="stat-value" id="daily-revenue">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Cost</div>
                        <div class="stat-value text-red-400" id="power-cost">$0.00</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mining Controls -->
        <div class="flex justify-center mt-8 mb-8">
            <div class="flex justify-between items-center">
                <button id="start-mining" onclick="toggleMining()">
                    <span>Start Mining</span>
                </button>
            </div>
        </div>
        <!-- Performance Charts -->
        <div class="flex flex-col gap-4 mt-4">
            <div class="text-sm text-gray-400 text-center">
                Drag to pan horizontally • Use mouse wheel to zoom • Double click to reset
            </div>
            <div class="chart-container">
                <canvas id="hashrate-chart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="profit-chart"></canvas>
            </div>
        </div>
        <!-- GPU Inventory -->
        <div class="dashboard-card mt-4 bg-gray-900 p-6 rounded-lg">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">My GPU Inventory</h2>
                <button id="gpu-shop" 
                        class="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg 
                               font-medium transition-colors duration-200 flex items-center gap-2">
                    <span>🛒</span>
                    GPU Shop
                </button>
            </div>
            <div id="gpu-inventory" class="min-h-[400px]">
            </div>
        </div>
    </div>
    <!-- GPU Shop Modal -->
    <div id="gpu-shop-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-gray-800 rounded-lg p-6 w-11/12 max-w-4xl max-h-[80vh] overflow-hidden">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">GPU Shop</h2>
                <button id="close-shop" class="text-gray-400 hover:text-white text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto pr-2" style="max-height: calc(80vh - 100px);">
                <div id="gpu-list" class="grid gap-4">
                    <!-- GPUs will be inserted here -->
                </div>
            </div>
            <!-- Total Cost Footer -->
            <div id="total-cost-footer" class="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4 flex justify-between items-center"
                 style="border-top: 3px solid transparent;
                        background: rgba(17, 24, 39, 0.95);
                        animation: rgb-border-breathe 3s ease-in-out infinite;">
                <div class="text-2xl font-bold text-white">Total Cost:</div>
                <div class="flex items-center gap-4">
                    <div class="text-3xl font-bold text-white">
                        USD: <span id="shop-total-cost">0</span>
                    </div>
                    <button onclick="buySelectedGPUs()" 
                            class="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        Buy Selected GPUs
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add this right before the closing </body> tag -->
    <div id="active-gpus-modal" class="active-gpus-modal hidden">
        <div class="active-gpus-content">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold text-blue-400">Active GPUs</h2>
                <button onclick="closeActiveGPUsModal()" 
                        class="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>
            <div id="active-gpus-list">
                <!-- GPUs will be listed here -->
            </div>
        </div>
    </div>
    <script type="module">
        import { login, pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js'; 
        // Make functions globally available
        window.openActiveGPUsModal = function() {
            const modal = document.getElementById('active-gpus-modal');
            modal.classList.remove('hidden');
            updateActiveGPUsList();
        }
        window.closeActiveGPUsModal = function() {
            const modal = document.getElementById('active-gpus-modal');
            modal.classList.add('hidden');
        }
        function updateActiveGPUsList() {
            const container = document.getElementById('active-gpus-list');
            container.innerHTML = '';
            if (!window.stats || !window.stats.gpus) return;
            // Group GPUs by ID
            const gpuGroups = {};
            window.stats.gpus.forEach(gpu => {
                if (gpu.isActive) {
                    if (!gpuGroups[gpu.id]) {
                        gpuGroups[gpu.id] = {
                            ...gpu,
                            quantity: gpu.quantity
                        };
                    }
                }
            });
            Object.values(gpuGroups).forEach(gpu => {
                const card = document.createElement('div');
                card.className = 'gpu-card';
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-blue-400">${gpu.name}</h3>
                                <span class="text-green-400 text-lg font-bold">x${gpu.quantity}</span>
                            </div>
                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <p class="text-gray-400 mb-2">Performance (Per GPU)</p>
                                    <div class="space-y-2">
                                        <p class="text-white">⚡ ${gpu.hashrate.toFixed(2)} MH/s</p>
                                        <p class="text-white">🔌 ${gpu.power}W</p>
                                        <p class="text-white">🌡️ ${gpu.temp}°C</p>
                                        <p class="text-white">📊 ${(gpu.hashrate/gpu.power).toFixed(3)} MH/W</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-gray-400 mb-2">Total Output</p>
                                    <div class="space-y-2">
                                        <p class="text-white">⚡ ${(gpu.hashrate * gpu.quantity).toFixed(2)} MH/s</p>
                                        <p class="text-white">🔌 ${gpu.power * gpu.quantity}W</p>
                                        <p class="text-emerald-400">✅ All Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }
        // Make toggleMining globally available
        window.toggleMining = async function() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/toggle`, options);
                const result = await response.json();
                console.log('Mining toggle result:', result);
                // Update UI
                updateMiningButton(result.isMining);
                if (result.isMining) {
                    startPeriodicUpdates();
                    showNotification('Mining started successfully');
                } else {
                    stopPeriodicUpdates();
                    showNotification('Mining stopped');
                }
                await updateMiningStats();
            } catch (error) {
                console.error('Error toggling mining:', error);
                showNotification('Error toggling mining state');
            }
        };
        let hashrateChart, profitChart;
        let updateInterval;
        // Initialize charts and setup
        document.addEventListener('DOMContentLoaded', async () => {
            try {
                initializeCharts();
                setupEventListeners();
                await initializeMiningState();
                await loadGPUs();
            } catch (error) {
                console.error('Error during initialization:', error);
            }
        });
        function setupEventListeners() {
            // Remove this line since we're using onclick in HTML
            // document.getElementById('start-mining').addEventListener('click', toggleMining);
            document.getElementById('gpu-shop').addEventListener('click', openGpuShop);
        }
        function initializeCharts() {
            // Hashrate Chart
            const hashrateCtx = document.getElementById('hashrate-chart').getContext('2d');
            hashrateChart = new Chart(hashrateCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Hashrate (MH/s)',
                        data: [],
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderWidth: 3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        zoom: {
                            zoom: {
                                wheel: { enabled: true },
                                pinch: { enabled: true },
                                mode: 'x'
                            },
                            pan: { enabled: true }
                        }
                    }
                }
            });
            // Profit Chart
            const profitCtx = document.getElementById('profit-chart').getContext('2d');
            profitChart = new Chart(profitCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Profit (USD)',
                        data: [],
                        borderColor: '#BE0102',
                        backgroundColor: 'rgba(190, 1, 2, 0.2)',
                        borderWidth: 3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        zoom: {
                            zoom: {
                                wheel: { enabled: true },
                                pinch: { enabled: true },
                                mode: 'x'
                            },
                            pan: { enabled: true }
                        }
                    }
                }
            });
        }
        async function initializeMiningState() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'GET',
                    cache: 'no-cache'
                };
                // Fetch initial mining state
                const response = await fetch(`${javaURI}/api/mining/state`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch mining state');
                }
                const state = await response.json();
                console.log('Initial mining state:', state);
                // Update UI with initial state
                updateDisplay(state);
                updateMiningButton(state.isMining);
                // Start periodic updates if mining is active
                if (state.isMining) {
                    startPeriodicUpdates();
                }
            } catch (error) {
                console.error('Error initializing mining state:', error);
                showNotification('Error loading mining state. Please try again.');
            }
        }
        async function startPeriodicUpdates() {
            if (updateInterval) clearInterval(updateInterval);
            updateInterval = setInterval(async () => {
                await updateMiningStats();
            }, 5000);
            // 添加options定义
            const options = {
                ...fetchOptions,
                method: 'GET',
                cache: 'no-cache'
            };
            // 实时监控
            setInterval(async () => {
                try {
                    const response = await fetch(`${javaURI}/api/mining/stats`, options);
                    const stats = await response.json();
                    console.log('实时监控:', {
                        time: new Date().toLocaleTimeString(),
                        pending: stats.pendingBalance,
                        hashrate: stats.hashrate,
                        activeGPUs: stats.activeGPUs?.length || 0
                    });
                } catch (error) {
                    console.error('监控请求失败:', error);
                }
            }, 5000);
        }
        // API Calls
        async function loadGPUs() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'GET',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/shop`, options);
                const gpus = await response.json();
                console.log('GPUs:', gpus); // Log the GPUs to check the structure
                renderGpuShop(gpus);
            } catch (error) {
                console.error('Error loading GPUs:', error);
            }
        }
        window.toggleGPU = async function(gpuId) {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/gpu/toggle/${gpuId}`, options);
                const result = await response.json();
                if (result.success) {
                    showNotification(result.message);
                    // 局部更新GPU卡片
                    const gpuCard = document.querySelector(`[data-gpu-id="${gpuId}"]`);
                    if (gpuCard) {
                        const button = gpuCard.querySelector('button');
                        button.innerHTML = `
                            <span class="text-lg">${result.isActive ? '⏸️' : '▶️'}</span>
                            ${result.isActive ? 'Deactivate' : 'Activate'}
                        `;
                        button.className = `w-full ${result.isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} 
                            px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2`;
                    }
                    // 只更新统计数字，不重新渲染整个列表
                    await updateMiningStats();
                } else {
                    showNotification(result.message || 'Failed to toggle GPU');
                }
            } catch (error) {
                console.error('Error toggling GPU:', error);
                showNotification('Error toggling GPU: ' + error.message);
            }
        }
        window.buyGpu = async function(gpuId, quantity) {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache',
                    body: JSON.stringify({ quantity: quantity })
                };
                const response = await fetch(`${javaURI}/api/mining/gpu/buy/${gpuId}`, options);
                const result = await response.json();
                if (response.ok) {
                    showNotification(result.message);
                    await updateMiningStats();
                    await loadGPUs();
                } else {
                    showNotification(result.message || 'Failed to buy GPU');
                }
            } catch (error) {
                console.error('Error buying GPU:', error);
                showNotification('Error buying GPU: ' + error.message);
            }
        }
        async function updateMiningStats() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'GET',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/stats`, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const stats = await response.json();
                console.log('完整统计信息:', {
                    pendingBalance: stats.pendingBalance,
                    shares: stats.shares,
                    hashrate: stats.hashrate,
                    activeGPUs: stats.activeGPUs
                });
                if (!stats.gpus) {
                    console.warn('API response missing gpus field', stats);
                    stats.gpus = []; // Set default
                }
                updateDisplay(stats);
                renderGpuInventory(stats);
                updateCharts(stats);
            } catch (error) {
                console.error('Error updating mining stats:', error);
                showNotification('Failed to fetch mining data, check your connection');
            }
        }
        // UI Updates
        function updateDisplay(stats) {
            // Log incoming data
            console.log('Updating display with stats:', stats);
            // Parse BTC values
            const btcBalance = parseFloat(stats.btcBalance) || 0;
            const pendingBalance = parseFloat(stats.pendingBalance) || 0;
            const totalBTC = btcBalance + pendingBalance;
            // Update BTC displays
            document.getElementById('btc-balance').textContent = btcBalance.toFixed(8);
            document.getElementById('pending-balance').textContent = pendingBalance.toFixed(8);
            // Calculate and update USD value
            let usdValue;
            if (stats.totalBalanceUSD) {
                // Use API-provided USD value if available
                usdValue = stats.totalBalanceUSD;
            } else {
                // Calculate USD value using BTC_PRICE constant
                usdValue = (totalBTC * 45000).toFixed(2);
            }
            document.getElementById('usd-value').textContent = `$${usdValue}`;
            // Log the values being displayed
            console.log('Display values:', {
                btcBalance: btcBalance.toFixed(8),
                pendingBalance: pendingBalance.toFixed(8),
                totalBTC: totalBTC.toFixed(8),
                usdValue: usdValue
            });
            // Add small random fluctuations to temperature and power
            const tempVariation = Math.random() * 2 - 1; // Random variation ±1°C
            const powerVariation = Math.random() * 10 - 5; // Random variation ±5W
            // Get base values
            const baseTemp = parseFloat(stats.averageTemperature) || 0;
            const basePower = parseFloat(stats.powerConsumption) || 0;
            // Calculate new values with fluctuations
            const newTemp = Math.max(30, Math.min(90, baseTemp + tempVariation)); // Keep between 30-90°C
            const newPower = Math.max(0, basePower + powerVariation); // Keep above 0W
            // Update display elements
            document.getElementById('hashrate').textContent = `${(parseFloat(stats.hashrate) || 0).toFixed(2)} MH/s`;
            document.getElementById('shares').textContent = stats.shares || 0;
            document.getElementById('gpu-temp').textContent = `${newTemp.toFixed(1)}°C`;
            document.getElementById('power-draw').textContent = `${newPower.toFixed(0)}W`;
            document.getElementById('daily-revenue').textContent = `$${(typeof stats.dailyRevenue === 'number' ? stats.dailyRevenue : 0).toFixed(2)}`;
            document.getElementById('power-cost').textContent = `$${(typeof stats.powerCost === 'number' ? stats.powerCost : 0).toFixed(2)}`;
            // Update GPU count display
            if (stats.gpus && stats.gpus.length > 0) {
                const totalGPUs = stats.gpus.reduce((sum, gpu) => sum + gpu.quantity, 0);
                const activeGPUs = stats.gpus.reduce((sum, gpu) => gpu.isActive ? sum + gpu.quantity : sum, 0);
                document.getElementById('current-gpu').textContent = 
                    `${activeGPUs} Active of ${totalGPUs} GPUs (Click to view)`;
            } else {
                document.getElementById('current-gpu').textContent = 'No GPUs';
            }
            // Add color indicators for temperature
            const tempElement = document.getElementById('gpu-temp');
            if (newTemp >= 80) {
                tempElement.className = 'stat-value text-red-500'; // Hot
            } else if (newTemp >= 70) {
                tempElement.className = 'stat-value text-yellow-500'; // Warm
            } else {
                tempElement.className = 'stat-value text-green-500'; // Good
            }
            // Store stats globally for modal access
            window.stats = stats;
        }
        function renderGpuInventory(stats) {
            const inventoryElement = document.getElementById('gpu-inventory');
            if (!inventoryElement) return;
            inventoryElement.innerHTML = '';
            const gpus = stats?.gpus || [];
            if (gpus.length === 0) {
                inventoryElement.innerHTML = `
                    <div class="text-gray-400 text-center p-8 bg-gray-800 rounded-lg w-full">
                        <p class="mb-2">🛒 Inventory empty!</p>
                        <p>Click the button above to visit the GPU shop</p>
                    </div>
                `;
                return;
            }
            // Group GPUs by ID and count quantities
            const gpuGroups = {};
            gpus.forEach(gpu => {
                const gpuId = gpu.id;
                if (!gpuGroups[gpuId]) {
                    gpuGroups[gpuId] = {
                        ...gpu,
                        quantity: gpu.quantity,
                        activeCount: gpu.isActive ? gpu.quantity : 0
                    };
                }
            });
            const container = document.createElement('div');
            container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4';
            Object.values(gpuGroups).forEach(gpu => {
                const gpuCard = document.createElement('div');
                gpuCard.className = 'bg-gray-800 rounded-xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] border border-gray-700';
                gpuCard.dataset.gpuId = gpu.id;
                const hashrate = gpu.hashrate || 0;
                const power = gpu.power || 0;
                const temp = gpu.temp || 0;
                const dailyRevenue = hashrate * 86400 * 0.00000001;
                const dailyPowerCost = (power * 24 / 1000 * 0.12);
                const dailyProfit = dailyRevenue - dailyPowerCost;
                gpuCard.innerHTML = `
                    <div class="flex flex-col h-full">
                        <div class="flex-1">
                            <div class="flex justify-between items-start">
                                <h3 class="text-xl font-bold text-white">${gpu.name}</h3>
                                <span class="text-green-400 text-lg font-bold">x${gpu.quantity}</span>
                            </div>
                            <p class="text-blue-400 text-sm mb-4">${gpu.activeCount} of ${gpu.quantity} Active</p>
                            <div class="grid grid-cols-2 gap-4 mt-2">
                                <div class="text-sm">
                                    <p class="text-gray-400">Performance (Per GPU)</p>
                                    <p class="text-white">⚡ ${hashrate.toFixed(2)} MH/s</p>
                                    <p class="text-white">🔌 ${power.toFixed(0)}W</p>
                                    <p class="text-white">🌡️ ${temp.toFixed(1)}°C</p>
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-400">Daily Estimates (Per GPU)</p>
                                    <p class="text-green-400">💰 $${dailyRevenue.toFixed(2)}</p>
                                    <p class="text-red-400">💡 -$${dailyPowerCost.toFixed(2)}</p>
                                    <p class="text-blue-400">📈 $${dailyProfit.toFixed(2)}</p>
                                </div>
                            </div>
                            <div class="mt-4 text-sm">
                                <p class="text-purple-400">Total Daily Profit: $${(dailyProfit * gpu.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(gpuCard);
            });
            inventoryElement.appendChild(container);
        }
        function updateCharts(stats) {
            if (!stats) {
                console.warn('updateCharts called without stats');
                return;
            }
            console.log('Updating charts with:', {
                hashrate: stats.hashrate,
                dailyRevenue: stats.dailyRevenue,
                powerCost: stats.powerCost
            });
            const now = new Date().toLocaleTimeString();
            // Update hashrate chart
            if (hashrateChart) {
                const numericHashrate = parseFloat(stats.hashrate) || 0;
                console.log('Adding hashrate data point:', numericHashrate);
                hashrateChart.data.labels.push(now);
                hashrateChart.data.datasets[0].data.push(numericHashrate);
                if (hashrateChart.data.labels.length > 50) {
                    hashrateChart.data.labels.shift();
                    hashrateChart.data.datasets[0].data.shift();
                }
                hashrateChart.update('none');
                console.log('Hashrate chart updated');
            }
            // Update profit chart with total profit (Power Cost + USD Value)
            if (profitChart) {
                const dailyRevenue = typeof stats.dailyRevenue === 'number' ? stats.dailyRevenue : 0;
                const powerCost = typeof stats.powerCost === 'number' ? stats.powerCost : 0;
                const totalBalanceUSD = parseFloat(stats.totalBalanceUSD) || 0;
                const totalProfit = totalBalanceUSD + powerCost; // Add power cost to total balance
                console.log('Calculated total profit:', { dailyRevenue, powerCost, totalBalanceUSD, totalProfit });
                profitChart.data.labels.push(now);
                profitChart.data.datasets[0].data.push(totalProfit);
                if (profitChart.data.labels.length > 50) {
                    profitChart.data.labels.shift();
                    profitChart.data.datasets[0].data.shift();
                }
                profitChart.update('none');
                console.log('Profit chart updated');
            }
        }
        function updateMiningButton(isActive) {
            const button = document.getElementById('start-mining');
            if (isActive) {
                button.textContent = 'Stop Mining';
                button.className = 'mining-button active';
            } else {
                button.textContent = 'Start Mining';
                button.className = 'mining-button';
            }
        }
        function renderGpuShop(gpus) {
            const gpuListElement = document.getElementById('gpu-list');
            gpuListElement.innerHTML = '';
            // Group GPUs by category
            const categories = {
                'Free Starter GPU': gpus.filter(gpu => gpu.price === 0),
                'Budget GPUs ($10000-20000)': gpus.filter(gpu => gpu.price > 0 && gpu.price <= 20000),
                'Mid-Range GPUs ($20000-50000)': gpus.filter(gpu => gpu.price > 20000 && gpu.price <= 50000),
                'High-End GPUs ($50000-100000)': gpus.filter(gpu => gpu.price > 50000 && gpu.price <= 100000),
                'Premium GPUs ($100000+)': gpus.filter(gpu => gpu.price > 100000)
            };
            Object.entries(categories).forEach(([category, categoryGpus]) => {
                if (categoryGpus.length === 0) return;
                const categoryHeader = document.createElement('div');
                categoryHeader.className = `text-xl font-bold mb-4 mt-6 ${getCategoryColor(category)}`;
                categoryHeader.textContent = category;
                gpuListElement.appendChild(categoryHeader);
                categoryGpus.forEach(gpu => {
                    const gpuCard = createGpuCard(gpu, category);
                    gpuListElement.appendChild(gpuCard);
                });
            });
        }
        function createGpuCard(gpu, category) {
            const card = document.createElement('div');
            card.className = `gpu-card mb-4 ${getCategoryClass(category)}`;
            // Calculate daily estimates
            const dailyRevenue = (gpu.hashRate || 0) * 86400 * 0.00000001;
            const dailyPowerCost = (gpu.powerConsumption || 0) * 24 / 1000 * 0.12;
            const dailyProfit = dailyRevenue - dailyPowerCost;
            const roi = dailyProfit > 0 ? (gpu.price / dailyProfit) : Infinity;
            // Add quantity selector for non-starter GPUs
            const isStarterGPU = gpu.price === 0;
            const quantitySelector = isStarterGPU ? '' : `
                <div class="flex flex-col items-end gap-2">
                    <div class="flex items-center">
                        <label class="text-gray-400 mr-2">Quantity:</label>
                        <select id="quantity-${gpu.id}" class="bg-gray-700 rounded px-2 py-1" 
                                data-price="${gpu.price}"
                                data-gpu-id="${gpu.id}"
                                onchange="updateTotalPrice(${gpu.id}, ${gpu.price}); updateShopTotalCost()">
                            ${[0,1,2,3,4,5].map(n => `<option value="${n}">${n}</option>`).join('')}
                        </select>
                    </div>
                    <div class="text-gray-400">
                        Total: $<span id="total-${gpu.id}">0</span>
                    </div>
                </div>
            `;
            // Show owned quantity if owned
            const ownedQuantity = gpu.quantity > 0 ? 
                `<p class="text-green-400 text-sm">Owned: ${gpu.quantity}</p>` : '';
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold ${getCategoryColor(category)}">${gpu.name}</h3>
                        ${ownedQuantity}
                        <div class="grid grid-cols-2 gap-4 mt-2">
                            <div class="text-sm">
                                <p class="text-gray-400">Performance</p>
                                <p class="text-white">⚡ ${(gpu.hashRate || 0).toFixed(2)} MH/s</p>
                                <p class="text-white">🔌 ${(gpu.powerConsumption || 0).toFixed(0)}W</p>
                                <p class="text-white">🌡️ ${(gpu.temp || 0).toFixed(1)}°C</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-400">Daily Estimates</p>
                                <p class="text-green-400">💰 $${dailyRevenue.toFixed(2)}</p>
                                <p class="text-red-400">💡 -$${dailyPowerCost.toFixed(2)}</p>
                                <p class="text-blue-400">📈 $${dailyProfit.toFixed(2)}</p>
                            </div>
                        </div>
                        <div class="mt-2 text-sm">
                            <p class="text-gray-400">Efficiency: ${((gpu.hashRate || 0) / (gpu.powerConsumption || 1)).toFixed(3)} MH/W</p>
                            <p class="text-gray-400">ROI: ${roi.toFixed(1)} days</p>
                        </div>
                    </div>
                    <div class="text-right ml-4 flex flex-col items-end">
                        <p class="text-xl font-bold ${getCategoryColor(category)} mb-2">
                            ${gpu.price === 0 ? 'FREE' : '$' + gpu.price.toLocaleString()}
                        </p>
                        ${quantitySelector}
                    </div>
                </div>
            `;
            // After creating the card, attach the event listener
            setTimeout(() => {
                const quantitySelect = document.getElementById(`quantity-${gpu.id}`);
                if (quantitySelect) {
                    quantitySelect.addEventListener('change', function() {
                        const gpuId = this.dataset.gpuId;
                        const basePrice = parseFloat(this.dataset.price);
                        updateTotalPrice(gpuId, basePrice);
                        updateShopTotalCost();
                    });
                }
            }, 0);
            return card;
        }
        // Utility functions
        function getCategoryColor(category) {
            const colors = {
                'Free Starter GPU': 'text-green-400',
                'Budget GPUs ($10000-20000)': 'text-blue-400',
                'Mid-Range GPUs ($20000-50000)': 'text-purple-400',
                'High-End GPUs ($50000-100000)': 'text-orange-400',
                'Premium GPUs ($100000+)': 'text-red-400'
            };
            return colors[category] || 'text-white';
        }
        function getCategoryClass(category) {
            const classes = {
                'Free Starter GPU': 'starter',
                'Budget GPUs ($10000-20000)': 'budget',
                'Mid-Range GPUs ($20000-50000)': 'mid-range',
                'High-End GPUs ($50000-100000)': 'high-end',
                'Premium GPUs ($100000+)': 'premium'
            };
            return classes[category] || '';
        }
        function openGpuShop() {
            const modal = document.getElementById('gpu-shop-modal');
            modal.classList.remove('hidden');
        }
        // Add close shop functionality
        document.getElementById('close-shop').addEventListener('click', () => {
            const modal = document.getElementById('gpu-shop-modal');
            modal.classList.add('hidden');
        });
        // Close modal when clicking outside
        document.getElementById('gpu-shop-modal').addEventListener('click', (e) => {
            if (e.target.id === 'gpu-shop-modal') {
                e.target.classList.add('hidden');
            }
        });
        function showNotification(message) {
            console.log('Notification:', message);
            const notificationElement = document.createElement('div');
            notificationElement.textContent = message;
            notificationElement.className = 'notification';
            document.body.appendChild(notificationElement);
            setTimeout(() => {
                document.body.removeChild(notificationElement);
            }, 3000);
        }
        function stopPeriodicUpdates() {
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = null;
            }
        }
        // Update the total price function to properly format numbers
        function updateTotalPrice(gpuId, basePrice) {
            const quantitySelect = document.getElementById(`quantity-${gpuId}`);
            const totalSpan = document.getElementById(`total-${gpuId}`);
            if (quantitySelect && totalSpan) {
                const quantity = parseInt(quantitySelect.value);
                const total = quantity > 0 ? basePrice * quantity : 0;
                totalSpan.textContent = total.toLocaleString();
            }
        }
        function updateShopTotalCost() {
            let total = 0;
            document.querySelectorAll('[id^="quantity-"]').forEach(select => {
                const quantity = parseInt(select.value);
                if (quantity > 0) {  // Only include if quantity is greater than 0
                    const basePrice = parseFloat(select.dataset.price);
                    if (!isNaN(basePrice)) {
                        total += basePrice * quantity;
                    }
                }
            });
            document.getElementById('shop-total-cost').textContent = total.toLocaleString();
        }
        // Make the functions globally available
        window.updateTotalPrice = updateTotalPrice;
        window.updateShopTotalCost = updateShopTotalCost;
        window.buySelectedGPUs = async function() {
            const purchases = [];
            document.querySelectorAll('[id^="quantity-"]').forEach(select => {
                const quantity = parseInt(select.value);
                const gpuId = select.dataset.gpuId;
                if (quantity > 0) {
                    purchases.push({ gpuId, quantity });
                }
            });
            if (purchases.length === 0) {
                showNotification('Please select at least one GPU to buy');
                return;
            }
            // Process each purchase
            for (const purchase of purchases) {
                await buyGpu(purchase.gpuId, purchase.quantity);
            }
        };
    </script>
</body>
</html>