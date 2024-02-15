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
        Regional Data Scientist{" "}
        <span className="text-textGreen tracking-wide">@Milvik BIMA</span>
      </h3>

      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2022 - November
      </p>
      {/* LIST EXPERIENCE */}
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceMilvikBIMA.point1}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceMilvikBIMA.point2}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceMilvikBIMA.point3}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceMilvikBIMA.point4}
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {portfolioText.experienceMilvikBIMA.point5}
        </li>
      </ul>
    </motion.div>
  );
};

export default ExperienceG3NR8;
