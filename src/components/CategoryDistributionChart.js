// CategoryDistributionChart.js
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { Card } from "antd";

const CategoryDistributionChart = ({ data }) => {
  return (
    <Card title="Category Distribution" style={{ width: 300 }}>
      <PieChart width={300} height={200}>
        <Pie
          dataKey="value"
          data={Object.entries(data).map(([name, value]) => ({ name, value }))}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </Card>
  );
};

export default CategoryDistributionChart;
