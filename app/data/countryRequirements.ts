export type RequirementSection = {
  title: string;
  description?: string;
  items?: string[];
  subsections?: {
    title: string;
    description?: string;
    items: string[];
  }[];
};

export type CountryRequirements = {
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
export const countries: CountryRequirements[] =  [
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
{
  code: "AF",
  name: "Afghanistan",
  flag: "🇦🇫",
  introduction:
    "Select Afghanistan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Grade 14 Diploma with 60% overall.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Grade 12 Graduation Certificate with 60% overall.",
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
            "Successful completion of a Master's degree at a recognised university.",
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
  code: "AZ",
  name: "Azerbaijan",
  flag: "🇦🇿",
  introduction:
    "Select Azerbaijan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we can accept:",
      items: [
        "A Study Net Group International Foundation Year with an overall grade of 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For more information about Foundation Year entry requirements:",
      items: [
        "Please contact internationaladmissions@uca.ac.uk.",
        "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
      ],
    },
    {
      title: "Postgraduate Requirements",
      description:
        "For more information about postgraduate entry requirements:",
      items: [
        "Please contact internationaladmissions@uca.ac.uk.",
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
  code: "AT",
  name: "Austria",
  flag: "🇦🇹",
  introduction:
    "Select Austria to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Reife und Diplomprüfung / Matura or Reifeprüfung / Matura with a minimum grade of 2.2.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, applicants may be considered based on their previous qualifications.",
      items: [
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
      programme: "Matura / Reifeprüfung English",
      requirement:
        "Grade 2 (Gut) in English Language in both written and oral examinations.",
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
  code: "AU",
  name: "Australia",
  flag: "🇦🇺",
  introduction:
    "Select Australia to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Queensland Certificate of Education (QCE) with an OP of 21 or better.",
        "Australian Capital Territory Year 12 Certificate with an ATAR of 70 or better.",
        "New South Wales Higher School Certificate with an ATAR of 70 or better.",
        "Northern Territory Certificate of Education and Training with an ATAR of 70 or better.",
        "South Australian Certificate of Education with an ATAR of 70 or better.",
        "Victorian Certificate of Education with an ATAR of 70 or better.",
        "Western Australian Certificate of Education with an ATAR of 70 or better.",
        "Tasmanian Certificate of Education with an ATAR of 70 or better.",
        "An Australian AQF Diploma.",
        "An Australian AQF Advanced Diploma.",
        "An Australia Year 10 Certificate with English at Grade C or above is also required.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A satisfactory pass in an Australian Certificate of Education or an equivalent school qualification.",
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
      programme: "Australian National with Degree-Level Qualification",
      requirement:
        "Australian nationals may use a recognised degree-level qualification to meet the English-language requirement.",
    },
    {
      programme: "Australia Year 10 Certificate",
      requirement: "English at Grade C or above.",
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
  code: "BE",
  name: "Belgium",
  flag: "🇧🇪",
  introduction:
    "Select Belgium to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require 70% in one of the following qualifications:",
      subsections: [
        {
          title: "Flemish-Speaking Qualifications",
          items: [
            "Diploma van de hogere secundaire technische school.",
            "Diploma van secundair onderwijs in general education.",
          ],
        },
        {
          title: "French-Speaking Qualifications",
          items: [
            "Certificat d'enseignement secondaire supérieur in general education.",
            "Diplôme d'aptitude à accéder à l'enseignement supérieur.",
          ],
        },
        {
          title: "German-Speaking Qualifications",
          items: [
            "Abschlusszeugnis der Oberstufe des Sekundarunterrichts.",
          ],
        },
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require 60% in one of the following qualifications:",
      subsections: [
        {
          title: "Flemish-Speaking Qualifications",
          items: [
            "Diploma van de hogere secundaire technische school.",
            "Diploma van secundair onderwijs in general education.",
          ],
        },
        {
          title: "French-Speaking Qualifications",
          items: [
            "Certificat d'enseignement secondaire supérieur in general education.",
            "Diplôme d'aptitude à accéder à l'enseignement supérieur.",
          ],
        },
        {
          title: "German-Speaking Qualifications",
          items: [
            "Abschlusszeugnis der Oberstufe des Sekundarunterrichts.",
          ],
        },
        {
          title: "Alternative Foundation Qualification",
          items: [
            "For our International Foundation in Creative Practices and Integrated Foundation courses, five IGCSEs with grades 9–4 / A*–C may also be considered.",
          ],
        },
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
      programme:
        "Getuigschrift Van Hoger Secundair Onderwijs or Certificat d'Enseignement Secondaire Supérieur",
      requirement:
        "English with a mark of 8/80%, Grote Onderscheiding or Grande Distinction.",
    },
  ],
},
{
  code: "IR",
  name: "Iran",
  flag: "🇮🇷",
  introduction:
    "Select Iran to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "An Iranian High School Diploma with a grade of 12 or above, together with a Pre-University Certificate (Peeshdaneshgahe) with marks of 14 or above.",
        "An Iranian High School Diploma with a grade of 12 or above, together with the Iran University Entrance Exam (Konkur) with a score in the 60th percentile.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "An Iranian High School Diploma with an overall grade of 14 or above.",
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
  code: "IQ",
  name: "Iraq",
  flag: "🇮🇶",
  introduction:
    "Select Iraq to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A Diploma of Technician (Technical Diploma) with 65% or more.",
        "Successful completion of one year at a recognised Iraqi university with an average score of 60%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Certificate of Preparatory Education / Secondary School Certificate, also known as the Sixth Form Baccalaureate, with an overall grade of 65% or more.",
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
  code: "IE",
  name: "Ireland",
  flag: "🇮🇪",
  introduction:
    "Select Ireland to review the academic qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "An Irish Leaving Certificate at Higher Level with grades H3, H3, H3, H3 and H4.",
        "Ordinary Level Grade 4 (O4) in English Language in the Irish Leaving Certificate is also required.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "An Irish Leaving Certificate at Higher Level with at least three Higher Level subjects at Grade H5.",
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
      programme: "Irish Leaving Certificate",
      requirement:
        "Ordinary Level Grade 4 (O4) in English Language.",
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
        "A Tawjihi, or Secondary School Certificate, with a minimum score of 65%.",
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
  code: "JP",
  name: "Japan",
  flag: "🇯🇵",
  introduction:
    "Select Japan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A Japanese Associate Degree.",
        "A transcript showing successful completion of Year 1 of a Bachelor's degree from a recognised Japanese university, with an average score of 70%.",
        "For advanced entry or undergraduate top-up degrees, completion of an Associate Degree with a score of at least 70%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "Completion of 12 years of Japanese High School education through the Upper Secondary Leaving Certificate, with an average grade of 3.0 out of 5.0 or higher.",
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
  code: "KZ",
  name: "Kazakhstan",
  flag: "🇰🇿",
  introduction:
    "Select Kazakhstan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A Kazakhstani Diploma of Secondary Vocational Education with a grade of 3.5.",
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Kazakhstani university with 60% or 3.5 out of 5.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Kazakhstani Certificate of Completed Secondary Education with Grade 4.",
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
            "Successful completion of a Bachelor's degree from a recognised university with 60% or 1.67 out of 4.",
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
  code: "KW",
  name: "Kuwait",
  flag: "🇰🇼",
  introduction:
    "Select Kuwait to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Diploma or Certificate from PAEET College.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A pass in the Shahadat Al-Thanawaya Al-Aama, or General Secondary Education Certificate, with 60% overall.",
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
  code: "CN",
  name: "China",
  flag: "🇨🇳",
  introduction:
    "Select China to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Chinese Senior School graduation with 12 years of completed school study and an average of 75%.",
        "Senior Secondary Academic Proficiency Test (HuiKao) with 75% overall.",
        "Gaokao with 60%.",
        "A transcript showing successful completion of one year of university study at a recognised Chinese university with an average of 70%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "Chinese Senior School graduation with 11 or 12 years of completed school study and an average of 70% or above.",
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
            "A recognised Bachelor's degree or a three-year diploma with an average score of 70% or above.",
            "A strong portfolio in a relevant subject.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require:",
          items: [
            "Successful completion of a Bachelor's degree from a recognised university with an average score of 70% or above.",
          ],
        },
      ],
    },
  ],

  englishRequirements: [
    {
      programme: "January 2026 entry — Master's degrees",
      requirement: "IELTS 6.5 overall, with no section below 5.5",
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
      requirement: "IELTS 6.0 overall, with no section below 5.5",
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
  code: "GE",
  name: "Georgia",
  flag: "🇬🇪",
  introduction:
    "Select Georgia to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "Successful completion of Year 1 of a Bachelor's or Specialist Diploma with 60% or a GPA of 3.5 out of 5.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A General Education Diploma (Sashualo Ganatlebis Atestasi) with Grade 8.",
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
            "A Bachelor's or Specialist Diploma with 60% or a GPA of 3.5 out of 5.",
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
  code: "DE",
  name: "Germany",
  flag: "🇩🇪",
  introduction:
    "Select Germany to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A German Abitur with an overall grade of 2.6 or better.",
        "For BA Architecture, a German Abitur with an overall grade of 2.4 or better is required.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A German Abitur with an overall grade of 4.0 or better.",
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
      programme: "German Abitur English",
      requirement:
        "An English subject grade of 12 or better. English must have been taken as a Hauptfach, Leistungskurs or Kurs mit erhöhtem Anforderungsniveau, achieved within two years.",
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
  code: "ID",
  name: "Indonesia",
  flag: "🇮🇩",
  introduction:
    "Select Indonesia to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "An Indonesian D4 or D3 Diploma.",
        "An Indonesian D2 Diploma.",
        "A transcript showing successful completion of Year 1 of a Bachelor's degree (Strata 1) from a recognised Indonesian university with an overall GPA of 2.75.",
        "An SMA 3 Senior High School Diploma, including STTB SM and Ujian National Exam, with a National Exam grade of 7 out of 10.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "Sekolah Menengah Atas (SMA) or Madrasah Aliyah (MA) with 60%.",
        "An Indonesian D1 Diploma with 60%.",
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
  code: "LB",
  name: "Lebanon",
  flag: "🇱🇧",
  introduction:
    "Select Lebanon to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Lebanese Diplôme de Technicien Supérieur or Diplôme Universitaire de Technologie with a score of 12.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Lebanese Baccalauréat Général or Baccalauréat Technique with a score of 12 out of 20 or 60%.",
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
            "Successful completion of a Bachelor's degree, Licence or Maîtrise from a recognised university.",
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
  code: "TR",
  name: "Turkey",
  flag: "🇹🇷",
  introduction:
    "Select Turkey to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A Devlet Lise Diploması, Lise Bitirme Diploması or Anadolu Lisesi with 70 out of 100 or 4 out of 5.",
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Turkish university with a GPA of 2.5 out of 4.0.",
        "An Ön-Lisans Diploması, or Associate Degree.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Turkish Devlet Lise Diploması or Lise Bitirme Diploması with 55 out of 100 or 2.75 out of 5.",
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
  code: "TH",
  name: "Thailand",
  flag: "🇹🇭",
  introduction:
    "Select Thailand to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Thai university with a GPA of 2.5.",
        "A Thai Advanced Diploma or Associate Degree with a GPA of 2.5.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Thai Certificate of Secondary Education (Maw 6), showing 12 years of completed school study with an average grade of 2.5.",
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
  code: "UG",
  name: "Uganda",
  flag: "🇺🇬",
  introduction:
    "Select Uganda to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, advanced entry, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Ugandan Advanced Certificate of Education (UACE) with three subjects at principal level at Grade C or above.",
        "For advanced entry to Year 2, a Higher Diploma at Pass level or above.",
        "For advanced entry to Year 3 or a top-up degree, a Higher Diploma at Merit level or above.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Ugandan Advanced Certificate of Education (UACE) with one subject at principal level at Grade C or above.",
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
      programme: "Ugandan Certificate of Education (UCE)",
      requirement: "Grade 6 or above in English.",
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
  code: "UA",
  name: "Ukraine",
  flag: "🇺🇦",
  introduction:
    "Select Ukraine to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A transcript showing successful completion of one year of a Bachelor's degree or Specialist Diploma from a recognised Ukrainian university, with a GPA of 4.0 out of 5.0.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Ukrainian Certificate of Complete General Secondary Education with 6 out of 12 or 3 out of 5.",
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
            "Successful completion of a Bachelor's degree or Specialist Diploma from a recognised university.",
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
  code: "SA",
  name: "Saudi Arabia",
  flag: "🇸🇦",
  introduction:
    "Select Saudi Arabia to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A two-year Diploma from a Saudi Technical College, Vocational Institute or Health College with a GPA of 3.0 out of 5.0 or 2.5 out of 4.0.",
        "A transcript showing successful completion of one year of a Bachelor's degree from a recognised Saudi university with a GPA of 3.0 out of 5.0 or 2.5 out of 4.0.",
        "An Associate Degree from a recognised Saudi university with a GPA of 3.0 out of 5.0 or 2.5 out of 4.0.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Saudi General Secondary Education Certificate or Secondary Institute Diploma, showing 12 years of completed school study, with 65%.",
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
  code: "ZW",
  name: "Zimbabwe",
  flag: "🇿🇼",
  introduction:
    "Select Zimbabwe to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "An award of the Zimbabwe Schools Examination Council (ZIMSEC) GCE A Level with grades BBC at principal level.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A ZIMSEC O-Level or Cambridge School Certificate (CSC) with five passes at Grade C.",
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
      programme: "ZIMSEC O-Level",
      requirement: "Grade C in English.",
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
  code: "UZ",
  name: "Uzbekistan",
  flag: "🇺🇿",
  introduction:
    "Select Uzbekistan to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "Successful completion of Year 1 of a Diplomi (Specialist Diploma) or a Magistr Diplomi (Master's degree) with at least 60% or a GPA of 3.5 out of 5.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "An Umumiy o'rta ta'lim to'g'risida attestat / Shahodatnoma (Certificate of General Secondary Education) with Grade 3.",
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
            "Successful completion of a Diplomi (Specialist Diploma) or a Magistr Diplomi (Master's degree) with at least 60% or a GPA of 3.5 out of 5.",
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
  code: "AR",
  name: "Argentina",
  flag: "🇦🇷",
  introduction:
    "Select Argentina to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "An Argentinian Trayecto Técnico Profesional, Título de Técnico Superior or Técnico Universitario with Grade 6.",
        "A transcript showing successful completion of two years of study on a Bachelor's degree (Título / Grado de Licenciado) at a recognised Argentinian university with Grade 6.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "An Argentinian Título de Bachiller with an average grade of 6 or better.",
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
            "Successful completion of a Bachelor's degree (Título / Grado de Licenciado) awarded after four or more years of study from a recognised university.",
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
  code: "BH",
  name: "Bahrain",
  flag: "🇧🇭",
  introduction:
    "Select Bahrain to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A two-year Associate Degree or Diploma with a CGPA of 2.5 on a 4.0 scale, or Grade C or better, from a recognised Bahraini institution.",
        "A transcript showing successful completion of one year of study on a Bachelor's degree with a CGPA of 2.5 on a 4.0 scale, or Grade C, from a recognised Bahraini university.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Bahraini Tawjahiya / Shahadat Al-Thanawaya Al-Aama, or General Secondary Education Certificate, with an average grade of 70%.",
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
  code: "MY",
  name: "Malaysia",
  flag: "🇲🇾",
  introduction:
    "Select Malaysia to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, advanced entry, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Three Sijil Tinggi Persekolahan Malaysia (STPM / Malaysia Higher School Certificate) qualifications with grades A–C.",
        "A Malaysian Unified Examination Certificate (UEC) at Senior Middle Level with five subjects graded A1–B5.",
        "For advanced entry to Year 2, a Malaysian Diploma accredited by MQA.",
        "For advanced entry to Year 3, a Malaysian Diploma accredited by MQA with exceptional grades of 3.2 out of 4.0, or an Advanced Diploma.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "Sijil Pelajaran Malaysia / Certificate of Education (SPM) with a minimum of five subjects at Grade C or better.",
        "Three Sijil Tinggi Persekolahan Malaysia (STPM / Malaysia Higher School Certificate) qualifications with grades DDD.",
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
      programme: "Malaysian SPM English",
      requirement:
        "Grade C or above in Malaysian SPM English, using the 1119 / O Level paper and GCE-O grade only.",
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
  code: "NP",
  name: "Nepal",
  flag: "🇳🇵",
  introduction:
    "Select Nepal to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A Higher Secondary Education Certificate, awarded up to 2017, with 65%.",
        "A School Leaving Certificate Examination Grade 12, awarded from 2018, with a CGPA of 2.6 out of 4.0.",
        "Successful completion of the UCA International Foundation Year or an equivalent recognised International Foundation course from a UK institution following a validated UK syllabus.",
        "Successful completion of Year 1 of a Bachelor's degree from a recognised institution with at least 55%.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "A Higher Secondary Education Certificate, awarded up to 2017, with 50%.",
        "A School Leaving Certificate Examination Grade 12, awarded from 2018, with a CGPA of 2.0 out of 4.0.",
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
            "A recognised Bachelor's degree or a three-year diploma completed after Class 12.",
            "A strong portfolio in a relevant subject.",
            "Applicants must also meet any course-specific requirements.",
          ],
        },
        {
          title: "Master's Course",
          description:
            "For our Master's courses, we usually require one of the following:",
          items: [
            "Successful completion of a four-year Bachelor's degree from a recognised university in Nepal with 60%.",
            "A three-year Bachelor's degree with 60% from Kathmandu University, Tribhuvan University or Pokhara University.",
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
  code: "OM",
  name: "Oman",
  flag: "🇴🇲",
  introduction:
    "Select Oman to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A two-year post-school Diploma with a final GPA of at least C+, Good or 60%.",
        "A three-year post-school Advanced Diploma or Higher Diploma.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "An Omani General Education Diploma with at least 70% overall.",
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
  code: "QA",
  name: "Qatar",
  flag: "🇶🇦",
  introduction:
    "Select Qatar to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Successful completion of two years of a Bachelor's degree from a recognised Qatari university with a GPA of 2.5 out of 4.0 or better.",
        "An Associate Degree from the Community College of Qatar with a GPA of 2.5 out of 4.0 or better.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "A Qatar Senior School Certificate or Shahadat Al-Thanawaya Al-Aama with a final grade of 600 or better.",
        "A General Secondary Education Certificate or Shahadat Al-Thanawaya Al-Aama with an average grade of 60% and no subject below 50%.",
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
  code: "SG",
  name: "Singapore",
  flag: "🇸🇬",
  introduction:
    "Select Singapore to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, advanced entry, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "Singapore / Cambridge GCE A Levels with grades BBC.",
        "A Singapore Polytechnic Diploma.",
        "For advanced entry to Year 2, a Singapore Polytechnic Diploma or successful completion of two years of a four-year degree course in Singapore.",
        "For advanced entry to Year 3, a Singapore Advanced Diploma, a Singapore Polytechnic Diploma with high grades of 3.2 out of 4.0, or successful completion of three years of a four-year degree course in Singapore with high grades.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require that you have one of the following:",
      items: [
        "A minimum of 32 new UCAS tariff points from Singapore / Cambridge GCE A Levels.",
        "An average Grade C in five Singapore / Cambridge GCE O Levels.",
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
      programme: "Singapore-Cambridge GCE O-Level English",
      requirement: "Grade C or above.",
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
  code: "ZA",
  name: "South Africa",
  flag: "🇿🇦",
  introduction:
    "Select South Africa to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require that you have one of the following:",
      items: [
        "A National Senior Certificate with minimum grades of 66655.",
        "A Senior Certificate with matriculation endorsement and minimum grades of BBBCC.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A National Senior Certificate with an average of 60%.",
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
      programme: "South African National Senior Certificate",
      requirement:
        "For undergraduate programmes, Grade 3 or above in English as a First Additional Language or Home Language.",
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
  code: "ES",
  name: "Spain",
  flag: "🇪🇸",
  introduction:
    "Select Spain to review the academic and English-language qualifications normally considered for Foundation, Bachelor's, Pre-Master's and Master's study.",

  sections: [
    {
      title: "Undergraduate Requirements",
      description:
        "For our Bachelor's courses, we usually require:",
      items: [
        "A Spanish Título de Bachiller with an average mark of 7.0 or above.",
      ],
    },
    {
      title: "Foundation Year Requirements",
      description:
        "For our Integrated Foundation courses, we usually require:",
      items: [
        "A Spanish Título de Bachiller with an average mark of 5.0 or above.",
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
      programme: "Spanish Título de Bachiller — English Language",
      requirement: "A minimum mark of 8 or above in English Language.",
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

];