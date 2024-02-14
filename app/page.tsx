"use client";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* left hand side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        {/* middle of screen */}
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          {/* ABOUT */}
          <About />
          {/* EXPERIENCE */}
          <Experience />
          {/* PROJECTS */}
          <Projects />
          {/* ARCHIVE */}
          {/*  CONTACT */}
          {/*  FOOTER */}
        </div>
        {/* right hand side of screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
