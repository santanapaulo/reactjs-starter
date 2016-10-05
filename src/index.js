import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FirstPage from './pages/FirstPage';

class App extends React.Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <FirstPage />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.conteudo'));
