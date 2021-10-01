import "./DashboardTimeframes.scss";

export default function Timeframes({ changeTimeframe }) {
  return (
    <ul className="timeframes">
      <li>
        <button className="timeframe" onClick={() => changeTimeframe("daily")}>
          Daily
        </button>
      </li>
      <li>
        <button className="timeframe" onClick={() => changeTimeframe("weekly")}>
          Weekly
        </button>
      </li>
      <li>
        <button
          className="timeframe"
          onClick={() => changeTimeframe("monthly")}
        >
          Monthly
        </button>
      </li>
    </ul>
  );
}
