import React, { Fragment } from "react";
import man from "../../assets/images/dashboard/user.png";
import { Edit } from "react-feather";
import { ELANA, GeneralManager } from "../../constant";

const UserPanel:React.FC = () => {
  const url = "";
  return (
    <Fragment>
      <div className="sidebar-user text-center">
        <div>
          <img
            className="img-60 rounded-circle lazyloaded blur-up"
            src={url ? url : man}
            alt="#"
          />
          <div className="profile-edit">
            {/* a tag must be change to Link tag */}
            <a href="#edit">
              <Edit />
            </a>
          </div>
        </div>
        <h6 className="mt-3 f-14">{ELANA}</h6>
        <p>{GeneralManager}.</p>
      </div>
    </Fragment>
  );
};

export default UserPanel;
