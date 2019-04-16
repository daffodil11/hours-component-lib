import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Slide} from '../../styles/StyledComponents';
import TestImage from '../../assets/logHours.png';
import Content from './Content';

function Landing( {slides} ) {
    const [currentSlide, setSlide] = useState(0);
    return (
        <Slide image={slides[currentSlide].image}>
          <Content content={(({image, ...elems}) => ({...elems}))(slides[currentSlide])} />
        </Slide>
    );
}
//function Landing( {slides} ) {
//    return (
//        <Slide>
//          <Content content={{id: slides[0].id, header: slides[0].header, body: slides[0].body}} />
//        </Slide>
//    );
//}

Landing.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }))
};

export default Landing;