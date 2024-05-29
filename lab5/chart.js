const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Sample Data',
      data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
      backgroundColor: 'rgb(198,115,295)',
      borderColor: 'rgb(255,179,186)',
      borderWidth: 3
    }]
  };
  
  const ctx = document.getElementById('myChart').getContext('2d');
  let currentChart;
  
  function renderChart(type) {
    if (currentChart) {
      currentChart.destroy();
    }
    
    currentChart = new Chart(ctx, {
      type: type,
      data: sampleData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function changeChartType(type) {
    renderChart(type);
  }
  
  renderChart('bar');