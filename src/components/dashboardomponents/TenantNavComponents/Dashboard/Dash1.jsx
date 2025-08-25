import React from "react";
import UserProfile from "./UserProfile";
import PaymentAbout from "./PaymentAbout";

const Dash1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <UserProfile />
      <PaymentAbout />
    </div>
  );
};

export default Dash1;
