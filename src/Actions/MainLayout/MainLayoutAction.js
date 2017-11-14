import { error5xx,clearStateValue } from "../Helpers/helper";

export function setStepperValue(value) {
	return (dispatch) => {
		dispatch({type:'MainLayout_DATA',payload:value, fetching: false});
  }
}


