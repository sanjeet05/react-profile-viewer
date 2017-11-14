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
import {setPermanentAddress} from '../../Actions/Address/AddressAction';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import styles from '../AppTheme';

class PermanentAddress extends React.Component{

  constructor(props) {
    super(props);
    this.state = {checked: false,hide:true};
  }
  componentDidMount(){
    var street=this.refs.street1.getValue();
    var city=this.refs.city1.getValue();
    var state=this.refs.state1.getValue();
    var zipcode=this.refs.zipcode1.getValue();
    if(street.trim()!='' && city.trim()!='' && state.trim()!='' && zipcode.trim()!=''){
      this.props.validatePermanentAddress('true')
    }
  } 
  componentWillReceiveProps(nextProps){
   
  }

  updateCheck() {
    this.setState({checked: !this.state.checked,hide:!this.state.hide},function(){
      this.props.setPermanentAddress(!this.state.hide?this.props.address.presentaddress:null);
      this.props.validatePermanentAddress('true');
    });
  }

  restrictStreetName(e){
    const re = /[a-zA-Z0-9#/,\s]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
      alert('Special characters not allow')
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
    var street=this.refs.street1.getValue();
    var city=this.refs.city1.getValue();
    var state=this.refs.state1.getValue();
    var zipcode=this.refs.zipcode1.getValue();
    if(street.trim()!='' && city.trim()!='' && state.trim()!='' && zipcode.trim()!=''){
      this.props.validatePermanentAddress('true')
    }
    this.props.setPermanentAddress({street:street,
      city:city,state:state,zipcode:zipcode});

    this.props.setStepperValue(1);
  }

  render(){
    var self=this;
    const {address}=self.props;
    return(
        <div style={!self.state.hide?{marginBottom:'50px',marginTop:'30px'}:null}>
          <Row>
            {self.state.hide?
              <Col md={6}>
                <h3>Permanent Address</h3>  
              </Col>:null}
            
              <Col md={6} style={{position:'relative',top:'20px'}}>
                <Checkbox
                  label="Permanent address is same as Present"
                  checked={this.state.checked}
                  onCheck={self.updateCheck.bind(self)}
                />
              </Col>
          </Row>

        {self.state.hide?
          <div>  
            <Row style={{margin:0}}>
              <Col xs={12} sm={6} md={6}>
                <TextField
                 hintText="Street"
                 floatingLabelText="Street"  fullWidth={true}
                 value={address.permanentaddress!=null?address.permanentaddress.street:''} 
                 ref="street1" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictStreetName.bind(self)}
                 /><br/>
              </Col>
            
              <Col xs={12} sm={6} md={6}>
                <TextField
                 hintText="City"
                 floatingLabelText="City"  fullWidth={true}
                 value={address.permanentaddress!=null?address.permanentaddress.city:''} 
                 ref="city1" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
                 /><br/>
              </Col>
            </Row>

            <Row style={{margin:0}}>
              <Col xs={12} sm={6} md={6}>
                <TextField
                 hintText="State"
                 floatingLabelText="State"  fullWidth={true}
                 value={address.permanentaddress!=null?address.permanentaddress.state:''} 
                 ref="state1" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
                 /><br/>
              </Col>
            
              <Col xs={12} sm={6} md={6}>
                <TextField
                 hintText="Zip Code"
                 floatingLabelText="Zip Code"  fullWidth={true}
                 value={address.permanentaddress!=null?address.permanentaddress.zipcode:''} 
                 ref="zipcode1" onChange={self.handleTextFiled.bind(self)} onKeyPress={self.restrictZipCode.bind(self)}
                 /><br/>
              </Col>
            </Row>
          </div>
        :null}
        </div>          
    )
  }
}

PermanentAddress.propTypes = {
  setPermanentAddress: PropTypes.func.isRequired,
  address:PropTypes.object.isRequired,
  validatePermanentAddress:PropTypes.func.isRequired,
  setStepperValue:PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    address:store.Address,
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setPermanentAddress,setStepperValue}, dispatch);
}

export default connect(mapStatetoProps,mapDispatchToProps)(PermanentAddress);