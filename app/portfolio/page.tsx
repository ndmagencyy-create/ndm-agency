"use client";

import { motion } from "framer-motion";
import BackgroundStars from "../components/BackgroundStars";
import Tilt from "react-parallax-tilt";

export default function Portfolio() {
  const projects = [
    { title: "Projet 1", desc: "Site e-commerce complet, responsive et optimisé SEO." },
    { title: "Projet 2", desc: "Campagne social media avec visuels et vidéos." },
    { title: "Projet 3", desc: "Refonte UI/UX d’une application web existante." },
    { title: "Projet 4", desc: "Branding complet pour une startup tech." },
    { title: "Projet 5", desc: "Production vidéo et shooting photo pour Instagram." },
    { title: "Projet 6", desc: "Landing page pour campagne marketing digitale." },
  ];

  const SectionTitle = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative text-center mb-28"
    >
      <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent animate-gradient tracking-tight">
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

  return (
    <>
      <BackgroundStars />

      <div className="px-8 md:px-32 py-32 relative z-10">
        {/* HERO */}
        <section className="text-center mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent mb-10"
          >
            Notre Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez une sélection de projets réalisés par NDM Agency, mettant en avant nos compétences en design, développement, branding et marketing digital.
          </motion.p>
        </section>

        {/* SECTION PROJETS */}
        <section>
          <SectionTitle text="Projets récents" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                transitionSpeed={400}
                scale={1.05}
                glareEnable={true}
                glareMaxOpacity={0.3}
              >
                <motion.div
                  whileHover={{ scale: 1.07, boxShadow: "0px 0px 25px rgba(0,255,150,0.5)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-64 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col justify-center items-center text-white font-bold text-xl text-center p-6 border border-green-500/20 shadow-2xl cursor-pointer"
                >
                  <h3 className="text-2xl font-semibold text-green-400 mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}