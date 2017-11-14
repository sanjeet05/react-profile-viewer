import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect, ReactRedux} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPresentAddress,setPermanentAddress} from '../../Actions/Address/AddressAction';
import Divider from 'material-ui/Divider';
import Edit from 'material-ui/svg-icons/image/edit';
import styles from '../AppTheme';

class AddressDetail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {editable:false};
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

  updatePreAddress=()=>{
    var street=this.refs.street.value;
    var city=this.refs.city.value;
    var state=this.refs.state.value;
    var zipcode=this.refs.zipcode.value;
    this.props.setPresentAddress({street:street,
      city:city,state:state,zipcode:zipcode});
  }

  updatePerAddress=()=>{
    var street=this.refs.street1.value;
    var city=this.refs.city1.value;
    var state=this.refs.state1.value;
    var zipcode=this.refs.zipcode1.value;
    this.props.setPermanentAddress({street:street,
      city:city,state:state,zipcode:zipcode});
  }

  componentDidMount(){
  
  } 
  componentWillReceiveProps(nextProps){
   
  }


  editable=()=>{
    this.setState({editable:!this.state.editable})
  }

	render(){
		var self=this;
    const {address}=this.props;
    return(
      <Grid>
        <Row style={{marginBottom:0}}>
          <Col xs={4} sm={3} md={3}>
            <h4>Address Details</h4>
          </Col>
          <Col xs={4} sm={1} md={1} style={{position:'relative',top:'15px',cursor:'pointer',right:'40px'}}>
            <Edit onClick={self.editable.bind(self)}/>
          </Col>
        </Row>

        <div style={{position:'relative',bottom:'15px'}}>
          <Row style={{margin:0}}>
            <Col xs={12} sm={12} md={12}>
              <p>Present Address</p>
            </Col>
          </Row>

          <Row style={{marginBottom:10,marginLeft:20,marginRight:0,marginTop:0}}>
            <Col xs={6} sm={2} md={2}>
              <label>Street :</label>
            </Col>
           
          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.presentaddress!=null?address.presentaddress.street:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" value={address.presentaddress!=null?address.presentaddress.street:''} onKeyPress={self.restrictStreetName.bind(self)}
               onChange={self.updatePreAddress.bind()} ref='street' style={{width:'140px'}} />
            </Col>}

            <Col xs={6} sm={2} md={2}>
              <label>City :</label>
            </Col>

          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.presentaddress!=null?address.presentaddress.city:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" value={address.presentaddress!=null?address.presentaddress.city:''} onKeyPress={self.restrictTextField.bind(self)}
              onChange={self.updatePreAddress.bind()} ref='city' style={{width:'140px'}} />
            </Col>}
          </Row>

          <Row style={{marginBottom:10,marginLeft:20,marginRight:0,marginTop:0}}>
            <Col xs={6} sm={2} md={2}>
              <label>State :</label>
            </Col>

          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
             <label>{address.presentaddress!=null?address.presentaddress.state:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" value={address.presentaddress!=null?address.presentaddress.state:''} onKeyPress={self.restrictTextField.bind(self)} 
              onChange={self.updatePreAddress.bind()} ref='state' style={{width:'140px'}} />
            </Col>}

            <Col xs={6} sm={2} md={2}>
              <label>Zip Code :</label>
            </Col>

          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.presentaddress!=null?address.presentaddress.zipcode:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" value={address.presentaddress!=null?address.presentaddress.zipcode:''} onKeyPress={self.restrictZipCode.bind(self)}
              onChange={self.updatePreAddress.bind()} ref='zipcode' style={{width:'140px'}} />
            </Col>}
          </Row>
        </div>  

        <div style={{position:'relative',bottom:'15px'}}>
          <Row style={{margin:0}}>
            <Col xs={12} sm={12} md={12}>
              <p>Permanent Address</p>
            </Col>
          </Row>

          <Row style={{marginBottom:10,marginLeft:20,marginRight:0,marginTop:0}}>
            <Col xs={6} sm={2} md={2}>
              <label>Street :</label>
            </Col>

          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.permanentaddress!=null?address.permanentaddress.street:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text"  style={{width:'140px'}}
               value={address.permanentaddress!=null?address.permanentaddress.street:''} 
               ref="street1" onChange={self.updatePerAddress.bind(self)} onKeyPress={self.restrictStreetName.bind(self)}
              />
            </Col>}


            <Col xs={6} sm={2} md={2}>
              <label>City :</label>
            </Col>

          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.permanentaddress!=null?address.permanentaddress.city:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" style={{width:'140px'}} 
                value={address.permanentaddress!=null?address.permanentaddress.city:''} 
                ref="city1" onChange={self.updatePerAddress.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
              />
            </Col>}
          </Row>

          <Row style={{marginBottom:10,marginLeft:20,marginRight:0,marginTop:0}}>
            <Col xs={6} sm={2} md={2}>
              <label>State :</label>
            </Col>
          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.permanentaddress!=null?address.permanentaddress.state:''} </label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" style={{width:'140px'}}  
                value={address.permanentaddress!=null?address.permanentaddress.state:''} 
                ref="state1" onChange={self.updatePerAddress.bind(self)} onKeyPress={self.restrictTextField.bind(self)}
              />
            </Col>}

            <Col xs={6} sm={2} md={2}>
              <label>Zip Code :</label>
            </Col>
          {!self.state.editable?
            <Col xs={3} sm={3} md={2}>
              <label>{address.permanentaddress!=null?address.permanentaddress.zipcode:''}</label>
            </Col>
          : <Col xs={3} sm={3} md={2}>
              <input type="text" style={{width:'140px'}} 
                value={address.permanentaddress!=null?address.permanentaddress.zipcode:''} 
                ref="zipcode1" onChange={self.updatePerAddress.bind(self)} onKeyPress={self.restrictZipCode.bind(self)}
                 />
            </Col>}
          </Row>
        </div>

      </Grid>
	  )
	}
}

AddressDetail.propTypes = {
 address: PropTypes.object.isRequired,
 setPresentAddress: PropTypes.func.isRequired,
 setPermanentAddress: PropTypes.func.isRequired,
};

function mapStatetoProps(store) {
  return {
    address:store.Address,
  }
};

function mapDispatchToProps(dispatch) {
 return bindActionCreators({setPresentAddress,setPermanentAddress}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddressDetail);