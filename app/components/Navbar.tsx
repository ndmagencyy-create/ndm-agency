"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RefObject, useState, useRef, useEffect } from "react";

interface NavbarProps {
  logoRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ logoRef }: NavbarProps) {
  const links = ["Accueil", "À propos de NDM", "Services", "Portfolio", "Contact"];
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLogoRef = useRef<HTMLDivElement>(null);
  const mobileLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRef = () => {
      if (window.innerWidth >= 768) {
        if (logoRef && typeof logoRef === 'object') {
          // @ts-ignore
          logoRef.current = desktopLogoRef.current;
        }
      } else {
        if (logoRef && typeof logoRef === 'object') {
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
    return `/${link.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      {/* Desktop */}
      <div className="hidden md:flex justify-center items-center px-12 py-4">
        <div className="flex items-center justify-center space-x-10">
          {links.slice(0, 2).map((link, i) => {
            const href = formatHref(link);
            const isActive = pathname === href;
            return (
              <Link key={i} href={href}>
                <motion.span
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`inline-block cursor-pointer font-medium text-white relative transition-all duration-300 ${
                    isActive ? "text-green-400" : ""
                  }`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}

          <Link href="/">
            <motion.div
              ref={desktopLogoRef}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mx-6 cursor-pointer"
            >
              <Image src="/monlogo.png" alt="NDM Logo" width={120} height={120} priority />
            </motion.div>
          </Link>

          {links.slice(2).map((link, i) => {
            const href = formatHref(link);
            const isActive = pathname === href;
            return (
              <Link key={i} href={href}>
                <motion.span
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`inline-block cursor-pointer font-medium text-white relative transition-all duration-300 ${
                    isActive ? "text-green-400" : ""
                  }`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center px-6 py-3">
        <Link href="/">
          <motion.div
            ref={mobileLogoRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Image src="/monlogo.png" alt="NDM Logo" width={100} height={100} priority />
          </motion.div>
        </Link>

        <div className="h-6 border-l border-white/30 mx-4"></div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-between w-6 h-5">
          <span className={`block h-[2px] w-full bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-[2px] w-full bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-full bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md py-6 flex flex-col items-center space-y-6"
        >
          {links.map((link, i) => {
            const href = formatHref(link);
            const isActive = pathname === href;
            return (
              <Link key={i} href={href} onClick={() => setMenuOpen(false)}>
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className={`text-white font-medium text-xl ${isActive ? "text-green-400" : ""}`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}