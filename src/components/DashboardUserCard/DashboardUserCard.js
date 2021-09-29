import "./DashboardUserCard.scss";

import UserProfilePicture from "../../assets/img/image-jeremy.png";

export default function DashboardUserCard() {
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
    </div>
  );
}
