import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "./ToggleColorMode"; // Import ColorModeContext
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faAngular,
  faJs,
} from "@fortawesome/free-brands-svg-icons"; // Import faJs icon
import Main1 from "./Main1";
import "./Main3.css"
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Main3 = () => {
  const { mode } = useContext(ColorModeContext); // Get current mode from context

  return (
    <ScrollContainer>
      {/* Intro Section */}
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), Move(0, -100))}>
          <div
            className={`text-center mt-24 px-4 ${
              mode === "dark"
                ? "bg-transparent text-white"
                : "bg-transparent text-gray-800"
            }`}
          >
            <div
            className={`text-center mt-24 px-4 ${
              mode === "dark"
                ? "bg-transparent text-white"
                : "bg-transparent text-gray-800"
            }`}
          >
           <h1 className="text-5xl font-Gupter mb-6 font-zain running-gradient">
WELCOME
</h1>
            <p className="text-xl mb-12 typewriter">
              Scroll down to see my skills in action!
            </p>
          </div>
          </div>
        </Animator>
      </ScrollPage>

      {/* Skills Section */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            className={`flex flex-col items-center mb-16 px-4 ${
              mode === "dark" ? "bg-transparent text-white" : "bg-transparent"
            }`}
          >
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4">
              {/* React */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faReact}
                  spin
                  style={{
                    color: "#74C0FC",
                    fontSize: "5rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <p className="text-lg font-semibold">React</p>
              </div>

              {/* Angular */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faAngular}
                  style={{
                    color: "#DD0031",
                    fontSize: "5rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <p className="text-lg font-semibold">Angular</p>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center">
                <img
                  src="./Assets/Tailwind.png"
                  style={{
                    width: "5rem",
                    marginBottom: "0.5rem",
                  }}
                  alt="Tailwind CSS Logo"
                />
                <p className="text-lg font-semibold">Tailwind CSS</p>
              </div>

              {/* Bootstrap */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  style={{
                    color: "#563d7c",
                    fontSize: "5rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <p className="text-lg font-semibold">Bootstrap</p>
              </div>

              {/* C++ */}
              <div className="flex flex-col items-center">
                <img
                  src="./Assets/C.png"
                  style={{
                    width: "5rem",
                    marginBottom: "0.5rem",
                  }}
                  alt="C++ Icon"
                />
                <p className="text-lg font-semibold">C++</p>
              </div>
              {/* JavaScript */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faJs}
                  style={{
                    color: "#FFD43B",
                    fontSize: "5rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <p className="text-lg font-semibold">JavaScript</p>
              </div>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      {/* Additional Skills Section */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            className={`text-center mt-16 px-4 ${
              mode === "dark"
                ? "bg-1a1a1a text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">Additional Skills</h2>
            <p className="text-xl">
              Beyond these frameworks, I have experience with various other
              technologies and practices that enhance my development skills.
            </p>
          </div>
        </Animator>
      </ScrollPage>

      {/* Closing Section */}
      <ScrollPage>
        <div
          className={`flex flex-col items-center justify-center h-full px-4 ${
            mode === "dark" ? "bg-1a1a1a text-white" : "bg-white text-gray-800"
          }`}
        >
          <span className="text-4xl font-bold mb-6">
            <Animator animation={MoveIn(-500, 0)}>
              Thanks for Checking Out My Skills!
            </Animator>
          </span>
        </div>
      </ScrollPage>

      {/* Final Section */}
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <div
            className={`text-center mt-16 px-4 ${
              mode === "dark"
                ? "bg-1a1a1a text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">That's All Folks!</h2>
            <p className="text-lg">
              Feel free to reach out if you want to know more about my skills or
              work together on a project.
            </p>
          </div>
        </Animator>
      </ScrollPage>
      <Main1 />
    </ScrollContainer>
  );
};

export default Main3;
