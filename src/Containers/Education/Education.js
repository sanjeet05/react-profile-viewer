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
import {setEducationDetails} from '../../Actions/Education/EducationAction';
import {setStepperValue} from '../../Actions/MainLayout/MainLayoutAction';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSub from 'material-ui/svg-icons/content/remove';
import styles from '../AppTheme';

class Education extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: null,education:'',percentage:''};
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

  handleTextFiled(){
    var education=this.refs.education.getValue();
    var percentage=this.refs.percentage.getValue();
    this.setState({value:this.state.value,
      education:education,percentage:percentage});
    this.props.setStepperValue(2)
  }

  handleSelectChange(e){
    this.setState({value:e.target.value},function(){
    this.handleTextFiled();
     });
  }

  handleSubmit(){
   if(this.refs.education.getValue().trim()!='' && this.refs.percentage.getValue().trim()!=''
      && this.state.value!=null){
    var addList=this.props.education.educationdata;
    var educationdata={
      type:this.state.value,
      education:this.state.education,
      percentage:this.state.percentage,
    }
    addList.push(educationdata);
    this.props.setEducationDetails(addList);
    this.props.setStepperValue(3)
    this.context.router.history.push('/experience');
   }else{
    alert('Please select all field');
   } 
  }

  add(){
    if(this.refs.education.getValue().trim()!='' && this.refs.percentage.getValue().trim()!=''
      && this.state.value!=null){
      var addList=this.props.education.educationdata;
      var educationdata={
        type:this.state.value,
        education:this.state.education,
        percentage:this.state.percentage,
      }
      addList.push(educationdata);
      this.props.setEducationDetails(addList);
      //this.setState({value: null,education:'',percentage:''})
     }else{
    alert('Please select all field');
    } 
  }

  minus(){
    var subList=this.props.education.educationdata;
    subList.splice(subList.length-1,1)
    this.props.setEducationDetails(this.props.education.educationdata);
  }

	render(){
		var self=this;
    const {education}=self.props
    const primaryText=['10Th','12Th','UG','PG'];
    const items1 = [
        <MenuItem key={0} value={0} primaryText="10Th" />,
        <MenuItem key={1} value={1} primaryText="12Th" />,
        <MenuItem key={2} value={2} primaryText="UG" />,
        <MenuItem key={3} value={3} primaryText="PG" />,
    ];
    return(
        <div style={{marginBottom:'50px'}}>
          <Row>
            <Col md={12}>
              <h3>Education</h3>  
            </Col>
          </Row>

          <Row style={{marginTop:20}}>
            <Col xs={3} sm={2} md={2} style={{position:'relative',left:20}}>
              <FloatingActionButton mini={true} onClick={self.add.bind(self)}>
                <ContentAdd />
              </FloatingActionButton>
            </Col>
            <Col xs={3} sm={2} md={2} style={{position:'relative',right:20}}>
              <FloatingActionButton mini={true} onClick={self.minus.bind(self)}>
                <ContentSub />
              </FloatingActionButton>
            </Col>
            <Col xs={3} sm={3} md={3} >
              <RaisedButton label="Next" onClick={self.handleSubmit.bind(self)}/> 
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={1} md={1}>
            </Col>
            <Col xs={12} sm={3} md={3} style={{marginTop:40}}>
              <select style={{width:150}}
                value={self.state.value}
                onChange={self.handleSelectChange.bind(self)}
              >
                <option  value={0} >10Th</option>
                <option  value={1} >12Th</option>
                <option  value={2} >UG</option>
                <option  value={3} >PG</option>
              </select>

            </Col>
            <Col xs={12} sm={4} md={4}>
              <TextField
               hintText="Education"
               floatingLabelText="Education"  fullWidth={true}
               value={self.state.education} 
               ref="education" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
              /><br/>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <TextField
               hintText="Percentage"
               floatingLabelText="Percentage"  fullWidth={true}
               value={self.state.percentage} 
               ref="percentage" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictPercentage.bind(self)}
              /><br/>
            </Col>
          </Row>

         {education.educationdata.map(function(educationdata,i){
            return(
              <Row style={{margin:0}} key={i}>
                <Col xs={12} sm={4} md={4}>
                  <TextField
                   hintText="Type"
                   floatingLabelText="Type"  fullWidth={true}
                   value={primaryText[educationdata.type]} 
                  /><br/>
                </Col>
                <Col xs={12} sm={4} md={4}>
                  <TextField
                   hintText="Education"
                   floatingLabelText="Education"  fullWidth={true}
                   value={educationdata.education} 
                  /><br/>
                </Col>
                <Col xs={12} sm={4} md={4}>
                  <TextField
                   hintText="Percentage"
                   floatingLabelText="Percentage"  fullWidth={true}
                   value={educationdata.percentage} 
                  /><br/>
                </Col>
              </Row>
            )
         })}
        </div>
	  )
	}
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
  setEducationDetails:PropTypes.func.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    education:store.Education,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setStepperValue,setEducationDetails}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Education);