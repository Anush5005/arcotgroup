import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import jsonData from "./data/aidata.json";
import InsightSummary from "./components/InsightSummary";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import ResponseTimesChart from "./components/ResponseTimesChart";
import UserSatisfactionChart from "./components/UserSatisfactionChart";
import StatisticsByPlatformChart from "./components/StatisticsByPlatformChart";
import StatisticsByCountryChart from "./components/StatisticsByCountryChart";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>{data && <InsightSummary data={data.insight_summary} />}</Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={8}>
          <Card>
            {data && (
              <CategoryDistributionChart data={data.category_distribution} />
            )}
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={8}>
          <Card>
            {data && <ResponseTimesChart data={data.response_times.day_wise} />}
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={8}>
          <Card>
            {data && (
              <UserSatisfactionChart data={data.user_satisfaction.ratings} />
            )}
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={8}>
          <Card>
            {data && (
              <StatisticsByPlatformChart
                data={data.usage_statistics.by_platform}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} xl={8}>
          <Card>
            {data && (
              <StatisticsByCountryChart
                data={data.usage_statistics.by_country}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
