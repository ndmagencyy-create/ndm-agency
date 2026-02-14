"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RefObject } from "react";

interface NavbarProps {
  logoRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ logoRef }: NavbarProps) {
  const links = ["Accueil", "À propos de NDM", "Services", "Portfolio", "Contact"];
  const pathname = usePathname();

  const formatHref = (link: string) => {
    if (link === "Accueil") return "/";
    if (link === "À propos de NDM") return "/about";
    return `/${link.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <nav className="flex justify-center items-center px-12 py-4 fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="flex items-center justify-center space-x-10">

        {/* Liens de gauche */}
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

        {/* LOGO interactif */}
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

        {/* Liens de droite */}
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
    </nav>
  );
}
