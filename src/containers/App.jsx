import React from 'react';

import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />

    <Categories title='Mi lista'>
      <Caruosel>
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
      </Caruosel>
    </Categories>

    <Categories title='Tendencias'>
      <Caruosel>
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
      </Caruosel>
    </Categories>

    <Categories title='Originales de Platzi Video'>
      <Caruosel>
        <CaruoselItem />
        <CaruoselItem />
      </Caruosel>
    </Categories>
    <Footer />
  </div>
);

export default App;
