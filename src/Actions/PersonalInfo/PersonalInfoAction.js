import { error5xx,clearStateValue } from "../Helpers/helper";

export function setPersonalInfoData(personalData) {
	return (dispatch) => {
		dispatch({type:'PersonalInfo_DATA',payload:personalData, fetching: false});
  }
}


