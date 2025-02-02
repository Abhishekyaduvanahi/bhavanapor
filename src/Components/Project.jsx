import React from "react";
import projectImgae1 from "../assets/networkTrafficAnalysisUsingWireFrame.jpg";
import projectImgae2 from "../assets/vullnerabilityAssesmentProject.jpg";
import projectImgae3 from "../assets/muscleControlledWheelChairs.png";

import { Project1, Project2, Project3 } from "../constants/Detail";

const Project = () => {
  return (
    <section id="projects" className="h-auto flex flex-col ">
      <h1 className=" text-[60px]  font-bold mx-auto mt-2">Projects</h1>

      {/* card main container */}
      <div className="flex flex-col items-center  md:flex-row ">
        {/* 1st card */}
        <div className="bg-white flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px]" src={projectImgae1} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project1.title}</p>
          {/* project Desription: */}
          <p>{Project1.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project1.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
        {/* 2nd card */}
        <div className="bg-white flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px]" src={projectImgae2} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project2.title}</p>
          {/* project Desription: */}
          <p>{Project2.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project2.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
        {/* 3rd card */}
        <div className="bg-white flex flex-col w-[95%] h-auto rounded-2xl m-4 p-8 ">
          <img className="h-[240px]" src={projectImgae3} alt="" />
          {/* project title : */}
          <p className="text-[20px] font-bold">{Project3.title}</p>
          {/* project Desription: */}
          <p>{Project3.description}</p>
          {/* Project techStack :  */}
          <p className="text-[16px] font-bold">{Project3.techStack}</p>
          {/* <p> source Code: </p>
          <p>preview link :</p> */}
        </div>
      </div>

      {/* <h1 className=" text-[60px] text-colorText font-bold mx-auto mt-2">
        Contact Me
      </h1> */}
    </section>
  );
};

export default Project;
