import DashboardComp from "./LandlordNavComponents/Dashboard/DashboardComp";
import RegisterPG from "./LandlordNavComponents/RegisterPG/RegisterPG";
import UpgradePlan from "./LandlordNavComponents/UpgradePlan/UpgradePlan";
import UpdateProfile from "./TenantNavComponents/UpdateProfile/UpdateProfile";
import UpdatePGInfo from "./LandlordNavComponents/UpdatePGInfo/UpdatePGInfo";
import ViewLegalDocs from "./TenantNavComponents/ViewLegalDocs/ViewLegalDocs";

const LandlordDashComponents = ({setBar, user,setUser, bar, formData, setFormData ,coords}) => {
  let component;
  switch (bar) {
    case 0:
      component = <DashboardComp formData={formData} />;
      break;
    case 1:
      component = <RegisterPG coords={coords} setBar={setBar}/>;
      break;
    case 2:
      component = (
        <UpdateProfile
          setUser={setUser}
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
      component = <UpgradePlan />;
      break;
    case 5:
      component = <UpdatePGInfo />;
      break;
    default:
      component = <DashboardComp />;
      break;
  }

  return component;
};

export default LandlordDashComponents;
