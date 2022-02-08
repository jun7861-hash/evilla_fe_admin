import React from "react";
import CountUp from "react-countup";
import { DollarSign } from "react-feather";

import Carousel from "../../../components/carousel"


import userCard from '../../../assets/images/user-card/3.jpg'
import avatar from '../../../assets/images/avtar/3.jpg'

const PropertyView: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-12">
              <div className="card o-hidden">
                <div className="bg-primary b-r-4 card-body">
                  <div className="media static-top-widget">
                    <div className="align-self-center text-center">
                      <DollarSign />
                    </div>
                    <div className="media-body">
                      <span className="m-0">Unit Price</span>
                      <h4 className="mb-0 counter">
                        <CountUp className="counter" end={6659} />
                      </h4>
                      <DollarSign className="icon-bg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card custom-card">
                <div className="card-header">
                  <img
                    className="img-fluid"
                    src={userCard}
                    alt=""
                  />
                </div>
                <div className="card-profile">
                  <img
                    className="rounded-circle"
                    src={avatar}
                    alt=""
                  />
                </div>
                <ul className="card-social">
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#javascript">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
                <div className="text-center profile-details">
                  <h4>Agent Name</h4>
                  <h6>Agent</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyView;
