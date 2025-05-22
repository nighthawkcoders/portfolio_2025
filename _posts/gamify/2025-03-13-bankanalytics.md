---
layout: fortunefinders
title: Bank Analytics
permalink: /gamify/bankanalytics
---

<style>
  :root {
    --primary-color: #ff9800;
    --background-color: #1f1f1f;
    --text-color: #ffffff;
    --chart-grid-color: rgba(255, 255, 255, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .game-card {
    background-color: #2d2d2d;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .chart-container {
    height: 400px;
    position: relative;
  }

  .game-title {
    color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
    margin: 0 0 1.5rem 0;
  }

  .toggle-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .toggle-button {
    background: none;
    border: 1px solid currentColor;
    color: var(--text-color);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .toggle-button.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
    font-weight: bold;
  }

  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .loading-spinner div {
    border: 5px solid rgba(255, 152, 0, 0.3);
    border-radius: 50%;
    border-top: 5px solid var(--primary-color);
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .error-message {
    color: #ff6b6b;
    text-align: center;
    padding: 2rem;
  }

  .data-message {
    color: #888;
    text-align: center;
    padding: 2rem;
    font-style: italic;
  }
</style>

<div class="container">
  <h1>Game Analytics Dashboard</h1>

  <div class="game-card">
    <h2 class="game-title">All Games Combined</h2>
    <div class="toggle-container" id="toggleButtons">
      <button class="toggle-button active" data-game="poker">Poker</button>
      <button class="toggle-button active" data-game="blackjack">Blackjack</button>
      <button class="toggle-button active" data-game="dice">Dice</button>
      <button class="toggle-button active" data-game="casino_mines">Mines</button>
      <button class="toggle-button active" data-game="stocks">Stocks</button>
      <button class="toggle-button active" data-game="crypto">Crypto</button>
    </div>
    <div class="chart-container">
      <canvas id="combinedChart"></canvas>
    </div>
  </div>

  <div class="chart-grid">
    <div class="game-card">
      <h3 class="game-title">Poker</h3>
      <div class="chart-container">
        <canvas id="pokerChart"></canvas>
      </div>
    </div>
    <div class="game-card">
      <h3 class="game-title">Blackjack</h3>
      <div class="chart-container">
        <canvas id="blackjackChart"></canvas>
      </div>
    </div>
    <div class="game-card">
      <h3 class="game-title">Dice</h3>
      <div class="chart-container">
        <canvas id="diceChart"></canvas>
      </div>
    </div>
    <div class="game-card">
      <h3 class="game-title">Mines</h3>
      <div class="chart-container">
        <canvas id="casino_minesChart"></canvas>
      </div>
    </div>
    <div class="game-card">
      <h3 class="game-title">Crypto Portfolio</h3>
      <div class="chart-container">
        <canvas id="cryptoChart"></canvas>
      </div>
    </div>
    <div class="game-card">
      <h3 class="game-title">Stock Portfolio</h3>
      <div class="chart-container">
        <canvas id="stocksChart"></canvas>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script type="module">
import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

const gameMap = {
  poker: 'Poker', blackjack: 'Blackjack', dice: 'Dice', casino_mines: 'Mines'
};
const gameColors = {
  poker: '#FF6384', blackjack: '#4BC0C0', dice: '#FFCE56',
  casino_mines: '#9966FF', crypto: '#00FFFF', stocks: '#28a745'
};

let combinedChart = null;
const charts = {};
let uid = null;

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const userResponse = await fetch(`${javaURI}/api/person/get`, fetchOptions);
      const userData = await userResponse.json();
      uid = userData.uid;
      initializeAnalytics();

      document.querySelectorAll('#toggleButtons button').forEach(button => {
        button.addEventListener('click', (e) => {
          const game = e.target.getAttribute('data-game');
          toggleDataset(game);
          button.classList.toggle('active');
        });
      });
    } catch (error) {
      console.error("Initialization error:", error);
      showError("Failed to initialize dashboard. Please refresh the page.");
    }
  });

  async function initializeAnalytics() {
    try {
      showLoading();
      const response = await fetch(`${javaURI}/bank/analytics/${uid}`, fetchOptions);
      const analyticsJson = await response.json();
      userAnalyticsData = analyticsJson.data || {};
      initializeCharts();
    } catch (error) {
      console.error("Analytics error:", error);
      showError("Failed to load analytics data. Please try again later.");
    }
  }

  function initializeCharts() {
    const profitMap = userAnalyticsData.profitMap || {};

    Object.keys(gameMap).forEach(game => {
      const container = document.getElementById(`${game}ChartContainer`);
      if (container) {
        container.innerHTML = `<canvas id="${game}Chart"></canvas>`;
        const data = profitMap[game] || [];
        data.length > 0 ? createChart(game, data) : showEmptyData(`${game}ChartContainer`);
      }
    });

    createCombinedChart();
  }

  // Rest of the JavaScript remains the same as previous version
  // (createChart, createCombinedChart, processTransactionData, chartOptions, etc.)
  // ... [truncated for brevity, keep all remaining functions unchanged]
</script>