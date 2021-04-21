import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="stay-Bottom">
      <div className="footer">
        <footer className="footer-area">
          <div className="footer-bg">
            <div class="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft volks"
                data-wow-delay="0.2s"
              ></div>
              <div class="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft cycle"
                  data-wow-delay="0.4s"
                  // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
                ></div>
              </div>
              <center>
                <div className="footer-quote">
                  <h1>Post to make them jealous, stalk to make yourself.</h1>
                </div>
              </center>
              <div className="footer_bottom">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400 footer-bottom-text">
                    ©LameWebistes Inc. 2021-forever. Already copied, please
                    don't copy further.
                  </p>
                </div>
                <div className="col-lg-6 col-sm-5 footer-bottom-sign">
                  <p>
                    Made with ♥ and deadlines, by{" "}
                    <a href="https://www.buymeacoffee.com/piSq">PiSquared</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
