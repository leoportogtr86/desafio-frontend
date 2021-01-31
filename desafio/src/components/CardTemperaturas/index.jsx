import React from 'react'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { Cidade } from '../CapitaisCard/index'
import { Row, Container } from '../Layout/index'



export const Title = styled.h3`

    color: #585555;
    margin-left: 40px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 28px;
    font-family: sans-serif;
    

    @media screen and (max-width: 400px){
         
             
        font-size: 18px;    
    }

`

const Icon = styled.div`

    margin: 10px;
    float: right; 
    
    &:hover{

        cursor: pointer;
    }


`
export default props => {



    return (

        <Container>

            <Icon>
                <IoMdClose color="#f78b05" size={24} />
            </Icon>

            <Cidade>Niterói, RJ - Brasil</Cidade>

            <Title>20°C Nublado</Title>

            <Row>


            </Row>

        </Container>
    )
}