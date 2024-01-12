// collegeData.js

const courseData = [
  {
    collegeCode: "074",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "MIET Meerut",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
    },
   
   
    overviewTabData : [
    
      {
        id: "Overview",
        type : "overview",
        content: "MBA, or Master of Business Administration, is a sought-after postgraduate course globally. Spanning two years, it enhances leadership, strategic thinking, and problem-solving skills. Applicants typically need over 50% in undergrad studies, with admissions based on exams like CAT, CMAT, XAT, and MAH MBA CET. Renowned institutions like IIMs, XLRI, and ISB offer MBA programs, with fees ranging from INR 10 to 25 lakh. Graduates secure roles like Finance Manager or Marketing Manager, earning salaries from INR 5 to 25 LPA. An MBA is increasingly popular among BTech, BBA, BCom, BA, BSc, and BCA graduates for managerial-level career advancement."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Meerut Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.Tech", count: "16 Courses", fee: "2.45 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.82 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "72.26 K - 9.71 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC, CUET, NTA, CBSE 12th, UP 12th"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "75705", year2022: "254965", year2023: "317975" },
          { course: "B.Tech. in Computer Science and Engineering (Data Science)", year2021: "1174350", year2022: "– / –", year2023: "550352" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence and Machine Learning)", year2021: "283820", year2022: "518665", year2023: "386351" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "MIET Meerut admissions 2023 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "MIET MEERUT ADMISSION PROCESS 2023", childContent: "MIET Meerut admission procedure comprises merit in the qualifying examination or entrance exam scores. Meerut Institute of Engineering and Technology (MIET) offers 28 undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at MIET is online. MIET provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "MIET MEERUT ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Meerut Institute of Engineering and Technology offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR MIET MEERUT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "BTech", Eligibility: "Class 12 with 60% aggregate in Science stream JEE Main/ UPSEE" },
            { course: "BPharma", Eligibility: "Class 12 with 50% aggregate in Biology, Chemistry and Physics UPSEE" },
            { course: "MTech", Eligibility: "BTech/ BE OR MSc in a relevant discipline GATE" },
            { course: "MBA", Eligibility: "Bachelor's degree with 50% aggregate in any discipline CMAT/ MAT/ CAT/ XAT GMAT/ UPSEE" },
            { course: "MCA", Eligibility: "BCA or equivalent qualification UPSEE" },
            { course: "MPharma", Eligibility: "	BPharma or equivalent qualification GPAT" },
            { course: "PhD", Eligibility: "Master's degree in a relevant discipline" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Meerut Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.Tech", count: "16 Courses", fee: "2.45 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.82 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "72.26 K - 9.71 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC, CUET, NTA, CBSE 12th, UP 12th"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "75705", year2022: "254965", year2023: "317975" },
          { course: "B.Tech. in Computer Science and Engineering (Data Science)", year2021: "1174350", year2022: "– / –", year2023: "550352" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence and Machine Learning)", year2021: "283820", year2022: "518665", year2023: "386351" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "MIET Meerut admissions 2023 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "MIET MEERUT ADMISSION PROCESS 2023", childContent: "MIET Meerut admission procedure comprises merit in the qualifying examination or entrance exam scores. Meerut Institute of Engineering and Technology (MIET) offers 28 undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at MIET is online. MIET provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (16 courses )",TuitionFees : "2.4 L", Eligibility: "10+2 : 45 % Exams : JEE MainUPTAC" },
            { course: "B.Pharma (1 courses )",TuitionFees : "2.8 L", Eligibility: "Exams : CUETNTA" },
            { course: "B.Sc (2 courses )",TuitionFees : "76.3 K - 9.7 L", Eligibility: "10+2 : 50-55 % Exams : CBSE 12thUP 12th" },
            { course: "MCA (1 courses )",TuitionFees : "1.2 L", Eligibility: "Exams : NTACUET-PG" },
            { course: "MBA/PGDM (1 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 50 % Exams : CUETNTA, CUET, NTA, CUET-PG" },
            { course: "M.E/M.Tech (1 courses )",TuitionFees : "1.3 L", Eligibility: "– / –" },
            { course: "M.Pharma ( 3 courses )",TuitionFees : "1.5 L", Eligibility: "	– / –" },
            { course: "M.Sc (2 courses )",TuitionFees : "91.3 K - 97.3 K", Eligibility: "Graduation : 50 %" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Meerut Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.Tech", count: "16 Courses", fee: "2.45 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.82 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "72.26 K - 9.71 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC, CUET, NTA, CBSE 12th, UP 12th"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "75705", year2022: "254965", year2023: "317975" },
          { course: "B.Tech. in Computer Science and Engineering (Data Science)", year2021: "1174350", year2022: "– / –", year2023: "550352" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence and Machine Learning)", year2021: "283820", year2022: "518665", year2023: "386351" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "MIET Meerut admissions 2023 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        title: "MIET Highlights 2023",
        content: "Meerut Institute of Engineering & Technology (MIET) is a prestigious institution Meerut offers a quality education at a higher level. Established in 1997, it is managed and governed by the City Educational & Social Welfare Society. The institute has an affiliation with the Dr. APJ Abdul Kalam University- AKTU (formerly Uttar Pradesh Technical University) and offers courses approved by the All India Council of Technical Education (AICTE), New Delhi. NAAC has accredited it with a 'B++ Grade'. MIET also holds accreditation from the National Board of Accreditation (NBA). MIET offers a total of 28 courses at the undergraduate and postgraduate levels."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Meerut Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.Tech", count: "16 Courses", fee: "2.45 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.82 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "72.26 K - 9.71 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC, CUET, NTA, CBSE 12th, UP 12th"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "75705", year2022: "254965", year2023: "317975" },
          { course: "B.Tech. in Computer Science and Engineering (Data Science)", year2021: "1174350", year2022: "– / –", year2023: "550352" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence and Machine Learning)", year2021: "283820", year2022: "518665", year2023: "386351" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "075",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "Dewan VS Group of Institutions India",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.5/5",
      star : 5,
      reviewCount: 245,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "NH-58, By-Pass Road, Partapur, Meerut-250103 Uttar Pradesh, INDIA",
      website: "www.dewaninstitutes.com",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Admissions are open for 2023 batch. Candidates can visit the official website to apply."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Dewan V.S Group of Institutions Highlights 2023",
        content: "Dewan V.S Group of Institutions is a Private college established in year 1996. The college is located in Meerut, Uttar Pradesh. Dewan V.S Group of Institutions is approved by the All India Council for Technical Education, Ministry of HRD, New Delhi, NCTE, NCHMCT, Ministry of Tourism, New Delhi and Bar Council of India,New Delhi. Moreover, the courses of the institute are also affiliated to Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow, CCS University, Meerut The institute offers undergraduate, postgraduate, and certificate programmes. The courses provided by the innstitute include B.Tech., BBA, BCA, B.Sc.(HHA), BHMCT, B.A.LL.B., B.Com.LL.B, LL.B., B.Ed., MCA, MBA, PGDM & LL.M. These Degree programmes are in the streams of Hospitality & Travel, IT & Software, Engineering, Business & Management Studies, Teaching & Education and Law. All these programmes are offered in Full Time mode. Below are the major highlights of Dewan V.S Group of Institutions:"
      },
      {
        id: "Fees",
        type : "courses",
        title: "Dewan V.S Group of Institutions Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "12 Courses", fee: "1.65 L - 2.8 L" },
          { name: "B.Ed", count: "1 Courses", fee: "81.25 K" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.70 L- 2.4 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "603126", year2022: "646505", year2023: "756099" },
          { course: "B.Tech. in Artificial Intelligence (AI) and Data Science", year2021: "– / –", year2022: "– / –", year2023: "351961" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Admissions are open for 2023 batch. Candidates can visit the official website to apply."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "DVSGI ADMISSION PROCESS 2023", childContent: "DVSGI admission procedure comprises merit in the qualifying examination or entrance exam scores. Dewan V.S Group of Institutions offers 28 undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at DVSGI is online. DVSGI provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "DVSGI ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Dewan V.S Group of Institutions offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR DVSGI COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "B.E./B.Tech", Eligibility: "10+2 : 45 % Exams : JEE MainUPTAC" },
            { course: "B.Ed.", Eligibility: "Exams : UP B.Ed JEE" },
            { course: "BCA", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
            { course: "MBA/PGDM", Eligibility: "Graduation : 50 % Exams : NTACUET-PG" },
            { course: "MCA", Eligibility: "Exams : NTACUET-PG" },
            { course: "B.A. LL.B.", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
            { course: "BBA", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Dewan V.S Group of Institutions Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "12 Courses", fee: "1.65 L - 2.8 L" },
          { name: "B.Ed", count: "1 Courses", fee: "81.25 K" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.70 L- 2.4 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "603126", year2022: "646505", year2023: "756099" },
          { course: "B.Tech. in Artificial Intelligence (AI) and Data Science", year2021: "– / –", year2022: "– / –", year2023: "351961" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Admissions are open for 2023 batch. Candidates can visit the official website to apply."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "DVSGI ADMISSION PROCESS 2023", childContent: "DVSGI admission procedure comprises merit in the qualifying examination or entrance exam scores. Dewan V.S Group of Institutions offers 28 undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at DVSGI is online. DVSGI provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (12 courses )",TuitionFees : "1.6 L - 2.8 L", Eligibility: "10+2 : 45 % Exams : JEE Main UPTAC" },
            { course: "B.Ed (1 courses )",TuitionFees : "81.3 K", Eligibility: "Exams : UP B.Ed JEE" },
            { course: "MBA/PGDM (2 courses )",TuitionFees : "1.7 L - 2.4 L", Eligibility: "Graduation : 50 % Exams : NTACUET-PG" },
            { course: "MCA (3 courses )",TuitionFees : "1.4 L", Eligibility: "Exams : NTACUET-PG" },
            { course: "BCA (1 courses )",TuitionFees : "1.6 L", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
            { course: "B.A. LL.B. (1 courses )",TuitionFees : "2 L", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
            { course: "B.Sc. ( 1 courses )",TuitionFees : "2.8 L", Eligibility: "Exams : NCHMCT JEE" },
            { course: "BBA (1 courses )",TuitionFees : "1.6 L", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th ISC" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Dewan VS Group of Institutions India Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "12 Courses", fee: "1.65 L - 2.8 L" },
          { name: "B.Ed", count: "1 Courses", fee: "81.25 K" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.70 L- 2.4 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "603126", year2022: "646505", year2023: "756099" },
          { course: "B.Tech. in Artificial Intelligence (AI) and Data Science", year2021: "– / –", year2022: "– / –", year2023: "351961" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Admissions are open for 2023 batch. Candidates can visit the official website to apply."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Dewan V.S Group of Institutions Highlights 2023",
        content: "Dewan V.S Group of Institutions is a Private college established in year 1996. The college is located in Meerut, Uttar Pradesh. Dewan V.S Group of Institutions is approved by the All India Council for Technical Education, Ministry of HRD, New Delhi, NCTE, NCHMCT, Ministry of Tourism, New Delhi and Bar Council of India,New Delhi. Moreover, the courses of the institute are also affiliated to Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow, CCS University, Meerut The institute offers undergraduate, postgraduate, and certificate programmes. The courses provided by the innstitute include B.Tech., BBA, BCA, B.Sc.(HHA), BHMCT, B.A.LL.B., B.Com.LL.B, LL.B., B.Ed., MCA, MBA, PGDM & LL.M. These Degree programmes are in the streams of Hospitality & Travel, IT & Software, Engineering, Business & Management Studies, Teaching & Education and Law. All these programmes are offered in Full Time mode. Below are the major highlights of Dewan V.S Group of Institutions:"
      },
      {
        id: "Fees",
        type : "courses",
        title: "Dewan VS Group of Institutions India Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "12 Courses", fee: "1.65 L - 2.8 L" },
          { name: "B.Ed", count: "1 Courses", fee: "81.25 K" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.70 L- 2.4 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "603126", year2022: "646505", year2023: "756099" },
          { course: "B.Tech. in Artificial Intelligence (AI) and Data Science", year2021: "– / –", year2022: "– / –", year2023: "351961" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "076",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "JP Institute of Engineering and Technology",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "3.1/5",
      star : 5,
      reviewCount: 42,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Mawana Road P.O Rajpura Meerut Uttar Pradesh Meerut ( Uttar Pradesh)",
      website: "http://www.jpiet.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "JP Institute of Engineering and Technology Highlights 2023",
        content: "JP Institute of Engineering & Technology was established in 2007 by JP Education trust. It is located in Meerut, Uttar Pradesh. It offers various courses in various streams of Engineering, Management and Computer Application courses. It aims to provide a broad range of undergraduate programmes in technology, business administration and education. It is approved by AICTE, New Delhi. It is affiliated to Uttar Pradesh Technical University, Lucknow."
      },
      {
        id: "Fees",
        type : "courses",
        title: "JP Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "6 Courses", fee: "1.6 L - 2.4 L" },
          { name: "MCA", count: "1 Courses", fee: "1.2 L" },
          { name: "MBA/PGDM", count: "1 Courses", fee: "1.3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "278727", year2022: "897386", year2023: "533167" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "– / –", year2022: "– / –", year2023: "848002" },
          { course: "B.Tech. Information Technology", year2021: "568988", year2022: "799466", year2023: "920935" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "JP INSTITUTE OF ENGINEERING AND TECHNOLOGY ADMISSION PROCESS 2023", childContent: "JP Institute of Engineering and Technology admission procedure comprises merit in the qualifying examination or entrance exam scores. JP Institute of Engineering and Technology offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at JP Institute of Engineering and Technology of  is online. JP Institute of Engineering and Technology provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "JP INSTITUTE OF ENGINEERING AND TECHNOLOGY ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "JP Institute of Engineering and Technology offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR JP INSTITUTE OF ENGINEERING AND TECHNOLOGY COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "B.E./B.Tech", Eligibility: "Exams : JEE MainUPTAC" },
            { course: "MCA", Eligibility: "Exams : NTACUET-PG" },
            { course: "After 10th Diploma", Eligibility: "Exams : JEECUP" },
            { course: "MBA/PGDM", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG" },
            { course: "M.E./M.Tech", Eligibility: "– / –" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "JP Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "6 Courses", fee: "1.6 L - 2.4 L" },
          { name: "MCA", count: "1 Courses", fee: "1.2 L" },
          { name: "MBA/PGDM", count: "1 Courses", fee: "1.3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "278727", year2022: "897386", year2023: "533167" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "– / –", year2022: "– / –", year2023: "848002" },
          { course: "B.Tech. Information Technology", year2021: "568988", year2022: "799466", year2023: "920935" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "JP INSTITUTE OF ENGINEERING AND TECHNOLOGY ADMISSION PROCESS 2023", childContent: "JP Institute of Engineering and Technology admission procedure comprises merit in the qualifying examination or entrance exam scores. JP Institute of Engineering and Technology offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at DVSGI is online. DVSGI provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (6 courses )",TuitionFees : "1.6 L - 2.4 L", Eligibility: "Exams : JEE Main UPTAC" },
            { course: "MBA/PGDM (1 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG" },
            { course: "MCA (1 courses )",TuitionFees : "1.2 L", Eligibility: "Exams : NTA CUET-PG" },
            { course: "After 10th Diploma (4 courses )",TuitionFees : "1 L", Eligibility: "Exams : JEECUP" },
            { course: "M.E./M.Tech (1 courses )",TuitionFees : "1.3 L", Eligibility: "– / –" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "JP Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "6 Courses", fee: "1.6 L - 2.4 L" },
          { name: "MCA", count: "1 Courses", fee: "1.2 L" },
          { name: "MBA/PGDM", count: "1 Courses", fee: "1.3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "278727", year2022: "897386", year2023: "533167" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "– / –", year2022: "– / –", year2023: "848002" },
          { course: "B.Tech. Information Technology", year2021: "568988", year2022: "799466", year2023: "920935" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "JP Institute of Engineering and Technology Highlights 2023",
        content: "JP Institute of Engineering & Technology was established in 2007 by JP Education trust. It is located in Meerut, Uttar Pradesh. It offers various courses in various streams of Engineering, Management and Computer Application courses. It aims to provide a broad range of undergraduate programmes in technology, business administration and education. It is approved by AICTE, New Delhi. It is affiliated to Uttar Pradesh Technical University, Lucknow."
      },
      {
        id: "Fees",
        type : "courses",
        title: "JP Institute of Engineering and Technology Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "6 Courses", fee: "1.6 L - 2.4 L" },
          { name: "MCA", count: "1 Courses", fee: "1.2 L" },
          { name: "MBA/PGDM", count: "1 Courses", fee: "1.3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "Accepting Exams: JEE Main, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "B.Tech. in Computer Science and Engineering", year2021: "278727", year2022: "897386", year2023: "533167" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "– / –", year2022: "– / –", year2023: "848002" },
          { course: "B.Tech. Information Technology", year2021: "568988", year2022: "799466", year2023: "920935" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "127",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "IIMT Group of Colleges",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.0/5",
      star : 5,
      reviewCount: 15,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "IIMT Nagar, ‘O’ Pocket, Ganga Nagar Colony, Mawana Road Meerut ( Uttar Pradesh)",
      website: "https://iimtcollege.edu.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "IIMT Group of Colleges Highlights 2023",
        content: "IIMT Engineering College, Meerut is one of the leading institutions under the aegis of IIMT Group of Colleges, IIMT Engineering College is affiliated to AKTU Lucknow. It has achieved excellence in both scholastic & non scholastic development of its students and is committed to contribute innovatively in the field of technical and professional education. The college is known for imparting high quality professional qualification in the field of engineering and management. Hon’able Chairman, Shri. Yogesh Mohanji Gupta, founder of the institution started this journey in 1994 with a belief to promote Indian culture and research based education to the new generation. Since then the college has achieved many milestones and set high records of producing meritorious students in these fields. IIMT Engineering College welcomes all aspirants who are willing to excel in the fields of engineering & technology and scale their career to greater heights. Our Extended family is an integral part of our lives and we at IIMT welcome you with open arms!"
      },
      {
        id: "Fees",
        type : "courses",
        title: "IIMT Group of Colleges Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "11 Courses", fee: "3.05 L" },
          { name: "MCA", count: "1 Courses", fee: "2.8 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "2.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CBSE 12th, UP 12th, ISC, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IIMT ADMISSION PROCESS 2023", childContent: "IIMT admission procedure comprises merit in the qualifying examination or entrance exam scores. IIMT offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at IIMT is online. IIMT provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "IIMT ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "IIMT Group of Colleges offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR IIMT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "B.E./B.Tech", Eligibility: "10+2 : 45 % Exams :CBSE 12th UP 12th UPTAC ISC" },
            { course: "MBA/PGDM", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG" },
            { course: "MCA", Eligibility: "Exams : NTA CUET-PG" },
            { course: "M.E./T.Tech", Eligibility: "Graduation : 55-60 % Exams : JEE Main" },
            { course: "B.Sc. (Post Basic)", Eligibility: "Exams : CBSE 12th UP 12th" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "IIMT Group of Colleges Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "11 Courses", fee: "3.05 L" },
          { name: "MCA", count: "1 Courses", fee: "2.8 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "2.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CBSE 12th, UP 12th, ISC, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IIMT ADMISSION PROCESS 2023", childContent: "IIMT admission procedure comprises merit in the qualifying examination or entrance exam scores. IIMT offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at IIMT is online. IIMT provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (11 courses )",TuitionFees : "1.8 L - 2.4 L", Eligibility: "10+2 : 45 % Exams :CBSE 12th UP 12th UPTAC ISC" },
            { course: "MBA/PGDM (2 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG" },
            { course: "MCA (1 courses )",TuitionFees : "1.2 L", Eligibility: "Exams : NTA CUET-PG" },
            { course: "M.E./M.Tech (3 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 55-60 % Exams : JEE Main" },
            { course: "B.Sc. (Post Basic) (1 courses )",TuitionFees : "– / –", Eligibility: "Exams : CBSE 12th UP 12th" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "IIMT Group of Colleges Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "11 Courses", fee: "3.05 L" },
          { name: "MCA", count: "1 Courses", fee: "2.8 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "2.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams:CBSE 12th, UP 12th, ISC, UPTAC"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "080",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "Sanskriti University",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.3/5",
      star : 5,
      reviewCount: 191,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "28 K. M. Stone, Mathura - Delhi Highway, Chhata Mathura ( Uttar Pradesh)",
      website: "www.sanskriti.edu.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username. CUET PG 2024 registration is ongoing and the last date to apply is Jan 24, 2024. Further, the CUET PG exam will be held between Mar 11, 2024 and Mar 28, 2024"
      },
      {
        id: "Overview",
        type : "overview",
        title: "Sanskriti University Highlights 2023",
        content: "Sanskriti University is a private university that was established in 2016 in Mathura. It is recognised by the University Grants Commission (UGC) and is also a member of the Association of Indian Universities (AIU). The University is approved by the Bar Council of India (BCI), the Rehabilitation Council of India (RCI), the Pharmacy Council of India (PCI) and the National Council for Teacher Education (NCTE). The university also offers international opportunities to students. It has signed MoUs with various prestigious international universities, namely the University of Cambridge, HELP University, Malaysia, Universidad Abierta Interamericana Argentina, etc. The University has a Placement Cell that coordinates with companies for placement drives. It has an overall placement record of 91% with a participation of more than 100 companies. A few of the important highlights regarding Sanskriti University (SU) are mentioned in the table below:"
      },
      {
        id: "Fees",
        type : "courses",
        title: "Sanskriti University popular programmes 2023",
        courses: [
          { name: "M.Sc.", count: "11 Courses", fee: "60 K - 1.4 L" },
          { name: "B.Sc.", count: "14 Courses", fee: "1.35 L - 6 L" },
          { name: "B.Pharma", count: "2 Courses", fee: "2.82 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "M.Sc. Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CUET-PG"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024.CUET PG 2024 registration is ongoing and the last date to apply is Jan 24, 2024. Further, the CUET PG exam will be held between Mar 11, 2024 and Mar 28, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "SANSKRITI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Sanskriti University admission procedure comprises merit in the qualifying examination or entrance exam scores. Sanskriti University offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at Sanskriti University is online. Sanskriti University provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "SANSKRITI UNIVERSITY ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Sanskriti University offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR SANSKRITI UNIVERSITY COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "B.E./B.Tech", Eligibility: "10+2 : 45-60 % Exams : CBSE 12thJEE Main CUET" },
            { course: "B.Pharma", Eligibility: "Exams : CUET" },
            { course: "M.E./M.Tech", Eligibility: "Graduation : 55 % Exams : CUET-PG" },
            { course: "MBA/PGDM", Eligibility: "10+2 : 50 % Graduation : 50 % Exams : MAT CAT NMAT XAT NAT CBSE 12th UP 12th" },
            { course: "MCA", Eligibility: "10+2 : 50 % Exams : CUET-PG" },
            { course: "BCA", Eligibility: "	10+2 : 50 % Exams : CBSE 12thCUET" },
            { course: "PhD", Eligibility: "– / –" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Sanskriti University popular programmes 2023",
        courses: [
          { name: "M.Sc.", count: "11 Courses", fee: "60 K - 1.4 L" },
          { name: "B.Sc.", count: "14 Courses", fee: "1.35 L - 6 L" },
          { name: "B.Pharma", count: "2 Courses", fee: "2.82 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "M.Sc. Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CUET-PG"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024.CUET PG 2024 registration is ongoing and the last date to apply is Jan 24, 2024. Further, the CUET PG exam will be held between Mar 11, 2024 and Mar 28, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "SANSKRITI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Sanskriti University admission procedure comprises merit in the qualifying examination or entrance exam scores. Sanskriti University offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at Sanskriti University is online. Sanskriti University provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (10 courses )",TuitionFees : "2.4 L - 4.6 L", Eligibility: "10+2 : 45-60 % Exams : CBSE 12th JEE Main CUET" },
            { course: "B.Pharma (1 courses )",TuitionFees : "2.8 L", Eligibility: "Exams : CUET" },
            { course: "B.Sc (14 courses )",TuitionFees : "1.4 L - 6 L", Eligibility: "10+2 : 45-60 % Exams : CBSE 12thUP 12th CUET ISC" },
            { course: "MCA (1 courses )",TuitionFees : "1.2 L", Eligibility: "10+2 : 50 % Exams : CUET-PG" },
            { course: "MBA/PGDM (5 courses )",TuitionFees : "1.3 L - 1.4 L", Eligibility: "10+2 : 50 % Graduation : 50 % Exams : MAT CAT NMAT XAT NAT CBSE 12th UP 12th" },
            { course: "M.E/M.Tech (5 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 55 % Exams : CUET-PG" },
            { course: "BCA ( 4 courses )",TuitionFees : "1.8 L - 2.7 L", Eligibility: "10+2 : 50 % Exams : CBSE 12thCUET" },
            { course: "M.Sc (11 courses )",TuitionFees : "60 K - 1.4 L", Eligibility: "Graduation : 50 % Exams : CUET-PG" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Sanskriti University popular programmes 2023",
        courses: [
          { name: "M.Sc.", count: "11 Courses", fee: "60 K - 1.4 L" },
          { name: "B.Sc.", count: "14 Courses", fee: "1.35 L - 6 L" },
          { name: "B.Pharma", count: "2 Courses", fee: "2.82 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "M.Sc. Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CUET-PG"
        ],
        importantDates: [
          { date: "Jan '24", event: "JEE Main 2024 Admit Card" },
          { date: "24 Jan '24 - 1 Feb '24", event: "JEE Main 2024 Exam Date Session 1" },
          { date: "12 Feb '24", event: "JEE Main 2024 Result Session 1" },
          // ... add more dates as needed
        ]
      },
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "081",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "Asia-Pacific Institute of Management, New Delhi",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.1/5",
      star : 5,
      reviewCount: 85,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "3&4, GD Birla Marg, Institutional Area, Delhi",
      website: "www.asiapacific.edu",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Asia-Pacific Institute of Management Highlights 2023",
        content: "Established in 1996, the Asia-Pacific Institute of Management is one of the premier management institutes located in Jasola Vihar, New Delhi. Asia Pacific Institute of Management offers students limitless opportunities to pursue their broad interests and career prospects. APIM New Delhi is approved by the All India Council for Technical Education (AICTE), Ministry of Human Resource and Development (MHRD), Government of India and The Institute of Management Accountants (IMA) quality assurance. The Asia-Pacific Institute of Management provides various PGDM programmes in specialisations such as General (Dual Specialisation), Healthcare Management, Big Data Analysis, Banking & Financial Services, and Marketing. Below are some of the key facts about the Asia-Pacific Institute of Management New Delhi:"
      },
      {
        id: "Fees",
        type : "courses",
        title: "Asia-Pacific Institute of Management Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "6 Courses", fee: "9.9 L - 11.4 L" },
          { name: "M.Sc.", count: "1 Courses", fee: "13.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 45% aggregate",
          "Accepting Exams: MAT, XAT, CAT, CMAT"
        ],
        importantDates: [
          { date: "Jan '24", event: "XAT 2024 Result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          { date: "22 Feb '24", event: "MAT 2024 Admit Card PBT Download" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Post Graduate Diploma in Management (PGDM) (General) (OVERALL)", year2020: "70", year2021: "70", year2022: "70" },

          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "ASIA PACIFIC INSTITUTE OF MANAGEMENT ADMISSION PROCESS 2023", childContent: "The institute offers 12 courses under three programmes MBA, PGDM and MSc. Asia Pacific Institute of Management admission 2024 for New Delhi campus is merit-based and national-based entrance exam scores for PG courses. The institute accepts national-level entrance exams such as CMAT/CAT/MAT/XAT for admission to APIM course admissions. Students can check the table below to know the overall admission and application status for the year 2023:" },
          {childTitle: "ASIA PACIFIC INSTITUTE OF MANAGEMENT ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Asia-Pacific Institute of Management offers several PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR ASIA PACIFIC INSTITUTE OF MANAGEMENT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "MBA/PGDM (General)", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            { course: "M.Sc.", Eligibility: "Graduation : 50 %" },
            { course: "PGDM in Healthcare Management", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            { course: "PGDM in Banking and Financial Services", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            { course: "PGDM in Marketing Management", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            { course: "PGDM in Big Data Analytics", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Asia-Pacific Institute of Management Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "6 Courses", fee: "9.9 L - 11.4 L" },
          { name: "M.Sc.", count: "1 Courses", fee: "13.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 45% aggregate",
          "Accepting Exams: MAT, XAT, CAT, CMAT"
        ],
        importantDates: [
          { date: "Jan '24", event: "XAT 2024 Result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          { date: "22 Feb '24", event: "MAT 2024 Admit Card PBT Download" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Post Graduate Diploma in Management (PGDM) (General) (OVERALL)", year2020: "70", year2021: "70", year2022: "70" },

          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Asia-Pacific Institute of Management admissions 2024 is currently open for PGDM courses. Candidates can apply online through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "ASIA PACIFIC INSTITUTE OF MANAGEMENT PROCESS 2023", childContent: "The institute offers 12 courses under three programmes MBA, PGDM and MSc. Asia Pacific Institute of Management admission 2024 for New Delhi campus is merit-based and national-based entrance exam scores for PG courses. The institute accepts national-level entrance exams such as CMAT/CAT/MAT/XAT for admission to APIM course admissions. Students can check the table below to know the overall admission and application status for the year 2023:" },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "MBA/PGDM (6 courses )",TuitionFees : "9.9 L - 11.4 L", Eligibility: "Graduation : 45-50 % Exams Accepted: CAT MAT XAT CMAT" },
            { course: "M.Sc. (1 courses )",TuitionFees : "13.5 L", Eligibility: "Graduation : 50 %" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Asia-Pacific Institute of Management Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "6 Courses", fee: "9.9 L - 11.4 L" },
          { name: "M.Sc.", count: "1 Courses", fee: "13.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 45% aggregate",
          "Accepting Exams: MAT, XAT, CAT, CMAT"
        ],
        importantDates: [
          { date: "Jan '24", event: "XAT 2024 Result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          { date: "22 Feb '24", event: "MAT 2024 Admit Card PBT Download" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Post Graduate Diploma in Management (PGDM) (General) (OVERALL)", year2020: "70", year2021: "70", year2022: "70" },

          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Asia-Pacific Institute of Management Highlights 2023",
        content: "Established in 1996, the Asia-Pacific Institute of Management is one of the premier management institutes located in Jasola Vihar, New Delhi. Asia Pacific Institute of Management offers students limitless opportunities to pursue their broad interests and career prospects. APIM New Delhi is approved by the All India Council for Technical Education (AICTE), Ministry of Human Resource and Development (MHRD), Government of India and The Institute of Management Accountants (IMA) quality assurance. The Asia-Pacific Institute of Management provides various PGDM programmes in specialisations such as General (Dual Specialisation), Healthcare Management, Big Data Analysis, Banking & Financial Services, and Marketing. Below are some of the key facts about the Asia-Pacific Institute of Management New Delhi:"
      },
      {
        id: "Fees",
        type : "courses",
        title: "Asia-Pacific Institute of Management Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "6 Courses", fee: "9.9 L - 11.4 L" },
          { name: "M.Sc.", count: "1 Courses", fee: "13.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 45% aggregate",
          "Accepting Exams: MAT, XAT, CAT, CMAT"
        ],
        importantDates: [
          { date: "Jan '24", event: "XAT 2024 Result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          { date: "22 Feb '24", event: "MAT 2024 Admit Card PBT Download" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Post Graduate Diploma in Management (PGDM) (General) (OVERALL)", year2020: "70", year2021: "70", year2022: "70" },

          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "082",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "Maharishi University of Information Technology",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "3.8/5",
      star : 5,
      reviewCount: 17,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Sector 110, PO- Maharishi Nagar, Distt. Gautam Budh Nagar Noida ( Uttar Pradesh)",
      website: "www.muitnoida.edu.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Maharishi University of Information Technology Admissions 2024 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Maharishi University Highlights 2023",
        content: "The Maharishi University of Information Technology (MUIT) was established in 2001. The university is approved by the Pharmacy Council of India and the Bar Council of India. The university provides Bachelor, Master, and Doctoral programmes in one of the widest disciplines, including Science, Commerce, Management, Humanities, Pharmacy, Engineering, Animation, Journalism & Mass Communication, Law, and Enrichment Courses. Some of the courses offered include MBA, BTech, LLM, BSc, BCA, BBA LLB, BCom, BBA, BA, MA, MCom, MCA, etc."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Maharishi University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "4 Courses", fee: "5 L - 6 L" },
          { name: "BCA", count: "3 Courses", fee: "2.25 L - 3 L" },
          { name: "B.Sc.", count: "11 Courses", fee: "1.8 L - 6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "CBSE 12th UP 12th"
        ],
      },
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Maharishi University of Information Technology Admissions 2024 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "MAHARISHI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Maharishi University of Information Technology, Noida has been recognised by the UGC and AICTE. The university offers various UG and PG programmes in various streams such as Data Science, Animation, Law, Consciousness and Journalism and mass Communication. The duration of all these programmes is between one and five years. The application form for MUIT can be submitted either at the Admission cell, Noida campus or through the website. Direct admission will be offered based on your JEE score/ CUET score/ CLAT score or if you score 90% in class 12 from a recognized board." },
          {childTitle: "MAHARISHI UNIVERSITY ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Maharishi University offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR MAHARISHI UNIVERSITY COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "B.E./B.Tech", Eligibility: "10+2 : 45 % Exams : CBSE 12thUP 12th" },
            { course: "BPharma", Eligibility: "10+2 with 50% Exams: CBSE 12th UP 12th ISC" },
            { course: "M.Sc", Eligibility: "Graduation : 40-45 %" },
            { course: "MBA/PGDM", Eligibility: "Graduation : 50 %" },
            { course: "MCA", Eligibility: "	 Graduation : 50 %" },
            { course: "D.Pharma", Eligibility: "	10+2 : 50 % Exams : CBSE 12th UP 12th ISC" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Maharishi University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "4 Courses", fee: "5 L - 6 L" },
          { name: "BCA", count: "3 Courses", fee: "2.25 L - 3 L" },
          { name: "B.Sc.", count: "11 Courses", fee: "1.8 L - 6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "CBSE 12th UP 12th"
        ],
      },
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Maharishi University of Information Technology Admissions 2024 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "MAHARISHI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Maharishi University of Information Technology, Noida has been recognised by the UGC and AICTE. The university offers various UG and PG programmes in various streams such as Data Science, Animation, Law, Consciousness and Journalism and mass Communication. The duration of all these programmes is between one and five years. The application form for MUIT can be submitted either at the Admission cell, Noida campus or through the website. Direct admission will be offered based on your JEE score/ CUET score/ CLAT score or if you score 90% in class 12 from a recognized board." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "B.E / BTech (4 courses )",TuitionFees : "5 L - 6 L", Eligibility: "10+2 : 45 % Exams : CBSE 12th UP 12th" },
            { course: "B.Pharma (1 courses )",TuitionFees : "4.8 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th UP 12th ISC" },
            { course: "B.Sc (11 courses )",TuitionFees : "1.8 L - 6 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th UP 12th ISC" },
            { course: "MCA (1 courses )",TuitionFees : "– / –", Eligibility: "Graduation : 50 %" },
            { course: "MBA/PGDM (1 courses )",TuitionFees : "2 L", Eligibility: "Graduation : 50 % " },
            { course: "LL.M. (20 courses)",TuitionFees : "80 K - 1.6 L", Eligibility: "Graduation : 50 % Exams : CBSE 12th" },
            { course: "D.Pharma (1 courses )",TuitionFees : "2.4 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th UP 12th ISC" },
            { course: "M.Sc (2 courses )",TuitionFees : "1.4 L - 4 L", Eligibility: "Graduation : 40-45 %" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "Maharishi University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "4 Courses", fee: "5 L - 6 L" },
          { name: "BCA", count: "3 Courses", fee: "2.25 L - 3 L" },
          { name: "B.Sc.", count: "11 Courses", fee: "1.8 L - 6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "CBSE 12th UP 12th"
        ],
      },
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Maharishi University of Information Technology Admissions 2024 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Maharishi University Highlights 2023",
        content: "The Maharishi University of Information Technology (MUIT) was established in 2001. The university is approved by the Pharmacy Council of India and the Bar Council of India. The university provides Bachelor, Master, and Doctoral programmes in one of the widest disciplines, including Science, Commerce, Management, Humanities, Pharmacy, Engineering, Animation, Journalism & Mass Communication, Law, and Enrichment Courses. Some of the courses offered include MBA, BTech, LLM, BSc, BCA, BBA LLB, BCom, BBA, BA, MA, MCom, MCA, etc."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Maharishi University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "4 Courses", fee: "5 L - 6 L" },
          { name: "BCA", count: "3 Courses", fee: "2.25 L - 3 L" },
          { name: "B.Sc.", count: "11 Courses", fee: "1.8 L - 6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "CBSE 12th UP 12th"
        ],
      },
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "083",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
      name: "IAMR Group of Institutions",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.5/5",
      star : 5,
      reviewCount: 4,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "9th Km Stone, NH-58, Delhi-Meerut Road Ghaziabad ( Uttar Pradesh",
      website: "www.iamr.ac.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "XAT result 2024 will be announced on Jan 31, 2024. The MAT 2024 registration process is ongoing for the PBT exam and the last date to apply is Feb 20, 2024. For the IBT Phase 1 and CBT exams, the last date to register is Feb 21, 2024 and Mar 5, 2024, respectively. CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        title: "IAMR Group of Institutions Highlights 2023",
        content: "A premier Institute in higher education, IAMR Group of Institutions is grounded in Ghaziabad, Uttar Pradesh. A student can pursue any program from the Institute which Degree courses including 7 UG and 8 PG courses. These programs are offerred in Full Time mode. IAMR Group of Institutions is a reputed institute for MBA/PGDM, BBA, BCA, B.Sc., BPT, M.Sc., MPT, B.A., B.Ed courses. Students can chose from these programs to persue their career in higher studies. Institute enjoys a good reputation for courses like MBA/PGDM, BBA, BCA, B.Sc., BPT, M.Sc., MPT, B.A., B.Ed in the streams of Business & Management Studies, IT & Software, Science, Medicine & Health Sciences, Mass Communication & Media, Teaching & Education Students can opt courses from these. IAMR Group of Institutions gave you offer to gained expertize through its trained and experienced faculty in the fields of Biotechnology, Microbiology, Orthopaedics, Neurology. Institue offered courses that are approved by AICTE. Courses offered by IAMR Group of Institutions for total of 1030 candidates. Courses offered by the Institute are in the fee range of INR 132,000-295,000 for a total of 1030 candidates. Institute has a well supported campus with facilities like Auditorium, Boys Hostel, Cafeteria, Convenience Store, Girls Hostel, Hospital / Medical Facilities, Hostel, Labs, Library, Moot Court (Law), Shuttle Service, Sports Complex, Wi-Fi Campus."
      },
      {
        id: "Fees",
        type : "courses",
        title: "IAMR Group of Institutions Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "M.Sc.", count: "2 Courses", fee: "1.3 L - 1.4 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "1.6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Graduation score 50%",
          "Accepting Exams: NTA CUET-PG MAT XAT CAT CUET"
        ],
        importantDates: [
          { date: "26 Dec '23 - 24 Jan '24", event: "CUET PG 2024 Application Process" },
          { date: "Jan '24", event: "XAT 2024 result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Master of Business Administration (MBA)", year2021: "– / –", year2022: "16394", year2023: "– / –" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    admissionsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "XAT result 2024 will be announced on Jan 31, 2024. The MAT 2024 registration process is ongoing for the PBT exam and the last date to apply is Feb 20, 2024. For the IBT Phase 1 and CBT exams, the last date to register is Feb 21, 2024 and Mar 5, 2024, respectively. CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IAMR ADMISSION PROCESS 2023", childContent: "IAMR admission procedure comprises merit in the qualifying examination or entrance exam scores.IAMR Group of Institutions offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at IAMR is online. IAMR Group of Institutions provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
          {childTitle: "IAMR ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "IAMR Group of Institutions offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. It accepts the scores of various state and national level entrance exams like UPSEE, JEE Main, CAT, MAT, and others. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR IAMR COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
          cutOffs: [
            { course: "MBA/PGDM", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG MAT XAT CAT CUET" },
            { course: "M.Sc.", Eligibility: " Graduation : 60 %" },
            { course: "BPT", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "BCA", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "B.Sc.", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "MPT", Eligibility: "Graduation : 50 %" },
            { course: "BBA", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "IAMR Group of Institutions Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "M.Sc.", count: "2 Courses", fee: "1.3 L - 1.4 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "1.6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Graduation score 50%",
          "Accepting Exams: NTA CUET-PG MAT XAT CAT CUET"
        ],
        importantDates: [
          { date: "26 Dec '23 - 24 Jan '24", event: "CUET PG 2024 Application Process" },
          { date: "Jan '24", event: "XAT 2024 result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Master of Business Administration (MBA)", year2021: "– / –", year2022: "16394", year2023: "– / –" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    coursesTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "IAMR Group of Institutions admissions 2023 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IAMR ADMISSION PROCESS 2023", childContent: "IAMR Group of Institutions admission procedure comprises merit in the qualifying examination or entrance exam scores. IAMR Group of Institutions offers undergraduate and postgraduate programmes in Engineering & Technology, Applied Science, Pharmacy, Education, Computer Applications, and Management. The institute also offers vocational courses in Engineering and Management. Besides this, it offers additional training for adding value to the courses.The mode of application for all the courses at IAMR Group of Institutions is online. IAMR Group of Institutions provides numerous placement opportunities to students in top-recruiting companies like Accenture, Genpact, Axis Bank, TCS, Tech Mahindra, and Cognizant Technologies." },
        ]
      },
      { 
          id: "Reservation1",
          type : "CourseEligibility",
          title : "COURSE AND FEES 2023",
          cutOffs: [
            { course: "MBA/PGDM (2 courses )",TuitionFees : "1.3 L", Eligibility: "Graduation : 50 % Exams : NTA CUET-PG MAT XAT CAT CUET" },
            { course: "M.Sc. (2 courses )",TuitionFees : "1.3 L - 1.4 L", Eligibility: "Graduation : 60 %" },
            { course: "B.Sc (2 courses )",TuitionFees : "1.6 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "BCA (1 courses )",TuitionFees : "1.8 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "BPT (1 courses )",TuitionFees : "3 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
            { course: "MPT (4 courses )",TuitionFees : "1.9 L", Eligibility: "Graduation : 50 %" },
            { course: "BBA ( 1 courses )",TuitionFees : "1.8 L", Eligibility: "	10+2 : 50 % Exams : CBSE 12th" },
            { course: "BA (1 courses )",TuitionFees : "1.8 L", Eligibility: "10+2 : 50 % Exams : CBSE 12th" },
        
            // ... add more cut offs as needed
          ]
        },
      {
        id: "Fees",
        type : "courses",
        title: "IAMR Group of Institutions Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "M.Sc.", count: "2 Courses", fee: "1.3 L - 1.4 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "1.6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Graduation score 50%",
          "Accepting Exams: NTA CUET-PG MAT XAT CAT CUET"
        ],
        importantDates: [
          { date: "26 Dec '23 - 24 Jan '24", event: "CUET PG 2024 Application Process" },
          { date: "Jan '24", event: "XAT 2024 result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Master of Business Administration (MBA)", year2021: "– / –", year2022: "16394", year2023: "– / –" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    cutOffsTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "IAMR Group of Institutions admissions 2023 are open to all the courses. Candidates can apply through the official website."
      },
      {
        id: "Overview",
        type : "overview",
        title: "IAMR Group of Institutions Highlights 2023",
        content: "A premier Institute in higher education, IAMR Group of Institutions is grounded in Ghaziabad, Uttar Pradesh. A student can pursue any program from the Institute which Degree courses including 7 UG and 8 PG courses. These programs are offerred in Full Time mode. IAMR Group of Institutions is a reputed institute for MBA/PGDM, BBA, BCA, B.Sc., BPT, M.Sc., MPT, B.A., B.Ed courses. Students can chose from these programs to persue their career in higher studies. Institute enjoys a good reputation for courses like MBA/PGDM, BBA, BCA, B.Sc., BPT, M.Sc., MPT, B.A., B.Ed in the streams of Business & Management Studies, IT & Software, Science, Medicine & Health Sciences, Mass Communication & Media, Teaching & Education Students can opt courses from these. IAMR Group of Institutions gave you offer to gained expertize through its trained and experienced faculty in the fields of Biotechnology, Microbiology, Orthopaedics, Neurology. Institue offered courses that are approved by AICTE. Courses offered by IAMR Group of Institutions for total of 1030 candidates. Courses offered by the Institute are in the fee range of INR 132,000-295,000 for a total of 1030 candidates. Institute has a well supported campus with facilities like Auditorium, Boys Hostel, Cafeteria, Convenience Store, Girls Hostel, Hospital / Medical Facilities, Hostel, Labs, Library, Moot Court (Law), Shuttle Service, Sports Complex, Wi-Fi Campus."
      },
      {
        id: "Fees",
        type : "courses",
        title: "IAMR Group of Institutions Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "M.Sc.", count: "2 Courses", fee: "1.3 L - 1.4 L" },
          { name: "B.Sc.", count: "2 Courses", fee: "1.6 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Graduation score 50%",
          "Accepting Exams: NTA CUET-PG MAT XAT CAT CUET"
        ],
        importantDates: [
          { date: "26 Dec '23 - 24 Jan '24", event: "CUET PG 2024 Application Process" },
          { date: "Jan '24", event: "XAT 2024 result" },
          { date: "Feb '24", event: "XAT 2023 Cut Offs Release" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Master of Business Administration (MBA)", year2021: "– / –", year2022: "16394", year2023: "– / –" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  // Add more college objects as needed
];

module.exports = courseData;


























