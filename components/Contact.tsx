import { portfolioText } from "@/utils/PortfolioText";
import { socialLinks } from "@/utils/SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-inter text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. Up Next
      </p>
      <h2 className="font-inter text-5xl font-semibold">Get in Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        {portfolioText.contactMe.text}
      </p>
      <a href={socialLinks.LinkedIn} target="_blank">
        <button
          className="w-40 h-14 border border-textGreen rounded-md text-sm text-textGreen
          font-inter tracking-wider hover:bg-hoverColor duration-300 mt-6"
        >
          Say Hello!
        </button>
      </a>
    </section>
  );
};

export default Contact;
