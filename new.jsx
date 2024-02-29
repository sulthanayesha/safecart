import "./new.css";
import React from "react";
import {
  Cart,
  Facebook,
  GeoAlt,
  Google,
  Heart,
  Instagram,
  Person,
  Search,
  Twitter,
} from "react-bootstrap-icons";
import safecart from "../assests/images/safecart.jpg.webp";
import HeaderTwo from "../header2/HeaderTwo";
import Fleex from "../flex/fleex";

// import Fleex from "../flex/fleex";
// import HeaderTwo from "../header2/HeaderTwo";

const Newcomponent = () => {
  return (
    <div>
      <div className="header_top">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Facebook></Facebook>
          </li>

          <li>
            <Twitter></Twitter>
          </li>

          <li>
            <Google></Google>
          </li>

          <li>
            <Instagram></Instagram>
          </li>

          <li>
            <div className="header_rigth">
              <button className="button">
                {" "}
                <li>Become a seller</li>{" "}
              </button>
              <li>Seller login</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Tracking Order</li>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <img className="images" src={safecart} alt="" />
        <div className="search d-flex search">
          <input
            type="search"
            placeholder="search For Products"
            className="form-control "
          />
          &nbsp;
          <button className="btn btn-success">
            <Search></Search>
          </button>
        </div>
        <div>
          <p className="paragraph">
            {" "}
            <GeoAlt></GeoAlt>orderTracking
          </p>
        </div>
        {/* <HeaderTwo></HeaderTwo>
          <Fleex></Fleex> */}
      </div>
      <br />
      <hr />

      <HeaderTwo />
      
    </div>
  );
};

export default Newcomponent;
