import React, { useState } from "react";
import "./configurator.css";
import { Cpu, HardDrive, Monitor, Nut, Info, Plugs, Desktop } from "phosphor-react";
import { SupportCard } from "../components/SupportCard/SupportCard";

const CONFIG_DATA = {
  cpu: {
    title: "Processeur (CPU)",
    icon: Cpu,
    options: [
      { id: "i9", name: "Intel Core i9-14900K", price: 6499, specs: "24 Cores / 32 Threads, 6.0 GHz Turbo" },
      { id: "r9", name: "AMD Ryzen 9 7950X", price: 5999, specs: "16 Cores / 32 Threads, 5.7 GHz Boost" },
      { id: "i7", name: "Intel Core i7-14700K", price: 4299, specs: "20 Cores / 28 Threads, 5.6 GHz Turbo" },
    ]
  },
  ram: {
    title: "Mémoire (RAM)",
    icon: Nut,
    options: [
      { id: "dom64", name: "Corsair Dominator 64GB DDR5", price: 3499, specs: "6000MT/s CL30, RGB Sync" },
      { id: "ven32", name: "Corsair Vengeance 32GB DDR5", price: 1699, specs: "5600MT/s, Low Profile" },
    ]
  },
  gpu: {
    title: "Carte Graphique (GPU)",
    icon: Nut,
    options: [
      { id: "rtx4090", name: "NVIDIA RTX 4090 24GB", price: 21999, specs: "DLSS 3.5, Ada Lovelace Architecture" },
      { id: "rtx4080", name: "NVIDIA RTX 4080 Super", price: 14499, specs: "DLSS 3.5, 16GB GDDR6X" },
      { id: "rx7900", name: "AMD Radeon RX 7900 XTX", price: 11999, specs: "24GB GDDR6, FSR 3.0 Support" },
    ]
  },
  motherboard: {
    title: "Carte Mère",
    icon: Desktop,
    options: [
      { id: "z790ex", name: "ROG Maximus Z790 Extreme", price: 10999, specs: "Watercooling-ready, Thunderbolt 4" },
      { id: "z790h", name: "ROG Strix Z790-H Gaming", price: 3499, specs: "PCIe 5.0, Wi-Fi 6E, DDR5" },
    ]
  },
  storage: {
    title: "Stockage (SSD)",
    icon: HardDrive,
    options: [
      { id: "990pro", name: "Samsung 990 Pro 2TB", price: 1899, specs: "7450MB/s Read, PCIe 4.0 NVMe" },
      { id: "sn850x", name: "WD Black SN850X 1TB", price: 999, specs: "7300MB/s Read, PCIe 4.0 NVMe" },
    ]
  },
  psu: {
    title: "Alimentation",
    icon: Plugs,
    options: [
      { id: "ax1600", name: "Corsair AX1600i Titanium", price: 6299, specs: "1600W, 80+ Titanium, Digital Control" },
      { id: "rm1000", name: "Corsair RM1000x Gold", price: 1899, specs: "1000W, 80+ Gold, Fully Modular" },
    ]
  }
};

export const Configurator = () => {
  const [selections, setSelections] = useState({
    cpu: CONFIG_DATA.cpu.options[0],
    ram: CONFIG_DATA.ram.options[1],
    gpu: CONFIG_DATA.gpu.options[1],
    motherboard: CONFIG_DATA.motherboard.options[1],
    storage: CONFIG_DATA.storage.options[0],
    psu: CONFIG_DATA.psu.options[1],
  });

  const [ordered, setOrdered] = useState(false);

  const handleSelect = (category, option) => {
    setSelections(prev => ({ ...prev, [category]: option }));
    setOrdered(false);
  };

  const handleOrder = () => {
    setOrdered(true);
    // In a real app, this would send data to the backend
  };

  const totalPrice = Object.values(selections).reduce((sum, item) => sum + item.price, 0);

  if (ordered) {
    return (
      <div className="configurator-page d-flex align-items-center justify-content-center" style={{minHeight: '60vh'}}>
        <div className="modern-card p-5 text-center fade-in" style={{maxWidth: '500px'}}>
          <div className="mb-4">
            <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-block">
              <Nut size={64} weight="duotone" className="text-primary" />
            </div>
          </div>
          <h2 className="fw-bold mb-3">Commande Reçue !</h2>
          <p className="text-muted mb-4">
            Votre configuration personnalisée a été enregistrée. Un expert NeoTech vous contactera sous peu pour finaliser les détails.
          </p>
          <button className="modern-btn w-100" onClick={() => setOrdered(false)}>
            Modifier la configuration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="configurator-page">
      <div className="config-header fade-in">
        <h2 className="display-4 fw-bold">Configurez votre PC de Rêve</h2>
        <p className="text-muted">Personnalisez chaque composant avec des spécifications détaillées.</p>
      </div>

      <div className="config-grid">
        <div className="config-steps">
          {Object.entries(CONFIG_DATA).map(([key, category], index) => (
            <div key={key} className="modern-card config-step fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="d-flex align-items-center gap-3 mb-2">
                <category.icon size={32} weight="duotone" className="text-primary" />
                <h4 className="m-0">{category.title}</h4>
              </div>
              
              <div className="component-options">
                {category.options.map((option) => (
                  <div 
                    key={option.id} 
                    className={`modern-card option-card ${selections[key].id === option.id ? 'active' : ''}`}
                    onClick={() => handleSelect(key, option)}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="m-0 fw-bold">{option.name}</h6>
                      <div className="text-primary fw-bold small">{option.price.toLocaleString()} DH</div>
                    </div>
                    <div className="specs-detail">
                      <Info size={14} className="me-1 opacity-50" />
                      {option.specs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="modern-card config-sidebar fade-in">
          <h4 className="mb-4">Récapitulatif</h4>
          <div className="d-flex flex-column gap-4">
            {Object.entries(selections).map(([key, item]) => (
              <div key={key} className="selection-summary-item">
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-muted small text-uppercase">{CONFIG_DATA[key].title.split(' ')[0]}</span>
                  <span className="fw-bold small">{item.price.toLocaleString()} DH</span>
                </div>
                <div className="small text-truncate">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="total-bar">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="fw-bold opacity-75">Estimation Totale</span>
              <h3 className="text-primary m-0 fw-bold">{totalPrice.toLocaleString()} DH</h3>
            </div>
            <button className="modern-btn w-100 py-3 mb-3" onClick={handleOrder}>Commander cette Config</button>
            <button className="btn btn-outline-secondary w-100 btn-sm opacity-50 border-0">Exporter en PDF</button>
          </div>
          
          <SupportCard />
        </aside>
      </div>
    </div>
  );
};
