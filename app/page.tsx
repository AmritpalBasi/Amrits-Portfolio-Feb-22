import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Middle from "@/components/Middle";

export default function Home() {
  return (
    <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] mdl:flex items-center gap-20 justify-between">
        {/* left hand side */}
        <div className="hidden mdl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        {/* middle of screen */}
        <div className="h-[88vh] mx-auto p-4">
          <Middle />
        </div>
        {/* right hand side of screen */}
        <div className="hidden mdl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
