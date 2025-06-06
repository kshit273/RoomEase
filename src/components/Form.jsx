const Form = () => {
  return (
    <div className="flex-1 h-full flex flex-col justify-center mx-[50px] mt-[50px]">
      <form
        action="submit"
        className="w-full h-full flex flex-col justify-center"
      >
        <div className="h-full w-full flex flex-col gap-[30px]">
          <div className="flex gap-[50px]">
            <input
              type="text"
              className="flex-1 w-full border-[2px] border-[#707070] rounded-[10px] h-[70px] text-[#d9d9d9] font-medium text-[20px] pl-[15px] placeholder-[#d9d9d9] placeholder:font-medium placeholder:text-[20px] placeholder:pl-[15px] bg-transparent"
              placeholder="First name"
            />
            <input
              type="text"
              className="flex-1 w-full border-[2px] border-[#707070] rounded-[10px] h-[70px] text-[#d9d9d9] font-medium text-[20px] pl-[15px] placeholder-[#d9d9d9] placeholder:font-medium placeholder:text-[20px] placeholder:pl-[15px] bg-transparent"
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full border-[2px] border-[#707070] rounded-[10px] h-[70px] text-[#d9d9d9] font-medium text-[20px] pl-[15px] placeholder-[#d9d9d9] placeholder:font-medium placeholder:text-[20px] placeholder:pl-[15px] bg-transparent"
              placeholder="Your email"
            />
          </div>
          <div>
            <textarea
              className="w-full border-[2px] border-[#707070] rounded-[10px] h-[490px] text-[#d9d9d9] font-medium text-[20px] pl-[25px] pt-[25px] placeholder-[#d9d9d9] placeholder:font-medium placeholder:text-[20px]  resize-none bg-transparent"
              placeholder="Your message"
            />
          </div>
          <button className="bg-[#d72638] font-medium text-[#d9d9d9] text-[20px] rounded-[10px] h-[50px] w-[140px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
