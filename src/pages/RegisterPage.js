import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterPage extends Component {

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Registro de usuário!</h3>
        <TextField
          hintText="Digite seu nome"
        />
        <RaisedButton
          label="Save your name"
        />
      </div>
    )
  }
}

export default RegisterPage;