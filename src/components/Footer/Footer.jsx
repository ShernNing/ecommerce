import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>New Season</span>
          <span>Sale</span>
        </div>
        <div className="item">
          <h1>Information</h1>
          <span>FAQ</span>
          <span>Private Policy</span>
          <span>Terms and Conditions</span>
          <span>Track Order</span>
        </div>
        <div className="item">
          <h1>About Us</h1>
          <span>
            COCO is the next-generation fashion retailer for Millennial and Generation Z consumers. As a trusted, premium lifestyle brand, and a go-to online source for discovery and inspiration, we deliver an engaging customer experience from a vast yet curated offering.
          </span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>
            Be the first to know about new arrivals, sales & promos by submitting your email! You can opt out at any time. 
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="right">
          <span className="logo">COCO</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
