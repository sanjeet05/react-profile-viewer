import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStepperValue} from '../../Actions/MainLayout/MainLayoutAction';
import Divider from 'material-ui/Divider';
import PersonalDetail from './PersonalDetail';
import AddressDetail from './AddressDetail';
import EducationDetail from './EducationDetail';
import ExperienceDetail from './ExperienceDetail';

import styles from '../AppTheme';

class Profile extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleSubmit=()=>{
    if(this.props.personalinfo.personaldata!=null && this.props.address.presentaddress!=null 
       && this.props.address.permanentaddress!=null && this.props.education.educationdata
       && this.props.experience.experiencedata){
      this.context.router.history.push('/save');
  }else{
    alert('please fill all fields')
  }
      
  }   

	render(){
		var self=this;
    return(
      <div>
        <PersonalDetail />
        <AddressDetail />
        <EducationDetail />
        <ExperienceDetail />
        <Row style={{marginTop:20}}>
          <Col xs={8} sm={9} md={10} >
          </Col>
          <Col xs={4} sm={3} md={2} >
            <RaisedButton label="Save" onClick={self.handleSubmit.bind(self)}/> 
          </Col>
        </Row>
      </div>
	  )
	}
}

Profile.propTypes = {
 
};

function mapStatetoProps(store) {
  return {
    address:store.Address,
    personalinfo:store.PersonalInfo,
    education:store.Education,
    experience:store.Experience,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setStepperValue}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Profile);