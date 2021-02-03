import React from 'react';

import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Caruosel>
            {initialState.mylist.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}

      {initialState.trends.length > 0 && (
        <Categories title='Tendencias'>
          <Caruosel>
            {initialState.trends.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}

      {initialState.originals.length > 0 && (
        <Categories title='Originales de Platzi Video'>
          <Caruosel>
            {initialState.originals.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};
export default App;
