import { CLEAR_STATE_VALUE,ERROR_5XX} from "../../Actions/Helpers/helper";

export default function reducer(state={
    experiencedata: [],
    fetching: true
  }, action) {

  switch(action.type) {
    case 'Experience_DATA':
      return {...state,experiencedata:action.payload,fetching:action.fetching};
    case CLEAR_STATE_VALUE:
      return null;
    case ERROR_5XX:
      return null;
  }
  return state;
}