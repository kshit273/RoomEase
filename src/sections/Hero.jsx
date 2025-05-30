import SearchButton from "../components/SearchButton";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-[-20px] left-[-20px] z-10 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] ">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute bottom-[-250px] right-0 z-10 md:w-[512px] w-[256px]  md:h-[560px] h-[280px]">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* Left section */}
        <header className="flex flex-col md:items-start items-center md:justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-[#1a1a1a]">
                Connecting <span className="text-[#d72638]">you</span>
              </h1>
              <h1 className="text-[#1a1a1a]">to the right</h1>
              <h1 className="text-[#d72638]">room</h1>
            </div>
            <SearchButton />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
