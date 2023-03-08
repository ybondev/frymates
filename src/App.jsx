// COMPONENTS
import Navbar from "./components/Navbar";

// ASSETS
import bgVideo from "./assets/Frymates NFT - Web3 Detective Agency.mp4";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="index-container" id="home">
        <Navbar />
        <div className="index-bg">
          <video
            src={bgVideo}
            datatype="mp4"
            loop
            muted
            playsInline
            autoPlay
          ></video>
          <div className="video-overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-content">
              <h1 className="title">Un-degen your trading.</h1>
              <h1 className="title mb-1">Make data-driven decisions.</h1>
              <a href="#" className="explore">
                Explore
              </a>
              <button className="mint">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <a className="button-text">Public mint</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
