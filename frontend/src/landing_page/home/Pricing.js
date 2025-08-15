import React from "react";

function Pricing() {
  return (
    <div className="container mt-3 p-3 mb-3">
      <div className="row align-items-start">
        {/* Text Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-4 fs-md-2">Unbeatable pricing</h1>
          <p className="fs-6 fs-md-5">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer on Desktop */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Pricing Cards */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border mb-3 mb-sm-0">
              <h1 className="mb-3"><i className="fa fa-inr" aria-hidden="true"></i>0</h1>
              <p>Free equity delivery and<br />direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-3"><i className="fa fa-inr" aria-hidden="true"></i>20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
