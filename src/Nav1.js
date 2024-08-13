import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeContext } from "./ToggleColorMode";
import "./Nav1.css";
import { Disclosure } from "@headlessui/react";

export default function Nav1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { palette } = useTheme();
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", palette.mode === "dark");
  }, [palette.mode]);
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 shadow-md ${
        palette.mode === "dark" ? " " : "bg-white"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <h2 
              className={`text-2xl  ${
                palette.mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span
                className={`font-bold  ${
                  palette.mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                Haider
              </span>{" "}
              <span
                className={`font-bold ${
                  palette.mode === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Fiaz
              </span>
            </h2>
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              palette.mode === "dark"
                ? "text-white hover:text-gray-400"
                : "text-black hover:text-gray-600"
            }`}
          >
            <span className="sr-only">Toggle main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className={`hover:no-underline running-gradient flex items-center gap-x-1 text-sm font-semibold leading-6 ${
              palette.mode === "dark"
                ? "hover:text-blue-400"
                : "hover:text-red-600"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`text-sm hover:no-underline font-semibold leading-6 ${
              palette.mode === "dark"
                ? "text-white hover:text-gray-400"
                : "text-black hover:text-gray-600"
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={`text-sm hover:no-underline font-semibold leading-6 ${
              palette.mode === "dark"
                ? "text-white hover:text-gray-400"
                : "text-black hover:text-gray-600"
            }`}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-sm hover:no-underline font-semibold leading-6 ${
              palette.mode === "dark"
                ? "text-white hover:text-gray-400"
                : "text-black hover:text-gray-600"
            }`}
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            className={palette.mode === "dark" ? "text-white" : "text-black "}
          >
            {palette.mode === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
        onClick={handleLinkClick}
      >
        <div className="fixed inset-0 z-10" />
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}  // Starts off-screen to the right
              animate={{ x: 0 }}       // Animates to the right edge of the screen
              exit={{ x: "100%" }}     // Animates back off-screen to the right
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto ${
                palette.mode === "dark" ? "bg-black" : "bg-white"
              } px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mt-16`}
            >
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      <NavLink
                        to="/"
                        onClick={handleLinkClick}
                        className={`running-gradient hover:no-underline group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                          palette.mode === "dark"
                            ? "hover:bg-gray-800"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Home
                      </NavLink>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-3">
                      <NavLink
                        to="/about"
                        onClick={handleLinkClick}
                        className={`group hover:no-underline flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                          palette.mode === "dark"
                            ? "text-white hover:bg-gray-800"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        About
                      </NavLink>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-3">
                      <NavLink
                        to="/services"
                        onClick={handleLinkClick}
                        className={`group hover:no-underline flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                          palette.mode === "dark"
                            ? "text-white hover:bg-gray-800"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        Services
                      </NavLink>
                    </Disclosure>
                    <Disclosure as="div" className="-mx-3">
                      <NavLink
                        to="/contact"
                        onClick={handleLinkClick}
                        className={`group hover:no-underline flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                          palette.mode === "dark"
                            ? "text-white hover:bg-gray-800"
                            : "text-black hover:bg-gray-100"
                        }`}
                      >
                        Contact
                      </NavLink>
                    </Disclosure>
                  </div>

                  <div className="flex justify-center mt-6">
                    <IconButton
                      onClick={colorMode.toggleColorMode}
                      color="inherit"
                      className={
                        palette.mode === "dark" ? "text-white" : "text-black"
                      }
                    >
                      {palette.mode === "dark" ? (
                        <Brightness4Icon />
                      ) : (
                        <Brightness7Icon />
                      )}
                    </IconButton>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </header>
  );
}
