import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';

import RegisterPage from './RegisterPage';
import PostPage from './PostPage';

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
  
  handleSaveName = () => {
    if(this.state.name) {
      this.setState({ showFormPost: true });
    } else {
      window.alert('Tem que digitar o nome galera!');
    }
  };

  render() {
    const {
      name,
      showFormPost,
      posts,
    } = this.state;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Carousel interval={6000}>
            {
              IMAGES.map((image, i) =>
              <div key={i}>
                <img alt="Imagem" src={image} style={{ width: '100%', height: 400 }}/>
              </div>
              )
            }
          </Carousel>
          <div
            style={{
              alignSelf: 'center',
              width: '40%',
              textAlign: 'center',
              fontSize: 50,
              fontFamily: 'fantasy',
              textShadow: '1px 1px gray',
              display: 'flex',
              justifyContent: 'center',
            }}
          >Sejam bem vindos!
          </div>
        </div>
        {!showFormPost ?
          <RegisterPage
            value={name}
            onChange={this.onChangeName}
            onClick={this.handleSaveName}
          />
          :
        <PostPage
          name={this.state.name}
        />
        }
      </div>
    );
  }
}
export default FirstPage;