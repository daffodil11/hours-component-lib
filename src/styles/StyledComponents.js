import styled from 'styled-components';

export const InfoCard = styled.div`
background-color: rgba(255, 255, 255, 0.8);
color: #333;
padding: 35px;
`
export const InfoHeading = styled.h1`
margin-bottom: 10px;
`

export const InfoSubHeading = styled.h3`
margin-top: 10px;
margin-bottom: 0px;
`

export const InfoBody = styled.p`
margin-top: 5px;
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

const SlideButton = styled.button`
box-sizing: border-box;
border: 2px solid #ccc
background-color: rgba(200,200,200,0.25);
color: #ccc;
cursor: pointer;
padding:13px 15px;
border-radius: 50%;
position: absolute;
bottom: 30px;
outline: none;
:hover {
    background-color: #ccc;
    color: #fff;
}
`

export const LeftButton = styled(SlideButton)`
content: "<";
left: 30px;
`

export const RightButton = styled(SlideButton)`
content: ">";
right: 30px;
`