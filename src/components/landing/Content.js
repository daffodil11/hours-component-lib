import React from 'react';
import PropTypes from 'prop-types';
import {SlideInfoCard, InfoHeader} from '../../styles/StyledComponents';

function Content({ content: {id, header, body}}) {
    return (
        <SlideInfoCard className='content'>
          <InfoHeader>{header}</InfoHeader>
          {body && <p>{body}</p>}
        </SlideInfoCard>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string
    })
}

export default Content;