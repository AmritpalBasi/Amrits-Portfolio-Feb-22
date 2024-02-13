import React from "react";
import { socialLinks } from "@/utils/SocialLinks";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-24 text-textLight">
      <a href={`mailto:${socialLinks.Email}`}>
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          amritpalbasi@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
