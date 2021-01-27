import React from 'react'
import styled from 'styled-components'



const Title = styled.h3`

    color: white;
    margin-left: 40px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 28px;
    font-family: sans-serif;
    

    @media screen and (max-width: 400px){
         
             
        font-size: 18px;    
    }

`


const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media screen and (max-width: 555px) {
    
        flex-wrap: wrap; 

    }


  
`

const Col = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px;

    @media screen and (max-width: 400px){
    
        flex-wrap: wrap; 

    }

`

const Label = styled.p`

    font-size: 13px;
    font-weight: bold;
    color: #4d4949;
    margin-right: 10px;
    margin-left: 5px;
    font-family: 'Times New Roman', Times, serif;

`

const Temperatura = styled.p`
    
    font-size: 13px;
    font-weight: bold;
    color: #1a1818;
    margin: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`

const Cidade = styled.p`

    font-size: 13px;
    font-weight: bold;
    color: #1a1818;
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

                    <Row>
                        <Label>Min.</Label>
                        <Label>Máx.</Label>
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
                    <Row>
                        <Temperatura>18°</Temperatura>
                        <Temperatura>27°</Temperatura>
                        <Cidade>Rio de Janeiro</Cidade>
                    </Row>



                </Col>

                <Col>

                    <Row>
                        <Label>Min.</Label>
                        <Label>Máx.</Label>
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