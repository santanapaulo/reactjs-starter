import React, { PropTypes, Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const RegisterPage = (props) => {
  const {
    value,
  } = props;

  const handleSaveName = () => {
    if(props.onClick) props.onClick();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Registro de usuário!</h3>
      <TextField
        hintText="Digite seu nome"
        value={props.value}
        onChange={e => props.onChange(e)}
      />
      <RaisedButton
        style={{ marginLeft: 16 }}
        label="Salvar"
        onClick={handleSaveName}
      />
    </div>
  )
}

RegisterPage.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

export default RegisterPage;
