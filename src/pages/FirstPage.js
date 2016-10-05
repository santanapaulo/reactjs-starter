import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';

import RegisterPage from './RegisterPage';

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
              <img alt="Imagem" src={image} style={{ width: '100%', height: 400 }}/>
            )
          }
        </Carousel>
        <RegisterPage />
      </div>
    );
  }

}
export default FirstPage;