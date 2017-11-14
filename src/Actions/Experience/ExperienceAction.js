import { error5xx,clearStateValue } from "../Helpers/helper";

export function setExperienceDetails(experiencedata) {
	return (dispatch) => {
		dispatch({type:'Experience_DATA',payload:experiencedata, fetching: false});
  }
}
