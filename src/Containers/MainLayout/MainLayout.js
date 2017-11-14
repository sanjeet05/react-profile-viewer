import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import Paper from 'material-ui/Paper';
import Stepper from './Stepper.js';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from '../AppTheme';

class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{margin:'5px'}}>
        <Header/>
        <Scrollbars style={{height: window.innerHeight-100,position:'relative',right:'10px',margin:'10px' }}>   
          <Paper zDepth={1} style={styles.paper}>
            <div>
              {this.props.children}
            </div>
            <div>
              <Stepper />
            </div>
          </Paper> 
        </Scrollbars>     
      </div>
    );
  }
}

MainLayout.propTypes = {
  children:PropTypes.arrayOf(PropTypes.element.isRequired),
};
export default MainLayout;
