// collegeData.js

const collegeData = [
  {
    collegeCode: "074",
    category : "management",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/1.miet/miet-cover.jpg",
      logoSrc: "/assets/images/colleges/1.miet/miet-logo.jpg",
      name: "MIET Meerut",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.6/5",
      star : 5,
      reviewCount: 280,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Behind D-Mart, Ghodbunder Road, Thane West, Thane - 400610",
      website: "www.miet.ac.com",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
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
    category : "management",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/2.dewan/dewan-cover.jpeg",
      logoSrc: "/assets/images/colleges/2.dewan/dewan-logo.jpeg",
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
    category : "medical",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/3.jp/jp-cover.jpeg",
      logoSrc: "/assets/images/colleges/3.jp/jp-logo.jpg",
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
      imageSrc: "/assets/images/colleges/4.iimt/iimt-cover.jpeg",
      logoSrc: "/assets/images/colleges/4.iimt/iimt-logo.jpg",
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
      imageSrc: "/assets/images/colleges/5.sanskriti/cover.jpeg",
      logoSrc: "/assets/images/colleges/5.sanskriti/logo.jpeg",
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
      imageSrc: "/assets/images/colleges/6.apim/cover.jpeg",
      logoSrc: "/assets/images/colleges/6.apim/cover.jpeg",
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
      imageSrc: "/assets/images/colleges/7.mharishi/cover.jpeg",
      logoSrc: "/assets/images/colleges/7.mharishi/logo.jpeg",
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
      imageSrc: "/assets/images/colleges/8.iamr/cover.jpeg",
      logoSrc: "/assets/images/colleges/8.iamr/logo.jpeg",
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
  {
    collegeCode: "097",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/9.iit-delhi/cover.jpeg",
      logoSrc: "/assets/images/colleges/9.iit-delhi/logo.jpeg",
      name: "IIT Delhi",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.5/5",
      star : 5,
      reviewCount: 532,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Indian Institute of Technology, IIT Delhi Main Rd, IIT Campus Delhi",
      website: "home.iitd.ac.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24"
      },
      {
        id: "Overview",
        type : "overview",
        title: "IIT Delhi Highlights 2023",
        content: "IIT Delhi is ranked 2nd by NIRF 2023 under the Engineering category, 1st by India Today 2023 under the Engineering category, and 1st by India Today 2023 under the Engineering (Government) category. Indian Institute of Technology Delhi (IIT Delhi) is popular for its flagship MTech and BTech courses. Indian Institute of Technology Delhi (IIT Delhi), through various departments and schools of study, offers UG, PG, and various other courses to students. IIT Delhi is also ranked 197 internationally by the QS World University Rankings 2024. Hence, IIT Delhi is a reputed university present in India. IIT Delhi is one of the twenty-three IITs present in India. Earlier IITD was established in 1961 as the College of Engineering. Later it was declared as the Institution of National Importance under the “Institutes of Technology (Amendment) Act, 1963. Over the years, over 48,000 students have graduated from the Indian Institute of Technology Delhi (IIT Delhi) in several disciplines including Physical Sciences, Engineering, Management, and Humanities and Social Sciences, and various other streams. Over 15,738 students have received their BTech degree from IIT Delhi over the years."
      },
      {
        id: "Fees",
        type : "courses",
        title: "IIT Delhi Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "8 L - 8.7 L" },
          { name: "M.E./M.Tech", count: "49 Courses", fee: "3 L - 8.7 L" },
          { name: "M.Sc.", count: "22 Courses", fee: "30 K - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main, JEE Advanced"
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "100", year2022: "102", year2023: "118" },
          { course: "B.Tech. in Electrical Engineering", year2021: "553", year2022: "574", year2023: "582" },
          { course: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", year2021: "180", year2022: "197", year2023: "185" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24"
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IIT DELHI ADMISSION PROCESS 2023", childContent: "IIT Delhi admissions 2024 are ongoing. The Indian Institute of Technology offers a list of courses at the undergraduate, postgraduate and PhD levels. IIT Delhi admission to the courses is mostly entrance-based. The seat allotment for BTech, MTech, and MSc courses is carried out through respective counselling bodies. Before applying to a course, the aspirant must carefully check the eligibility requirements. Read further to know more about IIT Delhi course admission 2024." },
          {childTitle: "IIT DELHI ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "IIT Delhi offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR IIT DELHI COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "IIT Delhi Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "8 L - 8.7 L" },
          { name: "M.E./M.Tech", count: "49 Courses", fee: "3 L - 8.7 L" },
          { name: "M.Sc.", count: "22 Courses", fee: "30 K - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main, JEE Advanced"
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "100", year2022: "102", year2023: "118" },
          { course: "B.Tech. in Electrical Engineering", year2021: "553", year2022: "574", year2023: "582" },
          { course: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", year2021: "180", year2022: "197", year2023: "185" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IIT DELHI ADMISSION PROCESS 2023", childContent: "IIT Delhi admissions 2024 are ongoing. The Indian Institute of Technology offers a list of courses at the undergraduate, postgraduate and PhD levels. IIT Delhi admission to the courses is mostly entrance-based. The seat allotment for BTech, MTech, and MSc courses is carried out through respective counselling bodies. Before applying to a course, the aspirant must carefully check the eligibility requirements. Read further to know more about IIT Delhi course admission 2024." },
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
        title: "IIT Delhi Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "8 L - 8.7 L" },
          { name: "M.E./M.Tech", count: "49 Courses", fee: "3 L - 8.7 L" },
          { name: "M.Sc.", count: "22 Courses", fee: "30 K - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main, JEE Advanced"
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "100", year2022: "102", year2023: "118" },
          { course: "B.Tech. in Electrical Engineering", year2021: "553", year2022: "574", year2023: "582" },
          { course: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", year2021: "180", year2022: "197", year2023: "185" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        title: "IIT Delhi Highlights 2023",
        content: "IIT Delhi is ranked 2nd by NIRF 2023 under the Engineering category, 1st by India Today 2023 under the Engineering category, and 1st by India Today 2023 under the Engineering (Government) category. Indian Institute of Technology Delhi (IIT Delhi) is popular for its flagship MTech and BTech courses. Indian Institute of Technology Delhi (IIT Delhi), through various departments and schools of study, offers UG, PG, and various other courses to students. IIT Delhi is also ranked 197 internationally by the QS World University Rankings 2024. Hence, IIT Delhi is a reputed university present in India. IIT Delhi is one of the twenty-three IITs present in India. Earlier IITD was established in 1961 as the College of Engineering. Later it was declared as the Institution of National Importance under the “Institutes of Technology (Amendment) Act, 1963. Over the years, over 48,000 students have graduated from the Indian Institute of Technology Delhi (IIT Delhi) in several disciplines including Physical Sciences, Engineering, Management, and Humanities and Social Sciences, and various other streams. Over 15,738 students have received their BTech degree from IIT Delhi over the years."
      },
      {
        id: "Fees",
        type : "courses",
        title: "IIT Delhi Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "8 L - 8.7 L" },
          { name: "M.E./M.Tech", count: "49 Courses", fee: "3 L - 8.7 L" },
          { name: "M.Sc.", count: "22 Courses", fee: "30 K - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main, JEE Advanced"
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "100", year2022: "102", year2023: "118" },
          { course: "B.Tech. in Electrical Engineering", year2021: "553", year2022: "574", year2023: "582" },
          { course: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", year2021: "180", year2022: "197", year2023: "185" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "098",
    tag: "popular",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/10.jmi/cover.jpeg",
      logoSrc: "/assets/images/colleges/10.jmi/logo.jpeg",
      name: "Jamia Millia Islamia (JMI)",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.3/5",
      star : 5,
      reviewCount: 677,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Jamia Millia Islamia, Jamia Nagar Delhi",
      website: "www.jmi.ac.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Jamia Millia Islamia Highlights 2023",
        content: "Jamia Millia Islamia (also known as JMI) is a central university located in Delhi. It was established in 1920 by an Act of the Parliament of India and is recognised by the UGC. Some of the courses offered by Jamia Millia are approved by AICTE and NCTE and accredited by the NBA. Jamia Millia Islamia University is accredited with an A ++ Grade by NAAC. The university is ranked 26 by NIRF 2023 under the BTech category, 16 in the Best Universities in India category by US News Rank 2023, and three under the University category by NIRF 2023. Jamia Millia Islamia, through various departments and centres, offers UG, PG, PhD, distance learning, and various other courses to students across Chemistry, Computer Science, and various other streams. Jamia is famous for its flagship BSc, MSc, and PhD courses."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Jamia Millia Islamia Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "14 Courses", fee: "64.6 K" },
          { name: "M.E./M.Tech", count: "16 Courses", fee: "31 K - 1.1 L" },
          { name: "M.Sc.", count: "18 Courses", fee: "14.4 K - 1.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 55%",
          "Accepting Exams: JEE Main, JMI Entrance"
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
          { course: "B.Tech. in Civil Engineering", year2021: "– / –", year2022: "27730", year2023: "49097" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "	7216", year2023: "15487" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "25361", year2023: "43231" },
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
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "JMI ADMISSION PROCESS 2023", childContent: "Jamia Millia Islamia admission 2024 is expected to start with the application process for CUET UG. The University released its prospectus for 2023 admissions in March with the schedule for admission to courses accepting national-level and university-level entrance exams. Jamia Millia Islamia offers over 220 courses in both regular and self-financed modes. Additionally, the University also offers distance learning courses at UG, PG and diploma levels." },
          {childTitle: "JMI ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "JMI offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR JMI COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "JMI Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "14 Courses", fee: "64.6 K" },
          { name: "M.E./M.Tech", count: "16 Courses", fee: "31 K - 1.1 L" },
          { name: "M.Sc.", count: "18 Courses", fee: "14.4 K - 1.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 55%",
          "Accepting Exams: JEE Main, JMI Entrance"
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
          { course: "B.Tech. in Civil Engineering", year2021: "– / –", year2022: "27730", year2023: "49097" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "	7216", year2023: "15487" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "25361", year2023: "43231" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "JMI ADMISSION PROCESS 2023", childContent: "Jamia Millia Islamia admission 2024 is expected to start with the application process for CUET UG. The University released its prospectus for 2023 admissions in March with the schedule for admission to courses accepting national-level and university-level entrance exams. Jamia Millia Islamia offers over 220 courses in both regular and self-financed modes. Additionally, the University also offers distance learning courses at UG, PG and diploma levels." },
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
        title: "JMI Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "14 Courses", fee: "64.6 K" },
          { name: "M.E./M.Tech", count: "16 Courses", fee: "31 K - 1.1 L" },
          { name: "M.Sc.", count: "18 Courses", fee: "14.4 K - 1.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 55%",
          "Accepting Exams: JEE Main, JMI Entrance"
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
          { course: "B.Tech. in Civil Engineering", year2021: "– / –", year2022: "27730", year2023: "49097" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "	7216", year2023: "15487" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "25361", year2023: "43231" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. Below are some of the other important IIT Delhi latest updates: MBA applications for admissions 2024-26 are open; the last date to apply is Jan 31, 2024 (tentative). GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. IIT JAM 2024 online registration window is now closed. IIT JAM 2024 Admit Card will be available online to download from Jan 8, 2024. Further, the IIT JAM 2024 exam will be held on Feb 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon). The CEED 2024 registration window is now closed. Further, the CEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon).  JEE Advanced 2024 exam dates are out. IIT Madras will be conducting JEE Advanced 2024 Exam on May 26, 2024. Aspirants will be able to register online for the exam between Apr 21, 2024 and Apr 30, 2024 on the official website at jeeadv.ac.in. According to media reports, a total of 370 international and national companies registered during IIT Delhi placements 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Jamia Millia Islamia Highlights 2023",
        content: "Jamia Millia Islamia (also known as JMI) is a central university located in Delhi. It was established in 1920 by an Act of the Parliament of India and is recognised by the UGC. Some of the courses offered by Jamia Millia are approved by AICTE and NCTE and accredited by the NBA. Jamia Millia Islamia University is accredited with an A ++ Grade by NAAC. The university is ranked 26 by NIRF 2023 under the BTech category, 16 in the Best Universities in India category by US News Rank 2023, and three under the University category by NIRF 2023. Jamia Millia Islamia, through various departments and centres, offers UG, PG, PhD, distance learning, and various other courses to students across Chemistry, Computer Science, and various other streams. Jamia is famous for its flagship BSc, MSc, and PhD courses."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Jamia Millia Islamia Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "14 Courses", fee: "64.6 K" },
          { name: "M.E./M.Tech", count: "16 Courses", fee: "31 K - 1.1 L" },
          { name: "M.Sc.", count: "18 Courses", fee: "14.4 K - 1.8 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 55%",
          "Accepting Exams: JEE Main, JMI Entrance"
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
          { course: "B.Tech. in Civil Engineering", year2021: "– / –", year2022: "27730", year2023: "49097" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "	7216", year2023: "15487" },
          { course: "B.Tech. in Computer Engineering", year2021: "– / –", year2022: "25361", year2023: "43231" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "099",
    tag: "popular",
    category : "medical",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/11.dtu/cover.jpeg",
      logoSrc: "/assets/images/colleges/11.dtu/logo.jpeg",
      name: "Delhi Technological University (DTU)",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.3/5",
      star : 5,
      reviewCount: 2438,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Shahbad Daulatpur, Main Bawana Road, Delhi",
      website: "www.dtu.ac.in/",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "DTU Highlights 2023",
        content: "Formerly known as Delhi College of Engineering, Delhi Technological University (DTU) was established in 1941. DTU Delhi is accredited by the NAAC with an 'A' grade and NBA and is also approved by the University Grant Commission (UGC) and AICTE. DTU College is ranked 61 under the Overall category by NIRF 2023, 40 under the University category by NIRF 2023, and 29 under the Engineering category by NIRF 2023. The university is ISO-certified and earlier was affiliated with the University of Delhi."
      },
      {
        id: "Fees",
        type : "courses",
        title: "DTU Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "3 L - 6.4 L" },
          { name: "M.E./M.Tech", count: "52 Courses", fee: "1.2 L - 3.3 L" },
          { name: "M.Sc.", count: "4 Courses", fee: "36 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 60%",
          "JEE Main DASA UG JAC Delhi CBSE 12th ISC"
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
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "9278", year2022: "7608", year2023: "8677" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "2445", year2022: "4008", year2023: "4876" },
          { course: "B.Tech. in Information Technology", year2021: "4142", year2022: "5110", year2023: "6424" },
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
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "DTU ADMISSION PROCESS 2023", childContent: "Delhi Technological University (DTU) Admission 2024 is open. Candidates must visit the official for admission details. DTU Admission 2024 to its most popular course BTech programme, is based on JEE Main scores and the entire process of counselling is conducted by JAC Delhi. DTU admission to all the remaining courses is based on national/ university-level entrance exams, such as UCEED, GATE, CAT, MAT and CMAT, among others. However, there are a few MBA specialised courses and BBA, admission to which is offered based on the past qualifying exam (UG level) followed by an interview round." },
          {childTitle: "DTU ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "DTU offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR DTU COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "DTU Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "3 L - 6.4 L" },
          { name: "M.E./M.Tech", count: "52 Courses", fee: "1.2 L - 3.3 L" },
          { name: "M.Sc.", count: "4 Courses", fee: "36 K" },
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 60%",
          "JEE Main DASA UG JAC Delhi CBSE 12th ISC"
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
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "9278", year2022: "7608", year2023: "8677" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "2445", year2022: "4008", year2023: "4876" },
          { course: "B.Tech. in Information Technology", year2021: "4142", year2022: "5110", year2023: "6424" },
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
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "DTU ADMISSION PROCESS 2023", childContent: "Delhi Technological University (DTU) Admission 2024 is open. Candidates must visit the official for admission details. DTU Admission 2024 to its most popular course BTech programme, is based on JEE Main scores and the entire process of counselling is conducted by JAC Delhi. DTU admission to all the remaining courses is based on national/ university-level entrance exams, such as UCEED, GATE, CAT, MAT and CMAT, among others. However, there are a few MBA specialised courses and BBA, admission to which is offered based on the past qualifying exam (UG level) followed by an interview round." },
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
        title: "DTU Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "3 L - 6.4 L" },
          { name: "M.E./M.Tech", count: "52 Courses", fee: "1.2 L - 3.3 L" },
          { name: "M.Sc.", count: "4 Courses", fee: "36 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 60%",
          "JEE Main DASA UG JAC Delhi CBSE 12th ISC"
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
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "9278", year2022: "7608", year2023: "8677" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "2445", year2022: "4008", year2023: "4876" },
          { course: "B.Tech. in Information Technology", year2021: "4142", year2022: "5110", year2023: "6424" },
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
        content: "CUET UG 2024 exam date announced. The exam will be held from May 15, 2024 to May 31, 2024. CUET 2024 application form is expected to be released in the first week of February 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "DTU Highlights 2023",
        content: "Formerly known as Delhi College of Engineering, Delhi Technological University (DTU) was established in 1941. DTU Delhi is accredited by the NAAC with an 'A' grade and NBA and is also approved by the University Grant Commission (UGC) and AICTE. DTU College is ranked 61 under the Overall category by NIRF 2023, 40 under the University category by NIRF 2023, and 29 under the Engineering category by NIRF 2023. The university is ISO-certified and earlier was affiliated with the University of Delhi."
      },
      {
        id: "Fees",
        type : "courses",
        title: "DTU Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "18 Courses", fee: "3 L - 6.4 L" },
          { name: "M.E./M.Tech", count: "52 Courses", fee: "1.2 L - 3.3 L" },
          { name: "M.Sc.", count: "4 Courses", fee: "36 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 score 60%",
          "JEE Main DASA UG JAC Delhi CBSE 12th ISC"
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
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "9278", year2022: "7608", year2023: "8677" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "2445", year2022: "4008", year2023: "4876" },
          { course: "B.Tech. in Information Technology", year2021: "4142", year2022: "5110", year2023: "6424" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "100",
    category : "engineering",
    tag: "popular",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/12.nit-delhi/cover.jpeg",
      logoSrc: "/assets/images/colleges/12.nit-delhi/logo.jpeg",
      name: "National Institute of Technology Delhi (NIT)",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "3.8/5",
      star : 5,
      reviewCount: 120,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Plot No. FA7,Zone P1, GT Karnal Road, Delhi",
      website: "www.nitdelhi.ac.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024. "
      },
      {
        id: "Overview",
        type : "overview",
        title: "NIT Highlights 2023",
        content: "NIT Delhi is one of the thirty-one NITs that was established in 2010 by an act of parliament and the college has been declared an Institute of National importance. NIT Delhi functions under the aegis of the Ministry of Education, Government of India. The National Institute of Technology Delhi is ranked 51 by NIRF 2023 for BTech. NIT in Delhi is approved by AICTE and through six departments, offers UG and PG courses to students. These courses are provided across Engineering, Applied Sciences, and various other streams. NIT Delhi is currently functioning through IAMR Campus, Narela."
      },
      {
        id: "Fees",
        type : "courses",
        title: "NIT Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "7 Courses", fee: "5 L" },
          { name: "M.E./M.Tech", count: "9 Courses", fee: "2.1 L - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main"
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
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "22118", year2022: "– / –", year2023: "– / –" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "7951", year2022: "9906", year2023: "11417" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "16841", year2022: "17606", year2023: "16952" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "NIT ADMISSION PROCESS 2023", childContent: "NIT Delhi admission 2024 starts with the registration process for JEE Main January session. Admission to NIT Delhi is subject to various national-level entrance exams such as JEE Main and GATE. Consisting of six departments that offer BTech, MTech and PhD across various specialisations, the flagship programme of NIT Delhi is BTech which is offered across three specialisations. Admission to BTech is based on JEE Main scores followed by JoSSA Counselling. Read on to know more on NIT Delhi admissions." },
          {childTitle: "NIT ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "NIT offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR NIT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "NIT Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "7 Courses", fee: "5 L" },
          { name: "M.E./M.Tech", count: "9 Courses", fee: "2.1 L - 3 L" },
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main"
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
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "22118", year2022: "– / –", year2023: "– / –" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "7951", year2022: "9906", year2023: "11417" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "16841", year2022: "17606", year2023: "16952" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "NIT ADMISSION PROCESS 2023", childContent: "NIT Delhi admission 2024 starts with the registration process for JEE Main January session. Admission to NIT Delhi is subject to various national-level entrance exams such as JEE Main and GATE. Consisting of six departments that offer BTech, MTech and PhD across various specialisations, the flagship programme of NIT Delhi is BTech which is offered across three specialisations. Admission to BTech is based on JEE Main scores followed by JoSSA Counselling. Read on to know more on NIT Delhi admissions." },
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
        title: "NIT Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "7 Courses", fee: "5 L" },
          { name: "M.E./M.Tech", count: "9 Courses", fee: "2.1 L - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main"
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
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "22118", year2022: "– / –", year2023: "– / –" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "7951", year2022: "9906", year2023: "11417" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "16841", year2022: "17606", year2023: "16952" },
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
        content: "JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "NIT Highlights 2023",
        content: "NIT Delhi is one of the thirty-one NITs that was established in 2010 by an act of parliament and the college has been declared an Institute of National importance. NIT Delhi functions under the aegis of the Ministry of Education, Government of India. The National Institute of Technology Delhi is ranked 51 by NIRF 2023 for BTech. NIT in Delhi is approved by AICTE and through six departments, offers UG and PG courses to students. These courses are provided across Engineering, Applied Sciences, and various other streams. NIT Delhi is currently functioning through IAMR Campus, Narela."
      },
      {
        id: "Fees",
        type : "courses",
        title: "NIT Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "7 Courses", fee: "5 L" },
          { name: "M.E./M.Tech", count: "9 Courses", fee: "2.1 L - 3 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 75% aggregate",
          "Accepting Exams: JEE Main"
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
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "22118", year2022: "– / –", year2023: "– / –" },
          { course: "B.Tech. in Computer Science and Engineering", year2021: "7951", year2022: "9906", year2023: "11417" },
          { course: "B.Tech. in Electronics and Communication Engineering", year2021: "16841", year2022: "17606", year2023: "16952" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "101",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/13.aiims/cover.jpeg",
      logoSrc: "/assets/images/colleges/13.aiims/logo.jpeg",
      name: "All India Institutes of Medical Sciences (AIIMS)",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.6/5",
      star : 5,
      reviewCount: 95,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Sri Aurobindo Marg, Ansari Nagar East Delhi",
      website: "www.aiims.edu",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "AIIMS paramedical 2024 exam will be conducted on July 6, 2024. "
      },
      {
        id: "Overview",
        type : "overview",
        title: "AIIMS Highlights 2023",
        content: "AIIMS Delhi is ranked 1st by India Today and NIRF 2023 under the Medical category, 6th by NIRF 2023 under the Overall category, and 12th by US News 2023 under the University (Overall) category. AIIMS is ranked 123rd by the QS WUR Ranking By Subject category 2023. AIIMS Delhi is one of the various AIIMS colleges present in India. At present, there are 23 AIIMS in India out of which 20 are functional and the rest are under construction or yet to be operational. Delhi AIIMS, through more than 40 departments, offers UG, PG, and various other courses to students. These courses are offered across the Medical and various other streams. Located in Gautam Nagar, Delhi, the All-India Institute of Medical Sciences is known as an institution of national importance by an Act of Parliament. The college has more than 600 research publications by its faculty and researchers in a year. Delhi AIIMS has an attached AIIMS Hospital. AIIMS also manages a 60-bedded hospital present in Ballabgarh in Haryana at the Comprehensive Rural Health Centre. The college provides community-based teaching and research and research in medical and related fields. AIIMS Delhi provides a BSc (Hons) in Nursing and a Master in Biotechnology as its flagship courses. This reputed college was established under an Act of Parliament 1956. AIIMS operates autonomously under the Ministry of Health and Family Welfare."
      },
      {
        id: "Fees",
        type : "courses",
        title: "AIIMS Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "6.1 K" },
          { name: "MD", count: "24 Courses", fee: "2.1 K - 2.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.Sc. Admissions 2024",
        eligibility: [
          "10+2 with 50% aggregate",
          "Accepting Exams: AIIMS paramedical"
        ],
        importantDates: [
          { date: "Feb '24-Apr '24", event: "AIIMS BSc Paramedical Registration (Basic)" },
          { date: "Mar '24-Apr '24", event: "AIIMS BSc Paramedical Final Registration" },
          { date: "May '24", event: "AIIMS BSc Paramedical Application Status" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "53", year2022: "61", year2023: "57" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "AIIMS ADMISSION PROCESS 2023", childContent: "AIIMS Delhi admission 2024 is entirely entrance-based for all UG & PG courses. Admission to AIIMS Delhi is completely entrance-based for all the UG and PG courses, namely BSc, MSc, MBBS, MD, MS, among others. Amongst all, the most popular course offered at AIIMS Delhi is MBBS admission to which is subject to the NEET UG exam conducted by NTA. For PG and super-speciality courses, admissions were earlier done based on AIIMS PG Exam scores but are now replaced with INICET and institute-level exams." },
          {childTitle: "AIIMS ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "AIIMS offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR AIIMS COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "AIIMS Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "6.1 K" },
          { name: "MD", count: "24 Courses", fee: "2.1 K - 2.5 K" },
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.Sc. Admissions 2024",
        eligibility: [
          "10+2 with 50% aggregate",
          "Accepting Exams: AIIMS paramedical"
        ],
        importantDates: [
          { date: "Feb '24-Apr '24", event: "AIIMS BSc Paramedical Registration (Basic)" },
          { date: "Mar '24-Apr '24", event: "AIIMS BSc Paramedical Final Registration" },
          { date: "May '24", event: "AIIMS BSc Paramedical Application Status" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "53", year2022: "61", year2023: "57" },
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
        content: "INI CET Round 2 cutoff for the Jan session is out. Selected candidates must accept the allocated seat, report, and submit a document/ security deposit by Dec 26, 2023 (5 Pm)."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "AIIMS ADMISSION PROCESS 2023", childContent: "AIIMS Delhi admission 2024 is entirely entrance-based for all UG & PG courses. Admission to AIIMS Delhi is completely entrance-based for all the UG and PG courses, namely BSc, MSc, MBBS, MD, MS, among others. Amongst all, the most popular course offered at AIIMS Delhi is MBBS admission to which is subject to the NEET UG exam conducted by NTA. For PG and super-speciality courses, admissions were earlier done based on AIIMS PG Exam scores but are now replaced with INICET and institute-level exams." },
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
        title: "AIIMS Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "6.1 K" },
          { name: "MD", count: "24 Courses", fee: "2.1 K - 2.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.Sc. Admissions 2024",
        eligibility: [
          "10+2 with 50% aggregate",
          "Accepting Exams: AIIMS paramedical"
        ],
        importantDates: [
          { date: "Feb '24-Apr '24", event: "AIIMS BSc Paramedical Registration (Basic)" },
          { date: "Mar '24-Apr '24", event: "AIIMS BSc Paramedical Final Registration" },
          { date: "May '24", event: "AIIMS BSc Paramedical Application Status" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "53", year2022: "61", year2023: "57" },
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
        content: "AIIMS Delhi cutoff 2024 for INI CET 2024 Jan session is out for Round 2. As of now, there are no further rounds scheduled for INI CET Jan Session 2024. A few more updates related to AIIMS Delhi cutoff 2024 are mentioned below: NEET UG exam 2024 dates have been announced for admission to the MBBS/ BDS courses. As per the schedule, the NEET UG 2024 exam will be conducted on May 5, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "AIIMS Highlights 2023",
        content: "AIIMS Delhi is ranked 1st by India Today and NIRF 2023 under the Medical category, 6th by NIRF 2023 under the Overall category, and 12th by US News 2023 under the University (Overall) category. AIIMS is ranked 123rd by the QS WUR Ranking By Subject category 2023. AIIMS Delhi is one of the various AIIMS colleges present in India. At present, there are 23 AIIMS in India out of which 20 are functional and the rest are under construction or yet to be operational. Delhi AIIMS, through more than 40 departments, offers UG, PG, and various other courses to students. These courses are offered across the Medical and various other streams. Located in Gautam Nagar, Delhi, the All-India Institute of Medical Sciences is known as an institution of national importance by an Act of Parliament. The college has more than 600 research publications by its faculty and researchers in a year. Delhi AIIMS has an attached AIIMS Hospital. AIIMS also manages a 60-bedded hospital present in Ballabgarh in Haryana at the Comprehensive Rural Health Centre. The college provides community-based teaching and research and research in medical and related fields. AIIMS Delhi provides a BSc (Hons) in Nursing and a Master in Biotechnology as its flagship courses. This reputed college was established under an Act of Parliament 1956. AIIMS operates autonomously under the Ministry of Health and Family Welfare."
      },
      {
        id: "Fees",
        type : "courses",
        title: "AIIMS Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "6.1 K" },
          { name: "MD", count: "24 Courses", fee: "2.1 K - 2.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.Sc. Admissions 2024",
        eligibility: [
          "10+2 with 50% aggregate",
          "Accepting Exams: AIIMS paramedical"
        ],
        importantDates: [
          { date: "Feb '24-Apr '24", event: "AIIMS BSc Paramedical Registration (Basic)" },
          { date: "Mar '24-Apr '24", event: "AIIMS BSc Paramedical Final Registration" },
          { date: "May '24", event: "AIIMS BSc Paramedical Application Status" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "53", year2022: "61", year2023: "57" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "102",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/14.vmmc/cover.jpeg",
      logoSrc: "/assets/images/colleges/14.vmmc/logo.jpg",
      name: "Vardhman Mahavir Medical College (VMMC)",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.4/5",
      star : 5,
      reviewCount: 47,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: " Ansari Nagar, near AIIMS Hospital Delhi",
      website: "vmmc-sjh.nic.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May.  The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "VMMC Highlights 2023",
        content: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated with Guru Gobind Singh Indraprastha University. The college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program."
      },
      {
        id: "Fees",
        type : "courses",
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May.  The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "VMMC ADMISSION PROCESS 2023", childContent: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated to Guru Gobind Singh Indraprastha University. Currently, the college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program." },
          {childTitle: "VMMC ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "VMMC offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR VMMC COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May.  The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "VMMC ADMISSION PROCESS 2023", childContent: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated to Guru Gobind Singh Indraprastha University. Currently, the college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program." },
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
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May.  The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "VMMC Highlights 2023",
        content: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated with Guru Gobind Singh Indraprastha University. The college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program. "
      },
      {
        id: "Fees",
        type : "courses",
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "103",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/IIFT.jpg",
      logoSrc: "/assets/images/colleges/IIFTLogo.jpg",
      name: "Indian Institute of Foreign Trade, Delhi",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.3/5",
      star : 5,
      reviewCount: 40,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Block-II, B-21, NRPC Colony, Block B, Delhi",
      website: "www.iift.ac.in",
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
        title: "IIFT Delhi Highlights 2023",
        content: "Candidates willing to get admission to various courses must apply online on the official website of the Indian Institute of Foreign Trade. At the PG level, the deemed to be university offers an MBA, MA, and various other courses to students. The deemed-to-be university also provides Executive MBA, certificate, PhD, online, MDP, Foundation Training Programmes for ITS probationers, and various other courses to students."
      },
      {
        id: "Fees",
        type : "courses",
        title: "IIFT Delhi Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "4 Courses", fee: "4 L - 21.8 L" },
          { name: "MA", count: "1 Courses", fee: "3.6 L" },
          { name: "Ph.D.", count: "1 Courses", fee: "2.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CAT, IIFT"
        ],
        importantDates: [
          { date: "Mar '24-Apr '24", event: "MBA/PGDM group discussion and PI" },
          { date: "Jul '24", event: "MBA/PGDM commencement of course" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
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
          {      childTitle: "IIFT DELHI ADMISSION PROCESS 2023", childContent: "Indian Institute of Foreign Trade (IIFT) Delhi offers PG and doctoral-level courses along with some certificate courses. Admission to all the courses (Except for certificate courses, EMBA & MBA) is through an institute-based entrance exam. Moreover, for MBA (IB) and MBA (BA), IIFT Delhi admission will be through the Common Aptitude Test (CAT) from 2024. IIFT Delhi accepts applications in online mode. Additionally, for PhD, the application shall be submitted offline." },
          {childTitle: "IIFT DELHI ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "IIFT offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR IIFT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "IIFT Delhi Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "4 Courses", fee: "4 L - 21.8 L" },
          { name: "MA", count: "1 Courses", fee: "3.6 L" },
          { name: "Ph.D.", count: "1 Courses", fee: "2.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CAT, IIFT"
        ],
        importantDates: [
          { date: "Mar '24-Apr '24", event: "MBA/PGDM group discussion and PI" },
          { date: "Jul '24", event: "MBA/PGDM commencement of course" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          // { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          // { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "IIFT DELHI ADMISSION PROCESS 2023", childContent: "Indian Institute of Foreign Trade (IIFT) Delhi offers PG and doctoral-level courses along with some certificate courses. Admission to all the courses (Except for certificate courses, EMBA & MBA) is through an institute-based entrance exam. Moreover, for MBA (IB) and MBA (BA), IIFT Delhi admission will be through the Common Aptitude Test (CAT) from 2024. IIFT Delhi accepts applications in online mode. Additionally, for PhD, the application shall be submitted offline." },
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
        title: "IIFT Delhi Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "4 Courses", fee: "4 L - 21.8 L" },
          { name: "MA", count: "1 Courses", fee: "3.6 L" },
          { name: "Ph.D.", count: "1 Courses", fee: "2.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CAT, IIFT"
        ],
        importantDates: [
          { date: "Mar '24-Apr '24", event: "MBA/PGDM group discussion and PI" },
          { date: "Jul '24", event: "MBA/PGDM commencement of course" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          // { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          // { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username. "
      },
      {
        id: "Overview",
        type : "overview",
        title: "IIFT  Delhi Highlights 2023",
        content: "Indian Institute of Foreign Trade was established as an autonomous body under the Ministry of Commerce & Industry in 1963. The Deemed-to-be University is accredited by AACSB and with A Grade by NAAC. IIFT Delhi, through various departments, offers PG, doctoral, certificate, and various other courses to students. The courses are offered across Management and various other streams. IIFT College is a member of AMBA, the Academy of International Business, and EFMD. IIFT is ranked 4 by The Times 2023 for MBA. "
      },
      {
        id: "Fees",
        type : "courses",
        title: "IIFT Delhi Popular Programmes",
        courses: [
          { name: "MBA/PGDM", count: "4 Courses", fee: "4 L - 21.8 L" },
          { name: "MA", count: "1 Courses", fee: "3.6 L" },
          { name: "Ph.D.", count: "1 Courses", fee: "2.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MBA/PGDM Admissions 2024",
        eligibility: [
          "Undergraduate Degree with 50% aggregate",
          "Accepting Exams: CAT, IIFT"
        ],
        importantDates: [
          { date: "Mar '24-Apr '24", event: "MBA/PGDM group discussion and PI" },
          { date: "Jul '24", event: "MBA/PGDM commencement of course" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          // { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          // { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "105",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/Vardhman.jpg",
      logoSrc: "/assets/images/colleges/Vardhmanlogo.jpg",
      name: "Vardhman Mahavir Medical College",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.4/5",
      star : 5,
      reviewCount: 47,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Ansari Nagar, near AIIMS Hospital Delhi",
      website: "www.vmmc-sjh.nic.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May. The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "VMMC Highlights 2023",
        content: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated with Guru Gobind Singh Indraprastha University. The college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program"
      },
      {
        id: "Fees",
        type : "courses",
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May. The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "VMMC ADMISSION PROCESS 2023", childContent: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated to Guru Gobind Singh Indraprastha University. Currently, the college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program." },
          {childTitle: "VMMC ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "VMMC offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR VMMC COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May. The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "VMMC ADMISSION PROCESS 2023", childContent: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated to Guru Gobind Singh Indraprastha University. Currently, the college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program." },
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
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May. The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "VMMC Highlights 2023",
        content: "VMMC & Safdarjung Hospital is associated with Safdarjung Hospital, New Delhi. The college was founded in 2001. VMMC & Safdarjung Hospital is affiliated with Guru Gobind Singh Indraprastha University. The college offers MBBS, BSc (H) Nursing, MD/ MS, Diploma and DNB program."
      },
      {
        id: "Fees",
        type : "courses",
        title: "VMMC Popular Programmes",
        courses: [
          { name: "MBBS", count: "1 Courses", fee: "1.6 L" },
          { name: "MD", count: "17 Courses", fee: "1.5 L" },
          { name: "MS", count: "5 Courses", fee: "1.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "MD Admissions 2024",
        eligibility: [
          "Accepting Exams: NEET PG"
        ],
        importantDates: [
          { date: "May '24-Jun '24", event: "NEET PG 2024 registration" },
          { date: "Jun '24", event: "NEET PG 2024 admit card upload" },
          { date: "7 Jul '24", event: "NEET PG 2024 exam" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "MBBS - Bachelor of Medicine and Bachelor of Surgery", year2021: "143", year2022: "129", year2023: "113" },
          { course: "B.Sc.(Hons.) in Nursing", year2021: "110709", year2022: "152688", year2023: "64302" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "106",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/Netaji.jpg",
      logoSrc: "/assets/images/colleges/NetajiLogo.jpg",
      name: "Netaji Subhas University of Technology",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "4.0/5",
      star : 5,
      reviewCount: 923,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Netaji Subhas University of Technology Sector 3 Delhi",
      website: "www.nsut.ac.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username. GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon)."
      },
      {
        id: "Overview",
        type : "overview",
        title: "NSIT Highlights 2023",
        content: "Netaji Subhas University of Technology (NSUT), formerly known as Netaji Subhas Institute of Technology (NSIT) is a state-level university. NSIT was established in 1983 and in 2018 the institute was given university status, hence making it a non-affiliating university. Earlier it was affiliated with the University of Delhi. NSUT is ranked 88 for BTech by NIRF 2021. NSIT Delhi is accredited by NAAC and is approved by AICTE and UGC. NSIT consists of 13 departments offering 11 UG, 15 PG, and 11 PhD courses in various streams of Computer Engineering, Electronic Engineering, etc. The top companies taking part in the NSIT placements drive are Accenture, Amazon, Birlasoft, Honda, HCL, Honda, Microsoft, Birla, Honeywell, Google, IBM, and many more. Since its inception, the institute has grown in size and scope. Every year it tries to bring new courses for the students to diversify their learning experience."
      },
      {
        id: "Fees",
        type : "courses",
        title: "NIST Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "24 Courses", fee: "3.5 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.7 L" },
          { name: "M.E./M.Tech", count: "28 Courses", fee: "82.5 K - 84.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E./B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 55% aggregate",
          "Accepting Exams: JEE Main, JAC Delhi, CBSE 12th, DASA UG"
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
          { course: "B.Tech. in Information Technology", year2021: "3705", year2022: "4941", year2023: "6279" },
          { course: "B.Tech. in Computer Engineering", year2021: "2040", year2022: "2833", year2023: "3994" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence)", year2021: "1300", year2022: "2797", year2023: "3255" },
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
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username. GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon)."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "NIST ADMISSION PROCESS 2023", childContent: "Netaji Subhas Institute of Technology (NSUT) is now known as Netaji Subhas Institute Univeristy of Technology (NSUT). Earlier Netaji Subhas Institute Univeristy of Technology (NSUT) was affiliated to Delhi University back then when it was a college. Now, NSUT had converted into a university by University Grant Commission (UGC). NSUT offers a wide array of UG, PG, and doctoral level courses under various specialisations. Netaji Subhas Institute Univeristy of Technology (NSUT) course admissions are based on various national-level entrance examinations like JEE-Main, GATE, CAT, CUET, and many others." },
          {childTitle: "NIST ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Candidates eligible for admissions in courses offered at NSUT can register themselves through the college official website. " },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR NISTCOURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "NIST Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "24 Courses", fee: "3.5 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.7 L" },
          { name: "M.E./M.Tech", count: "28 Courses", fee: "82.5 K - 84.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E/B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 55% aggregate",
          "Accepting Exams: JEE Main, JAC Delhi, CBSE 12th, DASA UG"
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
          { course: "B.Tech. in Information Technology", year2021: "3705", year2022: "4941", year2023: "6279" },
          { course: "B.Tech. in Computer Engineering", year2021: "2040", year2022: "2833", year2023: "3994" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence)", year2021: "1300", year2022: "2797", year2023: "3255" },
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
        content: "CAT Result 2023 has been released. The window to download the scorecard has been made live on the official website. Candidates will be able to download it by using their login ID and username. GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The UCEED 2024 registration window is now closed. Further, UCEED exam 2024 will be held on Jan 21, 2024 (9 am - 12 noon)."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "NIST ADMISSION PROCESS 2023", childContent: "Netaji Subhas Institute of Technology (NSUT) is now known as Netaji Subhas Institute Univeristy of Technology (NSUT). Earlier Netaji Subhas Institute Univeristy of Technology (NSUT) was affiliated to Delhi University back then when it was a college. Now, NSUT had converted into a university by University Grant Commission (UGC). NSUT offers a wide array of UG, PG, and doctoral level courses under various specialisations. Netaji Subhas Institute Univeristy of Technology (NSUT) course admissions are based on various national-level entrance examinations like JEE-Main, GATE, CAT, CUET, and many others." },
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
        title: "NIST Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "24 Courses", fee: "3.5 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.7 L" },
          { name: "M.E./M.Tech", count: "28 Courses", fee: "82.5 K - 84.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E./B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 55% aggregate",
          "Accepting Exams: JEE Main, JAC Delhi, CBSE 12th, DASA UG"
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
          { course: "B.Tech. in Information Technology", year2021: "3705", year2022: "4941", year2023: "6279" },
          { course: "B.Tech. in Computer Engineering", year2021: "2040", year2022: "2833", year2023: "3994" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence)", year2021: "1300", year2022: "2797", year2023: "3255" },
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
        content: "The NEET 2024 exam date has been announced. The exam will be conducted on May 5, 2024. The NEET PG 2024 exam has been postponed to July 7, 2024. Further, the NEET PG 2024 application form is expected to be released tentatively in the second week of May. The NEET SS 2024 application form is expected to be released by NBE in the fourth week of July 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "NIST Highlights 2023",
        content: "Netaji Subhas University of Technology (NSUT), formerly known as Netaji Subhas Institute of Technology (NSIT) is a state-level university. NSIT was established in 1983 and in 2018 the institute was given university status, hence making it a non-affiliating university. Earlier it was affiliated with the University of Delhi. NSUT is ranked 88 for BTech by NIRF 2021. NSIT Delhi is accredited by NAAC and is approved by AICTE and UGC. NSIT consists of 13 departments offering 11 UG, 15 PG, and 11 PhD courses in various streams of Computer Engineering, Electronic Engineering, etc. The top companies taking part in the NSIT placements drive are Accenture, Amazon, Birlasoft, Honda, HCL, Honda, Microsoft, Birla, Honeywell, Google, IBM, and many more. Since its inception, the institute has grown in size and scope. Every year it tries to bring new courses for the students to diversify their learning experience."
      },
      {
        id: "Fees",
        type : "courses",
        title: "NIST Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "24 Courses", fee: "3.5 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.7 L" },
          { name: "M.E./M.Tech", count: "28 Courses", fee: "82.5 K - 84.5 K" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E/B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 55% aggregate",
          "Accepting Exams: JEE Main, JAC Delhi, CBSE 12th, DASA UG"
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
          { course: "B.Tech. in Information Technology", year2021: "3705", year2022: "4941", year2023: "6279" },
          { course: "B.Tech. in Computer Engineering", year2021: "2040", year2022: "2833", year2023: "3994" },
          { course: "B.Tech. in Computer Science and Engineering (Artificial Intelligence)", year2021: "1300", year2022: "2797", year2023: "3255" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "108",
    category : "engineering",
    collegeDetails: {
      imageSrc: "/assets/images/colleges/BIT.jpg",
      logoSrc: "/assets/images/colleges/BITLOGO.jpg",
      name: "Bharat Institute of Technology",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "3.7/5",
      star : 5,
      reviewCount: 81,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Bharat Institute of Technology NH-58 Partapur Bypass Meerut ( Uttar Pradesh)",
      website: "bitmeerut.edu.in",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "BIT Highlights 2023",
        content: "Established in 2001Bharat Institute of Technology is a known reputed Institute, located in Meerut, Uttar Pradesh. The span of programs offered 25 courses include Degree and Diploma in Full Time mode. Bharat Institute of Technology offers a range of 17 UG courses. These courses are aimed to provide students with the necessary skills and knowledge in their field of interest. Candidate can pursue in multiple range of courses like MCA, B.E. / B.Tech, MBA/PGDM, M.E./M.Tech, M.Pharma, D.Pharma, BBA, B.Pharma with the stream of IT & Software, Engineering, Business & Management Studies and Medicine & Health Sciences. From introductory courses to more advanced topics, there are a variety of courses to choose from. Students who join Bharat Institute of Technology stand to gain professional level of expertize and proficiency through its highly trained & experienced faculty in the studies of Chemical Engineering, Civil Engineering, Computer Science Engineering, Electronics & Communication Engineering, Electrical Engineering, Information Technology, Mechanical Engineering, Pharmacology. Courses offered by institute are well recognized and acknowlegded by approving body like AICTE. Institute offers this course with intake of 1027 candidates. Most of these courses are offerred at very affordable fees. For students institute has facilities & infrastructure like Auditorium, Boys Hostel, Cafeteria, Girls Hostel, Gym, Hospital / Medical Facilities, Hostel, Labs, Library, Shuttle Service, Sports Complex, Wi-Fi Campus, Others - Computer Centre, Seminar Hall, Guest House."
      },
      {
        id: "Fees",
        type : "courses",
        title: "BIT Popular Programmes",
        courses: [
          { name: "B.Tech", count: "15 Courses", fee: "2.4 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.8 L" },
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "271589", year2022: "866344", year2023: "1089016" },
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "– / –", year2022: "– / –", year2023: "551490" },
          { course: "B.Tech. in Information Technology", year2021: "– / –", year2022: "– / –", year2023: "369847" },
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
        content: "GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "BIT MEERUT ADMISSION PROCESS 2023", childContent: "At the UG level, Bharat Institute of Technology offers a 4-year BE/BTech programme to the students. Candidates who meet the minimum eligibility criteria set by Bharat Institute of Technology with a valid score in JEE Main exam can apply." },
          {childTitle: "BIT ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "BIT offers several UG and PG courses, admission to which is granted basis the merit in the qualifying examination and scores in the entrance exam. The applicants must meet the basic eligibility for the desired courses before applying for the course." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR BIT COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "BIT Popular Programmes",
        courses: [
          { name: "B.Tech", count: "15 Courses", fee: "2.4 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.8 L" },
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "271589", year2022: "866344", year2023: "1089016" },
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "– / –", year2022: "– / –", year2023: "551490" },
          { course: "B.Tech. in Information Technology", year2021: "– / –", year2022: "– / –", year2023: "369847" },
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
        content: "GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {  childTitle: "BIT ADMISSION PROCESS 2023", childContent: "At the UG level, Bharat Institute of Technology offers a 4-year BE/BTech programme to the students. Candidates who meet the minimum eligibility criteria set by Bharat Institute of Technology with a valid score in JEE Main exam can apply." },
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
        title: "BIT Popular Programmes",
        courses: [
          { name: "B.Tech", count: "15 Courses", fee: "2.4 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.8 L" },
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "271589", year2022: "866344", year2023: "1089016" },
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "– / –", year2022: "– / –", year2023: "551490" },
          { course: "B.Tech. in Information Technology", year2021: "– / –", year2022: "– / –", year2023: "369847" },
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
        content: "GATE admit card 2024 is now available for download. Candidates appearing for the GATE exam can download their admit card till Feb 2, 2024. Further, GATE 2024 exam will be conducted on Feb 3, 4, 10, and 11, 2024. The JEE Main Admit Card 2024 is available for download. Further, JEE Main exam 2024 for session 1 will be held between Jan 24, 2024 to Feb 1, 2024. Additionally, JEE Main Session 2 exam will be held between Apr 1, 2024 and Apr 15, 2024."
      },
      {
        id: "Overview",
        type : "overview",
        title: "BIT Highlights 2023",
        content: "Established in 2001Bharat Institute of Technology is a known reputed Institute, located in Meerut, Uttar Pradesh. The span of programs offered 25 courses include Degree and Diploma in Full Time mode. Bharat Institute of Technology offers a range of 17 UG courses. These courses are aimed to provide students with the necessary skills and knowledge in their field of interest. Candidate can pursue in multiple range of courses like MCA, B.E. / B.Tech, MBA/PGDM, M.E./M.Tech, M.Pharma, D.Pharma, BBA, B.Pharma with the stream of IT & Software, Engineering, Business & Management Studies and Medicine & Health Sciences. From introductory courses to more advanced topics, there are a variety of courses to choose from. Students who join Bharat Institute of Technology stand to gain professional level of expertize and proficiency through its highly trained & experienced faculty in the studies of Chemical Engineering, Civil Engineering, Computer Science Engineering, Electronics & Communication Engineering, Electrical Engineering, Information Technology, Mechanical Engineering, Pharmacology. Courses offered by institute are well recognized and acknowlegded by approving body like AICTE. Institute offers this course with intake of 1027 candidates. Most of these courses are offerred at very affordable fees. For students institute has facilities & infrastructure like Auditorium, Boys Hostel, Cafeteria, Girls Hostel, Gym, Hospital / Medical Facilities, Hostel, Labs, Library, Shuttle Service, Sports Complex, Wi-Fi Campus, Others - Computer Centre, Seminar Hall, Guest House."
      },
      {
        id: "Fees",
        type : "courses",
        title: "BIT Popular Programmes",
        courses: [
          { name: "B.Tech", count: "15 Courses", fee: "2.4 L" },
          { name: "MBA/PGDM", count: "2 Courses", fee: "1.3 L" },
          { name: "B.Pharma", count: "1 Courses", fee: "2.8 L" },
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
          { course: "B.Tech. in Computer Science and Engineering", year2021: "271589", year2022: "866344", year2023: "1089016" },
          { course: "B.Tech. in Electrical and Electronics Engineering", year2021: "– / –", year2022: "– / –", year2023: "551490" },
          { course: "B.Tech. in Information Technology", year2021: "– / –", year2022: "– / –", year2023: "369847" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  {
    collegeCode: "109",
    category : "engineering",
    collegeDetails: {
      imageSrc: "//assets/images/colleges/SUBHARTI.jpg",
      logoSrc: "/assets/images/colleges/SUBHARTILOGO.jpg",
      name: "Swami Vivekanad Subharti University",
      description: "Explore 2024 Admission Details, Fees, Courses, Ranking, and Placement Opportunities",
      rating: "3.8/5",
      star : 5,
      reviewCount: 162,
      topRated : true,
      term: "Private",
      approval: "Approved by: AICTE, Government of Haryana",
      enquiryButtonText: "Enquiry Now",
      address: "Subhartipuram, NH-58, Delhi-Haridwar Bypass Road Meerut ( Uttar Pradesh)",
      website: "subharti.org",
      businessHours: "9:00 AM to 5:00 PM"
    },
    overviewTabContentData : [
      {
        id: "latestUpdate",
        type : "latestUpdate",
        title: "What’s new?",
        content: "Swami Vivekanand Subharti University Admission is open to all courses for the academic year 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Subharti University Highlights 2023",
        content: "Subharti University has been accredited ‘A’ by NAAC and recognised by UGC as a private university. The university was established in the year 2008. The university has been recognised as (SIRO) Scientific and Industrial Research Organisation by DST and a Nodal Centre for ISRO Training initiative. The university offers state-of-the-art-infrastructure and highly qualified faculty, which helps students to grow academically and overall growth and development of the students. Also, the university offers a 24*7, learn anytime and anywhere facility to the students."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Subharti University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "20 Courses", fee: "2.2 L - 5.4 L" },
          { name: "MBA/PGDM", count: "10 Courses", fee: "93.5 K - 3.1 L" },
          { name: "B.Sc", count: "19 Courses", fee: "58.5 K - 4.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CUET"
        ],
        importantDates: [
          { date: "Feb '24-Mar '24", event: "CUET 2024 Application Process" },
          { date: "15 May '24 - 31 May '24", event: "CUET 2024 Exam" },
          { date: "May '24-Jun '24", event: "CUET 2024 Admit Card" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
          { course: "Bachelor of Dental Surgery (BDS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
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
        content: "Swami Vivekanand Subharti University Admission is open to all courses for the academic year 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {      childTitle: "SUBHARTI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Swami Vivekanand Subharti University application forms are available online on the official website of the university. SVSU admission is based on the SNET exam. The university offers various UG, PG, diploma, & doctoral-level courses in different disciplines, such as Engineering, Fine Arts, Journalism & Mass Communication, Management, Commerce, Science, Law, Education, and Nursing, etc." },
          {childTitle: "SUBHARTI UNIVERSITY ADMISSION 2023: ELIGIBILITY & SELECTION CRITERIA", childContent: "Candidates willing to get admission to Swami Vivekanand Subharti University can fill out the online application form for SNET on the official website." },
        ]
      },
      { 
          id: "Reservation1",
          type : "criteria",
          title: "THE TABLE BELOW LISTS PRESENTS THE ADMISSION STATUS OF POPULAR SUBHARTI UNIVERSITY COURSES ALONG WITH THEIR ELIGIBILITY AND FEE DETAILS:",
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
        title: "Subharti University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "20 Courses", fee: "2.2 L - 5.4 L" },
          { name: "MBA/PGDM", count: "10 Courses", fee: "93.5 K - 3.1 L" },
          { name: "B.Sc", count: "19 Courses", fee: "58.5 K - 4.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CUET"
        ],
        importantDates: [
          { date: "Feb '24-Mar '24", event: "CUET 2024 Application Process" },
          { date: "15 May '24 - 31 May '24", event: "CUET 2024 Exam" },
          { date: "May '24-Jun '24", event: "CUET 2024 Admit Card" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
          { course: "Bachelor of Dental Surgery (BDS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
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
        content: "Swami Vivekanand Subharti University Admission is open to all courses for the academic year 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        content : [
          {  childTitle: "SUBHARTI UNIVERSITY ADMISSION PROCESS 2023", childContent: "Swami Vivekanand Subharti University application forms are available online on the official website of the university. SVSU admission is based on the SNET exam. The university offers various UG, PG, diploma, & doctoral-level courses in different disciplines, such as Engineering, Fine Arts, Journalism & Mass Communication, Management, Commerce, Science, Law, Education, and Nursing, etc." },
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
        title: "Subharti University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "20 Courses", fee: "2.2 L - 5.4 L" },
          { name: "MBA/PGDM", count: "10 Courses", fee: "93.5 K - 3.1 L" },
          { name: "B.Sc", count: "19 Courses", fee: "58.5 K - 4.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CUET"
        ],
        importantDates: [
          { date: "Feb '24-Mar '24", event: "CUET 2024 Application Process" },
          { date: "15 May '24 - 31 May '24", event: "CUET 2024 Exam" },
          { date: "May '24-Jun '24", event: "CUET 2024 Admit Card" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
          { course: "Bachelor of Dental Surgery (BDS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
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
        content: "Swami Vivekanand Subharti University Admission is open to all courses for the academic year 2023-24."
      },
      {
        id: "Overview",
        type : "overview",
        title: "Subharti University Highlights 2023",
        content: "Subharti University has been accredited ‘A’ by NAAC and recognised by UGC as a private university. The university was established in the year 2008. The university has been recognised as (SIRO) Scientific and Industrial Research Organisation by DST and a Nodal Centre for ISRO Training initiative. The university offers state-of-the-art-infrastructure and highly qualified faculty, which helps students to grow academically and overall growth and development of the students. Also, the university offers a 24*7, learn anytime and anywhere facility to the students."
      },
      {
        id: "Fees",
        type : "courses",
        title: "Subharti University Popular Programmes",
        courses: [
          { name: "B.E./B.Tech", count: "20 Courses", fee: "2.2 L - 5.4 L" },
          { name: "MBA/PGDM", count: "10 Courses", fee: "93.5 K - 3.1 L" },
          { name: "B.Sc", count: "19 Courses", fee: "58.5 K - 4.5 L" },
          // ... add more courses as needed
        ]
      },
      {
        id: "Ranking",
        type : "admission",
        title: "B.E. / B.Tech Admissions 2024",
        eligibility: [
          "10+2 with 45% aggregate",
          "Accepting Exams: CUET"
        ],
        importantDates: [
          { date: "Feb '24-Mar '24", event: "CUET 2024 Application Process" },
          { date: "15 May '24 - 31 May '24", event: "CUET 2024 Exam" },
          { date: "May '24-Jun '24", event: "CUET 2024 Admit Card" },
          // ... add more dates as needed
        ]
      },
      { 
        id: "Reservation",
        type : "cutoffs",
        title: "Cut Offs 2023",
        cutOffs: [
          { course: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
          { course: "Bachelor of Dental Surgery (BDS)", year2021: "– / –", year2022: "518379", year2023: "– / –" },
          // ... add more cut offs as needed
        ]
      }
      // ... add more sections as needed
    ],
    // Add more tab content arrays as needed
  },
  // Add more college objects as needed
];

module.exports = collegeData;
