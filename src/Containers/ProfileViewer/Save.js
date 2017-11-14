import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from '../AppTheme';

class Save extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }
	render(){
    return(
      <div>Profile has been saved successfully</div>
	  )
	}
}

export default Save;