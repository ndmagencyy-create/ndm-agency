"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundStars from "./components/BackgroundStars";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const services = [
    { title: "SEO & Marketing", desc: "Stratégies avancées pour dominer Google et augmenter votre trafic qualifié." },
    { title: "Design & Branding", desc: "Identité visuelle forte, moderne et mémorable pour marquer les esprits." },
    { title: "Développement Web", desc: "Sites performants, rapides et optimisés pour la conversion." },
    { title: "Photographie & Vidéo", desc: "Production visuelle premium adaptée aux réseaux sociaux." },
  ];

  const SectionTitle = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative text-center mb-28"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tight">
        {text}
      </h2>
      <h2 className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent stroke-white/10 pointer-events-none">
        {text}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-[2px] bg-green-500 mx-auto mt-8"
      />
    </motion.div>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;

    // Email au client
    emailjs.sendForm(
      "service_9qjyh9j",
      "template_w9bo747_client",
      form,
      "eKfJvJ80rKUhnyCQ2"
    ).then(
      () => console.log("Confirmation client envoyée"),
      (err) => console.log("Erreur client :", err.text)
    );

    // Copie pour toi
    emailjs.sendForm(
      "service_9qjyh9j",
      "template_w9bo747_copy",
      form,
      "eKfJvJ80rKUhnyCQ2"
    ).then(
      () => {
        console.log("Copie reçue par moi");
        setSuccess(true);
        form.reset();
      },
      (err) => console.log("Erreur copie :", err.text)
    );
  };

  return (
    <>
      <BackgroundStars />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-32" id="hero">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
        >
          Bienvenue chez NDM Agency
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-full sm:max-w-xl md:max-w-2xl"
        >
          Nous créons des expériences digitales élégantes, modernes et puissantes.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="#services"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-xl text-sm sm:text-base"
          >
            Nos Services
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg shadow-xl text-sm sm:text-base"
          >
            Contact
          </a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-8 md:px-32 py-32" id="services">
        <SectionTitle text="Nos Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl text-center border border-green-500/20"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">{s.title}</h3>
              <p className="text-white/80 text-sm sm:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-4 sm:px-8 md:px-32 py-32" id="portfolio">
        <SectionTitle text="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Tilt key={i} tiltMaxAngleX={20} tiltMaxAngleY={20} transitionSpeed={400} scale={1.07} glareEnable glareMaxOpacity={0.4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-52 sm:h-60 md:h-64 bg-white/5 backdrop-blur-md rounded-2xl flex justify-center items-center text-white font-bold text-lg sm:text-xl md:text-xl border border-green-500/20 shadow-2xl"
              >
                Projet {i}
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-4 sm:px-8 md:px-32 py-32" id="contact">
        <SectionTitle text="Contact" />
        <p className="text-center mb-12 text-white/70 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          Parlons de votre projet et transformons vos idées en réalité.
        </p>

        <motion.form ref={formRef} onSubmit={handleSubmit} className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-xl text-sm sm:text-base"
            type="submit"
          >
            Envoyer
          </motion.button>
        </motion.form>

        {success && (
          <div className="mt-6 text-center text-lg md:text-xl font-semibold text-green-400">
            ✅ Votre message a bien été envoyé. Nous reviendrons vers vous très rapidement.
          </div>
        )}
      </section>
    </>
  );
}
