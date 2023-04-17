import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./VisitorChart.css";

const VisitorChart = ({dataArr, activeItems}) => {
  
  return (
    <div className="VisitorChart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={dataArr}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Legend />
          {activeItems.map((activeItem, index) => (
            <Line
              type="monotone"
              dataKey={activeItem.value}
              stroke={activeItem.color}
              activeDot={{r: 8}}
              key={index}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default VisitorChart;
