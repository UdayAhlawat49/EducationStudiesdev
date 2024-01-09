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
    // Add more college objects as needed
  ];
  
  module.exports = collegeData;
  

























  