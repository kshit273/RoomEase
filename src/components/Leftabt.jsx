const Leftabt = ({ heading, inner, imgpath }) => {
  return (
    <div className="flex gap-30">
      <div className="flex flex-col gap-8">
        {inner.map((item, x) => (
          <div key={item.subheading + x} className="w-[600px]">
            <h2 className="text-[#D72638] text-[25px] font-medium">
              {item.subheading}
            </h2>
            <p className="text-[#838383] text-[22px] ">{item.para}</p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-[45px] font-medium">{heading}</h3>
        <div className="h-[400px] w-[400px]">
          <img src={imgpath} alt="RoomImg" />
        </div>
      </div>
    </div>
  );
};

export default Leftabt;
