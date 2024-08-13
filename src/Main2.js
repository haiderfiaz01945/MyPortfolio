import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { ColorModeContext } from "./ToggleColorMode"; 

const MotionBox = motion(Box);

export default function BoxSystemProps() {
  const { mode } = useContext(ColorModeContext); 

  const [showContactOptions, setShowContactOptions] = useState(false);

  const hoverEffect = {
    rest: { 
      scale: 1, 
      boxShadow: "0px 4px 20px rgba(0, 0, 255, 0.3)" // Blue shadow
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 8px 30px rgba(0, 0, 255, 0.5)" // Brighter blue shadow on hover
    },
  };
  const userDetails = {
    Age: '21',
    Residence: 'Pakistan',
    Email: ' haiderfiaz@example.com',
    Phone: '1234567889'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      {/* First Column, First Row */}
      <MotionBox
        className={`p-6 rounded-lg border ${
          mode === "dark"
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        height={{ xs: "auto", md: 300 }}
        width={{ xs: "auto", md: 400 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
        variants={hoverEffect}
        initial="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h1 className="text-3xl font-bold mb-2 text-center">About Me</h1>
        <p className="text-center">
          Front-end developer skilled in React, Angular, and CSS frameworks.
        </p>
        <a
          href="./Assets/CV.pdf"
          download
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          Download CV
        </a>
      </MotionBox>

      {/* Second Column, First Row */}
      <MotionBox
        className={`p-6 rounded-lg border ${
          mode === "dark"
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        height={{ xs: "auto", md: 300 }}
        width={{ xs: "auto", md: 400 }}
        display="flex"
        flexDirection="column"
        variants={hoverEffect}
        initial="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Personal Details
        </h2>
        <div className="w-full overflow-x-auto">
          <table
            className={`table-auto border-collapse w-full ${
              mode === "dark"
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-800"
            } rounded-2xl shadow-md`}
          >
            <tbody>
              <tr
                className={`${mode === "dark" ? "bg-gray-600" : "bg-gray-200"}`}
              >
                <td className="border px-4 py-2 font-medium text-left">Age</td>
                <td className="border px-4 py-2">{userDetails.Age}</td>
              </tr>
              <tr className={`${mode === "dark" ? "bg-gray-700" : ""}`}>
                <td className="border px-4 py-2 font-medium text-left">
                  Residence
                </td>
                <td className="border px-4 py-2">{userDetails.Residence}</td>
              </tr>
              <tr
                className={`${mode === "dark" ? "bg-gray-600" : "bg-gray-200"}`}
              >
                <td className="border px-4 py-2 font-medium text-left">
                  Email
                </td>
                <td className="border px-4 py-2">{userDetails.Email}</td>
              </tr>
              <tr className={`${mode === "dark" ? "bg-gray-700" : ""}`}>
                <td className="border px-4 py-2 font-medium text-left">
                  Phone
                </td>
                <td className="border px-4 py-2">{userDetails.Phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </MotionBox>

      {/* Third Column, First Row */}
      <MotionBox
        className={`p-6 rounded-lg border ${
          mode === "dark"
            ? "bg-gray-800 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-300"
        }`}
        height={{ xs: "auto", md: 300 }}
        width={{ xs: "auto", md: 400 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        variants={hoverEffect}
        initial="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h1 className="text-3xl font-bold mb-2 text-center">Education</h1>
        <p className="text-center mb-4">
          University of Lahore (UOL)
          <br />
          BSCS Ongoing (2022 - 2026)
          <br />
          Grade: 3.55 (4th Semester)
        </p>
        <button
          onClick={() => setShowContactOptions(true)}
          className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          Contact Me
        </button>
      </MotionBox>

      {/* Contact Options Popup */}
      {showContactOptions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-center">
              Contact Options
            </h2>
            <div className="flex flex-col items-center gap-4">
              <a
                href="callto:1234567"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                Call
              </a>
              <a
                href="mailto:haiderfiaz@example.com"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-2 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                Email
              </a>
              <button
                onClick={() => setShowContactOptions(false)}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-300 px-6 py-2 text-lg font-semibold text-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
