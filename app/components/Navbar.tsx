"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RefObject, useState } from "react";

interface NavbarProps {
  logoRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ logoRef }: NavbarProps) {
  const links = ["Accueil", "À propos de NDM", "Services", "Portfolio", "Contact"];
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link key={i} href={href} passHref>
                <motion.span
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`cursor-pointer font-medium text-white relative transition-all duration-300 ${isActive ? "text-green-400" : ""}`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}

          <Link href="/" passHref>
            <motion.div
              ref={logoRef}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mx-6 cursor-pointer"
            >
              <Image
                src="/monlogo.png"
                alt="NDM Logo"
                width={120}
                height={120}
                priority
              />
            </motion.div>
          </Link>

          {links.slice(2).map((link, i) => {
            const href = formatHref(link);
            const isActive = pathname === href;
            return (
              <Link key={i} href={href} passHref>
                <motion.span
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  className={`cursor-pointer font-medium text-white relative transition-all duration-300 ${isActive ? "text-green-400" : ""}`}
                >
                  {link}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center px-6 py-3 relative">
        {/* Menu burger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white z-50 focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
          <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
          <div className="w-6 h-0.5 bg-white transition-all duration-300" />
        </button>

        {/* Logo centré */}
        <Link href="/" passHref>
          <motion.div
            ref={logoRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <Image
              src="/monlogo.png"
              alt="NDM Logo"
              width={100}
              height={100}
              priority
            />
          </motion.div>
        </Link>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-4 space-y-4 z-40"
          >
            {links.map((link, i) => {
              const href = formatHref(link);
              const isActive = pathname === href;
              return (
                <Link key={i} href={href} passHref>
                  <motion.span
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`cursor-pointer font-medium text-white text-lg ${isActive ? "text-green-400" : ""}`}
                  >
                    {link}
                  </motion.span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
}