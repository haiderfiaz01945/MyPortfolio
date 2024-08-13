import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import "./Services.css"; // Import the CSS file
import { ColorModeContext } from "./ToggleColorMode"; // Import ColorModeContext

export default function Services() {
  const { mode } = useContext(ColorModeContext); // Get current mode from context

  return (
    <div className={`gradient-motion min-h-screen p-8 `}  >
 
       <div className={`max-w-7xl mx-auto `}>
         <header className="text-center mb-12 bg-transparent">
           <motion.div
             className="mx-auto "
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <Avatar
             
               src="./Assets/portfolio.jpg"
               alt="Haider Fiaz"
               sx={{ width: 128, height: 128, margin: 'auto' }}
             />
           </motion.div>
           <motion.h1
   className={`text-4xl font-bold mt-4 ${
     mode === "dark" ? "bg-transparent text-white" : "bg-transparent text-black"
   }`}
   initial={{ opacity: 0, y: -20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6, delay: 0.2 }}
 >

Services
 </motion.h1>
        </header>

        <section
          className={`${
            mode === "dark"
              ? "bg-gray-800 text-white shadow-md"
              : "bg-white text-gray-700 shadow-md"
          } rounded-lg p-8 mb-12 section-transition`}
        >
          <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
          <p className="leading-7">
            I provide a range of front-end development services tailored to your
            needs. Whether you're looking to build a new website from scratch or
            improve an existing one, I have the skills and experience to deliver
            high-quality results.
          </p>
        </section>

        <section
          className={`${
            mode === "dark"
              ? "bg-gray-800 text-white shadow-md"
              : "bg-white text-gray-700 shadow-md"
          } rounded-lg p-8 mb-12 section-transition`}
        >
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-block h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Web Development</h3>
                <p className="leading-7">
                  Building responsive and interactive websites using the latest
                  technologies like React, Angular, and more.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-block h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
                <p className="leading-7">
                  Crafting user-friendly and visually appealing interfaces to
                  enhance user experience and engagement.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-block h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
                <p className="leading-7">
                  Providing tailored solutions to meet your specific business
                  needs and objectives.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section
          className={`${
            mode === "dark"
              ? "bg-gray-800 text-white shadow-md"
              : "bg-white text-gray-700 shadow-md"
          } rounded-lg p-8 section-transition`}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="leading-7 mb-4">
            Ready to start your project or have any questions? Feel free to
            reach out to me through any of the following platforms:
          </p>
          <ul className="list-none leading-7">
            <li>
              Email:{" "}
              <a
                href="mailto:haiderfiaz@example.com"
                className="text-blue-600 hover:underline"
              >
                 haiderfiaz@example.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/haiderfiaz"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/haiderfiaz
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
