"use client";

import { highlightColorAtom } from "@/lib/highlightColor.atom";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItems = () => {
  return (
    <>
      {/* Fullscreen menu */}
      <motion.div
        className="items-center gap-3 hidden md:flex"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.25, delay: 1 * 0.25 }}
      >
        <Item text="Sobre" href="/" />
        <Item text="Experiencia" href="/experience" />
        <Item text="Projetos" href="/projects" />
        <Item text="Contato" href="/contact" />
      </motion.div>
    </>
  );
};

export const Item = ({ text, href }: { text: string; href: string }) => {
  const [highlight] = useAtom(highlightColorAtom);
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link href={href}>
      <div className="flex flex-col">
        <span className={clsx("text-xl ", isActive && "font-semibold")}>
          {text}
        </span>
        <motion.div
          className="w-full h-1 rounded-sm"
          style={{
            backgroundColor: isActive ? highlight : "transparent",
          }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </Link>
  );
};
