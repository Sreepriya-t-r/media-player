import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container  py-5">
      <div className="row align-items-center">
        <div className="col-3 " style={{ height: "100px" }}>
          <h3 className="text-white text-xl font-semibold ">
            {" "}
            <i className="fa-solid fa-music  me-3 text-info "></i>
            Media-Player
          </h3>
          <p>Designed and built with love by the Luminar team.</p>
          <p className="text-sm">Code licensed Luminar, docs CC BY 3.0.</p>
          <p className="text-sm">Currently v5.3.2.0</p>
        </div>

        <div className="col-2">
          <h3>Links</h3>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <br />
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <br />
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            History Page
          </Link>
        </div>
        <div className="col-2">
          <h3>Guides</h3>
          <a href="#"  style={{ textDecoration: "none", color: "white" }}>React</a><br/>
          <a href="#"  style={{ textDecoration: "none", color: "white" }}>Router</a><br/>
          <a href="#"  style={{ textDecoration: "none", color: "white" }}> React Bootstrap</a><br/>
         
        </div>
        <div className="col-1"></div>

        <div className="col-3" style={{ height: "100px" }}>
          <h3 className="text-white text-lg font-semibold">Contact</h3>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 bg-gray-800 text-white w-full rounded-2 me-2"
            />
            <button
              className="btn   text-white"
              style={{ backgroundColor: "#6B46C1" }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className=" mt-4 text-secondary">
            <a href="#" className="text-decoration-none me-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-decoration-none me-2">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-decoration-none me-2">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-decoration-none me-2">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center text-sm text-gray-400 mt-8"
        style={{ marginTop: "140px", height: "130px" }}
      >
        Copyright © July 2024 Batch, Media Player App. Built with React
      </div>
    </div>
  );
};

export default Footer;
