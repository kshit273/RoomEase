import { OwnerDetails } from "../constants/Owners";

const OwnerCard = ({ RID }) => {
  const Owner = OwnerDetails.find((owner) => owner.RID === RID);
  if (!Owner) {
    return <div>Owner not found</div>;
  }
  return (
    <div className="card bg-[#d9d9d9] w-[500px] h-[220px] rounded-[20px] px-[30px] py-[10px]">
      <div className="top flex items-center justify-between">
        <div className="head text-[30px] font-medium  mt-[5px]">Managed By</div>
        <div className="buttons flex gap-[10px]">
          <button className="call w-[40px] h-[40px] hover:bg-[#b3b3b3] rounded-full flex items-center justify-center duration-300">
            <img
              src="/images/call.png"
              alt="call"
              className="h-[27px] w-[27px]"
            />
          </button>
          <button className="message w-[40px] h-[40px] hover:bg-[#b3b3b3] rounded-full flex items-center justify-center duration-300">
            <img
              src="/images/message.png"
              alt="message"
              className="h-[27px] w-[27px]"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-[20px] mt-[15px]">
        <div className="img">
          <img
            src={`/images/PgInfoImgs/${RID}/profile.jpg`}
            alt=""
            className="h-[110px] w-[110px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[21px] text-[#8a8a8a] ">{Owner.name}</p>
          <p className="text-[21px] text-[#8a8a8a] ">+91 {Owner.mobile}</p>
          <p className="text-[21px] text-[#8a8a8a] ">{Owner.mail}</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
