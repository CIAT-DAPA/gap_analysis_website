import "./Banner.css";
import bean from "../../assets/img/beanCard.jpeg";
import whiteBean from "../../assets/img/beanWhiteCard.jpeg";
import barley from "../../assets/img/barleyCard.jpeg";
import banana from "../../assets/img/bananaCard.jpeg";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Row } from "react-bootstrap";

function Banner() {
  return (
    <>
      <MouseParallaxContainer
        className="parallax d-flex flex-column align-items-center"
        resetOnLeave
      >
        <Row className="flex-nowrap gap-5">
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.2}
            className="parallaxChild col text-center"
            style={{
              left: "10px",
              bottom: "-10px",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={banana} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.2",
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={barley} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.2}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.1",
            }}
          >
            <figure style={{ "--c": "#ffffffa6" }}>
              <img src={bean} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.1",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={whiteBean} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
        </Row>
        <Row className="flex-nowrap gap-5">
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "0",
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={banana} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.2}
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
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={barley} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
        </Row>
        <Row className="flex-nowrap gap-5">
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.2}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.2",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={bean} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.1",
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={barley} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
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
            <figure style={{ "--c": "#000000a6" }}>
              <img src={whiteBean} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              scale: "1.2",
            }}
          >
            <figure style={{ "--c": "#000000a6" }}>
              <img src={banana} alt="Mountains" className="imgParallax" />
              <figcaption>
                The Night
                <br />
                <p className="fs-5">
                  Description of Barley fsad af qw fa a da sd as dqfqfqwq dq dw
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
        </Row>
      </MouseParallaxContainer>
      <div className="divider" />
    </>
  );
}

export default Banner;
