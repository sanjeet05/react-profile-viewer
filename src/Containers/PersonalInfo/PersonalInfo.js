import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStepperValue} from '../../Actions/MainLayout/MainLayoutAction';
import {setPersonalInfoData} from '../../Actions/PersonalInfo/PersonalInfoAction';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class PersonalInfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dob: moment()
    };
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
  
  } 
  componentWillReceiveProps(nextProps){
   
  }

  restrictTextField(e){
    const re = /[a-zA-Z\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('special characters and number not allow')
    }
  } 

  handleTextFiled(){
  	var fname=this.refs.fname.getValue();
    var lname=this.refs.lname.getValue();
    var fathernm=this.refs.fathernm.getValue();
    var mothernm=this.refs.mothernm.getValue();
    var dob=this.state.dob;
    this.props.setPersonalInfoData({fname:fname,
      lname:lname,fathernm:fathernm,mothernm:mothernm,dob:dob});
    this.props.setStepperValue(0);
	}

  handleDate(date) {
    this.setState({
      dob: date
    },function(){
      this.handleTextFiled();
    });
  }

  handleSubmit(){
    if(this.refs.fname.getValue().trim() !='' && this.refs.lname.getValue().trim() !='' && 
       this.refs.fathernm.getValue().trim()!='' && this.refs.mothernm.getValue().trim() !='' 
       && this.state.dob!=null){
       this.props.setStepperValue(1);
       this.context.router.history.push('/address');
   }else{
      alert('Please select all field');
   }
  }


	render(){
		var self=this;
    return(
        <div style={{marginBottom:'50px'}}>
          <Row>
            <Col md={12}>
              <h3>Personal Information</h3>  
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="First Name"
               floatingLabelText="First Name"  fullWidth={true}
               value={self.props.personalInfo.personaldata!=null?self.props.personalInfo.personaldata.fname:''} 
               ref="fname" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="Last Name"
               floatingLabelText="Last Name"  fullWidth={true}
               value={self.props.personalInfo.personaldata!=null?self.props.personalInfo.personaldata.lname:''} 
               ref="lname" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="Father Name"
               floatingLabelText="Father Name"  fullWidth={true}
               value={self.props.personalInfo.personaldata!=null?self.props.personalInfo.personaldata.fathernm:''} 
               ref="fathernm" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="Mother Name"
               floatingLabelText="Mother Name"  fullWidth={true}
               value={self.props.personalInfo.personaldata!=null?self.props.personalInfo.personaldata.mothernm:''} 
               ref="mothernm" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          </Row>


          <Row style={{marginTop:20,marginBottom:30,marginLeft:'0px',marginRight:'0px'}}>
            <Col xs={6} sm={5} md={3} style={{marginTop:'10px'}}>
              <div style={{float:'left',position:'relative',top:'2px',right:'5px'}}>
                <span style={{color: '#b3aeae'}}>D.O.B:</span>
              </div>
              <DatePicker selected={self.props.personalInfo.personaldata!=null?self.props.personalInfo.personaldata.dob
                :this.state.dob} onChange={self.handleDate.bind(self)} 
                 dateFormat="LL" shouldCloseOnSelect={false}
              />
            </Col>
            <Col xs={3} sm={1} md={3}>
            </Col>
            <Col xs={3} sm={3} md={3} style={{marginTop:5}}>
              <RaisedButton label="Next" onClick={self.handleSubmit.bind(self)}/> 
            </Col>
          </Row>   
          <Divider /> 
        </div>
	  )
	}
}

PersonalInfo.propTypes = {
  setPersonalInfoData: PropTypes.func.isRequired,
  personalInfo:PropTypes.object.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    personalInfo:store.PersonalInfo,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setPersonalInfoData,setStepperValue}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(PersonalInfo);