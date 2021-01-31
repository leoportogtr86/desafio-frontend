import React, { useState } from 'react'
import styled from 'styled-components'
import If from '../If/index'


let isDesktop = true



export const Title = styled.h3`

    color: white;
    margin-left: 40px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 28px;
    font-family: sans-serif;
    

    @media screen and (max-width: 400px){
         
             
        font-size: 18px;    

        ${isDesktop == false}


    }

`


export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media screen and (max-width: 621px) {
    
        flex-wrap: wrap; 
        ${isDesktop == false}


    }
  
`

export const RowStart = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    
    @media screen and (max-width: 621px) {
    
        flex-wrap: wrap; 
        justify-content: center;
        align-items: center;
        padding: 5px;
        ${isDesktop == false}


    }
  
`


export const Col = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px;

    @media screen and (max-width: 620px){
    
        flex-wrap: wrap; 
        margin: 0;
        ${isDesktop == false}


    }

`

export const Label = styled.p`

    font-size: 13px;
    font-weight: bold;
    color: #4d4949;
    margin-right: 20px;
    margin-left: 0px;
    padding:0;
    font-family: 'Times New Roman', Times, serif;

`

export const Temperatura = styled.p`
    
    font-size: 13px;
    font-weight: bold;
    color: #1a1818;
    margin: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`

export const Cidade = styled.p`

    font-size: 13px;
    font-weight: bold;
    color: #312e2e;
    margin: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`


export default props => {

    return (

        <div>

            <Title>
                Capitais
            </Title>

            <Row>

                <Col>

                    <RowStart>
                        <Label>Min.</Label>
                        <Label>Máx.</Label>
                    </RowStart>

                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>



                </Col>

                <Col>


                    <RowStart>


                        <If teste={isDesktop}>

                            <Label>Min.</Label>
                            <Label>Máx.</Label>

                        </If>


                    </RowStart>



                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>



                </Col>
            </Row>




        </div>
    )
}