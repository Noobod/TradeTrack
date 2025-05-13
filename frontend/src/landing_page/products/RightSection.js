import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  KiteConnect,
}) {
    return ( 
    <div className="container p-5">
      <div className="row p-4">
        <div className="col-5 mt-2 p-5">
          <h1 className="fs-2 mt-3">{productName}</h1>
          <p className="mt-3 text-muted" style={{ lineHeight: "2" }}>
            {productDescription}
          </p>
          <div>
            <a href={KiteConnect} style={{ textDecoration: "none" }}>
              Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-7 p-3">
          <img src={imageURL} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;