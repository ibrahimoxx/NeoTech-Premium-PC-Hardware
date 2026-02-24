import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { ChatBot } from "./components/ChatBot/ChatBot";

// Pages
import { Homepage } from "./pages/homepage/homepage";
import { Products } from "./pages/products/products";
import { Services } from "./pages/services/services";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import { UserPage } from "./pages/userpage/userpage";
import { Architecture } from "./pages/Architecture service/architecture";
import { Configurator } from "./pages/configurator/configurator";
import { AdminInterface } from "./pages/userpage/Admin/adminInterface";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/configurator" element={<Configurator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/admin" element={<AdminInterface />} />
        </Routes>
        <Footer />
        <ChatBot />
      </BrowserRouter>
    </div>
  );
}

export default App;
