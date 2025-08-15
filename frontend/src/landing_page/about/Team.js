import React from 'react';

function Team() {
    return ( 
        <div className="container p-5 mt-5">
            <div className="row mb-5">
                <h2 className="text-center">People</h2>
            </div>

            <div className="row p-5" style={{ lineHeight: "1.8" }}>
                <div className="col-md-5 p-5 text-center">
                    <img 
                        src="media/images/nithinKamath.jpg" 
                        style={{ width: "60%", borderRadius: "100%" }} 
                        alt="Nithin Kamath"
                    />
                    <br/><br/>
                    <h4 className="mt-1">Nithin Kamath</h4>
                    <h6 className="fs-6 text-muted">Founder, CEO</h6>
                </div>

                <div className="col-md-7 p-5 text-muted">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing Boxing is his zen.
                    </p>
                    <p>
                        Connect on <a href='' style={{ textDecoration: "none" }}>Homepage / TradingQnA / Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;
