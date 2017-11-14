import React from 'react';
import ReactDOM from 'react-dom';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {setExperienceDetails} from '../../Actions/Experience/ExperienceAction';
import {setStepperValue} from '../../Actions/MainLayout/MainLayoutAction';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSub from 'material-ui/svg-icons/content/remove';
import styles from '../AppTheme';

class Experience extends React.Component{

  constructor(props) {
    super(props);
    this.state = {company:'',experience:''};
  }

  static contextTypes = {
    router: PropTypes.object
  }


  restrictExperience(e){
    const re = /[0-9a-zA-Z\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('Special characters and alphabets not allow')
    }
  } 

  restrictTextField(e){
    const re = /[a-zA-Z-_#\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('special characters and number not allow')
    }
  } 

  handleTextFiled(){
    var company=this.refs.company.getValue();
    var experience=this.refs.experience.getValue();
    this.setState({company:company,experience:experience});
    this.props.setStepperValue(3);
  }


  handleSubmit(){
   if(this.refs.company.getValue().trim()!='' && this.refs.experience.getValue().trim()!=''){
      var addList=this.props.experience.experiencedata;
      var experiencedata={
        company:this.state.company,
        experience:this.state.experience,
      }
      addList.push(experiencedata);
      this.props.setExperienceDetails(addList);
      this.props.setStepperValue(4);
      this.context.router.history.push('/profile');
   }else{
    alert('Please select all field');
   } 
  }

  add(){
    if(this.refs.company.getValue().trim()!='' && this.refs.experience.getValue().trim()!=''){  
      var addList=this.props.experience.experiencedata;
      var experiencedata={
        company:this.state.company,
        experience:this.state.experience,
      }
      addList.push(experiencedata);
      this.props.setExperienceDetails(addList);
      //this.setState({company:'',experience:''})
    }else{
    alert('Please select all field');
   } 
  }

  minus(){
    var subList=this.props.experience.experiencedata;
    subList.splice(subList.length-1,1)
    this.props.setExperienceDetails(this.props.experience.experiencedata);
  }

	render(){
		var self=this;
    const {experience}=self.props
    return(
        <div style={{marginBottom:'50px'}}>
          <Row>
            <Col md={12}>
              <h3>Experience</h3>  
            </Col>
          </Row>

          <Row style={{marginTop:20}}>
            <Col xs={3} sm={3} md={3} >
              <RaisedButton label="Next" onClick={self.handleSubmit.bind(self)}/> 
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={4} md={4}>
              <TextField
               hintText="Company"
               floatingLabelText="Company"  fullWidth={true}
               value={self.state.company} 
               ref="company" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
              /><br/>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <TextField
               hintText="Experience"
               floatingLabelText="Experience"  fullWidth={true}
               value={self.state.experience} 
               ref="experience" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictExperience.bind(self)}
              /><br/>
            </Col>
            <Col xs={6} sm={2} md={2} style={{position:'relative',left:20,top:20}}>
              <FloatingActionButton mini={true} onClick={self.add.bind(self)}>
                <ContentAdd />
              </FloatingActionButton>
            </Col>
            <Col xs={6} sm={2} md={2} style={{position:'relative',right:20,top:20}}>
              <FloatingActionButton mini={true} onClick={self.minus.bind(self)}>
                <ContentSub />
              </FloatingActionButton>
            </Col>
          </Row>

         {experience.experiencedata.map(function(experiencedata,i){
            return(
              <Row style={{margin:0}} key={i}>
                <Col xs={12} sm={4} md={4}>
                  <TextField
                   hintText="Company"
                   floatingLabelText="Company"  fullWidth={true}
                   value={experiencedata.company} 
                  /><br/>
                </Col>
                <Col xs={12} sm={4} md={4}>
                  <TextField
                   hintText="Experience"
                   floatingLabelText="Experience"  fullWidth={true}
                   value={experiencedata.experience} 
                  /><br/>
                </Col>
              </Row>
            )
         })}
        </div>
	  )
	}
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
  setExperienceDetails:PropTypes.func.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    experience:store.Experience,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setStepperValue,setExperienceDetails}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Experience);