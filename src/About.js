import React, {useContext } from "react";

import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import './Services.css'; 
import { ColorModeContext } from "./ToggleColorMode";


export default function About() {

  const { mode } = useContext(ColorModeContext); 

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
   About Me
 </motion.h1>

        </header>
        <section
  className={`${
    mode === "dark"
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-white text-gray-700 shadow-lg"
  } rounded-lg p-8 mb-12 section-transition`}
>
  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
  <p className="leading-7">
    Hello! I am Haider Fiaz, a passionate front-end developer with a solid academic foundation and a proactive approach to learning. I am currently studying at The University of Lahore in the computer science department and have completed 4 semesters with a CGPA of 3.55. My certifications in Java, Angular, and React, combined with my creative problem-solving abilities and dedication to continuous improvement, make me a strong candidate for any software development role.
  </p>
</section>

<section
  className={`${
    mode === "dark"
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-white text-gray-700 shadow-lg"
  } rounded-lg p-8 mb-12 section-transition`}
>
  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
  <ul className="list-disc pl-5 leading-7">
    <li>HTML, CSS, and JavaScript</li>
    <li>React.js and Angular</li>
    <li>Java and Spring Boot</li>
    <li>Bootstrap and Tailwind CSS</li>
    <li>Material UI and Headless UI</li>
  </ul>
</section>

<section
  className={`${
    mode === "dark"
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-white text-gray-700 shadow-lg"
  } rounded-lg p-8 mb-12 section-transition`}
>
  <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
  <p className="leading-7">
    Beyond my academic and technical achievements, my passion for technology extends into my personal life. I love riding and customizing bikes, a hobby that not only showcases my creative thinking but also my ability to apply innovative solutions to various aspects of my life. This creative outlet reflects my innovative mindset and my capacity to think outside the box, both of which are invaluable in the field of software development.
  </p>
</section>

<section
  className={`${
    mode === "dark"
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-white text-gray-700 shadow-lg"
  } rounded-lg p-8 mb-12 section-transition`}
>
  <h2 className="text-2xl font-semibold mb-4">Licenses and Certifications</h2>
  <ul className="space-y-4 leading-7">
    <li>Advanced React from Meta</li>
    <li>React Basics from Meta</li>
    <li>Fundamentals of Java from Board Infinity</li>
    <li>Frontend for Java Full Stack Development from Board Infinity</li>
  </ul>
</section>

<section
  className={`${
    mode === "dark"
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-white text-gray-700 shadow-lg"
  } rounded-lg p-8 section-transition`}
>
  <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
  <p className="leading-7 mb-4">
    I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through any of the following platforms:
  </p>
  <ul className="list-none leading-7">
    <li>Email: <a href="mailto:
    
    
    " className="text-blue-600 hover:underline">
      </a></li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/haider-fiaz-9606592b2" className="text-blue-600 hover:underline">www.linkedin.com/in/haider-fiaz-9606592b2</a></li>
  </ul>
</section>

      
      </div>
    </div>
  );
}
