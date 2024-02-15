import React from "react";

export const portfolioText = {
  bannerText: {
    text: (
      <>
        <>
          It's one thing to build a great model, it's another to get people to
          care and trust it. That's been my main mission working in different
          stage start-ups, some of those with funding milestones ranging from{" "}
          <span className="text-textGreen">$5M to $200M.</span> My models have
          been responsible for finding{" "}
          <span className="text-textGreen">
            hundreds of thousands in unreconciled revenue, detecting internal
            fraud and responsible for allocating marketing resources.
          </span>
          {"\n"}
        </>
        <div className="mt-3">
          That code running in a cloud server somewhere will have financial and
          ethical implications, so ensuring everybody is on the same page is
          important.
        </div>
      </>
    ),
  },

  aboutMe: {
    text: (
      <>
        I graduated from Physics at UCL and jumped straight into the world of
        analytics. The first stage of my career had been a mix of technical &
        soft skills.{" "}
        <span className="text-textGreen">
          Writing Python, SQL and using Tableau
        </span>{" "}
        or{" "}
        <span className="text-textGreen">
          working closely with account managers and clients
        </span>
        . From there I went down a more technical route to
        <span className="text-textGreen"> data science</span> and{" "}
        <span className="text-textGreen">machine learning</span> and now
        exploring the world of{" "}
        <span className="text-textGreen">front-end development</span>.
      </>
    ),
  },

  experienceG3NR8: {
    point1:
      "Developed novel techniques to extract purchasing behaviour from unstructured data using large language models such as GPT, Llama and Mixtral\n",
    point2:
      "Built web crawlers to extract additional data improving the output accuracy of current LLMs",
    point3:
      "Developed in house applications to anonymise confidential financial transcript data using named-entity recognition models\n",
    point4:
      "Fine tuned SDXL using Low Rank Adaptation to generate marketing material for clients",
  },

  experienceMilvikBIMA: {
    point1:
      "Built transaction models finding over £400,000 plus an additional £5,000 a month in unaccounted revenue",
    point2:
      "Integrated large language models such as LeMUR to transcribe and analyse outbound calls improving compliance",
    point3:
      "Maintained and optimised the code base for call centre operations, ensuring daily sales continue to operate",
    point4:
      "Developed and deployed deep neural networks on AWS to predict fraudulent sales minimising the risk of litigation",
    point5:
      "Implemented data pipelines to ensure local markets in Africa and Asia have access to one central source of truth",
  },

  experienceETX: {
    point1:
      "Built models to predict the probability of a customer depositing funds improving client management and sales resources",
    point2:
      "Establish processes to clean and maintain trading and customer data improving financial and legal reporting",
    point3:
      "Owned and improved the process to automate KPI reports for C-Suite and investors ensuring reliability",
    point4:
      "Redesigned day-to-day processes after a merger with a neo-bank and a transformation in business strategy",
  },

  experienceLeesman: {
    point1:
      "Researched and delivered comprehensive workplace strategy reports for a diverse clientele, including investment banks, pharmaceutical companies, and government entities.",
    point2:
      "Led innovation projects to improve reporting standards including new designs and visualisations",
    point3:
      "Manage teams of reporting analysts ensuring day-to-day reporting is completed",
    point4: "",
  },

  projectSkiGPT: {
    title: "SKI-GPT",
    text: (
      <>
        Built an application to recommend ski resorts based on user preferences
        and budget restrictions. Integrated{" "}
        <span className="text-textGreen">
          Open AI’s assistant for dynamic web browsing
        </span>{" "}
        to return real time pricing and availability, an algorithm was built
        <span className="text-textGreen">
          evaluate and rank lists of resorts
        </span>{" "}
        based on user input
      </>
    ),
  },

  projectDiamondGoose: {
    title: "Diamond Goose Ad-Suite",
    text: (
      <>
        {" "}
        Developed an application to{" "}
        <span className="text-textGreen">
          extract all images from a given shopify catalogue and perform
          transformations in memory using open source computer vision models
        </span>
        . Hosted the application on{" "}
        <span className="text-textGreen">StreamLit</span> allowing luxury
        clothing brands to readily create instagram ads
      </>
    ),
  },

  archiveTensorFlow: {
    title: "TensorFlow Professional Certification",
    text: "Certification taught by X head of Google covering x,y,z",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/L964KTBHJJW6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof",
    skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
  },

  contactMe: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam",
  },
};
