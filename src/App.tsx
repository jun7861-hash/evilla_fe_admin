import React from "react";

// import TopNav from "./layout/topnav";
// import SideNav from "./layout/sidenav";
// import Login from "./pages/login";
// import ForgotPassword from "./pages/forgot-password";
// import ResetPassword from "./pages/reset-password";

/* layout */
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Main from "./layout/main";

/* pages */
// import Property from "./pages/property";
import PropertyView from "./pages/property/view";



const App: React.FC = () => {
  return (
    <>

      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <Main>
            {/* <Property /> */}
            <PropertyView />
          </Main>
        </div>
      </div>
    </>
  );
};

export default App;
