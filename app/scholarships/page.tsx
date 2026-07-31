import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Percent,
} from "lucide-react";

const scholarshipCriteria = [
  {
    title: "Academic Performance",
    description:
      "Your previous academic results and overall educational performance will be reviewed.",
    icon: GraduationCap,
  },
  {
    title: "Previous Qualifications",
    description:
      "Your completed qualifications will be assessed as part of the scholarship review.",
    icon: BookOpenCheck,
  },
  {
    title: "Supporting Documentation",
    description:
      "All required supporting documents must be submitted for consideration.",
    icon: FileCheck2,
  },
  {
    title: "Scholarship Assessment",
    description:
      "A scholarship assessment may be required where applicable.",
    icon: ClipboardCheck,
  },
  {
    title: "Overall Eligibility",
    description:
      "Your complete application will be reviewed to determine overall eligibility.",
    icon: CheckCircle2,
  },
];

export default function ScholarshipsPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7F7F2] text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute -right-32 -top-32 h-[470px] w-[470px] rounded-full bg-[#C8EB00]/10 blur-3xl" />
        <div className="absolute -bottom-44 left-1/4 h-[430px] w-[430px] rounded-full bg-[#C8EB00]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="font-neue text-xs font-bold uppercase tracking-[0.3em] text-[#C8EB00] sm:text-sm">
              UCA Delivered By FEUC UAE Scholarships
            </p>

            <h1 className="font-garage mt-6 text-[46px] font-black uppercase leading-[0.9] tracking-[-0.045em] min-[380px]:text-[50px] sm:text-[70px] md:text-[104px] lg:text-[120px]">
  Merit
  <br />
  <span className="text-[#C8EB00]">Scholarships</span>
</h1>
          </div>

          <div className="border-l-4 border-[#C8EB00] pl-6">
            <p className="text-lg leading-8 text-white/75 md:text-xl">
              Eligible students enrolled in selected programmes may receive a
              Merit Scholarship of up to 50%.
            </p>

            <Link
               href="https://wa.me/971566761798"
  target="blank"
              className="font-garage group mt-8 inline-flex items-center gap-3 bg-[#C8EB00] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Enquire About Scholarships
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#CBE800]">
                Scholarship Opportunity
              </p>

              <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-[62px] md:text-[76px]">
                Supporting
                <br />
                Student
                <br />
                Success
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-lg leading-8 text-black/70 md:text-xl md:leading-9">
                The University for the Creative Arts (UCA), UK, delivered by
                Future Education University College (FEUC), UAE, offers Merit
                Scholarships of up to 50% for eligible students enrolled in
                selected programmes.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                <div className="border border-black/10 bg-[#F7F7F2] p-6">
                  <Percent className="h-9 w-9 text-[#CBE800]" />

                  <p className="font-garage mt-5 text-[28px] font-black uppercase leading-none">
                    Up To 50%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    Merit scholarship support for eligible applicants.
                  </p>
                </div>

                <div className="border border-black/10 bg-[#0A1414] p-6 text-white">
                  <Award className="h-9 w-9 text-[#C8EB00]" />

                  <p className="font-garage mt-5 text-[28px] font-black uppercase leading-none">
                    Selected Programmes
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Scholarships are available for eligible students enrolled
                    in selected programmes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="bg-[#F7F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-4xl">
            <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#CBE800]">
              Scholarship Criteria
            </p>

            <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-[64px] md:text-[82px]">
              How Scholarships
              <br />
              Are Assessed
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/65 md:text-lg">
              Scholarships are awarded based on a review of the following
              criteria.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scholarshipCriteria.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group min-h-[260px] border p-7 transition duration-300 hover:-translate-y-1 ${
                    index === scholarshipCriteria.length - 1
                      ? "border-[#C8EB00] bg-[#0A1414] text-white md:col-span-2 lg:col-span-1"
                      : "border-black/10 bg-white hover:border-[#C8EB00]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center ${
                      index === scholarshipCriteria.length - 1
                        ? "bg-[#C8EB00] text-[#0A1414]"
                        : "bg-[#0A1414] text-[#C8EB00]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <p className="font-neue mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#CBEB00]">
                    0{index + 1}
                  </p>

                  <h3 className="font-garage mt-3 text-[28px] font-black uppercase leading-[0.95]">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 leading-7 ${
                      index === scholarshipCriteria.length - 1
                        ? "text-white/65"
                        : "text-black/60"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL REVIEW */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden border border-black/10">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#C8EB00] p-8 md:p-12">
                <Award className="h-12 w-12" />

                <p className="font-neue mt-8 text-xs font-bold uppercase tracking-[0.25em]">
                  Final Scholarship Decision
                </p>

                <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-[60px]">
                  Complete
                  <br />
                  Application
                  <br />
                  Review
                </h2>
              </div>

              <div className="flex flex-col justify-center bg-[#0A1414] p-8 text-white md:p-12">
                <p className="text-lg leading-9 text-white/75 md:text-xl">
                  The final scholarship award will be determined following a
                  comprehensive review of each applicant&apos;s submission and
                  supporting documents.
                </p>
{/* 
                <div className="mt-8 border-l-4 border-[#C8EB00] bg-white/[0.04] p-6">
                  <p className="leading-7 text-white/70">
                    Submission of an application does not automatically
                    guarantee a scholarship award. Each application is reviewed
                    according to the stated scholarship criteria and overall
                    eligibility.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="scholarship-enquiry"
        className="relative overflow-hidden bg-[#0A1414] py-16 text-white md:py-24"
      >
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#C8EB00]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00]">
              Scholarship Enquiry
            </p>

            <h2 className="font-garage mt-5 text-[46px] font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-[62px] md:text-[74px]">
              Start Your
              <br />
              Scholarship Enquiry
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white md:text-lg">
              Submit your enquiry and the admissions team will contact you with
              further guidance.
            </p>
          </div>

          <Link
  href="https://wa.me/971566761798"
  target="blank"
            className="font-garage group inline-flex w-fit shrink-0 items-center justify-center gap-3 bg-[#C8EB00] px-8 py-5 text-[18px] font-black uppercase text-[#0A1414] transition hover:bg-white"
          >
            Submit Enquiry
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}