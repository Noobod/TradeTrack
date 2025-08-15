import React from "react";

function OpenAccount() {
  const SIGNUP_URL = "/signup"; // Path to your signup page

  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-4 fs-md-2 mb-4">Open TradeTrack account</h1>
        <p className="mb-4 fs-6 fs-md-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
          onClick={() => window.location.href = SIGNUP_URL}
        >
          Signup for Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
