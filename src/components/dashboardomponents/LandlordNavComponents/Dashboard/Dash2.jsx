import PGAbout from "../../TenantNavComponents/Dashboard/PGAbout";
import PlanDetails from "./PlanDetails";

const Dash2 = ({ formData }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-10">
      <div className="col-span-2">
        <PGAbout formData={formData} />
        <div className="flex items-center justify-center">
          <PlanDetails months={11} days={25} searches={8175} />
        </div>
      </div>
    </div>
  );
};

export default Dash2;
