"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RefObject, useState, useEffect } from "react";

interface PageTransitionLogoProps {
  show: boolean;
  logoRef: RefObject<HTMLDivElement | null>;
}

export default function PageTransitionLogo({ show, logoRef }: PageTransitionLogoProps) {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0, width: 120, height: 120 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  // Nouvel état pour vérifier si les coordonnées sont prêtes
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    if (show && logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      
      if (rect.width > 0 && rect.height > 0) {
        setLogoPos({ 
            x: rect.left, 
            y: rect.top, 
            width: rect.width, 
            height: rect.height 
        });
        setIsReady(true); // On confirme que les coordonnées sont capturées
      }
    } else if (!show) {
      // On réinitialise quand l'animation est terminée
      setIsReady(false);
    }
  }, [show, logoRef]);

  return (
    <AnimatePresence>
      {/* On n'affiche le logo que si "show" est vrai ET que "isReady" est vrai */}
      {show && isReady && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          initial={{
            x: logoPos.x,
            y: logoPos.y,
            scale: 1,
            rotate: 0,
          }}
          animate={{
            x: windowSize.width / 2 - logoPos.width / 2,
            y: windowSize.height / 2 - logoPos.height / 2,
            scale: 1.5, 
            rotate: 360, 
          }}
          exit={{
            x: logoPos.x,
            y: logoPos.y,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/monlogo.png"
            alt="NDM Logo"
            width={logoPos.width}
            height={logoPos.height}
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}