"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundStars from "../components/BackgroundStars";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Envoi de l'email
    emailjs
      .sendForm(
        "service_9qjyh9j",         // Ton Service ID
        "template_w9bo747_copy",   // Template pour toi (copie du message)
        formRef.current,
        "eKfJvJ80rKUhnyCQ2"       // Public Key
      )
      .then(
        () => {
          // Envoi au client
          emailjs.sendForm(
            "service_9qjyh9j",
            "template_w9bo747_client",  // Template client ({{email}})
            formRef.current!,
            "eKfJvJ80rKUhnyCQ2"
          );
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const SectionTitle = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative text-center mb-28"
    >
      <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tight">
        {text}
      </h2>
      <h2 className="absolute inset-0 text-6xl md:text-8xl font-extrabold text-transparent stroke-white/10 pointer-events-none">
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

  const faqs = [
    {
      question: "Combien coûte un site web ?",
      answer:
        "Le prix dépend de la complexité du projet. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer: "Oui, nous collaborons avec des entreprises au Maroc et à l'international.",
    },
    {
      question: "Quels sont vos délais ?",
      answer: "En moyenne entre 2 et 21 jours selon le projet.",
    },
  ];

  return (
    <>
      {/* Fond animé */}
      <BackgroundStars />

      <section className="px-8 md:px-32 py-32 text-white relative z-10">

        {/* TITRE */}
        <SectionTitle text="Contactez-nous" />

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4 text-white/70 text-lg"
        >
          <p>Email : <span className="text-green-400">ndmagencyy@gmail.com</span></p>
          <p>Téléphone : <span className="text-green-400">+212 6 39 58 10 20</span></p>
          <p>Basée à Rabat, Maroc</p>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto space-y-10 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl text-green-400 font-semibold text-center"
          >
            FAQ
          </motion.h2>

          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-green-500/20 shadow-2xl"
            >
              <h3 className="font-bold text-lg text-green-400 mb-2">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* FORMULAIRE */}
        <SectionTitle text="Envoyez-nous un message" />

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full px-5 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full px-5 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            className="w-full px-5 py-4 bg-white/5 border border-green-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-xl"
            type="submit"
          >
            Envoyer
          </motion.button>
        </motion.form>

        {success && (
          <div className="mt-6 text-center text-lg md:text-xl font-semibold text-green-400">
            ✅ Merci pour votre message ! Nous reviendrons vers vous rapidement.
          </div>
        )}

      </section>
    </>
  );
}
