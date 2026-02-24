import React from "react";
import "./Users.css";

export const Users = () => {
  return (
    <div className="Users border border-dark">
      <div className="usersTitle">
        <h1 className="fw-light">Trouver un utilisateur</h1>
      </div>
      <div className="searchBar d-flex align-items-center">
        <input
          type="text"
          placeholder="Trouver un utilisateur"
          className="w-50 form-control border border-dark"
        />
        <input className="btn btn-dark mx-2" type="button" value="chercher" />
      </div>
    </div>
  );
};
