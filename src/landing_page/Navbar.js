import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor: "#FFF"}}>
        <div class="container">
          <Link class="navbar-brand logo" to="/">
            <img src="media/images/logo.svg" style={{width: "18%"}} alt="Logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
            </form>
          </div>
          
        </div>
      </nav>
  );
}

export default Navbar;
