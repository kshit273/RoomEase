import DashboardComp from "./LandlordNavComponents/Dashboard/DashboardComp";
import UpdateProfile from "./TenantNavComponents/UpdateProfile/UpdateProfile";
import ViewLegalDocs from "./TenantNavComponents/ViewLegalDocs/ViewLegalDocs";

const LandlordDashComponents = ({ user, bar, formData, setFormData }) => {
  let component;
  switch (bar) {
    case 0:
      component = <DashboardComp formData={formData} />;
      break;
    case 1:
      component = <RegisterPG />; // to be created
      break;
    case 2:
      component = (
        <UpdateProfile
          user={user}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 3:
      component = <ViewLegalDocs />;
      break;
    case 4:
      component = <UpgradePlan />; // to be created
      break;
    case 5:
      component = <UpdatePGInfo />; // to be created
      break;
    default:
      component = <DashboardComp />;
      break;
  }

  return component;
};

export default LandlordDashComponents;
