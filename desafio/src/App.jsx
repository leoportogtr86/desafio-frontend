import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'
import Titulo from './components/Titulo/index'
import CapitaisCard from './components/CapitaisCard/index'


const Row = styled.div`

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     width: 100%;
`

const Line = styled.div`

    width: 340px;
    height: 1px;
    background-color: white;
    text-align: center;
    margin: auto;
    margin-top: 40px;


     @media screen and (max-width: 400px){

         width: 400px;
     }


`




export default props => {

    return (

        <div>


            <Row>
                <Titulo title="Previsão do tempo" />

            </Row>

            <Row>

                <Input />

            </Row>

            <Row>

                <Line />

            </Row>

            <Row>

                <CapitaisCard />


            </Row>






        </div>
    )
}