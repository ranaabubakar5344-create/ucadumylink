import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Briefcase,
  CheckCircle2,
  Globe2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "UK-Recognised Qualifications",
    description:
      "Programmes awarded by the University for the Creative Arts (UCA), ensuring academic credibility and international recognition.",
  },
  {
    icon: MapPin,
    title: "Delivered in Umm Al Quwain",
    description:
      "Study locally in UAE — a global hub for creativity, innovation, and professional opportunity.",
  },
  {
    icon: Briefcase,
    title: "Industry-Aligned Curriculum",
    description:
      "Curriculum shaped by contemporary industry practice to prepare students for real professional environments.",
  },
];

const outcomes = [
  {
    icon: Globe2,
    title: "International Recognition",
    description: "UK-awarded qualifications respected globally.",
  },
  {
    icon: Sparkles,
    title: "Career-Focused Skills",
    description: "Practical, industry-relevant creative skillsets.",
  },
  {
    icon: GraduationCap,
    title: "Global Progression",
    description: "Pathways to employment, entrepreneurship, or further study.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      {/* HERO */}
      <section className="relative min-h-[640px] overflow-hidden bg-[#0A1414] text-white">
        <Image
          src="/indus.webp"
          alt="Why Choose University for the Creative Arts"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_25%] opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1414] via-[#0A1414]/80 to-[#0A1414]/30" />

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-24">
          <div className="max-w-4xl">
       

            <h1 className="font-garage mt-5 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[96px]">
              Why Choose
              <br />
             UCA, delivered by FEUC 
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white">
              Shape your creative future with internationally recognised
              programmes delivered in Umm Al Quwain in partnership with the University
              for the Creative Arts.
            </p>

            <Link
              href="#why-uca"
              className="font-garage mt-9 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Discover More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="why-uca" className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Why Choose UCA, delivered by FEUC
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              A Trusted
              <br />
              Pathway To
              <br />
              Global Creative
              <br />
              Careers
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/70">
            <p>
             UCA, delivered by Future Education University College (FEUC), offers internationally recognised UK degree programmes designed to foster creativity, innovation, and academic excellence.

            </p>

            <p>
           Our programmes are awarded by the University for the Creative Arts (UCA), UK, and are delivered in the UAE through FEUC, combining globally recognised education with the professional and cultural context of the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Key Differentiators
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              What Sets
              <br />
            UCA delivered by FEUC
              <br />
              Apart
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-[#F7F7F2] p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[34px] font-black uppercase leading-[1.0]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/65 transition group-hover:text-white/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE */}
      <section className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[36%_64%]">
          <div>
            <Building2 className="h-12 w-12 text-[#C8EB00]" />

            <h2 className="font-garage mt-5 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Academic
              <br />
              Excellence
              <br />
              & Student
              <br />
              Support
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-lg leading-8 text-white">
            University for the creative arts delivered by FEUC maintains a strong academic framework supported by
              experienced faculty, structured assessment, and continuous
              academic guidance. Students receive dedicated support throughout
              their academic journey.
            </p>

            {[
              "Experienced academic and industry faculty",
              "Structured learning and assessment framework",
              "Academic advising and career guidance",
              "Independent thinking, creative discipline and professional responsibility",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Graduate Outcomes
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[82px]">
              Where Your
              <br />
              Journey Can
              <br />
              Lead
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-black/10 bg-white p-7 transition hover:border-[#C8EB00] hover:bg-[#0A1414] hover:text-white"
                >
                  <Icon className="h-10 w-10 text-[#C8EB00]" />

                  <h3 className="font-garage mt-6 text-[34px] font-black uppercase leading-[0.95]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/65 transition group-hover:text-white/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#C8EB00] py-20 text-[#0A1414] md:py-24">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle,#0A1414_2px,transparent_2px)] bg-[size:24px_24px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Award className="mx-auto h-12 w-12" />

          <h2 className="font-garage mt-5 text-[56px] font-black uppercase leading-[1.1] tracking-[-0.05em] md:text-[88px]">
            Start Your
            <br />
            Creative Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#0A1414]/75">
            Study locally in Umm Al Quwain  with internationally recognised creative
            education designed for global opportunity.
          </p>

          <Link
            href="https://admissions.uca.feuc.ae/registration"
            className="font-garage mt-10 inline-flex items-center gap-4 bg-[#0A1414] px-9 py-4 text-[18px] font-black uppercase text-[#C8EB00] transition hover:bg-white hover:text-[#0A1414]"
          >
            Apply Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}