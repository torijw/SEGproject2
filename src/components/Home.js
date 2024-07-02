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
          <div className="d-flex flex-row">
            <div className="p-2 right">
              <a href="#about" className="btn light fw-bold mt-4 shadow">
                About Us
              </a>
            </div>
            <div className="p-2 left">
              <button
                onClick={() => navigate(path)}
                className="btn light fw-bold mt-4 shadow"
              >
                Explore Artworks
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="mt-5">
      <h3 className="text-center">Examples of Our Works</h3>
      <Carousel className="mt-4 portfolio" >
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-1.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-2.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-3.jpg")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src={require("../images/examples/home-4.webp")}
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function Reviews() {
  return (
    <section className="my-5">
      <Container fluid id="reviews" className="my-5">
        <h3 className="my-3">Recent Reviews</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Abstract Acrylic Painting</h5>
                <h6 className="card-subtitle mb-4 text-muted">Michael Moore</h6>
                <p className="card-text">
                  We decided to spruce up our living room with a custom abstract
                  painting and couldn't be more thrilled with the outcome. It
                  arrived quickly and was carefully packaged. The colors and
                  shapes are exactly what we wanted.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Custom Character Figure</h5>
                <h6 className="card-subtitle mb-4 text-muted">Anonymous</h6>
                <p className="card-text">
                  We wanted to jazz up our gaming setup, so we ordered a custom
                  3D character model online. The artist nailed it with every
                  detail—facial features, clothing, accessories—all spot-on. The
                  model looks and feels amazing, now proudly displayed on our
                  desk. It's a real eye-catcher, and friends keep asking where
                  to get their own.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Anime-style Illustration</h5>
                <h6 className="card-subtitle mb-4 text-muted">Cecil L.</h6>
                <p className="card-text">
                  We wanted to bring anime flair into our digital collection, so
                  we commissioned a custom illustration online. The artist
                  nailed it, blending our ideas with their style perfectly. The
                  digital file arrived quickly and exceeded our expectation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="my-5">
      <Container fluid id="about">
        <h3>About Us</h3>
        <div className="d-flex flex-row mt-4">
          <div className="p-2 left-image" />
          <div className="p-2 right-section">
            <p>
              Welcome to Art Elysium! Our platform empowers you to create
              artworks tailored to your vision. With a diverse community of
              talented artists, we make the process of bringing your ideas to
              life seamless and inspiring. Whether you're crafting a unique
              gift, decorating your space, or exploring your creative potential,
              Art Elysium offers the canvas and the means to make your artistic
              dreams a reality. Join us in celebrating creativity and
              individuality, each artwork we create is unique!
            </p>
            <br />
            <br />
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
    <>
      <Banner />
      <Portfolio />
      <Reviews />
      <About />
    </>
  );
}

export default Home;
