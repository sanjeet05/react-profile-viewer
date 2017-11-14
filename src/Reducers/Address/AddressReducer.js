import { CLEAR_STATE_VALUE,ERROR_5XX} from "../../Actions/Helpers/helper";

export default function reducer(state={
    presentaddress: null,
    permanentaddress:null,
    fetching: true
  }, action) {

  switch(action.type) {
    case 'PresentAddress_DATA':
      return {...state,presentaddress:action.payload,fetching:action.fetching};
    case 'PermanentAddress_DATA':
      return {...state,permanentaddress:action.payload,fetching:action.fetching};
    case CLEAR_STATE_VALUE:
      return null;
    case ERROR_5XX:
      return null;
  }
  return state;
}