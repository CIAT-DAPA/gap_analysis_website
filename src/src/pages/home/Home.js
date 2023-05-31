import "./Home.css";
import Banner from "../../components/banner/Banner";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import julian from "../../assets/img/Julian.png";

function Home() {
  return (
    <div className="home-container">
      <Banner></Banner>

      <section className="container d-flex mt-5 px-5">
        <Row className="align-items-center">
          <Col className="">
            <p style={{textAlign: "justify"}}>
              Crop landraces have unique local agroecological and societal
              functions and offer important genetic resources for plant
              breeding. Recognition of the value of landrace diversity and
              concern about its erosion on farms have led to sustained efforts
              to establish ex situ collections worldwide. The conservation and
              effective use of crop genetic diversity are crucial to overcome
              challenges related to human nutrition and agricultural
              sustainability. The degree of representation of crop landrace
              diversity in ex situ conservation is poorly understood, partly due
              to a lack of methods that can negotiate both the anthropogenic and
              environmental determinants of their geographic distributions.
              Here, we describe a novel spatial modelling and ex situ
              conservation gap analysis modelling framework for crop landraces.
            </p>
          </Col>
          <Col className="col-4">
            <h1>Introduction</h1>
          </Col>
        </Row>
      </section>
      <section className="d-flex sec-contact justify-content-center">
        <Row className="align-items-center w-75 px-5 text-center ">
          <Col className="">
            <img
              src={julian}
              alt="julian"
              className=" shadow"
              style={{ width: "280px" }}
            ></img>
          </Col>
          <Col className="d-flex flex-column align-items-center fs-5">
            <p className="text-white">
              <strong>Julian Ramirez | </strong>
              <small>Principal Scientist | Climate Action</small>
            </p>
            <a
              className="text-decoration-none text-white"
              href="mailto: J.R.Villegas@cgiar.org"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              J.R.Villegas@cgiar.org
            </a>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
