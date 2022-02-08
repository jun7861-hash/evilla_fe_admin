import React from "react";

import { Login, LOGIN, YourName, Password, RememberMe } from "../../constant";
import logo from "../../assets/images/endless-logo.png";

const Logins: React.FC = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          {/* <!-- login page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-md-12">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <div className="card mt-4">
                      <div className="card-body">
                        <div className="text-center">
                          <h4>{LOGIN}</h4>
                          <h6>{"Enter your Username and Password"} </h6>
                        </div>
                        <form className="theme-form">
                          <div className="form-group">
                            <label className="col-form-label pt-0">
                              {YourName}
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">{Password}</label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">{RememberMe}</label>
                          </div>
                          <div className="form-group form-row mt-3 mb-0">
                            <button
                              className="btn btn-primary btn-block"
                              type="button"
                            >
                              {Login}
                            </button>
                          </div>
                          <div className="login-divider"></div>
                          <div className="social mt-3">
                            <div className="form-group btn-showcase d-flex">
                              <button className="btn social-btn btn-fb d-inline-block">
                                {" "}
                                <i className="fa fa-facebook"></i>
                              </button>
                              <button className="btn social-btn btn-twitter d-inline-block">
                                <i className="fa fa-google"></i>
                              </button>
                              <button className="btn social-btn btn-google d-inline-block">
                                <i className="fa fa-twitter"></i>
                              </button>
                              <button className="btn social-btn btn-github d-inline-block">
                                <i className="fa fa-github"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default Logins;
