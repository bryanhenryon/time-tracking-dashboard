import "./DashboardTimeframes.scss";
import PropTypes from "prop-types";

export default function Timeframes({ changeTimeframe }) {
  Timeframes.propTypes = {
    changeTimeframe: PropTypes.func,
  };

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
