import { combineReducers } from 'redux';
import PersonalInfo from './PersonalInfo/PersonalInfoReducer'
import Address from './Address/AddressReducer'
import Education from './Education/EducationReducer'
import Experience from './Experience/ExperienceReducer'
import MainLayoutReducer from './MainLayout/MainLayoutReducer'

export default combineReducers({
   PersonalInfo,
   MainLayoutReducer,
   Address,
   Education,
   Experience,
});
