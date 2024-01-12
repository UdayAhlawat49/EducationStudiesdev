// generateTabLinks.js

const courseData = require('./courseData');

const courseGenerateTabLinksData = (collegeCode) => {
  const college = courseData.find((college) => college.collegeCode === collegeCode);

  return [
    {
      id: `tab-${collegeCode}-Overviews`,
      label: "Overviews",
      active: true,
      innerContent: college.overviewTabContentData,
    },
    {
      id: `tab-${collegeCode}-Admissions`,
      label: "Admissions",
      active: false,
      innerContent: college.admissionsTabContentData,
    },
    {
      id: `tab-${collegeCode}-Courses`,
      label: "Courses",
      active: false,
      innerContent: college.coursesTabContentData,
    },
    {
      id: `tab-${collegeCode}-cutOff`,
      label: "cutOff",
      active: false,
      innerContent: college.cutOffsTabContentData,
    },
    // Add more tab links as needed
  ];
};

module.exports = courseGenerateTabLinksData;
