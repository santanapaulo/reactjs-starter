import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { IMAGES } from '../CarouselImages';

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
      </div>
    );
}
export default App;