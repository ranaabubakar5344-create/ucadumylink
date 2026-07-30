"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccreditationsSlider from "./AccrediationSlider";
import { countries } from "@/app/data/countryRequirements";

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
const [selectedCountryCode, setSelectedCountryCode] = useState("");
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
const selectedCountry =
  countries.find((country) => country.code === selectedCountryCode) ?? null;

const getProgrammeRequirementType = () => {
  const programmeText = `${programme.title} ${programme.level ?? ""} ${
    programme.slug ?? ""
  }`.toLowerCase();

  if (
    programmeText.includes("pre-master") ||
    programmeText.includes("pre masters")
  ) {
    return "pre-masters";
  }

  if (
    programmeText.includes("master") ||
    programmeText.includes("mba") ||
    programmeText.includes("postgraduate")
  ) {
    return "postgraduate";
  }

  if (
    programmeText.includes("foundation") ||
    programmeText.includes("integrated foundation")
  ) {
    return "foundation";
  }

  return "undergraduate";
};

const requirementType = getProgrammeRequirementType();

const getRelevantCountryRequirement = () => {
  if (!selectedCountry) return null;

  if (requirementType === "undergraduate") {
    return selectedCountry.sections.find((item) =>
      item.title.toLowerCase().includes("undergraduate")
    );
  }

  if (requirementType === "foundation") {
    return selectedCountry.sections.find((item) =>
      item.title.toLowerCase().includes("foundation")
    );
  }

  const postgraduateSection = selectedCountry.sections.find((item) =>
    item.title.toLowerCase().includes("postgraduate")
  );

  if (!postgraduateSection) return null;

  if (requirementType === "pre-masters") {
    const preMasters = postgraduateSection.subsections?.find((item) =>
      item.title.toLowerCase().includes("pre-master")
    );

    return preMasters
      ? {
          title: preMasters.title,
          description: preMasters.description,
          items: preMasters.items,
        }
      : null;
  }

  const masters = postgraduateSection.subsections?.find(
    (item) =>
      item.title.toLowerCase().includes("master") &&
      !item.title.toLowerCase().includes("pre-master")
  );

  return masters
    ? {
        title: masters.title,
        description: masters.description,
        items: masters.items,
      }
    : null;
};


const relevantCountryRequirement = getRelevantCountryRequirement();
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

    const isEntryCriteria =
      section.title.toLowerCase().includes("entry criteria") ||
      section.title.toLowerCase().includes("entry requirements");

    return (
      <div
        key={`${section.title}-${index}`}
        className="overflow-hidden border border-black/10 bg-white"
      >
        {/* ACCORDION HEADER */}
        <div className="flex w-full flex-col bg-[#F7F7F2] md:flex-row md:items-center md:justify-between">
          {/* LEFT TITLE */}
          <button
            type="button"
            onClick={() => setOpenSection(isOpen ? -1 : index)}
            className="flex min-h-[72px] w-full items-center px-5 py-5 text-left md:min-h-[76px] md:flex-1 md:px-6"
          >
            <span className="font-garage text-[24px] font-black uppercase leading-none text-[#0A1414] sm:text-[27px] md:text-[30px]">
              {section.title}
            </span>
          </button>

          {/* ENTRY COUNTRY DROPDOWN */}
          {isEntryCriteria ? (
            <div className="flex w-full items-center gap-3 border-t border-black/10 px-4 py-4 md:w-auto md:shrink-0 md:border-l md:border-t-0 md:px-5">
              <div className="relative min-w-0 flex-1 md:w-[260px] md:flex-none">
                <select
                  value={selectedCountryCode}
                  onChange={(event) => {
                    const value = event.target.value;

                    if (value === "OTHER") {
                      window.open(
                        "https://www.uca.ac.uk/international/equivalent-qualifications/",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      return;
                    }

                    setSelectedCountryCode(value);

                    if (!isOpen) {
                      setOpenSection(index);
                    }
                  }}
                  className="h-12 w-full appearance-none border border-black/15 bg-white pl-4 pr-10 text-sm font-bold text-[#0A1414] outline-none transition focus:border-[#C8EB00] focus:ring-2 focus:ring-[#C8EB00]/20"
                >
                  <option value="" disabled>
                    Select your country
                  </option>

                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
              </div>

              <button
                type="button"
                aria-label={
                  isOpen
                    ? "Close entry requirements"
                    : "Open entry requirements"
                }
                onClick={() => setOpenSection(isOpen ? -1 : index)}
                className="flex h-12 w-12 shrink-0 items-center justify-center text-black"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ) : (
            <button
              type="button"
              aria-label={isOpen ? "Close section" : "Open section"}
              onClick={() => setOpenSection(isOpen ? -1 : index)}
              className="mx-4 mb-4 flex h-12 w-12 shrink-0 self-end items-center justify-center text-black md:mx-5 md:mb-0 md:self-auto"
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* ACCORDION CONTENT */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="bg-white p-6 md:p-8">
                {isEntryCriteria ? (
                  selectedCountry ? (
                    <div>
                      {/* SELECTED COUNTRY HEADING */}
                      <div className="mb-7 border-b border-black/10 pb-6">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#829B00]">
                          {selectedCountry.flag} Requirements for{" "}
                          {selectedCountry.name}
                        </p>

                        <h3 className="font-garage mt-2 text-[28px] font-black uppercase leading-none text-[#0A1414] sm:text-[34px]">
                          {requirementType === "undergraduate" &&
                            "Undergraduate Entry Requirements"}

                          {requirementType === "foundation" &&
                            "Foundation Entry Requirements"}

                          {requirementType === "postgraduate" &&
                            "Master’s Entry Requirements"}

                          {requirementType === "pre-masters" &&
                            "Integrated Pre-Master’s Requirements"}
                        </h3>
                      </div>

                      {/* REQUIREMENTS AVAILABLE */}
                      {relevantCountryRequirement ? (
                        <div>
                          {relevantCountryRequirement.description && (
                            <p className="mb-6 max-w-4xl text-base leading-8 text-black/65">
                              {relevantCountryRequirement.description}
                            </p>
                          )}

                          {relevantCountryRequirement.items?.length ? (
                            <ul className="space-y-3">
                              {relevantCountryRequirement.items.map(
                                (point, pointIndex) => (
                                  <li
                                    key={`${selectedCountry.code}-${requirementType}-${pointIndex}`}
                                    className="flex gap-3 border-b border-black/10 pb-4 text-black/70 last:border-b-0"
                                  >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#C8EB00]">
                                      <CheckCircle2 className="h-4 w-4 text-[#0A1414]" />
                                    </span>

                                    <span className="leading-7">{point}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : null}

                          {relevantCountryRequirement.subsections?.length ? (
                            <div className="space-y-7">
                              {relevantCountryRequirement.subsections.map(
                                (subsection, subsectionIndex) => (
                                  <div
                                    key={`${subsection.title}-${subsectionIndex}`}
                                    className="border-b border-black/10 pb-7 last:border-b-0"
                                  >
                                    <h4 className="font-garage text-[24px] font-black uppercase text-[#0A1414]">
                                      {subsection.title}
                                    </h4>

                                    {subsection.description && (
                                      <p className="mt-3 leading-7 text-black/65">
                                        {subsection.description}
                                      </p>
                                    )}

                                    <ul className="mt-5 space-y-3">
                                      {subsection.items.map(
                                        (point, pointIndex) => (
                                          <li
                                            key={`${subsection.title}-${pointIndex}`}
                                            className="flex gap-3 text-black/70"
                                          >
                                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />

                                            <span className="leading-7">
                                              {point}
                                            </span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="border-l-4 border-[#C8EB00] bg-[#F7F7F2] p-5">
                          <p className="leading-7 text-black/65">
                            Requirements for this programme type are not
                            currently available for {selectedCountry.name}.
                            Please view the official UCA UK qualifications page.
                          </p>
                        </div>
                      )}

                      {/* ACTION BUTTONS */}
                      <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row">
                        <Link
                          href="/entry-requirements"
                          className="font-garage group inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-7 py-4 text-[16px] font-black uppercase text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
                        >
                          View All Entry Requirements

                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                          href="https://admissions.uca.feuc.ae/enquiry_form"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-garage group inline-flex items-center justify-center gap-3 border border-[#0A1414] px-7 py-4 text-[16px] font-black uppercase text-[#0A1414] transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
                        >
                          Ask Admissions

                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* NO COUNTRY SELECTED */
                    <div className="flex min-h-[230px] flex-col items-center justify-center border border-black/10 bg-[#F7F7F2] px-6 py-12 text-center">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                        <GraduationCap className="h-7 w-7" />
                      </div>

                 
                      <h3 className="font-garage mt-3 max-w-xl text-[28px] font-black uppercase leading-[1] text-[#0A1414] sm:text-[36px]">
                        Select Your Country To See Your Requirements
                      </h3>

                      <p className="mt-4 max-w-lg text-base leading-7 text-black/60">
                        Choose your country from the dropdown above to view the
                        relevant entry requirements for this programme.
                      </p>
                    </div>
                  )
                ) : typeof section.content === "string" ? (
                  /* NORMAL TEXT SECTION */
                  <p className="text-lg leading-8 text-black/70">
                    {section.content}
                  </p>
                ) : (
                  /* NORMAL OBJECT SECTION */
                  <div className="space-y-6">
                    {Object.entries(section.content).map(
                      ([heading, points]) => (
                        <div key={heading}>
                          <h3 className="font-garage text-[26px] font-black uppercase text-[#0A1414]">
                            {heading}
                          </h3>

                          <ul className="mt-3 space-y-2">
                            {points.map((point, pointIndex) => (
                              <li
                                key={`${heading}-${pointIndex}`}
                                className="flex gap-3 text-black/70"
                              >
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C8EB00]" />
                                <span className="leading-7">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                )}
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
            Join University for the creative arts delivered by FEUC and start building your creative future with
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

           
          </div>
        </div>
      </section>
    </main>
  );
}