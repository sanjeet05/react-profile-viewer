import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPersonalInfoData} from '../../Actions/PersonalInfo/PersonalInfoAction';
import Edit from 'material-ui/svg-icons/image/edit';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class PersonalDetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {dob: moment(),editable:false};
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
  
  editable=()=>{
    this.setState({editable:!this.state.editable})
  }

  handleDate=(date)=> {
    this.setState({
      dob: date
    },function(){
      this.update();
    });
  }

  update=()=>{
    var fname=this.refs.fname.value;
    var lname=this.refs.lname.value;
    var fathernm=this.refs.fathernm.value;
    var mothernm=this.refs.mothernm.value;
    var dob=this.state.dob;
    this.props.setPersonalInfoData({fname:fname,
      lname:lname,fathernm:fathernm,mothernm:mothernm,dob:dob});
  }

	render(){
		var self=this;
    const {personalinfo}=this.props;
    return(
      <Grid>
        <Row style={{marginBottom:0}}>
          <Col xs={4} sm={3} md={3}>
            <h4>Personal Information</h4>
          </Col>
          <Col xs={4} sm={1} md={1} style={{position:'relative',top:'15px',cursor:'pointer',right:'40px'}}>
            <Edit onClick={self.editable.bind(self)}/>
          </Col>
        </Row>

        <Row style={{marginBottom:10,marginLeft:0,marginRight:0,marginTop:0}}>
          <Col xs={6} sm={2} md={2}>
            <label>First Name :</label>
          </Col>
        {!self.state.editable?  
          <Col xs={3} sm={3} md={2}>
            <label>{personalinfo.personaldata!=null?personalinfo.personaldata.fname:''}</label>
          </Col>
        : <Col xs={3} sm={3} md={2}>
           <input type="text" value={personalinfo.personaldata!=null?personalinfo.personaldata.fname:''} 
            ref='fname' style={{width:'140px'}} onChange={self.update.bind(self)} onKeyPress={self.restrictTextField.bind(self)}/>
          </Col>}
          <Col xs={6} sm={2} md={2}>
            <label>Last Name :</label>
          </Col>
        {!self.state.editable?  
          <Col xs={3} sm={3} md={2}>
            <label>{personalinfo.personaldata!=null?personalinfo.personaldata.lname:''}</label>
          </Col>
        : <Col xs={3} sm={3} md={2}>
           <input type="text" value={personalinfo.personaldata!=null?personalinfo.personaldata.lname:''}
            ref='lname' style={{width:'140px'}} onChange={self.update.bind(self)} onKeyPress={self.restrictTextField.bind(self)}/>
          </Col>}
        </Row>

        <Row style={{marginBottom:10,marginLeft:0,marginRight:0,marginTop:0}}>
          <Col xs={6} sm={2} md={2}>
            <label>FatherS Name :</label>
          </Col>
        {!self.state.editable?    
          <Col xs={3} sm={3} md={2}>
            <label>{personalinfo.personaldata!=null?personalinfo.personaldata.fathernm:''}</label>
          </Col>
        : <Col xs={3} sm={3} md={2}>
           <input type="text" value={personalinfo.personaldata!=null?personalinfo.personaldata.fathernm:''}
            ref='fathernm' style={{width:'140px'}} onChange={self.update.bind(self)} onKeyPress={self.restrictTextField.bind(self)}/>
          </Col>}
          <Col xs={6} sm={2} md={2}>
            <label>Mother Name :</label>
          </Col>
        {!self.state.editable?   
          <Col xs={3} sm={3} md={2}>
            <label>{personalinfo.personaldata!=null?personalinfo.personaldata.mothernm:''}</label>
          </Col>
        : <Col xs={3} sm={3} md={2}>
           <input type="text" value={personalinfo.personaldata!=null?personalinfo.personaldata.mothernm:''}
            ref='mothernm' style={{width:'140px'}} onChange={self.update.bind(self)} onKeyPress={self.restrictTextField.bind(self)}/>
          </Col>}  
        </Row>

        <Row style={{marginBottom:10,marginLeft:0,marginRight:0,marginTop:0}}>
          <Col xs={6} sm={2} md={2}>
            <label>Date of Birth :</label>
          </Col>
        {!self.state.editable?     
          <Col xs={3} sm={6} md={6}>
            <label>November 29 1993</label>
          </Col>
        :<Col xs={3} sm={6} md={6}>
            <DatePicker selected={personalinfo.personaldata!=null?personalinfo.personaldata.dob
              :this.state.dob} onChange={self.handleDate.bind(self)}  
              dateFormat="LL" shouldCloseOnSelect={false}
            />
         </Col>}
        </Row>

      </Grid>
	  )
	}
}

PersonalDetail.propTypes = {
 setPersonalInfoData: PropTypes.func.isRequired,
 personalinfo:PropTypes.object.isRequired,
};

function mapStatetoProps(store) {
  return {
    personalinfo:store.PersonalInfo,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setPersonalInfoData}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(PersonalDetail);