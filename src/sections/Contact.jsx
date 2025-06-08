import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden pt-[100px]">
      <div className="bg-[#1a1a1a] h-[1000px] w-full flex">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col items-center">
            <div className="text-[#d9d9d9] font-medium text-[50px] mt-[50px]">
              Get in touch
            </div>
          </div>
          <Form />
        </div>
        <div className="h-full flex items-end">
          <img
            src="./images/contactRoom.png"
            alt=""
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
