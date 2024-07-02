import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./search/explore.css";
import ProductCard from "./search/Card";
import { productList } from "../data/data";

function Title() {
  return (
    <section id="explore-title">
      <Container fluid className="p-0 mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Explore Artworks</h2>
          <p>We provide various types of bases, for you to customize to your own tastes!</p>
        </div>
      </Container>
    </section>
  );
}

function FacetedSearch() {
  const [searchField, setSearchField] = useState("");

  const filteredList = productList.filter(
    product => {
      return (product.title.toLowerCase().includes(searchField.toLowerCase()));
    }
  )

  const search = (e) => {
    setSearchField(e.target.value);
  }

  function SearchFacets() {
    return (
      <div className="card">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="search" placeholder="Search" onChange={search}/>
          </Form.Group>
        </Form>
      </div>
    );
  }

  function SearchResults({filteredList}) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredList.map((product, index) => (
          <ProductCard product={product} key={index}/>
        ))}
      </div>
    )
  }

  return (
    <section id="search-area" className="mt-4">
      <Container fluid className="p-0">
        <div className="d-flex flex-row">
          <div className="p-2 right" id="facets">
            <SearchFacets/>
          </div>
          <div className="p-2 left" id="results">
            <SearchResults filteredList={filteredList}/>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Explore() {
  return (
    <div>
      <Title />
      <FacetedSearch />
    </div>
  );
}

export default Explore;
