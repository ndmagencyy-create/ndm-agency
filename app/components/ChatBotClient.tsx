"use client";

import dynamic from "next/dynamic";

// Import ChatBot côté client uniquement
const ChatBot = dynamic(() => import("./ChatBot"), { ssr: false });

export default function ChatBotClient() {
  return <ChatBot />;
}
