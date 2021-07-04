import React from 'react';

import Carousel from './carousel'

import {carouselData} from './carouselData'

import './assets/css/home.css';

function App() {
  return (
    <main>
      Carrusel implementado
      <section className="carousel">
        <Carousel data={carouselData}></Carousel>
      </section>
    </main>
  );
}

export default App;
