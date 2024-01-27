// PieChart.jsx
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import '../styles/pie-chart.css';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);
  let myChart; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/pie-chart');
        const data = await response.json();
        setPieChartData(data);
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const createChart = () => {
      if (pieChartData.length) {
        const ctx = document.getElementById('pieChart').getContext('2d');

        // Check if the chart instance exists and destroy it
        if (myChart) {
          myChart.destroy();
        }

        // Create a new chart instance
        myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: pieChartData.map(item => item.label),
            datasets: [{
              data: pieChartData.map(item => item.value),
              backgroundColor: [
                '#94fc03',
                '#c0f77c',
                '#dcf2bf',
                '#dcf2bf',
                '#c0f77c',
              ],
            }],
          },
        });
      }
    };

    createChart();
  }, [pieChartData]);

  return (
    <div>
      <canvas id="pieChart" className='pie-canvas'></canvas>
    </div>
  );
};

export default PieChart;
