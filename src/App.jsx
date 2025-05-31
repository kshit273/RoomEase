import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-10 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute bottom-[-250px] right-0 z-10 md:w-[512px] w-[256px]  md:h-[560px] h-[280px]">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <Hero />
      <About />
    </>
  );
}

export default App;
