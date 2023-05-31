import "./Banner.css";
import bean from "../../assets/img/beanCard.jpeg";
import whiteBean from "../../assets/img/beanWhiteCard.jpeg";
import barley from "../../assets/img/barleyCard.jpeg";
import banana from "../../assets/img/bananaCard.jpeg";
import chickpea from "../../assets/img/chickpeaCard.jpeg";
import corn from "../../assets/img/cornCard.jpeg";
import potato from "../../assets/img/potatoCard.jpeg";
import wheat from "../../assets/img/wheatCard.jpg";
import yam from "../../assets/img/yamCard.jpeg";
import breadfruit from "../../assets/img/breadfruitCard.jpeg";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Button, Row } from "react-bootstrap";

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
            <figure style={{ "--c": "#ffffffa6" }} className="shadow">
              <img src={bean} alt="Mountains" className="imgParallax" />
              <figcaption>
                Bean
                <br />
                <p className="fs-5">
                  A nutritious and versatile legume, source of protein and
                  fiber. protein and fiber.
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
              scale: "0.8",
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#ffffffa6" }} className="shadow">
              <img src={whiteBean} alt="Mountains" className="imgParallax" />
              <figcaption>
                White bean
                <br />
                <p className="fs-5">
                  Soft and versatile legume, rich in protein and fiber.
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
              scale: "0.9",
            }}
          >
            <figure style={{ "--c": "#ffffffa6" }} className="shadow">
              <img src={barley} alt="Mountains" className="imgParallax" />
              <figcaption>
                Barley
                <br />
                <p className="fs-5">
                  Nutritious and versatile grain, source of fiber and minerals.
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
              scale: "0.9",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={banana} alt="Mountains" className="imgParallax" />
              <figcaption>
                Banana
                <br />
                <p className="fs-5">
                  Sweet and nutritious tropical fruit, rich in potassium and
                  vitamins.
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
              scale: "0.9",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={chickpea} alt="Mountains" className="imgParallax" />
              <figcaption>
                Chickpea
                <br />
                <p className="fs-5">
                  Versatile legume with a nutty flavor, high in protein and
                  fiber.
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
            <Button className="text-white">Explore Map Tools</Button>
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            className="parallaxChild col text-center"
            style={{
              left: "",
              top: "",
              zIndex: "1000",
              scale: "0.8",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={corn} alt="Mountains" className="imgParallax shadow" />
              <figcaption>
                Corn
                <br />
                <p className="fs-5">
                  Versatile cereal grain with a sweet taste, rich in
                  carbohydrates and dietary fiber.
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
              scale: "0.8",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={potato} alt="Mountains" className="imgParallax" />
              <figcaption>
                Potato
                <br />
                <p className="fs-5">
                  Versatile starchy vegetable, a good source of carbohydrates
                  and dietary fiber.
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
              scale: "0.9",
              zIndex: "1000",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={wheat} alt="Mountains" className="imgParallax" />
              <figcaption>
                Wheat
                <br />
                <p className="fs-5">
                  Versatile cereal grain, a staple in many diets, rich in
                  carbohydrates and a good source of dietary fiber.
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
            <figure style={{ "--c": "#ffffffa6" }} className="shadow">
              <img src={yam} alt="Mountains" className="imgParallax" />
              <figcaption>
                Yam
                <br />
                <p className="fs-5">
                  Starchy root vegetable, rich in carbohydrates and a good
                  source of dietary fiber, vitamins, and minerals.
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
              scale: "0.8",
            }}
          >
            <figure style={{ "--c": "#000000a6" }} className="shadow">
              <img src={breadfruit} alt="Mountains" className="imgParallax" />
              <figcaption>
                Breadfruit
                <br />
                <p className="fs-5">
                  Tropical fruit with a starchy texture, often used as a staple
                  food, rich in carbohydrates and a good source of dietary
                  fiber.
                </p>
              </figcaption>
            </figure>
          </MouseParallaxChild>
        </Row>
      </MouseParallaxContainer>
      <div className="divider">
        <div
          class="scroll-down-link scroll-down-arrow"
        ></div>
      </div>
    </>
  );
}

export default Banner;
