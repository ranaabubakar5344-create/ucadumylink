"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  GraduationCap,
  Languages,
  Mail,
  School,
} from "lucide-react";

type RequirementSection = {
  title: string;
  description?: string;
  items?: string[];
  subsections?: {
    title: string;
    description?: string;
    items: string[];
  }[];
};

type CountryRequirements = {
  code: string;
  name: string;
  flag: string;
  introduction: string;
  sections: RequirementSection[];
  englishRequirements: {
    programme: string;
    requirement: string;
  }[];
};

const countries: CountryRequirements[] = [
  {
    code: "PK",
    name: "Pakistan",
    flag: "🇵🇰",
    introduction:
      "Select Pakistan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",
    sections: [
      {
        title: "Undergraduate Requirements",
        description:
          "For our Bachelor's courses, we usually require that you have one of the following:",
        items: [
          "Associate Degree from a recognised Pakistani university with 55% or GPA 2.5.",
          "A transcript showing successful completion of two or three years of a Bachelor's degree from a recognised Pakistani university with 55% or GPA 2.5.",
        ],
      },
      {
        title: "Foundation Year Requirements",
        description:
          "For our Integrated Foundation courses, we usually require:",
        items: [
          "Pakistani Higher Secondary School Certificate (HSSC) / Intermediate showing 12 years of completed school study, with 60% or 3/5.",
          "For International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
        ],
      },
      {
        title: "Postgraduate Requirements",
        subsections: [
          {
            title: "Integrated Pre-Master's Course",
            description:
              "For Master's courses with an Integrated International Pre-Master's, we usually require:",
            items: [
              "Successful completion of a Bachelor's degree of at least four years from a recognised university.",
            ],
          },
          {
            title: "Master's Course",
            description:
              "For our Master's courses, we usually require one of the following:",
            items: [
              "Successful completion of a Bachelor's degree of at least four years from a recognised university, with 50% overall or GPA 2.6.",
              "Successful completion of a Master's degree from a recognised university.",
            ],
          },
        ],
      },
    ],
    englishRequirements: [
      {
        programme: "Undergraduate degree (BA / BSc / BMus)",
        requirement: "IELTS 6.0 overall, with no section below 5.5",
      },
      {
        programme: "Undergraduate degree with Integrated Foundation Year",
        requirement: "IELTS 5.5 overall, with no section below 5.5",
      },
      {
        programme: "International Foundation in Creative Practices",
        requirement: "IELTS 5.0 overall, with no section below 4.5",
      },
      {
        programme: "Master's degree (MA / MSc / MFA / MBA / MArch / MMus)",
        requirement: "IELTS 6.5 overall, with no section below 5.5",
      },
      {
        programme: "Integrated Pre-Master's — 13 weeks",
        requirement: "IELTS 6.0 overall, with no section below 5.5",
      },
      {
        programme: "Integrated Pre-Master's — 30 weeks",
        requirement: "IELTS 5.5 overall, with no section below 5.5",
      },
      {
        programme: "Postgraduate Research (PhD / MPhil)",
        requirement:
          "IELTS 7.0 overall, with 7.0 in writing and no other section below 5.5",
      },
      {
        programme: "Pre-Doctorate",
        requirement: "IELTS 6.0 overall, with no section below 5.5",
      },
    ],
  },



    {
    code: "IN",
    name: "INDIAN",
    flag: "🇮🇳",
    introduction:
      "Select INDIA to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",
    sections: [
      {
        title: "Undergraduate Requirements",
        description:
          "For our Bachelor's courses, we usually require that you have one of the following:",
        items: [
          "Indian HSC/Standard XII with an overall average of 60% or higher (all boards including CBSE and CISCE).",
          "A transcript showing successful completion of Year 1 of a Bachelor's degree from a recognised Indian university",
        ],
      },
      {
        title: "Foundation Year Requirements",
        description:
          "For our Integrated Foundation courses, we usually require:",
        items: [
          "Indian HSC/Standard XII with an overall average of 50% or higher (all boards including CBSE and CISCE).",
          "For our International Foundation in Creative Practices and our Integrated Foundation courses we can also consider five IGCSE's with grades 9-4/A*-C.",
        ],
      },
      {
        title: "Postgraduate Requirements",
        subsections: [
          
          
       
          {
            title: "Master's Course",
            description:
              "For our Master's courses, we usually require one of the following:",
            items: [
             "For our Master's courses, we usually require that you have successfully completed your Bachelor's degree (minimum three years) with a Pass at grade 55% from a recognised university."
            ],
          },
        ],
      },
    ],
    englishRequirements: [
      {
          programme:"English language requirements for students from India",
          requirement:"We can accept the Indian Standard XII from a NARIC recognised board with minimum 70% in English (excluding Punjab or Haryana boards). For Research Degrees a UCA-approved English test is required",            

      },

      {
        
        programme: "Undergraduate degree (BA / BSc / BMus)",
        requirement: " 6.0 overall with no less than 5.5 in any section",
      },
      {
        programme: "Undergraduate degree with Integrated Foundation Year",
        requirement: " 5.5 overall, with no section below 5.5",
      },
      {
        programme: "International Foundation in Creative Practices",
        requirement: " 5.0 overall, with no section below 4.5",
      },
      {
        programme: "Master's degree (MA / MSc / MFA / MBA / MArch / MMus)",
        requirement: " 6.5 overall, with no section below 5.5",
      },
      {
        programme: "Integrated Pre-Master's — 13 weeks",
        requirement: " 6.0 overall, with no section below 5.5",
      },
      {
        programme: "Integrated Pre-Master's — 30 weeks",
        requirement: " 5.5 overall, with no section below 5.5",
      },
      {
        programme: "Postgraduate Research (PhD / MPhil)",
        requirement:
          " 7.0 overall, with no less than 7.0 in writing and 5.5 in any other section",
      },
      {
        programme: "Pre-Doctorate",
        requirement: "6.0 overall with no less than 5.5 in any section",
      },
    ],
  },

  {
  code: "PH",
  name: "Philippines",
  flag: "🇵🇭",
  introduction:
    "Select the Philippines to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Associate Degree from a recognised Philippine university with grade B, GPA 2.0/5.0 where 1 is the highest mark, or GPA 3.0/4.0.",
        "A transcript showing successful completion of two years of a Bachelor's degree from a recognised Philippine university with grade B, GPA 2.0/5.0 where 1 is the highest mark, or GPA 3.0/4.0.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Philippine High School Diploma with 80% or better.",
        "For International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
      ],
    },
    {
      title: "Postgraduate Requirements",
      subsections: [
        {
          title: "Integrated Pre-Master's Course",
          description:
            "For our Integrated Pre-Master's courses, applicants are normally expected to meet the following requirements:",
          items: [
            "A recognised Bachelor's degree or a three-year diploma.",
            "A strong portfolio in a relevant subject.",
            "Applicants must also meet any course-specific requirements.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require that you have one of the following:",
          items: [
            "Successful completion of a Bachelor's degree from Ateneo de Manila University, Quezon City.",
            "Successful completion of a Bachelor's degree from De La Salle University, Manila.",
            "Successful completion of a Bachelor's degree from the University of Santo Tomas.",
            "Successful completion of a Bachelor's degree from the University of the Philippines, Diliman.",
            "Successful completion of a Master's degree from a recognised university.",
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "Undergraduate degree (BA / BSc / BMus)",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
    {
      programme: "Undergraduate degree with Integrated Foundation Year",
      requirement: "IELTS 5.5 overall, with no section below 5.5",
    },
    {
      programme: "International Foundation in Creative Practices",
      requirement: "IELTS 5.0 overall, with no section below 4.5",
    },
    {
      programme: "Master's degree (MA / MSc / MArch)",
      requirement: "IELTS 6.5 overall, with no section below 5.5",
    },
    {
      programme: "Integrated Pre-Master's — 13 weeks",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
    {
      programme: "Integrated Pre-Master's — 30 weeks",
      requirement: "IELTS 5.5 overall, with no section below 5.5",
    },
    {
      programme: "Postgraduate Research (PhD / MPhil)",
      requirement:
        "IELTS 7.0 overall, with 7.0 in writing and no other section below 5.5",
    },
    {
      programme: "Pre-Doctorate",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
  ],
},






  {
  code: "AE",
  name: "United Arab Emirates",
  flag: "🇦🇪",
  introduction:
    "Select the UAE to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Emirati university with GPA 2.5/4.0.",
        "Higher College of Technology Certificate/Diploma with GPA 2.5/4.0",
        "University Diploma with GPA 2.5/4.0",
        "Associate Degree"
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "Emirati Tawjahiya (Secondary School Leaving Certificate) showing 12 years of completed school study with 65%.",
        "For our International Foundation in Creative Practices and our Integrated Foundation courses we can also consider five IGCSE's with grades 9-4/A*-C.",
      ],
    },
    {
      title: "Postgraduate Requirements",
      subsections: [
        {
          title: "Integrated Pre-Master's Course",
          description:
            "For our Integrated Pre-Master's courses, applicants are normally expected to meet the following requirements:",
          items: [
            "Our Pre-Masters courses require a recognised bachelor degree or 3 year diploma with a strong portfolio in a relevant subject. Applicants will also need to meet any course-specific requirements.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require that you have one of the following:",
          items: [
            "For our Master’s courses, we usually require that you have successfully completed a Bachelor's degree at a recognised university."
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "Undergraduate degree (BA / BSc / BMus)",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
    {
      programme: "Undergraduate degree with Integrated Foundation Year",
      requirement: "IELTS 5.5 overall, with no section below 5.5",
    },
    {
      programme: "International Foundation in Creative Practices",
      requirement: "IELTS 5.0 overall, with no section below 4.5",
    },
    {
      programme: "Master's degree (MA / MSc / MArch)",
      requirement: "IELTS 6.5 overall, with no section below 5.5",
    },
    {
      programme: "Integrated Pre-Master's — 13 weeks",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
    {
      programme: "Integrated Pre-Master's — 30 weeks",
      requirement: "IELTS 5.5 overall, with no section below 5.5",
    },
    {
      programme: "Postgraduate Research (PhD / MPhil)",
      requirement:
        "IELTS 7.0 overall, with 7.0 in writing and no other section below 5.5",
    },
    {
      programme: "Pre-Doctorate",
      requirement: "IELTS 6.0 overall, with no section below 5.5",
    },
  ],
},
   {
  code: "US",
  name: "United States",
  flag: "🇺🇸",
  introduction:
    "Select the United States to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, advanced undergraduate entry, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "US High School Diploma with GPA 2.8 or better, plus SAT scores taken in 2016 or later of 1050 or better.",
        "US High School Diploma with GPA 2.8 or better, plus SAT scores taken before 2016 of 1600 or better.",
        "US High School Diploma with GPA 2.8 or better, plus two or three Advanced Placement tests with scores of 3 or better.",
        "US High School Diploma with GPA 2.8 or better, plus ACT scores of 24 or better.",
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised American university with GPA 2.0.",
      ],
    },

    {
      title: "Advanced Entry Requirements",
      description:
        "For advanced entry, including year two, year three and undergraduate top-up degrees, we usually require one of the following:",
      items: [
        "Associate Degree or 60 Community College credits with a minimum GPA of 2.5 out of 4.",
        "Two years of university study with a minimum GPA of 2.5 out of 4.",
      ],
    },

    {
      title: "US English Language Requirements",
      description:
        "Applicants will also need to meet one of the following English language requirements:",
      items: [
        "US High School Diploma with English Language Grade C and an overall GPA of 2.8 out of 4.0.",
        "SAT taken from 2016 onwards: Evidence-Based Reading and Writing score of 610, plus at least two years of study at a US-accredited institution or an institution accredited by a recognised body in a majority English-speaking country as defined by UKVI.",
        "ACT: Composite score of 27, with a minimum score of 26 in English and Reading, plus at least two years of study at a US-accredited institution or an institution accredited by a recognised body in a majority English-speaking country as defined by UKVI.",
        "Advanced Placement English: Grade 3, plus at least two years of study at a US-accredited institution or an institution accredited by a recognised body in a majority English-speaking country as defined by UKVI.",
      ],
    },

    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "US High School Diploma with GPA 2.4 or better.",
        "US High School Grade 11 with GPA 2.8 or better.",
        "General Educational Development (GED) Programme.",
        "For International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
      ],
    },

    {
      title: "Postgraduate Requirements",
      subsections: [
        {
          title: "Integrated Pre-Master's Course",
          description:
            "For our Integrated Pre-Master's courses, applicants are normally expected to meet the following requirements:",
          items: [
            "A recognised Bachelor's degree or a three-year diploma.",
            "A strong portfolio in a relevant subject.",
            "Applicants must also meet any course-specific requirements.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require:",
          items: [
            "Successful completion of a Bachelor's degree at a recognised university.",
            "Most students who have studied at degree level at a recognised US institution will be exempt from further English-language tests.",
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "US High School Diploma",
      requirement:
        "English Language Grade C, with an overall GPA of 2.8 out of 4.0",
    },
    {
      programme: "SAT from 2016 onwards",
      requirement:
        "Evidence-Based Reading and Writing score of 610, plus at least two years of eligible English-medium study",
    },
    {
      programme: "ACT",
      requirement:
        "Composite score of 27, with a minimum score of 26 in English and Reading, plus at least two years of eligible English-medium study",
    },
    {
      programme: "Advanced Placement English",
      requirement:
        "Grade 3, plus at least two years of eligible English-medium study",
    },
    {
      programme: "Recognised US Degree-Level Study",
      requirement:
        "Most applicants who have studied at degree level at a recognised US institution may be exempt from further English-language testing",
    },
  ],
},
];



const sectionIcons = [GraduationCap, School, BookOpen];

const ibRequirements = [
  {
    title: "Undergraduate Courses",
    text: "27 total points in the International Baccalaureate Diploma Programme, with at least 15 IB points at Higher Level (HL). This excludes BA (Hons) Architecture.",
  },
  {
    title: "BA (Hons) Architecture",
    text: "29 total points in the International Baccalaureate Diploma Programme, with at least 16 IB points at Higher Level (HL).",
  },
  {
    title: "Integrated Foundation Year",
    text: "A minimum of 24 points from the International Baccalaureate.",
  },
];

export default function EquivalentQualificationsPage() {
  const [selectedCode, setSelectedCode] = useState("PK");

  const selectedCountry =
    countries.find((country) => country.code === selectedCode) ?? countries[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F4EE] text-[#0A1414]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#C8EB00]/15 blur-3xl" />
          <div className="absolute -bottom-36 left-[18%] h-[380px] w-[380px] rounded-full bg-[#C8EB00]/10 blur-3xl" />
          <div className="absolute right-[12%] top-0 h-full w-px bg-white/10" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00] sm:text-sm">
              International Admissions
            </p>

            <h1 className="mt-6 text-[52px] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[74px] md:text-[94px] lg:text-[112px]">
              Equivalent
              <span className="block text-[#C8EB00]">Qualifications</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Select your country to review the academic and English-language
              qualifications normally considered for entry to UCA programmes.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTRY SELECTOR */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="border border-black/10 bg-white p-6 shadow-[0_24px_70px_rgba(10,20,20,0.12)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7f9800]">
                  Select Country
                </p>

                <h2 className="mt-3 text-[34px] font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-[46px]">
                  Find Your Entry Requirements
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-black/60">
                  Choose a nationality to view relevant Foundation,
                  Undergraduate, Postgraduate and English-language guidance.
                </p>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold uppercase tracking-[0.12em]">
                  Country
                </span>

                <div className="relative">
                  <select
                    value={selectedCode}
                    onChange={(event) => setSelectedCode(event.target.value)}
                    className="h-16 w-full appearance-none border border-black/15 bg-[#F3F4EE] px-5 pr-14 text-[17px] font-bold outline-none transition focus:border-[#C8EB00] focus:ring-4 focus:ring-[#C8EB00]/15"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRY CONTENT */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7f9800]">
                Selected Country
              </p>

              <h2 className="mt-4 text-[52px] font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-[70px] md:text-[86px]">
                <span className="mr-3">{selectedCountry.flag}</span>
                {selectedCountry.name}
              </h2>
            </div>

            <div className="border-l-4 border-[#C8EB00] bg-white p-6 md:p-8">
              <p className="text-base leading-8 text-black/65 md:text-lg">
                {selectedCountry.introduction}
              </p>
            </div>
          </div>

          {/* REQUIREMENT CARDS */}
          <div className="space-y-6">
            {selectedCountry.sections.map((section, sectionIndex) => {
              const Icon = sectionIcons[sectionIndex] ?? GraduationCap;

              return (
                <article
                  key={`${selectedCountry.code}-${section.title}`}
                  className="overflow-hidden border border-black/10 bg-white"
                >
                  <div className="grid lg:grid-cols-[300px_minmax(0,1fr)]">
                    <div className="bg-[#0A1414] p-7 text-white md:p-8">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#C8EB00]">
                        Requirement {String(sectionIndex + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-[30px] font-black uppercase leading-[0.95] tracking-[-0.035em]">
                        {section.title}
                      </h3>
                    </div>

                    <div className="p-7 md:p-9">
                      {section.description && (
                        <p className="mb-6 max-w-3xl text-base leading-8 text-black/65 md:text-lg">
                          {section.description}
                        </p>
                      )}

                      {section.items && (
                        <div className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <RequirementItem
                              key={`${section.title}-${itemIndex}`}
                              text={item}
                            />
                          ))}
                        </div>
                      )}

                      {section.subsections && (
                        <div className="space-y-8">
                          {section.subsections.map(
                            (subsection, subsectionIndex) => (
                              <div
                                key={`${section.title}-${subsection.title}`}
                                className="border-b border-black/10 pb-8 last:border-b-0 last:pb-0"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="flex h-8 w-8 items-center justify-center bg-[#C8EB00] text-sm font-black">
                                    {subsectionIndex + 1}
                                  </span>

                                  <h4 className="text-[23px] font-black uppercase leading-none tracking-[-0.025em]">
                                    {subsection.title}
                                  </h4>
                                </div>

                                {subsection.description && (
                                  <p className="mt-4 leading-7 text-black/60">
                                    {subsection.description}
                                  </p>
                                )}

                                <div className="mt-5 space-y-3">
                                  {subsection.items.map((item, itemIndex) => (
                                    <RequirementItem
                                      key={`${subsection.title}-${itemIndex}`}
                                      text={item}
                                    />
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ENGLISH REQUIREMENTS */}
          <section className="mt-14 overflow-hidden border border-black/10 bg-white">
            <div className="bg-[#C8EB00] p-7 md:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#0A1414] text-[#C8EB00]">
                  <Languages className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em]">
                    English Language
                  </p>

                  <h3 className="mt-2 text-[34px] font-black uppercase leading-none tracking-[-0.035em] md:text-[48px]">
                    IELTS Requirements
                  </h3>
                </div>
              </div>
            </div>

            <div className="divide-y divide-black/10">
              {selectedCountry.englishRequirements.map((item, index) => (
                <div
                  key={`${selectedCountry.code}-${item.programme}-${index}`}
                  className="grid gap-3 p-6 transition hover:bg-[#F3F4EE] md:grid-cols-[1fr_1.1fr] md:items-center md:px-8"
                >
                  <p className="font-bold">{item.programme}</p>
                  <p className="leading-7 text-black/60">{item.requirement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* INTERNATIONAL BACCALAUREATE */}
          <section className="mt-14 overflow-hidden border border-[#C8EB00]/50 bg-[#0A1414] text-white">
            <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="bg-[#C8EB00] p-7 text-[#0A1414] md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.22em]">
                  Alternative Qualification
                </p>

                <h3 className="mt-4 text-[36px] font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-[48px]">
                  International
                  <br />
                  Baccalaureate
                </h3>

                <p className="mt-5 text-sm leading-6 text-black/65">
                  Guidance for applicants completing the International
                  Baccalaureate Diploma Programme.
                </p>
              </div>

              <div className="p-7 md:p-9">
                <p className="max-w-4xl text-base leading-8 text-white/70 md:text-lg">
                  The number of points required may vary depending on the
                  strength of your portfolio and the number of Higher Level
                  points achieved.
                </p>

                <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                  {ibRequirements.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-3 py-5 sm:grid-cols-[230px_minmax(0,1fr)]"
                    >
                      <h4 className="text-[19px] font-black uppercase leading-[1.05] text-[#C8EB00]">
                        {item.title}
                      </h4>

                      <p className="text-[15px] leading-7 text-white/70 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-l-4 border-[#C8EB00] bg-white/5 p-5">
                  <p className="text-[15px] leading-7 text-white/75 md:text-base">
                    Offers below the standard criteria may occasionally be made
                    to applicants with a strong portfolio or where exceptional
                    circumstances have affected academic performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="mt-14 grid gap-7 bg-white p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7f9800]">
                Need More Guidance?
              </p>

              <h3 className="mt-3 text-[32px] font-black uppercase leading-none tracking-[-0.03em] md:text-[42px]">
                Contact International Admissions
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-black/60">
                Requirements are provided as general guidance. Individual
                programmes may have additional academic, portfolio or
                course-specific requirements.
              </p>
            </div>

            <a
              href="mailto:internationaladmissions@uca.ac.uk"
              className="inline-flex items-center justify-center gap-3 bg-[#0A1414] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#C8EB00] transition hover:bg-[#C8EB00] hover:text-[#0A1414]"
            >
              Email Admissions
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 border-b border-black/10 pb-4 last:border-b-0">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#C8EB00]">
        <Check className="h-4 w-4 text-[#0A1414]" />
      </span>

      <p className="text-[15px] leading-7 text-black/70 sm:text-base">{text}</p>
    </div>
  );
}