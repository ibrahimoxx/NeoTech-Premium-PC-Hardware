import React, { useState } from "react";
import "./Products.css";
import { ProductsList } from "./ProductsList/productsList";
import { AddProduct } from "./AddProduct/addProduct";

export const Products = () => {
  const [pageState, setPageState] = useState("liste");

  const handleListeBtn = () => {
    setPageState("liste");
  };

  const handleAddBtn = () => {
    setPageState("add");
  };

  return (
    <div className="Products border border-dark">
      <div className="operations">
        <input
          type="button"
          value="liste produits"
          className="btn btn-dark"
          onClick={handleListeBtn}
        />
        <input
          type="button"
          value="ajouter produit"
          className="btn btn-dark"
          onClick={handleAddBtn}
        />
      </div>
      <div className="productsContent">
        {pageState === "liste" ? (
          <ProductsList />
        ) : pageState === "add" ? (
          <AddProduct />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
