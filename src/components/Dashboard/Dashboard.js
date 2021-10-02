import { useState } from "react";
import "./Dashboard.scss";
import data from "../../data.json";

import DashboardActivityCard from "../DashboardActivityCard/DashboardActivityCard";
import DashboardUserCard from "../DashboardUserCard/DashboardUserCard";

function Dashboard() {
  const [timeframe, setTimeframe] = useState("weekly");

  const changeTimeframe = (timeframe) => setTimeframe(timeframe);

  return (
    <main className="dashboard">
      <DashboardUserCard
        changeTimeframe={changeTimeframe}
        timeframe={timeframe}
      />
      {data.map((data, index) => (
        <DashboardActivityCard timeframe={timeframe} data={data} key={index} />
      ))}
    </main>
  );
}

export default Dashboard;
