import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  return (
    <main className="w-full h-screen font-montserrat bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        {/* left hand side */}
        <div>
          <LeftSide />
        </div>
        {/* middle of screen */}
        <div></div>
        {/* right hand side of screen */}
        <div></div>
      </div>
    </main>
  );
}
