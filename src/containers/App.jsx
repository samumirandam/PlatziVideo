import React from 'react';

import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';

import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />

    <Categories>
      <Caruosel>
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
        <CaruoselItem />
      </Caruosel>
    </Categories>
  </div>
);

export default App;
