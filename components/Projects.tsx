import React from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { SkiGPT, diamondGoose } from "@/public";
import { socialLinks } from "@/utils/SocialLinks";
import {
  SiInstagram,
  SiOpenai,
  SiPython,
  SiShopify,
  SiStreamlit,
} from "react-icons/si";
import { portfolioText } from "@/utils/PortfolioText";
import { GiGoose } from "react-icons/gi";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things I have built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*  Project one  */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project Image */}
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href={socialLinks.Github}
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={SkiGPT}
                  alt="SkiGPT"
                  className="w-full h-full object-contain"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            {/* Project Title */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-inter text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                {portfolioText.projectSkiGPT.title}
              </h3>
              {/* Project Description */}
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                {portfolioText.projectSkiGPT.text}
              </p>
              {/*  Skills List  */}
              <ul className="text-xs md:text-sm font-inter text-textDark tracking-wide flex gap-2 md:gap-5 justify-between">
                <li>Python</li>
                <li>StreamLit</li>
                <li>Open-AI</li>
                <li>Commissioned Project</li>
              </ul>
              {/*  ICONS  */}
              <div className="text-2xl flex gap-4">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiPython />
                </a>
                <a
                  href="https://streamlit.io/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiStreamlit />
                </a>
                <a
                  href="https://platform.openai.com/docs/assistants/how-it-works"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiOpenai />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  Project two  */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project Image */}
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href={socialLinks.Github}
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={diamondGoose}
                  alt="SkiGPT"
                  className="h-full w-full object-contain"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            {/* Project Title */}
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-inter text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                {portfolioText.projectDiamondGoose.title}
              </h3>
              {/* Project Description */}
              <p className="bg-[#112240] text-sm md:text-base p-2  md:p-6 xl:-mr-16 rounded-md">
                {portfolioText.projectDiamondGoose.text}
              </p>
              {/*  Skills List  */}
              <ul className="text-xs md:text-sm font-inter text-textDark tracking-wide flex gap-2 md:gap-5 justify-between">
                <li>Python</li>
                <li>StreamLit</li>
                <li>Open-AI</li>
                <li>Commissioned Project</li>
              </ul>
              {/*  ICONS  */}
              <div className="text-2xl flex gap-4">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiPython />
                </a>
                <a
                  href="https://streamlit.io/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiStreamlit />
                </a>
                <a
                  href="https://www.shopify.com/uk"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiShopify />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <SiInstagram />
                </a>
                <a
                  href="https://www.diamondgoose.com/"
                  target="_blank"
                  className="hover:text-textGreen duration-300"
                >
                  <GiGoose />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  Project three  */}
      </div>
    </section>
  );
};

export default Projects;
