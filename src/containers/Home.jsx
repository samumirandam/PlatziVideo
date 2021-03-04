import React from 'react';
import { connect } from 'react-redux';

//import reducer from "../reducers"

import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';
import Header from '../Components/Header';

const Home = ({ myList, trends, originals, searchList }) => {
  return (
    <>
      <Header />
      <Search isHome />

      {searchList.length > 0 && (
        <Categories title='Busqueda: '>
          <Caruosel>
            {searchList.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Caruosel>
            {myList.map((item) => (
              <CaruoselItem key={item.id} {...item} isList />
            ))}
          </Caruosel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title='Tendencias'>
          <Caruosel>
            {trends.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title='Originales de Platzi Video'>
          <Caruosel>
            {originals.map((item) => (
              <CaruoselItem key={item.id} {...item} />
            ))}
          </Caruosel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchList: state.searchList,
  };
};

export default connect(mapStateToProps, null)(Home);
