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
      name: '',
      showFormPost: false,
    };
  }

  componentDidMount() { 
    document.title = 'Novo titulo';
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSave = () => {
    if(this.state.name) {
      this.setState({ showFormPost: true, });
    } else {
      window.alert('Tem que digitar o nome galera!');
    }
  };

  render() {
    const text = COMMENT;

    const {
      name,
      showFormPost,
    } = this.state;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Carousel interval={6000}>
            {
              IMAGES.map(image =>
                <img alt="Imagem" src={image} style={{ width: '100%', height: 400 }}/>
              )
            }
          </Carousel>
          <div style={{ alignSelf: 'center', width: '40%', textAlign: 'center' }}>Sejam bem vindos!</div>
        </div>
        {!showFormPost &&
          <RegisterPage
            value={name}
            onChange={this.onChangeName}
            onClick={this.handleSave}
          />
        }
        <PostPage
          postList={array}
        />
      </div>
    );
  }

}
export default FirstPage;