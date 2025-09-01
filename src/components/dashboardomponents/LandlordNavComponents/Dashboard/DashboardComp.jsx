import Dashboard from "./Dashboard";
import PGDash from "./PGDash";

const DashboardComp = ({ formData }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Dashboard formData={formData} />
      <PGDash />
    </div>
  );
};

export default DashboardComp;
