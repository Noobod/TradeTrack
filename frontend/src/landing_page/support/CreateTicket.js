import React from "react";

function CreateTicket() {
  return (
    <div className="container p-5 mt-5">
      <div className="row p-5">
        <h1 className="fs-5 text-muted text-center">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      <div className="row p-5" style={{ lineHeight: "1.8" }}>
        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Resident individual</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Minor</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Non Resident Indian (NRI)</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Company, Partnership, HUF and LLP</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Glossary</a>
        </div>

        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-user-o" aria-hidden="true"></i> Your TradeTrack Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Your Profile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Account modification</a><br />
          <a href="" style={{ textDecoration: "none", fontSize: "14px" }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Nomination</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Transfer and conversion of securities</a>
        </div>

        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Kite
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>IPO</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Trading FAQs</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Margin Trading Facility (MTF) and Margins</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Charts and orders</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Alerts and Nudges</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>General</a>
        </div>

        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-money" aria-hidden="true"></i> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Add money</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Withdraw money</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Add bank accounts</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>eMandates</a>
        </div>

        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-cc" aria-hidden="true"></i> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Portfolio</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Corporate actions</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Funds statement</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Reports</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Profile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "14px" }}>Segments</a>
        </div>

        <div className="col-md-4 p-4">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-circle" aria-hidden="true"></i> Coins
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>Mutual funds</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>National Pension Scheme (NPS)</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>Fixed Deposit (FD)</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>Features on Coin</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>Payments and Orders</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5", fontSize: "15px" }}>General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
