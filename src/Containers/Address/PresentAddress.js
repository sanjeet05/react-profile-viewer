import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {setStepperValue} from '../../Actions/MainLayout/MainLayoutAction';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPresentAddress} from '../../Actions/Address/AddressAction';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class PresentAddress extends React.Component{

  constructor(props) {
    super(props);
    this.state = {checked: false,};
  }
  componentDidMount(){
    var street=this.refs.street.getValue();
    var city=this.refs.city.getValue();
    var state=this.refs.state.getValue();
    var zipcode=this.refs.zipcode.getValue();
    if(street.trim()!='' && city.trim()!='' && state.trim()!='' && zipcode.trim()!=''){
      this.props.validatePresentAddress('true')
    }
  } 
  componentWillReceiveProps(nextProps){
   
  }

  restrictStreetName(e){
    const re = /[a-zA-Z0-9#/,\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('Some special characters not allow')
    }
  }

  restrictZipCode(e){
    const re = /[0-9-\s]+/g;
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
  	var street=this.refs.street.getValue();
    var city=this.refs.city.getValue();
    var state=this.refs.state.getValue();
    var zipcode=this.refs.zipcode.getValue();
    if(street.trim()!='' && city.trim()!='' && state.trim()!='' && zipcode.trim()!=''){
      this.props.validatePresentAddress('true')
    }
    this.props.setPresentAddress({street:street,
      city:city,state:state,zipcode:zipcode});

    this.props.setStepperValue(1);
	}

	render(){
		var self=this;
    const {address}=self.props;
    return(
        <div>
          <Row>
            <Col md={12}>
              <h3>Present Address</h3>  
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="Street"
               floatingLabelText="Street"  fullWidth={true}
               value={address.presentaddress!=null?address.presentaddress.street:''} 
               ref="street" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictStreetName.bind(self)}
               /><br/>
            </Col>
          
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="City"
               floatingLabelText="City"  fullWidth={true}
               value={address.presentaddress!=null?address.presentaddress.city:''} 
               ref="city" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          </Row>

          <Row style={{margin:0}}>
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="State"
               floatingLabelText="State"  fullWidth={true}
               value={address.presentaddress!=null?address.presentaddress.state:''} 
               ref="state" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
               /><br/>
            </Col>
          
            <Col xs={12} sm={6} md={6}>
              <TextField
               hintText="Zip Code"
               floatingLabelText="Zip Code"  fullWidth={true}
               value={address.presentaddress!=null?address.presentaddress.zipcode:''} 
               ref="zipcode" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictZipCode.bind(self)}
               /><br/>
            </Col>
          </Row>
        </div>          
	  )
	}
}

PresentAddress.propTypes = {
  address:PropTypes.object.isRequired,
  setPresentAddress: PropTypes.func.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    address:store.Address,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setPresentAddress,setStepperValue}, dispatch);
}

export default connect(mapStatetoProps,mapDispatchToProps)(PresentAddress);