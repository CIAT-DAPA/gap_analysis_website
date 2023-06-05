import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Menu() {
  const [opacity, setOpacity] = useState(1);

  const changeNavbarOpacity = () => {
    if (window.scrollY >= 80) {
      setOpacity(0.3);
    } else {
      setOpacity(1);
    }
  };

  window.addEventListener("scroll", changeNavbarOpacity);

  return (
    <Navbar
      variant="dark"
      collapseOnSelect
      expand="lg"
      style={{
        opacity: `${opacity}`,
      }}
      className=" w-100 menu p-0 position-absolute"
    >
      <Container className="py-1">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          Gap Analysis
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="justify-content-end">
            <a
              className="nav-link"
              href="https://viewer.gapanalysistools.org"
              target="_blank"
              rel="noreferrer"
            >
              Map tool
            </a>
            <a
              className="nav-link"
              href="https://github.com/CIAT-DAPA/GapAnalysis"
              target="_blank"
              rel="noreferrer"
            >
              Gap Analysis Code
            </a>
            <Link className="nav-link" to="/aboutUs">
              About us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menu;
