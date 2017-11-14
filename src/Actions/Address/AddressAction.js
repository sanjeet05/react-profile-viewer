import { error5xx,clearStateValue } from "../Helpers/helper";

export function setPresentAddress(personalData) {
	return (dispatch) => {
		dispatch({type:'PresentAddress_DATA',payload:personalData, fetching: false});
  }
}

export function setPermanentAddress(permanentData) {
	console.log('permanentData',permanentData)
	return (dispatch) => {
		dispatch({type:'PermanentAddress_DATA',payload:permanentData, fetching: false});
  }
}

