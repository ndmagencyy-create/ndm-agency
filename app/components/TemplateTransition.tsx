"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface Props {
  logoRef: RefObject<HTMLDivElement | null>;
  onComplete: () => void;
}

export default function PageTransitionLogo({ logoRef, onComplete }: Props) {
  const [logoPos, setLogoPos] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    setLogoPos({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
  }, [logoRef]);

  if (!logoRef.current) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: logoPos.top,
        left: logoPos.left,
        width: logoPos.width,
        height: logoPos.height,
        zIndex: 100,
      }}
      initial={{ top: logoPos.top, left: logoPos.left, width: logoPos.width, height: logoPos.height, rotate: 0 }}
      animate={{
        top: "50%",
        left: "50%",
        width: 300,
        height: 300,
        x: "-50%",
        y: "-50%",
        rotate: 360,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <img src="/monlogo.png" alt="Logo" className="w-full h-full object-contain" />
    </motion.div>
  );
}
