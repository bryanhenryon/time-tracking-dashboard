import "./DashboardUserCard.scss";
import PropTypes from "prop-types";

import UserProfilePicture from "../../assets/img/image-jeremy.png";
import DashboardTimeframes from "../DashboardTimeframes/DashboardTimeframes";

export default function DashboardUserCard({ changeTimeframe, timeframe }) {
  DashboardUserCard.propTypes = {
    changeTimeframe: PropTypes.func,
    timeframe: PropTypes.string,
  };

  return (
    <div className="dashboard-user-card">
      <div className="user-infos">
        <div className="image-wrapper">
          <img
            className="user-profile-picture"
            src={UserProfilePicture}
            alt="User"
          />
        </div>
        <div className="username-wrapper">
          <div className="report-for">Report for</div>
          <h1 className="username">Jeremy Robson</h1>
        </div>
      </div>
      <DashboardTimeframes
        changeTimeframe={changeTimeframe}
        timeframe={timeframe}
      />
    </div>
  );
}
