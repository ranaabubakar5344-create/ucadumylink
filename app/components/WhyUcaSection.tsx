"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe2, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Sparkles,
    title: "Creative First",
    text: "A learning experience built around creativity, originality and bold thinking.",
  },
  {
    icon: Globe2,
    title: "Global Outlook",
    text: "International perspective with opportunities for students from diverse backgrounds.",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    text: "Programmes shaped around practical skills, industry awareness and future careers.",
  },
  {
    icon: Users,
    title: "Student Community",
    text: "A supportive environment where creative minds learn, collaborate and grow.",
  },
];

export default function AboutUcaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1414] text-white">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[520px] overflow-hidden border border-[#C8EB00]/30">
              <Image
                src="/CampusFront.jpg"
                alt="About UCA UAE"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414]/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-6 bg-[#C8EB00] px-7 py-5 text-[#0A1414] shadow-2xl">
              <p className="font-garage text-[44px] font-black leading-none">
                THINK
                <br />
                UCA
              </p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]"
            >
              About UCA  Delivered By FEUC UAQ
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-garage mt-5 text-[58px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[96px]"
            >
              Creative
              <br />
              Education
              <br />
              For Tomorrow
            </motion.h2>

            <p className="mt-7 max-w-2xl font-neue text-lg leading-8 text-white">
             UCA  Delivered By FEUC UAQ is designed for students who want to turn creativity into
              opportunity. Through future-focused programmes, practical learning
              and a supportive international environment, students develop the
              skills and confidence to shape their creative careers.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#C8EB00] hover:bg-[#C8EB00]"
                  >
                    <Icon className="h-7 w-7 text-[#C8EB00] transition group-hover:text-[#0A1414]" />

                    <h3 className="font-garage mt-4 text-[26px] font-black uppercase leading-[0.95] transition group-hover:text-[#0A1414]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/80 transition group-hover:text-[#0A1414]/75">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/about-feuc"
              className="font-garage mt-10 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Discover More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}