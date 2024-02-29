import React from "react";
import "./card.css";
import {
    BoxArrowInUp,
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

export class Barcomponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="nav1 row">
          <div className="nav1_left col-6">
            <ul className="nav1_left_menu">
              <li className="bar item">
                <Facebook></Facebook>
              </li>
              <li className="bar item">
                <Instagram></Instagram>
              </li>
              <li className="bar item">
                <Twitter></Twitter>
              </li>
              <li className="bar item">
                <Google></Google>
              </li>
            </ul>
          </div>

          <div className="col-6 nav1_right">
            <ul className="nav1_right_menu ">
              <button type="button" className="btn btn-warning">
                <li className="bar item">Become a seller</li>
              </button>
              <li className="bar item">Seller login</li>
              <li className="bar item">FAQ</li>
              <li className="bar item">Contact</li>
              <li className="bar item">Tracking Order</li>
            </ul>
          </div>
        </div>
        <div>
          <img className="img" src={safecart} alt="" />
        </div>
        <div className="search d-flex">
          <input type="search" placeholder="Search for product" className="form-control" /> &nbsp;
          <button className="btn btn-success ">
            <Search></Search>
          </button>
        </div>
        <div >
          <p> <GeoAlt></GeoAlt> Order Tracking</p>
           </div>
          <hr />




          <div className="categories">
            <ul className="categories li">
                <li >categories</li>
                <li className="submenu">Home Pages
                         <ul>
                          <li>Home Page1</li>
                          <li>Home Page2</li>
                          <li>Home Page3</li>
                         </ul>
                          </li>
                          
                <li>Shop Page</li>
                <li>pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
          </div>
          {/* <div className="heartright">
            <ul>
           <li> <Heart></Heart></li>
           <li> <Cart></Cart></li>
           <li> <BoxArrowInUp></BoxArrowInUp></li>
           <li><Person></Person></li>
        </ul>
          </div> */}

     



      </div>
    );
  }
}
