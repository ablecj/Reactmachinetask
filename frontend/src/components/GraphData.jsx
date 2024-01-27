import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; 

const GraphData = () => {
  const [graphData, setGraphData] = useState([]);
  const chartRef = useRef(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/graph');
        const data = await response.json();
        setGraphData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
 
  const labels = graphData.map(item => item.x);
  const dataValues = graphData.map(item => item.y);

  // Create or update the line chart after data is fetched
  useEffect(() => {
    const ctx = document.getElementById('lineChart').getContext('2d');

    
    if (chartRef.current) {
      chartRef.current.destroy();
    }

   
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Graph Data',
          data: dataValues,
          borderColor: 'blue',
          borderWidth: 1,
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: labels,
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }, [labels, dataValues]);

  return (
    <div className='graph-section'>
      <canvas id="lineChart" width="150" height="100"></canvas>
    </div>
  );
};

export default GraphData;
