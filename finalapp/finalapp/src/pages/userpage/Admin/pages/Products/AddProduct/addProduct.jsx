import React from "react";
import "./addProduct.css";

export const AddProduct = () => {
  return (
    <div className="AddProduct">
      <form>
        <div class="row">
          <div class="col-md-12 mb-4">
            <div class="form-outline">
              <label class="form-label" for="firstName">
                Image
              </label>
              <input
                type="file"
                class="form-control form-control-s w-50 border border-dark"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="mb-4 pb-2">
            <div class="form-outline">
              <label class="form-label">Code référentiel</label>
              <input
                type="text"
                class="form-control form-control-lg w-50 border border-dark"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="mb-4 pb-2">
            <div class="form-outline">
              <label class="form-label">Nom</label>
              <input
                type="text"
                class="form-control form-control-lg w-50 border border-dark"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-4 pb-2">
            <div class="form-outline">
              <label class="form-label">Description</label>
              <textarea class="form-control form-control-lg w-75 border border-dark" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-4 pb-2">
            <div class="form-outline">
              <label class="form-label">Prix unitaire</label>
              <input
                type="number"
                class="form-control form-control-lg w-50 border border-dark"
              />
            </div>
          </div>
        </div>
        <div>
          <input class="btn btn-dark pb-2" type="submit" value="Ajouter" />
        </div>
      </form>
    </div>
  );
};
