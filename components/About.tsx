import SectionTitle from "@/components/SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiJupyter,
  SiFlask,
  SiPytorch,
} from "react-icons/si";
import Image from "next/image";
import { profilePic } from "@/public";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark  flex flex-col gap-4">
          {/* ABOUT */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
            <span className="text-textGreen">
              Duis aute irure dolor in reprehenderit
            </span>{" "}
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            <span className="text-textGreen">
              officia deserunt mollit anim id est laborum.
            </span>
          </p>
          {/* TECHNOLOGIES */}
          <p>Here are a few technologies I have been working with recently</p>
          <ul className="max-w-[450px] text-sm font-inter grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span>
                <SiPython className="text-textGreen w-5 h-5" />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiJavascript className="text-textGreen w-5 h-5" />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiJupyter className="text-textGreen w-5 h-5" />
              </span>
              Jupyter
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiTypescript className="text-textGreen w-5 h-5" />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiFlask className="text-textGreen w-5 h-5" />
              </span>
              Flask
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiReact className="text-textGreen w-5 h-5" />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiPytorch className="text-textGreen w-5 h-5" />
              </span>
              PyTorch
            </li>
            <li className="flex items-center gap-2">
              <span>
                <SiTailwindcss className="text-textGreen w-5 h-5" />
              </span>
              Tailwind CSS
            </li>
          </ul>
        </div>
        {/* PROFILE IMAGE */}
        <div className="w-full lgl:w-1/3 md:w-2/4 sml:w-2/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={profilePic}
                alt="profileImage"
                className="rounded-lg h-full object-cover"
              />
              <div className="hidden md:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-textGreen/20 duration-300"></div>
            </div>
          </div>
          <div className="hidden md:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
