import React from "react";
import "./home.css";
import { Container, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  let path = "/explore";

  return (
    <section id="background">
      <Container fluid className="p-0">
        <div className="text-center" id="box">
          <h1>Art Elysium</h1>
          <p className="mb-5">
            Discover art that's just right for you, customized to your needs
          </p>
          <button
            onClick={() => navigate(path)}
            className="btn light fw-bold mt-4 shadow"
          >
            Explore Artworks
          </button>
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="mt-5">
      <h3 className="text-center">Examples of Our Works</h3>
      <Carousel className="mt-4">
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-1.jpg")}
            class="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-2.jpg")}
            class="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-3.jpg")}
            class="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-4.webp")}
            class="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function About() {
  return (
    <section className="my-5">
      <Container fluid id="about" className="about">
        <h3>About Us</h3>
        <div className="d-flex flex-row mt-4">
          <div className="p-2 left-image" />
          <div className="p-2 right-section">
            <p>
              Welcome to Art Elysium, your gateway to personalized artistry. Our
              platform empowers you to create artworks tailored to your vision.
              With a diverse community of talented artists, we make the process
              of bringing your ideas to life seamless and inspiring. Whether
              you're crafting a unique gift, decorating your space, or exploring
              your creative potential, Art Elysium offers the canvas and the
              means to make your artistic dreams a reality. Join us in
              celebrating creativity and individuality.
            </p>
            <br/><br/>
            <Container fluid className="p-0" id="contacts">
              <h5>Contact Information</h5>
              <div className="d-flex flex-row">
                <div className="p-2 right">
                  <p>
                    <span className="text-muted">Customer Service</span>
                    <br /> 75 Laurier Ave E
                    <br /> Ottawa, ON Canada
                    <br /> K1N 6N5
                  </p>
                </div>
                <div className="p-2 left">
                  <p>
                    <span></span>
                    <br />
                    phone: 111-222-3333
                    <br />
                    email: info@artelysium.com
                    <br />
                    fax: 111-222-3333
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Banner />
      <Portfolio />
      <About />
    </div>
  );
}

export default Home;
