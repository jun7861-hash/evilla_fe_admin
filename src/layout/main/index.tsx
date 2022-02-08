import React from "react";

import Breadcrumb from "../../components/breadcrumb";

const Main: React.FC = ({ children }) => {
  return (
    <>
      <div className="page-body">
        <Breadcrumb parent="parent" title="title" />
        {children}
      </div>
    </>
  );
};

export default Main;
