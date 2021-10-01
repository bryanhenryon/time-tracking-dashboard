import "./DashboardTimeframes.scss";
import PropTypes from "prop-types";

export default function Timeframes({ changeTimeframe, timeframe }) {
  Timeframes.propTypes = {
    changeTimeframe: PropTypes.func,
    timeframe: PropTypes.string,
  };

  return (
    <ul className="timeframes">
      <li>
        <button
          className={`timeframe ${timeframe === "daily" ? "active" : ""}`}
          onClick={() => changeTimeframe("daily")}
        >
          Daily
        </button>
      </li>
      <li>
        <button
          className={`timeframe ${timeframe === "weekly" ? "active" : ""}`}
          onClick={() => changeTimeframe("weekly")}
        >
          Weekly
        </button>
      </li>
      <li>
        <button
          className={`timeframe ${timeframe === "monthly" ? "active" : ""}`}
          onClick={() => changeTimeframe("monthly")}
        >
          Monthly
        </button>
      </li>
    </ul>
  );
}
