"use client";

import { motion } from "framer-motion";

// Icônes flottantes
const floatingIconsData = [
  { src: "/icons/camera.svg", count: 6 },
  { src: "/icons/instagram.svg", count: 6 },
  { src: "/icons/ticket.svg", count: 6 },
  { src: "/icons/like.svg", count: 6 },
  { src: "/icons/graph.svg", count: 6 },
];

export default function FloatingIcons() {
  const icons: {
    src: string;
    size: number;
    key: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    speed: number;
    rotate: number;
  }[] = [];

  floatingIconsData.forEach((item) => {
    for (let i = 0; i < item.count; i++) {
      const size = 40 + Math.random() * 180; // tailles entre 40px et 220px
      const startX = Math.random() * 100; // début aléatoire X
      const startY = Math.random() * 100; // début aléatoire Y
      const endX = Math.random() * 100; // fin aléatoire X
      const endY = Math.random() * 100; // fin aléatoire Y
      const speed = 8 + Math.random() * 6; // durée du mouvement
      const rotate = Math.random() * 360; // rotation initiale
      icons.push({ src: item.src, size, key: `${item.src}-${i}`, startX, startY, endX, endY, speed, rotate });
    }
  });

  return (
    <>
      {icons.map((icon) => (
        <motion.img
          key={icon.key}
          src={icon.src}
          alt="icon"
          width={icon.size}
          height={icon.size}
          className="absolute"
          style={{
            top: `${icon.startY}%`,
            left: `${icon.startX}%`,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.8,
          }}
          animate={{
            x: [`${icon.startX}vw`, `${icon.endX}vw`],
            y: [`${icon.startY}vh`, `${icon.endY}vh`],
            rotate: [0, 360],
          }}
          transition={{
            duration: icon.speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}
