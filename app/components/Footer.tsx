"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 shadow-sm py-2 md:py-1.5 mt-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Conteneur principal avec alignement parfait */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

          {/* Copyright : Typographie épurée */}
          <div className="order-2 md:order-1">
            <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-light">
              © {new Date().getFullYear()} <span className="font-semibold text-black">NDM Agency</span> — ÉLÉGANCE DIGITALE
            </p>
          </div>

          {/* Logo Instagram : Plus grand et pur */}
          <div className="order-1 md:order-2 flex items-center">
            <a
              href="https://instagram.com/ndm-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-all duration-500"
            >
              <span className="hidden md:block text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-tighter uppercase font-medium">
                Suivez-nous
              </span>
              <div className="relative w-10 h-10 md:w-11 md:h-11 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/icons/instagram.avif"
                  alt="Instagram NDM Agency"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}