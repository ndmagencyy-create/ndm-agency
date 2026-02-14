"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour 👋 Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Écouteur pour masquer le chatbot via un événement personnalisé
  useEffect(() => {
    const handleChatbotVisibility = (e: any) => {
      setIsVisible(e.detail.visible);
    };

    window.addEventListener("toggle-chatbot", handleChatbotVisibility);
    return () => window.removeEventListener("toggle-chatbot", handleChatbotVisibility);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setTimeout(() => {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Erreur serveur." }]);
      setIsTyping(false);
    }
  };

  // Si isVisible est faux, on ne rend RIEN (évite le flash)
  if (!isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer shadow-2xl border border-green-400/40 z-[40]"
      >
        <span className="text-3xl">🤖</span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-black/90 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[40]"
          >
            {/* ... (Header, Messages, Input : garde ton code actuel ici) ... */}
            <div className="p-4 border-b border-green-500/20 flex items-center gap-4 text-white font-semibold">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"><span className="text-3xl">🤖</span></div>
              <div><div>NDM Assistant</div><div className="text-xs text-green-400">En ligne</div></div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-white">
              {messages.map((msg, i) => (
                <div key={i} className={`p-3 rounded-xl max-w-[80%] text-sm ${msg.role === "assistant" ? "bg-white/10" : "bg-green-600 text-white ml-auto"}`}>{msg.content}</div>
              ))}
            </div>
            <div className="p-4 border-t border-green-500/20 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Message..." className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white outline-none" onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
              <button onClick={sendMessage} className="px-4 py-2 bg-green-600 text-white rounded-lg">Envoyer</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}