"use client";

import { motion } from "framer-motion";
// IMPORT CORRECT pour BackgroundStars depuis app/components
import BackgroundStars from "../components/BackgroundStars";

export default function Services() {
  const services = [
    {
      title: "SEO & Marketing",
      desc: "Optimisation complète de votre site pour Google, audit SEO, création de contenu et stratégie marketing pour attirer un trafic qualifié et durable.",
    },
    {
      title: "Design & Branding",
      desc: "Création d’une identité visuelle moderne et mémorable : logo, charte graphique, packaging et design UI/UX pour vos produits et plateformes digitales.",
    },
    {
      title: "Développement Web",
      desc: "Sites web rapides, performants et responsives, optimisés pour le référencement, la conversion et l’expérience utilisateur.",
    },
    {
      title: "Photographie & Vidéo",
      desc: "Production visuelle premium : shootings photo, vidéos promotionnelles et contenus pour les réseaux sociaux, adaptés à votre identité de marque.",
    },
    {
      title: "Social Ads & SEA",
      desc: "Campagnes publicitaires sur Instagram, Google Ads et TikTok Ads. Optimisation des budgets, ciblage précis et suivi des conversions pour un ROI maximal.",
    },
  ];

  const ads = ["Instagram Ads", "Google Ads", "TikTok Ads"];

  const SectionTitle = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative text-center mb-16 sm:mb-28"
    >
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient tracking-tight">
        {text}
      </h2>

      <h2 className="absolute inset-0 text-4xl sm:text-6xl md:text-8xl font-extrabold text-transparent stroke-white/10 pointer-events-none">
        {text}
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-[2px] bg-green-500 mx-auto mt-4 sm:mt-8"
      />
    </motion.div>
  );

  return (
    <>
      {/* Background animé */}
      <BackgroundStars />

      <div className="px-4 sm:px-8 md:px-32 py-16 sm:py-32 relative z-10">

        {/* HERO */}
        <section className="text-center mb-16 sm:mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-[length:200%_200%] bg-clip-text text-transparent mb-6 sm:mb-10"
          >
            Nos Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white/70 text-sm sm:text-lg max-w-md sm:max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez notre gamme complète de services digitaux, conçue pour maximiser votre impact en ligne et votre retour sur investissement.
          </motion.p>
        </section>

        {/* SECTION SERVICES */}
        <section>
          <SectionTitle text="Ce que nous faisons" />

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {services.map((s, i) => {
              let hoverEffect;
              switch (i) {
                case 0: hoverEffect = { scale: 1.1, x: 5, boxShadow: "0px 0px 20px rgba(0,255,150,0.7)" }; break;
                case 1: hoverEffect = { scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,150,0.7)" }; break;
                case 3: hoverEffect = { scale: 1.1, x: -5, boxShadow: "0px 0px 20px rgba(0,255,150,0.7)" }; break;
                default: hoverEffect = { scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,150,0.7)" };
              }

              return (
                <motion.div
                  key={i}
                  whileHover={hoverEffect}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full sm:w-[45%] lg:w-[28%] p-4 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl text-center border border-green-500/20 shadow-2xl cursor-pointer"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-2 sm:mb-4">{s.title}</h3>
                  <p className="text-white/80 text-sm sm:text-base">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION PUBLICITÉS / ADS */}
        <section className="mt-16 sm:mt-32">
          <SectionTitle text="Publicités & SEA" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/70 text-sm sm:text-lg max-w-md sm:max-w-3xl mx-auto mb-8 sm:mb-16"
          >
            Nous gérons vos campagnes sur toutes les plateformes majeures : Instagram, Google Ads et TikTok. Ciblage précis, optimisation continue et suivi des performances pour un ROI maximal.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-center">
            {ads.map((ad, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,150,0.7)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-[45%] lg:w-[28%] p-4 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-green-500/20 cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-green-400 mb-2 sm:mb-4">{ad}</h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Campagnes performantes avec ciblage précis et optimisation continue pour maximiser votre visibilité et votre ROI.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}