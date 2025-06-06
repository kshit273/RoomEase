import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute top-[1720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <div className="absolute top-[3120px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <div className="absolute top-[4720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <div className="absolute bottom-[-250px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px]">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute bottom-[-1700px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px]">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute bottom-[-3050px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px]">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <Hero />
      <About />
      <Features />
      <Plans />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
