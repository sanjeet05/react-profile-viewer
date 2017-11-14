import { error5xx,clearStateValue } from "../Helpers/helper";

export function setEducationDetails(educationData) {
	return (dispatch) => {
		dispatch({type:'Education_DATA',payload:educationData, fetching: false});
  }
}
