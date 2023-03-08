import React from "react";

// COMPONENTS
import Navbar from "../components/Navbar";

// ASSETS
import ManifestoPng from "../assets/manifesto.png";
import Footer from "../components/Footer";

const Manifesto = () => {
  return (
    <>
      {" "}
      <div className="manifesto">
        <Navbar />
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6">
              <h1 className="title">The Manifesto</h1>
              <hr />
              <p>We’ve been burned more than 10x in crypto trading.</p>
              <p>Lost lots of $$$$$$s and more.</p>
              <p>We don’t want it to happen again.</p>
              <p>Not to us, nor you.</p>
              <p>
                Thus, we studied blockchain development and hired blockchain
                analysts.
              </p>
              <p>
                This time around, degen is not a word you could use against us
                when it comes to trade.
              </p>
              <a href="#" className="white-paper">
                Read our <span>whitepaper.</span>
              </a>
            </div>
            <div className="col-md-6">
              <img src={ManifestoPng} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Manifesto;
