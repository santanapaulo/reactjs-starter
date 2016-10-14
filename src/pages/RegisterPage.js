import React, { PropTypes, Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterPage extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }

  handleSaveName = () => {
    if(this.props.onClick) this.props.onClick();
  };

  render() {
    const {
      value,
    } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Registro de usuário!</h3>
        <TextField
          hintText="Digite seu nome"
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
        />
        <RaisedButton
          style={{ marginLeft: 16 }}
          label="Salvar"
          onClick={this.handleSaveName}
        />
      </div>
    )
  }
}

export default RegisterPage;