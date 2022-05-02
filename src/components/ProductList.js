import React, { Component } from "react";
import { ProductConsumer } from "../context";

import Product from "./Product";
import Title from "./Title";

export default class ProductList extends Component {
  render() {
    return (
      // <Product />
      <React.Fragment>
        <div className="py-t">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
