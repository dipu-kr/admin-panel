import React from "react";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Burger", "Pizza", "KFC"],
  datasets: [
    {
      label: "Total order",
      data: [12, 19, 15],
      backgroundColor: ["#00cd99", "#FF7F7F", "#EE9626"],
      borderColor: ["#00cd99", "#FF7F7F", "#EE9626"],
      borderWidth: 2,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="w-full min-h-[calc(100vh-38px-8px-8px-20px)] mt-5">
      <Typography variant="h6" component="h6" className="text-white uppercase">
        Pie Chart
      </Typography>
      <p className="text-[#16a37f] text-xs">Simple Pie Chart</p>
      <div className="w-full h-[calc(100vh-38px-8px-8px-20px-20px-50px)] mt-5 flex justify-center p-4">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
