class Menu {
  constructor ({action, setFormData, setModalAction, setModal, type, refresh}) {

  this.action = action;
  this.setModalAction = setModalAction;
  this.refresh = refresh;
  this.setModal = setModal;
  this.setFormData = setFormData;
  this.type = type;
 }

 edit ({ navigate, action, route, name}){
  return {
    text: "Edit",
    action: (_, state) => {
      action?.(state)
      navigate(route+'/'+state['id' || name]+'/edit', { state: { editable: true, ...state }})
    }
 }  
}
view ({ navigate, action, route, name}){
  return {
    text: `View ${name || 'Profile'}`,
    action: (_, state) => {
      action?.(state)
      navigate(route+'/'+state.id, { state })
    }
 }
}
cancelPlan ({ action }) {
  return {
    text: `Cancel Plan`,
    condition: (state) => state._data.companyuserplans !== null,
    action: (_, state) => {
      action?.(state)
    }
 }
}
deleteHmoPlan ({ action }) {
  return {
    text: `Delete`,
    action: (_, state) => {
      action?.(state)
    }
 }
}
deactivateHmo ({ action }) {
  return {
    text: `Deactivate`,
    condition: (state) => state._data.status === true,
    action: (_, state) => {
      action?.(state)
    }
 }
}

activateHmo ({ action }) {
  return {
    text: `Activate`,
    condition: (state) => state._data.status === false,
    action: (_, state) => {
      action?.(state)
    }
 }
}

completedAppointment ({ action }) {
  return {
    text: `Completed`,
    condition: (state) => state._data.status === "booked",
    action: (_, state) => {
      action?.(state)
    }
 }
}

bookedAppointment ({ action }) {
  return {
    text: `Booked`,
    condition: (state) => state._data.status === "completed",
    action: (_, state) => {
      action?.(state) 
    }
 }
}

addEmployeePlan ({ action }) {
  return {
    text: `Add Plan`,
    condition: ({_data}, option) => _data.companyuserplans === null,
    action: (_, state) => {
      action?.(state)
    }
 }
}
addHospitalsToPlan ({ action }) {
  return {
    text: `Add Hospitals`,
    action: (_, state) => {
      action?.(state)
    }
 }
}
delete ({ action, type }) {
  return {
    text: `Delete ${type || ''}`,
    action: (_, state) => {
      action?.(state)
    }
 }
}

remove ({ action, type }) {
  return {
    text: `Remove ${type || ''}`,
    action: (_, state) => {
      action?.(state)
    }
 }
}
 /***  |    HOSPITAL PROFILE | ***/
 viewHospitalProfile({navigate, routes: {hospitals: { hospital }}}){
  return {
    text: "View Profile",
    action: (_, state) => navigate(hospital+'/'+state.id, { state }),
  }
 }

 /***  | VIEW COMPANY EMPLOYEE CONSULTATIONS  | ***/
 viewEmployeeConsultations ({ navigate, action, routes, name}){
  return {
    text: `View ${name || 'Consultations'}`,
    action: (_, state) => {
      action?.(state)
      navigate(routes?.companies?.employees?.consultations?.consultation+'/'+state.id, { state })
    }
 }
}



  /***  |    CREATE CONSULTATION | ***/
 createConsultation({navigate, routes: {hospitals: { patients }}}) {
  return {
    text: "New Consultation",
    action: (_, state) => navigate(patients.consultations.consultation+'/'+state.id, { state }),
  }
 }

 /***  |   CONSULTATION HISTORY | ***/
 viewConsultationHistory({navigate, routes: {hospitals: { patients }}}){
  return {
    text: "View Consultations",
    action: (_, state) => navigate(patients.consultations.history, { state }),
  }
 }

 /***  |  CONSULTATION  DETAILS| ***/
 viewConsultationProfile({navigate, routes: {hospitals: { patients }}}){
  return {
    text: "View Details",
    action: (_, state) => navigate(patients.consultations.view, { state }),
  }
 }

  /***  |    COMPANY PLAN DETAILS | ***/
 viewCompanyPlanDetails({navigate, routes: {companies: { plans }}}){
  return {
    text: "View Plan",
    action: (_, state) => navigate(plans.view, { state }),
  }
 }

 /***  |    HMO PROFILE | ***/
 viewHmoProfile({navigate, routes: {hmos: { hmo }}}){
  return {
    text: "View Profile",
    action: (_, state) => navigate(hmo+'/'+state.id, { state }),
  }
 }


 /***  |    COMPANY PROFILE | ***/
 viewCompanyProfile({navigate, routes: {companies: { company }}}){
  return {
    text: "View Profile",
    action: (_, state) => navigate(company+'/'+state.id, { state }),
  }
 }
}
export default Menu;