import React from "react";
import Education from "./Education";
import TechnicalSkill from "./TechnicalSkill";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto mb-8 w-full flex flex-col  bg-white items-center"
    >
      {/* Skill Section is Mentioned here */}

      {/* for Graduation */}
      {/* <TechnicalSkill /> */}

      {/* Skill section ends here  */}
      <Education />
    </section>
  );
};

export default About;
