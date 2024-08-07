"use client";

import ContactElement from "@/components/common/contact-element";
import { HighlightedText } from "@/components/common/highlighted-elements";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="space-y-6 pt-14">
      <motion.span
        className="text-3xl font-bold uppercase md:text-5xl"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1 * 0.3 }}
      >
        Rafael Galdino da Silva,
      </motion.span>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 2 * 0.3 }}
        className="flex flex-col flex-wrap justify-center gap-2 text-justify"
      >
        <span className="text-xl text-justify md:text-xl">
          <HighlightedText delay={3 * 0.3}>
            Desenvolvedor Web Fullstack;
          </HighlightedText>{" "}
          Cientista da computação; Entusiasta em tecnologia.
        </span>

        <span className="text-xl text-justify md:text-xl">
          Sou um desenvolvedor interessado em diversas tecnologias, mas com o
          foco principal no desenvolvimento de aplicações{" "}
          <HighlightedText delay={4 * 0.3}>web modernas.</HighlightedText>
        </span>

        <span className="text-xl text-justify md:text-xl">
          Desenvolvo páginas web e outros projetos a mais de 5 anos, variando
          entre projetos pessoais, freelance, educacionais e experiência
          profissional. Entre as tecnologias que mais utilizo estão:{" "}
          <HighlightedText delay={5 * 0.3}>
            Typescript, ReactJS, NextJS, NodeJS, TailwindCSS, Figma, Prisma,
            Google Cloud/AWS, Git
          </HighlightedText>{" "}
          e muito mais.
        </span>

        <span className="text-xl text-justify md:text-xl">
          Além disso, também tenho experiência em{" "}
          <HighlightedText delay={6 * 0.3}>
            Desenvolvimento ágil,
          </HighlightedText>{" "}
          através de metodologias como Scrum, Kanban, entre outras. E por fim,
          tenho também o{" "}
          <HighlightedText delay={7 * 0.3}>Inglês</HighlightedText> como lingua
          secundária, consigo compreender, falar e escrever perfeitamente em
          inglês.
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col gap-2 mt-4"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 2 * 0.3 }}
      >
        <ContactElement
          delay={0}
          icon={faLinkedinIn}
          link="https://www.linkedin.com/in/rafaelgaldinosilva81/"
          name="/rafaelgaldinosilva81"
        />
        <ContactElement
          delay={0}
          icon={faGithub}
          link="https://www.github.com/rafaelsilva81/"
          name="/rafaelsilva81"
        />
        <ContactElement
          delay={0}
          icon={faFile}
          link="/curriculo.pdf"
          name="curriculum vitae"
        />
      </motion.div>

      {/* <Link href="/experience">
        <motion.div
          className="w-full flex flex-1 justify-center items-center pt-6 text-lg"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 2 * 0.3 }}
        >
          Ver mais <ChevronDown size={32} />
        </motion.div>
      </Link> */}
    </main>
  );
}
