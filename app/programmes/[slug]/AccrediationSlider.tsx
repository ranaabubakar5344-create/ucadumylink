"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

type Accreditation = {
  name: string;
  description: string;
  logo: string;
};

const ACCREDITATIONS: Accreditation[] = [
  {
    name: "UK Government",
    description:
      "Recognised under UK Government frameworks, ensuring academic credibility and compliance with international education standards.",
    logo: "/gov_uk.png",
  },
  {
    name: "British Council",
    description:
      "Aligned with British Council quality benchmarks, supporting international education excellence and global student mobility.",
    logo: "/brit.jpg",
  },
  {
    name: "Quality Assurance Agency (QAA)",
    description:
      "Quality assured by the UK's Quality Assurance Agency, safeguarding academic standards and learning outcomes.",
    logo: "/quality-mark.png",
  },
  {
    name: "Rookies",
    description:
      "Recognised by The Rookies for excellence in creative education and graduate employability.",
    logo: "/2023-School-Rankings.png",
  },
];

export default function AccreditationsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ACCREDITATIONS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % ACCREDITATIONS.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? ACCREDITATIONS.length - 1 : prev - 1
    );

  const current = ACCREDITATIONS[index];

  return (
    <section className="relative overflow-hidden bg-[#F8F8F3] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#C8EB00_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Recognition
          </p>

          <h2 className="font-garage mt-4 text-[52px] font-black uppercase leading-[1.02] md:text-[82px]">
            Accreditations &
            <br />
            Quality Assurance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/65">
            UCA Delivered By FEUC UAE maintains internationally recognised academic quality,
            giving students confidence in the value of their qualification.
          </p>
        </div>

        <div className="overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-[65%_35%]">
            {/* LEFT */}
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8EB00]">
                  <ShieldCheck className="h-8 w-8 text-[#0A1414]" />
                </div>

                <h3 className="font-garage text-[34px] font-black uppercase leading-none">
                  {current.name}
                </h3>
              </div>

              <p className="mt-8 text-lg leading-8 text-black/70">
                {current.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#C8EB00] px-5 py-2 text-sm font-bold text-[#0A1414]">
                  Global Recognition
                </span>

                <span className="rounded-full border border-black/15 px-5 py-2 text-sm font-bold">
                  Quality Assured
                </span>

                <span className="rounded-full border border-black/15 px-5 py-2 text-sm font-bold">
                  International Standards
                </span>
              </div>

              <div className="mt-10 h-2 overflow-hidden rounded-full bg-black/10">
                <div
                  className="h-full bg-[#C8EB00] transition-all duration-500"
                  style={{
                    width: `${((index + 1) / ACCREDITATIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center bg-[#0A1414] p-10">
              <div className="flex h-[240px] w-[240px] items-center justify-center rounded-[28px] bg-white p-8 shadow-2xl">
                <Image
                  src={current.logo}
                  alt={current.name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 border-t border-black/10 py-6">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition hover:bg-[#0A1414] hover:text-[#C8EB00]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}