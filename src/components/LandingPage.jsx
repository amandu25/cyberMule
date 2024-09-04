import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Cards from "./Cards";
function LandingPage() {
  return (
    <div className="bg-[#02152d] h-[100%]">
      <div className="bg-[#02152d] ml-[220px] ">
        <Navbar></Navbar>
        <HeroSection />
        <Cards />
      </div>
    </div>
  );
}

export default LandingPage;
