import { CLEAR_STATE_VALUE,ERROR_5XX} from "../../Actions/Helpers/helper";

export default function reducer(state={
    stappervalue: 0,
    fetching: true
  }, action) {

  switch(action.type) {
    case 'MainLayout_DATA':
      return {...state,stappervalue:action.payload,fetching:action.fetching};
    case CLEAR_STATE_VALUE:
      return null;
    case ERROR_5XX:
      return null;
  }
  return state;
}