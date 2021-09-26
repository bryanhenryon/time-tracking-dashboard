import "./Dashboard.scss";
import data from "../../data.json";

import DashboardActivityCard from "../DashboardActivityCard/DashboardActivityCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard">
        {data.map((data, index) => (
          <DashboardActivityCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;