import React from "react";
import person from "../assets/pizza.webp";

import { about } from "../constants/Detail";

const Home = () => {
  return (
    <section
      id="home"
      className="h-auto flex  flex-col justify-center items-center"
    >
      {/* <h1 className="text-4xl font-bold">Welcome to the Home Section</h1> */}
      {/* this is the main container */}
      <div className=" flex flex-col md:flex-row ">
        {/* this div is for image */}
        <div className=" flex flex-col  ">
          <p className=" font-serif text-[60px] md:text-[200px]  font-bold ">
            Bhavana
          </p>
          {/* <p className=" font-serif text-4xl md:text-[60px] font-bold "> </p> */}
        </div>

        {/* <div className=" flex mt-8 mb-4 ">
          <img className=" w-[200px] h-[200px]" src={person} alt="" />
        </div> */}
        {/* this div is for name  */}
      </div>
      <p className="md:w-[70%] w-[80%] mb-8 ">{about.description}</p>
    </section>
  );
};

export default Home;
