"use client";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="w-full h-screen font-montserrat bg-bodyColor text-textLight
                 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20
                 scrollbar-thumb-textDark/60"
    >
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* left hand side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        {/* middle of screen */}
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          {/* ABOUT */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <About />
          </motion.div>
          {/* EXPERIENCE */}
          <Experience />
          {/* PROJECTS */}
          <Projects />
          {/* ARCHIVE */}
          <Archive />
          {/*  CONTACT */}
          <Contact />
          {/*  FOOTER */}
          <Footer />
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
