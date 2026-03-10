"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceCardProps {
  name: string;
  tip: string;
  retainer: boolean;
}

export default function ServiceCard({ name, tip, retainer }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        borderColor: hovered ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.06)",
        backgroundColor: hovered ? "rgba(124,58,237,0.04)" : "rgba(255,255,255,0.02)",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border rounded-xl px-4 py-3 cursor-default"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            retainer ? "bg-neon-bright" : "bg-neon/40"
          }`}
        />
        <motion.span
          animate={{ color: hovered ? "#f0f0f5" : "#c0c0cc" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-sm"
        >
          {name}
        </motion.span>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.3, delay: 0.05 },
            }}
            className="text-[11px] text-muted leading-relaxed pl-[1.375rem] overflow-hidden"
          >
            {tip}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
