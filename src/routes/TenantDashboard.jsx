import React, { useState } from "react";
import BackBtn from "../components/dashboardomponents/BackBtn";
import DashboardNav from "../components/dashboardomponents/DashboardNav";
import TenantDashComponents from "../components/dashboardomponents/TenantDashComponents";

const TenantDashboard = () => {
  const [bar, setBar] = useState(0);
  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute top-[1720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <div className="absolute bottom-[-50px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute bottom-[-1000px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>

      <section id="tenantDash" className="relative z-2 pt-[30px]">
        <div className={`w-full flex justify-center `}>
          <div className="w-[98%] h-full pb-[40px] bg-[#e1e1e1] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center px-5">
            <div className="w-full flex items-center justify-start py-5">
              <BackBtn />
            </div>
            <div className="w-full flex ">
              <div className="w-[85%] flex flex-col justify-center items-center ">
                <TenantDashComponents bar={bar} setBar={setBar} />
              </div>
              <div className="w-[15%] min-w-[250px] flex flex-col  items-center ">
                <DashboardNav bar={bar} setBar={setBar} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TenantDashboard;
