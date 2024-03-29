"use client";
import { motion } from "framer-motion";
import { socialLinks } from "@/utils/SocialLinks";
import { portfolioText } from "@/utils/PortfolioText";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py:10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-inter text-textGreen tracking-wide"
      >
        Hey!, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-inter font-semibold flex flex-col"
      >
        Amrit Basi
        <span className="text-textDark mt-2 lgl:mt-4">
          Building for Analytics and Machine Learning
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {portfolioText.bannerText.text}
        <br></br>
        <a href={socialLinks.LinkedIn} target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href={socialLinks.Github} target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-inter border border-textGreen rounded-md text-textGreen tacking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
