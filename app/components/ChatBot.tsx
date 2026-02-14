"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour 👋 Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.reply },
        ]);
        setIsTyping(false);
      }, 1000); // effet "NDM écrit..."
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Erreur serveur." },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer shadow-2xl border border-green-400/40 z-50"
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
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-black/90 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-green-500/20 flex items-center gap-4 text-white font-semibold">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="text-3xl">🤖</span>
              </div>
              <div>
                <div>NDM Assistant</div>
                <div className="text-xs text-green-400">En ligne</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-white">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-3 rounded-xl max-w-[80%] text-sm ${
                    msg.role === "assistant"
                      ? "bg-white/10"
                      : "bg-green-600 text-white ml-auto"
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="bg-white/10 p-3 rounded-xl text-sm w-fit">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-medium">
                      NDM écrit
                    </span>
                    <motion.span
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                    >
                      ...
                    </motion.span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-green-500/20 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 outline-none text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-green-500"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition"
              >
                Envoyer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
