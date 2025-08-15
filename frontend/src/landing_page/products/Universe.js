import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3 className="text-muted">The TradeTrack Universe</h3>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
            alt="Zerodha Fundhouse"
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%" }}
            alt="Sensibull"
          />
          <p className="text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "50%" }}
            alt="GoldenPi"
          />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "40%" }}
            alt="Streak"
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "50%" }}
            alt="Smallcase"
          />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "30%" }}
            alt="Ditto"
          />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
