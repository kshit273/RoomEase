import React from "react";

function getRentStatus(tenant) {
  const today = new Date();
  const dueDay = new Date(tenant.startingDate).getDate();
  let dueDate = new Date(today.getFullYear(), today.getMonth(), dueDay);
  const dueDateStr = dueDate.toISOString().split("T")[0];

  if (tenant.rentPaid.includes(dueDateStr)) {
    return { text: "Rent Paid", status: "paid" };
  }
  const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
  if (diffDays > 0 && diffDays <= 7) {
    return { text: `Due in ${diffDays} days`, status: "dueSoon" };
  } else if (diffDays < 0) {
    return {
      text: `${Math.abs(diffDays)} days since due date`,
      status: "overdue",
    };
  }
  return { text: "Rent Paid", status: "upcoming" };
}

const RoomTemp = ({ roomNumber, rent, securityDeposit, tenants }) => {
  const isEmpty = tenants.length === 0;

  return (
    <div className="w-full bg-[#e2e2e2] rounded-[20px] p-6">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[24px] font-medium text-[#5c5c5c]">
          Room {roomNumber}
        </p>
        {isEmpty ? (
          <div className="flex gap-4">
            <button className="p-2.5 rounded-[12px] bg-[#cdcdcd]">
              <img
                src="../images/send.png"
                alt=""
                className="h-[15px] w-[15px]"
              />
            </button>
            <button className="p-2.5 rounded-[12px] bg-[#49C800]">
              <img
                src="../images/whitetick.png"
                alt=""
                className="h-[15px] w-[15px]"
              />
            </button>
          </div>
        ) : (
          <button className="bg-[#d72638] p-2 pl-3 pt-2.5 rounded-[12px]">
            <img
              src="../images/logout.png"
              alt=""
              className="h-[18px] w-[18px]"
            />
          </button>
        )}
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          {isEmpty ? (
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-[20px] font-medium text-[#5c5c5c]">
                Tenant name
              </p>
              <p className="text-[20px] font-medium text-[#5c5c5c]">TID</p>
              <p className="text-[20px] font-medium text-[#5c5c5c]">
                Lease period
              </p>
              <p className="text-[18px] text-[#5c5c5c]">No rent status</p>
            </div>
          ) : (
            tenants.map((data, i) => {
              const { text, status } = getRentStatus(data);
              return (
                <div key={i} className="flex flex-col gap-2 mb-4">
                  <p className="text-[20px] font-medium text-[#5c5c5c]">
                    Tenant name
                  </p>
                  <p className="text-[20px] font-medium text-[#5c5c5c]">TID</p>
                  <p className="text-[20px] font-medium text-[#5c5c5c]">
                    Lease period
                  </p>
                  <p
                    style={{
                      color:
                        status === "dueSoon" || status === "overdue"
                          ? "#d72638"
                          : "#49C800",
                      fontWeight: "400",
                    }}
                    className="text-[18px]"
                  >
                    {text}
                  </p>
                </div>
              );
            })
          )}
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-medium text-[#5c5c5c]">Rent</p>
            <p className="text-[20px] font-medium text-[#5c5c5c]">
              Security deposit
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {isEmpty ? (
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex gap-16">
                <p className="text-[20px] text-[#5c5c5c]">Empty</p>
              </div>
              <p className="text-[20px] text-[#5c5c5c]">Empty</p>
              <p className="text-[20px] text-[#5c5c5c]">Empty</p>
              <p className="mb-7"></p>
            </div>
          ) : (
            tenants.map((data, i) => (
              <div key={i} className="flex flex-col gap-2 mb-4">
                <div className="flex gap-16">
                  <p className="text-[20px] text-[#5c5c5c]">{data.name}</p>
                  <div className="flex gap-4">
                    <button className="bg-[#cdcdcd] p-2 rounded-full">
                      <img
                        src="../images/call.png"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </button>
                    <button className="bg-[#cdcdcd] p-2 rounded-full">
                      <img
                        src="../images/message.png"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-[20px] text-[#5c5c5c]">{data.id}</p>
                <p className="text-[20px] text-[#5c5c5c]">{data.leasePeriod}</p>
                <p className="mb-7"></p>
              </div>
            ))
          )}
          <div className="flex flex-col gap-2">
            <p className="text-[20px] text-[#5c5c5c]">{rent}</p>
            <p className="text-[20px] text-[#5c5c5c]">{securityDeposit}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RoomTemp;
