import React from "react"

import SkillsList from "./SkillsList"
import VolunteerExperiencesList from "./VolunteerExperiencesList"
import WorkExperiencesList from "./WorkExperiencesList"
import EducationExperiencesList from "./EducationExperiencesList"

const Resume = (props) => {
  return (
    <div className="small-12 small-centered columns" id="resume-top">
      <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
      <div className="small-3 columns resume-top">
        <h3>
          <a href="#skills" className="resume-head">
            Skills
          </a>
          <a href="#education" className="resume-head">
            Education
          </a>
          <a href="#past-work" className="resume-head">
            Past Work
          </a>
          <a href="#volunteer-experience" className="resume-head">
            Volunteer Experience
          </a>
        </h3>
      </div>

      <div className="resume-section" id="skills">
        <SkillsList />
        <a href="#resume-top">top</a>
      </div>
      <div className="resume-section" id="education">
        <EducationExperiencesList />
        <a href="#resume-top">top</a>
      </div>
      <div className="resume-section" id="past-work">
        <WorkExperiencesList />
        <a href="#resume-top">top</a>
      </div>
      <div className="resume-section" id="volunteer-experience">
        <VolunteerExperiencesList />
        <a href="#resume-top">top</a>
      </div>
    </div>
  )
}

export default Resume
