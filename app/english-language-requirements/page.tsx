import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  GraduationCap,
  Languages,
  ShieldCheck,
} from "lucide-react";

const acceptedSeltTests = [
  "IELTS for UKVI",
  "LanguageCert International ESOL SELT",
  "Pearson Test of English (PTE) Academic UKVI",
  "Trinity College London Integrated Skills in English (ISE) SELT — if you are in the UK",
  "PSI SELT — if you are outside the UK",
];

const seltExemptions = [
  "You are studying a degree course at RQF Level 6 or above and have taken one of the accepted non-SELT tests within two years of your course start date.",
  "You are a national of a majority English-speaking country, as defined by UKVI, and completed your academic qualifications in that country.",
];

type EnglishTestRow = {
  test: string;
  note?: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
  total: string;
};

type EnglishTestSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tests: EnglishTestRow[];
};

const englishTestSections: EnglishTestSection[] = [
  {
    id: "undergraduate",
    eyebrow: "Undergraduate Degrees",
    title: "BA / BSc",
    description:
      "Accepted English-language tests for undergraduate degree applicants.",
    tests: [
      {
        test: "IELTS UKVI or Academic",
        note: "Online test accepted",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "6.0",
      },
      {
        test: "TOEFL iBT",
        note: "Online test not accepted",
        listening: "17",
        reading: "18",
        speaking: "20",
        writing: "17",
        total: "72",
      },
      {
        test: "TOEFL iBT — New Scoring System",
        note: "For tests taken from 21 January 2026 onwards",
        listening: "4",
        reading: "4",
        speaking: "4",
        writing: "4",
        total: "4",
      },
      {
        test: "Pearson PTE Academic",
        listening: "59",
        reading: "59",
        speaking: "59",
        writing: "59",
        total: "59",
      },
      {
        test: "CAE or CPE",
        note: "C1 Advanced or C2 Proficiency",
        listening: "162",
        reading: "162",
        speaking: "162",
        writing: "162",
        total: "169",
      },
      {
        test: "Trinity ISE",
        listening: "Merit",
        reading: "Merit",
        speaking: "Merit",
        writing: "Merit",
        total: "ISE II",
      },
      {
        test: "LanguageCert International ESOL SELT",
        note:
          "Online test accepted. Valid for two years from the test date. Test retired from 1 April 2024.",
        listening: "33",
        reading: "33",
        speaking: "33",
        writing: "33",
        total: "B2 Communicator Pass",
      },
      {
        test: "LanguageCert Academic",
        note: "Online test accepted",
        listening: "60",
        reading: "60",
        speaking: "60",
        writing: "60",
        total: "65",
      },
      {
        test: "Password Skills Plus",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "6",
      },
      {
        test: "Kaplan Test of English",
        listening: "410",
        reading: "410",
        speaking: "410",
        writing: "410",
        total: "444",
      },
      {
        test: "Duolingo English Test",
        note: "China only — January and September 2026 entry",
        listening: "100",
        reading: "100",
        speaking: "100",
        writing: "100",
        total: "110",
      },
      {
        test: "Oxford English Language Level Test",
        note: "ELLT",
        listening: "5",
        reading: "5",
        speaking: "5",
        writing: "5",
        total: "6",
      },
    ],
  },

  {
    id: "undergraduate-foundation",
    eyebrow: "Integrated Foundation Year",
    title: "Undergraduate With Foundation",
    description:
      "Accepted English-language tests for undergraduate degrees with an Integrated Foundation Year.",
    tests: [
      {
        test: "IELTS UKVI or Academic",
        note: "Online test accepted",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "5.5",
      },
      {
        test: "TOEFL iBT",
        note: "Online test not accepted",
        listening: "17",
        reading: "18",
        speaking: "20",
        writing: "17",
        total: "72",
      },
      {
        test: "TOEFL iBT — New Scoring System",
        note: "For tests taken from 21 January 2026 onwards",
        listening: "4",
        reading: "4",
        speaking: "4",
        writing: "4",
        total: "4",
      },
      {
        test: "Pearson PTE Academic",
        listening: "59",
        reading: "59",
        speaking: "59",
        writing: "59",
        total: "59",
      },
      {
        test: "CAE or CPE",
        note: "C1 Advanced or C2 Proficiency",
        listening: "162",
        reading: "162",
        speaking: "162",
        writing: "162",
        total: "162",
      },
      {
        test: "Trinity ISE",
        listening: "Merit",
        reading: "Merit",
        speaking: "Merit",
        writing: "Merit",
        total: "ISE II",
      },
      {
        test: "LanguageCert International ESOL SELT",
        note:
          "Online test accepted. Valid for two years from the test date. Test retired from 1 April 2024.",
        listening: "33",
        reading: "33",
        speaking: "33",
        writing: "33",
        total: "B2 Communicator Pass",
      },
      {
        test: "LanguageCert Academic",
        note: "Online test accepted",
        listening: "60",
        reading: "60",
        speaking: "60",
        writing: "60",
        total: "60",
      },
      {
        test: "Password Skills Plus",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "5.5",
      },
      {
        test: "Kaplan Test of English",
        listening: "410",
        reading: "410",
        speaking: "410",
        writing: "410",
        total: "410",
      },
      {
        test: "Duolingo English Test",
        note: "China only — January and September 2026 entry",
        listening: "100",
        reading: "100",
        speaking: "100",
        writing: "100",
        total: "100",
      },
      {
        test: "Oxford English Language Level Test",
        note: "ELLT",
        listening: "5",
        reading: "5",
        speaking: "5",
        writing: "5",
        total: "5",
      },
    ],
  },

  {
    id: "masters",
    eyebrow: "Postgraduate Degrees",
    title: "MA / MSc",
    description:
      "Accepted English-language tests for Master's degree applicants.",
    tests: [
      {
        test: "IELTS UKVI or Academic",
        note: "Online test accepted",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "6.5",
      },
      {
        test: "IELTS UKVI or Academic",
        note: "China only — from September 2026 entry",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "6.0",
      },
      {
        test: "TOEFL iBT",
        note: "Online test not accepted — September 2026 entry",
        listening: "17",
        reading: "18",
        speaking: "20",
        writing: "17",
        total: "79",
      },
      {
        test: "TOEFL iBT — New Scoring System",
        note: "For tests taken from 21 January 2026 onwards",
        listening: "4",
        reading: "4",
        speaking: "4",
        writing: "4",
        total: "4.5",
      },
      {
        test: "Pearson PTE Academic",
        listening: "59",
        reading: "59",
        speaking: "59",
        writing: "59",
        total: "59",
      },
      {
        test: "CAE or CPE",
        note: "C1 Advanced or C2 Proficiency",
        listening: "162",
        reading: "162",
        speaking: "162",
        writing: "162",
        total: "176",
      },
      {
        test: "Trinity ISE",
        listening: "Pass",
        reading: "Pass",
        speaking: "Pass",
        writing: "Pass",
        total: "ISE III",
      },
      {
        test: "LanguageCert International ESOL SELT",
        note:
          "Online test accepted. Valid for two years from the test date. Test retired from 1 April 2024.",
        listening: "38",
        reading: "38",
        speaking: "38",
        writing: "38",
        total: "B2 Communicator High Pass",
      },
      {
        test: "LanguageCert Academic",
        note: "Online test accepted",
        listening: "60",
        reading: "60",
        speaking: "60",
        writing: "60",
        total: "70",
      },
      {
        test: "Password Skills Plus",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "6.5",
      },
      {
        test: "Kaplan Test of English",
        listening: "410",
        reading: "410",
        speaking: "410",
        writing: "410",
        total: "478",
      },
      {
        test: "Duolingo English Test",
        note: "China only — January and September 2026 entry",
        listening: "100",
        reading: "100",
        speaking: "100",
        writing: "100",
        total: "120",
      },
      {
        test: "Oxford English Language Level Test",
        note: "ELLT",
        listening: "6",
        reading: "6",
        speaking: "6",
        writing: "6",
        total: "7",
      },
    ],
  },

  {
    id: "pre-masters-30-weeks",
    eyebrow: "Integrated Pre-Master's",
    title: "30-Week Pre-Master's",
    description:
      "Accepted English-language tests for postgraduate degrees with a 30-week Integrated Pre-Master's course.",
    tests: [
      {
        test: "IELTS UKVI or Academic",
        note: "Online test accepted",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "5.5",
      },
      {
        test: "TOEFL iBT",
        note: "Online test not accepted",
        listening: "17",
        reading: "18",
        speaking: "20",
        writing: "17",
        total: "72",
      },
      {
        test: "TOEFL iBT — New Scoring System",
        note: "For tests taken from 21 January 2026 onwards",
        listening: "4",
        reading: "4",
        speaking: "4",
        writing: "4",
        total: "4",
      },
      {
        test: "Pearson PTE Academic",
        listening: "59",
        reading: "59",
        speaking: "59",
        writing: "59",
        total: "59",
      },
      {
        test: "CAE or CPE",
        note: "C1 Advanced or C2 Proficiency",
        listening: "162",
        reading: "162",
        speaking: "162",
        writing: "162",
        total: "162",
      },
      {
        test: "Trinity ISE",
        listening: "Merit",
        reading: "Merit",
        speaking: "Merit",
        writing: "Merit",
        total: "ISE II",
      },
      {
        test: "LanguageCert International ESOL SELT",
        note:
          "Online test accepted. Valid for two years from the test date. Test retired from 1 April 2024.",
        listening: "33",
        reading: "33",
        speaking: "33",
        writing: "33",
        total: "B2 Communicator Pass",
      },
      {
        test: "LanguageCert Academic",
        note: "Online test accepted",
        listening: "60",
        reading: "60",
        speaking: "60",
        writing: "60",
        total: "60",
      },
      {
        test: "Password Skills Plus",
        listening: "5.5",
        reading: "5.5",
        speaking: "5.5",
        writing: "5.5",
        total: "5.5",
      },
      {
        test: "Kaplan Test of English",
        listening: "410",
        reading: "410",
        speaking: "410",
        writing: "410",
        total: "410",
      },
      {
        test: "Duolingo English Test",
        note: "China only — January and September 2026 entry",
        listening: "100",
        reading: "100",
        speaking: "100",
        writing: "100",
        total: "100",
      },
      {
        test: "Oxford English Language Level Test",
        note: "ELLT",
        listening: "5",
        reading: "5",
        speaking: "5",
        writing: "5",
        total: "5",
      },
    ],
  },
];

export default function EnglishLanguageRequirementsPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7F7F2] text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute -right-28 -top-28 h-[460px] w-[460px] rounded-full bg-[#C8EB00]/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#C8EB00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00] sm:text-sm">
            International Admissions
          </p>

          <h1 className="font-garage mt-6 max-w-6xl text-[50px] font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-[72px] md:text-[96px] lg:text-[112px]">
            English Language
            <br />
            <span className="text-[#C8EB00]">Requirements</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 md:text-xl">
            Learn which English-language tests are accepted and what scores you
            need for study.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#CBE800]">
                Accepted Language Tests
              </p>

              <h2 className="font-garage mt-5 text-[48px] font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-[62px] md:text-[76px]">
                Proving Your
                <br />
                English
                <br />
                Ability
              </h2>
            </div>

           
          </div>
        </div>
      </section>

      {/* SELT SECTION */}
      <section className="bg-[#F7F7F2] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden border border-black/10 bg-white">
            <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">
              <div className="bg-[#0A1414] p-8 text-white md:p-10">
                <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <p className="font-neue mt-8 text-xs font-bold uppercase tracking-[0.24em] text-[#C8EB00]">
                  Student Route Visa
                </p>

                <h2 className="font-garage mt-4 text-[42px] font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-[50px]">
                  Secure English
                  <br />
                  Language Test
                </h2>
              </div>

              <div className="p-7 md:p-10">
                <p className="text-base leading-8 text-black/70 md:text-lg">
                  Students who need a Student Route visa for a below-degree
                  course at RQF Level 3 or 4 must take an English-language test
                  recognised by the Home Office.
                </p>

                <p className="mt-5 leading-8 text-black/65">
                  This includes courses such as International Foundation,
                  Further Education and Pre-sessional English-language courses.
                  The approved test is called a Secure English Language Test,
                  or SELT.
                </p>

                <h3 className="font-garage mt-9 text-[28px] font-black uppercase leading-none">
                  Accepted SELT Tests
                </h3>

                <div className="mt-6 space-y-3">
                  {acceptedSeltTests.map((test) => (
                    <div
                      key={test}
                      className="flex items-start gap-4 border-b border-black/10 pb-4 last:border-b-0"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#C8EB00]">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>

                      <p className="leading-7 text-black/70">{test}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 bg-[#C8EB00]/20 p-5">
                  <Clock3 className="mt-1 h-6 w-6 shrink-0" />

                  <p className="leading-7 text-black/70">
                    A SELT is valid for two years. Before applying, make sure
                    your test will still be valid on the required date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELT EXEMPTIONS */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00]">
                <FileCheck2 className="h-7 w-7" />
              </div>

              <p className="font-neue mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#CBE800]">
                SELT Exemptions
              </p>

              <h2 className="font-garage mt-4 text-[45px] font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-[58px]">
                When A SELT
                <br />
                May Not Be
                <br />
                Required
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-black/70">
                Students who require a Student Route visa may not need to take
                a SELT where one of the following applies:
              </p>

              <div className="mt-8 space-y-5">
                {seltExemptions.map((item, index) => (
                  <div
                    key={item}
                    className="grid gap-4 border border-black/10 bg-[#F7F7F2] p-6 sm:grid-cols-[52px_minmax(0,1fr)]"
                  >
                    <div className="font-garage flex h-12 w-12 items-center justify-center bg-[#0A1414] text-[23px] font-black text-[#C8EB00]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="leading-8 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERGRADUATE TABLE */}
    <section className="bg-[#F7F7F2] py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#CBE800]">
          Accepted English Tests
        </p>

        <h2 className="font-garage mt-4 text-[48px] font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-[64px] md:text-[78px]">
          Required
          <br />
          Test Scores
        </h2>
      </div>
{/* 
      <p className="max-w-3xl text-base leading-8 text-black/65 md:text-lg">
        Review the minimum component and total scores required for each study
        level.
      </p> */}
    </div>

    {/* QUICK NAVIGATION */}
    <div className="mb-14 flex flex-wrap gap-3">
      {englishTestSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="font-garage inline-flex items-center justify-center border border-[#0A1414] bg-white px-5 py-3 text-[15px] font-black uppercase text-[#0A1414] transition hover:border-[#C8EB00] hover:bg-[#C8EB00]"
        >
          {section.title}
        </a>
      ))}
    </div>

    <div className="space-y-20">
      {englishTestSections.map((section, sectionIndex) => (
        <div
          key={section.id}
          id={section.id}
          className="scroll-mt-32"
        >
          {/* TABLE HEADING */}
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-neue text-xs font-bold uppercase tracking-[0.24em] text-[#CBE800]">
                {section.eyebrow}
              </p>

              <h3 className="font-garage mt-3 text-[40px] font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-[54px]">
                {section.title}
              </h3>
            </div>

            <p className="max-w-3xl leading-7 text-black/65">
              {section.description}
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(10,20,20,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1080px] border-collapse">
                <thead>
                  <tr className="bg-[#0A1414] text-left text-white">
                    <th className="w-[360px] px-6 py-5 text-xs font-black uppercase tracking-[0.14em] text-[#C8EB00]">
                      Test
                    </th>

                    <th className="px-5 py-5 text-xs font-black uppercase tracking-[0.14em]">
                      Listening
                    </th>

                    <th className="px-5 py-5 text-xs font-black uppercase tracking-[0.14em]">
                      Reading
                    </th>

                    <th className="px-5 py-5 text-xs font-black uppercase tracking-[0.14em]">
                      Speaking
                    </th>

                    <th className="px-5 py-5 text-xs font-black uppercase tracking-[0.14em]">
                      Writing
                    </th>

                    <th className="min-w-[150px] px-5 py-5 text-xs font-black uppercase tracking-[0.14em] text-[#C8EB00]">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {section.tests.map((test, testIndex) => (
                    <tr
                      key={`${section.id}-${test.test}-${testIndex}`}
                      className="border-b border-black/10 transition last:border-b-0 hover:bg-[#F7F7F2]"
                    >
                      <td className="px-6 py-5 align-top">
                        <p className="font-bold leading-6 text-[#0A1414]">
                          {test.test}
                        </p>

                        {test.note && (
                          <p className="mt-2 max-w-[330px] text-xs leading-5 text-black/55">
                            {test.note}
                          </p>
                        )}
                      </td>

                      <td className="px-5 py-5 align-top font-semibold text-black/70">
                        {test.listening}
                      </td>

                      <td className="px-5 py-5 align-top font-semibold text-black/70">
                        {test.reading}
                      </td>

                      <td className="px-5 py-5 align-top font-semibold text-black/70">
                        {test.speaking}
                      </td>

                      <td className="px-5 py-5 align-top font-semibold text-black/70">
                        {test.writing}
                      </td>

                      <td className="px-5 py-5 align-top">
                        <span className="inline-flex max-w-[190px] bg-[#C8EB00] px-3 py-2 text-sm font-black leading-5 text-[#0A1414]">
                          {test.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-2 border-t border-black/10 bg-[#0A1414] px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-white/65">
                On smaller screens, scroll horizontally to view all score
                columns.
              </p>

              {/* <a
                href="#accepted-language-tests"
                className="font-garage text-sm font-black uppercase text-[#C8EB00] hover:text-white"
              >
                Back To Top
              </a> */}
            </div>
          </div>

          {sectionIndex < englishTestSections.length - 1 && (
            <div className="mt-20 h-px bg-black/10" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* IMPORTANT INFORMATION */}
      {/* <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="border border-black/10 bg-[#F7F7F2] p-7">
              <Languages className="h-9 w-9 text-[#CBE800]" />

              <h3 className="font-garage mt-6 text-[28px] font-black uppercase leading-none">
                Approved Tests
              </h3>

              <p className="mt-4 leading-7 text-black/65">
                Your English-language test must be accepted for your study level
                and visa circumstances.
              </p>
            </div>

            <div className="border border-black/10 bg-[#F7F7F2] p-7">
              <Clock3 className="h-9 w-9 text-[#CBE800]" />

              <h3 className="font-garage mt-6 text-[28px] font-black uppercase leading-none">
                Test Validity
              </h3>

              <p className="mt-4 leading-7 text-black/65">
                Where a two-year validity period applies, your result must still
                be valid within the required timeframe.
              </p>
            </div>

            <div className="border border-[#C8EB00] bg-[#0A1414] p-7 text-white">
              <GraduationCap className="h-9 w-9 text-[#C8EB00]" />

              <h3 className="font-garage mt-6 text-[28px] font-black uppercase leading-none">
                Course Requirements
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Some programmes may apply additional or course-specific
                English-language requirements.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A1414] py-16 text-white md:py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C8EB00]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-9 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#C8EB00]">
              Admissions Guidance
            </p>

            <h2 className="font-garage mt-5 text-[46px] font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-[62px] md:text-[72px]">
              Need Help With
              <br />
              Your English Test?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Speak with the admissions team for guidance about accepted tests,
              entry scores and your application.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="https://admissions.uca.feuc.ae/enquiry_form"
              target="_blank"
              rel="noopener noreferrer"
              className="font-garage group inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-8 py-5 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              Ask Admissions
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="mailto:admissions@uca.feuc.ae"
              className="font-garage inline-flex items-center justify-center border border-white/25 px-8 py-5 text-[17px] font-black uppercase text-white transition hover:border-[#C8EB00] hover:text-[#C8EB00]"
            >
              admissions@uca.feuc.ae
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}