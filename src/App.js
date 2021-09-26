import "./App.scss";
import data from "./data.json";

import DashboardActivityCard from "./components/DashboardCard/DashboardActivityCard";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        {data.map((data, index) => (
          <DashboardActivityCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
