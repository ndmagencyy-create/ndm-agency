"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
