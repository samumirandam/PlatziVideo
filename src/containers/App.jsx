import React, { useState, useEffect } from 'react';

import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className='app'>
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Caruosel>
            <CaruoselItem />
          </Caruosel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Caruosel>
          {videos.trends.map((item) => (
            <CaruoselItem key={item.id} {...item} />
          ))}
        </Caruosel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Caruosel>
          <CaruoselItem />
        </Caruosel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
