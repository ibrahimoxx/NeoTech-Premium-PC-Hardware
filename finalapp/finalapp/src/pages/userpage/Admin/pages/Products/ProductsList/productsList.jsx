import React from "react";
import "./ProductList.css";

export const ProductsList = () => {
  return (
    <div className="ProductsList">
      <div className="ProductsListHeader">
        <div className="ProductsListTitle">
          <h1 className="fw-light text">Trouver un produit : </h1>
        </div>
        <div className="ProductsListSearchBar">
          <input type="text" className="form-control border border-dark" />
        </div>
      </div>
    </div>
  );
};
