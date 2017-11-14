import { CLEAR_STATE_VALUE,ERROR_5XX} from "../../Actions/Helpers/helper";

export default function reducer(state={
    educationdata: [],
    fetching: true
  }, action) {

  switch(action.type) {
    case 'Education_DATA':
      return {...state,educationdata:action.payload,fetching:action.fetching};
    case CLEAR_STATE_VALUE:
      return null;
    case ERROR_5XX:
      return null;
  }
  return state;
}