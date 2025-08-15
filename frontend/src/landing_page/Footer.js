import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container border-top mt-5">
        {/* Logo and Lists */}
        <div className="row mt-5">
          <div className="col-12 col-md logo text-center text-md-start mb-4 mb-md-0">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Logo"
            />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col-12 col-md list-container mb-4 mb-md-0">
            <ul>
              <h5 className="mb-3">Account</h5>
              <li><a href="#">Open demat account</a></li>
              <li><a href="#">Minor demat account</a></li>
              <li><a href="#">NRI demat account</a></li>
              <li><a href="#">Commodity</a></li>
              <li><a href="#">Dematerialisation</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">MTF</a></li>
              <li><a href="#">Referral program</a></li>
            </ul>
          </div>

          <div className="col-12 col-md list-container mb-4 mb-md-0">
            <ul>
              <h5 className="mb-3">Support</h5>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">How to file a complaint?</a></li>
              <li><a href="#">Status of your complaints</a></li>
              <li><a href="#">Bulletin</a></li>
              <li><a href="#">Circular</a></li>
              <li><a href="#">T-Connect blog</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          <div className="col-12 col-md list-container">
            <ul>
              <h5 className="mb-3">Company</h5>
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">TradeTrack Cares (CSR)</a></li>
              <li><a href="#">TradeTrack.tech</a></li>
              <li><a href="#">Open source</a></li>
            </ul>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="row mt-4">
          <div className="col-12 text-muted p-5" style={{ fontSize: "10px", whiteSpace: "normal", wordWrap: "break-word" }}>
            <p>
              TradeTrack Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
              no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
              Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository system
              w.e.f September 01, 2020. 2) Update your e-mail and phone number
              with your stock broker / depository participant and receive OTP
              directly from depository on your e-mail and/or mobile number to
              create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in case
              of allotment. In case of non allotment the funds will remain in your
              bank account. As a business we don't give stock tips, and have not
              authorized anyone to trade on behalf of others. If you find anyone
              claiming to be part of Zerodha and offering such services, please
              create a ticket here.
            </p>

            <ul className="nav-list">
              <li><a href="#">NSE</a></li>
              <li><a href="#">BSE</a></li>
              <li><a href="#">MCX</a></li>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Disclosure</a></li>
              <li><a href="#">For investor's attention</a></li>
              <li><a href="#">Investor charter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
