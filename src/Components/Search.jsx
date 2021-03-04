import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { searchVideo, clearSearchVideo } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome } = props;

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleChange = (event) => {
    console.log(event.target.value.length);
    if (event.target.value.length > 0) {
      props.searchVideo(event.target.value);
    } else {
      props.clearSearchVideo([]);
    }
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleChange}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
  clearSearchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
