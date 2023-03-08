// COMPONENTS
import Navbar from "./components/Navbar";

// ICONS
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

// ASSETS
import bgVideo from "./assets/Frymates NFT - Web3 Detective Agency.mp4";

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
      <div class="container">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center pt-5">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="/" class="text-white">
                      Home
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Gallery
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Roadmap
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Manifesto
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="text-white">
                      Connect
                    </a>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />

            <section class="mb-3">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <p>
                    Un-degen your trading. Make data-driven decisions.
                    <br />
                    Get exclusive access to data-analytics tool and internal
                    resources for a better, safer web3 trading.
                  </p>
                </div>
              </div>
            </section>
            <section class="text-center mb-3">
              <a href="#" class="text-white me-4">
                <BsDiscord className="icon discord" />
              </a>
              <a href="#" class="text-white me-4">
                <BsTwitter className="icon twitter" />
              </a>
              <a href="#" class="text-white me-4">
                <BsInstagram className="icon instagram" />
              </a>
            </section>
          </div>
          <div class="text-center p-3">
            © 2022 Copyright:
            <a class="text-white" href="https://ybondev.github.io/frymates/">
              {" "}
              Frymates
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
