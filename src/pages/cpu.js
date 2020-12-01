import React from 'react';

import { Line } from 'react-chartjs-2';

// const rand = () => Math.round(Math.random() * 20 - 10)

const data = {
  labels: [1,2,3,4,5,6,7,8,9],
  datasets: [
    {
      label: 'A dataset',
      data: [
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        // { x: rand(), y: rand() },
        {x: 1, y: 5},
        {x: 2, y: 15},
        {x: 3, y: 10},
        {x: 4, y: 20},
        {x: 5, y: 5},
        {x: 6, y: 25},
        {x: 7, y: 3},
        {x: 8, y: 10},
        {x: 9, y: 8},
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function Cpu() {
    return(
       <Line data={data} options={options} />
    );
}

export default Cpu;