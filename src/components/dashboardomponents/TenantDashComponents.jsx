import React from "react";
import DashboardComp from "./TenantNavComponents/Dashboard/DashboardComp";
import UpdateProfile from "./TenantNavComponents/UpdateProfile/UpdateProfile";
import RoomsHistory from "./TenantNavComponents/RoomsHistory/RoomsHistory";
import ViewLegalDocs from "./TenantNavComponents/ViewLegalDocs/ViewLegalDocs";
import ReferAndEarn from "./TenantNavComponents/ReferAndEarn/ReferAndEarn";
import LeavePG from "./TenantNavComponents/LeavePG/LeavePG";

const TenantDashComponents = ({ user,setUser, bar, formData, setFormData }) => {
  let component;
  switch (bar) {
    case 0:
      component = <DashboardComp formData={formData} />;
      break;
    case 1:
      component = (
        <UpdateProfile
          user={user}
          setUser={setUser}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 2:
      component = <RoomsHistory />;
      break;
    case 3:
      component = <ViewLegalDocs />;
      break;
    case 4:
      component = <ReferAndEarn />;
      break;
    case 5:
      component = <LeavePG />;
      break;
    default:
      component = <DashboardComp />;
      break;
  }

  return component;
};

export default TenantDashComponents;
