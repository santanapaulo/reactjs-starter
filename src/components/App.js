import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';
import PostForm from '../components/PostForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
    return (
      <div>      	
        <Carousel>
          {
            IMAGES.map(image =>
            <div>
              <img alt="Imagem" src={image} style={{ width: '100%', height: 400 }}/>
            </div>
            )
          }
        </Carousel>
	    <MuiThemeProvider>
	        <PostForm zDepth={2} />
	    </MuiThemeProvider>
      </div>
    );
}

export default App;
