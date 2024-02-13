import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  return (
    <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* left hand side */}
        <div className="hidden md:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        {/* middle of screen */}
        <div>
          <div className="bg-red-300">test</div>
        </div>
        {/* right hand side of screen */}
        <div>
          <div className="bg-amber-300">test</div>
        </div>
      </div>
    </main>
  );
}
