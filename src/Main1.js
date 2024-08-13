import React, { useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, useAnimation, useScroll } from "framer-motion";
import Main2 from "./Main2";
import { ColorModeContext } from "./ToggleColorMode";  

const transition = {
  ease: "easeInOut",
  duration: 1.2,
};

const popup = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition },
};

const Main1 = () => {
  const user = {
    name: 'Haider Fiaz',
    openingtext: 'Welcome to my portfolio! I am a passionate front-end developer with knowledge of Tailwind CSS, Bootstrap frameworks, React, and Angular'
  };
   
  const { mode } = useContext(ColorModeContext);  

  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const offset = 300;  
      if (scrollY.get() > offset) {
        controls.start("show");
      }
    };

    handleScroll(); 
    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [controls, scrollY]);

  return (
    <div
      className={`relative overflow-hidden ${
        mode === "dark" ? "bg-1a1a1a text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="pb-32 pt-5 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="sm:max-w-lg">
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.instagram.com/haiderfiaz.exe"
                  className={`text-${mode === "dark" ? "gray-400" : "gray-600"} hover:text-${mode === "dark" ? "gray-300" : "gray-800"}`}
                >
                  <InstagramIcon   fontSize="large" />
                </a>
                <a
                  href="www.linkedin.com/in/haider-fiaz-9606592b2"
                  className={`text-${mode === "dark" ? "gray-400" : "gray-600"} hover:text-${mode === "dark" ? "gray-300" : "gray-800"}`}
                >
                  <LinkedInIcon fontSize="large" />
                </a>
               
                <a
                 href="https://wa.me/923344444502" 
                  
                  className={`   text-${mode === "dark" ? "gray-400" : "gray-600"} hover:text-${mode === "dark" ? "gray-300" : "gray-800"}`}
                >
                  <WhatsAppIcon fontSize="large" />
                </a>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Hey there 👋, <br /> It's  {user.name}
              </h1>
              <p className="mt-4 text-xl">
                {user.openingtext}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() =>
                    (window.location.href = "mailto:haiderfiaz@example.com")
                  }
                  className={`inline-flex items-center rounded-md bg-gradient-to-r from-${mode === "dark" ? "blue-500" : "blue-400"} via-${mode === "dark" ? "blue-600" : "blue-500"} to-${mode === "dark" ? "blue-700" : "blue-600"} px-6 py-2 my-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out`}
                >
                  Say Hello
                </button>
                <motion.button
                  className={`inline-flex items-center rounded-md border px-6 py-2 my-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                    mode === "dark" ? "border-white text-white" : "border-black text-black"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  My Portfolio
                </motion.button>
              </div>
            </div>
            <motion.div
              className="flex justify-center lg:justify-end p-4"
              variants={popup}
              initial="hidden"
              animate={controls}
            >
              <Avatar
                alt="Haider Fiaz"
                src="./Assets/portfolcio.jpg"
                
                sx={{
                  width: {
                    xs: 350,
                    sm: 400,
                    md: 450,
                    lg: 500,
                  },
                  height: {
                    xs: 350,
                    sm: 400,
                    md: 450,
                    lg: 500,
                  },
                }}
                className={`rounded-full border-4 ${
                  mode === "dark" ? "border-gray-700" : "border-gray-300"
                } shadow-lg`}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mode === "dark" ? "bg-1a1a1a text-black" : "bg-white text-black"
        }`}
      >
        <Main2 />
      </div>
    </div>
  );
};

export default Main1;
