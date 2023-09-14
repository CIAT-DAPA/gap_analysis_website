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
      <div className="container my-5">
        <p>
          Welcome to Gap Analysis, a dedicated initiative focused on unraveling
          the intricate world of crop landraces and their global significance.
          Our mission is rooted in the understanding that crop landraces play a
          pivotal role in local agroecological systems and contribute invaluable
          genetic resources crucial for plant breeding endeavors.
        </p>

        <h3>Our Project</h3>
        <p>
          Crop landraces, with their distinctive local agroecological and
          societal functions, stand as living testaments to centuries of
          agricultural wisdom. They harbor genetic diversity that holds the key
          to sustainable agriculture and improved human nutrition. However, the
          threat of erosion looms over these invaluable resources, necessitating
          concerted efforts towards their conservation.
          <br />
          At this project, we have embarked on an ambitious journey to shed
          light on the status of ex situ collections of crop landraces
          worldwide. Our pioneering spatial modeling and ex situ conservation
          gap analysis framework seeks to bridge the gap in our understanding,
          addressing both human-induced and environmental determinants that
          shape their geographic distribution.
        </p>

        <h3>Meet Our Team</h3>
        <p>
          Behind the scenes, our dedicated team combines expertise in
          statistics, data science and agronomy to bring this vision to life.
          Our members draw from extensive experience in this specialized field.
          Their collective efforts are anchored at the renowned Alliance of
          Bioversity and the International Center for Tropical Agriculture
          (CIAT), where they collaborate to pioneer advancements in landrace
          conservation.
          <br />
          We are passionate about making a meaningful impact in the realm of
          crop landraces, and we invite you to join us on this journey towards a
          more sustainable and resilient agricultural future.
        </p>
        <div className="">
          <div
            className=""
          >
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
