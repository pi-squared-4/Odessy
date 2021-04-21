import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  "animation-delay": "0.2s",
                  "animation-name": "fadeInLeft",
                }}
              ></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  "animation-delay": "0.4s",
                  "animation-name": "fadeInLeft",
                }}
              ></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  "animation-delay": "0.6s",
                  "animation-name": "fadeInLeft",
                }}
              ></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  "animation-delay": "0.8s",
                  "animation-name": "fadeInLeft",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
