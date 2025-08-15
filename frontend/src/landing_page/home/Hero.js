import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        {/* Hero Image */}
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-4 img-fluid"
          style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
        />

        {/* Heading */}
        <h1 className="mt-4 mb-3 fs-2 fs-md-1">Invest in everything</h1>

        {/* Paragraph */}
        <p className="mb-4 fs-6 fs-md-5 px-3 px-md-0">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        {/* Button */}
        <button
          className="btn btn-primary mb-5 py-3 px-4 fs-6"
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          Signup for Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
