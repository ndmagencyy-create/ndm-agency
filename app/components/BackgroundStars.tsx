"use client";
import { useEffect, useRef } from "react";

export default function BackgroundStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient de fond
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#1B4D3E"); // vert bouteille
      gradient.addColorStop(1, "#000000"); // noir
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Étoiles
      ctx.fillStyle = "white";
      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
