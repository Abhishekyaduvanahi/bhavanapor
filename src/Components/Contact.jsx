import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-auto w-full flex flex-col items-center bg-colorText"
    >
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-4xl text-black font-bold mb-6 text-center">
          Contact Me
        </h2>

        <form className="flex flex-col space-y-6">
          {/* Name Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="name" className=" font-semibold text-lg w-24">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full md:w-[700px] h-auto rounded-full p-2 text-black"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="email" className=" font-semibold text-lg w-24">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full md:w-[700px] h-auto rounded-full p-2 text-black"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="message" className=" font-semibold text-lg w-24">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full md:w-[700px] h-auto rounded-lg p-2 text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white  py-2 px-6 rounded-full mt-4 hover:bg-slate-700  hover:text-white transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
