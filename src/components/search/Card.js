import React from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";

function ProductCard({product}) {
  const navigate = useNavigate();
  let path = "/explore/" + product.id;
  let imgPath = process.env.PUBLIC_URL + product.cover;

  return(
    <>
      <div className="col-auto mb-3">
        <div className="card h-100 shadow-sm " id={product.id}>
          <img className="card-img-top" src={imgPath} alt=""/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-3 text-muted text-start">
              {product.artist}
              <span className="float-end">{"$" + product.price}</span>
            </h6>
            <div className="text-center mt-auto">
              <button onClick={() => navigate(path)} className="btn dark">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;