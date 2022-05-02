import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Card from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
      </React.Fragment>
    );
  }
}
