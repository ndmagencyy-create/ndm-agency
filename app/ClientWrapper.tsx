"use client";

import { AnimatePresence, motion, easeIn, easeOut } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const pageVariants = {
    initial: { opacity: 0, y: 50, scale: 0.98 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: easeOut } 
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95, 
      transition: { duration: 0.6, ease: easeIn } 
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pt-28 min-h-screen relative z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
