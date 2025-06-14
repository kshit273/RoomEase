import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Plans from "./sections/Plans";
import Search from "./sections/Search";
import Testimonials from "./sections/Testimonials";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const handleNavLinkClick = (name) => {
    if (name === "Find Rooms") {
      setShowSearch(true);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      setShowSearch(false);
    }
  };

  return (
    <>
      {/* Always show the first two background images */}
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute top-[1720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      {/* Only show the rest if NOT in Search mode */}
      {!showSearch && (
        <>
          <div className="absolute top-[3120px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
            <img src="/images/bgimg3.png" alt="background" />
          </div>
          <div className="absolute top-[4720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
            <img src="/images/bgimg3.png" alt="background" />
          </div>
          <div className="absolute bottom-[-250px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
            <img src="/images/bgimg2.png" alt="background" />
          </div>
          <div className="absolute bottom-[-1700px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
            <img src="/images/bgimg2.png" alt="background" />
          </div>
          <div className="absolute bottom-[-3050px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
            <img src="/images/bgimg2.png" alt="background" />
          </div>
        </>
      )}
      <Navbar onNavLinkClick={handleNavLinkClick} />
      {!showSearch && (
        <>
          <Hero />
          <About />
          <Features />
          <Plans />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            key="search"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className=""
          >
            <Search />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
