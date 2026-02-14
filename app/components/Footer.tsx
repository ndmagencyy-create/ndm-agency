"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-12"> {/* py-4 réduit la hauteur */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Infos et droits */}
        <p className="text-black text-center md:text-left text-base">
          © {new Date().getFullYear()} NDM Agency. Tous droits réservés.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/ndm-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/icons/instagram.avif"
              alt="Instagram NDM Agency"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
