"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundStars from "./components/BackgroundStars";
import ChatBotClient from "./components/ChatBotClient";
import PageTransitionLogo from "./components/PageTransitionLogo";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(true);

  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Début de la transition
    setShowTransition(true);
    setDisplayChildren(false); // masquer le contenu dès le début

    // Durée exacte de l'animation du logo (1s pour mobile)
    const timer = setTimeout(() => {
      setShowTransition(false);
      setDisplayChildren(true); // montrer le contenu dès que le logo est revenu
    }, 1000); // <-- 1 seconde = durée totale du logo aller-retour

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="fr">
      <body className="bg-black text-white overflow-x-hidden relative min-h-screen flex flex-col">

        {/* Background global */}
        <div className="fixed inset-0 -z-10">
          <BackgroundStars />
        </div>

        {/* Navbar */}
        <Navbar logoRef={logoRef} />

        {/* Contenu principal */}
        <main className="pt-28 relative z-10 flex-1">
          {displayChildren && children}
        </main>

        {/* Footer uniquement après la transition */}
        {displayChildren && <Footer />}

        {/* ChatBot */}
        <ChatBotClient />

        {/* Transition du logo */}
        <PageTransitionLogo show={showTransition} logoRef={logoRef} />
      </body>
    </html>
  );
}