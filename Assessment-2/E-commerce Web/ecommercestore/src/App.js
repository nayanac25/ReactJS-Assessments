import React, { Component } from "react";
import Products from "./Products";
import "./App.css";
import {
  allproductListArr,
  phones,
  shoes,
  watches,
  clothes,
} from "./ProductList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showProducts: true,
      showPhones: false,
      showShoes: false,
      showWatches: false,
      showClothes: false,
    };
  }
  render() {
    return (
      <>
        <div className="body">
          <h1 className="title">E-Commerce Store</h1>

          <div className="container" style={{ width: "1200px" }}>
            <div className="category-buttons">
              <button
                className="myBtn"
                onClick={() => {
                  this.setState({
                    showProducts: true,
                    showPhones: false,
                    showShoes: false,
                    showWatches: false,
                    showClothes: false,
                  });
                }}
              >
                All Products
              </button>

              <button
                className="myBtn"
                onClick={() => {
                  this.setState({
                    showProducts: false,
                    showPhones: true,
                    showShoes: false,
                    showWatches: false,
                    showClothes: false,
                  });
                }}
              >
                Phones
              </button>

              <button
                className="myBtn"
                onClick={() => {
                  this.setState({
                    showProducts: false,
                    showPhones: false,
                    showShoes: true,
                    showWatches: false,
                    showClothes: false,
                  });
                }}
              >
                Shoes
              </button>

              <button
                className="myBtn"
                onClick={() => {
                  this.setState({
                    showProducts: false,
                    showPhones: false,
                    showShoes: false,
                    showWatches: true,
                    showClothes: false,
                  });
                }}
              >
                Watches
              </button>

              <button
                className="myBtn"
                onClick={() => {
                  this.setState({
                    showProducts: false,
                    showPhones: false,
                    showShoes: false,
                    showWatches: false,
                    showClothes: true,
                  });
                }}
              >
                Clothes
              </button>
            </div>
            <div className="row">
              {this.state.showProducts === true ? (
                allproductListArr.map((val, index) => {
                  return (
                    <Products
                      key={index}
                      image={val.image}
                      name={val.name}
                      price={val.price}
                      oldPrice={val.oldPrice}
                      offer={val.offer}
                    />
                  );
                })
              ) : this.state.showPhones === true ? (
                phones.map((val) => {
                  return (
                    <Products
                      image={val.image}
                      name={val.name}
                      price={val.price}
                      oldPrice={val.oldPrice}
                      offer={val.offer}
                    />
                  );
                })
              ) : this.state.showShoes === true ? (
                shoes.map((val) => {
                  return (
                    <Products
                      image={val.image}
                      name={val.name}
                      price={val.price}
                      oldPrice={val.oldPrice}
                      offer={val.offer}
                    />
                  );
                })
              ) : this.state.showWatches === true ? (
                watches.map((val) => {
                  return (
                    <Products
                      image={val.image}
                      name={val.name}
                      price={val.price}
                      oldPrice={val.oldPrice}
                      offer={val.offer}
                    />
                  );
                })
              ) : this.state.showClothes === true ? (
                clothes.map((val) => {
                  return (
                    <Products
                      image={val.image}
                      name={val.name}
                      price={val.price}
                      oldPrice={val.oldPrice}
                      offer={val.offer}
                    />
                  );
                })
              ) : (
                <p>No Products Found</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
