import React, { useRef, useState } from "react";
import { Container, Carousel, Accordion } from "react-bootstrap";
import { useParams, useNavigate  } from "react-router-dom";
import { productList } from "../data/data";
import "./product.css";
import { ReactSketchCanvas } from "react-sketch-canvas";

function Canvas() {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("#ffffff");

  const handleStrokeColorChange = (e) => {
    setStrokeColor(e.target.value);
  };

  const handleCanvasColorChange = (e) => {
    setCanvasColor(e.target.value);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleStrokeWidthChange = (e) => {
    setStrokeWidth(e.target.value);
    setEraserWidth(e.target.value);
  };

  return (
    <div className="d-flex flex-column gap-2 p-2" id="canvas">
      <h5>Tools</h5>
      <div className="d-flex gap-2 align-items-center">
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          disabled={!eraseMode}
          onClick={handlePenClick}
        >
          Pen
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          disabled={eraseMode}
          onClick={handleEraserClick}
        >
          Eraser
        </button>
        <div>
          <label htmlFor="strokeWidth" className="form-label">
            Stroke width
          </label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="30"
            step="1"
            id="strokeWidth"
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
          />
        </div>
        <div className="vr" />
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleUndoClick}
        >
          Undo
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleRedoClick}
        >
          Redo
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => {
            canvasRef.current
              .exportImage("png")
              .then(data => {
                sessionStorage.setItem("canvas", data);
              })
              .catch(err => {
                console.log(err);
              })
          }}
        >
          Save
        </button>
      </div>
      <div className="d-flex gap-2 align-items-center">
      <label htmlFor="color">Stroke color</label>
        <input
          type="color"
          value={strokeColor}
          onChange={handleStrokeColorChange}
        />
        <label htmlFor="color">Canvas color</label>
        <input
          type="color"
          value={canvasColor}
          onChange={handleCanvasColorChange}
        />
      </div>
      <hr></hr>
      <h5>Canvas</h5>
      <ReactSketchCanvas 
        width="800px"
        height="500px"
        ref={canvasRef}
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
        strokeColor={strokeColor}
        canvasColor={canvasColor}
      />
    </div>
  );
}

function Product() {
  const navigate = useNavigate();
  let back = "/explore";
  let requestPath = "/request";
  const {id} = useParams();
  const product = productList.find(item => item.id===parseInt(id));
  let imgPath = product.cover;

  function Features() {
    const features = product.features.map( (feat, index) =>
      <li key={"f-"+index}>{feat}</li>
    )
    return (
      <>
        <h6>Features</h6>
        <ul>{features}</ul>
      </>
    )
  }

  return (
    <section id="details">
      <Container fluid className="p-0 my-5">
        <div>
            <button onClick={() => navigate(back)} className="btn dark">&lt; Back</button>
        </div>

        <section className="d-flex flex-row" id="product-details">
          <div className="right text-center">
            <Carousel className="mt-4">
              <Carousel.Item interval={5000}>
                <img
                  src={"../" + imgPath}
                  className="d-block h-100"
                  alt="..."
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="px-5 left" id="detail-section">
            <div className="top-90">
              <h2 className="fw-bold text-center title mb-4">{product.title}</h2>
              <h6 className="mb-4">
                By: {product.artist}
                <span className="float-end">Base Price: ${product.price}</span>
              </h6>
              <p className="mb-4">{product.description}</p>
              <Features className="mb-4"/>
            </div>
            <div className="text-center">
              <button className="btn dark" onClick={() => navigate(requestPath)}>Request Now</button>
            </div>
          </div>
        </section>
      </Container>
      <Container fluid className="mb-5">
        <h4 style={{color: "#424C7F", fontWeight: "bold"}}>Feeling Creative?</h4>
        <p>Draw your thoughts and we'll do our best to match your vision. When you're done, save the canvas and then 'request now' above</p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Drawing Canvas</Accordion.Header>
            <Accordion.Body className="d-flex justify-content-center mb-4">
              <Canvas/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  )
}

export default Product;