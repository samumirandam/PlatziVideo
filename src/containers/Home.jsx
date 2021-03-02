import React from 'react';
import { connect } from 'react-redux';

//import reducer from "../reducers"

import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Caruosel from '../Components/Carousel';
import CaruoselItem from '../Components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />

      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Caruosel>
            {myList.map((item) => (
              <CaruoselItem
                key={item.id}
                {...item}
                isList
              />
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
  };
};

export default connect(mapStateToProps, null)(Home);
