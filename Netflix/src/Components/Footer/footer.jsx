import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-container">
        <div className="footer-icon">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Terms of use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="service">
          <p>Service code</p>
        </div>
        <div className="copy-right">
          &copy; 2023 Netflix, Inc. All rights reserved.
          <p>Netflix clone by Yusuf.A</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };