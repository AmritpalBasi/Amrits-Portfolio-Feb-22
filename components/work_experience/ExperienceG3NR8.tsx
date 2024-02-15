"use client";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { portfolioText } from "@/utils/PortfolioText";

const ExperienceG3NR8 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-inter">
        Machine Learning Engineer{" "}
        <span className="text-textGreen tracking-wide">@G3NR8</span>
      </h3>

      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2023 - Present
      </p>
      {/* LIST EXPERIENCE */}
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceG3NR8.point1}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceG3NR8.point2}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceG3NR8.point3}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceG3NR8.point4}
        </li>
      </ul>
    </motion.div>
  );
};

export default ExperienceG3NR8;
