"use client";

import { motion } from "framer-motion";
import BackgroundStars from "../components/BackgroundStars";

export default function About() {
  return (
    <>
      <BackgroundStars />

      <div className="px-4 sm:px-8 md:px-32 py-16 sm:py-32 text-white">

        {/* HERO SECTION */}
        <section className="text-center mb-16 sm:mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent"
          >
            À propos de NDM Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 sm:mt-10 text-base sm:text-xl text-white/70 max-w-xl sm:max-w-3xl mx-auto"
          >
            Nous sommes une agence digitale spécialisée en stratégie, branding et développement web. 
            Notre mission est simple : transformer les idées ambitieuses en expériences digitales puissantes.
          </motion.p>
        </section>

        {/* SECTION VISION */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-green-400">
              Notre Vision
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-lg">
              Dans un monde digital saturé, nous croyons en la puissance du design stratégique et de la performance mesurable.
              Chaque projet est conçu pour créer un impact réel, générer de la croissance et renforcer l’image de marque.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 bg-white/5 backdrop-blur-md rounded-2xl border border-green-500/20 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
              Ce qui nous distingue
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li>✔ Stratégie orientée performance</li>
              <li>✔ Design moderne et impactant</li>
              <li>✔ Optimisation SEO avancée</li>
              <li>✔ Solutions sur mesure</li>
            </ul>
          </motion.div>
        </section>

        {/* SECTION FONDATEUR (TEXTE & PHOTO ALIGNÉS ET CENTRÉS) */}
        <section className="max-w-6xl mx-auto mb-16 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* PHOTO : Cadre dégradé ajusté à l'image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end"
            >
              <div className="p-[3px] rounded-2xl bg-gradient-to-r from-white via-green-400 to-white shadow-[0_0_25px_rgba(34,197,94,0.2)] w-fit">
                <div className="rounded-xl overflow-hidden bg-black flex">
                  <img
                    src="/fondateur.jpg"
                    alt="Fondateur NDM Agency"
                    className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full h-auto block" 
                  />
                </div>
              </div>
            </motion.div>

            {/* TEXTE : Nom en vert fixe */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-2">
                MR NACIRI Mohamed Mamoun
              </h2>
              <h3 className="text-lg sm:text-xl text-white/90 font-medium mb-6 uppercase tracking-widest">
                Fondateur & Directeur de NDM Agency
              </h3>
              
              <div className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Depuis le lancement de NDM Agency, j’ai mis toute mon énergie et ma vision dans
                  la création d’une agence digitale qui allie innovation, performance et élégance.
                </p>
                <p>
                  Chaque projet est pour moi une opportunité de repousser les limites et de
                  montrer que NDM est bien plus qu’une agence : c’est une grande aventure
                  digitale qui inspire et transforme les idées en succès concrets.
                </p>
                <p>
                  Fier et engagé, je veille à ce que chaque client bénéficie de solutions
                  sur-mesure, avec sérieux et créativité. Rejoignez-nous pour vivre
                  l’expérience NDM et voir votre projet atteindre son plein potentiel.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION CHIFFRES */}
        <section className="mb-16 sm:mb-32 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-16"
          >
            Nos Résultats
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {[
              { number: "50+", label: "Projets réalisés" },
              { number: "100%", label: "Engagement & qualité" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 sm:p-10 bg-white/5 backdrop-blur-md rounded-2xl border border-green-500/20 shadow-2xl"
              >
                <h3 className="text-3xl sm:text-5xl font-extrabold text-green-400 mb-2 sm:mb-4">
                  {stat.number}
                </h3>
                <p className="text-white/70 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION CTA */}
        <section className="text-center mb-16 sm:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8"
          >
            Prêt à collaborer avec nous ?
          </motion.h2>

          <motion.a
            href="/contact#contact-form" 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 sm:px-10 py-3 sm:py-5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Démarrer un projet
          </motion.a>
        </section>

      </div>
    </>
  );
}