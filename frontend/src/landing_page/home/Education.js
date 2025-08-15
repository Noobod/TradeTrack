import React from "react";

function Education() {
  return (
    <div className="container mt-5 p-3">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="fs-4 fs-md-2 mb-3">Free and open market education</h1>
          <p className="fs-6 fs-md-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4 fs-6 fs-md-5">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
