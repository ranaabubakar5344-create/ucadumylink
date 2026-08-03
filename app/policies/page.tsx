"use client";

import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

const policies = [
  {
    id: 1,
    title: "Cultural Consideration Policy",
    desc: "Promotes respect for cultural diversity and inclusion within the UCA community.",
    pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf",
  },
  {
    id: 2,
    title: "Transportation Policy",
    desc: "Outlines student transportation services, parking regulations, and campus access guidelines.",
    pdf: "/policies/UCA-FEUC_TRANSPORTATION POLICY_v.1.docx 2025-2026.docx.pdf",
  },
  {
    id: 3,
    title: "Dress Code Policy",
    desc: "Sets expectations for professional and respectful attire on campus.",
    pdf: "/policies/UCA-FEUC_DRESS CODE POLICY_v.2.docx 2025-2026.docx.pdf",
  },
  {
    id: 4,
    title: "No Smoking Policy",
    desc: "Establishes a smoke-free campus environment for students, staff, and visitors.",
    pdf: "/policies/UCA-FEUC_NO-SMOKING POLICY_v.1.docx 2025-2026.docx.pdf",
  },
];

export default function PoliciesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0A1414]">
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#C8EB00_2px,transparent_2px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28">
          <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
            Policies & Regulations
          </p>

          <h1 className="font-garage mt-4 max-w-6xl text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[104px]">
            Campus
            <br />
            Policies
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
            Key policies that guide academic conduct, campus safety, and
            community standards at University for the Creative arts (UCA) delivered by Future Education University College (FEUC) .
          </p>

          <Link
            href="#policies-list"
            className="font-garage mt-8 inline-flex items-center gap-4 bg-[#C8EB00] px-8 py-4 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            View Policies
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F7F7F2] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[38%_62%]">
          <div>
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Introduction
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Safe,
              <br />
              Respectful
              <br />
              And
              <br />
              Professional
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/70">
            <p>
              University for the Creative Arts (UCA) Delivered By
FEUC UAQ is committed to maintaining
              a safe, respectful, and professional academic environment for all
              members of its community.
            </p>

            <p>
              These policies guide student behaviour, campus safety, and
              community standards so all students, staff, visitors, and partners
              understand their rights, responsibilities, and expected conduct.
            </p>

            <a
              href="mailto:Compliance@uca.feuc.ae"
              className="font-garage inline-flex items-center gap-3 bg-[#0A1414] px-6 py-3 text-[17px] font-black uppercase text-[#C8EB00] transition hover:bg-[#C8EB00] hover:text-[#0A1414]"
            >
              <Mail className="h-5 w-5" />
              Compliance@uca.feuc.ae
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Policy Areas
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Standards
              <br />
              That Shape
              <br />
              Our Community
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Student conduct and academic integrity",
              "Respect, inclusion and cultural consideration",
              "Campus safety, wellbeing and responsible behaviour",
              "Transportation, access and facility use",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 border border-black/10 bg-[#F7F7F2] p-6"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#C8EB00]" />
                <p className="text-lg leading-8 text-black/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="policies-list" className="bg-[#0A1414] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-sm font-bold uppercase tracking-[0.3em] text-[#C8EB00]">
              Documents
            </p>

            <h2 className="font-garage mt-4 text-[54px] font-black uppercase leading-[1.0] tracking-[-0.05em] md:text-[82px]">
              Privacy Policies
              <br />
              & Regulations
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="group border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#C8EB00] hover:bg-[#C8EB00] hover:text-[#0A1414]"
              >
                <div className="font-garage text-[52px] font-black leading-none text-[#C8EB00] group-hover:text-[#0A1414]">
                  {policy.id.toString().padStart(2, "0")}
                </div>

                <ShieldCheck className="mt-6 h-8 w-8 text-[#C8EB00] group-hover:text-[#0A1414]" />

                <h3 className="font-garage mt-5 text-[34px] font-black uppercase leading-[0.95]">
                  {policy.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 group-hover:text-[#0A1414]/75">
                  {policy.desc}
                </p>

                <a
                  href={policy.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-garage mt-6 inline-flex items-center gap-3 text-[17px] font-black uppercase text-[#C8EB00] group-hover:text-[#0A1414]"
                >
                  View Policy PDF
                  <FileText className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}