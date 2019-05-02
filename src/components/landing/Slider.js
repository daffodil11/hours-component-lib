import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Slide, LeftButton, RightButton} from '../../styles/StyledComponents';
import Content from './Content';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated, config } from 'react-spring'

//A slideshow component, which takes an array of slide objects and is controlled
//by left and right arrow buttons.

function Slider( {slides} ) {
    const [currentSlide, setSlide] = useState(0);
    const AnimatedContent = animated(Content);
    const transitions = useTransition(currentSlide, null, {
      from: {position: 'absolute', bottom: '60px', opacity: 0, transform: 'translate3d(0, 50px, 0)'},
      enter: [{color: 'red'}, {opacity: 1, transform: 'translate3d(0, 0px, 0)'}],
      leave: {opacity: 0, transform: 'translate3d(0, 50px, 0)'},
      config: config.gentle
    });
    console.log(transitions);
    return (
        <Slide image={slides[currentSlide].image || ''}>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={props}
          ><Content content={(({image, ...rest}) => ({...rest}))(slides[item])} /></animated.div>
        ))}
          <LeftButton onClick={() => setSlide((currentSlide+slides.length-1)%slides.length)}>
            <FontAwesomeIcon icon={faArrowLeft}/>
          </LeftButton>
          <RightButton onClick={() => setSlide((currentSlide+1)%slides.length)}>
            <FontAwesomeIcon icon={faArrowRight}/>
          </RightButton>
        </Slide>
    );
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.object,
        header: PropTypes.string.isRequired,
        body: PropTypes.arrayOf(PropTypes.string)
    }))
};

export default Slider;