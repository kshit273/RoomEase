import MapComp from "../components/MapComp";
import OwnerCard from "../components/OwnerCard";
import PgReview from "../components/PgReview";
import ShowRooms from "../components/ShowRooms";
import { Houses } from "../constants/Houses";
import Footer from "./Footer";
import { Details } from "../constants/PgData";
import { services, Services } from "../constants/Services";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const PgInfo = () => {
  const { RID } = useParams();
  const navigate = useNavigate();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);
  const [zoomImgIndex, setZoomImgIndex] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const house = Houses.find((item) => item.RID === RID);
  const details = Details.find((item) => item.RID === RID);
  const PgServices = Services.find((item) => item.RID === RID);

  const handleNext = () => {
    if (!details?.imgPaths || zoomImgIndex === null) return;
    if (zoomImgIndex < details.imgPaths.length - 1) {
      const nextIndex = zoomImgIndex + 1;
      setZoomImgIndex(nextIndex);
      setZoomImg(details.imgPaths[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (!details?.imgPaths || zoomImgIndex === null) return;
    if (zoomImgIndex > 0) {
      const prevIndex = zoomImgIndex - 1;
      setZoomImgIndex(prevIndex);
      setZoomImg(details.imgPaths[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomImgIndex !== null) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") {
          setZoomImg(null);
          setZoomImgIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImgIndex]);

  useEffect(() => {
    if (isOverlayOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      document.body.dataset.scrollY = scrollY;
    } else {
      const scrollY = document.body.dataset.scrollY || "0";

      // Reset styles first!
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      // Now scroll back to where user was
      window.scrollTo(0, parseInt(scrollY));
      delete document.body.dataset.scrollY;
    }
  }, [isOverlayOpen]);

  if (!house) {
    return (
      <div className="text-center text-lg text-red-500 pt-10">
        PG not found.
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[50px] flex justify-start items-center mt-[110px] pl-[30px] ">
        <button onClick={() => navigate(-1)} className="flex items-center">
          <img
            src="/images/backArrow.png"
            alt=""
            className="h-[30px] w-[30px] cursor-pointer hover:scale-120 duration-300"
          />
        </button>
      </div>
      <section id="PgInfo" className="relative z-2 ">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-2 gap-8  p-4 rounded-2xl w-[95%] h-[800px]">
            <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden ">
              <img
                src={`/images/PgInfoImgs/${RID}/mainImg.jpg`}
                alt="Main"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
              <img
                src={`/images/PgInfoImgs/${RID}/img1.jpg`}
                alt="img1"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
              <img
                src={`/images/PgInfoImgs/${RID}/img2.jpg`}
                alt="img2"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden ">
              <img
                src={`/images/PgInfoImgs/${RID}/img3.jpg`}
                alt="img3"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden  relative">
              <img
                src={`/images/PgInfoImgs/${RID}/img4.jpg`}
                alt="img4"
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                onClick={() => setIsOverlayOpen(true)}
                className="absolute bottom-3 right-3 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                Show all photos
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-[60px] justify-between">
          <div className="info flex flex-col ">
            <div className="leftInfo ml-[60px] max-w-[1300px] w-full">
              <div className="main ">
                <div className="head text-[45px] font-medium text-[#1a1a1a] mb-[5px]">
                  {house?.head || details?.PgName || "PG Info"}
                </div>
                <div className="address font-normal text-[22px] w-[500px] text-[#2a2a2a] ">
                  {details?.Address}
                </div>
                <div className="rating mb-[40px] flex items-center gap-[10px]">
                  <div className="stars flex items-center gap-1 py-[8px]">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < Math.round(house?.review ?? 0)
                            ? "/images/star-filled.png"
                            : "/images/star-empty.png"
                        }
                        alt="star"
                        className="w-[20px] h-[20px]"
                      />
                    ))}
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
                      src="/images/send.png"
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
              <div className="desc flex flex-col gap-[5px] mt-[30px]">
                <div className="head text-[35px] font-medium ">
                  Things to be kept in mind
                </div>
                <div className="para flex flex-col gap-[10px]">
                  {house.extras.map((prop, idx) => (
                    <div className="flex gap-[10px] items-center" key={idx}>
                      <div className="h-[10px] w-[10px] rounded-full bg-[#1a1a1a]"></div>
                      <div className="text-[19px] text-[#6c6c6c]">{prop}</div>
                    </div>
                  ))}
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

                  if (matchedServices.length <= 4) {
                    return (
                      <div className="flex flex-col gap-y-5 mt-[20px] max-w-[400px]">
                        {matchedServices.map((matchedService, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-[15px]"
                          >
                            <img
                              src={
                                matchedService.imgPath.startsWith("./")
                                  ? matchedService.imgPath.replace("./", "/")
                                  : matchedService.imgPath
                              }
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
                  }
                  return (
                    <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-[20px] max-w-[400px]">
                      {matchedServices.map((matchedService, idx) => (
                        <div key={idx} className="flex items-center gap-[15px]">
                          <img
                            src={
                              matchedService.imgPath.startsWith("./")
                                ? matchedService.imgPath.replace("./", "/")
                                : matchedService.imgPath
                            }
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

            <div className="rooms ml-[60px] mt-[30px]">
              <ShowRooms RID={RID} />
            </div>
          </div>
          <div className="rightInfo min-w-[565px] max-w-[565px]">
            <div className="sticky top-[150px] flex flex-col gap-[20px]">
              <OwnerCard RID={RID} />
              <MapComp RID={RID} />
            </div>
          </div>
        </div>

        <div>
          <PgReview RID={RID} />
        </div>
        <div className="w-[100vw] flex items-center justify-center my-[20px]">
          <div className="h-[1.5px] w-[80vw] bg-[#a4a4a4]"></div>
        </div>
        <Footer />
        {isOverlayOpen &&
          ReactDOM.createPortal(
            <div className="fixed inset-0 z-[9999999] bg-[rgba(0,0,0,0.7)] bg-transparent-90 flex items-center justify-center p-8">
              {!zoomImg ? (
                <div className="relative bg-[#d7d7d7] rounded-xl w-[80vw] h-[80vh] overflow-auto p-[20px] shadow-2xl  no-scrollbar">
                  <button
                    onClick={() => {
                      setIsOverlayOpen(false);
                      setZoomImg(null);
                    }}
                    className="absolute top-3 right-4 text-black text-2xl font-bold"
                  >
                    ✕
                  </button>
                  {details?.imgPaths?.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-9 auto-rows-[310px]">
                      {details.imgPaths.map((img, i) => (
                        <img
                          key={i}
                          src={
                            img.startsWith("./") ? img.replace("./", "/") : img
                          }
                          alt={`pg-img-${i}`}
                          className={`w-full h-full object-cover rounded-lg cursor-pointer ${
                            i === 0 ? "col-span-2 row-span-2" : ""
                          }`}
                          onClick={() => {
                            setZoomImg(img);
                            setZoomImgIndex(i);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={
                      zoomImg.startsWith("./")
                        ? zoomImg.replace("./", "/")
                        : zoomImg
                    }
                    alt="zoom"
                    className="max-w-[85vw] max-h-[75vh] object-contain rounded-lg"
                  />
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full shadow-md"
                    disabled={zoomImgIndex === 0}
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full shadow-md"
                    disabled={zoomImgIndex === details.imgPaths.length - 1}
                  >
                    →
                  </button>
                  <button
                    className="text-[#d7d7d7] font-medium underline"
                    onClick={() => {
                      setZoomImg(null);
                      setZoomImgIndex(null);
                    }}
                  >
                    Back to all photos
                  </button>
                </div>
              )}
            </div>,
            document.getElementById("overlay-root")
          )}
      </section>
    </>
  );
};

export default PgInfo;
