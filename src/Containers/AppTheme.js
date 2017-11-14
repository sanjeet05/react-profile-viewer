import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white,blue600, grey900,grey600,grey800,black,blue500} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

const AppTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  },

   charGap:{
    paddingTop: 5,
  },

/************************Common*******************************************/
 paper:{
  padding:'10px 20px 10px 20px',
  margin:'10px 20px 10px 20px',
 },
   

   

/********************************************personal info******************************************/


});


export default AppTheme;