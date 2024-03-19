// ResponseTimesChart.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "antd";

const ResponseTimesChart = ({ data }) => {
  return (
    <Card title="Response Times" style={{ width: 500 }}>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
    </Card>
  );
};

export default ResponseTimesChart;
