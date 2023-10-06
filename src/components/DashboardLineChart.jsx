import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: "top",
  //   },
  //   title: {
  //     display: true,
  //     text: "Chart.js Line Chart",
  //   },
  // },
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
        11200, 20600, 6750, 6400, 33200, 9600, 8700, 7500, 1000, 12500, 15000,
        19200,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Pizza",
      data: [
        5000, 16800, 7700, 4330, 8000, 3600, 4400, 5000, 6900, 34500, 8800,
        32000,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "KFC",
      data: [
        22500, 39800, 5700, 3330, 28000, 13600, 44300, 27000, 31430, 22540,
        8100, 48000,
      ],
      borderColor: "#32cd32",
      backgroundColor: "#32cd32",
    },
  ],
};

const DashboardLineChart = () => {
  return (
    <div className="w-full p-2">
      <div>
        <p className="text-[13px]">Revenue Generated</p>
        <p className="text-[13px] text-[#16a37f] font-semibold">$2,30,344</p>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default DashboardLineChart;
