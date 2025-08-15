import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div className="p-5 mb-5" id="supportWrapper">
        <h4 className="fs-5">Support Portal</h4>
        <a href="" style={{ textDecoration: "none" }}>Track tickets</a>
      </div>

      <div className="row p-5">
        <div className="col-md-6 p-4">
          <h4 className="fs-5 mb-3">Search for an answer or browse help topics to create a ticket</h4>
          <input 
            placeholder="Eg. how do i activate F&O, why is my order getting rejected.." 
            className="form-control mt-3 mb-4" 
          />
          <div>
            <a href="" className="me-3" style={{ textDecoration: "none" }}>Track account opening</a>
            <a href="" className="me-3" style={{ textDecoration: "none" }}>Track segment activation</a>
            <a href="" className="me-3" style={{ textDecoration: "none" }}>Intraday margins</a> 
            <br/>
            <a href="" style={{ textDecoration: "none" }}>Kite user manual</a>
          </div>
        </div>

        <div className="col-md-6 p-4">
          <h4 className="fs-5 mb-3">Featured</h4>
          <ol style={{ lineHeight: "2" }}>
            <li className="mb-3">
              <a href="" style={{ textDecoration: "none" }}>Quarterly Settlement of Funds - July 2025</a>
            </li>
            <li>
              <a href="" style={{ textDecoration: "none" }}>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
