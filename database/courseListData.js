const courseListData = [
    {
      collegeCode: "01", //courseID
      logoSrc: "./assets/images/Course/b.tech-course.jpg",
      category: "Engineering",  
      name: "Bachelor of Technology (B.Tech)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"B.Tech provides a comprehensive understanding of engineering principles, preparing students for diverse technical roles.",
      contactNum: "849554111"
    },
    {
      collegeCode: "02", //courseID
      logoSrc: "./assets/images/Course/M.Tech-course.jpg",
      category: "Engineering",  
      name: "Bachelor of Engineering (BE)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"BE offers specialized knowledge in various engineering disciplines, fostering expertise in specific areas.",
      contactNum: "849554111"
    },
    {
      collegeCode: "03", //courseID
      logoSrc: "./assets/images/Course/ph.d-course.jpg",
      category: "Engineering",  
      name: "Master of Technology (M.Tech)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"M.Tech offers advanced knowledge in engineering disciplines, allowing specialization in specific areas.",
      contactNum: "849554111"
    },
    {
      collegeCode: "04", //courseID
      logoSrc: "./assets/images/Course/m.tech-course.jpg",
      category: "Engineering",  
      name: "Master of Engineering (ME)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"M.Tech offers advanced knowledge in engineering disciplines, allowing specialization in specific areas.",
      contactNum: "849554111"
    },

    {
      collegeCode: "05", //courseID
      logoSrc: "./assets/images/Course/mba-course.jpg",
      category: "Management",  
      name: "Master of Business Administration (MBA)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"MBA offers a holistic business education, fostering leadership and strategic thinking for varied managerial positions.",
      contactNum: "849554111"
    },

    {
      collegeCode: "06", //courseID
      logoSrc: "./assets/images/Course/exicutive-mba.jpg",
      category: "Management",  
      name: "Post Graduate Diploma in Management (PGDM)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:" PGDM emphasizes practical skills, management techniques, and strategic decision-making.",
      contactNum: "849554111"
    },

    {
      collegeCode: "07", //courseID
      logoSrc: "./assets/images/Course/distance-mba.jpg",
      category: "Management",  
      name: "Post Graduation Program (PGP)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"PGP provides an in-depth understanding of business concepts, preparing individuals for leadership roles.",
      contactNum: "849554111"
    },

    {
      collegeCode: "08", //courseID
      logoSrc: "./assets/images/Course/mbbs-course.jpg",
      category: "Medical",  
      name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"MBBS is the foundational course for medical professionals, covering anatomy, pharmacology, and clinical practices, leading to a career in healthcare.",
      contactNum: "849554111"
    },

    {
      collegeCode: "09", //courseID
      logoSrc: "./assets/images/Course/md-course.jpg",
      category: "Medical",  
      name: "MD in Internal Medicine",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Internal Medicine specialization involves diagnosing and treating complex medical conditions, preparing doctors for comprehensive patient care.",
      contactNum: "849554111"
    },

    {
      collegeCode: "10", //courseID
      logoSrc: "./assets/images/Course/bmlt-course.jpg",
      category: "Medical",  
      name: "MS in General Surgery",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"General Surgery focuses on surgical procedures and interventions, training surgeons to handle a broad spectrum of medical conditions through operative techniques",
      contactNum: "849554111"
    },

    {
      collegeCode: "11", //courseID
      logoSrc: "./assets/images/Course/md-course.jpg",
      category: "Medical",  
      name: "BDS (Bachelor of Dental Surgery)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"BDS is the undergraduate program for aspiring dentists, covering dental anatomy, surgery, and preventive care, leading to a career in dentistry.",
      contactNum: "849554111"
    },

    {
      collegeCode: "12", //courseID
      logoSrc: "./assets/images/Course/mbbs-course.jpg",
      category: "Medical",  
      name: "B.Sc. Nursing",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"B.Sc. Nursing prepares individuals for a career in healthcare, emphasizing clinical skills, patient care, and medical knowledge.",
      contactNum: "849554111"
    },

    {
      collegeCode: "13", //courseID
      logoSrc: "./assets/images/Course/md-course.jpg",
      category: "Medical",  
      name: "Master of Pharmacy (M.Pharm)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"M.Pharm focuses on advanced pharmaceutical research, drug development, and pharmacology.",
      contactNum: "849554111"
    },

    {
      collegeCode: "14", //courseID
      logoSrc: "./assets/images/Course/bmlt-course.jpg",
      category: "Medical",  
      name: "Bachelor of Pharmacy (B.Pharm)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"B.Sc. Nursing prepares individuals for a career in healthcare, emphasizing clinical skills, patient care, and medical knowledge.",
      contactNum: "849554111"
    },

    {
      collegeCode: "15", //courseID
      logoSrc: "./assets/images/Course/md-course.jpg",
      category: "Medical",  
      name: "BMLT (Bachelor of Medical Laboratory Technology)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"B.Sc. Nursing prepares individuals for a career in healthcare, emphasizing clinical skills, patient care, and medical knowledge.",
      contactNum: "849554111"
    },

    {
      collegeCode: "16", //courseID
      logoSrc: "./assets/images/Course/mbbs-course.jpg",
      category: "Medical",  
      name: "Doctor of Medicine (MD)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"MD offers specialization in various medical fields, allowing doctors to become experts in specific areas.",
      contactNum: "849554111"
    },

    {
      collegeCode: "17", //courseID
      logoSrc: "./assets/images/Course/bmlt-course.jpg",
      category: "Medical",  
      name: "M.Sc Nursing",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"M.Sc Nursing offers specialization in nursing fields like critical care, psychiatric nursing, and community health.",
      contactNum: "849554111"
    },

    {
      collegeCode: "18", //courseID
      logoSrc: "./assets/images/Course/md-course.jpg",
      category: "Medical",  
      name: "Master of Physiotherapy (MPT)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"MPT at the master's level allows physiotherapists to specialize in areas such as orthopedics, neurology, and sports.",
      contactNum: "849554111"
    },

    {
      collegeCode: "19", //courseID
      logoSrc: "./assets/images/Course/mba-course.jpg",
      category: "Management",  
      name: "Executive MBA(EMBA)",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Tailored for professionals, EMBA offers advanced business education with minimal career disruption, emphasizing leadership and strategic skills.",
      contactNum: "849554111"
    },
    {
      collegeCode: "20", //courseID
      logoSrc: "./assets/images/Course/exicutive-mba.jpg",
      category: "Management",  
      name: "Distance MBA",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Tailored for professionals, EMBA offers advanced business education with minimal career disruption, emphasizing leadership and strategic skills.",
      contactNum: "849554111"
    },
    {
      collegeCode: "21", //courseID
      logoSrc: "./assets/images/Course/distance-mba.jpg",
      category: "Management",  
      name: "Online MBA",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Flexible and remote, Online MBA suits working professionals, covering business concepts, management, and leadership skills through virtual classes.",
      contactNum: "849554111"
    },
    {
      collegeCode: "22", //courseID
      logoSrc: "./assets/images/Course/exicutive-mba.jpg",
      category: "Management",  
      name: "Part Time MBA",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Designed for working individuals, Part-Time MBA provides flexibility with evening or weekend classes to enhance skills alongside current jobs.",
      contactNum: "849554111"
    },
    {
      collegeCode: "23", //courseID
      logoSrc: "./assets/images/Course/b.tech-course.jpg",
      category: "Engineering",  
      name: "PH.D",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"The highest academic degree, Ph.D. involves original research and contributions to a specific field, advancing knowledge in the chosen discipline.",
      contactNum: "849554111"
    },

    {
      collegeCode: "24", //courseID
      logoSrc: "./assets/images/Course/m.tech-course.jpg",
      category: "Engineering",  
      name: "Engineering Diploma Course",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"A practical three-year program focusing on fundamental engineering concepts, preparing students for entry-level roles or further engineering studies.",
      contactNum: "849554111"
    },
    {
      collegeCode: "25", //courseID
      logoSrc: "./assets/images/Course/ph.d-course.jpg",
      category: "Engineering",  
      name: "Distance Course",
      rating: 4.5,
      totalRatings: 245,
      star: 5,
      reviewCount: 243,
      overview:"Remote education with online platforms, Distance Courses cater to those unable to attend traditional classes, offering flexibility and accessibility.",
      contactNum: "849554111"
    },
   
  ];
  
  module.exports = courseListData