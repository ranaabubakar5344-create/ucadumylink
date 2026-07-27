"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Lightbulb,
  Globe2,
  UserRound,
  GraduationCap,
  Users,
  Trophy,
} from "lucide-react";

export default function WelcomeUcaSection() {
  const features = [
    {
      icon: Palette,
      title: "Creative Education",
      text: "Industry-focused programs designed for tomorrow.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Mindset",
      text: "Encouraging original thinking and bold ideas.",
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      text: "A diverse community with a world of opportunities.",
    },
    {
      icon: UserRound,
      title: "Career Focused",
      text: "Real-world skills for real-world success.",
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      number: "10+",
      label: "Programmes",
      text: "Industry-focused creative degrees",
    },
    {
      icon: Users,
      number: "100–150",
      text: "QS World University Rankings by Subject (Art & Design)",
    },
    {
      icon: Globe2,
      number: "86th",
      label: "Ranked 86th in the UK",
      text: "University League Table 2027",
    },
    {
      icon: Trophy,
      number: "95%",
      label: "Graduate Success",
      text: "Successful careers start at UCA",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-[#0A1414]">
      <div className="relative grid min-h-[760px] lg:grid-cols-[52%_48%]">
        {/* LEFT CONTENT */}
{/* LEFT CONTENT */}
<motion.div
  initial={{ opacity: 0, x: -45 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{ duration: 0.75, ease: "easeOut" }}
  className="relative z-20 flex h-full items-center px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-16 xl:py-24"
>
  <div className="w-full max-w-[720px]">
  <motion.p
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="font-garage text-[16px] font-black uppercase tracking-[0.28em] text-[#0A1414] sm:text-[18px]"
  >
    Welcome To 
  </motion.p>


    <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="mt-4 h-1 bg-[#C8EB00]"
  />

  <motion.h1
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.75, delay: 0.1 }}
    className="font-garage mt-7 uppercase"
  >
    <span className="block text-[82px] font-black leading-[0.78] tracking-[-0.06em] text-[#0A1414] sm:text-[105px] md:text-[124px] lg:text-[136px]">
      UCA
    </span>

    <span className="mt-5 block max-w-[620px] text-[44px] font-black leading-[1.0] tracking-[-0.045em] text-[#C8EB00] sm:text-[56px] md:text-[66px] lg:text-[72px]">
      Delivered By
      <br />
      FEUC UAE
    </span>
  </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.22 }}
      className="mt-7 max-w-[620px] font-neue text-base leading-7 text-[#0A1414]/75 sm:text-lg sm:leading-8"
    >
      Where creativity meets purpose. At UCA
Delivered By
FEUC UAE, we empower the next
      generation of artists, designers, creators and innovators to shape the
      future of the creative industries.
    </motion.p>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.1 + index * 0.08,
            }}
            className="group border-black/15 sm:border-r sm:pr-5"
          >
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Icon className="mb-4 h-8 w-8 text-[#C8EB00]" />
            </motion.div>

            <h3 className="font-garage text-[18px] font-black uppercase leading-none transition-colors group-hover:text-[#C8EB00] sm:text-xl">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/60">
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <Link
        href="/Programmes-ucauae"
        className="font-garage group inline-flex items-center justify-center gap-4 bg-[#C8EB00] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00] sm:px-8 sm:text-[18px]"
      >
        Explore Programmes
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>

      <Link
        href="https://admissions.uca.feuc.ae/enquiry_form"
        target="_blank"
        rel="noopener noreferrer"
        className="font-garage group inline-flex items-center justify-center gap-4 border border-[#0A1414] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00] sm:px-8 sm:text-[18px]"
      >
        Enquire Now
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  </div>
</motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden min-h-[720px] overflow-hidden bg-[#0A1414] lg:block"
        >
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/ca.jpeg"
              alt="UCA UAE Building"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* White diagonal cut */}

          {/* Black diagonal edge */}
         

          {/* Green accent line */}
        

          <div className="absolute inset-0 z-[1] bg-[#0A1414]/10" />
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75 }}
        className="relative z-30 bg-[#0A1414] px-4 py-6 lg:px-16"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[42%_58%]">
          {/* LEFT QUOTE */}
          <div className="relative flex items-center gap-6 text-white">
            <div className="absolute -left-10 bottom-0 hidden h-20 w-24 opacity-40 lg:block bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:14px_14px]" />

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="font-garage text-[76px] leading-none text-[#C8EB00]"
            >
              “
            </motion.div>

            <div className="flex items-center gap-10">
              <p className="max-w-[310px] text-base leading-6">
                We don’t just teach creativity,{" "}
                <span className="font-bold">we nurture creative leaders.</span>
              </p>

              <motion.p
                animate={{ rotate: [-6, -3, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="font-garage text-[32px] leading-[0.9] tracking-[-0.03em] text-[#C8EB00]"
              >
                Think Creative.
                <br />
                Think UCA.
              </motion.p>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="rounded-xl bg-white px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          >
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="border-r border-black/10 px-3 text-center last:border-r-0"
                  >
                    <Icon className="mx-auto h-7 w-7 text-[#C8EB00]" />

                    <div className="font-garage mt-2 text-[34px] font-black leading-none">
                      {stat.number}
                    </div>

                    <p className="mt-1 text-[11px] font-black uppercase">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-[11px] leading-4 text-black/60">
                      {stat.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}