import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder="Eg. how do i activate F&O, why is my order getting rejected.." className="mt-3"/>
          <br /><br />
          <a href="" className="me-3">Track account opening</a>
          <a href="" className="me-3">Track segment activation</a>
          <a href="" className="me-3">Intraday margins</a> <br/> 
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Quarterly Settlement of Funds - July 2025</a>
            </li>
            <br />
            <li>
              <a href="">
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
