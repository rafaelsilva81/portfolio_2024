"use client";

import { highlightColorAtom, highlightColors } from "@/lib/highlightColor.atom";
import { useAtom } from "jotai";
import { Logo } from "../common/logo";

import { motion } from "framer-motion";

export const HeaderLogo = () => {
  const [highlight, setHighlight] = useAtom(highlightColorAtom);

  const changeHighlight = () => {
    const current = highlightColors.indexOf(highlight);
    const next = (current + 1) % highlightColors.length;
    setHighlight(highlightColors[next]);
  };

  return (
    <motion.div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => changeHighlight()}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="hidden md:block">
        <Logo color={highlight} size={60} />
      </div>

      <div className="block md:hidden">
        <Logo color={highlight} size={40} />
      </div>
      <span className="text-xl md:text-2xl">
        rafael
        <span className="font-bold" style={{ color: highlight }}>
          galdino
        </span>
        silva
      </span>
    </motion.div>
  );
};
