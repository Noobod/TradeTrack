import React from "react";

function Hero() {
  return (
    <div className="container mb-2 p-5 border-bottom">
      <div className="row text-center mt-3 mb-3" style={{ lineHeight: "2" }}>
        <h1 className="mt-5">TradeTrack Products</h1>
        <h5 className="mt-2 fs-5 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-2">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
