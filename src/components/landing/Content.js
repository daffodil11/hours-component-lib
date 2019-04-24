import React from 'react';
import PropTypes from 'prop-types';
import {SlideInfoCard, InfoHeading, InfoSubHeading, InfoBody} from '../../styles/StyledComponents';

function Content({ content: {id, header, body}}) {
    return (
        <SlideInfoCard className='content'>
          <InfoHeading>{header}</InfoHeading>
          {body && body.map(section => /^\*.+\*$/.test(section) ?
             <InfoSubHeading>{section.slice(1,-1)}</InfoSubHeading> : <InfoBody>{section}</InfoBody>)}
        </SlideInfoCard>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Content;