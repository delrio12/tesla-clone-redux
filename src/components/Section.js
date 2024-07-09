import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Section(props) {
    return (
        <Container bgImage={ props.backgroundImg }>
            <Fade bottom>
                <ItemText>
                    <h1>{ props.title }</h1>
                    <p>{ props.description }</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{ props.leftBtnText }</LeftButton>
                        { props.rightBtnText &&
                            <RightButton>{ props.rightBtnText }</RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
                
            
        </Container>
    )
}

export default Section

const Container = styled.div`
   
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between; 
    
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;

`


const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;    
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
    
`
// styled() is used to copy one element's style and apply it to the other 
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;

`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div``
