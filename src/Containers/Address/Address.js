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
import PresentAddress from './PresentAddress';
import PermanentAddress from './PermanentAddress';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class Address extends React.Component{

  constructor(props) {
    super(props);
    this.state = {presentaddress:false,permanentaddress:false};
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
  
  } 
  componentWillReceiveProps(nextProps){
   
  }

  validatePresentAddress(value){
     this.setState({presentaddress:true})
  }

  validatePermanentAddress(value){
     this.setState({permanentaddress:true})
  }

  handleSubmit(){
   if(this.state.presentaddress && this.state.permanentaddress){
      this.props.setStepperValue(2);
      this.context.router.history.push('/education');
   }else{
    alert('Please select all field');
   }
  }

	render(){
		var self=this;
    return(
        <div>
          <PresentAddress validatePresentAddress={self.validatePresentAddress.bind(self)}/>
          <PermanentAddress validatePermanentAddress={self.validatePermanentAddress.bind(self)}/>
          <Row style={{marginTop:20}}>
            <Col xs={3} sm={3} md={3} >
              <RaisedButton label="Next" onClick={self.handleSubmit.bind(self)}/> 
            </Col>
          </Row>
        </div>
	  )
	}
}

Address.propTypes = {
  address: PropTypes.object.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    address:store.Address,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setStepperValue}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Address);