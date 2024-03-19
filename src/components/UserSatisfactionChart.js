// UserSatisfactionChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "antd";

const UserSatisfactionChart = ({ data }) => {
  return (
    <Card title="User Satisfaction Ratings" style={{ width: 500 }}>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rating" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </Card>
  );
};

export default UserSatisfactionChart;
