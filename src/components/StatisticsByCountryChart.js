// UsageStatisticsByCountryChart.js
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

const StatisticsByCountryChart = ({ data }) => {
  return (
    <Card title="Usage Statistics by Country" style={{ width: 500 }}>
      <BarChart
        width={500}
        height={300}
        data={Object.entries(data).map(([country, count]) => ({
          country,
          count,
        }))}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </Card>
  );
};

export default StatisticsByCountryChart;
