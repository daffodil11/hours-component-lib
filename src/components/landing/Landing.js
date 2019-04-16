
import React from 'react';
import PropTypes from 'prop-types';
import {Slide} from '../../styles/StyledComponents';
import TestImage from '../../assets/logHours.png';
import Content from './Content';

function Landing( {slides} ) {
    return (
        <Slide image={TestImage}>
          <Content content={(({image, ...elems}) => ({...elems}))(slides[0])} />
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