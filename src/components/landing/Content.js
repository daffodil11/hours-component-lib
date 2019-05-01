import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {SlideInfoCard, InfoHeading, InfoSubHeading, InfoBody} from '../../styles/StyledComponents';
import {useSpring} from 'react-spring'

//A stateless component that displays the text for a slide in the Slider component.

function Content({ content: {header, body} }) {
//    const [reset, setReset] = useState(false);
//    let present = false;
//    const props = useSpring({
//        from: {opacity: present ? 1 : 0},
//        to: {opacity: present ? 0 : 1},
//        reset: reset,
//        onRest: () => present=!present
//    })
//    useEffect(() => {
//        present = !present;
//        setReset(true);
//    }, [header]);
    return (
        <SlideInfoCard className='content' >
          <InfoHeading>{header}</InfoHeading>
          {body && body.map((section, index) => /^\*.+\*$/.test(section) ?
             <InfoSubHeading key={index.toString()}>{section.slice(1,-1)}</InfoSubHeading> :
             <InfoBody key={index.toString()}>{section}</InfoBody>)}
        </SlideInfoCard>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        header: PropTypes.string.isRequired,
        body: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Content;