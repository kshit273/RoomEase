import React from "react";
import Dashboard from "./TenantNavComponents/Dashboard/Dashboard";
import LeaveReview from "./TenantNavComponents/Dashboard/LeaveReview";
import SavedPGs from "./TenantNavComponents/Dashboard/SavedPGs";

const TenantDashComponents = () => {
  return (
    <div className="w-full">
      <Dashboard />
      <LeaveReview />
      <SavedPGs />
    </div>
  );
};

export default TenantDashComponents;
