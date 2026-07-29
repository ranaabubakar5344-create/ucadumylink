"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Programme = {
  category: string;
  title: string;
  desc: string;
  image: string;
  href: string;
};

const undergraduateProgrammes: Programme[] = [
  {
    category: "Undergraduate Programme",
    title: "BSc (Hons) Computer Science",
    desc: "Explore software development, systems, data, AI and future-focused computing skills.",
    image: "/co.jpg",
    href: "/programmes/computer-science",
  },
  {
    category: "Undergraduate Programme",
    title: "BSc (Hons) Games Development",
    desc: "Learn game design, interactive systems, gameplay development and creative production.",
    image: "/games.jpg",
    href: "/programmes/game-development",
  },
  {
    category: "Undergraduate Programme",
    title: "BA (Hons) Graphic Design",
    desc: "Build strong visual communication, branding, typography and digital design skills.",
    image: "/graa.jpg",
    href: "/programmes/graphic-design",
  },
  {
    category: "Undergraduate Programme",
    title: "BA (Hons) Business & Management",
    desc: "Develop leadership, strategy, marketing and management skills for modern careers.",
    image: "/buise.jpg",
    href: "/programmes/business-management",
  },
  {
    category: "Undergraduate Programme",
    title: "BA (Hons) Visual Communication",
    desc: "Create impactful visual stories across print, digital media, branding and campaigns.",
    image: "/visal.webp",
    href: "/programmes/visual-communication",
  },
  {
    category: "Undergraduate Programme",
    title: "BA (Hons) Digital Marketing & Social Media",
    desc: "Master digital campaigns, content strategy, social platforms and online brand growth.",
    image: "/dig.jpg",
    href: "/programmes/digitalmarketing-socialmedia",
  },
];

const entryRouteProgrammes: Programme[] = [
  {
    category: "Entry Route",
    title: "Integrated Foundation Year",
    desc: "A supportive entry pathway designed to prepare students for undergraduate study.",
    image: "/Law.webp",
    href: "/programmes/integrated-foundation",
  },
  {
    category: "Entry Route",
    title: "Integrated Pre-Masters",
    desc: "Prepare for postgraduate study with academic, creative and professional development.",
    image: "/compe.jpg",
    href: "/programmes/integrated-premasters",
  },
];

const postgraduateProgrammes: Programme[] = [
  {
    category: "Postgraduate Programme",
    title: "Master of Business Administration (MBA)",
    desc: "Develop leadership, strategic thinking and business management skills needed to succeed in today’s global creative economy.",
    image: "/MBA.jpg",
    href: "/programmes/mba",
  },
];

export default function ProgrammesSection() {
  const [activeTab, setActiveTab] = useState<
    "undergraduate" | "entry" | "postgraduate"
  >("undergraduate");

  const programmes =
    activeTab === "undergraduate"
      ? undergraduateProgrammes
      : activeTab === "entry"
      ? entryRouteProgrammes
      : postgraduateProgrammes;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F2] py-20 text-[#0A1414] md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Study With UCA UAE
            </p>

            <h2 className="font-garage mt-4 text-[58px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[92px]">
              Our
              <br />
              Programmes
            </h2>
          </div>

          <p className="max-w-md font-neue text-base leading-7 text-black/65 md:text-lg">
            Creative education designed for tomorrow — explore programmes built
            around industry, innovation and career-focused learning.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("undergraduate")}
            className={`font-garage border px-6 py-3 text-[17px] font-black uppercase tracking-[0.02em] transition ${
              activeTab === "undergraduate"
                ? "border-[#C8EB00] bg-[#C8EB00] text-[#0A1414]"
                : "border-[#0A1414]/20 bg-white text-[#0A1414] hover:border-[#C8EB00]"
            }`}
          >
            Undergraduate Programmes
          </button>

          <button
            onClick={() => setActiveTab("entry")}
            className={`font-garage border px-6 py-3 text-[17px] font-black uppercase tracking-[0.02em] transition ${
              activeTab === "entry"
                ? "border-[#C8EB00] bg-[#C8EB00] text-[#0A1414]"
                : "border-[#0A1414]/20 bg-white text-[#0A1414] hover:border-[#C8EB00]"
            }`}
          >
            Entry Routes
          </button>

          <button
            onClick={() => setActiveTab("postgraduate")}
            className={`font-garage border px-6 py-3 text-[17px] font-black uppercase tracking-[0.02em] transition ${
              activeTab === "postgraduate"
                ? "border-[#C8EB00] bg-[#C8EB00] text-[#0A1414]"
                : "border-[#0A1414]/20 bg-white text-[#0A1414] hover:border-[#C8EB00]"
            }`}
          >
            Postgraduate Programme
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {programmes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group overflow-hidden bg-white shadow-[0_16px_45px_rgba(10,20,20,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(10,20,20,0.14)]"
              >
                <div className="relative h-[245px] overflow-hidden bg-[#0A1414]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414]/60 to-transparent" />
                </div>

                <div className="flex min-h-[265px] flex-col p-7">
                  <p className="font-neue text-xs font-semibold uppercase tracking-[0.2em] text-[#C8EB00]">
                    {item.category}
                  </p>

                  <h3 className="font-garage mt-3 text-[30px] font-black uppercase leading-[0.95] tracking-[-0.03em] transition group-hover:text-[#C8EB00]">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-neue text-base leading-7 text-black/65">
                    {item.desc}
                  </p>

                  <Link
                    href={item.href}
                    className="font-garage mt-auto inline-flex items-center gap-3 pt-6 text-[18px] font-black uppercase text-[#0A1414]"
                  >
                    Explore Programme
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <Link
            href="/Programmes-ucauae"
            className="font-garage inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-[#C8EB00] hover:text-[#0A1414]"
          >
            View All Programmes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}