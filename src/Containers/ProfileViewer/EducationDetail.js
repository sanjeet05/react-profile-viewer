import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setEducationDetails} from '../../Actions/Education/EducationAction';
import Edit from 'material-ui/svg-icons/image/edit';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class EducationDetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {editable:false};
  }

  static contextTypes = {
    router: PropTypes.object
  }

  restrictPercentage(e){
    const re = /[0-9-%]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('Special characters and alphabets not allow')
    }
  } 

  restrictTextField(e){
    const re = /[a-zA-Z\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('Special characters and number not allow')
    }
  } 

  editable=()=>{
    this.setState({editable:!this.state.editable})
  }
  
  updateType=(i,e)=>{
     var educationdata=this.props.education.educationdata;
     for(var j in educationdata){
        if(j==i){
          educationdata[j].type=e.target.value;
        }
     }
     this.props.setEducationDetails(educationdata);
  }

  updateEducation=(i,e)=>{
     var educationdata=this.props.education.educationdata;
     for(var j in educationdata){
        if(j==i){
          educationdata[j].education=e.target.value;
        }
     }
     this.props.setEducationDetails(educationdata);
  }

  updatePercentage=(i,e)=>{
     var educationdata=this.props.education.educationdata;
     for(var j in educationdata){
        if(j==i){
          educationdata[j].percentage=e.target.value;
        }
     }
     this.props.setEducationDetails(educationdata);
  }

	render(){
		var self=this;
    const {education}=self.props
    const primaryText=['10Th','12Th','UG','PG'];
    return(
      <Grid>
        <Row style={{marginBottom:0}}>
          <Col xs={4} sm={3} md={3}>
            <h4>Education Details</h4>
          </Col>
          <Col xs={4} sm={1} md={1} style={{position:'relative',top:'15px',cursor:'pointer',right:'40px'}}>
            <Edit onClick={self.editable.bind(self)}/>
          </Col>
        </Row>

        <Row style={{margin:0}}>
         <Col xs={4} sm={4} md={4}>
          <label>Type</label>
         </Col>
         <Col xs={4} sm={4} md={4}>
          <label>Education</label>
         </Col>
         <Col xs={4} sm={4} md={4}>
          <label>Percentage</label>
         </Col>
        </Row>

        {education.educationdata.map(function(educationdata,i){
            return(
              <div style={{marginTop:20}}>
                {self.state.editable?
                  <Row style={{margin:0}} key={i}>
                    <Col xs={12} sm={4} md={4}>
                       <select value={educationdata.type} onChange={self.updateType.bind(self,i)}>
                        <option value={0}>10TH</option>
                        <option value={1}>12TH</option>
                        <option value={2}>UG</option>
                        <option value={3}>PG</option>
                       </select>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <input value={educationdata.education} onKeyPress={self.restrictTextField.bind(self)}
                       onChange={self.updateEducation.bind(self,i)}/>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <input value={educationdata.percentage} onKeyPress={self.restrictPercentage.bind(self)}
                       onChange={self.updatePercentage.bind(self,i)}/>
                    </Col>
                  </Row>
                  :
                  <Row style={{margin:0}} key={i}>
                    <Col xs={12} sm={4} md={4}>
                      <label>{primaryText[educationdata.type]}</label>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <label>{educationdata.education}</label>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                      <label>{educationdata.percentage} </label>
                    </Col>
                  </Row>}
                </div>
            )
         })}
        
      </Grid>
	  )
	}
}

EducationDetail.propTypes = {
  education: PropTypes.object.isRequired,
  setEducationDetails:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    education:store.Education,
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setEducationDetails}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(EducationDetail);