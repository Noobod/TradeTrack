import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-4 fs-md-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-5 fs-md-4">Customer-first always</h2>
          <p className="text-muted mb-3">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-5 fs-md-4">No spam or gimmicks</h2>
          <p className="text-muted mb-3">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. 
            <a href="" style={{ textDecoration: "none" }}> Our philosophies.</a>
          </p>

          <h2 className="fs-5 fs-md-4">The Zerodha universe</h2>
          <p className="text-muted mb-3">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fs-md-4">Do better with money</h2>
          <p className="text-muted mb-3">
            With initiatives like <a href="" style={{ textDecoration: "none" }}>Nudge</a> and <a href="" style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img 
            src="media/images/ecosystem.png" 
            alt="Ecosystem" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "100%" }} 
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
            <a href="" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Press Logos */}
        <div className="col-12 text-center mt-5">
          <img 
            src="media/images/pressLogos.png" 
            alt="Press Logos" 
            className="img-fluid" 
            style={{ maxWidth: "60%" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
