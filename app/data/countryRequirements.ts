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
  code: "OTHER",
  name: "Other Country",
  flag: "🌍",
  introduction: "",
  sections: [],
  englishRequirements: [],
},
];