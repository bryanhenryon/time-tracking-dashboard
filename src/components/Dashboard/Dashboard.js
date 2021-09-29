import "./Dashboard.scss";
import data from "../../data.json";

import DashboardActivityCard from "../DashboardActivityCard/DashboardActivityCard";
import DashboardUserCard from "../DashboardUserCard/DashboardUserCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardUserCard />
      {data.map((data, index) => (
        <DashboardActivityCard data={data} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
