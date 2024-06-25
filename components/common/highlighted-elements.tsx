"use client";

import { highlightColorAtom } from "@/lib/highlightColor.atom";
import { useAtom } from "jotai";
import React from "react";

import { motion } from "framer-motion";

export const HighlightedText = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [highlight] = useAtom(highlightColorAtom);

  return (
    <motion.span
      style={{
        position: "relative",
        padding: "0.05em 0.25em",
        overflow: "hidden", // Ensures the background doesn't spill out during animation
        whiteSpace: "nowrap", // Keeps the text on one line
      }}
      className="font-semibold"
    >
      {children}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: highlight,
          zIndex: -1,
        }}
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          delay,
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="rounded-sm"
      />
    </motion.span>
  );
};

export const HighlightedIcon = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [highlight] = useAtom(highlightColorAtom);
  return (
    <motion.span
      style={{
        width: "fit-content", // Adjusts width to fit contents
        height: "fit-content", // Adjusts height to fit contents
        overflow: "hidden", // Ensures the background animation is contained
        borderRadius: "0.375rem", // Applies rounded corners
      }}
      className="p-1 w-fit h-fit relative"
    >
      {children}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: highlight,
          zIndex: -1,
        }}
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          delay,
          duration: 0.25,
          ease: "easeInOut",
        }}
        className="rounded-sm"
      />
    </motion.span>
  );
};
