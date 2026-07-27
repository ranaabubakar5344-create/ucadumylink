"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccreditationsSlider from "./AccrediationSlider";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  Wallet,
} from "lucide-react";

type ModuleItem = {
  title: string;
  credits?: string;
  type?: string;
};

type Programme = {
  title: string;
  slug: string;
  level?: string;
  duration?: string;
  studyMode?: string;
  intake?: string[];
  fees?: string;
  awardingBody?: string;
  heroImage?: string;
  overview?: string[];
  highlights?: string[];
  sections?: {
    title: string;
    content: string | Record<string, string[]>;
  }[];
  modules?: {
    year: string;
    items: ModuleItem[];
  }[];
  cta?: {
    applyLink?: string;
    brochureLink?: string;
  };
};

export default function ProgrammeDetailClient({
  programme,
}: {
  programme: Programme;
}) {
  const [activeModule, setActiveModule] = useState(0);
  const [openSection, setOpenSection] = useState(0);

  const activeModuleData = programme.modules?.[activeModule];

  const facts = [
    {
      icon: Clock3,
      label: "Duration",
      value: programme.duration || "Contact Admissions",
    },
    {
      icon: GraduationCap,
      label: "Study Mode",
      value: programme.studyMode || "Full Time",
    },
    {
      icon: CalendarDays,
      label: "Intake",
      value: programme.intake?.join(", ") || "Contact Admissions",
    },
    {
      icon: Wallet,
      label: "Annual Fees",
      value: programme.fees || "Contact Admissions",
      highlight: true,
    },
  ];

  return (
    <main className="bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0">
          <Image
            src={programme.heroImage || "/programmes/programme-hero.jpg"}
            alt={programme.title}
            fill
            priority
            className="object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1414] via-[#0A1414]/55 to-[#0A1414]/35" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36">
          {/* <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]"
          >
            {programme.level}
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-garage  max-w-5xl text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[96px] mt-[-30px]"
          >
            {programme.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white"
          >
            {programme.overview?.[0]}
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={programme.cta?.applyLink || "https://admissions.uca.feuc.ae/enquiry_form"}
              className="font-garage inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* {programme.cta?.brochureLink && (
              <Link
                href={programme.cta.brochureLink}
                className="font-garage inline-flex items-center gap-4 border border-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                Download Brochure
                <ArrowRight className="h-5 w-5" />
              </Link>
            )} */}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-5">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.label}
                className={`border p-6 shadow-xl ${
                  fact.highlight
                    ? "border-[#C8EB00] bg-[#C8EB00] text-[#0A1414]"
                    : "border-black/10 bg-white"
                }`}
              >
                <Icon className="h-8 w-8" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] opacity-70">
                  {fact.label}
                </p>
                <p className="font-garage mt-3 text-[28px] font-black uppercase leading-none">
                  {fact.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Programme Overview
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[78px]">
              Course
              <br />
              Overview
            </h2>
          </div>

          <div className="space-y-6">
            {programme.overview?.map((text, index) => (
              <p key={index} className="text-lg leading-8 text-[#0A1414]/75">
                {text}
              </p>
            ))}

            {programme.highlights?.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {programme.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border border-black/10 bg-[#F7F7F2] p-5"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                    <p className="font-bold">{item}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* MODULES */}
      {programme.modules?.length ? (
        <section className="bg-[#F7F7F2] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
                  Programme Modules
                </p>

                <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
                  What You
                  <br />
                  Will Study
                </h2>
              </div>

              <p className="max-w-md text-lg leading-8 text-black/65">
                Explore the modules taught across each year or level of the
                programme.
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {programme.modules.map((mod, index) => (
                <button
                  key={mod.year}
                  onClick={() => setActiveModule(index)}
                  className={`font-garage px-6 py-3 text-[18px] font-black uppercase transition ${
                    activeModule === index
                      ? "bg-[#C8EB00] text-[#0A1414]"
                      : "border border-black/15 bg-white text-[#0A1414] hover:border-[#C8EB00]"
                  }`}
                >
                  {mod.year}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {activeModuleData?.items.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="group border border-black/10 bg-white p-6 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                  >
                    <div className="font-garage flex h-12 w-12 items-center justify-center bg-[#C8EB00] text-[24px] font-black text-[#0A1414]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <BookOpen className="mt-6 h-6 w-6 text-[#C8EB00]" />

                    <h3 className="font-garage mt-4 text-[28px] font-black uppercase leading-[1.0]">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex gap-3 text-xs font-bold uppercase tracking-[0.15em]">
                      {item.credits && (
                        <span className="bg-[#C8EB00] px-3 py-2 text-[#0A1414]">
                          {item.credits}
                        </span>
                      )}
              
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      ) : null}

      {/* SECTIONS / ENTRY CRITERIA */}
      {programme.sections?.length ? (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-12 lg:grid-cols-[35%_65%]">
              <div>
                <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
                  Admissions
                </p>

                <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[78px]">
                  Entry
                  <br />
                  Criteria
                  <br />
                  & Fees
                </h2>
              </div>

              <div className="space-y-4">
                {programme.sections.map((section, index) => {
                  const isOpen = openSection === index;

                  return (
                    <div key={section.title} className="border border-black/10">
                      <button
                        onClick={() => setOpenSection(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between bg-[#F7F7F2] px-6 py-5 text-left"
                      >
                        <span className="font-garage text-[30px] font-black uppercase">
                          {section.title}
                        </span>

                        <ChevronDown
                          className={`h-6 w-6 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-6 bg-white p-6">
                              {typeof section.content === "string" ? (
                                <p className="text-lg leading-8 text-black/70">
                                  {section.content}
                                </p>
                              ) : (
                                Object.entries(section.content).map(
                                  ([country, points]) => (
                                    <div key={country}>
                                      <h3 className="font-garage text-[26px] font-black uppercase text-[#0A1414]">
                                        {country}
                                      </h3>

                                      <ul className="mt-3 space-y-2">
                                        {points.map((point, i) => (
                                          <li
                                            key={i}
                                            className="flex gap-3 text-black/70"
                                          >
                                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                                            <span>{point}</span>
                                            
                                          </li>
                                        ))}
                                        
                                      </ul>
  
                                    </div>
                                  )
                                )
                              )}
                                                                  {/* ENTRY REQUIREMENTS BUTTON */}
    <div className="mt-8 border-t border-black/10 pt-6">
      <Link
        href="/entry-requirements"
        className="font-garage group inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition duration-300 hover:bg-[#0A1414] hover:text-[#C8EB00]"
      >
        View Entry Requirements in Detail

        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* AWARD BODY */}
   
        <AccreditationsSlider/>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-garage text-[56px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[92px]">
            Ready To Begin
            <br />
            Your Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#0A1414]/75">
            Join UCA UAE and start building your creative future with
            confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={programme.cta?.applyLink || "https://admissions.uca.feuc.ae/enquiry_form"}
              className="font-garage inline-flex items-center gap-4 bg-[#0A1414] px-10 py-5 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="font-garage inline-flex items-center gap-4 border border-[#0A1414] px-10 py-5 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
            >
              Request Information
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}