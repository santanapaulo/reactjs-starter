import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';

import RegisterPage from './RegisterPage';
import PostPage from './PostPage';
import { COMMENT } from '../constants/text';

const array = [ 
  {
    name: "paulo",
    comment: COMMENT,
    time: "2:30",
  },
  {
    name: "smith",
    comment: COMMENT,
    time: "2:30",
  },
  {
    name: "PPH",
    comment: COMMENT,
    time: "2:30",
  },
]

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
    const text = COMMENT;
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
        <PostPage 
          postList={array}
        />
      </div>
    );
  }

}
export default FirstPage;