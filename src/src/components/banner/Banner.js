import "./Banner.css";
import barley from "../../assets/img/barleyCard.png";
import bean from "../../assets/img/frijolCard.png";
import whiteBean from "../../assets/img/whiteCard.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Row } from "react-bootstrap";

function Banner() {
  return (
    <MouseParallaxContainer
      className="parallax"
      resetOnLeave
    >
      <Row>
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.2}
          className="parallaxChild col text-center"
          style={{
            left: "4%",
            bottom: "50%",
          }}
        >
          <img src={bean} alt="" className="imgParallax" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "",
            scale: "1.3",
            zIndex: "500"
          }}
        >
          <img src={whiteBean} alt="" className="imgParallax" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.5}
          factorY={0.5}
          className="parallaxChild col text-center blur"
          style={{
            left: "",
            top: "",
            scale: "1.5",
            zIndex: "1000"
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
      </Row>
      <Row>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "0",
            scale: "1.3",
            zIndex: "500"
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0}
          factorY={0}
          className="parallaxChild textParallax col text-center"
          style={{
            left: "",
          }}
        >
          <h1>GAP Analysis</h1>
          <p>
            Welcome! Discover our unique crop accessions on our GAP analysis
            page.
          </p>
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "",
            scale: "1.3",
            zIndex: "500"
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
      </Row>
      <Row>
        <MouseParallaxChild
          factorX={0.5}
          factorY={0.5}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "",
            scale: "1.5",
            zIndex: "1000"
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "",
            scale: "1.3",
            zIndex: "500"
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.2}
          className="parallaxChild col text-center"
          style={{
            left: "",
            top: "",
          }}
        >
          <img src={barley} alt="" className="imgParallax" />
        </MouseParallaxChild>
      </Row>
    </MouseParallaxContainer>
  );
}

export default Banner;
