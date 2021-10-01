import "./DashboardActivityCard.scss";
import icons from "../../assets/svg/icons.svg";
import PropTypes from "prop-types";

function DashboardActivityCard({ data, timeframe }) {
  DashboardActivityCard.propTypes = {
    data: PropTypes.object,
    timeframe: PropTypes.string,
  };

  const backgroundCustomStyle = {
    backgroundColor: data.backgroundColor,
  };

  return (
    <div className="dashboard-activity-card">
      <div className="background" style={backgroundCustomStyle}>
        <svg
          className="background-icon"
          id={data.backgroundIcon.id}
          height={data.backgroundIcon.height}
          width={data.backgroundIcon.width}
        >
          <use href={`${icons}#${data.backgroundIcon.id}`}></use>
        </svg>
      </div>

      <div className="content">
        <div className="top">
          <div className="activity">{data.title}</div>
          <button className="button">
            <svg id="icon-ellipsis" height="5" width="21">
              <use href={icons + "#icon-ellipsis"}></use>
            </svg>
          </button>
        </div>

        <div className="bottom">
          <div className="current-hours">
            {data.timeframes[timeframe].current}hrs
          </div>
          <div className="previous-hours">
            Last Week - {data.timeframes[timeframe].previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardActivityCard;
