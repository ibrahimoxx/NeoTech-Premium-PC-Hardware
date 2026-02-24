import "./products.css";
import { Cpu, HardDrive, Monitor, Mouse, Plugs, SpeakerHigh } from "phosphor-react";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Intel Core i9-14900K", price: "649.00 DH", category: "Processeurs", icon: Cpu },
  { id: 2, name: "NVIDIA RTX 4090 24GB", price: "2,199.00 DH", category: "Cartes Graphiques", icon: Plugs },
  { id: 3, name: "Samsung 990 Pro 2TB", price: "189.00 DH", category: "Stockage", icon: HardDrive },
  { id: 4, name: "ASUS ROG Swift 32\" 4K", price: "899.00 DH", category: "Moniteurs", icon: Monitor },
  { id: 5, name: "Logitech G Pro X Superlight", price: "149.00 DH", category: "Périphériques", icon: Mouse },
  { id: 6, name: "Razer Nommo V2 Pro", price: "449.00 DH", category: "Audio", icon: SpeakerHigh },
];

export const Products = () => {
  return (
    <div className="products-page">
      <header className="page-header">
        <h2 className="fade-in">Nos Produits</h2>
        <p className="text-muted">Des composants de pointe pour des performances exceptionnelles.</p>
      </header>

      <div className="products-grid">
        {DUMMY_PRODUCTS.map((p) => (
          <div key={p.id} className="modern-card product-card">
            <div className="product-img-container">
              <p.icon size={64} weight="duotone" />
            </div>
            <div className="product-info">
              <span className="product-category">{p.category}</span>
              <h3 className="product-title">{p.name}</h3>
              <div className="product-price">{p.price}</div>
              <button className="modern-btn add-btn">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
