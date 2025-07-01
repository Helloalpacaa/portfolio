"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mx-auto mt-8">
      {/* Spinning SVG Circle */}
      <motion.svg
        className="absolute"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="#10B981" // Tailwind Emerald
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="transparent"
        />
      </motion.svg>

      {/* Profile Image */}
      <motion.div
        className="absolute inset-0 mix-blend-lighten"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <Image
          src="/assets/photo.png"
          alt="Heidi Pan"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
