/* eslint-disable no-unused-vars */

import Chart from "chart.js/auto";

import { Line } from 'react-chartjs-2';

const percent=[];

for (let i=0;i<=100; i++){
  percent.push(i + '%')
}

// const ranges = [0,20,40,60,80,100];


const data = {
  labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
  datasets: [
    {
      label: 'Your Score',
      fill: true,
      lineTension: 0.35, 
      backgroundColor: 'transparent',
      borderColor: '#C8D6E5',
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      pointBorderColor: '#438AF6',
      pointBackgroundColor: '#438AF6',
      borderWidth:2,
      pointBorderWidth: 2,
      pointRadius: 2,
      pointHoverRadius: 4,
      pointHitRadius: 2,
      data: [0, 29, 60, 22, 36, 5],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, 
    },
    
  },
  scales: {
    x: {
      display: true,
      position: "bottom",
      border:{dash: [5,5]}, 
      grid:{
        display:true,
        
      },
    },
    y: {
      display: false, 
      grid:{
        display:false,
      },
      max:100,
      stepSize:20,
    },
  },
};

const AreaChart = () => {

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
