import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./adminInterface.css";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/Products/Products";
import { Commandes } from "./pages/Commandes";
import { Demandes } from "./pages/Demandes";
import { Employees } from "./pages/Employees";

import { Users as UsersIcon, Package, ShoppingCart, ChatCenteredText, IdentificationCard } from "phosphor-react";

export const AdminInterface = () => {
  const [pageState, setPageState] = useState("Utilisateurs");

  const NAV_ITEMS = [
    { name: "Utilisateurs", icon: UsersIcon, component: <Users /> },
    { name: "Produits", icon: Package, component: <Products /> },
    { name: "Commandes", icon: ShoppingCart, component: <Commandes /> },
    { name: "Demandes", icon: ChatCenteredText, component: <Demandes /> },
    { name: "Employees", icon: IdentificationCard, component: <Employees /> },
  ];

  const activeItem = NAV_ITEMS.find(item => item.name === pageState);

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.name}
            className={`admin-nav-item ${pageState === item.name ? 'active' : ''}`}
            onClick={() => setPageState(item.name)}
          >
            <item.icon size={22} weight="duotone" />
            <span>{item.name}</span>
          </div>
        ))}
      </aside>

      <main className="admin-main-content">
        <header className="admin-page-header fade-in">
          <h2>Gestion des {pageState}</h2>
          <p>Consultez et gérez les données relatives aux {pageState.toLowerCase()}.</p>
        </header>

        <section className="admin-data-container fade-in" style={{animationDelay: '0.2s'}}>
          <div className="modern-card p-4">
            {activeItem?.component}
          </div>
        </section>
      </main>
    </div>
  );
};
