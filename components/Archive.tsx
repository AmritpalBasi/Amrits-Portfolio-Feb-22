"use client";
import React, { useState } from "react";
import ArchiveCard from "@/components/ArchiveCard";
import { portfolioText } from "@/utils/PortfolioText";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      {/* Title Div */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-inter font-semibold">Other Projects</h2>
        <p className="text-sm font-inter text-textGreen">View the Archive</p>
      </div>
      {/* Cards Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title={portfolioText.archiveTensorFlow.title}
          description={portfolioText.archiveTensorFlow.text}
          listItems={portfolioText.archiveTensorFlow.skills}
          link={portfolioText.archiveTensorFlow.link}
        />
        {showMore && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Whoops!"
                description="I'm still adding projects to this website"
                listItems={["coming", "soon", "(hopefully)"]}
                link={"https://www.youtube.com/watch?v=-U48AAZo_Cw"}
              />
            </motion.div>
          </div>
        )}
      </div>
      {/*  BUTTON DIV  */}
      <div className="mt-12 flex items-center justify-center">
        {!showMore ? (
          <button
            className="border border-textGreen w-36 h-12 rounded-md text-textGreen text-[13px]
                     hover:bg-hoverColor duration-300"
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        ) : (
          <button
            className="border border-textGreen w-36 h-12 rounded-md text-textGreen text-[13px]
                     hover:bg-hoverColor duration-300"
            onClick={() => setShowMore(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
