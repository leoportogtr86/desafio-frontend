import React from 'react'
import styled from 'styled-components'
import Input from './components/Input'
import Titulo from './components/Titulo/index'
import CapitaisCard from './components/CapitaisCard/index'
import CardTemperaturas from './components/CardTemperaturas/index'
import If from './components/If/index'
import { Row, Line } from './components/Layout/index'






export default props => {

    return (

        <div>
            <Row>
                <Titulo title="Previsão do tempo" />

            </Row>

            <Row>
                <CardTemperaturas />
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