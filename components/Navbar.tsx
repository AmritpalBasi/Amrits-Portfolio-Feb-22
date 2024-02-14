"use client";
import React, { useRef, useState } from "react";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose, MdOutlineEmail, MdSmartphone } from "react-icons/md";
import { socialLinks } from "@/utils/SocialLinks";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setShowMenu(false);
    e.preventDefault();
    const href: string = e.currentTarget.href;
    const targetId: string = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });

    //   Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[9vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-inter flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo} alt="logo" className="w-14" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            {/*LINK 1: HOME*/}
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            {/*LINK 2: ABOUT*/}
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">01.</span> About
              </motion.li>
            </Link>

            {/*LINK 3: EXPERIENCE*/}
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">02.</span> Experience
              </motion.li>
            </Link>

            {/*LINK 4: PROJECTS*/}
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">03.</span> Projects
              </motion.li>
            </Link>

            {/*LINK 5: CONTACT*/}
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-textGreen">04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          {/*IMPLEMENT RESUME BUTTON*/}
          <a href="/Amrit%20Basi%20CV.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* SMALL ICON SECTION */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden  text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {/* SHOW MENU */}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 w-full h-screen bg-black
                       bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240]
              flex flex-col items-center px-4 py-10 relative"
            >
              {/* CLOSE ICON */}
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer
              hover:text-red-500 absolute top-4 right-4"
              />
              {/* MENU LIST */}
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  {/*LINK 1: HOME*/}
                  <Link
                    href="#home"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  {/*LINK 2: ABOUT*/}
                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">01.</span> About
                    </motion.li>
                  </Link>

                  {/*LINK 3: EXPERIENCE*/}
                  <Link
                    href="#experience"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">02.</span> Experience
                    </motion.li>
                  </Link>

                  {/*LINK 4: PROJECTS*/}
                  <Link
                    href="#projects"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span> Projects
                    </motion.li>
                  </Link>

                  {/*LINK 5: CONTACT*/}
                  <Link
                    href="#contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">04.</span> Contact
                    </motion.li>
                  </Link>
                </ul>
                {/* RESUME BUTTON */}
                <a href="/Amrit%20Basi%20CV.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                {/* CONTACT ICONS */}
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
                >
                  <a href={socialLinks.Github} target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </a>
                  <a href={socialLinks.LinkedIn} target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </a>
                  <a href={`mailto:${socialLinks.Email}`}>
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <MdOutlineEmail />
                    </span>
                  </a>
                  <a href={`tel:${socialLinks.Phone}`}>
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <MdSmartphone />
                    </span>
                  </a>
                  <a href={socialLinks.Twitter} target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <BsTwitterX />
                    </span>
                  </a>
                  <a href={socialLinks.Instagram} target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
