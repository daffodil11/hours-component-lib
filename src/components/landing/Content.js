import React from 'react';
import PropTypes from 'prop-types';
import {InfoCard, InfoHeader} from '../../styles/StyledComponents';

function Content({ content: {id, header, body}}) {
    return (
        <InfoCard className='content'>
          <InfoHeader>{header}</InfoHeader>
          <p>{body}</p>
        </InfoCard>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
}

export default Content;