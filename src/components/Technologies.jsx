import React from 'react';
import { FaRobot, FaNetworkWired, FaCarSide, FaDatabase } from 'react-icons/fa';
import { SiFirebase, SiFlutter, SiRaspberrypi, SiTensorflow } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdOutlineModelTraining } from 'react-icons/md';
import { motion } from 'framer-motion';

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* YOLOv5 */}
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <FaRobot className="text-7xl text-cyan-400" />
          <p className="mt-2 text-sm text-neutral-300">YOLOv5</p>
        </motion.div>
        {/* YOLOv8 */}
        <motion.div
          variants={iconVariant(2.0)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <MdOutlineModelTraining className="text-7xl text-yellow-400" />
          <p className="mt-2 text-sm text-neutral-300">YOLOv8</p>
        </motion.div>
        {/* CNNs */}
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
          <p className="mt-2 text-sm text-neutral-300">CNNs</p>
        </motion.div>
        {/* GNN + Transformers */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <GiArtificialIntelligence className="text-7xl text-purple-500" />
          <p className="mt-2 text-sm text-neutral-300">GNN + Transformers</p>
        </motion.div>
        {/* CARLA Simulator */}
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <FaCarSide className="text-7xl text-blue-400" />
          <p className="mt-2 text-sm text-neutral-300">CARLA Simulator</p>
        </motion.div>
        {/* Deep Q-Network (DQN) */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <FaNetworkWired className="text-7xl text-green-500" />
          <p className="mt-2 text-sm text-neutral-300">Deep Q-Network (DQN)</p>
        </motion.div>
        {/* PID Controllers */}
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <FaDatabase className="text-7xl text-orange-300" />
          <p className="mt-2 text-sm text-neutral-300">PID Controllers</p>
        </motion.div>
        {/* MediaPipe */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <FaRobot className="text-7xl text-cyan-400" />
          <p className="mt-2 text-sm text-neutral-300">MediaPipe</p>
        </motion.div>
        {/* Firebase */}
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiFirebase className="text-7xl text-yellow-500" />
          <p className="mt-2 text-sm text-neutral-300">Firebase</p>
        </motion.div>
        {/* Flutter */}
        <motion.div
          variants={iconVariant(1.0)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiFlutter className="text-7xl text-blue-500" />
          <p className="mt-2 text-sm text-neutral-300">Flutter</p>
        </motion.div>
        {/* Raspberry Pi */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiRaspberrypi className="text-7xl text-red-500" />
          <p className="mt-2 text-sm text-neutral-300">Raspberry Pi</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;