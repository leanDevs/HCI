const sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'LERIO SHEET',
      data: [98, 95, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
      backgroundColor: 'rgba(156, 137, 184)',
      borderColor: 'rgba(240, 166, 202)',
      borderWidth: 3
    }]
  };
  const ctx = document.getElementById('myscript').getContext('2d');
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
  
   // Function to create and justify the chart
   function createJustifiedChart() {
    // Create a chart element (for demonstration purposes, assuming canvas)
    var chartCanvas = document.createElement('canvas');
    chartCanvas.id = 'myChart';
    // Append the chart element to the container
    document.getElementById('chart-container').appendChild(chartCanvas);

    // Get the chart container
    var container = document.getElementById('chart-container');
    // Justify the chart by setting its CSS styles
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between'; // Justify items with space between
  }