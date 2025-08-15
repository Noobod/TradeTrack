import React from "react";

function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row p-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-2 fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free equity delivery" />
          <h1 className="fs-3 mt-3">Free equity delivery</h1>
          <p className="text-muted mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free - ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday trades" />
          <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Free direct MF" />
          <h1 className="fs-3 mt-3">Free direct MF</h1>
          <p className="text-muted mt-2">
            All direct fund investments are absolutely free - ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
