"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RefObject, useState, useRef, useEffect } from "react";

interface NavbarProps {
  logoRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ logoRef }: NavbarProps) {
  const links = ["Accueil", "À propos de NDM", "Services", "Notre Impact", "Contact"];
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const setChatbotVisibility = (visible: boolean) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const event = new CustomEvent("toggle-chatbot", { detail: { visible } });
      window.dispatchEvent(event);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      setChatbotVisibility(false);
      document.body.style.overflow = "hidden";
    } else {
      setChatbotVisibility(true);
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useEffect(() => {
    setChatbotVisibility(false);
    const timer = setTimeout(() => {
      if (!menuOpen) setChatbotVisibility(true);
    }, 2200); 
    return () => clearTimeout(timer);
  }, [pathname]);

  const desktopLogoRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRef = () => {
      if (window.innerWidth >= 768) {
        if (logoRef?.current !== undefined) {
          // @ts-ignore
          logoRef.current = desktopLogoRef.current;
        }
      } else {
        if (logoRef?.current !== undefined) {
          // @ts-ignore
          logoRef.current = mobileLogoRef.current;
        }
      }
    };
    updateRef();
    window.addEventListener("resize", updateRef);
    return () => window.removeEventListener("resize", updateRef);
  }, [logoRef]);

  const formatHref = (link: string) => {
    if (link === "Accueil") return "/";
    if (link === "À propos de NDM") return "/about";
    if (link === "Notre Impact") return "/portfolio"; 
    return `/${link.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex justify-center items-center px-12 py-4">
        <div className="flex items-center space-x-10">
          {links.slice(0, 2).map((link, i) => {
            const isActive = pathname === formatHref(link);
            return (
              <Link key={i} href={formatHref(link)}>
                <motion.span
                  animate={{ 
                    scale: isActive ? 1.15 : 1,
                    color: isActive ? "#4ade80" : "#ffffff" 
                  }}
                  whileHover={{ scale: 1.1, color: "#4ade80" }}
                  className={`inline-block cursor-pointer font-medium transition-colors ${isActive ? "font-bold" : ""}`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}
          
          <Link href="/">
            <motion.div 
              ref={desktopLogoRef} 
              className="mx-6 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/monlogo.png" alt="Logo" width={110} height={110} priority />
            </motion.div>
          </Link>

          {links.slice(2).map((link, i) => {
            const isActive = pathname === formatHref(link);
            return (
              <Link key={i} href={formatHref(link)}>
                <motion.span
                  animate={{ 
                    scale: isActive ? 1.15 : 1,
                    color: isActive ? "#4ade80" : "#ffffff" 
                  }}
                  whileHover={{ scale: 1.1, color: "#4ade80" }}
                  className={`inline-block cursor-pointer font-medium transition-colors ${isActive ? "font-bold" : ""}`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MOBILE NAVBAR (AUCUN CHANGEMENT) */}
      <div className="flex md:hidden justify-between items-center px-6 py-3">
        <Link href="/"><div ref={mobileLogoRef}><Image src="/monlogo.png" alt="Logo" width={80} height={80} priority /></div></Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-[100] outline-none h-10 w-10 flex flex-col justify-center items-center gap-1.5">
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 h-screen w-screen bg-black/95 backdrop-blur-2xl z-[60] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {links.map((link, i) => (
                <Link key={i} href={formatHref(link)} onClick={() => setMenuOpen(false)}>
                  <span className={`text-4xl font-bold ${pathname === formatHref(link) ? "text-green-400" : "text-white"}`}>{link}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}