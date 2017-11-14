import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import Edit from 'material-ui/svg-icons/image/edit';
import {setExperienceDetails} from '../../Actions/Experience/ExperienceAction';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class ExperienceDetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {editable:false};
  }

  static contextTypes = {
    router: PropTypes.object
  }

  editable=()=>{
    this.setState({editable:!this.state.editable})
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

  updateCompany=(i,e)=>{
     var experiencedata=this.props.experience.experiencedata;
     for(var j in experiencedata){
        if(j==i){
          experiencedata[j].company=e.target.value;
        }
     }
     this.props.setExperienceDetails(experiencedata);
  }

  updateExperience=(i,e)=>{
     var experiencedata=this.props.experience.experiencedata;
     for(var j in experiencedata){
        if(j==i){
          experiencedata[j].experience=e.target.value;
        }
     }
     this.props.setExperienceDetails(experiencedata);
  }

	render(){
		var self=this;
    const {experience}=self.props
    return(
      <Grid>
        <Row style={{marginBottom:0}}>
          <Col xs={4} sm={3} md={3}>
            <h4>Experience Details</h4>
          </Col>
          <Col xs={4} sm={1} md={1} style={{position:'relative',top:'15px',cursor:'pointer',right:'40px'}}>
            <Edit onClick={self.editable.bind(self)}/>
          </Col>
        </Row>

        <Row style={{margin:0}}>
          <Col xs={4} sm={4} md={4}>
           <label>Company</label>
          </Col>
          <Col xs={4} sm={4} md={4}>
           <label>Experience</label>
          </Col>
        </Row>

        {experience.experiencedata.map(function(experiencedata,i){
            return(
              <div style={{marginTop:20}}>
                {self.state.editable?
                  <Row style={{margin:0}} key={i}>
                    <Col xs={12} sm={4} md={4}>
                      <input value={experiencedata.company} onKeyPress={self.restrictTextField.bind(self)}
                       onChange={self.updateCompany.bind(self,i)}/>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <input value={experiencedata.experience} onKeyPress={self.restrictExperience.bind(self)}
                       onChange={self.updateExperience.bind(self,i)}/>
                    </Col>
                  </Row>
                  :
                  <Row style={{margin:0}} key={i}>
                    <Col xs={12} sm={4} md={4}>
                      <label>{experiencedata.company}</label>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <label>{experiencedata.experience} </label>
                    </Col>
                  </Row>}
                </div>
            )
         })}

      </Grid>
	  )
	}
}

ExperienceDetail.propTypes = {
  experience: PropTypes.object.isRequired,
  setExperienceDetails:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    experience:store.Experience,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setExperienceDetails}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(ExperienceDetail);