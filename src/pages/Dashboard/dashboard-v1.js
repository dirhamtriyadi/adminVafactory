import React from "react";
import { Link } from "react-router-dom";

class DashboardV1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
    };
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb float-xl-right">
          <li className="breadcrumb-item">
            <Link to="/dashboard/v1">Home</Link>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <h1 className="page-header">
          Dashboard <small>header small text goes here...</small>
        </h1>

        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-red">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>CASH IN</h4>
                <p>3,291,922</p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-orange">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>CASH OUT</h4>
                <p>20.44%</p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-grey-darker">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>Total Uang Cash</h4>
                <p>1,291,922</p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="widget widget-stats bg-black-lighter">
              <div className="stats-icon">
                <i className="fas fa-money-bill-alt"></i>
              </div>
              <div className="stats-info">
                <h4>Total Uang Transfer</h4>
                <p>00:12:23</p>
              </div>
              <div className="stats-link">
                <Link to="/dashboard/v1">
                  View Detail <i className="fa fa-arrow-alt-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardV1;
