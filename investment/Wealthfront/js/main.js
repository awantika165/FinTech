// Initial investment data
let fdSavingAmount = 8000;
let mutualFundSipAmount = 12000;
let stockMarketAmount = 10000;
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
// Function to update the Stock Market amount
function updateStockMarket() {
    let inputElement = document.getElementById('stock-market-input');
    let newAmount = parseFloat(inputElement.value);
    
    if (!isNaN(newAmount)) {
        stockMarketAmount = newAmount;
        document.getElementById('stock-market-amount').textContent = `$${stockMarketAmount}`;
        updatePieChart();
    }
    inputElement.value = ''; // Clear input field after updating
}

// Function to update the FD/Savings amount
function updateFdSaving() {
    let inputElement = document.getElementById('fd-saving-input');
    let newAmount = parseFloat(inputElement.value);
    
    if (!isNaN(newAmount)) {
        fdSavingAmount = newAmount;
        document.getElementById('fd-saving-amount').textContent = `$${fdSavingAmount}`;
        updatePieChart();
    }
    inputElement.value = ''; // Clear input field after updating
}

// Function to update the Mutual Fund/SIP amount
function updateMutualFundSip() {
    let inputElement = document.getElementById('mutual-fund-sip-input');
    let newAmount = parseFloat(inputElement.value);
    
    if (!isNaN(newAmount)) {
        mutualFundSipAmount = newAmount;
        document.getElementById('mutual-fund-sip-amount').textContent = `$${mutualFundSipAmount}`;
        updatePieChart();
    }
    inputElement.value = ''; // Clear input field after updating
}

// Function to update the pie chart
function updatePieChart() {
    let totalInvestment = fdSavingAmount + mutualFundSipAmount + stockMarketAmount;
    document.getElementById('total-investment').textContent = `$${totalInvestment}`;

    // Update Chart.js data
    if (myPieChart) {
        myPieChart.data.datasets[0].data = [fdSavingAmount, mutualFundSipAmount, stockMarketAmount];
        myPieChart.update();
    }
}

// Initialize Chart.js pie chart
let ctx = document.getElementById('investment-chart').getContext('2d');
let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['FD / Savings', 'Mutual Fund / SIP', 'Stock Market'],
        datasets: [{
            data: [fdSavingAmount, mutualFundSipAmount, stockMarketAmount],
            backgroundColor: ['#36a2eb', '#ff6384', '#ffce56']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        }
    }
});
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  // Function to check dark mode preference on page load
  function checkDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  

  

  // Check dark mode preference on page load
  document.addEventListener('DOMContentLoaded', checkDarkMode);
  
