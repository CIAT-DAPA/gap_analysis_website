import React from "react";
import LogoC from "../../assets/img/Ciat-logo.png";
import LogoCT from "../../assets/img/crop-trust-logo.png";
import LogoI from "../../assets/img/Icarda-logo.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="mb-4 text-white bg-title">
        <div className="container pb-3 px-4 container-news" style={{}}>
          <div className="col-md-6 px-0">
            <h1 className="display-4">About Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <p style={{ textAlign: "justify" }}>
          Crop landraces have unique local agroecological and societal functions
          and offer important genetic resources for plant breeding. Recognition
          of the value of landrace diversity and concern about its erosion on
          farms have led to sustained efforts to establish ex situ collections
          worldwide. The conservation and effective use of crop genetic
          diversity are crucial to overcome challenges related to human
          nutrition and agricultural sustainability. The degree of
          representation of crop landrace diversity in ex situ conservation is
          poorly understood, partly due to a lack of methods that can negotiate
          both the anthropogenic and environmental determinants of their
          geographic distributions. Here, we describe a novel spatial modelling
          and ex situ conservation gap analysis modelling framework for crop
          landraces.
        </p>

        <div className=" ">
          <div>
            <h1 className="text-center mt-5">Powered by</h1>
          </div>
          <div className="container d-flex row">
            <div className="ci col-md-4">
              <a href="https://ciat.cgiar.org/?lang=es" target="_blank">
                <img className="img-logo" src={LogoC} alt="" />
              </a>
              <p className="text-center">
                {" "}
                <strong>CIAT</strong>
              </p>
              <p className="text-center">Palmira,Colombia</p>
            </div>
            <div className="ic col-md-4">
              <a href="https://www.icarda.org" target="_blank">
                <img
                  className="img-logo"
                  src="https://www.icarda.org/themes/custom/icarda/logo.svg"
                  alt=""
                />
              </a>
              <p className="text-center">
                {" "}
                <strong>ICARDA</strong>
              </p>
              <p className="text-center">Rabat,Morocco</p>
            </div>
            <div className="ct col-md-4">
              <a href="https://www.croptrust.org" target="_blank">
                <img className="img-logo" src={LogoCT} alt="" />
              </a>
              <p className="text-center ">
                {" "}
                <strong>Crop Thrust</strong>
              </p>
              <p className="text-center">Bonn,Germany</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
