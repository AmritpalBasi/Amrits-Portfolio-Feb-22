import SectionTitle from "@/components/SectionTitle";
import ExperienceG3NR8 from "@/components/work_experience/ExperienceG3NR8";
import { useState } from "react";
import ExperienceBIMA from "@/components/work_experience/ExperienceBIMA";
import ExperienceETX from "@/components/work_experience/ExperienceETX";
import ExperienceLeesman from "@/components/work_experience/ExperienceLeesman";

const Experience = () => {
  const [workG3NR8, setWorkG3NR8] = useState(true);
  const [workBIMA, setWorkBIMA] = useState(false);
  const [workETX, setWorkETX] = useState(false);
  const [workLeesman, setWorkLeesman] = useState(false);

  const handleG3NR8 = () => {
    setWorkG3NR8(true);
    setWorkBIMA(false);
    setWorkETX(false);
    setWorkLeesman(false);
  };

  const handleBIMA = () => {
    setWorkG3NR8(false);
    setWorkBIMA(true);
    setWorkETX(false);
    setWorkLeesman(false);
  };

  const handleETX = () => {
    setWorkG3NR8(false);
    setWorkBIMA(false);
    setWorkETX(true);
    setWorkLeesman(false);
  };

  const handleLeesman = () => {
    setWorkG3NR8(false);
    setWorkBIMA(false);
    setWorkETX(false);
    setWorkLeesman(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I've Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleG3NR8}
            className={`${workG3NR8 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            G3NR8
          </li>
          <li
            onClick={handleBIMA}
            className={`${workBIMA ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Milvik Bima
          </li>
          <li
            onClick={handleETX}
            className={`${workETX ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ETX Capital
          </li>
          <li
            onClick={handleLeesman}
            className={`${workLeesman ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Leesman
          </li>
        </ul>
        {/* WORK EXPERIENCE */}
        {workG3NR8 && <ExperienceG3NR8 />}
        {workBIMA && <ExperienceBIMA />}
        {workETX && <ExperienceETX />}
        {workLeesman && <ExperienceLeesman />}
      </div>
    </section>
  );
};

export default Experience;
