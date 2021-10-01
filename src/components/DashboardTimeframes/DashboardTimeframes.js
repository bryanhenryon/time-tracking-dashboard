import "./DashboardTimeframes.scss";

export default function Timeframes() {
  return (
    <ul className="timeframes">
      <li>
        <button className="timeframe">Daily</button>
      </li>
      <li>
        <button className="timeframe">Weekly</button>
      </li>
      <li>
        <button className="timeframe">Monthly</button>
      </li>
    </ul>
  );
}
