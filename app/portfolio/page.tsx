"use client";

import { motion } from "framer-motion";
import BackgroundStars from "../components/BackgroundStars";
import Tilt from "react-parallax-tilt";

export default function Portfolio() {
  const impactCards = [
    { title: "+150%", desc: "Augmentation moyenne du taux de conversion après refonte UX." },
    { title: "Top 3", desc: "Positionnement garanti sur vos mots-clés stratégiques en SEO." },
    { title: "24h", desc: "Délai moyen pour la mise en place de vos campagnes publicitaires." },
    { title: "Premium", desc: "Une esthétique visuelle qui place votre marque au-dessus de la concurrence." },
    { title: "Scalable", desc: "Des infrastructures web capables d'encaisser des pics de trafic massifs." },
    { title: "Data-Driven", desc: "Chaque décision créative est appuyée par des analyses de données." },
  ];

  return (
    <>
      <BackgroundStars />
      <div className="px-8 md:px-32 py-32 relative z-10">
        <section className="text-center mb-32">
          <motion.h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent mb-10">
            Impact & Vision
          </motion.h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Nous ne créons pas seulement des sites, nous créons des outils de performance pour votre entreprise.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {impactCards.map((item, i) => (
            <Tilt key={i} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} glareEnable glareMaxOpacity={0.2}>
              <div className="h-64 p-8 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col justify-center items-center text-center border border-green-500/20 shadow-2xl">
                <h3 className="text-4xl font-extrabold text-green-400 mb-4">{item.title}</h3>
                <p className="text-white/80 text-sm font-medium">{item.desc}</p>
              </div>
            </Tilt>
          ))}
        </section>
      </div>
    </>
  );
}