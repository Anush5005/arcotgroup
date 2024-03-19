import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const InsightSummary = ({ data }) => {
  return (
    <Card title="Insight Summary" style={{ width: 300 }}>
      <p>Total Queries: {data.total_queries}</p>
      <p>Successful Queries: {data.successful_queries}</p>
      <p>Failed Queries: {data.failed_queries}</p>
      <p>Average Response Time: {data.average_response_time}</p>
    </Card>
  );
};

export default InsightSummary;
