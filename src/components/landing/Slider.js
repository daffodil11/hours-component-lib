import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Slide, LeftButton, RightButton} from '../../styles/StyledComponents';
import Content from './Content';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slider( {slides} ) {
    const [currentSlide, setSlide] = useState(0);
    return (
        <Slide image={slides[currentSlide].image || ''}>
          <Content content={(({image, ...elems}) => ({...elems}))(slides[currentSlide])} />
          <LeftButton onClick={() => setSlide((currentSlide+slides.length-1)%slides.length)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </LeftButton>
          <RightButton onClick={() => setSlide((currentSlide+1)%slides.length)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </RightButton>
        </Slide>
    );
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        header: PropTypes.string.isRequired,
        body: PropTypes.arrayOf(PropTypes.string)
    }))
};

export default Slider;