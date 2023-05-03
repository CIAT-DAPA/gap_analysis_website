import "./Home.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import grassTexture from "../../assets/img/grassTexture.jpg";
import arbusto from "../../assets/img/arbusto.png";

function Home() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer speed={1}>
          <div
            className="d-flex h-100 align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${grassTexture})`,
              backgroundSize: "cover",
            }}
          >
            <h2>Welcome to p1</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="d-flex h-100 align-items-center justify-content-center">
            <h2>Welcome to p2</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <div className="d-flex h-100 align-items-center justify-content-center">
            <h2>Buenas buenas</h2>
          </div>
          <img src={arbusto} className="position-absolute img-arbusto1"/>
          <img src={arbusto} className="position-absolute img-arbusto2"/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
