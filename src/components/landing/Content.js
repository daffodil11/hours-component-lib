import React from 'react';
import PropTypes from 'prop-types';

function Content({ content: {id, header, body, image}}) {
    return (
        <div className='content'>
          <h1>{header}</h1>
          <p>{body}</p>
        </div>
    )
}

Content.propTypes = {
    content: PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
}

export default Content;