import React from "react";
import "./header.css";
import netflix from "../../assets/netflix.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <div className="header-outer-contianer">
        <div className="header-container">
          <div className="header-left">
            <ul>
              <img src={netflix} alt="Netflix" />
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <SearchIcon style={{ fontSize: "24px", color: "white" }} />
              </li>
              <li>
                <NotificationsNoneIcon
                  style={{ fontSize: "24px", color: "white" }}
                />
              </li>
              <li>
                <PermIdentityIcon
                  style={{ fontSize: "24px", color: "white" }}
                />
              </li>
              <li>
                <ArrowDropDownIcon
                  style={{ fontSize: "24px", color: "white" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
