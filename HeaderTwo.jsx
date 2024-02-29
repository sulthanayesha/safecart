import React from "react";
import "./header.css";
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

import { LiaRetweetSolid } from "react-icons/lia";
import earphone from "../assests/images/earphones.jpg.webp";
import washing from "../assests/images/mechine.jpg.webp";
import { Carousel } from "bootstrap";
import women from "../assests/images/women.jpg.webp";
import { Fleex } from "../../src/flex/fleex";

const HeaderTwo = () => {
  return (
    <div>
      <div className="headerTwo">
        <ul className="headerTwo_unordered ">
          <li>
            {" "}
            <a href="" className="text">
              {" "}
              Catergories{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="" className="text">
              Homepage{" "}
            </a>
            <ol className="headerTwo_ordered">
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  {" "}
                  Home style1{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Home style2{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  {" "}
                  Home style3{" "}
                </a>
              </li>
            </ol>
          </li>

          <li>
            <a href="" className="text">
              {" "}
              About{" "}
            </a>
          </li>
          <li>
            {" "}
            <a href="" className="text">
              Shop Page{" "}
            </a>
            <ol className="headerTwo_ordered">
              <li className="headerTwo_ordered li">
                <a class="list-group-item custom-list-item" href="">
                  {" "}
                  Product list
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Grid product{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Full Shop Page{" "}
                </a>
              </li>
            </ol>
          </li>

          <li>
            {" "}
            <a href="" className="text">
              Pages{" "}
            </a>
            <ol className="headerTwo_ordered">
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Terms&Conditions{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Privacy policy{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  FAQ{" "}
                </a>
              </li>
            </ol>
          </li>

          <li>
            {" "}
            <a href="" className="text">
              Blog
            </a>
            <ol className="headerTwo_ordered">
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Blog Grid Style{" "}
                </a>
              </li>
              <li className="headerTwo_ordered li">
                {" "}
                <a class="list-group-item custom-list-item" href="">
                  Blog List{" "}
                </a>
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <a href="" className="text">
              Contact{" "}
            </a>
          </li>

          <li>
            <div className="logo">
              <Heart></Heart>&nbsp;&nbsp;
              <Cart></Cart>&nbsp;&nbsp;
              <LiaRetweetSolid></LiaRetweetSolid>&nbsp;
              <Person></Person> login/Register
            </div>
          </li>
        </ul>
      </div>
      <div className="maincolor">
        <img className="earimg" src={earphone} alt="" />
        <h1 className="nov">NOVEMBERS </h1>
        <h1 className="novdown">GADGET MADNESS</h1>
        <h2 className="off">20% OFF</h2>
        <button className="but">GET offer</button>
      </div>
      <div className="machine">
        <h1 className="home1">------</h1>
        <h1 className="home">HOME APPLIANCES</h1>
        <h1 className="cyber">CYBER MONDAY</h1>
        <h1 className="spl">SPECIAL</h1>
        <img className="machineimg" src={washing} alt="" />
      </div>
      &nbsp;
      <div className="winter">
        <h1 className="grab">------</h1>
        <img className="women" src={women} alt="" />
        <h1 className="grab2">WINTER 2024 OFFER </h1>
        <h1 className="grab22">Grab the best </h1>
        <h1 className="grab3">best fashion deals in this winter</h1>
        <input className="grabbutton" type="button" value={"Get Deals"} />
      </div>
    </div>
  );
};

export default HeaderTwo;
