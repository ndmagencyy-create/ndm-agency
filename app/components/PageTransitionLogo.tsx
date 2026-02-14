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

  useEffect(() => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setLogoPos({ x: rect.left, y: rect.top, width: rect.width, height: rect.height });
    }
  }, [show, logoRef]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{
            x: logoPos.x,
            y: logoPos.y,
            scale: 1,
          }}
          animate={{
            x: window.innerWidth / 2 - logoPos.width / 2,
            y: window.innerHeight / 2 - logoPos.height / 2,
            scale: 2,
            rotateY: 720,
          }}
          exit={{
            x: logoPos.x,
            y: logoPos.y,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/monlogo.png"
            alt="NDM Logo"
            width={logoPos.width}
            height={logoPos.height}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
