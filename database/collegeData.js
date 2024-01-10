// collegeData.js

const collegeData = [
  {
    collegeCode: "074",
    collegeDetails: {
      imageSrc: "/assets/images/miet.jpg",
      logoSrc: "/assets/images/mietLogo.jpg",
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
  // Add more college objects as needed
];

module.exports = collegeData;


























