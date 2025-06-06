import Data from "../components/Data";
import ReviewCard from "../components/ReviewCard";
import { testimonials } from "../constants/Abt";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-2 ">
      <div className="flex items-center justify-center mt-[150px]">
        <Data />
      </div>
      <div className="flex flex-col items-center justify-center text-[100px] font-medium mt-[50px] text-[#1a1a1a]">
        <div>Words of praise from others</div>
        <div>about our presence</div>
      </div>
      <div className="relative overflow-x-hidden w-full mt-[50px]">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to right, #e8e8e8 10%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to left, #e8e8e8 10%, transparent 100%)",
          }}
        />
        <div
          className="flex gap-[30px] animate-marquee-right "
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((card, idx) => (
            <ReviewCard card={card} key={idx} />
          ))}
        </div>
      </div>
      <div className="relative overflow-x-hidden w-full mt-[20px]">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to right, #e8e8e8 10%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
          style={{
            background:
              "linear-gradient(to left, #e8e8e8 10%, transparent 100%)",
          }}
        />
        <div
          className="flex gap-[30px] animate-marquee-left "
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((card, idx) => (
            <ReviewCard card={card} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
