import styled from 'styled-components';

export const InfoCard = styled.div`
background-color: rgba(255, 255, 255, 0.8);
color: #333;
padding: 35px;
`
export const InfoHeader = styled.h1`
margin-bottom: 10px;
`

export const Slide = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: ${props => `url(${props.image})`};
background-size: contain;
background-repeat: no-repeat;
background-origin: border-box;
background-position: right;
`

export const SlideInfoCard = styled(InfoCard)`
position: absolute;
bottom: 70px;
width: 600px;
`