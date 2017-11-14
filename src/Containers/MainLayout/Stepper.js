import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import {connect, ReactRedux} from 'react-redux';

class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 1,
  };
  render() {
    const {finished, stepIndex} = this.state;
    const {stepper} = this.props;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
        <Stepper activeStep={stepper.stappervalue}>
          <Step>
            <StepLabel>Personal Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Address</StepLabel>
          </Step>
          <Step>
            <StepLabel>Education</StepLabel>
          </Step>
           <Step>
            <StepLabel>Experience</StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  stepper:PropTypes.object.isRequired,
};

function mapStatetoProps(store) {
  return {
    stepper:store.MainLayoutReducer,
  }
};



export default connect(mapStatetoProps)(HorizontalLinearStepper);