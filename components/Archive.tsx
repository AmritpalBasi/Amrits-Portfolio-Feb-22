import React from "react";
import ArchiveCard from "@/components/ArchiveCard";
import { portfolioText } from "@/utils/PortfolioText";

const Archive = () => {
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
      </div>
    </div>
  );
};

export default Archive;
