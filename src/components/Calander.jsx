const AvailableFromCalendar = ({ date }) => {
  if (!date || date === "0" || date === "0-0-0") {
    return (
      <div className="bg-[#d3d3d3] w-full h-[350px] rounded-[30px]  mx-auto shadow-md grid items-center justify-center">
        <p className="text-center text-[#d72638] text-[28px] font-medium">
          Not available
        </p>
      </div>
    );
  }

  const [year, month, day] = date.split("-").map(Number);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const totalDays = getDaysInMonth(month, year);
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="bg-[#d3d3d3] p-4 rounded-[30px] w-fit mx-auto shadow-md">
      <h2 className="text-[28px] text-center text-[#4b4b4b] font-medium">
        Available from
      </h2>
      <p className="text-center text-[#d72638] text-[20px] mt-[-5px] font-medium">
        {monthName}
      </p>

      <div className="grid grid-cols-9 gap-4 mt-4">
        {days.map((d) => (
          <div
            key={d}
            className={`w-[40px] h-[40px] flex items-center justify-center rounded-full  text-[14px]
              ${
                d >= day
                  ? "bg-[#464646] text-white"
                  : " text-[#1a1a1a] border-[1px] border-[#1a1a1a]"
              }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFromCalendar;
