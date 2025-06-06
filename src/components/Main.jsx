import React from "react";
import { motion } from "framer-motion";


const cards = [
  {
    title: "Perception & Scene Understanding",
    icon: "👁️",
    desc: "Detects objects and understands surroundings using cameras and sensors."
  },
  {
    title: "Decision Making & Path Planning",
    icon: "🧠",
    desc: "Makes safe driving decisions using AI and control algorithms."
  },
  {
    title: "Ethical Decision Making in Autonomous Vehicles",
    icon: "🧑‍⚖️",
    desc: "Handles moral scenarios with rule-based and ethical AI logic."
  },
  {
    title: "In-Cabin Monitoring & Adaptive Comfort Systems",
    icon: "🔐",
    desc: "Tracks passenger behavior to enhance safety and comfort."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.2, duration: 0.6 }
  })
};

export default function Main() {
  return (
    <div
      
    
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 mt-24 text-center drop-shadow-lg">
          MANTHRAX
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-12 text-center">
          Where AI Meets the Road – ManthraX
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-neutral-800 bg-opacity-20 border border-neutral-700 rounded-xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{card.title}</h3>
              <p className="text-neutral-300 text-center text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}