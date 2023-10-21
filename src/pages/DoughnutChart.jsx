import React from "react";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Burger", "Pizaa", "KFC"],
  datasets: [
    {
      label: "Total orders",
      data: [12, 16, 14],
      backgroundColor: ["#00cd99", "#FF7F7F", "#EE9626"],
      borderColor: ["#00cd99", "#FF7F7F", "#EE9626"],
      borderWidth: 2,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="w-full min-h-[calc(100vh-38px-8px-8px-20px)] mt-5">
      <Typography variant="h6" component="h6" className="text-white uppercase">
        Doughnut Chart
      </Typography>
      <p className="text-[#16a37f] text-xs">Simple Doughnut Chart</p>
      <div className="w-full h-[calc(100vh-38px-8px-8px-20px-20px-50px)] mt-5 flex justify-center p-5">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
