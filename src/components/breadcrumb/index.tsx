import React from "react";
import { Home } from "react-feather";

import * as types from "./types";

const Breadcrumb: React.FC<types.breadcrumb> = ({ parent, title }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <div className="page-header-left">
                <h3>{title}</h3>
                <ol className="breadcrumb pull-right">
                  <li className="breadcrumb-item">
                    <a href="#javascript">
                      <Home />
                    </a>
                  </li>
                  <li className="breadcrumb-item">{parent}</li>
                  <li className="breadcrumb-item active">{title}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
