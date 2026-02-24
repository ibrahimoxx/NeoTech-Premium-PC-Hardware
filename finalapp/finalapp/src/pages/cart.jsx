import "./cart.css";
import { Trash, Cpu, Plugs } from "phosphor-react";

export const Cart = () => {
  return (
    <div className="cart-page">
      <h2 className="cart-title fade-in">Votre Panier</h2>
      
      <div className="cart-container">
        <div className="cart-items">
          {/* Example Item 1 */}
          <div className="modern-card cart-item fade-in">
            <div className="cart-item-img">
              <Cpu size={48} weight="duotone" />
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-title">Intel Core i9-14900K</h3>
              <p className="text-muted small">Processeur • Socket LGA1700</p>
              <div className="cart-item-price">6,499.00 DH</div>
            </div>
            <button className="btn btn-link text-danger p-0">
              <Trash size={24} />
            </button>
          </div>

          {/* Example Item 2 */}
          <div className="modern-card cart-item fade-in">
            <div className="cart-item-img">
              <Plugs size={48} weight="duotone" />
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-title">NVIDIA RTX 4090 24GB</h3>
              <p className="text-muted small">Graphic Card • GDDR6X</p>
              <div className="cart-item-price">21,999.00 DH</div>
            </div>
            <button className="btn btn-link text-danger p-0">
              <Trash size={24} />
            </button>
          </div>
        </div>

        <aside className="modern-card cart-summary fade-in">
          <h3 className="mb-4">Résumé</h3>
          <div className="summary-row">
            <span>Sous-total</span>
            <span>28,498.00 DH</span>
          </div>
          <div className="summary-row">
            <span>Livraison</span>
            <span className="text-success">Gratuit</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>28,498.00 DH</span>
          </div>
          <button className="modern-btn w-100 py-3 mt-4">
            Passer à la caisse
          </button>
        </aside>
      </div>
    </div>
  );
};
