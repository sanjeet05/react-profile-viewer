import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import AppTheme from '../../Containers/AppTheme'


class LoginPage extends React.Component{

  static contextTypes = {
    router: PropTypes.object
  }

  login(){
    this.context.router.history.push('/personalinfo');
  }

  render(){

    const styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto'
      },
      paper: {
        padding: 20,
        overflow: 'auto'
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10
      },
      flatButton: {
        color: grey500
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5
        },
        labelStyle: {
          color: grey500
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500
        }
      },
      loginBtn: {
        float: 'right'
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13
      },
      btnFacebook: {
        background: '#4f81e9'
      },
      btnGoogle: {
        background: '#e14441'
      },
      btnSpan: {
        marginLeft: 5
      },
    };

  
   var self=this;

  return (
    <MuiThemeProvider muiTheme={AppTheme}>
      <div>
        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>

            <form>
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                fullWidth={true}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
              />

              <div>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />

                <RaisedButton label="Login"
                                primary={true}
                                style={styles.loginBtn} onClick={self.login.bind(self)}/>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label="Register"
              href="/"
              style={styles.flatButton}
              icon={<PersonAdd />}
            />

            <FlatButton
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
 }
};

export default LoginPage;
