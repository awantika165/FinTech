const amountInput = document.getElementById('amount');
const durationInput = document.getElementById('duration');
const rateInput = document.getElementById('rate');
const durationValue = document.getElementById('duration-value');
const rateValue = document.getElementById('rate-value');
const resultDuration = document.getElementById('result-duration');
const totalValue = document.getElementById('total-value');
const investedAmount = document.getElementById('invested-amount');
const estReturns = document.getElementById('est-returns');

let myChart;

function calculateSIP() {
    const amount = parseFloat(amountInput.value);
    const duration = parseInt(durationInput.value);
    const rate = parseFloat(rateInput.value);
    
    const monthlyRate = rate / 12 / 100;
    const months = duration * 12;
    
    const totalInvestment = amount * months;
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    const totalReturns = futureValue - totalInvestment;
    
    resultDuration.textContent = duration;
    totalValue.textContent = `₹ ${Math.round(futureValue).toLocaleString('en-IN')}`;
    investedAmount.textContent = `₹ ${totalInvestment.toLocaleString('en-IN')}`;
    estReturns.textContent = `₹ ${Math.round(totalReturns).toLocaleString('en-IN')}`;
    
    updateChart(totalInvestment, totalReturns);
}

function updateChart(invested, returns) {
    if (myChart) {
        myChart.destroy();
    }
    
    const ctx = document.getElementById('pie-chart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Invested Amount', 'Est. Returns'],
            datasets: [{
                data: [invested, returns],
                backgroundColor: ['#ff6384', '#36a2eb']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

amountInput.addEventListener('input', calculateSIP);
durationInput.addEventListener('input', () => {
    durationValue.textContent = `${durationInput.value} Yrs`;
    calculateSIP();
});
rateInput.addEventListener('input', () => {
    rateValue.textContent = `${rateInput.value}%`;
    calculateSIP();
});

calculateSIP();