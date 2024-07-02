import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./search/explore.css";
import ProductCard from "./search/Card";
import { productList } from "../data/data";
import { mediums, styles, formats } from "../data/filters";
import { PaginationControl } from "react-bootstrap-pagination-control";

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
  // search
  const [searchField, setSearchField] = useState("");

  const filteredList = productList.filter(
    product => {
      return (product.title.toLowerCase().includes(searchField.toLowerCase()));
    }
  )

  // pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  let currentItems = filteredList.slice(firstItemIndex, lastItemIndex);

  const search = (e) => {
    setPage(1);
    setSearchField(e.target.value);
  }

  function SearchResults({filteredList}) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentItems.map((product, index) => (
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
          <div className="card side-filter">
            <div className="card p-3 mb-3">
              <Form>
                <Form.Group>
                  <Form.Control type="search" id="searchfield" placeholder="Search" onChange={search}/>
                </Form.Group>
              </Form>
            </div>
            <h6 className="px-2 title">Filter results</h6>
            <div className="card px-2 m-2">
              <Form>
                <Form.Group className="my-2">
                  <Form.Label>Medium</Form.Label>
                  {mediums.map((medium, index) => (
                    <Form.Check className="text-muted" type="checkbox" id={"med-"+index} key={"med-"+index} label={medium} />
                  ))}
                </Form.Group>
              </Form>
            </div>
            <div className="card px-2 m-2">
              <Form>
                <Form.Group className="my-2">
                  <Form.Label>Price</Form.Label>
                  <div className="d-flex">
                    <Form.Control className="me-2" id="price-min" type="number" placeholder="min" min={0} max={1000}/>
                    <Form.Control id="price-max" type="number" placeholder="max" min={0} max={1000}/>
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="card px-2 m-2">
              <Form>
                <Form.Group className="my-2">
                  <Form.Label>Style</Form.Label>
                  {styles.map((style, index) => (
                    <Form.Check className="text-muted" type="checkbox" id={"style-"+index} key={"style-"+index} label={style} />
                  ))}
                </Form.Group>
              </Form>
            </div>
            <div className="card px-2 m-2">
              <Form>
                <Form.Group className="my-2">
                  <Form.Label>Format</Form.Label>
                  {formats.map((format, index) => (
                    <Form.Check className="text-muted" type="checkbox" id={"form-"+index} key={"form-"+index} label={format} />
                  ))}
                </Form.Group>
              </Form>
            </div>
          </div>
          </div>
          <div className="p-2 left" id="results">
            <PaginationControl
              page={page}
              between={1}
              total={filteredList.length}
              limit={9}
              changePage={(page) => {
                setPage(page)
              }}
            />
            <SearchResults filteredList={filteredList}/>
            <PaginationControl
              page={page}
              between={1}
              total={filteredList.length}
              limit={9}
              changePage={(page) => {
                setPage(page)
              }}
            />
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
