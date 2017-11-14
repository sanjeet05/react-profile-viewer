import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class AppBarExampleIcon extends React.Component{

 static contextTypes = {
    router: PropTypes.object
  }

  signup(){
    this.context.router.history.push('/login');
    window.location.reload();
  }

  render(){ 
  	var self=this;
	return(
	  <AppBar style={{backgroundColor:'#00bcd4'}}
	    title="Profile Viewer"
	    iconElementRight={
	    	<IconMenu
			  iconButtonElement={
			    <IconButton><MoreVertIcon /></IconButton>
			  }
			  targetOrigin={{horizontal: 'right', vertical: 'top'}}
			  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			>
			  <MenuItem primaryText="Sign out"  onClick={self.signup.bind(self)}/>
			</IconMenu>
	    }
	  />
	);
  }
}
export default AppBarExampleIcon;