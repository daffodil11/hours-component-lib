import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 35px;
`
const ContentHeader = styled.h1`
  margin-bottom: 10px;
`

function Content({ content: {id, header, body}}) {
    return (
        <ContentDiv className='content'>
          <ContentHeader>{header}</ContentHeader>
          <p>{body}</p>
        </ContentDiv>
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