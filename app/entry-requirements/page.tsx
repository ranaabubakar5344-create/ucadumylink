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
  name: "India",
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

{
  code: "BD",
  name: "Bangladesh",
  flag: "🇧🇩",
  introduction:
    "Select Bangladesh to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have either:",
      items: [
        "A Diploma in Engineering, Architecture, Medical Faculty, Medical Technology, Nursing Science or Midwifery with 60%.",
        "Successful completion of two years of a Bachelor's degree with 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Bangladeshi Higher Secondary Certificate showing 12 years of completed school study, with 3.0 out of 5.0 or better.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
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
            "A four-year Bachelor's degree with 65% overall.",
            "A three-year degree with 55% from NSU, BRAC University, IUB, East West University, AIUB, Bangladesh University of Professionals, BUET, or any government or private university recognised by the Bangladesh University Grants Commission.",
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
  code: "LK",
  name: "Sri Lanka",
  flag: "🇱🇰",
  introduction:
    "Select Sri Lanka to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Grades BBC in Sri Lanka A Levels.",
        "A recognised International Foundation course from a UK institution following a validated UK syllabus.",
        "Successful completion of Year 1 of a Bachelor's degree from a recognised institution with at least 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "Five O Levels at Grade C.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
      ],
    },
    {
      title: "Postgraduate Requirements",
      subsections: [
        {
          title: "Integrated Pre-Master's Course",
          description:
            "For our Master's courses with an Integrated International Pre-Master's, we usually require:",
          items: [
            "Successful completion of a three-year or four-year Bachelor's degree from a recognised university, with 60% overall.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require:",
          items: [
            "Successful completion of a four-year Bachelor's degree from a recognised university, with 65% overall.",
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "Sri Lanka O Level or A Level English",
      requirement:
        "For degree entry, Grade C in O Level English or A Level English Language and/or Literature.",
    },
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
  code: "PS",
  name: "Palestine",
  flag: "🇵🇸",
  introduction:
    "Select Palestine to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Palestinian university with 70%.",
        "A Community College Diploma with 70%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A General Secondary Education Certificate, Shahadat Al-Thanawaya Al-Aama, with at least 60%.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
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
  code: "JO",
  name: "Jordan",
  flag: "🇯🇴",
  introduction:
    "Select Jordan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Community College Diploma or Associate Degree with a score of 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Tawjihi, or secondary school certificate, with a minimum score of 65%.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
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
  code: "KE",
  name: "Kenya",
  flag: "🇰🇪",
  introduction:
    "Select Kenya to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Kenya Certificate of Secondary Education (KCSE) with grade B or above.",
        "A three-year Polytechnic Diploma (TEP).",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Kenya Certificate of Secondary Education (KCSE), taken after 12 years of schooling, with an overall grade of C or above.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
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
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "Kenya Certificate of Secondary Education (KCSE)",
      requirement: "English at Grade C or above",
    },
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
  code: "EG",
  name: "Egypt",
  flag: "🇪🇬",
  introduction:
    "Select Egypt to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A two-year Diploma from Al-Azhar with 60% or above.",
        "A Diploma from a Technical, Commercial, Industrial or Health Institute with 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A General Secondary Education Certificate with 65% or above.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
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
];

const sectionIcons = [GraduationCap, School, BookOpen];

export default function EquivalentQualificationsPage() {
  const [selectedCode, setSelectedCode] = useState("");

  const selectedCountry =
    countries.find((country) => country.code === selectedCode) ?? null;

  return (
    <main className="overflow-x-hidden bg-[#F7F7F2] text-[#0A1414]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1414] text-white">
        <div className="absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#C8EB00]/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[#C8EB00]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="font-neue text-xs font-bold uppercase tracking-[0.28em] text-[#C8EB00] sm:text-sm">
            International Admissions
          </p>

          <h1 className="font-garage mt-6 max-w-5xl text-[50px] font-black uppercase leading-[1.0] tracking-[-0.05em] sm:text-[80px] md:text-[96px]">
            Equivalent
            <br />
            <span className="text-[#C8EB00]">Qualifications</span>
          </h1>

          {/* <p className="mt-7 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Find the academic and English-language requirements equivalent to
            UK qualifications for your country.
          </p> */}
        </div>
      </section>

      {/* COUNTRY SELECTOR */}
      <section className="relative z-20 -mt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="border border-black/10 bg-white p-6 shadow-[0_20px_65px_rgba(10,20,20,0.12)] md:p-8">
            <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="font-neue text-xs font-bold uppercase tracking-[0.24em] text-[#C8EB00]">
                  Select Country
                </p>

                <h2 className="font-garage mt-3 text-[34px] font-black uppercase leading-none tracking-[-0.035em] sm:text-[44px]">
                  Find Your Entry Requirements
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                  Choose your country to view equivalent academic and English
                  language requirements.
                </p>
              </div>

             <div className="relative">
  <select
    value={selectedCode}
    onChange={(event) => {
      const value = event.target.value;

      if (value === "OTHER") {
        window.location.href =
          "https://www.uca.ac.uk/international/equivalent-qualifications/";
        return;
      }

      setSelectedCode(value);
    }}
    className="h-16 w-full appearance-none border border-black/15 bg-[#f4f5ef] pl-4 pr-11 text-[14px] font-bold text-[#0A1414] outline-none transition sm:pl-5 sm:pr-14 sm:text-base focus:border-[#C8EB00] focus:ring-4 focus:ring-[#C8EB00]/20"
  >
    <option value="" disabled>
      Select your country
    </option>

    {countries.map((country) => (
      <option key={country.code} value={country.code}>
        {country.flag} {country.name}
      </option>
    ))}
  </select>

  <ChevronDown className="pointer-events-none absolute right-4 top-8 h-5 w-5 -translate-y-1/2 sm:right-5" />

  {!selectedCode && (
    <p className="mt-3 text-sm leading-6 text-black/55">
      Select your country to see your academic and English-language entry
      requirements.
    </p>
  )}
</div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED COUNTRY */}
      {selectedCountry ? (
        <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#C8EB00]">
                Selected Country
              </p>

              <h2 className="font-garage mt-4 text-[48px] font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-[64px] md:text-[78px]">
                {selectedCountry.flag}
                <br />
                {selectedCountry.name}
              </h2>
            </div>

         
          </div>

          {/* ACADEMIC SECTIONS */}
          <div className="space-y-7   mt-12" >
            {selectedCountry.sections.map((section, sectionIndex) => {
              const Icon =
                sectionIcons[sectionIndex] ?? GraduationCap;

              return (
                <article
                  key={section.title}
                  className="group border border-black/10 bg-white transition duration-300 hover:border-[#C8EB00]"
                >
                  <div className="grid lg:grid-cols-[310px_minmax(0,1fr)]">
                    <div className="border-b border-black/10 bg-[#0A1414] p-7 text-white lg:border-b-0 lg:border-r">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="font-garage mt-7 text-[32px] font-black uppercase leading-[0.95] tracking-[-0.03em]">
                        {section.title}
                      </h3>
                    </div>

                    <div className="p-7 md:p-9">
                      {section.description && (
                        <p className="mb-6 text-base leading-7 text-black/70 md:text-lg">
                          {section.description}
                        </p>
                      )}

                      {section.items && (
                        <div className="space-y-4">
                          {section.items.map((item) => (
                            <RequirementItem key={item} text={item} />
                          ))}
                        </div>
                      )}

                      {section.subsections && (
                        <div className="space-y-9">
                          {section.subsections.map((subsection) => (
                            <div
                              key={subsection.title}
                              className="border-b border-black/10 pb-8 last:border-b-0 last:pb-0"
                            >
                              <h4 className="font-garage text-[25px] font-black uppercase leading-none">
                                {subsection.title}
                              </h4>

                              {subsection.description && (
                                <p className="mt-4 text-base leading-7 text-black/65">
                                  {subsection.description}
                                </p>
                              )}

                              <div className="mt-5 space-y-4">
                                {subsection.items.map((item) => (
                                  <RequirementItem key={item} text={item} />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ENGLISH REQUIREMENTS */}
          <div className="mt-14 overflow-hidden border border-black/10 bg-white">
            <div className="bg-[#C8EB00] p-7 md:p-9">
              <div className="flex items-center gap-4">
                <Languages className="h-9 w-9" />

                <div>
                  <p className="font-neue text-xs font-bold uppercase tracking-[0.24em]">
                    English Language
                  </p>

                  <h3 className="font-garage mt-2 text-[34px] font-black uppercase leading-none md:text-[46px]">
                    IELTS Requirements
                  </h3>
                </div>
              </div>
            </div>

            <div className="divide-y divide-black/10">
              {selectedCountry.englishRequirements.map((item) => (
                <div
                  key={item.programme}
                  className="grid gap-3 p-6 transition hover:bg-[#F7F7F2] md:grid-cols-[1fr_1fr] md:items-center md:px-8"
                >
                  <p className="font-bold">{item.programme}</p>
                  <p className="leading-7 text-black/65">
                    {item.requirement}
                  </p>
                </div>
              ))}
            </div>
          </div>
{/* INTERNATIONAL BACCALAUREATE */}
<div className="mt-14 overflow-hidden border border-[#C8EB00]/40 bg-[#0A1414] text-white shadow-[0_20px_55px_rgba(10,20,20,0.18)]">
  <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
    {/* LEFT */}
    <div className="border-b border-white/10 bg-[#C8EB00] p-7 text-[#0A1414] lg:border-b-0 lg:border-r lg:border-[#0A1414]/10 md:p-9">
   

      
 <h3 className="font-garage mt-2 text-[34px] font-black uppercase leading-none md:text-[46px]">
 International
        <br />
        Baccalaureate                  </h3>
      <p className="mt-5 text-sm leading-6 text-[#0A1414]/70">
        Entry guidance for applicants completing the International
        Baccalaureate Diploma Programme.
      </p>
    </div>

    {/* RIGHT */}
    <div className="p-7 md:p-9">
      <p className="max-w-4xl text-base leading-8 text-white/75 md:text-lg">
        If you are studying the International Baccalaureate, the number of
        points you need to achieve can vary depending on the strength of your
        portfolio and the number of Higher Level points you achieve.
      </p>

      <p className="mt-5 font-semibold text-white">
        As a guide, applicants are usually asked to achieve:
      </p>

      <div className="mt-7 space-y-4">
        {[
          {
            title: "Undergraduate Courses",
            text: "27 total points in the International Baccalaureate Diploma Programme, with at least 15 IB points at Higher Level (HL). This excludes BA (Hons) Architecture.",
          },
          {
            title: "BA (Hons) Architecture",
            text: "29 total points in the International Baccalaureate Diploma Programme, with at least 16 IB points at Higher Level (HL).",
          },
          {
            title: "Undergraduate with Integrated Foundation Year",
            text: "A minimum of 24 points from the International Baccalaureate.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="grid gap-3 border-b border-white/10 pb-5 sm:grid-cols-[230px_minmax(0,1fr)]"
          >
            <h4 className="font-garage text-[20px] font-black uppercase leading-[1.05] text-[#C8EB00]">
              {item.title}
            </h4>

            <p className="text-[15px] leading-7 text-white/75 md:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 border-l-4 border-[#C8EB00] bg-white/[0.05] p-5">
        <p className="text-[15px] leading-7 text-white/80 md:text-base">
          We may occasionally make offers below the standard entry criteria to
          applicants with a strong portfolio, or to students who have faced
          circumstances that affected their performance and who were expected
          to achieve a higher result.
        </p>
      </div>
    </div>
  </div>
</div>
          {/* IMPORTANT NOTE */}
          {/* <div className="mt-12 grid gap-7 bg-[#0A1414] p-7 text-white md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-neue text-xs font-bold uppercase tracking-[0.25em] text-[#C8EB00]">
                Need More Guidance?
              </p>

              <h3 className="font-garage mt-4 text-[34px] font-black uppercase leading-[0.95] md:text-[48px]">
                Contact International Admissions
              </h3>

              <p className="mt-5 max-w-3xl leading-7 text-white/70">
                Entry requirements are provided as guidance. Applications may
                be assessed individually, and individual programmes may have
                additional or course-specific requirements.
              </p>
            </div>

            <a
              href="#"
              className="font-garage inline-flex items-center justify-center gap-3 bg-[#C8EB00] px-7 py-4 text-[17px] font-black uppercase text-[#0A1414] transition hover:bg-white"
            >
              <Mail className="h-5 w-5" />
              Email Admissions
            </a>
          </div> */}

          {/* OFFICIAL PAGE */}
          <div className="mt-6 text-center">
            <a
              href="https://www.uca.ac.uk/international/equivalent-qualifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1414] underline decoration-[#C8EB00] decoration-2 underline-offset-4"
            >
              View official UCA UK equivalent qualifications
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        </section>
      ) : (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="border border-black/10 bg-white px-6 py-16 text-center shadow-[0_20px_65px_rgba(10,20,20,0.08)] sm:px-10 md:py-24">
              <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#C8EB00] text-[#0A1414]">
                <GraduationCap className="h-8 w-8" />
              </div>

              <p className="font-neue mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#829B00]">
                Country Requirements
              </p>

              <h2 className="font-garage mx-auto mt-4 max-w-3xl text-[36px] font-black uppercase leading-[1] tracking-[-0.04em] text-[#0A1414] sm:text-[48px] md:text-[60px]">
                Select Your Country To See Your Requirements
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
                Choose your country from the dropdown above to view the relevant
                academic and English-language entry requirements.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 border-b border-black/10 pb-4 last:border-b-0">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8EB00]">
        <Check className="h-4 w-4 text-[#0A1414]" />
      </span>

      <p className="text-[15px] leading-7 text-black/75 sm:text-base">
        {text}
      </p>
    </div>
  );
}