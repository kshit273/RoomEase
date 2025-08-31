import React from "react";
import Dashboard from "./Dashboard";
import LeaveReview from "./LeaveReview";
import SavedPGs from "./SavedPGs";

const DashboardComp = ({ formData }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Dashboard formData={formData} />
      <SavedPGs />
      <LeaveReview />
    </div>
  );
};

export default DashboardComp;
