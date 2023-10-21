import React from "react";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "october",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Burger",
      data: [
        6000, 5000, 9300, 4000, 9084, 3600, 4748, 4000, 7700, 5000, 7500, 10000,
      ],
      backgroundColor: "#00cd99",
    },
    {
      label: "Pizza",
      data: [
        5500, 6666, 7794, 8000, 8884, 4600, 3748, 8000, 4500, 9000, 8000, 7400,
      ],
      backgroundColor: "#FF7F7F",
    },
    {
      label: "KFC",
      data: [
        7000, 9500, 5544, 4500, 5554, 6600, 5748, 5900, 6500, 5600, 9000, 9400,
      ],
      backgroundColor: "#EE9626",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="w-full min-h-[calc(100vh-38px-8px-8px-20px)] mt-5">
      <Typography variant="h6" component="h6" className="text-white uppercase">
        Bar Chart
      </Typography>
      <p className="text-[#16a37f] text-xs">Simple Bar Chart</p>
      <div className="w-full h-[calc(100vh-38px-8px-8px-20px-20px-50px)] mt-5 flex justify-center">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
