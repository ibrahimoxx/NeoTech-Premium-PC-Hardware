import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';
import { ChatCircleDots, X, PaperPlaneTilt, Robot, User } from 'phosphor-react';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bienvenue chez NeoTech ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");

    // Simple Auto-response logic
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        text: getBotResponse(inputValue), 
        isBot: true 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase();
    if (text.includes("prix") || text.includes("combien")) return "Nos prix dépendent de votre configuration. Utilisez notre Configurateur PC pour une estimation précise !";
    if (text.includes("config") || text.includes("pc")) return "Je vous recommande d'essayer notre Configurateur PC Interactif pour choisir vos composants.";
    if (text.includes("contact") || text.includes("aide")) return "Vous pouvez nous contacter directement via la page Contact ou par téléphone au +212 589 555 300.";
    if (text.includes("livraison")) return "Nous livrons partout au Maroc sous 24h à 48h.";
    return "C'est une excellente question ! Je vous invite à contacter l'un de nos experts techniques pour plus de détails.";
  };

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'active' : ''}`}>
      {/* Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} weight="bold" /> : <ChatCircleDots size={32} weight="duotone" />}
      </button>

      {/* Chat Window */}
      <div className="chatbot-window">
        <div className="chatbot-header">
          <div className="d-flex align-items-center gap-2 text-white">
            <div className="bot-avatar">
              <Robot size={22} weight="duotone" />
            </div>
            <div>
              <div className="fw-bold small">Support NeoTech</div>
              <div className="d-flex align-items-center gap-1">
                <span className="online-dot"></span>
                <span className="text-muted" style={{fontSize: '10px'}}>En ligne</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-messages" ref={scrollRef}>
          {messages.map(msg => (
            <div key={msg.id} className={`message-bubble ${msg.isBot ? 'bot' : 'user'}`}>
              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form className="chatbot-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Écrivez votre message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
};
