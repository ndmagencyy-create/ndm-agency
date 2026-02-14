"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundStars from "./components/BackgroundStars";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const allServices = [
    "SEO & Marketing",
    "Design & Branding",
    "Développement Web",
    "Photographie & Vidéo",
    "Social Ads & SEA"
  ];

  // COMPOSANT TITRE UNIFIÉ
  const SectionTitle = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center mb-12 sm:mb-20"
    >
      <div className="relative w-full flex justify-center items-center">
        <h2 
          className="absolute inset-0 flex justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent select-none uppercase tracking-tighter text-center z-0 px-4"
          style={{ 
            WebkitTextStroke: "1px rgba(255,255,255,0.15)", 
          }}
        >
          {text}
        </h2>

        <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tight px-4 text-center uppercase">
          {text}
        </h2>
      </div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-[2px] bg-green-500 mx-auto mt-6 sm:mt-8"
      />
    </motion.div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    emailjs.sendForm("service_9qjyh9j", "template_w9bo747_client", form, "eKfJvJ80rKUhnyCQ2");
    emailjs.sendForm("service_9qjyh9j", "template_w9bo747_copy", form, "eKfJvJ80rKUhnyCQ2").then(() => {
      setSuccess(true);
      form.reset();
    });
  };

  return (
    <>
      <BackgroundStars />

      {/* HERO SECTION */}
      <section 
        className="h-screen flex flex-col justify-start sm:justify-center items-center text-center px-6 md:px-8 lg:px-32 pt-32 sm:pt-0" 
        id="hero"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          Propulsez votre marque <br />
          <span className="text-green-400">dans une nouvelle ère</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl text-white/80"
        >
          NDM Agency combine design d'exception et stratégies marketing de pointe pour transformer vos ambitions en résultats concrets.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#expertises"
            className="w-full sm:w-auto text-center px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer"
          >
            NOS SERVICES
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg shadow-lg transition-all text-sm border border-white/10 uppercase tracking-wider"
          >
            Contact
          </a>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 sm:px-8 md:px-32 py-20 sm:py-32" id="expertises">
        <SectionTitle text="Nos services" />
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
              transition={{ delay: i * 0.1 }}
              className="w-full sm:w-auto px-6 py-5 bg-white/5 backdrop-blur-md rounded-xl border border-green-500/20 shadow-xl cursor-default"
            >
              <h3 className="text-lg font-bold text-white text-center sm:whitespace-nowrap uppercase">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* PREMIER BOUTON VERT */}
        <div className="flex justify-center px-4">
          <Link href="/services" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-green-600 rounded-full text-white font-bold hover:bg-green-500 transition-all cursor-pointer shadow-lg text-sm sm:text-base tracking-widest"
            >
              <span>DÉCOUVRIR EN DÉTAIL</span>
              <span className="group-hover:translate-x-2 transition-transform font-bold text-xl">→</span>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* NOTRE IMPACT SECTION */}
      <section className="px-6 sm:px-8 md:px-32 py-20 sm:py-32 text-center" id="Notre Impact">
        <SectionTitle text="Notre Impact" />
        <p className="text-white/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto px-4">
          Plus qu'un simple service, nous bâtissons des actifs numériques qui propulsent votre croissance.
        </p>
        
        {/* SECOND BOUTON VERT (DUPLICATA) */}
        <div className="flex justify-center px-4">
          <Link href="/portfolio" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-green-600 rounded-full text-white font-bold hover:bg-green-500 transition-all cursor-pointer shadow-lg text-sm sm:text-base tracking-widest"
            >
              <span>DÉCOUVRIR EN DÉTAIL</span>
              <span className="group-hover:translate-x-2 transition-transform font-bold text-xl">→</span>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 sm:px-8 md:px-32 py-20 sm:py-32" id="contact">
        <SectionTitle text="Contact" />
        <p className="text-center mb-12 text-white/60 max-w-2xl mx-auto text-base sm:text-lg px-4">
          Vous avez un projet ? Prenons le temps d'en discuter ensemble.
        </p>

        <motion.form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4">
          <input type="text" name="name" placeholder="Votre nom" className="w-full px-6 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 text-white outline-none transition-all text-sm" required />
          <input type="email" name="email" placeholder="Votre email" className="w-full px-6 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 text-white outline-none transition-all text-sm" required />
          <textarea name="message" placeholder="Votre message" className="w-full px-6 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 text-white outline-none h-32 sm:h-40 transition-all text-sm" required />
          <motion.button whileHover={{ scale: 1.02 }} className="w-full py-4 sm:py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg transition-all uppercase tracking-widest text-sm" type="submit">
            Envoyer 
          </motion.button>
        </motion.form>

        {success && (
          <div className="mt-8 text-center text-green-400 font-medium px-4">
            ✅ Message transmis.
          </div>
        )}
      </section>
    </>
  );
}