import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';

import TextField from 'material-ui/TextField';

class FirstPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
    };
  }

  componentDidMount() { 
    document.title = 'Novo titulo';
  }
  
  onChangeName(event) {
    this.setState({ nome: event.target.value });
  }

  render() {
    return (
      <div>
        <Carousel interval={6000}>
          {
            IMAGES.map(image =>
            <div>
              <img alt="Imagem" src={image} style={{ width: '100%', height: 400 }}/>
            </div>
            )
          }
        </Carousel>
        <TextField
          hintText="Hint Text"
          onChange={event => this.onChangeName(event)}
        />
        <span>{this.state.nome}</span>
      </div>
    );
  }

}
export default FirstPage;