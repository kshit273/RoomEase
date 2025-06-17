import MapComp from "../components/MapComp";
import OwnerCard from "../components/OwnerCard";
import { Recommended, InCity, NearArea } from "../constants/Houses";
import {
  RecommendedDetails,
  InCityDetails,
  NearAreaDetails,
} from "../constants/PgData";
import {
  RecommendedPgServices,
  InCityPgServices,
  NearAreaPgServices,
  services,
} from "../constants/Services";

const PgInfo = ({ RID }) => {
  const house =
    Recommended.find((item) => item.RID === RID) ||
    InCity.find((item) => item.RID === RID) ||
    NearArea.find((item) => item.RID === RID);

  const details =
    RecommendedDetails.find((item) => item.RID === RID) ||
    InCityDetails.find((item) => item.RID === RID) ||
    NearAreaDetails.find((item) => item.RID === RID);

  const PgServices =
    RecommendedPgServices.find((item) => item.RID === RID) ||
    InCityPgServices.find((item) => item.RID === RID) ||
    NearAreaPgServices.find((item) => item.RID === RID);

  return (
    <section id="PgInfo" className="relative z-2 pt-[100px] px-6">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-8  p-4 rounded-2xl w-[95%] h-[800px]">
          <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden">
            <img
              src={`./images/PgInfoImgs/${RID}/mainImg.jpg`}
              alt="Main"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
            <img
              src={`./images/PgInfoImgs/${RID}/img1.jpg`}
              alt="img1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
            <img
              src={`./images/PgInfoImgs/${RID}/img2.jpg`}
              alt="img2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
            <img
              src={`./images/PgInfoImgs/${RID}/img3.jpg`}
              alt="img3"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden  relative">
            <img
              src={`./images/PgInfoImgs/${RID}/img4.jpg`}
              alt="img4"
              className="w-full h-full object-cover rounded-2xl"
            />
            <button className="absolute bottom-3 right-3 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow text-sm font-medium flex items-center gap-2">
              Show all photos
            </button>
          </div>
        </div>
      </div>
      <div className="info flex  justify-between">
        <div className="leftInfo ml-[60px] w-[1300px]">
          <div className="main ">
            <div className="head text-[45px] font-medium text-[#1a1a1a] mb-[5px]">
              {house?.head || details?.PgName || "PG Info"}
            </div>
            <div className="address font-normal text-[22px] w-[500px] text-[#2a2a2a] ">
              {details?.Address}
            </div>
            <div className="rating mb-[40px] flex items-center gap-[10px]">
              <div className="stars flex items-center gap-1 py-[8px]">
                {[...Array(5)].map((_, i) =>
                  i < house.review ? (
                    <img
                      key={i}
                      src="./images/star-filled.png"
                      alt="star"
                      className="w-[20px] h-[20px]"
                    />
                  ) : (
                    <img
                      key={i}
                      src="./images/star-empty.png"
                      alt="star-empty"
                      className="w-[20px] h-[20px]"
                    />
                  )
                )}
              </div>
              <div className="ratingNumber text-[20px] text-[#4d4d4d] flex items-center justify-center pt-[5px] font-medium">
                <p>({house.review})</p>
              </div>
            </div>
            <div className="buttons flex gap-[15px]">
              <button className="h-[60px] w-[240px] bg-gradient-to-r from-[#d72638] to-[#ff0084] text-[20px] text-white font-medium rounded-full shadow">
                Save for later
              </button>
              <button className="h-[60px] w-[60px] bg-[#d9d9d9] rounded-full flex items-center justify-center">
                <img
                  src="./images/send.png"
                  alt="share"
                  className="h-[25px] w-[25px]"
                />
              </button>
            </div>
          </div>
          <div className="desc flex flex-col gap-[5px] mt-[30px]">
            <div className="head text-[35px] font-medium">Description</div>
            <div className="para text-[19px] text-[#6c6c6c] ">
              {house.description}
            </div>
          </div>
          <div className="services mt-[30px]">
            <div className="head text-[35px] font-medium">
              Services provided
            </div>
            {(() => {
              const matchedServices = PgServices.services
                .map((service) => services.find((s) => s.name === service))
                .filter(Boolean)
                .slice(0, 10);

              return (
                <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-[20px] max-w-[400px]">
                  {matchedServices.map((matchedService, idx) => (
                    <div key={idx} className="flex items-center gap-[15px]">
                      <img
                        src={matchedService.imgPath}
                        alt={matchedService.name}
                        className="h-[35px] w-[35px]"
                      />
                      <div className="text-[#6c6c6c] text-[19px]">
                        {matchedService.name}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
        <div className="rightInfo mr-[60px] flex flex-col gap-[20px]">
          <OwnerCard RID={RID} />
          <MapComp RID={RID} />
        </div>
      </div>
    </section>
  );
};

export default PgInfo;
