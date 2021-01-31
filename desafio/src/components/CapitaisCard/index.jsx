import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import If from '../If/index'




export const Title = styled.h3`

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


export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media screen and (max-width: 621px) {
    
        flex-wrap: wrap; 


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

    const [isDesktop, setIsDesktop] = useState(true)
    const [widthScreen, setWidthScreen] = useState(window.outerWidth)




    console.log(window.outerWidth)

    function verificaTela() {

        console.log('verificando tamanho da tela')

        if (widthScreen < 615) {

            setIsDesktop(false)

        }

    }

    useEffect(() => {


        verificaTela()
        setWidthScreen(window.outerWidth)
        console.log(widthScreen)


    }, [widthScreen])





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