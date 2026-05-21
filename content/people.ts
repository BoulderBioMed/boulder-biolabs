export type Person = {
  initials: string;
  name: string;
  title: string;
  bio: string[];
  creds: string[];
};

export const people: Person[] = [
  {
    initials: "JK",
    name: "Jim Kasic",
    title: "Chairman and Founder, Boulder BioMed",
    bio: [
      "With more than 30 years of experience in the Class I, II, and III medical device industry, Jim's range of experience spans large multi-national organizations to start-ups with national and international scope. He holds over 40 U.S. and international patents and has authored several dozen scientific publications.",
      "Prior to Boulder iQ, Jim founded and served as president of Boulder BioMed, and president and CEO of Sophono, Inc. (acquired by Medtronic). Earlier in his career, Jim was an engineering manager and senior design engineer at Boston Scientific, and a reliability/process/design engineer at W. L. Gore and Associates. Jim earned a Bachelor of Science degree in physics, and a Master of Science degree in chemical and biological engineering from the University of Colorado. He holds an MBA from the University of Phoenix.",
    ],
    creds: ["40+ U.S. & International Patents", "30+ Years Medical Device Industry", "MS Chem/Bio Engineering, CU"],
  },
  {
    initials: "MB",
    name: "Melissa Brookshier",
    title: "Vice President of Quality and Regulatory",
    bio: [
      "Melissa is a senior life science and biomedical device professional with more than 25 years of experience in quality, regulatory, research and development. Her expertise and leadership experience range from concept feasibility to product launch and post-market surveillance.",
      "Before joining the Boulder BioMed family, Melissa was director of consulting services of the Denver office at the Azzur Group. She has held the positions of vice president of operations and director of product development at Sharklet Technologies, project manager of R&D at Baxter International, and manager of product evaluations and study director at BDC Labs. Previously, she was the R&D manager at Spectranetics (now Philips Healthcare) and a product specialist at W.L. Gore & Associates.",
    ],
    creds: ["25+ Years Quality/Regulatory", "2 Patents", "BS Materials Science, Purdue", "MS Bioengineering, Clemson"],
  },
  {
    initials: "MD",
    name: "Mike Daddario",
    title: "Senior Engineer, Sterilization & Microbiology",
    bio: [
      "Mike leads day-to-day microbiology operations at Boulder BioLabs and Boulder Sterilization, with hands-on responsibility for sterility, bioburden, method suitability, LAL/BET, EO residuals, and CD residuals programs. He joined the Boulder BioMed family in June 2024.",
      "Before joining Boulder, Mike spent nearly three years as Sterility Laboratory Manager at Eurofins Donor & Product Testing, where he ran the sterility lab supporting tissue banking and medical device sterility release programs. Prior to Eurofins, he spent three and a half years at Infinity Laboratories (Castle Rock, CO), advancing from Microbiology Technician to Microbiology Lab Supervisor. At Infinity, he ran high-volume USP <85> Kinetic-Turbidimetric BET assays, USP <1113> microbial identification (MicroSEQ ID), USP <51>, <61>, <62>, <71>/<1223> product testing, and AAMI VDmax/Method 1 radiation sterilization validations. He was responsible for personnel training and supervision, LOP and method development, equipment maintenance and calibration, and validation of new laboratory procedures.",
      "Mike earned a Bachelor of Science in Biology from the University of Colorado Colorado Springs (2017).",
    ],
    creds: ["Senior Engineer, Sterilization & Microbiology", "5+ Years Contract Microbiology", "USP <71>, <85>, <1113>", "AAMI VDmax / Method 1", "BS Biology, UCCS"],
  },
];
