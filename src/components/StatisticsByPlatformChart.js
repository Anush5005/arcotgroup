import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import { Card } from "antd";

const StatisticsByPlatformChart = ({ data }) => {
  return (
    <Card title="Usage Statistics by Platform" style={{ width: 500 }}>
      <PieChart width={500} height={300}>
        <Pie
          data={Object.entries(data).map(([platform, count]) => ({
            name: platform,
            value: count,
          }))}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </Card>
  );
};

export default StatisticsByPlatformChart;
